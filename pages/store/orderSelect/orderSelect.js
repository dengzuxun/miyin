// pages/store/orderSelect/orderSelect.js

import {getuseraddressdefault} from '../../../utils/site'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      show:false,
      radio: 0,
      sitedefault:null,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png',
      },
      selectIndex:0,
      select:[
        {"name":"快递配送","pag":0},
        {"name":"到店自取","pag":1},
       ]
    },

    // 切换领取货物的方式
    selectClick(e){
      var index=e.target.dataset.index
      this.setData({
        selectIndex:index
        })
    },  
// 点击地址选项
select(){
  this.setData({
    show:true
    })
},
// 地址选项发送改变时触发
    onChange(event) {
      this.setData({
        radio: event.detail,
        show:false
      });
    },
    //取消地址选择
    siseIcon(){
      this.setData({
        show:false
      });
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getuseraddressdefault({
      open_id:"openid"
    }).then((res)=>{
        this.sitedefault = res.data
        this.setData({
          sitedefault: this.sitedefault
        })
    })
  },

  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})