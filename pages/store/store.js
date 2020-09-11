import {
  getShop,
  getShopColumn,
  communityFabulous
} from "../../utils/shop"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    dataType: [],
    shipoong: [],
    chired:[],
  },


  // 商品侧边栏事件
  storeClick(e) {
    let chiredIndex = e.target.dataset.index

    // var indexdata = this.shipoong[chiredIndex]
    this.setData({
      activeIndex: chiredIndex,
      chired:this.dataType[chiredIndex].column
    })
    // console.log(this)

  },

  // 商品列表
  commodityParticulars() {
    wx.navigateTo({
      url: '/pages/store/showproductList/showproductList',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getShop().then((res)=>{
      this.dataType = res.data
      this.setData({
        dataType:this.dataType,
        chired:res.data[0].column
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