let http = require('http')
let fs = require('fs')
let urlLib = require('url')
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    //获取数据,并处理
    let json = urlLib.parse(req.url).query
    console.log(json)
    //根据title新建文件名,内容为content的内容
    //存数据.先读取txt中的数据,然后加入
    fs.readFile('./content.txt', 'utf8', (err, data) => {
        if(err) {
            console.log('文章读取失败')
        } else {
            console.log('文章读取成功')
            // let newTitleArr = JSON.parse(data)
            console.log(data)
            // let newTitleStr = JSON.stringify(newTitleArr)
            // //重新存入txt文档
            // fs.writeFile('./content.txt', newTitleStr, (err) => {
            //     if(err) {
            //         console.log('重新写入失败')
            //         res.write('写入失败')
            //     } else {
            //         console.log('写入成功')
            //         res.write(newTitleArr)
            //     }
            // })
            res.end()
        }
    })
}).listen(8080)