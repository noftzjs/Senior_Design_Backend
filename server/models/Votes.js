'use strict';

const { Votes } = require("../config/db");

module.exports = (sequelize, DataTypes) => {
    const Votes = sequelize.define('Votes', {
        uploadID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userID: {
            type: DataTypes.INTEGER,
            required: false
        }
    }, {
        timestamps: false
    });

    return Votes;
};