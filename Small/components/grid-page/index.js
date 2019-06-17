// components/grid-page/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentTab: {
      type: Number,
      value: 0
    },
    list: {
      type: [],
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click: function (e) {
      console.log(e.currentTarget.dataset.id)
      console.log(e.currentTarget.dataset.index)
      wx.showToast({
        title: '第' + e.currentTarget.dataset.id + '栏' + '第' + e.currentTarget.dataset.index + '个',
        icon: 'success',
        duration: 1500
      })
    },
    /** 
       * 滑动切换tab 
       */
    bindChange: function (e) {
      console.log(e.detail.current)
      this.setData({ currentTab: e.detail.current });
    },
  }
})
