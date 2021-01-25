const { submissions } = require('../config/db');

module.exports = (db) => {
    const objectHelper = require('../utils/objectHelper');

    return {
        list: (req, res) => {
            db.submissions.findAll()
                .then(submissions => {
                    res.json(submissions);
            })
        },

        getById: (req, res) => {
            var id = req.params.uploadID;
            db.submissions.findByPk(id)
                .then(submission => {
                    res.json(submission);
                });
        },

        insert: (req, res) => {
            var submission = {
                title: req.body.title,
                discription: req.body.discription,
                upVotes: req.body.upVotes,
                userID: req.body.userID
            };

            db.submissions.create(submission)
                .then(newSubmission => {
                    res.json(newSubmission);
                });
        },

        update: (req, res) => {
            const id = req.params.uploadID;

            db.submissions.findOne({
                where: { uploadID: id }
            }).then(submissions => {
                 var request = req.body;

                 objectHelper.copyProperties(request, submissions);

                 submissions.save().then(updatedSubmissions => {
                     res.json(updatedSubmissions);
                 });
            });
        },

        partialUpdate: (req, res) =>
        {
            const id = req.params.uploadID;
            const updates = req.body;

            db.submissions.findOne({
                where: { uploadID: id }
            }).then(submissions => {
                 submissions.updateAttributes(updates);
            }).then(updatedSubmissions => {
                res.json(updatedSubmissions);
            });
        },

        delete: (req,res) => {
            var id = req.params.uploadID;
            db.submissions.destroy({
                where: { uploadID: id }
            }).then(deletedSubmissions => {
                res.json(deletedSubmissions);
            });
        }
    }
};