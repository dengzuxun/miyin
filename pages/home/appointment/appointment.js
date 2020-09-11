// pages/home/appointment/appointment.js
 import {get_project,get_userproject} from "../../../utils/homeapi/homeapi"
 import {getuser} from "../../../utils/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAppointment:true,
    user:null,
    appointmentHasList:[],
    appointmentNotList:[]
  },


  istypeClick(e){
      console.log(e.currentTarget.dataset.is)
      var falg
      var getFalg = e.currentTarget.dataset.is
      if(getFalg == "not"){
        falg = true
      }else{
        falg= false
        get_userproject({
          open_id:"openid",
        }).then((res)=>{
          this.setData({
            appointmentHasList:res.data.list
          })
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
      }
      this.setData({
        isAppointment:falg
      })
  },

  detailsClick(e){
    console.log(e)
      wx.navigateTo({
        url: '/pages/home/appointment/bookingDetails/bookingDetails?id='+e.currentTarget.dataset.id,
      })
  },

  // 点击进入套餐购买记录
  goHistory(e){
    wx.navigateTo({
      url: '/pages/home/appointment/purchaseDistory/purchaseDistory',
    })
  },


  // 点击进入套餐购买
  gocombo(e){
      wx.navigateTo({
        url: '/pages/home/appointment/projectList/swimPackage/swimPackage',
      })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 获取用户信息
    getuser({
      open_id:"openid"
    }).then((res)=>{
      this.user=res.data
      this.setData({
        user:this.user
      })
      console.log(this.user)
    })



    // 获取预约项目
    get_project({
      "status":"1",
      "size":"5"
    }).then((res)=>{
      this.setData({
        appointmentNotList:res.data.list
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