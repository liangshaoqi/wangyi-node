let fs = require('fs')
setTimeout(() => {
    fs.unlink('./1.txt', (err) => {
        if(err){
            console.log(err)
        } else {
            console.log('删除成功')
        }
    })
},3000)