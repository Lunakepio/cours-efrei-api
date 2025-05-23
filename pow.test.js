import { describe, test, expect } from '@jest/globals'

import { Pow } from "./pow";

describe('testing pow function', () => {
  test('2 exponent 2 should be equal 4',() => {
    expect(Pow(2, 2)).toBe(4);
  })
})