//app.js



App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.setStorageSync('code', res.code);
        // console.log(res)

      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
                console.log(res)
              }
            }
          })
        }
      }
    })

    wx.checkSession({
      success(res){
        // console.log(res)
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        wx.login({
          success(res){
            	console.log(res)
		  		  if (res.code) {
              wx.request({
                url: 'https://test.com/onLogin',
                data: {
                  code: res.code
                }
              })
              } else {
              console.log('登录失败！' + res.errMsg)
              }
            }
        }) //重新登录
      }
    })
  },
  globalData: {
    userInfo: null
  }
})


// App({
//   onLaunch: function () {
//     console.log('App onLaunch');
//     var that = this;
//     //  获取商城名称
//     wx.request({
//       url: 'https://api.it120.cc/'+ that.globalData.subDomain +'/config/get-value',
//       data: {
//         key: 'mallName'
//       },
//       success: function(res) {
//         wx.setStorageSync('mallName', res.data.data.value);
//       }
//     })
//     this.login();
//     this.getUserInfo();
//   },
//   login : function () {
//     var that = this;
//     var token = that.globalData.token;
//     // 如果有token
//     if (token) {
//       // 检查token是否有效
//       wx.request({
//         url: 'https://api.it120.cc/' + that.globalData.subDomain + '/user/check-token',
//         data: {
//           token: token
//         },
//         success: function (res) {
//           // 如果token失效了
//           if (res.data.code != 0) {
//             that.globalData.token = null;
//             that.login(); // 重新登陆
//           }
//         }
//       })
//       return;
//     }

//     // 【1】调用微信自带登陆
//     wx.login({
//       success: function (res) {
//         // 【2】 拿到code去访问我们的后台换取其他信息
//         wx.request({
//           url: 'https://api.it120.cc/'+ that.globalData.subDomain +'/user/wxapp/login',
//           data: {
//             code: res.code
//           },
//           success: function(res) {
//             // 如果说这个code失效的
//             if (res.data.code == 10000) {
//               // 去注册
//               that.registerUser();
//               return;
//             }
//             // 如果返回失败了
//             if (res.data.code != 0) {
//               // 登录错误 
//               wx.hideLoading();
//               // 提示无法登陆
//               wx.showModal({
//                 title: '提示',
//                 content: '无法登录，请重试',
//                 showCancel:false
//               })
//               return;
//             }
            
//             // 【3】 如果成功后设置token到本地
//             that.globalData.token = res.data.data.token;
//             // 保存用户信息
//             wx.setStorage({
//               key: 'token',
//               data:  res.data.data.token
//             })
//           }
//         })
//       }
//     })
//   },
//   // 注册？？ [这个看需求]
//   registerUser: function () {
//     var that = this;
//     wx.login({
//       success: function (res) {
//         var code = res.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到
//         wx.getUserInfo({
//           success: function (res) {
//             var iv = res.iv;
//             var encryptedData = res.encryptedData;
//             // 下面开始调用注册接口
//             wx.request({
//               url: 'https://api.it120.cc/' + that.globalData.subDomain +'/user/wxapp/register/complex',
//               data: {code:code,encryptedData:encryptedData,iv:iv}, // 设置请求的 参数
//               success: (res) =>{
//                 wx.hideLoading();
//                 that.login();
//               }
//             })
//           }
//         })
//       }
//     })
//   },
//   // 获取用户信息
//   getUserInfo:function() {
//     wx.getUserInfo({
//       success:(data) =>{
//         this.globalData.userInfo = data.userInfo;
//         wx.setStorage({
//           key: 'userInfo',
//           data:  data.userInfo
//         })
//         return this.globalData.userInfo;
//       }
//     })
//   },
//   globalData:{
//     userInfo:null,
//     subDomain:"34vu54u7vuiuvc546d",
//     token: null
//   },
//   getUserInfo: function () {
//     // 先调用wx.getSetting 获取用户权限设置
//     wx.getSetting({
//       success(res) {
//         console.log('1');
//         if (!res.authSetting['scope.userInfo']) {
//           wx.authorize({
//             scope: 'scope.userInfo',
//             success() {
//               // 用户已经同意小程序使用录音功能，后续调用 wx.getUserInfo接口不会弹窗询问
//               wx.getUserInfo({
//                 success: (data) => {
//                   this.globalData.userInfo = data.userInfo;
//                   wx.setStorage({
//                     key: 'userInfo',
//                     data: data.userInfo
//                   })
//                   return this.globalData.userInfo;
//                 }
//               })
//             }
//           })
//         } else {
//           console.log(2);
//         }
//       }
//     })

//   },
  
// })

