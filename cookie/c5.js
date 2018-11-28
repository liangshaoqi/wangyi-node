let express = require('express')
let static = require('express-static')
let cookieParser = require('cookie-parser')
let server = express()


server.listen(8080)
server.use(cookieParser())
server.use('', (req, res, next) => {
     //res.cookie('user', 'lsq')
     //res.cookie('user1', 'lsq')
    //res.clearCookie('user')
    //获取所有cookie,并删除
    for(let i in req.cookies){
        res.clearCookie(i)
    }
    res.send('ok')
    
})