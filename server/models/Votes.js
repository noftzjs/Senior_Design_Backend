'use strict';

const { Votes } = require("../config/db");

module.exports = (sequelize, DataTypes) => {
    const Votes = sequelize.define('Votes', {
        uploadID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    }, {
        timestamps: false,
    });

    return Votes;
};