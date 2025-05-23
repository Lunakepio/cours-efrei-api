// modulo.test.js
import { modulo } from './modulo';
import {describe, expect, test} from "@jest/globals";

describe('modulo', () => {
  test('retourne le reste correct pour un tableau de deux nombres', () => {
    expect(modulo([10, 3])).toBe(1);
  });

  test('retourne le reste correct pour un tableau de plusieurs nombres', () => {
    expect(modulo([20, 6, 4])).toBe(2);
  });

  test('retourne le premier élément si le tableau contient un seul élément', () => {
    expect(modulo([5])).toBe(5);
  });

  test('retourne NaN si le tableau contient un zéro', () => {
    expect(modulo([10, 0])).toBeNaN();
  });

  test('retourne NaN pour un tableau vide', () => {
    expect(modulo([])).toBeNaN();
  });
});
