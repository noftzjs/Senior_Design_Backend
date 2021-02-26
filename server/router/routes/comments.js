'use strict';

module.exports = (app, db) => {
    var router = require('express').Router();
    
    var controller = require('../../controller/comments')(db);

    router.route('/comments')
        .get(controller.list)
        .post(controller.insert);

    router.route('/comments/uploadID/:uploadID')
        .get(controller.getByuploadID);
    
    router.route('/comments/userID/:userID')
        .get(controller.getByuserID);
        
    router.route('/comments/:commentID')
        .put(controller.update)
        .delete(controller.delete);

    app.use(router);
};