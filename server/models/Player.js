const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

class Player extends Model{}

Player.init (
    {
    }, {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "player"
    });


module.exports = Player