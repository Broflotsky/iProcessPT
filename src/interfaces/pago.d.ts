interface PagoInterface {
    amount: number;
    currency: string;
    payments: PaymentDetails[];
}

interface PaymentDetails {
    name: string
    amount: number;
    percent: number;
    currency: string;
    paymentMethod: string;
    limitPaymentDay: string;
    status: boolean;
    paymentDate: string;
}