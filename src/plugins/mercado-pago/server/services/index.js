'use strict';

const mercadoPago = require('./mercado-pago');

module.exports = (strapi) => ({
  mercadoPago: mercadoPago(strapi),
});