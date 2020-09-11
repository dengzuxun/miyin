// pages/store/commodityList/commodityList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectshow:false,
    capacityIndex:0,
    capacitytype:'', //容量
    colortype:'', //颜色
    value:'',
    capacityList:[
      {"name":"1段"},
      {"name":"2段"},
      {"name":"3段"},
      {"name":"4段"},
      {"name":"5段"}
    ],
    colorIndex:0,
    colorList:[
      {"name":"1段"},
      {"name":"2段"},
      {"name":"3段"},
      {"name":"4段"}
    ]
  },
  onClose() {
    console.log("aaa")
    this.setData({ selectshow: false });
  },
  immediatelyClick(e){
    console.log(e)
      wx.navigateTo({
        url:'/pages/store/orderSelect/orderSelect'
      })
  },

  // 规格的确认
  affirm(){
    console.log(this.data.capacityList)
    this.value=  `${ this.data.capacityList[this.capacityIndex].name}-${this.data.colorList[this.colorIndex].name}` 
    this.setData({
      value: this.value,
      selectshow:false,
    })
  },

  // 打开规格弹窗
  selectcommodityList(e){
    this.setData({
      selectshow:true
    })
  },

  // 容量的选择
  capacityClick(e){
    console.log(e)
    this.capacityIndex = e.currentTarget.dataset.index
    this.setData({
      capacityIndex:  this.capacityIndex 
    })
  },
 // 颜色的选择
  colorClick(e){
    // console.log(e.currentTarget.dataset.index)
    this.colorIndex =e.currentTarget.dataset.index
    this.setData({
      colorIndex:this.colorIndex
    })
  },

  // 数量
  onChange(event) {
    console.log(event.detail);
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