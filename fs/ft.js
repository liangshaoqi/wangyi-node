let http = require('http')
let urlLib = require('url')
let fs = require('fs')
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let json = urlLib.parse(req.url, true).query
    fs.writeFile(json.file, json.inner, (err) => {
        if(err) console.log(err)
        console.log('生成完毕')
    })
}).listen(8080)