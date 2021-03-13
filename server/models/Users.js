'use strict';

const { Users } = require("../config/db");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        userID: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            required: false
        },
        isVerified: {
            type: DataTypes.STRING,
            required: false
        },
        ucEmail: {
            type: DataTypes.STRING,
            required: false
        },
        password: {
            type: DataTypes.STRING,
            required: false
        }
    }, {
        timestamps: false
    });

    return Users;
};