'use strict';
const userModel = process.getModel('userModel');
var router = require('express').Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    userModel.find({}, function(err, doc) {
        res.render('index', {
            title: 'user list',
            action: 'user',
            list: doc,
            link: '/article'
        });
    });
});

module.exports = router;