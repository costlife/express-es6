'use strict';
const userModel = process.getModel('userModel');

var userAddAction = function(arg) {
    let res = arg.res;
    let req = arg.req;

    let userEntity = new userModel(req.body);
    userEntity.save(function(err, doc) {
        res.send({
            error_no: 0,
            error_msg: 'success',
            user: doc
        });
    });
};

module.exports = userAddAction;