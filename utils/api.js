import api_request from './https'

// 获取商品列表
export function getuser (params){
  return api_request({
    url:'/user',
    method:'GET',
    params
  })
} 