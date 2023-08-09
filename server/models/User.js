const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

// class User extends Model{}

const User = sequelize.define("user",{
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        }
    }
)

module.exports = User



