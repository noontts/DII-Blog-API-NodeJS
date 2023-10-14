const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Comments = sequelize.define(
    'Comments',{
        author_id: {
            type: DataTypes.DATE
        },
        comment_content:{
            type: DataTypes.STRING
        },
        date:{
            type: DataTypes.DATE
        },
        reply_comment:{
            type: DataTypes.ARRAY(DataTypes.JSON)
        }
    });

module.exports = Comments;