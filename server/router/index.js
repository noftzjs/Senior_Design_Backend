'use strict';

const routes = [
    require('./routes/submissions')
];

module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};