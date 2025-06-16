function validarEmail(correo) {
  if (typeof correo !== 'string') return false;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

module.exports = { validarEmail };
