var response = require('../../shared/response');
var TYPES = require('tedious').TYPES;

function UserRepository(dbContext) {

function getUsers(req, res) {

dbContext.get("getUsers", function (error, data) {
                return res.json(response(data, error));
            });

}

function getUser(req, res) {
       if (req.params.userID) {
            var parameters = [];

parameters.push({ name: 'userID', type: TYPES.Int, val: req.params.userID });

var query = "select * from Users where userID = @userID"

dbContext.getQuery(query, parameters, false, function (error, data) {
                if (data) {
                    req.data = data[0];
                    return next();
                }
                return res.sendStatus(404);
            });
        }
    }

function postUsers(req, res) {

var parameters = [];

parameters.push({ name: 'name', type: TYPES.NvarChar, val: req.body.name });
        parameters.push({ name: 'ucEmail', type: TYPES.NvarChar, val: req.body.ucEmail });
        parameters.push({ name: 'password', type: TYPES.NvarChar, val: req.body.password });

dbContext.post("InsertOrUpdateUsers", parameters, function (error, data) {
            return res.json(response(data, error));
        });
    }

return {
        getAll: getUsers,
        get: getUsers,
        post: postUsers 
    }
}
module.exports = UserRepository;