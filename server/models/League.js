const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

const League = sequelize.define("league",{
        leagueId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        leagueName: {
            type: DataTypes.STRING
        }
        ,
        gamesArr: {
            type: DataTypes.JSON,
            defaultValue: []
        }
    }
);


module.exports = League