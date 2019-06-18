let categoryList = [
  {
    "name": "美食",
    "icon": "/images/category/1.png"
  },
  {
    "name": "甜品饮食",
    "icon": "/images/category/2.png"
  },
  {
    "name": "美团超市",
    "icon": "/images/category/3.png"
  },
  {
    "name": "正餐精选",
    "icon": "/images/category/4.png"
  },
  {
    "name": "生鲜果蔬",
    "icon": "/images/category/5.png"
  },
  {
    "name": "全部商家",
    "icon": "/images/category/6.png"
  },
  {
    "name": "免费配送",
    "icon": "/images/category/7.png"
  },
  {
    "name": "新商家",
    "icon": "/images/category/8.png"
  },
  {
    "name": "分类",
    "icon": "/images/category/1.png"
  },
  {
    "name": "分类",
    "icon": "/images/category/2.png"
  },
  {
    "name": "分类",
    "icon": "/images/category/3.png"
  },
  {
    "name": "分类",
    "icon": "/images/category/4.png"
  }
];

const category = {
  getCategoryList: function() {
    // 处理分类页的数据
    let allCount = categoryList.length
    // 每一页的个数
    let pageCount = 8

    var tempCategoryList = []
    // 总共可以分多少页
    var allPage = allCount / pageCount + 1
    // 每一页9个数据
    for (let i = 0; i < allPage; i++) {
      var tempDatas = []
      var tempItem = {}
      // 第一页取出前9个
      for (let j = i * pageCount; j < (i + 1) * pageCount; j++) {
        if (j < allCount) { // 防止越界
          tempDatas.push(categoryList[j])
        }
      }
      if (tempDatas.length != 0) {
        tempItem = {
          "pageIndex": i,
          "items": tempDatas
        }
        tempCategoryList.push(tempItem)
      }
    }
    return tempCategoryList
  }
}
module.exports = category;