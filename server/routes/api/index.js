const router = require('express').Router();
const userRoutes = require('./user');
const leagueRoutes = require('./league');
const footballRoutes = require('./football')
const playerRoutes = require('./player')

router.use('/user', userRoutes);
router.use('/league', leagueRoutes);
router.use('/football', footballRoutes)
router.use('/player', playerRoutes)


module.exports = router;