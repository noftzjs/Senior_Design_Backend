'use strict';

const routes = [
    require('./routes/submissions'),
    require('./routes/Users'),
    require('./routes/Votes')
];

module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};