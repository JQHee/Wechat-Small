var moviceData = require('movice-data/movice-data.js');
var getCategoryList = require('category-data/category-data.js');

// pages/movies/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    articleList: [],
    categroyList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    
    console.log(getCategoryList())

    // 处理数据
    this.setData({
      bannerList: moviceData.bannerList,
      categroyList: getCategoryList()
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
    let that = this;
    let shareObj = {
      title: "影视大爆炸社区爆文",
      path: '/pages/talk/talk',
      success: function (res) {
        // 转发成功之后的回调
      },
      fail: function () {
        // 转发失败之后的回调
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          // 用户取消转发
        } else if (res.errMsg == 'shareAppMessage:fail') {
          // 转发失败，其中  为详细失败信息
        }
      },
      complete: function () {
        // 转发结束之后的回调（转发成不成功都会执行）
      }
    };
    return shareObj;
  },
  likeThis: function (e) {
    let [that, index] = [
      this,
      --e.target.dataset.id
    ];
    let status = that.data.articles[index].canLike;
    if (status) {
      let likeCount = that.data.articles[index].likes;
      that.setData({
        ["articles[" + index + "].likes"]: ++likeCount,
        ["articles[" + index + "].canLike"]: false
      })
    } else {
      wx.showToast({
        title: '您已经点过赞啦~',
        icon: "none",
        duration: 2000
      })
    }
  }
})