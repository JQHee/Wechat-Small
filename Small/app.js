const Login = require('/common/network/login.js');
import config from '/common/network/config.js';

//app.js
App({
  onLaunch: function () {
    //设置登录的服务器地址
    Login.setLoginUrl(config.loginUrl);
    // 登录
    this.globalData.userInfo = wx.getStorageSync('user');
    this.doLogin();
  },
  doLogin() {
    Login.login({
      success: result => {
        console.log('登录成功', result);
        wx.setStorageSync('user', result);
        this.globalData.userInfo = result;
        //console.log(wx.getStorageSync('user'))
      },
      fail: (error) => {
        console.log('登录失败', error);
      }
    });
  },
  getUserInfo(cb) {
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})