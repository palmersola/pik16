// index.js
const User = require('./User');
const League = require('./League');
const Player = require('./Player');
const PlayerLeague = require('./PlayerLeague');

// Define associations between User, League, and Player models
User.hasMany(League);
League.belongsTo(User);

User.hasOne(Player);
Player.belongsTo(User);

League.belongsToMany(Player, { through: PlayerLeague });
Player.belongsToMany(League, { through: PlayerLeague });

module.exports = {
    User,
    League,
    Player,
    PlayerLeague,
};


// User.League = User.hasMany(League);
// League.User = League.belongsTo(User);
//
// User.Player = User.hasOne(Player);
// Player.User = Player.belongsTo(User);
//
// League.Player = League.belongsToMany(Player, { through: PlayerLeague });
// Player.League = Player.belongsToMany(League, { through: PlayerLeague });