const router = require('express').Router();
const userRoutes = require('./user');
const leagueRoutes = require('./league');
const footballRoutes = require('./football')

router.use('/user', userRoutes);
router.use('/league', leagueRoutes);
router.use('/football', footballRoutes)


module.exports = router;