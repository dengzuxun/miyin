import Dialog from "../../../miniprogram_npm/@vant/weapp/dialog/dialog"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderlistTabIndex:0,
    orderlistTab:[{"name":"全部"},{"name":"待付款"},{"name":"待发货"},{"name":"待收货"},{"name":"已完成"}],
    orderlistItem:[
      {"date":"2020-06-04","time":"14:50:06","title":"Aptamil卓萃白金版 爱他美婴儿宝宝配方奶粉1段380g 0-6个月","price":278.00,"status":1,"id":1},
      {"date":"2020-06-09","time":"14:50:06","title":"Aptamil卓萃白金版 爱他美婴儿宝宝配方奶粉1段380g 0-6个月","price":321.00,"status":0,"id":0},
      {"date":"2020-07-04","time":"14:50:06","title":"Aptamil卓萃白金版 爱他美婴儿宝宝配方奶粉1段380g 0-6个月","price":2321.00,"status":3,"id":3},
      {"date":"2020-06-09","time":"14:50:06","title":"Aptamil卓萃白金版 爱他美婴儿宝宝配方奶粉1段380g 0-6个月","price":232.00,"status":2,"id":2}
    ]
  },

// 切换头部tanbar
  orderlistTabClick(e){
    //请求数据
      var indexs= e.target.dataset.index
    console.log(e.target.dataset.index)
    this.setData({
      orderlistTabIndex:indexs
    })
  },

  

  // 
  cancelClick(e){
    Dialog.confirm({
      title: '提示',
      message: '确认要取消订单吗？',
      cancelButtonText:'仍要取消',
       confirmButtonText:'我在想想',
    }).then(() => {
        // on confirm
        console.log("aaa")
      }).catch(() => {
        // on cancel
        console.log("bbb")
      });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.orderId)
    this.setData({
      orderlistTabIndex:options.orderId
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