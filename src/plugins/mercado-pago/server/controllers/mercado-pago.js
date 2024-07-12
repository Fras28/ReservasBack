'use strict';

module.exports = {
  createPayment: async (ctx) => {
    try {
      const paymentData = ctx.request.body;
      const mercadoPagoService = strapi.plugin('mercado-pago').service('mercadoPago');
      const payment = await mercadoPagoService.createPayment(paymentData);
      ctx.send({ success: true, payment });
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  getPaymentStatus: async (ctx) => {
    try {
      const { id } = ctx.params;
      const mercadoPagoService = strapi.plugin('mercado-pago').service('mercadoPago');
      const status = await mercadoPagoService.getPaymentStatus(id);
      ctx.send({ success: true, status });
    } catch (error) {
      ctx.throw(500, error);
    }
  }
};