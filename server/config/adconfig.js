const { response } = require("express");

var config = { url: 'ldaps://ad.uc.edu',
               baseDN: 'dc=ad,dc=uc,dc=edu',
               domain: 'ad.uc.edu',
             }

module.exports = config;