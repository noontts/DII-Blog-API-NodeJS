const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Blogs = require('../blogs/blog.model');

const Comments = sequelize.define(
    'Comments',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        author:{
            type: DataTypes.STRING
        },
        author_id: {
            type: DataTypes.STRING
        },
        comment_content:{
            type: DataTypes.TEXT
        },
        date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        blogId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Comments.belongsTo(Blogs,{
        foreignKey: 'blogId',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })

module.exports = Comments;