const { Users } = require('../config/db');

module.exports = (db) => {
    const objectHelper = require('../utils/objectHelper');

    return {
        list: (req, res) => {
            db.Users.findAll()
                .then(Users => {
                    res.json(Users);
            })
        },

        getById: (req, res) => {
            var id = req.params.userID;
            db.Users.findByPk(id)
                .then(Users => {
                    res.json(Users);
                });
        },

        insert: (req, res) => {
            var User = {
                userID: req.body.userID,
                name: req.body.name,
                isVerified: req.body.isVerified,
                ucEmail: req.body.ucEmail,
                password: require.body.password
            };

            db.Users.create(User)
                .then(newUser => {
                    res.json(newUser);
                });
        },

        update: (req, res) => {
            const id = req.params.userID;

            db.Users.findOne({
                where: { userID: id }
            }).then(Users => {
                 var request = req.body;

                 objectHelper.copyProperties(request, Users);

                 Users.save().then(updatedUsers => {
                     res.json(updatedUsers);
                 });
            });
        },

        partialUpdate: (req, res) =>
        {
            const id = req.params.userID;
            const updates = req.body;

            db.Users.findOne({
                where: { userID: id }
            }).then(Users => {
                 Users.updateAttributes(updates);
            }).then(updatedUsers => {
                res.json(updatedUsers);
            });
        },

        delete: (req,res) => {
            var id = req.params.userID;
            db.Users.destroy({
                where: { userID: id }
            }).then(deletedUsers => {
                res.json(deletedUsers);
            });
        }
    }
};