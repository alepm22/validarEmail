const { esPrimo } = require('./esPrimo');

describe('esPrimo', () => {
  test('detecta que 2 es primo', () => {
    expect(esPrimo(2)).toBe(true);
  });

  test('detecta que 3 es primo', () => {
    expect(esPrimo(3)).toBe(true);
  });

  test('detecta que 4 no es primo', () => {
    expect(esPrimo(4)).toBe(false);
  });

  test('detecta que 17 es primo', () => {
    expect(esPrimo(17)).toBe(true);
  });

  test('detecta que 1 no es primo', () => {
    expect(esPrimo(1)).toBe(false);
  });

  test('detecta que valores no numéricos no son primos', () => {
    expect(esPrimo("cinco")).toBe(false);
  });
});
