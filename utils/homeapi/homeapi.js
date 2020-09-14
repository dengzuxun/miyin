import api_request from '../https'
// 获取文章
export function get_homeNews(data){
  return api_request({
    url:'/news',
    method:'GET',
    params:data
  })
}
// 获取文章类型
export function get_homeNewsType(data){
  return api_request({
    url:'/new/class',
    method:'GET',
    params:data
  })  
}
// 获取预约项目列表
export function get_project(data){
  return api_request({
    url:'/project',
    method:'GET',
    params:data
  })  
}
// 获取预约项目详情
export function get_projectDetail(data){
  return api_request({
    url:'/project/detail',
    method:'GET',
    params:data
  })  
}
// 预约下单上传
export function post_appointment(data){
  return api_request({
    url:'/appointment',
    method:'POST',
    params:data
  })   
}

// 获取预约时间
export function get_appointmentDate(data){
  return api_request({
    url:'/appointment/date',
    method:'GET',
    params:data
  })   
}


// 获取以预约项目
export function get_userproject(data){
  return api_request({
    url:'/user/project',
    method:'GET',
    params:data
  })   
}


// 获取以预约项目详情
export function get_userprojectDetail(data){
  return api_request({
    url:'/user/project/detail',
    method:'GET',
    params:data
  })   
}

// 取消以预约项目
export function delete_userprojectDetail(data){
  return api_request({
    url:'/user/project',
    method:'DELETE',
    params:data
  })   
}


// 获取套餐购买记录
export function get_matchingmatchingorder(data){
  return api_request({
    url:'/user/matching/order',
    method:'GET',
    params:data
  })   
}

// 获取预约套餐列表
export function get_projectmatching(data){
  return api_request({
    url:'/project/matching',
    method:'GET',
    params:data
  })   
}

// 取消套餐
export function delete_matchingorde(data){
  return api_request({
    url:'/user/matching/order',
    method:'DELETE',
    params:data
  })   
}



