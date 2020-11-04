var express = require('express');
var router = express.Router();

const { getAllPosts } = require(`../libs/postService`)
const { getPostsByID } = require(`../libs/postService`)
const { delPostByID } = require(`../libs/postService`)

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

//GET ALL POSTS
router.get('/', async (req, res) => {
  const data = await getAllPosts();
  res.send(data);

});

//GET A POST
router.get('/:id', async (req, res) => {
    const data = await getPostsByID(req.params.id);
    res.send(data);
  
  });

//DELETE A POST
router.delete('/:id', async (req, res) => {
    const data = await delPostByID(req.params.id);
    res.send('Deleted successfully');
  
  });

module.exports = router;