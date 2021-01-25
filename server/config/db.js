'use strict'

const Sequelize = require('sequelize');
const env = require('./env');

const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  dialectOptions: {
    instanceName: env.DATABASE_INSTANCE
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.sequelize = sequelize;

//Models/tables
db.submissions = require('../models/submissions.js')(sequelize, Sequelize);
db.Users = require('../models/Users.js')(sequelize, Sequelize);
db.Votes = require('../models/Votes.js')(sequelize, Sequelize);

module.exports = db;