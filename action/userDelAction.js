'use strict';
const userModel = process.getModel('userModel');

var userDelAction = function(arg) {
    let res = arg.res;
    let req = arg.req;

    userModel.remove({}, function(err, doc) {
        res.send({
            error_no: 0,
            error_msg: 'success',
            user: doc
        });
    });
};

module.exports = userDelAction;