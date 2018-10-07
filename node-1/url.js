let urlLib = require('url')
let data = 'https://study.163.com/course/courseLearn.htm?courseId=1004726027&share=1&shareId=1138443607#/learn/video?lessonId=1049715930&courseId=1004726027'
console.log(urlLib.parse(data, true))
