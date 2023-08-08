const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

class Player extends Model{}

Player.init(
    {
        playerId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "player"
    }
)

module.exports = Player
