function calcularImpuesto(monto, tipo) {
  if (typeof monto !== 'number' || monto < 0) return 0;

  switch (tipo) {
    case 'IVA':       // 13%
      return monto * 0.13;
    case 'IT':        // 3%
      return monto * 0.03;
  }
}

module.exports = { calcularImpuesto };
