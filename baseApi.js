'use strict';
var baseApi = function (router, model) {
    router.post('/add', function(req, res, next) {
        let Entity = new model(req.body);
        Entity.save(function(err, doc) {
            res.send({
                error_no: 0,
                error_msg: 'success',
                user: doc
            });
        });
    });

    router.post('/find', function(req, res, next) {
        model.find({}, function(err, doc) {
            res.send({
                error_no: 0,
                error_msg: 'success',
                user: doc
            });
        });
    });

    router.post('/find/:id', function(req, res, next) {
        model.find({
            _id: req.params.id
        }, function(err, doc) {
            res.send({
                error_no: 0,
                error_msg: 'success',
                user: doc
            });
        });
    });

    router.post('/update/:id', function(req, res, next) {
        model.update({
            _id: req.params.id
        }, req.body, function () {
            res.send({
                error_no: 0,
                error_msg: 'success'
            });
        });
    });

    router.post('/delete/:id', function(req, res, next) {
        model.remove({
            _id: req.params.id
        }, function(err, doc) {
            res.send({
                error_no: 0,
                error_msg: 'success',
                user: doc
            });
        });
    });

    router.post('/clear', function(req, res, next) {
        model.remove({}, function(err, doc) {
            res.send({
                error_no: 0,
                error_msg: 'success',
                user: doc
            });
        });
    });
}

module.exports = baseApi;