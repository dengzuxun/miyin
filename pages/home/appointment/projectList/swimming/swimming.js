// pages/home/appointment/projectList/swimming/swimming.js
import Dialog from '../../../../../miniprogram_npm/@vant/weapp/dialog/dialog';
import {
  formatDate,
  dateLater
} from '../../../../../utils/util'
import {
  post_appointment,
  get_appointmentDate
} from '../../../../../utils/homeapi/homeapi'
import {
  getuser
} from '../../../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    falg: false,
    tutor: '',
    users: null,
    Information: null,
    defalutChecked: 0, //预约时间的索引
    activeIndex: 0, //时间的索引
    advisorSelect: 0,
    datae: [], //七天的时间
    ysedata: [], //可以预约的时间
    notdata: [], //已被预约的时间
    thisData: [{
        "title": "2020-07-06",
        "status": 0,
      },
      {
        "title": "2020-08-06",
        "status": 1,
      },
      {
        "title": "2020-09-06",
        "status": 0
      },
      {
        "title": "2020-10-06",
        "status": 1
      }
    ],
    advisorList: [{
        "name": "唐华金",
        "imgUrl": "../../../../../static/icons/形状(1).png",
        "id": 1
      },
      {
        "name": "唐华",
        "imgUrl": "../../../../../static/icons/形状(1).png",
        "id": 2
      },
      {
        "name": "唐华的撒",
        "imgUrl": "../../../../../static/icons/形状(1).png",
        "id": 3
      },
      {
        "name": "唐华伟大",
        "imgUrl": "../../../../../static/icons/形状(1).png",
        "id": 4
      },
      {
        "name": "唐华附件",
        "imgUrl": "../../../../../static/icons/形状(1).png",
        "id": 5
      }
    ],
    teacher_id: 1,
    appointment_at_date: formatDate("YYYY-MM-DD")
  },


  // 选择导师
  clickList(e) {
    this.setData({
      advisorSelect: e.currentTarget.dataset.index
    })
    console.log(this.data.advisorList[e.currentTarget.dataset.index], e)
    const {
      id
    } = this.data.advisorList[e.currentTarget.dataset.index]
    this.setData({
      teacher_id: id,
      activeIndex: 0
    })
    this.setAppointmentDate(0)
  },

  setAppointmentDate(index) {
    const {
      year,
      month,
      day
    } = this.data.datae[index];
    this.setData({
      appointment_at_date: `${year}-${month}-${day}`
    })
    this.get_appointmentDate();
  },

  setIndex(e) {
    // console.log(typeof this.ysedata)
    this.setData({
      activeIndex: +e.target.dataset.i
    })
    this.setAppointmentDate(+e.target.dataset.i);
  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },



  onClick(event) {
    const {
      name
    } = event.currentTarget.dataset;
    this.setData({
      defalutChecked: name,
    });
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log()
    let Informations = JSON.parse(options.project_id)
    this.setData({
      Information: Informations
    })

    // 获取当前时间 7 代表当前时间往后7天的时间
    console.log(dateLater())
    this.setData({
      datae: dateLater()
    })
    this.get_appointmentDate();

    getuser({
      open_id: "openid"
    }).then((res) => {
      this.setData({
        users: res.data
      })
    })
  },

  get_appointmentDate() {
    // 获取默认导师时间
    const {
      teacher_id,
      appointment_at_date
    } = this.data;
    get_appointmentDate({
      teacher_id,
      appointment_at_date
    }).then((res) => {
      this.setData({
        ysedata: res.data
      })
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },

  // 点击预约发送请求
  appointmentSubmit(e) {
    this.setData({
      falg: true
    })



  },

  getUserInfos(event) {
    console.log(event.detail);
    wx.navigateTo({
      url: '/pages/home/appointment/bookingDetails/bookingDetails'
    })


  },

  onClose() {
    wx.redirectTo({
      url: '/pages/home/appointment/appointment?id=1'
    })
  },

  // 把获取的时间处理

  // dataDispose(date){
  //   var thad = this
  // date.forEach((item)=>{
  //   if(item.status==1){
  //     console.log(item)
  //     thad.ysedata.push(item)
  //   }else{
  //     thad.notdata.push(item)
  //   }
  // })
  // } ,





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