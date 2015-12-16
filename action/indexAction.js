'use strict';
const userModel = process.getModel('userModel');

var indexAction = function(arg) {

    let res = arg.res;
    let req = arg.req;

    // mongoose 4.x 不支持 promise 写法
    userModel.find({}, function(err, doc) {
        res.render('index', {
            title: 'demo',
            list: doc
        });
    });
};

module.exports = indexAction;