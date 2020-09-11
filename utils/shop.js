
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

// export function postShop (data){
//   return api_request({
//     url:'/shop',
//     method:'POST',
//     data
//   })
// } 


// export function communityFabulous (data){
//   return api_request({
//     url:'/community/fabulous',
//     method:'POST',
//     data,
//   })
// } 