package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"planet/x/blog/types"
)

func CmdCreateSentPost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-sent-post [post-id] [title] [chain] [creator--no-message]",
		Short: "Create a new sentPost",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPostID := args[0]
			argTitle := args[1]
			argChain := args[2]
			argCreatorNoMessage := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSentPost(clientCtx.GetFromAddress().String(), argPostID, argTitle, argChain, argCreatorNoMessage)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSentPost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-sent-post [id] [post-id] [title] [chain] [creator--no-message]",
		Short: "Update a sentPost",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argPostID := args[1]

			argTitle := args[2]

			argChain := args[3]

			argCreatorNoMessage := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSentPost(clientCtx.GetFromAddress().String(), id, argPostID, argTitle, argChain, argCreatorNoMessage)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSentPost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-sent-post [id]",
		Short: "Delete a sentPost by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSentPost(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
