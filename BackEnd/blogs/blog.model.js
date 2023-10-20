const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const users = require('../auth/user.model');

const Blogs = sequelize.define(
    'Blogs',{
        date: {
            type: DataTypes.STRING
        },
        authorID:{
            type: DataTypes.INTEGER
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
        }
    });

    Blogs.belongsTo(users,{
        foreignKey: 'authorID',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })

module.exports = Blogs;