package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateSentPost = "create_sent_post"
	TypeMsgUpdateSentPost = "update_sent_post"
	TypeMsgDeleteSentPost = "delete_sent_post"
)

var _ sdk.Msg = &MsgCreateSentPost{}

func NewMsgCreateSentPost(creator string, postID string, title string, chain string, creatorNoMessage string) *MsgCreateSentPost {
	return &MsgCreateSentPost{
		Creator:          creator,
		PostID:           postID,
		Title:            title,
		Chain:            chain,
		CreatorNoMessage: creatorNoMessage,
	}
}

func (msg *MsgCreateSentPost) Route() string {
	return RouterKey
}

func (msg *MsgCreateSentPost) Type() string {
	return TypeMsgCreateSentPost
}

func (msg *MsgCreateSentPost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSentPost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSentPost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSentPost{}

func NewMsgUpdateSentPost(creator string, id uint64, postID string, title string, chain string, creatorNoMessage string) *MsgUpdateSentPost {
	return &MsgUpdateSentPost{
		Id:               id,
		Creator:          creator,
		PostID:           postID,
		Title:            title,
		Chain:            chain,
		CreatorNoMessage: creatorNoMessage,
	}
}

func (msg *MsgUpdateSentPost) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSentPost) Type() string {
	return TypeMsgUpdateSentPost
}

func (msg *MsgUpdateSentPost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSentPost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSentPost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSentPost{}

func NewMsgDeleteSentPost(creator string, id uint64) *MsgDeleteSentPost {
	return &MsgDeleteSentPost{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSentPost) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSentPost) Type() string {
	return TypeMsgDeleteSentPost
}

func (msg *MsgDeleteSentPost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSentPost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSentPost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
