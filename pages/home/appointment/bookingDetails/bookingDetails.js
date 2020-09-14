
import {get_userprojectDetail,delete_userprojectDetail} from '../../../../utils/homeapi/homeapi'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      bookingList:null,
  },

  // 取消预约
  cancels(e){
    console.log(e.target.dataset.id)

    delete_userprojectDetail({
      open_id:'openid',
      appointment_id:4
    }).then((res)=>{
      console.log(res)
      wx.showToast({
        title: "取消成功",
        duration: 2000
      })
      // wx.navigateBack({
      //   delta: 1
      // })
    }).catch((err)=>{
      console.log(err)
      wx.showToast({
        title: err.data.data,
        icon:'none',
        duration: 2000,
        success:(res)=>{
          console.log(res)
        }
      })
      
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取该项目的id
    
    get_userprojectDetail({
        open_id:'openid',
        appointment_id:3
      }).then((res)=>{

        this.setData({
          bookingList:res.data
        })
        console.log(res)
      }).catch((err)=>{
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