const DoscgService = require('../services/DOSCG')
  , errorHandler = require('../errors')

exports.findPattern = async (req, res) => {
  try {
    const body = req.body
    const response = await DoscgService.findPattern(body)

    res.json(response)
  } catch (err) {

    const { status, message } = errorHandler(err)
    res.status(status)
    res.json({ message })
  }
}

exports.findValue = async (req, res) => {
  try {
    const body = req.body
    const response = await DoscgService.findValue(body)

    res.json(response)
  } catch (err) {

    const { status, message } = errorHandler(err)
    res.status(status)
    res.json({ message })
  }
}