// pages/store/commodityList/commodityList.js

import {
  getdetail
} from '../../../utils/shop'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectshow: false,
    shopdetails: '', //商品详情
    capacityIndex: 0, //容量index
    capacitytype: '', //容量
    value: '', //规格
    numberSop: 1, //商品数量
    capacityList: [], //规格选择
    freight:null,
    capacitychrire: '',
  },
  onClose() {
    this.setData({
      selectshow: false
    });
  },
  immediatelyClick(e) {
    this.setData({
      selectshow: true
    })
    // if (this.value!== '' && this.value !== undefined) {
    //   console.log("111111")
    //   wx.navigateTo({
    //     url: '/pages/store/orderSelect/orderSelect'
    //   })
    // }else{
    //   wx.showToast({
    //     title: "请选择规格", // 提示的内容
    //     icon: "none", // 图标，默认success
    //     duration: 2000, // 提示的延迟时间，默认1500
    //     mask: false, // 是否显示透明蒙层，防止触摸穿透
    // })
    // }
  },

  // 规格的确认
  affirm() {
    let capacitychrire = this.capacitychrire
    let numberSop = this.data.numberSop
    console.log(this.data.numberSop)
    this.setData({
      selectshow: false,
    })
      wx.navigateTo({
        url: '/pages/store/orderSelect/orderSelect?capacitychrire='+JSON.stringify(capacitychrire)+'&number='+numberSop+'&shoptitle='+this.shopdetails.title+'&freight='+this.freight
      })
    console.log(this.capacitychrire)
  },

  // 打开规格弹窗
  selectcommodityList(e) {
    this.setData({
      selectshow: true
    })


  },

  // 容量的选择
  capacityClick(e) {
    this.capacityIndex = e.currentTarget.dataset.index
    this.capacitychrire = this.capacityList[e.currentTarget.dataset.index]
    this.setData({
      capacityIndex: this.capacityIndex,
      capacitychrire: this.capacitychrire,

    })
  },

  // 数量
  onChange(event) {
    let numberSop = event.detail
    this.setData({
      numberSop:numberSop
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getdetail({
      shop_id: '3'
    }).then((res) => {
      this.shopdetails = res.data
      this.capacityList = res.data.normsRes
      this.capacitychrire = res.data.normsRes[0]
      this.freight =res.data.freight
      this.setData({
        shopdetails: this.shopdetails,
        capacityList: this.capacityList,
        capacitychrire: this.capacitychrire,
        freight:this.freight
      })
      console.log(res)
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