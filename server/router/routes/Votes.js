'use strict';

module.exports = (app, db) => {
    var router = require('express').Router();
    
    var controller = require('../../controller/Votes')(db);

    router.route('/Votes')
        .get(controller.list)
        //.post(controller.insert)
        .post(controller.insert);

    router.route('/Votes/:uploadID&:userID')
        .get(controller.getById)
        .put(controller.update)
        .patch(controller.partialUpdate)
        .delete(controller.delete);
        

    app.use(router);
};