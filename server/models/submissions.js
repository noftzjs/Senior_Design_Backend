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
        discription: {
            type: DataTypes.STRING,
            required: false
        },
        upVotes: {
            type: DataTypes.INTEGER,
            required: false
        }
    }, {
        timestamps: false
    });

    return submissions;
};