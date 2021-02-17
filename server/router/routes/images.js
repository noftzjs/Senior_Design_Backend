const router = require('express').Router();
const { response } = require('express');
const { upload } = require('../../../Server');
const db = require('../../config/db');
const { images } = require('../../config/db');

router.post("/", upload.single("photo"), (req, res) => {
    if(req.file) {
        var image = {
            URL: req.file.filename,
            uploadID: req.body.uploadID
        };
        db.images.create(image)
            .then(newImage => {
                res.json(newImage)
            });
    }
    else throw 'error';
});

router.get("/", (req, res) => {
    db.images.findAll()
            .then(images => {
                res.json(images);
            });
});

router.get("/:uploadID", (req, res) => {
    var id = req.params.uploadID;
    db.images.findByPk(id)
        .then(image => {
            res.json(image);
        });
});

router.delete("/:uploadID", (req, res) => {
    var id = req.params.uploadID;
   
    db.images.destroy({
        where: { uploadID: id }
    }).then(deletedImage => {
        res.json(deletedImage);
    });
});

module.exports = router;