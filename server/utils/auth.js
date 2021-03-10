var ActiveDirectory = require('activedirectory2');
var config = { url: 'ldaps://ad.uc.edu',
               baseDN: 'dc=ad,dc=uc,dc=edu',
               domain: 'ad.uc.edu' 
            }
var ad = new ActiveDirectory(config);

var username = '';
var password = '';
 
ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR: '+JSON.stringify(err));
    return;
  }
 
  if (auth) {
    console.log('Authenticated!');
  }
  else {
    console.log('Authentication failed!');
  }
});