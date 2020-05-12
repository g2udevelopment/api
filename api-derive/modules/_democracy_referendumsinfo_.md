[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/referendumsInfo"](_democracy_referendumsinfo_.md)

# Module: "democracy/referendumsInfo"

## Index

### Functions

* [_referendumInfo](_democracy_referendumsinfo_.md#_referenduminfo)
* [_referendumVotes](_democracy_referendumsinfo_.md#_referendumvotes)
* [_referendumsVotes](_democracy_referendumsinfo_.md#_referendumsvotes)
* [referendumsInfo](_democracy_referendumsinfo_.md#referendumsinfo)

## Functions

###  _referendumInfo

▸ **_referendumInfo**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/democracy/referendumsInfo.ts:121](https://github.com/polkadot-js/api/blob/0c5b69bea1/packages/api-derive/src/democracy/referendumsInfo.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`index`: BN, `info`: Option‹ReferendumInfo | ReferendumInfoTo239›): *Observable‹DeriveReferendum | null›*

**Parameters:**

Name | Type |
------ | ------ |
`index` | BN |
`info` | Option‹ReferendumInfo &#124; ReferendumInfoTo239› |

___

###  _referendumVotes

▸ **_referendumVotes**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/democracy/referendumsInfo.ts:94](https://github.com/polkadot-js/api/blob/0c5b69bea1/packages/api-derive/src/democracy/referendumsInfo.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`referendum`: DeriveReferendum): *Observable‹DeriveReferendumVotes›*

**Parameters:**

Name | Type |
------ | ------ |
`referendum` | DeriveReferendum |

___

###  _referendumsVotes

▸ **_referendumsVotes**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/democracy/referendumsInfo.ts:109](https://github.com/polkadot-js/api/blob/0c5b69bea1/packages/api-derive/src/democracy/referendumsInfo.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`referendums`: DeriveReferendum[]): *Observable‹DeriveReferendumVotes[]›*

**Parameters:**

Name | Type |
------ | ------ |
`referendums` | DeriveReferendum[] |

___

###  referendumsInfo

▸ **referendumsInfo**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/democracy/referendumsInfo.ts:138](https://github.com/polkadot-js/api/blob/0c5b69bea1/packages/api-derive/src/democracy/referendumsInfo.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`ids`: BN[]): *Observable‹DeriveReferendum[]›*

**Parameters:**

Name | Type |
------ | ------ |
`ids` | BN[] |
