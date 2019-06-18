// components/movice-swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageDatas: {
      type: [],
      value: []
    },
    indicatorDots: {
      type: Boolean,
      value: true
    }, //小点
    indicatorColor: {
      type: String,
      value: "white"
    },//指示点颜色
    activeColor: {
      type: String,
      value: "coral"
    },//当前选中的指示点颜色
    autoplay: {
      type: Boolean,
      value: true
    }, //是否自动轮播
    interval: {
      type: Number,
      value: 5000
    }, //间隔时间
    duration: {
      type: Number,
      value: 3000
    }, //滑动时间
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
    itemTapAction: function (e) {
      // item 为自定义的绑定字段
      let item = e.currentTarget.dataset.item
      console.log(item)
      this.triggerEvent('parentEvent', item)
    },

  }
})
