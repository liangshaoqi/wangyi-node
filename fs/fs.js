let fs = require('fs')
fs.writeFile('aa.txt', '写node很开心啊嘿嘿', (err) => {
    if(err)console.log(err)
    console.log('创建新文件成功') 
})