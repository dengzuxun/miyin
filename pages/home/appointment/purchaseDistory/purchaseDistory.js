// pages/home/appointment/purchaseDistory/purchaseDistory.js
import Dialog from '../../../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../../../miniprogram_npm/@vant/weapp/toast/toast';
import {
  get_matchingmatchingorder,
  delete_matchingorde
} from '../../../../utils/homeapi/homeapi'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    matchingorder: null
  },


  // 点击取消按钮
  downclick(e) {

    console.log(e.target.dataset.id)

    Dialog.confirm({
        // title: '标题',
        message: '确定要取消改订单',
        asyncClose: true
      })
      .then(() => {
        setTimeout(() => {
          Dialog.close();
        }, 1000);
      })
      .catch(() => {
        Dialog.close();
      });
  },

  //点击确认取消
  cancelclick() {
    this.delete_matchingorde()
  },



  //  取消订单
  delete_matchingorde(){
    delete_matchingorde({
      open_id:'openid',
      "order_id": 3
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)

    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    get_matchingmatchingorder({
      open_id: "openid"
    }).then((res) => {
      this.setData({
        matchingorder: res.data
      })
      console.log(this.data.matchingorder)
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