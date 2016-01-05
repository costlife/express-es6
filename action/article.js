'use strict';
const articleModel = process.getModel('articleModel');
var router = require('express').Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    articleModel.find({}, function(err, doc) {
        res.render('index', {
            title: 'article list',
            action: 'article',
            list: doc,
            link: '/index'
        });
    });
});

module.exports = router;