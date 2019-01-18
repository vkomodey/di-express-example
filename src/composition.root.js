'use strict';

let { asClass, asValue, createContainer } = require('awilix');
let { scopePerRequest } = require('awilix-express');
let PaymentService = require('src/modules/payments/service');
let PaymentRepository = require('src/modules/payments/repository');

module.exports = (app) => {
    let container = createContainer();

    container.register({
        paymentService: asClass(PaymentService).scoped(),
        paymentRepository: asClass(PaymentRepository).scoped(),
    });

    app.use(scopePerRequest(container));
}
