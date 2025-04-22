const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigureDataBase.js');
const config = require('dotenv').config()

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    tableName: 'Users',
});

module.exports = User;
