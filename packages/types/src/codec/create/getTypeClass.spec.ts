// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor } from '../../types';

import { getTypeClass, TypeRegistry } from '.';

describe('getTypeClass', (): void => {
  const registry = new TypeRegistry();

  it('does not allow invalid types', (): void => {
    expect(
      (): Constructor<Codec> => getTypeClass(registry, 'SomethingInvalid' as any)
    ).toThrow(/determine type/);
  });
});
