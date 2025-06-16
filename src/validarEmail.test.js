const { validarEmail } = require('./validarEmail');

describe('validarEmail', () => {
  test('valida un correo básico correcto', () => {
    expect(validarEmail('usuario@correo.com')).toBe(true);
  });

  test('rechaza un correo sin arroba', () => {
    expect(validarEmail('usuariocorreo.com')).toBe(false);
  });

  test('rechaza un correo sin dominio', () => {
    expect(validarEmail('usuario@')).toBe(false);
  });

  test('rechaza valores vacíos', () => {
    expect(validarEmail('')).toBe(false);
  });

  test('rechaza valores no string', () => {
    expect(validarEmail(12345)).toBe(false);
  });

  test('valida un correo con subdominios', () => {
    expect(validarEmail('test@sub.dominio.com')).toBe(true);
  });
});
