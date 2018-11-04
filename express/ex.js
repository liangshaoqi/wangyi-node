let express = require('express')
let bodyParser = require('body-parser') 
let static = require('express-static')
let server = express()

server.listen(8080);
// server.use('', bodyParser.urlencoded({}))
server.use(bodyParser.urlencoded({}))
//get第一个参数为二,三级路由,可以写接口,use可以代替get和post,通用
// server.get('/las/ls', (req, res) => {
//     console.log('有人get')
// })

// server.post('', (req, res) => {
//     console.log('有人post')
// })
server.use('/lsq', (req, res, next)  => {
    // console.log(req.body)
    // // console.log('有人来了')
    // console.log('我是user1')
    // req.lsq = 100
    // next()
    // res.write('成功啦')
    // res.end()
    console.log(req.body)
    if(req.body.user == 'lsq') {
        res.send('ok')
    } else{
        res.send('no')
    }
})
server.use(static('./www'))
// server.use('', (req, res)  => {
//     console.log('我是user2')
//     console.log(req.lsq)
// })