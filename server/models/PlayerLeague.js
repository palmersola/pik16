const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')
// const {League, Player} = require('./index')

class PlayerLeague extends Model{}

PlayerLeague.init (
    {
       // leagueId: {
       //     type: DataTypes.INTEGER,
       //     references: {
       //         model: League,
       //         key: 'id'
       //     }
       // },
       //  playerId: {
       //      type: DataTypes.INTEGER,
       //      references: {
       //          model: Player,
       //          key: 'id'
       //      }
       //  }
    }, {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "playerLeague"
    });


module.exports = PlayerLeague