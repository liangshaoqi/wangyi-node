let fs = require('fs')
fs.rename('./1.txt', '2.txt', (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('修改成功')
    }
})