//引入http模块
const http = require('http');
//创建服务器
http.createServer(function(request,response) {
    //响应报文:响应状态码200，响应体内容类型 text/html   （文本使用text/plain）
    response.writeHead(200,{'Content-Type':'text/html'});
    //响应体内容
    response.end('<h1>Hello , Node.js Server</h1>');
}).listen(8888);
//启动提示日志
console.log("Node.js Server running at http://127.0.0.1:8888");