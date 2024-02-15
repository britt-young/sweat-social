const router = require('express').Router();
const userRoutes = require('./apiRoutes/userRoutes');
const thoughtRoutes = require('./apiRoutes/thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;