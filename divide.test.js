import { Divide } from "./divide";

describe('testing divide function', () => {
  // test('4 / 2 to be 2', () => {
  //   expect(Divide(4, 2)).toBe(2);
  // })
  
  test('4 / 0 to be infinite', () => {
    expect(() => Divide(4, 0)).toThrow('Cannot Divide per Zero');
  })
})