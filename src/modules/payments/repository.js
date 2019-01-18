'use strict';

let payments = [];

class PaymentRepository {
    constructor() {}

    save(payment) {
        payments.push(payment);

        return payment;
    }
}

module.exports = PaymentRepository;
