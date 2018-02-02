//配置npm
var root = '/api'

var axios = require('axios')

//判断元素类型
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

//参数过滤函数
function filterNull(o) {
  for (var key in o){
    if(o[key] === null){
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

//接口处理函数
function apiAxios(method, url, params, success, failure) {
  if(params) {
    params = filterNull(params)
  }
  axios({
    method:method,
    url:root+url,
    header:'Access-Control-Allow-Origin',
    data: method === 'POST' || method === 'PUT' ? params:null,
    params:method === 'GET' || method === 'DELETE' ? params:null,
    withCredentials:false
  }).then(function (res) {
    if(res.data.errorCode === 0){
      if(success){
        success(res.data)
      }
    }else{
      if(failure){
        failure(res.data)
      }else{
        window.alert('API error HTTP CODE' + res.status)
      }
    }
  }).catch(function (err) {
    let res = err.response
    if(err){
      window.alert('API error HTTP CODE' + res.status)
    }
  })
}

export  default {
  get:function (url,params,success,failure) {
    return apiAxios('GET',url,params,success,failure)
  },
  post:function (url,params,success,failure) {
    return apiAxios('POST',url,params,success,failure)
  },
  put:function (url,params,success,failure) {
    return apiAxios('PUT',url,params,success,failure)
  },
  delete:function (url,params,success,failure) {
    return apiAxios('DELETE',url,params,success,failure)
  }
}
