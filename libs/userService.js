var sql = require("mssql");
// Configuration object for your database
var config = {
  user: 'admin20',
  password: 'Gr0up20$',
  server: 'seniordesignserver.database.windows.net',
  database: 'SeniorDesignDatabase'
};
// connect to the database
sql.connect(config, function (err) {
  if (err) console.log(err);
});

exports.getAllUsers = async () => {
  var request = new sql.Request();
  const data = await request.query(`select * from Users`);
  return data;
}

exports.getUserByID = async (id) => {
  var request = new sql.Request();
  const data = await request.query(`select * from Users where userID = ${id}`);
  return data;
}

exports.delUserByID = async (id) => {
  var request = new sql.Request();
  const data = await request.query(`delete from Users where userID = ${id}`);
}