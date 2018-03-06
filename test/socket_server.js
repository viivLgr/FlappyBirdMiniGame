/**
 * websocket
 */
(function () {
    'use strict';

    const WebSocketServer = require('ws').Server;
    const ws = new WebSocketServer({
        port: 8282
    });
    ws.on('connection', function (ws) {
        console.log('已经连接啦');
        // 小游戏发送的数据所调用的方法
        ws.on('message', function (message) {
            console.log('message', message)
            ws.send('123');
        });
    });
})();