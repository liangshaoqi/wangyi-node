let http = require('http')
http.createServer((req, res) => {
    //console.log(req.url)
    let url = req.url
    if(url.indexOf('html') != -1) {
        console.log(url)
        if(url == '/index.html') {
            res.write('您访问的页面是index.html')
        } else {
            res.write('404')
        }
    }
    // res.setHeader('Access-Control-Allow-Origin', '*')
    // console.log('有人访问了')
    // res.write('woshiliangshaoqi')
    res.end()
}).listen(8080)