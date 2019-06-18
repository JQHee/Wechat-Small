// components/common-button/index.js
Component({

  /**
 * 外部样式
 */
  externalClasses: ['custom-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    buttonTitle: {
      type: String,
      value: "确定"
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
    tapAction: function(e) {
      this.triggerEvent('parentEvent')
    }
  }
})
