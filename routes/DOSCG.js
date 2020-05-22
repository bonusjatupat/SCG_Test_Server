const router = require('express').Router()
    , DoscgController = require('../controllers/DOSCG')

router.get('/find/pattern', DoscgController.findPattern)
      .get('/find/value', DoscgController.findValue)

module.exports = router;