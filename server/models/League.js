const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

class League extends Model{}

League.init (
    {
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
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "league"
});


module.exports = League