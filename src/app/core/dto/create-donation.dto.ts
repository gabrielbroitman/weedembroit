export class CreateDonationDTO {
    userId: string
    cpf: string
    fullName: string
    paymentMethod;
    campaignId;
    amount;
    cardNumber;
    cardHolderName;
    cardExpirationDate;
    cardCvv;
}