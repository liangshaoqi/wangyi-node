let http = require('http'),
urlLib = require('url')


let allData = {}
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let json = urlLib.parse(req.url, true).query
    if(allData[json.user]) {
        res.write('用户名已注册')
    }else {
        allData[json.user] = json.pwd
        res.write('注册成功')
    }
    res.end()
    console.log(allData)
}).listen(8080)
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let json = urlLib.parse(req.url, true).query
    if(allData[json.user] === json.pwd) {
        res.write('登录成功')
    } else {
        res.write('用户名或者密码错误')
    }
    res.end()
}).listen(8088)