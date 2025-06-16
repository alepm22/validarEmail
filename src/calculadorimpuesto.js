function calcularImpuesto(monto, tipo) {
  if (typeof monto !== 'number' || monto < 0) return 0;

  switch (tipo) {
    case 'IVA':       // 13%
      return monto * 0.13;
    case 'IT':        // 3%
      return monto * 0.03;
    case 'RC-IVA':    // 13% sobre el 50% del monto
      return (monto * 0.5) * 0.13;
    default:
      return 0; // tipo de impuesto desconocido
  }
}

module.exports = { calcularImpuesto };
