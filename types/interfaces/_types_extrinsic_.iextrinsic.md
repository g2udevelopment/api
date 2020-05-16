[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [IExtrinsic](_types_extrinsic_.iextrinsic.md)

# Interface: IExtrinsic

## Hierarchy

* IExtrinsicSignable‹[IExtrinsic](_types_extrinsic_.iextrinsic.md)›

* ExtrinsicSignatureBase

  ↳ [IMethod](_types_interfaces_.imethod.md)

  ↳ **IExtrinsic**

## Implemented by

* [Extrinsic](../classes/_extrinsic_extrinsic_.extrinsic.md)

## Index

### Properties

* [args](_types_extrinsic_.iextrinsic.md#readonly-args)
* [argsDef](_types_extrinsic_.iextrinsic.md#readonly-argsdef)
* [callIndex](_types_extrinsic_.iextrinsic.md#readonly-callindex)
* [data](_types_extrinsic_.iextrinsic.md#readonly-data)
* [encodedLength](_types_extrinsic_.iextrinsic.md#readonly-encodedlength)
* [era](_types_extrinsic_.iextrinsic.md#readonly-era)
* [hasOrigin](_types_extrinsic_.iextrinsic.md#readonly-hasorigin)
* [hash](_types_extrinsic_.iextrinsic.md#readonly-hash)
* [isEmpty](_types_extrinsic_.iextrinsic.md#readonly-isempty)
* [isSigned](_types_extrinsic_.iextrinsic.md#readonly-issigned)
* [length](_types_extrinsic_.iextrinsic.md#readonly-length)
* [meta](_types_extrinsic_.iextrinsic.md#readonly-meta)
* [method](_types_extrinsic_.iextrinsic.md#readonly-method)
* [nonce](_types_extrinsic_.iextrinsic.md#readonly-nonce)
* [registry](_types_extrinsic_.iextrinsic.md#readonly-registry)
* [signature](_types_extrinsic_.iextrinsic.md#readonly-signature)
* [signer](_types_extrinsic_.iextrinsic.md#readonly-signer)
* [tip](_types_extrinsic_.iextrinsic.md#readonly-tip)
* [type](_types_extrinsic_.iextrinsic.md#readonly-type)
* [version](_types_extrinsic_.iextrinsic.md#readonly-version)

### Methods

* [addSignature](_types_extrinsic_.iextrinsic.md#addsignature)
* [eq](_types_extrinsic_.iextrinsic.md#eq)
* [sign](_types_extrinsic_.iextrinsic.md#sign)
* [signFake](_types_extrinsic_.iextrinsic.md#signfake)
* [toHex](_types_extrinsic_.iextrinsic.md#tohex)
* [toHuman](_types_extrinsic_.iextrinsic.md#tohuman)
* [toJSON](_types_extrinsic_.iextrinsic.md#tojson)
* [toRawType](_types_extrinsic_.iextrinsic.md#torawtype)
* [toString](_types_extrinsic_.iextrinsic.md#tostring)
* [toU8a](_types_extrinsic_.iextrinsic.md#tou8a)

## Properties

### `Readonly` args

• **args**: *[Codec](_types_codec_.codec.md)[]*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[args](_types_interfaces_.imethod.md#readonly-args)*

*Defined in [packages/types/src/types/interfaces.ts:26](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/interfaces.ts#L26)*

___

### `Readonly` argsDef

• **argsDef**: *[ArgsDef](../modules/_types_codec_.md#argsdef)*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[argsDef](_types_interfaces_.imethod.md#readonly-argsdef)*

*Defined in [packages/types/src/types/interfaces.ts:27](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/interfaces.ts#L27)*

___

### `Readonly` callIndex

• **callIndex**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[callIndex](_types_interfaces_.imethod.md#readonly-callindex)*

*Defined in [packages/types/src/types/interfaces.ts:28](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/interfaces.ts#L28)*

___

### `Readonly` data

• **data**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[data](_types_interfaces_.imethod.md#readonly-data)*

*Defined in [packages/types/src/types/interfaces.ts:29](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/interfaces.ts#L29)*

___

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:40](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/codec.ts#L40)*

**`description`** The length of the value when encoded as a Uint8Array

___

### `Readonly` era

• **era**: *[IExtrinsicEra](_types_extrinsic_.iextrinsicera.md)*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[era](_types_extrinsic_.iextrinsicsignature.md#readonly-era)*

*Defined in [packages/types/src/types/extrinsic.ts:70](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L70)*

___

### `Readonly` hasOrigin

• **hasOrigin**: *boolean*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[hasOrigin](_types_interfaces_.imethod.md#readonly-hasorigin)*

*Defined in [packages/types/src/types/interfaces.ts:31](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/interfaces.ts#L31)*

___

### `Readonly` hash

• **hash**: *Hash*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[hash](_types_interfaces_.imethod.md#readonly-hash)*

*Overrides [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)*

*Defined in [packages/types/src/types/interfaces.ts:30](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/interfaces.ts#L30)*

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)*

*Defined in [packages/types/src/types/codec.ts:50](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/codec.ts#L50)*

**`description`** Checks if the value is an empty value

___

### `Readonly` isSigned

• **isSigned**: *boolean*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[isSigned](_types_extrinsic_.iextrinsicsignature.md#readonly-issigned)*

*Defined in [packages/types/src/types/extrinsic.ts:69](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L69)*

___

### `Readonly` length

• **length**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:117](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L117)*

___

### `Readonly` meta

• **meta**: *FunctionMetadataLatest*

*Inherited from [IMethod](_types_interfaces_.imethod.md).[meta](_types_interfaces_.imethod.md#readonly-meta)*

*Defined in [packages/types/src/types/interfaces.ts:32](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/interfaces.ts#L32)*

___

### `Readonly` method

• **method**: *Call*

*Defined in [packages/types/src/types/extrinsic.ts:118](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L118)*

___

### `Readonly` nonce

• **nonce**: *[ICompact](_types_interfaces_.icompact.md)‹Index›*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[nonce](_types_extrinsic_.iextrinsicsignature.md#readonly-nonce)*

*Defined in [packages/types/src/types/extrinsic.ts:71](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L71)*

___

### `Readonly` registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:55](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/codec.ts#L55)*

**`description`** The registry associated with this object

___

### `Readonly` signature

• **signature**: *EcdsaSignature | Ed25519Signature | Sr25519Signature*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[signature](_types_extrinsic_.iextrinsicsignature.md#readonly-signature)*

*Defined in [packages/types/src/types/extrinsic.ts:72](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L72)*

___

### `Readonly` signer

• **signer**: *Address*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[signer](_types_extrinsic_.iextrinsicsignature.md#readonly-signer)*

*Defined in [packages/types/src/types/extrinsic.ts:73](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L73)*

___

### `Readonly` tip

• **tip**: *[ICompact](_types_interfaces_.icompact.md)‹Balance›*

*Inherited from [IExtrinsicSignature](_types_extrinsic_.iextrinsicsignature.md).[tip](_types_extrinsic_.iextrinsicsignature.md#readonly-tip)*

*Defined in [packages/types/src/types/extrinsic.ts:74](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L74)*

___

### `Readonly` type

• **type**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:119](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L119)*

___

### `Readonly` version

• **version**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:120](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L120)*

## Methods

###  addSignature

▸ **addSignature**(`signer`: Address | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `signature`: [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `payload`: [ExtrinsicPayloadValue](_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string): *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

*Inherited from [IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md).[addSignature](_types_extrinsic_.iextrinsicimpl.md#addsignature)*

*Defined in [packages/types/src/types/extrinsic.ts:103](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`signer` | Address &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`signature` | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`payload` | [ExtrinsicPayloadValue](_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:60](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/codec.ts#L60)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  sign

▸ **sign**(`account`: [IKeyringPair](_types_interfaces_.ikeyringpair.md), `options`: [SignatureOptions](_types_extrinsic_.signatureoptions.md)): *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

*Inherited from [IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md).[sign](_types_extrinsic_.iextrinsicimpl.md#sign)*

*Defined in [packages/types/src/types/extrinsic.ts:104](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`account` | [IKeyringPair](_types_interfaces_.ikeyringpair.md) |
`options` | [SignatureOptions](_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

___

###  signFake

▸ **signFake**(`address`: Address | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | string, `options`: [SignatureOptions](_types_extrinsic_.signatureoptions.md)): *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

*Inherited from [IExtrinsicImpl](_types_extrinsic_.iextrinsicimpl.md).[signFake](_types_extrinsic_.iextrinsicimpl.md#signfake)*

*Defined in [packages/types/src/types/extrinsic.ts:105](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/extrinsic.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | Address &#124; [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) &#124; string |
`options` | [SignatureOptions](_types_extrinsic_.signatureoptions.md) |

**Returns:** *[IExtrinsic](_types_extrinsic_.iextrinsic.md)*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:65](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/codec.ts#L65)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:70](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/codec.ts#L70)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:75](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/codec.ts#L75)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:80](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/codec.ts#L80)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:85](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/codec.ts#L85)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:91](https://github.com/polkadot-js/api/blob/f825c7f187/packages/types/src/types/codec.ts#L91)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
