var express = require('express');
var router = express.Router();
const { getUserByID } = require(`../libs/userService`)
const { getAllUsers } = require(`../libs/userService`)
const { delUserByID } = require(`../libs/userService`)
const { createUser } = require(`../libs/userService`)

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
  const data = await getAllUsers();
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
router.post('/', async (req, res) => {
  const data = await createUser();
  res.send('Created successfully');
    if (!err)
      sql.forEach(element =>{
        if(element.constructor == Array)
        res.send('Created user successfully : '+element[0].userID);
      });
    else
      console.log(err);

});


module.exports = router;