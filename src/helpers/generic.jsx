export const payInvoice = () => {
    const paymentUrl = import.meta.env.VITE_PAYMENT_URL;
    window.open(paymentUrl, "_blank");
};