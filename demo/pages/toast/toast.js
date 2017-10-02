Page({
  openToast: function () {
    wx.showToast({
      title: '已完成',
      icon: 'success',
      duration: 3000
    });
  },
  openLoading: function () {
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 3000
    });
  },
  /*显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框*/
  showLoading: function () {
    wx.showLoading({
      title: '获取数据中....',
      mask:true
      //duration: 3000
    });
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  /*这是一个模态提示弹窗*/
  showModal:function(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态提示弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /*显示操作菜单*/
  showActionSheet:function(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  showlayer:function(){
    const layer = require('../../js/layer.js');
    layer.showWaiting('你好，世界！');

    setTimeout(function () {
      layer.hideWaiting()
    }, 2000)
  }
});