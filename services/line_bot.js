const request = require('request')
  , TOKEN = 'T40ax7PCiw2mKXxutN59s3SbWbKctepftquVTZu1DfA'

exports.sendNoti = async (message) => {
  request({
    method: 'POST',
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      'bearer': TOKEN
    },
    form: {
      message: message
    }
  }, (err, httpResponse) => {
    if (err) return err
    else { 
      var response = "Message successfully sent."
      return response
    }
  })
}



