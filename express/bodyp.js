let querstring = require('querystring')
//使用中间键进行数据处理
exports.urlencoded = function() {
    return (req, res, next) => {
        let str = ''
        req.on('data', (data) => {
            str += data
        })
        req.on('end', () => {
            req.body = querstring.parse(str)
            next()
        })
    }
}