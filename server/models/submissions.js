'use strict';

const { submissions } = require("../config/db");

module.exports = (sequelize, DataTypes) => {
    const submissions = sequelize.define('submissions', {
        uploadID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            required: false
        },
        description: {
            type: DataTypes.STRING,
            required: false
        },
        upVotes: {
            type: DataTypes.INTEGER,
            required: false
        },
        userID: {
            type: DataTypes.INTEGER,
            required: false
        },
        anonymous: {
            type: DataTypes.STRING,
            required: false
        },
        repost: {
            type: DataTypes.STRING,
            required: false
        },
        feedback: {
            type: DataTypes.STRING,
            required: false
        },
        suggestion: {
            type: DataTypes.STRING,
            required: false
        }

    }, {
        timestamps: false
    });

    return submissions;
};