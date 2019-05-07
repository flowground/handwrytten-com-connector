/**
 * Auto-generated action file for "Handwrytten" API.
 *
 * Generated at: 2019-05-07T14:42:16.025Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / handwrytten-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'singleStepOrder'
 * Endpoint Path: '/orders/singleStepOrder'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "card_id": "card_id",
    "credit_card_id": "credit_card_id",
    "denomination_id": "denomination_id",
    "font_label": "font_label",
    "message": "message",
    "recipient_address1": "recipient_address1",
    "recipient_address2": "recipient_address2",
    "recipient_business_name": "recipient_business_name",
    "recipient_city": "recipient_city",
    "recipient_country": "recipient_country",
    "recipient_country_id": "recipient_country_id",
    "recipient_name": "recipient_name",
    "recipient_state": "recipient_state",
    "recipient_zip": "recipient_zip",
    "sender_address1": "sender_address1",
    "sender_address2": "sender_address2",
    "sender_business_name": "sender_business_name",
    "sender_city": "sender_city",
    "sender_country": "sender_country",
    "sender_country_id": "sender_country_id",
    "sender_name": "sender_name",
    "sender_state": "sender_state",
    "sender_zip": "sender_zip",
    "uid": "uid",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'singleStepOrder',
        pathName: '/orders/singleStepOrder',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}