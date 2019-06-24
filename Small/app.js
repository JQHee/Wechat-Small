
//app.js
App({
  onLoad: function (e) {
    console.log(12);
    loginAction()
  },
  onLaunch: function () {

  },

  loginAction() {
    // 登录
    var that = this
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              app.globalData.userInfo = res.userInfo
              console.log(res.userInfo)
            },
            fail: function (res) {
              console.log("失败")
            }
          })
        }
      }
    })
  },
  // 获取定位信息
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.request({
          url: 'http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&coordtype=gcj02ll&location=' + latitude + ',' + longitude + '&output=json&pois=0',
          method: "get",
          success: function (res) {
            // console.log(res.data.result.formatted_address)
            /*
            wx.setStorageSync('location', res.data.result.formatted_address.substr(res.data.result.formatted_address.indexOf('市') + 1, 10))
            */
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    location: "",
    statusBarHeight: 0,
    titleBarHeight: 0,
    navBarHeight: 0,
    windowHeight: 0,
    windowWidth: 0
  }
})