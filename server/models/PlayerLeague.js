const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

const PlayerLeague = sequelize.define("playerLeague",{
    playerLeagueId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
    }
)

module.exports = PlayerLeague