// pages/my/shop/shoppage/shoppage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false
  },
  // 弹出框
  showCction(){
    this.setData({show:true})
  },
  // 点击取消的icon
  onClose(){
    this.setData({show:false})
  },
  // 点击弹出层的兑换
  exchange(e){
    // 发送兑换请求

    this.setData({show:false})
    wx.navigateTo({
      url: '/pages/my/shop/shoppage/exchange/exchange',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("aaa")
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