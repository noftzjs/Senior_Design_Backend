var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");

var sql = require('mssql');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection string parameters.
var sqlConfig = {
    user: 'admin20',
    password: 'Gr0up20$',
    server: 'seniordesignserver.database.windows.net',
    database: 'SeniorDesignDatabase'
}

// Start server and listen on http://localhost:8000/
var server = app.listen(9000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Server listening at http://%s:%s", host, port)
})


async function execute(query) {

    return new Promise((resolve, reject) => {

        new sql.ConnectionPool(sqlConfig).connect().then(pool => {
            return pool.request().query(query)
        }).then(result => {

            resolve(result.recordset);

            sql.close();
        }).catch(err => {

            reject(err)
            sql.close();
            
        });
    });

}

app.post('/submission', function(req, res) {
  //var uploadID = req.body.uploadID;
  var title = req.body.title;
  var dis = req.body.discription;
  var upVotes = req.body.upVotes;
  var id = req.body.userID;

  execute("INSERT INTO submissions (title, discription, upVotes, userID) VALUES ('" + title + "', '" + dis + "', '" + upVotes + "', '" + id + "')");

  res.send(title + ' ' + dis + ' ' + upVotes + ' ' + id);
});

// Get query that return data from orders table
app.get('/submission', function (req, res) {
    execute('SELECT * FROM submissions;')
        .then(function(value) {
            res.end(JSON.stringify(value)); // Result in JSON format
        });
})

// Get query with where
app.get('/submission/:uploadID/', function (req, res) {
    execute('SELECT * FROM submissions WHERE uploadID = ' + req.params.uploadID)
        .then(function(value) {
            res.end(JSON.stringify(value)); // Result in JSON format
        });
})

// Delete a submission
app.delete('/submission/:uploadID/', function (req, res) {
    execute('delete from submissions where uploadID =' + req.params.uploadID)
    res.end('Deleted Succesfully');

})

//Upvote
app.put('/submission/upVote/:uploadID/', function(req, res) {
    execute('UPDATE submissions SET upVotes = upVotes + 1 WHERE uploadID =' + req.params.uploadID);
    res.send('UpVoted!');
})
