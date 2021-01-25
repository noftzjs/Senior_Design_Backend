'use strict';

module.exports = (app, db) => {
    var router = require('express').Router();
    
    var controller = require('../../controller/Users')(db);

    router.route('/Users')
        .get(controller.list)
        .post(controller.insert);

    router.route('/Users/:userID')
        .get(controller.getById)
        .put(controller.update)
        .patch(controller.partialUpdate)
        .delete(controller.delete);

    app.use(router);
};