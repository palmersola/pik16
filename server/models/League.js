const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

class League extends Model{}

League.init (
    {
        leagueName: {
            type: DataTypes.STRING
        },
        gameArray: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        }
    }, {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "league"
});

module.exports = League