// Douban API 操作
const http = require('../../js/http.js')

// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '',
    page: 1,
    size: 20,
    type: 'in_theaters',
    subtitle: '加载中1...',
    loading: true,
    hasMore: true,
    movies: []
  },

  loadMore() {
    console.log("启动了");
    if (!this.data.hasMore) return
    var self = this;
    self.setData({ subtitle: '加载中...', loading: true })
    http.get("https://api.douban.com/v2/movie/in_theaters?page=2&count=5", function (res){
      var d= res.data;
      self.setData({ subtitle: d.title, movies: self.data.movies.concat(d.subjects), loading: false })
    }) 
  },

  // 页面加载n
  onLoad(params) { 
    this.data.title = params.title || this.data.title
    var self=this;
    http.get("https://api.douban.com/v2/movie/in_theaters?page=1&count=5", function (res) {
      var d=res.data;
      console.log("获取到数据="+JSON.stringify(d));
      self.setData({ subtitle: d.title, movies: d.subjects, loading: false })
    })  
  },

  // 页面准备完成
  onReady() {
    wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' })
  }
})
