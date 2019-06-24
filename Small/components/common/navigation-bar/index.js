// components/common/navigation-bar/index.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //小程序页面的表头
    title: {
      type: String,
      default: '穿衣助手拼团'
    },
    //是否展示返回和主页按钮
    showIcon: {
      type: Boolean,
      default: true
    },
    //  决定navback是否有效
    enable: {
      type: Boolean,
      value: 'true'
    },
    //  可传入改变nav back页面数
    delta: {
      type: Number,
      value: 1
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: 0,
    titleBarHeight: 0,
  },
  ready: function () {
    // 因为很多地方都需要用到，所有保存到全局对象中
    if (app.globalData && app.globalData.statusBarHeight && app.globalData.titleBarHeight) {
      this.setData({
        statusBarHeight: app.globalData.statusBarHeight,
        titleBarHeight: app.globalData.titleBarHeight
      });
    } else {
      let that = this
      wx.getSystemInfo({
        success: function (res) {
          if (!app.globalData) {
            app.globalData = {}
          }
          if (res.model.indexOf('iPhone') !== -1) {
            app.globalData.titleBarHeight = 44
          } else {
            app.globalData.titleBarHeight = 48
          }
          app.globalData.statusBarHeight = res.statusBarHeight
          that.setData({
            statusBarHeight: app.globalData.statusBarHeight,
            titleBarHeight: app.globalData.titleBarHeight
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

  /**
   * 组件的方法列表
   */
  methods: {
    //  navback监听函数
    headerBack() {
      this.triggerEvent('back', {})
      if (this.data.enable) {
        wx.navigateBack({
          delta: this.data.delta
        })
      }
    },
    headerHome() {
      wx.switchTab({
        url: '/pages/home/index'
      })
    }
  }
})
