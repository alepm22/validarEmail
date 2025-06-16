function validarEmail(correo) {
  if (typeof correo !== 'string') return false;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

}

module.exports = { validarEmail };
