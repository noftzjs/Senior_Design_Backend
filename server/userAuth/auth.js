const express = require('express');
const router = express.Router();

const config = require('../config/adconfig');

var ActiveDirectory = require('activedirectory2');
var ad = new ActiveDirectory(config);


router.post('/authenticate', authenticate);

module.exports = router;

function authenticate(req, res, next) {

    ad.authenticate(req.body.username+'@mail.uc.edu', req.body.password, function(err, auth) {
        if (auth) {
          res.send('true');
        }
        else {
          res.send('false');
        }
    });

}