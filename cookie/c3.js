let express = require('express')
let static = require('express-static')
let cookieParser = require('cookie-parser')
let server = express()


server.listen(8080)
server.use(cookieParser())
server.use('', (req, res, next) => {
    res.cookie('user', 'lsq', {maxAge: 10000})
    console.log(req.cookies)
    res.send('ok')
})
server.use(static('./www'))