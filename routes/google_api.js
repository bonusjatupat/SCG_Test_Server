const router = require('express').Router()
    , GoogleController = require('../controllers/google_api')

router.get('/direction', GoogleController.getDirection)

module.exports = router;