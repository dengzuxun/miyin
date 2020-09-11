import Dialog from "../../../miniprogram_npm/@vant/weapp/dialog/dialog"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
  },
  // 每日签到
  signInClick(e){
    this.setData({ show: true });
  },
  // 签到完成后
  onClose(e) {
    console.log(e,"1111")
    this.setData({ show: false });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    Dialog.alert({
      title: '标题',
      message: '弹窗内容',
    }).then(() => {
      // on close
    });
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