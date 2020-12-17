'use strict';

module.exports = (app, db) => {
    var router = require('express').Router();
    
    var controller = require('../../controller/submissions')(db);

    router.route('/submissions')
        .get(controller.list)
        .post(controller.insert);

    router.route('/submissions/:uploadID')
        .get(controller.getById)
        .put(controller.update)
        .patch(controller.partialUpdate)
        .delete(controller.delete);

    app.use(router);
};