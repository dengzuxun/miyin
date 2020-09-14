// pages/home/appointment/projectList/projectList.js
import {
  get_projectDetail
} from '../../../../utils/homeapi/homeapi'
import {
  getuser
} from '../../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projectDetails: '',
    userinfon:null,
  },
// 预约项目
  appointments(e){
    // console.log(e.target.dataset.id)
    wx.navigateTo({
      url: '/pages/home/appointment/projectList/swimming/swimming?project_id='+JSON.stringify(this.data.projectDetails),
    })
  },


  // 购买套餐
  buyadd(e){
    wx:wx.navigateTo({
      url: '/pages/home/appointment/projectList/swimPackage/swimPackage',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 获取项目详情
    get_projectDetail({
        open_id: "openid",
        project_id: 3
      }).then((res) => {
        this.setData({
          projectDetails: res.data
        })
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(options)

    getuser({
      open_id:"openid"
    }).then((res)=>{
      this.setData({
        userinfon:res.data
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