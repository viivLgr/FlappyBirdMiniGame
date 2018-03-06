/**
 * 进行微信API测试
 */
export class ApiExamples {
    getUserInfo() {
        wx.getUserInfo({
            success: function (res) {
                console.log('用户信息', res);
            }
        })
    }

    login() {
        wx.login({
            success: function (res) {
                console.log('用户登录信息', res);
            }
        })
    }

    getSetting() {
        wx.getSetting({
            success: function (res) {
                console.log('getSettings', JSON.stringify(res));
            }
        })
    }

    // http网络请求的调用
    httpExample() {
        // POST
        // wx.request({
        //     url: 'http://127.0.0.1:8181/',
        //     method: 'POST',
        //     data: 'mydata',
        //     success: function(response){
        //         console.log('http-response',response);
        //         // 这里可以根据服务器的指示做一些动作
        //     }
        // })
        // GET
        wx.request({
            url: 'https://www.baidu.com',
            method: 'GET',
            success: function (response) {
                console.log('http-response', response);
                // 这里可以根据服务器的指示做一些动作
            }
        })
    }

    scoketExample() {
        wx.connectSocket({
            url: 'ws://127.0.0.1:8282',
            success: function (response) {
                console.log('socket', response);
            }
        });

        // 必须在wx.onSocketOpen中进行
        wx.onSocketOpen(function () {
            wx.sendSocketMessage({
                data: '这个是来自客户端的实时消息'
            })

            wx.onSocketMessage(function (message) {
                console.log('来自服务器', message);
            })
        });
    }

    download(){
        wx.downloadFile({
            url: 'https://upload.jianshu.io/users/upload_avatars/5311449/b3dff489-2b80-469e-8084-ce6b25c34c8a?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
            success: function (temp) {
                console.log('download', JSON.stringify(temp));
            }
        });
    }
}