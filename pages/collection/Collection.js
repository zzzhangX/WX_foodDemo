// pages/collection/Collection.js
//获取应用实例
const app = getApp()
Page({
  openFood(event) {
    // console.log(event.currentTarget.id)
    let id = event.currentTarget.id
    wx.navigateTo({
      url: '../cookbook/cookbook?id=' + id + '',
      success: function () {
        // console.log("跳转成功")
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.request({
    //   url: 'http://192.168.43.21:8888/manage/getHomeWx.do', // 仅为示例，并非真实的接口地址
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // console.log(app.globalData.userInfo);
    app.collectbook=[]
    for (let i = 0; i < app.cookbook.length; i++) {
      if (app.cookbook[i].isCollect) {
        app.collectbook.push(app.cookbook[i])
      }
    }
    let that = this;
    this.setData({
      'user': app.globalData.userInfo,
      'collectbook': app.collectbook
    });

    
    // console.log(app.collectbook)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})