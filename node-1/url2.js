let http = require('http')
let urlLib = require('url')
let querystring = require('querystring')
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    // console.log(req.url)
    let json = urlLib.parse(req.url, true).query
    console.log(json)
    if(json.user == 'lsq' && json.pwd == '123456') {
        res.write('登录成功')
    } else {
        res.write('登录失败')
    }
}).listen(8080)