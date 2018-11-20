let express = require('express')
let static = require('express-static')
let cookieParser = require('cookie-parser')
let server = express()


let vip = {
    lsq: '123456',
}
server.listen(8080)
server.use(cookieParser())
server.use('', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.cookie('user', 'lsq', { maxAge: 1000000})
    res.cookie('password', '123456q', { maxAge: 1000000})
    // console.log(req.cookies)
    // res.send('ok')
    next()
})
server.use('/lsq', (req, res, next) => {
    // console.log(req.cookies)
    res.send({
        user: req.cookies.user,
        password: req.cookies.password,
    })
})
server.use('/login', (req, res, next) => {
    // console.log(req.query)
    // console.log(req.query)
    console.log(vip[req.query.user])
    console.log(vip.pass)

    if(vip[req.query.user] === '123456') {
        res.send('ok')
    } else {
        res.send('no ok')
    }
    
})
server.use(static('./www'))