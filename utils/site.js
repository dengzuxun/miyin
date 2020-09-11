import api_request from './https'

// 获取用户地址
export function getuseraddress (params){
  return api_request({
    url:'/user/address',
    method:'GET',
    params
  })
} 
// 获取默认地址


export function getuseraddressdefault (params){
  return api_request({
    url:'/user/address/default',
    method:'GET',
    params
  })
}

// 删除地址地址
export function geaddress (params){
  return api_request({
    url:'/user/address',
    method:'DELETE',
    params
  })
} 


// 修改地址
export function putsite(params){
  return api_request({
    url:'/user/address',
    method:'PUT',
    params
  })
}

// 新增地址
export function postsite(params){
  return api_request({
    url:'/user/address',
    method:'POST',
    params
  })
}
