'use strict';

const { images } = require("../config/db");

module.exports = (sequelize, DataTypes) => {
    const images = sequelize.define('uploadImages', {
        URL: {
            type: DataTypes.STRING,
            //primaryKey: true,
            required: false
        },
        uploadID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            required: false
        }
    }, {
        timestamps: false
    });

    return images;
};