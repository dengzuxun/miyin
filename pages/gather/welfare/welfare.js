// pages/gather/welfare/welfare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    welfareList:[
      {"name":"每日任务",
      "chrind":[
        {
          "urlImg":"../../../static/imgs/timg1.jpg","title":"每日签到","btn":"去签到","integral":10,"id":1
        },
        {
          "urlImg":"../../../static/imgs/timg1.jpg","title":"邀请好友","btn":"去邀请","text":"成功邀请好友注册","integral":50,"id":2
        },
        {
          "urlImg":"../../../static/imgs/timg1.jpg","title":"分享商品","btn":"去分享","text":"分享商品给好友或群聊","integral":10,"id":3
        },
        {
          "urlImg":"../../../static/imgs/timg1.jpg","title":"分享文章","btn":"去分享","text":"分享文章给好友或群聊","integral":10,"id":4
        },
        {
          "urlImg":"../../../static/imgs/timg1.jpg","title":"社区发帖","btn":"去发帖","text":"在社区发表帖子并通过审核","integral":30,"id":5
        },
      ]
    },
    {"name":"新手任务",
      "chrind":[
        {
          "urlImg":"../../../static/imgs/timg1.jpg","title":"手机注册","btn":"已完成","text":"成功注册小程序","integral":100,"id":6
        },
        {
          "urlImg":"../../../static/imgs/timg1.jpg","title":"关注公众号","btn":"去关注","text":"关注平台公众号","integral":20,"id":7
        },
        {
          "urlImg":"../../../static/imgs/timg1.jpg","title":"填写宝宝资料","btn":"去添加","text":"填入宝宝完善的资料","integral":30,"id":8
        },
        {
          "urlImg":"../../../static/imgs/timg1.jpg","title":"添加收货地址","btn":"去分享","text":"保存提交收货地址","integral":30,"id":9
        }
      ]
    }
    ]
  },

  // 获取积分
  welfareType(e){
    this.setData({ show: true });
      console.log(e)
  },
  //弹框按钮
  onClose(e) {
    console.log(e,"1111")
    this.setData({ show: false });
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