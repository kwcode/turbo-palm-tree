// pages/moredata/demo.js
const layer = require('../../js/layer.js')
const http = require('../../js/http.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hasMore: true,//是否有更多数据
    isShowWaiting: true,//是否出现等待框 为什么不用layer.showWaiting() 的原因是 渲染界面需要时间 
    movies: []//绑定的列表数据
  },
  /*上拉-加载更多数据*/
  loadMore: function () {
    var self = this;
    self.setData({ isShowWaiting: true })
    http.get("http://127.0.0.1:666/common.json", function (res) {
      var d = res.data;
      self.setData({ movies: self.data.movies.concat(d.data), isShowWaiting: false })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    console.log("得到参数=" + JSON.stringify(options));
    var self = this;
    //假数据
    //movies
    http.get("http://127.0.0.1:666/common.json", function (res) {
      var d = res.data;
      //console.log("获取到数据=" + JSON.stringify(d));
      self.setData({ movies: d.data, isShowWaiting: false })
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})