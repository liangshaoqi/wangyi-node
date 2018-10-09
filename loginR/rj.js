let fs = require('fs')
fs.readFile('./save.txt','utf8', (err, data) => {
    if(err){
        console.log(err)
    }else {
        console.log(typeof JSON.parse(data))
        let json = JSON.parse(data)
        json.a = '1'
        fs.writeFile('save.txt', JSON.stringify(json), (err) => {
            if(err) {
                cosnole.log(err)
            } else {
                console.log('修改成功')
            }
        })
    }

})