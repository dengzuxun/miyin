// pages/my/baby/baby.js
// import Toast from '../../../miniprogram_npm/@vant/weapp/picker/index'
Page({
  data: {
    babyIndex:1,  //是否显示空位图片
    babyData:[{"name":"龙人","sex":"男","date":"2020-02-13"},{"name":"龙人","sex":"男","date":"2020-02-13"},{"name":"龙女","sex":"女","date":"2020-02-13"}],
    value:'', //用户名字
    value1:'', //用户性别
    value2:'', //用户生日
    show:false, //是否显示添加弹窗
    dateShow:false, //显示日期
    isShowDatePicker:false, //显示时间弹窗
    sexShow:false,   //显示性别选项
    sex:["男","女"],
    minDate: new Date(2000).getTime(),
    maxDate: new Date().getTime(),
    currentDate: new Date().getTime(),
   
  },
  // 显示性别选项
  setSex(){
      this.setData({
        sexShow:true
      })
  },
  // 点击性别的确认按钮获取当前选项的value值
  getValues(e){
    console.log(e.detail.value)
    this.setData({
      sexShow:false
    })
  },
  // 点击性别的取消按钮
  cancelSex(){
    this.setData({
      sexShow:false
    })
  },
    //获取时间
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  
  // 时间弹窗取消
  closeDatePicker(){
    this.setData({
      isShowDatePicker:false
    })
  },

// 点击时间弹出确认按钮
  complete(val){
      var date = new Date(val.detail);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      console.log(year,month,day);
      this.setData({
        value2 : year+'/'+month+'/'+day,
        isShowDatePicker : false
      })
  },

  // 显示日期
  addDate(){
    // console.log(this.currentDate)
    this.setData({
      isShowDatePicker:true
    })
  },

    // 添加宝宝
    addBaby(){
      this.setData({ show: true });

    },
    // 设置宝宝
    setbaby(e){
      console.log(e)
      this.setData({ show: true });
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