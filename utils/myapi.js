import api_request from './https'

// 获取用户优惠卷
export function getusercoupon(params){
  return api_request({
    url:'/user/coupon',
    method:'GET',
    params
  })
} 
