var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.port || 3300

app.listen(port, () => {
    console.log("Server is running on port 3300");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = require('./route')();
 
app.use('/api', router);