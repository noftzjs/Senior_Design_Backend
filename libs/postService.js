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

exports.getAllPosts = async() => {
    var request = new sql.Request();
    const data = request.query(`select * from posts`);
    return data;
  }

  exports.getPostsByID = async (id) => {
    var request = new sql.Request();
    const data = await request.query(`select * from posts where uploadID = ${id}`);
    return data;
  }

  exports.delPostByID = async (id) => {
    var request = new sql.Request();
    const data = await request.query(`delete from posts where uploadID = ${id}`);
  }