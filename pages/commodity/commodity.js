// pages/commodity/commodity.js


Page({

  /**
   * 页面的初始数据
   */
  data: {indexHtml:false,
        userList:[
          {"name":"十点半","text":"对你撒今晚八点打包文件阿卜杜的尾巴觉得比较的挖掘百度打包文件啊","id":15,"imgUrl":"","videoUrl":"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"},
          {"name":"塞俄俄不要","text":"对你撒今晚八点打包文件阿卜杜的尾巴觉得比较的挖掘百度打包文件啊","id":12,"imgUrl":"","videoUrl":"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"},
          {"name":"是大多数","text":"对你撒今晚八点打包文件阿卜杜的尾巴觉得比较的挖掘百度打包文件啊","id":11,"imgUrl":"","videoUrl":"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"},
          {"name":"额外的","text":"对你撒今晚八点打包文件阿卜杜的尾巴觉得比较的挖掘百度打包文件啊","id":14,"imgUrl":[{"imgUrls":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597914046680&di=5c118fa7be38e36872924654eec1f642&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg"},{"imgUrls":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597914046679&di=c11e9ca02af83db613881071cbace32c&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg"}],"videoUrl":""},
        ],
        
  },
// 点击展开发文和视频
  showClick(){
    console.log("aaa")
     this.setData({
      indexHtml:this.indexHtml = !this.indexHtml
     })
  },
// 点击发文
  goFilte(e){
    console.log(e,"1111")
    wx.navigateTo({
      url: '/pages/commodity/filte/filte',
    })
  },
// 点击发视频
  goVideo(e){
    console.log(e,"2222")
    wx.navigateTo({
      url: '/pages/commodity/posted/posted',
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