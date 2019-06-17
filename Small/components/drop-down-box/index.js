// components/drop-down-box/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dropdownData: {
      type: [],
      value: ["综合排序", "行政区", "商业圈"]
    },//下拉框的数组 
    selectData: {
      type: [],
      value: ["默认排序", "距离我最近", "距离我最远"]
    },//下拉选项的数组 
    sort_hidden: {
      type: Boolean,
      value: true
    },//下拉框的显示或隐藏 
    zhezhao: {
      type: Boolean,
      value: true
    },//遮罩层 
    dropup_pic_index: {
      type: Boolean,
      value: true
    },//选择下拉框 
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
    // 下拉框确定点击事件 
    dropdownTap(e) {
      let _this = this;
      _this.setData({
        id: e.currentTarget.dataset.index,//存入下拉框的id 
        sort_hidden: false,//下拉框的显示或隐藏 
        zhezhao: false,//遮罩层 
        upordown: "up",
      })
    },

    // 点击下拉列表 
    optionTap(e) {
      let _that = this;
      _that.setData({
        key: e.currentTarget.dataset.index,//存入下拉框的key 
        zhezhao: true,//遮罩层的显示或隐藏 
        sort_hidden: true,//下拉框的显示或隐藏 
        upordown: "down",
      })
    }
  }
})
