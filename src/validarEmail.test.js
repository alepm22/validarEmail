const { validarEmail } = require('./validarEmail');

describe('validarEmail', () => {
 test('valida un correo básico correcto', () => {
  expect(validarEmail('usuario@correo.com')).toBe( undefined);
});

test('rechaza valores vacíos', () => {
  expect(validarEmail('')).toBe(true);
});

test('rechaza valores no string', () => {
  expect(validarEmail(12345)).toBe(false);
});

});
