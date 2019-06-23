
var goods = require('../../datas/goods-data.js');

const app = getApp();
// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys: [],
    currentId: 0,
    goods: [],
    contentHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onGetSystemInfo();
    const tempCategorys = [
      { "name": "第一个分类第一个分类第一个分类第一个分类第一个分类第一个分类第一个分类第一个分类", "id": 1 }, 
      { "name": "第二个", "id": 2 }, 
      { "name": "第三个", "id": 3 },
      { "name": "第一个", "id": 4 },
      { "name": "第二个", "id": 5 },
      { "name": "第三个", "id": 6 },
      { "name": "第三个", "id": 7 },
      { "name": "第三个", "id": 8 },
      { "name": "第三个", "id": 9 },
      { "name": "第三个", "id": 10 },
      { "name": "第三个", "id": 11 },
      { "name": "第三个", "id": 12 },
      { "name": "第三个", "id": 13 },
      { "name": "第三个", "id": 14 },
      { "name": "第三个", "id": 15 },
      { "name": "第三个", "id": 16 },
    ]
    const tempCurrentId = tempCategorys[0].id
    this.setData({
      categorys: tempCategorys,
      currentId: tempCurrentId,
      goods: goods.goodList,
      contentHeight: app.globalData.windowHeight - app.globalData.statusBarHeight - app.globalData.titleBarHeight
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
 * 获取设备信息
 */
  onGetSystemInfo: function () {
    let _this = this
    // 因为很多地方都需要用到，所有保存到全局对象中
    if (app.globalData.statusBarHeight && app.globalData.titleBarHeight) {
      _this.setData({
        statusBarHeight: app.globalData.statusBarHeight,
        titleBarHeight: app.globalData.titleBarHeight,
        navBarHeight: app.globalData.navBarHeight,
        windowHeight: app.globalData.windowHeight,
        windowWidth: app.globalData.windowWidth
      });
    } else {
      console.log(11111);
      wx.getSystemInfo({
        success: function (res) {
          console.log(res);
          if (!app.globalData) {
            app.globalData = {}
          }
          //这里默认iOS安卓导航栏都是44;
          app.globalData.titleBarHeight = 44;
          app.globalData.statusBarHeight = res.statusBarHeight;
          app.globalData.windowHeight = res.windowHeight;
          app.globalData.windowWidth = res.windowWidth;
          app.globalData.navBarHeight = res.statusBarHeight + 44;
          _this.setData({
            statusBarHeight: app.globalData.statusBarHeight,
            titleBarHeight: app.globalData.titleBarHeight,
            navBarHeight: app.globalData.navBarHeight,
            windowHeight: app.globalData.windowHeight,
            windowWidth: app.globalData.windowWidth
          });
        },
        failure() {
          that.setData({
            statusBarHeight: 0,
            titleBarHeight: 0
          });
        }
      })
    }
  },
  leftItemClick: function(e) {
    console.log(e)
    this.setData({
      currentId: e.detail.id
    })
  }
})