var moviceData = require('../../datas/movice-data.js');
var category = require('../../datas/category-data.js');
var goods = require('../../datas/goods-data.js');

/**
 1、require 方法
注意： require 方法暂不支持绝对路径。
写法：require（"文件相对路径"）;

2、import  ... from ...  方法
注意：import ... from..  方法暂不支持绝对路径。
写法：import  name  from '文件相对路径' ; （name是模块对象的名称）;
 */

// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    articleList: [],
    categroyList: [],
    goodItems: [],
    alreadyLoadData: true,
    scrollH: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    console.log(category.getCategoryList())

    // 处理数据
    this.setData({
      bannerList: moviceData.bannerList,
      categroyList: category.getCategoryList(),
      goodItems: goods.goodList
    });

    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        let scrollH = res.windowHeight;
        self.setData({
          scrollH: scrollH
        });
      }
    });
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
  tapClick: function (event) {
    let detail = event.detail
    console.log("父类收到的值" + detail)
    wx.navigateTo({

      url: '/package/pages/web/index?url=' + "https://www.baidu.com" //跳转路径

    })
  },
  bingOnRefresh: function () {
    wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
      title: '加载中',
      icon: 'loading',
    });
    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({
        title: "下拉加载",
        icon: "none"
      })
    }, 3000)
  }
})