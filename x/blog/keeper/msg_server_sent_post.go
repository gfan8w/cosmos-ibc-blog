package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"planet/x/blog/types"
)

func (k msgServer) CreateSentPost(goCtx context.Context, msg *types.MsgCreateSentPost) (*types.MsgCreateSentPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var sentPost = types.SentPost{
		Creator:          msg.Creator,
		PostID:           msg.PostID,
		Title:            msg.Title,
		Chain:            msg.Chain,
		CreatorNoMessage: msg.CreatorNoMessage,
	}

	id := k.AppendSentPost(
		ctx,
		sentPost,
	)

	return &types.MsgCreateSentPostResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateSentPost(goCtx context.Context, msg *types.MsgUpdateSentPost) (*types.MsgUpdateSentPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var sentPost = types.SentPost{
		Creator:          msg.Creator,
		Id:               msg.Id,
		PostID:           msg.PostID,
		Title:            msg.Title,
		Chain:            msg.Chain,
		CreatorNoMessage: msg.CreatorNoMessage,
	}

	// Checks that the element exists
	val, found := k.GetSentPost(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetSentPost(ctx, sentPost)

	return &types.MsgUpdateSentPostResponse{}, nil
}

func (k msgServer) DeleteSentPost(goCtx context.Context, msg *types.MsgDeleteSentPost) (*types.MsgDeleteSentPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetSentPost(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSentPost(ctx, msg.Id)

	return &types.MsgDeleteSentPostResponse{}, nil
}
