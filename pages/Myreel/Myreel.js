Page({


  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    receiveOrder:[
      {"price":10,"condition":"1000","type":"奶粉类专用卷","gitdate":"2020-04-09","status":0},
      {"price":130,"condition":"10004","type":"奶粉类专用卷","gitdate":"2020-05-09","status":0},
      {"price":120,"condition":"10002","type":"奶粉类专用卷","gitdate":"2020-06-09","status":0},
      {"price":110,"condition":"10003","type":"奶粉类专用卷","gitdate":"2020-07-09","status":0},
      {"price":13,"condition":"1000","type":"奶粉类专用卷","gitdate":"2020-08-09","status":0},
    ],
    myreelPage:[
      {"name":"未使用"},
      {"name":"已使用"},
      {"name":"已过期"},
    ],
    myreelIndex:0
    
  },
  

  //使用卷
  getRell(){
    wx.switchTab({
      url: '/pages/store/store'
    })
  },


  // 切换状态
  myreelTab(e){
      console.log(e)
var  receiveOrders=[
  {"price":10,"condition":"1000","type":"奶粉类专用卷","gitdate":"2020-04-09","status":1},
  {"price":130,"condition":"10004","type":"奶粉类专用卷","gitdate":"2020-05-09","status":1},
  {"price":110,"condition":"10003","type":"奶粉类专用卷","gitdate":"2020-07-09","status":1},
  {"price":13,"condition":"1000","type":"奶粉类专用卷","gitdate":"2020-08-09","status":1}
] 
  if(e.target.id==1){
    this.setData({
      receiveOrder:receiveOrders
    })
  }



      this.setData({
        myreelIndex:e.target.id
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