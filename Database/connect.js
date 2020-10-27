var Connection = require('tedious').Connection;
var config = {
    server: 'seniordesignserver.database.windows.net',
    authentication: {
        type: 'default',
        options: {
            userName: 'admin20',
            password: 'Gr0up20$'
        }
    },
    options: {
        database: 'SeniorDesignDatabase',
        rowCollectionOnDone: true,
        useColumnNames: false
    }
}
var connection = new Connection(config);
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected');
    }
});
module.exports = connection;