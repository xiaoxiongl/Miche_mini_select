// component/select/select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propArray: {
      type: Array,
      value: []
    },
    selectText: {
      type: String,
      value: "请选择"
    },
    selectShow: {
      type: Boolean,
      value: false
    },
    stype: {
      type: String,
      value: "0"
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    selectShow: false,//初始option不显示
    animationData: {},//箭头的动画
    dropdown_Data: {},//下拉的动画
    textColor: "#ddd",
    dropdownHeight: 0 //下拉框高度
  },
  lifetimes: {
    ready() {
      //创建旋转动画
      let animation = wx.createAnimation({
        timingFunction: "ease",
        duration: 500
      })
      this.animation = animation;

      //创建下拉动画
      let dw_animation = wx.createAnimation({
        timingFunction: "ease",
        duration: 500
      })
      this.dw_animation = dw_animation;

      //下拉框高度
      let dataList = this.properties.propArray;
      let dwheight = dataList.length * 50 + "rpx";
      this.setData({
        dropdownHeight: dwheight
      })
    }
  },
  methods: {
    //控制下拉显示
    selectToggle: function () {
      let nowShow = this.data.selectShow;
      let animation = this.animation;
      let dw_animation = this.dw_animation;
      if (nowShow) {
        //箭头动画
        animation.rotate(0).step();
        this.setData({
          animationData: animation.export()
        })
        //下拉动画
        dw_animation.height(0).step();
        this.setData({
          dropdown_Data: dw_animation.export()
        })
      } else {
        //箭头动画
        animation.rotate(180).step();
        this.setData({
          animationData: animation.export()
        })
        let dropdownHeight = this.data.dropdownHeight;
        //下拉动画
        dw_animation.height(dropdownHeight).step();
        this.setData({
          dropdown_Data: dw_animation.export()
        })
      }
      this.setData({
        selectShow: !nowShow
      })
    },
    //选择事件
    setText: function (e) {
      var nowData = this.properties.propArray;
      var nowIdx = e.target.dataset.index;
      var nowText = nowData[nowIdx].text;
      this.animation.rotate(0).step();
      this.dw_animation.height(0).step();
      this.setData({
        textColor: "#333",
        selectShow: false,
        selectText: nowText,
        animationData: this.animation.export(),
        dropdown_Data:this.dw_animation.export()
      })

      this.triggerEvent('m_select_touch', { selIndex: nowIdx, stype: this.properties.stype });
    }
  }
})