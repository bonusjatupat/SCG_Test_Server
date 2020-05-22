const GoogleService = require('../services/google_api')
    , errorHandler = require('../errors')

exports.getDirection = async (req, res) => {
    try {
        const body = req.body
        const response = await GoogleService.getDirection(body)

        res.json(response)
    } catch (err) {
        
        const { status, message } = errorHandler(err)
        res.status(status)
        res.json({ message })
    }
}