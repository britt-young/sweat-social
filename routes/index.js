// Main router for the application that takes all requests to the appropriate route
const router = require('express').Router(); 
const apiRoutes = require('./apiRoutes');
router.use('/api',apiRoutes);
router.use((req, res)=>{
    return res.status(404).send('Not found');

});

module.exports = router;