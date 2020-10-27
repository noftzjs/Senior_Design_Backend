const express = require('express');

function eRoutes() {
    const router = express.Router();
    var users = require('./repository/user/user.routes')(router);
    /* var department = require('./repository/department/department.routes')(router);
    return router; */
}
module.exports = eRoutes;