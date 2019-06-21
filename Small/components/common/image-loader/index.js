
/**
 * 图片预加载组件
 */

// components/image-loader/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //默认图片
    defaultImage: {
      type: String,
      value: ""
    },
    //原始图片
    originalImage: {
      type: String,
      value: ""
    },
    width: {
      type: String,
      value: ""
    },
    height: {
      type: String,
      value: ""
    },
    //图片剪裁mode，同Image组件的mode
    mode: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    finishLoadFlag: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    finishLoad: function (e) {
      this.setData({
        finishLoadFlag: true
      })
    }
  }
})
