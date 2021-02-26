'use strict';

const { comments } = require("../config/db");

module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define('comments', {
        commentID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        uploadID: {
            type: DataTypes.INTEGER,
            required: false
        },
        userID: {
            type: DataTypes.INTEGER,
            required: false
        },
        comment: {
            type: DataTypes.STRING,
            required: false
        }
    }, {
        timestamps: false,
    });

    return comment;
};