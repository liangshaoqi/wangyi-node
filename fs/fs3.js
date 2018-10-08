let http = require('http'),
fs = require('fs'),
urlLib = require('url'),
querString = require('querystring')
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    //console.log(req.url)
    let urlName = req.url
    fs.readFile('.'+urlName, (err, data) => {
        if(err) {
            fs.readFile('./404.html', (err, data) => {
                if(err) {
                    console.lo(err)
                } else {
                    res.write(data)
                    res.end()
                }
            })
        } else {
            res.write(data)
            res.end()
        }
    })
}).listen(8080)