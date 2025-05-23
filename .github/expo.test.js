// expo.test.js
import { exponentielle } from '../expo';
import { describe, test, expect } from '@jest/globals';

describe('exponentielle', () => {
  test('2^3 retourne 8', () => {
    expect(exponentielle(2, 3)).toBe(8);
  });

  test('5^2 retourne 25', () => {
    expect(exponentielle(5, 2)).toBe(25);
  });

  test('10^0 retourne 1', () => {
    expect(exponentielle(10, 0)).toBe(1);
  });

  test('0^5 retourne 0', () => {
    expect(exponentielle(0, 5)).toBe(0);
  });

  test('2^-2 retourne 0.25', () => {
    expect(exponentielle(2, -2)).toBe(0.25);
  });

  test('0^0 retourne 1 (comportement de Math.pow)', () => {
    expect(exponentielle(0, 0)).toBe(1);
  });
});
