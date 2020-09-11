import Dialog from "../../../miniprogram_npm/@vant/weapp/dialog/dialog";
import {getuseraddress,geaddress} from "../../../utils/site"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addresslistdata:[],
    siteId:'',
    siteIndex:''
  },
  // 删除地址
  delClick(e){
      this.siteId = e.currentTarget.dataset.del
    Dialog.confirm({
      title: '提示',
      message: '确认删除改发地址吗?',
    }).then((res) => {
      geaddress({
        "open_id": "openid",
        "address_id": "1"
      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })  
        // on confirm
      }).catch(() => {
        // on cancel
      });
  },
  // 修改地址
  deitClick(e){
    // console.log(e.target.dataset.edit)
    // console.log(this.addresslistdata[e.target.dataset.edit])
    let sited = this.addresslistdata[e.target.dataset.edit]
    wx.navigateTo({
      url: '/pages/my/addresslist/setaddress/setaddress?name=修改地址&datas=' + JSON.stringify(sited),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getuseraddress({
      open_id:"openid"
    }).then((res)=>{
      this.addresslistdata = res.data
      this.setData({
        addresslistdata:this.addresslistdata
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