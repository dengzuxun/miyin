import {
  getcoupon
} from "../../utils/shop"

Page({


  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    receiveOrder: [],
    myreelPage: [{
        "name": "未使用"
      },
      {
        "name": "已使用"
      },
      {
        "name": "已过期"
      },
    ],
    myreelIndex: 0,
    rel:0,
  },


  //使用卷
  getRell() {
    wx.switchTab({
      url: '/pages/store/store'
    })
  },


  // 切换状态
  myreelTab(e) {

    if (e.target.id == 2) {
      this.getcoupon(2)
      
    } else if (e.target.id == 1) {
      this.getcoupon(1)
    } else if (e.target.id == 0) {
      this.getcoupon(0)
    }

  },


  getcoupon(nus) {
    //获取优惠卷
    getcoupon({
      open_id: "openid",
      status: nus
    }).then((res) => {
      console.log(res)
      this.setData({
        receiveOrder: res.data.list,
        myreelIndex:nus
      })
    }).catch((err) => {
      console.log(err)
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取未使用优惠卷
    getcoupon({
      open_id: "openid",
      status:0
    }).then((res) => {
      console.log(res)
      this.setData({
        receiveOrder: res.data.list,
        rel:res.data.count
      })
    }).catch((err) => {
      console.log(err)
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