const User = require('./User')
const League = require('./League')

League.belongsTo(User, {
    sourceKey: "leagueId",
    targetKey: "userId"
})
User.hasMany(League)

module.exports = {
    User,
    League
}


