let express = require('express')
let static = require('express-static')
let server = express()

server.listen(8080)
server.use('', (req, res, next) => {
    res.cookie('user', 'lsq', {maxAge: 10000})
    res.send('ok')
})
server.use(static('./www'))