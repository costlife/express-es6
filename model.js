'use strict';
const FILES = require('fs').readdirSync('./model/');
const mongoose = require('mongoose');

const dataBase = 'mongodb://127.0.0.1:27017/es6express';
var db = mongoose.createConnection(dataBase);

var models = {};
for (let file of FILES) {
    let fileName = file.substring(0, file.length - 3);
    let data = require("./model/" + fileName);
    models[fileName] = db.model(fileName, new mongoose.Schema(data));
}

process.getModel = function (name) {
    return models[name];
}