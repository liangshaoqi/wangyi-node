let http = require('http')
let querystring = require('querystring')
http.createServer((req, res) => {
    //跨域设置
    res.setHeader('Access-Control-Allow-Origin', '*')
    let str = ''
    //监听数据
    req.on('data', (data) => {
        str += data

    })
    req.on('end', () => {
        let json = querystring.parse(str)
        if(json.user == 'lsq' && json.pwd === '123') {
            res.write('成功')
        } else {
            res.write('失败')
        }
        res.end()
    })
    
}).listen(8080)