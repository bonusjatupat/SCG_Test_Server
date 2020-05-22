const request = require('request')
    , TOKEN = 'T40ax7PCiw2mKXxutN59s3SbWbKctepftquVTZu1DfA'

exports.sendNoti = async (message) => {
    var response = ""

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
        if(err) console.log(err)
        else response = httpResponse
      })

    return response
}

const API_URL = 'https://api.line.me/v2/bot/message'
const ACCESS_TOKEN = 'Zc+cP6lWUBSxmKWa8VAmcqJXgf0fyBrzI4iM7p3zLFtct4osP2mLRRsnvQgch19zJ3h/8DehDXSs24r1dvBhH0gkKjgf4FEuPHBSXg1Njcu07wa6mLtYCNI1fEUxd3EuxxBzQlYKum39+OKtbTm/qgdB04t89/1O/w1cDnyilFU='
const CHANNEL_SECRET = 'd29ec5262104bfe4709f6a8d18c33a41'



