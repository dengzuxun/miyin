// pages/templeat/orderSelectPage/orderSelectPage.js
import {
  getuseraddressdefault,
  getuseraddress
} from "../../../utils/site"

import {
  postordercoupon,
  postorderexpress,
  postorderextract
} from "../../../utils/shop"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderSelectData: {
      type: Object,
      value: {}
    },
    selectIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    sum: 0, //总价格
    radio: 0, //地址列表的index
    show: false, //地址选择
    sitedefault: null, //默认地址
    siteList: null, //地址列表
    hide: false, //优惠卷选择
    coupondio: null,
    couponList: [{
        "price": "6.00",
        "name": "dsad"
      },
      {
        "price": "2.00",
        "name": "dsad"
      },
      {
        "price": "3.00",
        "name": "dsad"
      },
      {
        "price": "1.00",
        "name": "dsad"
      },
    ], //可用优惠卷列表
    couponshow: false, //可用优惠卷数量
    discounts: 0, //优惠卷金额
    countsvalue: null, //显示选择的优惠卷
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击地址选项
    select() {
      this.setData({
        show: true
      })
      getuseraddress({
        open_id: "openid"
      }).then((res) => {
        console.log(res)
        this.siteList = res.data
        this.setData({
          siteList: this.siteList
        })
      }).catch((err) => {
        console.log(err)
      })
    },

    // 打开优惠卷列表
    unrollCoupon() {
      this.setData({
        hide: true
      })
    },

    // 选择优惠卷
    onChangecoupon(event) {
      console.log(this.data.couponList)
      // let couponList=this.data.couponList[event.detail]
      this.setData({
        coupondio: event.detail,
        countsvalue: this.data.couponList[event.detail],
        couponshow: true,
        hide: false
      })
      const data = this.properties.orderSelectData;
      const discounts = this.data.couponList[event.detail].price;
      const overallpicer = this.getFormatterPrice(data.parentData.money * data.numbers - discounts)
      console.log(overallpicer)
      this.setData({
        discounts: this.data.couponList[event.detail].price,
        sum: overallpicer,
      })
    },

    // 关闭优惠卷
    couponIcon() {
      this.setData({
        hide: false
      })
    },

    // 地址选项发送改变时触发
    onChange(event) {
      console.log(this.siteList[event.detail])
      this.setData({
        radio: event.detail,
        show: false,
        sitedefault: this.siteList[event.detail]
      });
    },
    //取消地址选择
    siseIcon() {
      this.setData({
        show: false
      });
    },

    // 判断金额
    getFormatterPrice(num) {
      if (Number.isInteger(num) || num.toFixed(1) === String(num)) {
        return String(num.toFixed(2))
      } else {
        return String(num);
      }
    },

    // 判断看到配送还是到店自取提交
    onSubmit() {
      if (this.data.selectIndex == "0") {
        postorderexpress()   //快递请求
      } else if (this.data.selectIndex == "1") {
        postorderextract() //自取请求
      }
    },
    postorderexpress() {
      postorderexpress({
        "open_id": "openid",
        "shop_list": [{
            "norms_id": 1,
            "shop_id": 3,
            "number": 2
          },
          {
            "norms_id": 5,
            "shop_id": 11,
            "number": 10
          }
        ],
        "remarks": "备注备注",
        "address_id": "2",
        "coupon_id": "1"
      }).then((res) => {
        console.log(res)
      })
    },
    postorderextract() {
      postorderextract({
        "open_id": "openid",
        "shop_list": [{
            "norms_id": 1,
            "shop_id": 3,
            "number": 2
          },
          {
            "norms_id": 5,
            "shop_id": 11,
            "number": 10
          }
        ],
        "remarks": "备注备注",
        "coupon_id": "1"
      }).then((res) => {
        console.log(res)
      })
    },

    initData() {
      this.getuseraddressdefault().then(() => {
        this.initValue()
      })
    },
    getuseraddressdefault() {
      return new Promise((resolve, reject) => {
        // 获取默认地址
        getuseraddressdefault({
          open_id: "openid"
        }).then((res) => {
          this.sitedefault = res.data
          this.setData({
            sitedefault: this.sitedefault
          })
          // //获取可用优惠卷数量
          postordercoupon({
            "open_id": "openid",
            "shop_list": [{
              "norms_id": 1,
              "shop_id": 3,
              "number": 2
            }]
          }).then((res) => {
            this.setData({
              couponList: res.data
            })
            // this.coupon = res.data
          }).catch((err) => {
            if (err.data = "无可用优惠券") {
              this.coupon = 0
              this.setData({
                coupon: this.coupon
              })
            }
          })
        })
        resolve()
      })
    },
    initValue() {
      const data = this.properties.orderSelectData;
      console.log(data)
      let overallpicer = this.getFormatterPrice(data.parentData.money * data.numbers + +data.freight - this.data.discounts )
      this.setData({
        sum: overallpicer,
        price: data.parentData.money,
        freight: data.freight || 0,
        numbers: data.numbers,
        shoptitle: data.shoptitle,
        details: data.parentData.details,
        img: data.parentData.img,
      })
    }
  },


  attached() {
    this.initData()
  },


})