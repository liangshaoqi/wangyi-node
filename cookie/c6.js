
/**
 * 签名
 */
let express = require('express')
let static = require('express-static')
let cookieParser = require('cookie-parser')
let server = express()


server.listen(8080)
//先将秘钥放在cookieParser中,cookieParser('秘钥')
//使用之后,req.cookie()只能解析出没有秘钥的,而signedCookies只能解析有秘钥的
server.use(cookieParser('aklkfdjlkdsjfkdjsdsjkhhfkdjkjhkjhsdf'))
server.use('', (req, res, next) => {
    //console.log(req)
    //设置签名
    req.secret = 'aklkfdjlkdsjfkdjsdsjkhhfkdjkjhkjhsdf'
    //种cookie
    res.cookie('user', 'lsq', {signed: true})
    console.log(req.cookies)
    //利用cookieParser中间键的signedCookies方法解析签名串()只能解析加密的
    console.log(req.signedCookies)
    res.send('ok')
    
})