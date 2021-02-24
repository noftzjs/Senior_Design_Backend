const cors = require('cors');

const multer = require('multer');
module.exports = {upload: multer({dest:__dirname + '/uploads/images'})};


const express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./server/config/db'),
    env = require('./server/config/env'),
    router = require('./server/router/index'),
    morgan = require('morgan'),
    app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

app.use('/images', require('./server/router/routes/images'))

router(app, db);

const PORT = process.env.PORT || 9000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});