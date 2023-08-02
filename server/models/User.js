const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

class User extends Model{}

User.init(
    {
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

    }, {
        sequelize,
        underscored: true,
        modelName: "user"
    }
)

module.exports = User



