import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
import {
  getShopColumn
} from "../../../utils/shop"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopType: [],
    getList: '',
    synthesizes: true,
    volumes:0,
    prices: true,
    volumeIndex: 0,
    priceIndex: 0,
    daindex1:'a',
    daindex2:'a'
 
  },
  getdata(){
        getShopColumn({
          column_id:1,
          sales:this.daindex1===0?"DESC":"ASC"
        }).then((res) => {
          this.shopType = res.data
          this.setData({
            shopType: this.shopType.list
          })
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
  },
  orderClick: function (e) {
    this.setData({
      daindex2: this.data.daindex2 = 'a'
    })
    if (this.daindex1 === 'a' || this.daindex1 === 0) {
      this.setData({
        daindex1: this.daindex1 = 1
      })
      this.getdata();
    } else {
      this.setData({
      // 
        daindex1:this.daindex1 = 0
      })
      this.getdata();

    }

  },
  pricClick(){
    this.setData({
      daindex1: this.data.daindex1 = 'a'
    })
    if (this.daindex2 === 'a' || this.daindex2 === 0) {
      this.setData({
        daindex2: this.daindex2 = 1
      })
    } else {
      this.setData({
      // 
        daindex2:this.daindex2 = 0
      })
    }
  },

  synthesizeClick(){
    this.setData({
      daindex1: this.data.daindex1 = 'a',
      daindex2: this.data.daindex2 = 'a'

    })

  },
  // 点击购物车
  addTrolley(e) {
    Toast('已将商品加入购物车~');
  },

  // 点击商品详情

  entranceClick(e) {
    wx.navigateTo({
      url: '/pages/store/commodityList/commodityList',
    })
  },


  // orderClick(e) {
  //   // console.log(e.currentTarget.dataset.index)
  //   let typeorder = e.currentTarget.dataset.types
  //   let index = e.currentTarget.dataset.index
  //   this.volumes = typeorder=="price"?'1':'2'



  //   // if (typeorder == "volume") {
  //   //   if (this.volumes) {
  //   //     getShopColumn({
  //   //       column_id: 1,
  //   //       sales: "DESC"
  //   //     }).then((res) => {
  //   //       this.shopType = res.data
  //   //       this.setData({
  //   //         shopType: this.shopType.list
  //   //       })
  //   //       console.log(res)
  //   //     }).catch((err) => {
  //   //       console.log(err)
  //   //     })
  //   //   } else if (!this.volumes) {
  //   //     getShopColumn({
  //   //       column_id: 1,
  //   //       sales: "ASC"
  //   //     }).then((res) => {
  //   //       this.shopType = res.data
  //   //       this.setData({
  //   //         shopType: this.shopType.list
  //   //       })
  //   //       console.log(res)
  //   //     }).catch((err) => {
  //   //       console.log(err)
  //   //     })
  //   //   }
  //   // } else if (typeorder == "price") {
  //   //   if (this.prices) {
  //   //     getShopColumn({
  //   //       column_id: 1,
  //   //       sales: "DESC"
  //   //     }).then((res) => {
  //   //       this.shopType = res.data
  //   //       this.setData({
  //   //         shopType: this.shopType.list
  //   //       })
  //   //       console.log(res)
  //   //     }).catch((err) => {
  //   //       console.log(err)
  //   //     })
  //   //   } else if (!this.prices) {
  //   //     getShopColumn({
  //   //       column_id: 1,
  //   //       sales: "ASC"
  //   //     }).then((res) => {
  //   //       this.shopType = res.data
  //   //       this.setData({
  //   //         shopType: this.shopType.list
  //   //       })
  //   //       console.log(res)
  //   //     }).catch((err) => {
  //   //       console.log(err)
  //   //     })
  //   //   }
  //   // }
  // },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getShopColumn({
      column_id: 1,
      sales: "DESC"
    }).then((res) => {
      this.shopType = res.data
      this.setData({
        shopType: this.shopType.list
      })
      console.log(res)
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