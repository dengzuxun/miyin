// pages/commodity/filte/filte.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        imgShow:true,
        imgList:[]
  },
  addImg(){
    var than = this
    wx.chooseImage({
      count:6,
      sizeType:['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:function(res){
       if(res.tempFiles==0){
         return
       }else{
         console.log(res.tempFilePaths)
         than.setData({
          imgList:res.tempFilePaths
         })
       }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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