/*封装wx.request 的调用方式*/
const Promise = require('./bluebird')//ES6中原生支持了Promise，不过在原生不支持Promise的环境中，我们有很多第三方库来支持，比如Q.js和Bluebird
/*请求API*/
function requestApi(apiUrl, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: apiUrl,
      data: params,
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}
module.exports = {
  ajax(url, params) { 
    console.log("ajax请求地址=" + url);
    return requestApi(url, params).then(res => res.data)
  }, 
  findOne(id) {
    console.log("findOne="+id);
    return requestApi(url, params).then(res => res.data) 
  } 
}