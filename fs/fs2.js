let fs = require('fs')
fs.readFile('./icon.png', (err, data) => {
    if(err) console.log(err)
    console.log(data)
    fs.writeFile('newIcon.png', data, (err) => {
        if(err) console.log(err)
         
    })
})