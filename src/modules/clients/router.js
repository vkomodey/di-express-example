'use strict';

let { Router } = require('express');

let router = new Router();

router.get('/:id', (req, res) => {
    res.send('Not implemented')
});

router.post('/', (req, res) => {
    res.send('Not implemented');
});

module.exports = router;
