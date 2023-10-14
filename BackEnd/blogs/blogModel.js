const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Blogs = sequelize.define(
    'Blogs',{
        date: {
            type: DataTypes.STRING
        },
        authorID:{
            type: DataTypes.STRING
        },
        author:{
            type: DataTypes.STRING
        },
        title:{
            type: DataTypes.STRING
        },
        content:{
            type: DataTypes.TEXT
        },
        type:{
            type: DataTypes.STRING
        },
        imageURL:{
            type: DataTypes.STRING
        },
        category:{
            type: DataTypes.STRING
        },
        comments:{
            type: DataTypes.ARRAY(DataTypes.JSON)
        }
    });

module.exports = Blogs;