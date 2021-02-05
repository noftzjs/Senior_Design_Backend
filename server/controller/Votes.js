const { Votes } = require('../config/db');
const Promise = require ('bluebird');


module.exports = (db) => {
    const objectHelper = require('../utils/objectHelper');

 /*    createIfUnique = function (req,res,next)
    {
        db.sync().then(function () {
            Votes.findOrCreate({where: {id: req.body.Votes.uploadID, id2: req.body.Votes.userID}})
                .spread((Vote, created) => {
                    console.log(created, Vote);
                    res.json(created);
                });
        }).catch(function (error) {
            console.log(error);
            res.sendStatus(403)
        })
    } */

    return {

        list: (req, res) => {
            db.Votes.findAll()
                .then(Votes => {
                    res.json(Votes);
            })
        },

        getById: (req, res) => {
            var id = req.params.uploadID;
            var id2 = req.params.userID
            
            db.Votes.findOne({
                where: { uploadID: id , userID: id2 }
            })    .then(Votes => {
                    res.json(Votes);
                });
        },

        insert: async (req,res) => {
            const vote = await Votes.findOrCreate({
                where: {
                    uploadID: req.body.uploadID,
                    userID: req.body.userID,
                },
                raw: true
            })  .then(vote => {
                    res.json(vote)
            });
        },

/*         insert: async (req, res) => {
            try {
                let created = await Votes.findOrCreate({
                    where: {  
                        uploadID: req.body.uploadID, 
                        userID: req.body.userID,
                    }
                }).spread((Votes, created) => {
                    return created;
                })
                if(created) {
                    res.json(Votes)
                }
            } catch (err) {
                console.log('ERROR! => ${err.name}: ${err.message}')
                res.status(500).send(err.message)
            }
        }, */


        /* insert: (req, res) => {
            var Vote = {
                uploadID: req.body.uploadID,
                userID: req.body.userID
            };

            db.Votes.create(Vote)
                .then(newVote => {
                    res.json(newVote);
                });
        }, */

        update: (req, res) => {
            const id = req.params.uploadID;
            const id2 = req.params.userID;

            db.Votes.findOne({
                where: { uploadID: id , userID: id2 }
            }).then(Votes => {
                 var request = req.body;

                 objectHelper.copyProperties(request, Votes);

                 Votes.save().then(updatedVotes => {
                     res.json(updatedVotes);
                 });
            });
        },

        partialUpdate: (req, res) =>
        {
            const id = req.params.uploadID;
            const id2 = req.params.userID
            const updates = req.body;

            db.Votes.findOne({
                where: { uploadID: id, userID: id2 }
            }).then(Votes => {
                 Votes.updateAttributes(updates);
            }).then(updatedVotes => {
                res.json(updatedVotes);
            });
        },

        delete: (req,res) => {
            var id = req.params.uploadID;
            var id2 = req.params.userID;
            db.Votes.destroy({
                where: { uploadID: id, userID: id2 }
            }).then(deletedVotes => {
                res.json(deletedVotes)
                res.send('Your vote  has been removed');
            });
        }
    }
};