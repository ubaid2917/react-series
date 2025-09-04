const router = require('express').Router();

router.use('/sample', require('../controllers/sample/index'))

module.exports = router