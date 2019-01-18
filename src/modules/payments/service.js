'use strict';

class PaymentSerivce {
    constructor({ paymentRepository }) {
        this.paymentRepository = paymentRepository;
    }

    async createPayment(payment) {
        let result = await this.paymentRepository.save(payment);

        return result;
    }
}

module.exports = PaymentSerivce;
