const router = require('express').Router();
const userRoutes = require('./user');
const leagueRoutes = require('./league');

router.use('/user', userRoutes);
router.use('/league', leagueRoutes);


module.exports = router;