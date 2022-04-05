const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// All other GET requests not handled before will return our React app
router.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = router;