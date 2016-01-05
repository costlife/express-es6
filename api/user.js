'use strict';
const userModel = process.getModel('userModel');
var router = require('express').Router();

process.baseApi(router, userModel);
module.exports = router;
