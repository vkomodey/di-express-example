'use strict';

let { Router } = require('express');
let { asValue } = require('awilix');
let paymentRouter = require('src/modules/payments/router');

let appRouter = new Router();

appRouter.use(function auth(req, res, next) {
    let userIdentificator = req.get('user-identity');
    let appIdentificator = req.get('app-identity');

    req.container.register({
        scope: asValue({
            id: userIdentificator,
            appId: appIdentificator,
            firstName: `${userIdentificator}-first-name`,
            lastName: `${userIdentificator}-last-name`
        })
    });

    next();
});

appRouter.use('/payments', paymentRouter);

module.exports = appRouter;
