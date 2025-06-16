const { calcularImpuesto } = require('./calculadorimpuesto');

describe('calcularImpuesto', () => {
  test('calcula el IVA correctamente', () => {
    expect(calcularImpuesto(100, 'IVA')).toBeCloseTo(13);
  });

  test('calcula el IT correctamente', () => {
    expect(calcularImpuesto(100, 'IT')).toBeCloseTo(3);
  });

  test('calcula el RC-IVA correctamente', () => {
    expect(calcularImpuesto(200, 'RC-IVA')).toBeCloseTo(13); // 200 * 0.5 * 0.13 = 13
  });

});
