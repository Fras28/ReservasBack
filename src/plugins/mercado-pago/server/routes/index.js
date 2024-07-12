module.exports = [
  {
    method: 'POST',
    path: '/create-payment',
    handler: 'mercadoPago.createPayment',
    config: {
      policies: [],
      auth: false,
    },
  },
  // ... otras rutas
];