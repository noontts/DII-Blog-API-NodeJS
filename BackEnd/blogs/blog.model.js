const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Comments = require('../comments/comments.model');

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
        }
    });

    Blogs.hasMany(Comments, {
        foreignKey: 'blogId',
        sourceKey: 'id',
        as: 'blogComments',
      });

module.exports = Blogs;