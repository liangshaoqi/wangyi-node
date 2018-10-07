let http = require('http')
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    //获取数据
    let url = req.url.substring(2)
    console.log(url)

    let arr = url.split('&')
    let json = {}
    for(let i=0;i<arr.length;i++) {
        json[arr[i].split('=')[0]] = arr[i].split('=')[1]
    }
    console.log(json)
    if(json.user == 'lsq' && json.pwd == '123456') {
        res.write('登录成功')
    } else {
        res.write('登录失败')
    }
    res.end()
}).listen(8080)