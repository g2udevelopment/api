[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["augment/consts"](../modules/_augment_consts_.md) › ["metadata/Decorated/consts/types"](../modules/_augment_consts_._metadata_decorated_consts_types_.md) › [Constants](_augment_consts_._metadata_decorated_consts_types_.constants.md)

# Interface: Constants

## Hierarchy

* **Constants**

## Indexable

* \[ **index**: *string*\]: ModuleConstants

## Index

### Properties

* [babe](_augment_consts_._metadata_decorated_consts_types_.constants.md#babe)
* [balances](_augment_consts_._metadata_decorated_consts_types_.constants.md#balances)
* [contracts](_augment_consts_._metadata_decorated_consts_types_.constants.md#contracts)
* [democracy](_augment_consts_._metadata_decorated_consts_types_.constants.md#democracy)
* [elections](_augment_consts_._metadata_decorated_consts_types_.constants.md#elections)
* [finalityTracker](_augment_consts_._metadata_decorated_consts_types_.constants.md#finalitytracker)
* [identity](_augment_consts_._metadata_decorated_consts_types_.constants.md#identity)
* [society](_augment_consts_._metadata_decorated_consts_types_.constants.md#society)
* [staking](_augment_consts_._metadata_decorated_consts_types_.constants.md#staking)
* [system](_augment_consts_._metadata_decorated_consts_types_.constants.md#system)
* [timestamp](_augment_consts_._metadata_decorated_consts_types_.constants.md#timestamp)
* [transactionPayment](_augment_consts_._metadata_decorated_consts_types_.constants.md#transactionpayment)
* [treasury](_augment_consts_._metadata_decorated_consts_types_.constants.md#treasury)
* [vesting](_augment_consts_._metadata_decorated_consts_types_.constants.md#vesting)

## Properties

###  babe

• **babe**: *object*

*Defined in [api/src/augment/consts.ts:13](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L13)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **epochDuration**: *AugmentedConst‹u64›*

* **expectedBlockTime**: *AugmentedConst‹Moment›*

___

###  balances

• **balances**: *object*

*Defined in [api/src/augment/consts.ts:29](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L29)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **existentialDeposit**: *AugmentedConst‹Balance›*

___

###  contracts

• **contracts**: *object*

*Defined in [api/src/augment/consts.ts:36](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L36)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **maxDepth**: *AugmentedConst‹u32›*

* **maxValueSize**: *AugmentedConst‹u32›*

* **rentByteFee**: *AugmentedConst‹BalanceOf›*

* **rentDepositOffset**: *AugmentedConst‹BalanceOf›*

* **signedClaimHandicap**: *AugmentedConst‹BlockNumber›*

* **storageSizeOffset**: *AugmentedConst‹u32›*

* **surchargeReward**: *AugmentedConst‹BalanceOf›*

* **tombstoneDeposit**: *AugmentedConst‹BalanceOf›*

___

###  democracy

• **democracy**: *object*

*Defined in [api/src/augment/consts.ts:83](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L83)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **cooloffPeriod**: *AugmentedConst‹BlockNumber›*

* **enactmentPeriod**: *AugmentedConst‹BlockNumber›*

* **fastTrackVotingPeriod**: *AugmentedConst‹BlockNumber›*

* **launchPeriod**: *AugmentedConst‹BlockNumber›*

* **minimumDeposit**: *AugmentedConst‹BalanceOf›*

* **preimageByteDeposit**: *AugmentedConst‹BalanceOf›*

* **votingPeriod**: *AugmentedConst‹BlockNumber›*

___

###  elections

• **elections**: *object*

*Defined in [api/src/augment/consts.ts:118](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L118)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **candidacyBond**: *AugmentedConst‹BalanceOf›*

* **desiredMembers**: *AugmentedConst‹u32›*

* **desiredRunnersUp**: *AugmentedConst‹u32›*

* **moduleId**: *AugmentedConst‹LockIdentifier›*

* **termDuration**: *AugmentedConst‹BlockNumber›*

* **votingBond**: *AugmentedConst‹BalanceOf›*

___

###  finalityTracker

• **finalityTracker**: *object*

*Defined in [api/src/augment/consts.ts:127](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L127)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **reportLatency**: *AugmentedConst‹BlockNumber›*

* **windowSize**: *AugmentedConst‹BlockNumber›*

___

###  identity

• **identity**: *object*

*Defined in [api/src/augment/consts.ts:138](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L138)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **basicDeposit**: *AugmentedConst‹BalanceOf›*

* **fieldDeposit**: *AugmentedConst‹BalanceOf›*

* **maxAdditionalFields**: *AugmentedConst‹u32›*

* **maxRegistrars**: *AugmentedConst‹u32›*

* **maxSubAccounts**: *AugmentedConst‹u32›*

* **subAccountDeposit**: *AugmentedConst‹BalanceOf›*

___

###  society

• **society**: *object*

*Defined in [api/src/augment/consts.ts:169](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L169)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **candidateDeposit**: *AugmentedConst‹BalanceOf›*

* **challengePeriod**: *AugmentedConst‹BlockNumber›*

* **maxStrikes**: *AugmentedConst‹u32›*

* **moduleId**: *AugmentedConst‹ModuleId›*

* **periodSpend**: *AugmentedConst‹BalanceOf›*

* **rotationPeriod**: *AugmentedConst‹BlockNumber›*

* **wrongSideDeduction**: *AugmentedConst‹BalanceOf›*

___

###  staking

• **staking**: *object*

*Defined in [api/src/augment/consts.ts:202](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L202)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **bondingDuration**: *AugmentedConst‹EraIndex›*

* **sessionsPerEra**: *AugmentedConst‹SessionIndex›*

___

###  system

• **system**: *object*

*Defined in [api/src/augment/consts.ts:213](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L213)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **blockExecutionWeight**: *AugmentedConst‹Weight›*

* **blockHashCount**: *AugmentedConst‹BlockNumber›*

* **dbWeight**: *AugmentedConst‹RuntimeDbWeight›*

* **extrinsicBaseWeight**: *AugmentedConst‹Weight›*

* **maximumBlockLength**: *AugmentedConst‹u32›*

* **maximumBlockWeight**: *AugmentedConst‹Weight›*

___

###  timestamp

• **timestamp**: *object*

*Defined in [api/src/augment/consts.ts:240](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L240)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **minimumPeriod**: *AugmentedConst‹Moment›*

___

###  transactionPayment

• **transactionPayment**: *object*

*Defined in [api/src/augment/consts.ts:250](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L250)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **transactionByteFee**: *AugmentedConst‹BalanceOf›*

___

###  treasury

• **treasury**: *object*

*Defined in [api/src/augment/consts.ts:257](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L257)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **burn**: *AugmentedConst‹Permill›*

* **moduleId**: *AugmentedConst‹ModuleId›*

* **proposalBond**: *AugmentedConst‹Permill›*

* **proposalBondMinimum**: *AugmentedConst‹BalanceOf›*

* **spendPeriod**: *AugmentedConst‹BlockNumber›*

* **tipCountdown**: *AugmentedConst‹BlockNumber›*

* **tipFindersFee**: *AugmentedConst‹Percent›*

* **tipReportDepositBase**: *AugmentedConst‹BalanceOf›*

* **tipReportDepositPerByte**: *AugmentedConst‹BalanceOf›*

___

###  vesting

• **vesting**: *object*

*Defined in [api/src/augment/consts.ts:297](https://github.com/polkadot-js/api/blob/393f46ba4a/packages/api/src/augment/consts.ts#L297)*

#### Type declaration:

* \[ **index**: *string*\]: AugmentedConst‹object & Codec›

* **minVestedTransfer**: *AugmentedConst‹BalanceOf›*
