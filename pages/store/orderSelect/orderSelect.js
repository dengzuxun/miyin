// pages/store/orderSelect/orderSelect.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    siteList: null,
    icon: {
      normal: '//img.yzcdn.cn/icon-normal.png',
      active: '//img.yzcdn.cn/icon-active.png',
    },
    selectIndex: 0,
    select: [{
        "name": "快递配送",
        "pag": 0
      },
      {
        "name": "到店自取",
        "pag": 1
      },
    ],
    parentData: {}, //父级来商品的数据
    numbers: null, //商品数量
    shoptitle: null,
    coupon: null,
    freight:null,
    orderSelectData:{}
  },

  // 切换领取货物的方式
  selectClick(e) {
    var index = e.target.dataset.index
    this.setData({
      selectIndex: index
    })
  },



 



  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

    console.log(options)
    // 父级来商品的数据
    this.parentData = JSON.parse(options.capacitychrire) //获取选择的规格 
    this.numbers = options.number //获取数量
    this.shoptitle = options.shoptitle //获取商品名称
    this.freight = options.freight
    this.setData({
      parentData: this.parentData,
      numbers: this.numbers,
      shoptitle: this.shoptitle,
      freight:this.freight
    })
    const {
      selectIndex,
      parentData,
      coupon,
      numbers,
      shoptitle,
      totalpicer,
      freight
    } = this.data;
    this.setData({
      orderSelectData: {
        selectIndex,
        parentData,
        coupon,
        numbers,
        shoptitle,
        totalpicer,
        freight
      }
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