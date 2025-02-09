/* eslint-disable no-undef */
// Edited by me
const {
  nextInteger,
  times,
  add,
  subtract,
  divide,
  modulus,
} = require('../src/stmnts-01');

test('nextInteger', () => {
  // Integer tests
  expect(nextInteger(1)).toBe(2);
  expect(nextInteger(2)).toBe(3);
  expect(nextInteger(13)).toBe(14);
  expect(nextInteger(-14)).toBe(-13);
  // Floating point test
  expect(nextInteger(3.5)).toBeCloseTo(4.5);
});

test('times', () => {
  // Integer tests
  expect(times(2, 3)).toBe(6);
  expect(times(3, 3)).toBe(9);
  expect(times(0, 3)).toBe(0);
  expect(times(-5, 4)).toBe(-20);
  // Floating point tests
  expect(times(2.5, 4)).toBeCloseTo(10);
  expect(times(1.2, 3.4)).toBeCloseTo(4.08);
});

test('add', () => {
  // Integer tests
  expect(add(1, 2)).toBe(3);
  expect(add(-1, -1)).toBe(-2);
  expect(add(5, 0)).toBe(5);
  // Floating point tests
  expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  expect(add(-2.5, 5.5)).toBeCloseTo(3.0);
});

test('subtract', () => {
  // Integer tests
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(3, 5)).toBe(-2);
  expect(subtract(0, 5)).toBe(-5);
  // Floating point tests
  expect(subtract(2.5, 1.2)).toBeCloseTo(1.3);
  expect(subtract(1.1, 2.2)).toBeCloseTo(-1.1);
});

test('divide', () => {
  // Integer tests
  expect(divide(10, 2)).toBe(5);
  expect(divide(7, 2)).toBeCloseTo(3.5);
  expect(divide(-10, 2)).toBe(-5);
  expect(divide(10, -2)).toBe(-5);
  expect(divide(0, 5)).toBe(0);
  // Floating point tests
  expect(divide(5.5, 2.2)).toBeCloseTo(2.5);
  expect(divide(7.7, 3.1)).toBeCloseTo(2.48387, 5);
  // Division by zero
  expect(divide(5, 0)).toBeNaN();
});

test('modulus', () => {
  // Integer tests
  expect(modulus(10, 3)).toBe(1);
  expect(modulus(10, 2)).toBe(0);
  // Note: In JavaScript, -10 % 3 equals -1.
  expect(modulus(-10, 3)).toBe(-1);
  // Floating point tests
  expect(modulus(5.5, 2)).toBeCloseTo(1.5);
  expect(modulus(10.2, 3.1)).toBeCloseTo(10.2 % 3.1);
});
