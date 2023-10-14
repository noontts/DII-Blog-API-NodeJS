const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Comments = sequelize.define(
    'Comments',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        author_id: {
            type: DataTypes.STRING
        },
        comment_content:{
            type: DataTypes.TEXT
        },
        date:{
            type: DataTypes.STRING
        },
        blogId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

module.exports = Comments;