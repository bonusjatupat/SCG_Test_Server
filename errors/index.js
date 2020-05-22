const IERROR = require('./IERROR')
module.exports = errorHandler = (err, isDebug = false) => {
  isDebug && console.log(err)

  const message = {
    name: err.name,
    detail: err.message
  }

  switch (err.name) {
    default:
      return {
        status: 500,
        message,
      }
  }
}