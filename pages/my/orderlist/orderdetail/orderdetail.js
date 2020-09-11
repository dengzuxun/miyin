// pages/my/orderlist/orderdetail/orderdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderdetailIndex:0,
    stautsText:[{"name":"待支付","date":"还剩3天17小时订单关闭"},{"name":"等待卖家发货"},{"name":"卖家已发货"}],
    orderdetailBtn:[{"btn1":"取消订单","btn2":"立即支付"},{"btn1":"提醒发货"},{"btn1":"确认收货"}] //按钮
  },

  btns(e){
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 更改待支付的时间
    var count = 'stautsText[' + 0 + '].date'
    this.setData({
      [count]:"还剩3天17小时订单关闭"
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