'use strict';

// 获取action目录下所有文件
const FILES = require('fs').readdirSync('./action/');
const ROUTE = require('express').Router();

// 后缀为Action.js是路由文件
const SUFFIX = 'Action.js';
// 设置首页路径
const ENTRANCE = 'index';

var router = function() {
    let routes = [];
    for (let file of FILES) {
        routes.push(routeInject(file));
    }
    return routes;
};

var routeInject = function (filename) {
    let routerCallback = (req, res, next) => require('./action/' + filename)({
        res: res, 
        req: req, 
        next: next
    });

    let actionRoute = filename.substr(0, filename.lastIndexOf(SUFFIX));
    if (actionRoute === ENTRANCE) {
        actionRoute = '';
    }

    ROUTE.get('/' + actionRoute, routerCallback);
    ROUTE.post('/' + actionRoute, routerCallback);
    return ROUTE;
}

module.exports = router;
