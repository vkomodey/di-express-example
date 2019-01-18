'use strict';

let { Router } = require('express');
let { makeInvoker } = require('awilix-express');

let router = new Router();

function makeApi({ paymentService, scope }) {
    return {
        getById: (req, res) => {
            res.send('Not implemented')
        },

        save: async (req, res) => {
            let result = await paymentService.createPayment(req.body);

            res.send({ result, scope });
        }
    }
}

let api = makeInvoker(makeApi);

router.get('/:id', api('getById'));
router.post('/', api('save'));

module.exports = router;
