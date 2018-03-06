/**
 * 模拟服务器，接受前端小游戏的HTTP网络请求
 * 通过node来模拟
 */
(function () {
    'use strict';
    const http = require('http');

    http.createServer(function(request, response){
        let body = '';
        request.on('data', function(chunk){
            body += chunk;
        });

        request.on('end', function () {
            response.end('这是服务器返回的数据');
            console.log(body)
        });
    }).listen(8181);
})();