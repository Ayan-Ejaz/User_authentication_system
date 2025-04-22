const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../config/ConfigureDataBase')

const OTP = sequelize.define('OTP', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail:true
        }
    },
    otp:{
        type:DataTypes.STRING,
        allowNull: false
    },
    expiresAt:{
        type:DataTypes.DATE,
        allowNull:false,
    }
}, {
    timestamps:false,
    tableName:'OTPS'
})

module.exports = OTP;