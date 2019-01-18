//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selectList: [{
      "id": "10",
      "text": "济南市"
    }, {
      "id": "21",
      "text": "青岛市"
    }, {
      "id": "21",
      "text": "武汉市"
    },
    {
      "id": "21",
      "text": "杭州市"
    },
    {
      "id": "21",
      "text": "成都市"
    }],
    select: false,
    select_value1: {
      "id": "0",
      "text": "未选择"
    },
    select_value2: {
      "id": "0",
      "text": "未选择"
    },
    select_value3: {
      "id": "0",
      "text": "未选择"
    }
  },
  onLoad: function () {
    
  },
  m_select_touch(e) {
    let that = this;
    let selectIndex = e.detail.selIndex;
    let stype = e.detail.stype;
    console.log(stype);
    if (stype == "1") {
      let value1 = that.data.selectList[selectIndex];
      that.setData({
        select_value1: value1
      })
    }
    else if (stype == "2") {
      let value2 = that.data.selectList[selectIndex];
      that.setData({
        select_value2: value2
      })
    }
    else {
      let value3 = that.data.selectList[selectIndex];
      that.setData({
        select_value3: value3
      })
    }

  }
})
