'use strict';

const catalogArray = ['api', 'action'];
const fs = require('fs');
var baseApi = require('./baseApi');
var api = function (app) {
    for (let catalog of catalogArray) {
        catalog = './' + catalog + '/';
        let files = fs.readdirSync(catalog);
        for (let filename of files) {
            let router = filename.substr(0, filename.lastIndexOf('.js'));
            let injecter = require(catalog + router);
            if (catalog === './api/') {
                router = '/api/' + router;
            } else {
                router = '/' + router;
            }
            app.use(router, injecter);
        }
    }
};

process.baseApi = baseApi;
module.exports = api;

