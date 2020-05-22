const LineService = require('../services/line_bot')
    , errorHandler = require('../errors')

exports.sendNoti = async (req, res) => {
    try {
        const message = req.body.message
        const response = await LineService.sendNoti(message)

        res.json(response)
    } catch (err) {
        
        const { status, message } = errorHandler(err)
        res.status(status)
        res.json({ message })
    }
}