var express = require('express');
var router = express.Router();
const { getUserByID } = require(`../libs/userService`)
const { getAllUsers } = require(`../libs/userService`)
const { delUserByID } = require(`../libs/userService`)

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

//GET ALL USERS
router.get('/', async (req, res) => {
  const data = await getAllUsers(data);
  res.send(data);

});

//GET A USER
router.get('/:id', async (req, res) => {
  const data = await getUserByID(req.params.id);
  res.send(data);

});

//DELETE A USER
router.delete('/:id', async (req, res) => {
  const data = await delUserByID(req.params.id);
  res.send('Deleted successfully');

});

//INSERT A USER
router.post('/', function (req, res) {
  var request = new sql.Request();
  let emp = req.body;
  var sql = "SET @userID = ?; SET @name = ?; SET @isVerified = ?; SET @ucEmail = ?; SET @password = ?; \
  CALL UserAddorEdit(@userID,@name,@isVerified,@ucEmail,@password;)";
  request.query(sql, [emp.userID, emp.name, emp.isVerified, emp.ucEmail, emp.password], (err, rows, feilds) => {
    if (err) console.log(err)
    res.send(rows);
  });
});

module.exports = router;