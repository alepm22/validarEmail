function esPrimo(numero) {
  if (typeof numero !== 'number' || numero < 2) return false;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }

  return true;
}

module.exports = { esPrimo };
