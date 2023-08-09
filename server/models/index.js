const User = require('./User')
const League = require('./League')
const Player = require('./Player')

const leagueUser = League.hasOne(User, {
    foreignKey: "leagueId",
    as: "user"
})
const userLeague = User.hasMany(League, {
    foreignKey: "userId",
    as: "league"
})

const playerUser = Player.belongsTo(User,{
    foreignKey: "playerId",
    as: "user"
})
const userPlayer = User.hasOne(Player,{
    foreignKey: "userId",
    as: "player"
})

module.exports = {
    User,
    League,
    Player,
    leagueUser,
    userLeague,
    playerUser,
    userPlayer
}





