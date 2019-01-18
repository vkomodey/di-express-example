'use strict';

let request = require('request-promise-native');
let assert = require('assert').strict;

let uri = 'http://localhost:3000/payments';

function requestPayload(body, headers) {
    return {
        uri,
        method: 'POST',
        headers,
        body,
        json: true
    }
}
async function exec() {
    let payloads = [];
    const NUM_OF_REQUESTS = 100;

    for ( let i = 0; i < NUM_OF_REQUESTS; ++i ) {
        let payload = requestPayload({
            goodId: i,
            amount: 100 + i,
        }, {
            'user-identity': `uid${i}`,
            'app-identity': 'app1',
        });

        payloads.push(payload);
    }

    let results = await Promise.all(payloads.map(p => request(p)));

    for ( let i = 0; i < NUM_OF_REQUESTS; ++i ) {
        let payloadUid = payloads[i].headers['user-identity'];
        let responseUid = results[i].scope.id;

        assert.strictEqual(payloadUid, responseUid)
    }
}

console.log('Sending requests in parallel to the main app');

exec().then(() => {console.log('Ending testing, successful')});
