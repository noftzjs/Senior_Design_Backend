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

exports.getAllUsers = async() => {
  var request = new sql.Request();
  const data = await request.query(`select * from Users`);
  return JSON.stringify(data);
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

exports.createUser = async () => {
  console.log('we are here')
  var request = new sql.Request();
  let emp = req.body;
  var sql = "EXEC UserAddorEdit @userID = ?, @name = ?, @isVerified = ?, @ucEmail = ?, @password = ?";
  const data = await request.query(sql, [emp.userID, emp.name, emp.isVerified, emp.ucEmail, emp.password]);
}