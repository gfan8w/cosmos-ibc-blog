package keeper

import (
	"errors"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v5/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v5/modules/core/24-host"
	"planet/x/blog/types"
)

// TransmitUpdatePostPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitUpdatePostPacket(
	ctx sdk.Context,
	packetData types.UpdatePostPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) error {

	sourceChannelEnd, found := k.ChannelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.ChannelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, sourceChannel,
		)
	}

	channelCap, ok := k.ScopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: "+err.Error())
	}

	packet := channeltypes.NewPacket(
		packetBytes,
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		timeoutHeight,
		timeoutTimestamp,
	)

	if err := k.ChannelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}

// OnRecvUpdatePostPacket processes packet reception
func (k Keeper) OnRecvUpdatePostPacket(ctx sdk.Context, packet channeltypes.Packet, data types.UpdatePostPacketData) (packetAck types.UpdatePostPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// 修改逻辑
	// 检查传过来的PostID是不是乱传的
	Id, err := strconv.ParseUint(data.PostID, 10, 64)
	if err != nil {
		return packetAck, errors.New("PostID is Error")
	}

	// 检查博文是否存在
	_, found := k.GetPost(ctx, Id)
	if !found {
		return packetAck, errors.New("Blog is not exit!")
	}

	// 更新博文
	k.SetPost(
		ctx,
		types.Post{
			Id:      Id,
			Creator: packet.SourcePort + "-" + packet.SourceChannel + "-" + data.Creator,
			Title:   data.Title,
			Content: data.Content,
		},
	)
	return packetAck, nil
}

// OnAcknowledgementUpdatePostPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementUpdatePostPacket(ctx sdk.Context, packet channeltypes.Packet, data types.UpdatePostPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.UpdatePostPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// 记录已经确认的消息
		k.AppendSentPost(
			ctx,
			types.SentPost{
				Creator: data.Creator,
				PostID:  packetAck.PostID,
				Title:   data.Title,
				Chain:   packet.DestinationPort + "-" + packet.DestinationChannel,
			},
		)

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutUpdatePostPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutUpdatePostPacket(ctx sdk.Context, packet channeltypes.Packet, data types.UpdatePostPacketData) error {

	// 处理超时
	k.AppendTimedoutPost(
		ctx,
		types.TimedoutPost{
			Creator: data.Creator,
			Title:   data.Title,
			Chain:   packet.DestinationPort + "-" + packet.DestinationChannel,
		},
	)

	return nil
}