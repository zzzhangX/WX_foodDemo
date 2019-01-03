// pages/home/home.js
//获取应用实例
const app = getApp()
Page({
  myselect(event) {
    let searchcontent = event.currentTarget.id
    if (searchcontent != '') {
      wx.navigateTo({
        url: '../search/search?searchcontent=' + searchcontent + '',
        success: function () {
          // console.log("跳转成功")
        }
      })
    }
  },
  getValue(e){
    this.setData({
      searchcontent: e.detail.value
    });
  },
  tosearch(){
    // console.log(this.data.searchcontent)
    let searchcontent = this.data.searchcontent
    if (searchcontent!=''){
      wx.navigateTo({
        url: '../search/search?searchcontent=' + searchcontent + '',
        success: function () {
          // console.log("跳转成功")
        }
      })
    }
    this.setData({
      searchcontent:''
    })
  },
  openFood(event){
    // console.log(event.currentTarget.id)
    let id = event.currentTarget.id
    wx.navigateTo({
      url: '../cookbook/cookbook?id='+id+'',
      success:function(){
        // console.log("跳转成功")
      }
    })
  },
  mySeach() {
    this.setData({
      searchIcon: false
    })
  },
  searchBlur() {
    this.setData({
      searchIcon: true
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    searchcontent:'',
    searchIcon: true,
    foodArray: [{
      food: '排骨'
    }, {
      food: '儿童餐'
    }, {
      food: '大白菜'
    }, {
      food: '雪花酥'
    }, {
      food: '萝卜'
    }],
    storeArr: app.storeArr
  },











  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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