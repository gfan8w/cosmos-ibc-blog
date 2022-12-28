package blog

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"planet/testutil/sample"
	blogsimulation "planet/x/blog/simulation"
	"planet/x/blog/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = blogsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateSentPost = "op_weight_msg_sent_post"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateSentPost int = 100

	opWeightMsgUpdateSentPost = "op_weight_msg_sent_post"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateSentPost int = 100

	opWeightMsgDeleteSentPost = "op_weight_msg_sent_post"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteSentPost int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	blogGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		SentPostList: []types.SentPost{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		SentPostCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&blogGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateSentPost int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateSentPost, &weightMsgCreateSentPost, nil,
		func(_ *rand.Rand) {
			weightMsgCreateSentPost = defaultWeightMsgCreateSentPost
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateSentPost,
		blogsimulation.SimulateMsgCreateSentPost(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateSentPost int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateSentPost, &weightMsgUpdateSentPost, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateSentPost = defaultWeightMsgUpdateSentPost
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateSentPost,
		blogsimulation.SimulateMsgUpdateSentPost(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteSentPost int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteSentPost, &weightMsgDeleteSentPost, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteSentPost = defaultWeightMsgDeleteSentPost
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteSentPost,
		blogsimulation.SimulateMsgDeleteSentPost(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
