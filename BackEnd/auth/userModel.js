const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const users = sequelize.define(
    'users',{
        profile_imgURL: {
            type: DataTypes.STRING
        },
        username:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        }
    });

module.exports = users;