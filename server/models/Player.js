const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

const Player = sequelize.define("player",{
        playerId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER
        }
    }
)

module.exports = Player
