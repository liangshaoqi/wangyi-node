let data = 'ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=62095104_10_oem_dg&wd=ads%E5%87%80%E7%BD%91%E5%A4%A7%E5%B8%88&rsv_pq=a87afd060001c783&rsv_t=00eeVhnRzDv51jlbZbIWhlO8ptVstpZAuW0gka0QPX1i03rLFVUxF9NDKTJnmwAkWpqp0oMA%2Fqmn&rqlang=cn&rsv_enter=1&rsv_sug3=5&rsv_sug1=4&rsv_sug7=101&rsv_sug2=1&prefixsug=asDS&rsp=1&inputT=1229&rsv_sug4=1310'
let querystring = require('querystring')
console.log(querystring.parse(data))