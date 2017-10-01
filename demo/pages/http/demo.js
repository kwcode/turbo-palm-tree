// pages/apirequest/demo.js
 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    demoData:"测试", 
  },

  /**
   * 生命周期函数--监听页面加载
   */ 
  onLoad: function (options) {  
    var self=this;
      const http = require('../../js/http.js')
      var params = { start: 1, count: 4 }; //参数
      http.post("https://api.douban.com/v2/movie/coming_soon", { start:1,count:4}, function(res){
        var _demoData = JSON.stringify(res.data);
        self.setData({ demoData: _demoData});
        console.log("返回结果=" +JSON.stringify(res.data));
      },function(e){
        console.log("返回error结果=" + JSON.stringify(e));
      } ); 
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