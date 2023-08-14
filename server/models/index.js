const User = require('./User')
const League = require('./League')
const Player = require('./Player')
const PlayerLeague = require('./PlayerLeague')

const leagueUser = League.hasOne(User, {
    foreignKey: "leagueId"
})
const userLeague = User.hasMany(League, {
    foreignKey: "userId"
})

const playerUser = Player.belongsTo(User,{
    foreignKey: "playerId",
    as: "user"
})
const userPlayer = User.hasOne(Player,{
    foreignKey: "userId",
    as: "player"
})

// const playerLeague = Player.belongsTo(League, {
//    through: PlayerLeague
// })
//
// const leaguePlayer = League.belongsTo(Player, {
//     through: PlayerLeague
//})

const playerLeague = Player.belongsToMany(League, {
    through: PlayerLeague,
})
const leaguePlayer = League.belongsToMany(Player, {
    through: PlayerLeague
})


module.exports = {
    User,
    League,
    Player,
    leagueUser,
    userLeague,
    playerUser,
    userPlayer,
    playerLeague,
    leaguePlayer

}





