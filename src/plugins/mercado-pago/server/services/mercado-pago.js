// En /src/plugins/mercado-pago/services/mercado-pago.js
const mercadopago = require('mercadopago');

module.exports = ({ strapi }) => ({
  initialize() {
    const { accessToken } = strapi.config.get('plugin.mercado-pago');
    // Mercadopago ya no usa 'configure', el token se pasa directamente en las operaciones
  },

  async createPayment(paymentData) {
    try {
      const { accessToken } = strapi.config.get('plugin.mercado-pago');
      const response = await new mercadopago.Payment({
        accessToken: accessToken
      }).create(paymentData);
      return response.body;
    } catch (error) {
      strapi.log.error('Error al crear el pago en Mercado Pago:', error);
      throw error;
    }
  },

  async getPaymentStatus(paymentId) {
    try {
      const { accessToken } = strapi.config.get('plugin.mercado-pago');
      const response = await new mercadopago.Payment({
        accessToken: accessToken
      }).get(paymentId);
      return response.body.status;
    } catch (error) {
      strapi.log.error('Error al obtener el estado del pago:', error);
      throw error;
    }
  }
});