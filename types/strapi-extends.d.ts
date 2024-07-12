import '@strapi/strapi';

declare module '@strapi/strapi' {
  namespace Strapi {
    interface CollectionType {
      pluginOptions?: {
        'content-manager'?: { visible: boolean };
        'content-type-builder'?: { visible: boolean };
      };
    }
  }
}