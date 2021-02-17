const { comments } = require('../config/db');

module.exports = (db) => {
    const objectHelper = require('../utils/objectHelper');

    return {
        list: (req, res) => {
            db.comments.findAll()
                .then(comments => {
                    res.json(comments);
            })
        },
        //try findAll(id)
        getByuploadID: (req, res) => {
            var id = req.params.uploadID
            db.comments.findAll({
                where: {uploadID: id}
            }).then(comments => {
                res.json(comments);
            });
        },

        getByuserID: (req, res) => {
            var id = req.params.userID
            db.comments.findAll({
                where: {userID: id}
            }).then(comments => {
                res.json(comments);
            });
        },

        insert: (req, res) => {
            var comment = {
                uploadID: req.body.uploadID,
                userID: req.body.userID,
                comment: req.body.comment
            };

            db.comments.create(comment)
                .then(newComment => {
                    res.json(newComment);
                });
        },

        update: (req, res) => {
            const id = req.params.commentID;

            db.comments.findOne({
                where: { commentID: id }
            }).then(comment => {
                 var request = req.body;

                 objectHelper.copyProperties(request, comment);

                 comments.save().then(updatedComment => {
                     res.json(updatedComment);
                 });
            });
        },

        delete: (req,res) => {
            var id = req.params.commentID;
            db.comments.destroy({
                where: { commentID: id }
            }).then(deletedComment => {
                res.json(deletedComment);
            });
        }
    }
};