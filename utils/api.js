import api_request from './https'

// 获取用户信息
export function getuser (params){
  return api_request({
    url:'/user',
    method:'GET',
    params
  })
} 

