const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const post = sequelize.define('post', {
    post: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = post;