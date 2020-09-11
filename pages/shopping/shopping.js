// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEdit:true,
    isSelectedAll:false,
    totalPrice:0,
    total:0,
    list:[
      {
        nums:1,
        imgUrl:'/static/imgs/demo.png',
        title:'儿童大块积木桶装1-2-3-6周岁益智早教儿童大块积木桶装1-2-3-6周岁益智早教',
        type:[
          {
            text:'全部套装',
            price:'68'
          },
          {
            text:'全部套装1',
            price:'88'
          }
        ],
        selected:false,
        price:128
      },
      {
        nums:1,
        imgUrl:'/static/imgs/demo.png',
        title:'儿童大块积木桶装1-2-3-6周岁益智早教儿童大块积木桶装1-2-3-6周岁益智早教',
        type:[
          {
            text:'全部套装',
            price:'68'
          },
          {
            text:'全部套装1',
            price:'88'
          }
        ],
        selected:false,
        price:128
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  toggleSelected(e){
   const i = e.target.dataset.index;
   const list = this.data.list;
   list[i].selected = !list[i].selected;
    this.setData({
      list
    })
    this.selectedAllFlag();
    this.setTotalPrice();
    this.setTotal();
  },
  
  selectedAllFlag(){
    if(this.data.list.every(item=> item.selected)){
      this.setData({
        isSelectedAll:true
      })
    }else{
      this.setData({
        isSelectedAll:false
      })
    }
  },
  selectedAll(){
    const list = this.data.list;
    list.forEach(item=>item.selected = true);
    this.setData({
      list
    })
  },
  cancelSelectedAll(){
    const list = this.data.list;
    list.forEach(item=>item.selected = false);
    this.setData({
      list
    })
  },
  setTotalPrice(){
    this.setData({
      totalPrice:this.data.list.filter(item=>item.selected).reduce((p,c)=> p+c.price*c.nums,0)*100
    })
  },


  changeCount(e){
    const i = e.target.dataset.index
    const list = this.data.list;
    list[i].nums = e.detail;
    this.setData({
      list
    })
    this.setTotalPrice();
  },

  setTotal(){
    this.setData({
      total:this.data.list.filter(item=>item.selected).length
    })
    console.log(this.data.totalPrice)
  },
  
  toggleSelectedStatus(){
    if(this.data.isSelectedAll){
      this.cancelSelectedAll()
    }else{
      this.selectedAll()
    }
    this.setTotalPrice();
    this.setTotal();

    this.setData({
      isSelectedAll:!this.data.isSelectedAll
    })
  },
  toggelStatus(){
    this.setData({
      isEdit:!this.data.isEdit
    })
  }
})