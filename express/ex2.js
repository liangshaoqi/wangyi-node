let express = require('express')
let bodyParser = require('./bodyp.js') 
let server = express()

server.listen(8080);
server.use(bodyParser.urlencoded())
console.log(bodyParser)
server.use('lsq', (req, res, next)  => {
    if(req.body.user == 'lsq') {
        res.send('ok')
    } else{
        res.send('no')
    }
})