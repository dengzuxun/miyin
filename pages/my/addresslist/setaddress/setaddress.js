// pages/my/addresslist/setaddress/setaddress.js
import Dates from "./data";
import Toast from '../../../../miniprogram_npm/@vant/weapp/toast/toast';
  import {
  putsite,
  postsite
} from '../../../../utils/site'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    checked: false, //是否默认
    areaList: Dates, //省级选择数据
    value: '', //姓名
    value1: '', //手机
    value2: '', //地址
    value3: '', //详细地址
    isShell: '' //是新增还是修改
  },
  onChange() {
    this.setData({
      checked: this.checked = !this.checked
    })
  },

  // 选择所在地区
  dataList(e) {
    var a = "";
    var datas = e.detail.values;
    datas.forEach(item => a += item.name)
    this.setData({
      show: false,
      value2: a
    })
  },
  // 取消地址框
  delList() {
    this.setData({
      show: false,
    })
  },
  // 显示地址弹框
  addressList() {
    this.setData({
      show: true
    })
  },
  // 保存按钮
  btns() {

    this.isShell == "修改地址" ? this.amend() : this.increased()
  },

  // 修改地址
  amend() {
    putsite({
      "open_id": "openid",
      "province": "广东省",
      "city": "深圳市",
      "county": "南山区",
      "address": "东方科技大厦",
      "default": 1,
      "name": "坤哥",
      "mobile": "13570873333",
      "address_id": "2"
    }).then((res)=>{
      // console.log(res,"aaaa")
      Toast('保存成功');

      wx.navigateTo({
        url: '/pages/my/addresslist/addresslist',
      })
    }).catch((err)=>{
      Toast.loading({
        message: '保存中...',
        forbidClick: true,
        loadingType: 'spinner',
      });
      console.log(err)
      wx.navigateTo({
        url: '/pages/my/addresslist/addresslist',
      })
    })
  },

  // 新增地址
  increased() {
    Toast.loading({
      message: '保存中...',
      forbidClick: true,
      loadingType: 'spinner',
    });
    postsite({
      "open_id": "openid",
      "province": "广东省",
      "city": " 深圳市",
      "county": "南山区",
      "address": "北方科技大厦",
      "default": 1,
      "name": "坤哥",
      "mobile": "13570873333"
    }).then((res)=>{
      Toast.success('成功文案');
      // console.log(res,"bbbb")
      wx.navigateTo({
        url: '/pages/my/addresslist/addresslist',
      })
    }).catch((err)=>{
      console.log(err)
      Toast.fail('保存失败,请重新设置');
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.datas) {
      let sitdxg = JSON.parse(options.datas)
      this.value = sitdxg.name,
        this.value1 = sitdxg.mobile,
        this.value2 = `${sitdxg.province}${sitdxg.city}${sitdxg.county}`,
        this.setData({
          value: this.value,
          value1: this.value1,
          value2: this.value2,
          value3: sitdxg.address,
          checked: sitdxg.default == 1 ? true : false,
        })
    }

    // 修改头部的名字
    wx.setNavigationBarTitle({
      title: options.name
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