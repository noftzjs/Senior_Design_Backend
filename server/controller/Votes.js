const { Votes } = require('../config/db');

module.exports = (db) => {
    const objectHelper = require('../utils/objectHelper');

    function isVoteUnique(id, id2) {
        return db.Votes.count({ where: {uploadID: id, userID: id2} })
            .then(count => {
                if (count != 0) {
                    return false;
                }
                return true;
            });
    }
    isVoteUnique().then(isUnique => {
        if (isUnique) {
            (req, res) => {
                var Vote = {
                    uploadID: req.body.uploadID,
                    userID: req.body.userID
                };

                db.Votes.create(Vote)
                    .then(newVote => {
                        res.json(newVote);
                    });
            }
        } 
        else {
            (req, res) => {
                var id = req.params.uploadID;
                var id2 = req.params.userID;
                db.Votes.destroy({
                    where: { uploadID: id, userID: id2 }
                }).then(deletedVotes => {
                    res.json(deletedVotes);
                });
            }
        }
    });

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

        insert: (req, res) => {
            var Vote = {
                uploadID: req.body.uploadID,
                userID: req.body.userID
            };

            db.Votes.create(Vote)
                .then(newVote => {
                    res.json(newVote);
                });
        },

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
                res.json(deletedVotes);
            });
        }
    }
};