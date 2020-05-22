const router = require('express').Router()
    , LineController = require('../controllers/line_bot')

router.post('/noti', LineController.sendNoti)

module.exports = router;