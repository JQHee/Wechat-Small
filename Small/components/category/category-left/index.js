// components/category/category-left/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
      value: []
    },
    currentId: {
      type: Number,
      value: 0
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
    itemClick: function(e) {
      let item = e.currentTarget.dataset.item
      this.triggerEvent('parentEvent', item)
    }
  }
})
