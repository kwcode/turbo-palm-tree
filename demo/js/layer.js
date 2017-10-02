/*习惯用layer了，则把(wx原生的界面交互的)封装一下 
1、先引入：const layer = require('../../js/layer.js')
2、 
3、 
*/
module.exports = {
  /*
  * alert
  */
  alert(msg, yes) {
    wx.showModal({
      content: msg,
      showCancel: false,
      success: yes
    });
  },
  /*confirm
  点击按钮用 res.confirm判断 点击是\否
  */
  confirm(msg, yes) {
    wx.showModal({
      content: msg,
      showCancel: true,
      success: yes,
    });
  },
  /*等待一直等待 必须调用hideWaiting 才能关闭*/
  showWaiting(msg) {
    wx.showLoading({
      title: msg || '请稍等...',
      mask: true
    });
  },
  /*不等了*/
  hideWaiting() {
    wx.hideLoading();
  },
  /*加载等待，默认3秒关闭*/
  showLoading(msg, time) {
    wx.showToast({
      title: msg || '请稍等...',
      icon: 'loading',
      duration: time || 3000
    });
  }
}