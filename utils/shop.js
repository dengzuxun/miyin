
import api_request from './https'

// 获取商品列表
export function getShop (params){
  return api_request({
    url:'/shop',
    method:'GET',
    params
  })
} 


// 获取商品类别
export function getShopColumn (params){
  return api_request({
    url:'/shop/column',
    method:'GET',
    params
  })
} 

// 获取商品详情
export function getdetail (params){
  return api_request({
    url:'/shop/detail',
    method:'GET',
    params
  })
} 

// 优惠卷
export function getcoupon (params){
  return api_request({
    url:'/user/coupon',
    method:'GET',
    params
  })
} 

//获取当前金额可使用的优惠卷
export function postordercoupon (params){
  return api_request({
    url:'/order/coupon',
    method:'POST',
    params
  })
} 

//订单提交快递
export function postorderexpress (params){
  return api_request({
    url:'/order/express',
    method:'POST',
    params
  })
} 
//订单提交自提
export function postorderextract (params){
  return api_request({
    url:'/order/extract',
    method:'POST',
    params
  })
} 



