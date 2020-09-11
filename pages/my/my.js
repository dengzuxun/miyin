import Dialog from "../../miniprogram_npm/@vant/weapp/dialog/dialog"
Page({

  data: {
    userName:false,
    values:'',
      myIndex:[
        {"name":"积分","value":4,"path":"/pages/my/integral/integral"},
        {"name":"优惠卷","value":34,"path":"/pages/Myreel/Myreel"},
        {"name":"文章收藏","value":32,"path":"/pages/my/articlecollect/articlecollect"}
      ],
      myOrder:[
        {"name":"待付款","urlImg":"../../static/icons/my-icon.png"},
        {"name":"待发货","urlImg":"../../static/icons/my_fhuo.png"},
        {"name":"待收货","urlImg":"../../static/icons/my_shouhou.png"},
        {"name":"已完成","urlImg":"/static/icons/my_cheng.png"}
      ],
      myServe:[
        {"name":"积分商城","urlImg":"../../static/icons/my_jfsc.png","path":"/pages/my/shop/shop"},
        {"name":"地址管理","urlImg":"../../static/icons/my_dizhi.png","path":"/pages/my/addresslist/addresslist"},
        {"name":"宝宝资料","urlImg":"../../static/icons/my_data.png","path":"/pages/my/baby/baby"},
        {"name":"在线客服","urlImg":"../../static/icons/my_kf.png"},
        {"name":"消息中心","urlImg":"../../static/icons/my_information.png","path":"/pages/my/information/information"},
        {"name":"关注公众号","urlImg":"../../static/icons/my_xiaox.png"}
      ]
  },

  serveClick(e){
    var orderId = e.currentTarget.dataset.orderitem
    wx.navigateTo({
      url: '/pages/my/orderlist/orderlist?orderId='+orderId,
    })

  },


// 点击设置姓名
setUserName(){
 this.setData({
  userName:true
 })
},

//用户姓名的确认按钮 
affirmName(e){
  console.log(e.currentTarget.dataset.users)
},


  // 进入我的订单
  toOrder(e){
      wx.navigateTo({
        url: '/pages/my/orderlist/orderlist',
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