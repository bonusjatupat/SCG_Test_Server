const express = require('express')
    , router = require('./routes')
    , https = require('https')
    , http = require('http')
    , fs = require('fs')

const app = express()
const options = {
    key: fs.readFileSync('key.pem', 'utf8'),
    cert: fs.readFileSync('server.crt', 'utf8')
};

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','GET')
    res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
    return next()
})

app.use('/doscg', router.doscg)
app.use('/google', router.google)
app.use('/line', router.line)

const httpServer = http.createServer(app)
const httpsServer = https.createServer(options, app)
httpServer.listen(3030);
httpsServer.listen(3031);

//const PORT = process.env.PORT || 3030

//app.listen(_CONFIG.SERVER.PORT, () => {
//    console.log(`SCG Server started on port *:${PORT}`)
//})
