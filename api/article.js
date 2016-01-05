'use strict';
const articleModel = process.getModel('articleModel');
var router = require('express').Router();

/* 在这里可以重写baseApi中的方法*/
// router.post('/add', function(req, res, next) {
//     res.send({
//         error_no: 0,
//         error_msg: '被重写的add方法',
//         user: req.params
//     });
// });

process.baseApi(router, articleModel);
module.exports = router;
