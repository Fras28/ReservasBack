// En un nuevo archivo, por ejemplo: src/types/mercadopago.d.ts

declare module 'mercadopago' {
    export class Payment {
      constructor(options: { accessToken: string });
      create(data: any): Promise<{ body: any }>;
      get(paymentId: string): Promise<{ body: { status: string } }>;
    }
  }