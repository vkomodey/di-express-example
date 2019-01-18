'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let appRouter = require('src/router');

let app = express();


app.use(bodyParser.json());
require('./composition.root')(app);
app.use('/', appRouter);

app.listen(3000, () => {
    console.log('************************');
    console.log('The server is up and running');
    console.log('Listening the 3000 port');
    console.log('************************');
});
