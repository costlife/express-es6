'use strict';
//const userModel = process.getModel('userModel');

var baseAction = function(model) {
    let res = arg.res;
    let req = arg.req;

    let userEntity = new model(req.body);
    userEntity.save(function(err, doc) {
        res.send({
            error_no: 0,
            error_msg: 'success',
            user: doc
        });
    });
};

module.exports = baseAction;