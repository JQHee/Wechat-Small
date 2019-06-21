
var goods = require('../../datas/goods-data.js');

// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys: [],
    currentId: 0,
    goods: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const tempCategorys = [
      { "name": "第一个分类第一个分类", "id": 1 }, 
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
      goods: goods.goodList
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
  leftItemClick: function(e) {
    console.log(e)
    this.setData({
      currentId: e.detail.id
    })
  }
})