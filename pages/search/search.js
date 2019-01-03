// pages/search/search.js
//获取应用实例
const app = getApp()
Page({
  getValue(e) {
    this.setData({
      searchValue: e.detail.value
    });
  },
  search(){
    app.searchArr = []
    // console.log(this.data.searchValue)
    let searchcontent = this.data.searchValue
    for (let i = 0; i < app.cookbook.length; i++) {
      if (app.cookbook[i].title.indexOf(searchcontent) != -1) {
        app.searchArr.push(app.cookbook[i])
      }
    }
    this.setData({
      searchArr: app.searchArr
    })
    // console.log(this.data.searchArr)
  },
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
    searchArr: [],
    searchValue:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options.searchcontent)
    this.setData({
      searchValue: options.searchcontent
    })
    let searchcontent = options.searchcontent
    for (let i = 0; i < app.cookbook.length; i++) {
      if (app.cookbook[i].title.indexOf(searchcontent) != -1) {
        app.searchArr.push(app.cookbook[i])
      }
    }
    this.setData({
      searchArr: app.searchArr
    })
    // console.log(this.data.searchArr)
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
    app.searchArr=[]
    // console.log("123456"+app.searchArr)
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