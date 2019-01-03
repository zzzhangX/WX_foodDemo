// pages/classification/classification.js
//获取应用实例
const app = getApp()
Page({
  tosearch(event){
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
  /**
   * 页面的初始数据
   */
  data: {
    classification: [{
      title: '大家都在搜',
      sumChoose: [{
        itemClass: 'itemG',
        name: '排骨'
      }, {
        itemClass: 'itemG',
          name: '粥'
      }, {
        itemClass: 'itemG',
          name: '宫保'
      }, {
        itemClass: 'itemG',
        name: '早餐'
      }, {
        itemClass: 'itemG',
        name: '豆腐'
      }]
    }, {
      title: '肉类',
      sumChoose: [{
        itemClass: 'itemR',
        name: '排骨'
      }, {
          itemClass: 'itemR',
        name: '虾'
      }, {
          itemClass: 'itemR',
        name: '鸡'
      }, {
          itemClass: 'itemR',
        name: '牛肉'
      }, {
          itemClass: 'itemR',
        name: '鱼'
      }, {
          itemClass: 'itemR',
        name: '羊肉'
      }]
    }, {
      title: '热门食材',
      sumChoose: [{
        itemClass: 'itemB',
        name: '山药'
      }, {
          itemClass: 'itemB',
        name: '鸡蛋'
      }, {
          itemClass: 'itemB',
        name: '白菜'
      }, {
          itemClass: 'itemB',
        name: '藕'
      }, {
          itemClass: 'itemB',
        name: '萝卜'
      }, {
          itemClass: 'itemB',
        name: '金针菇'
      }]
    }, {
      title: '流行学做',
      sumChoose: [{
        itemClass: 'itemO',
        name: '牛轧糖'
      }, {
          itemClass: 'itemO',
        name: '蛋挞'
      }, {
          itemClass: 'itemO',
        name: '粥'
      }, {
          itemClass: 'itemO',
        name: '凉菜'
      }, {
          itemClass: 'itemO',
        name: '披萨'
      }, {
          itemClass: 'itemO',
        name: '面条'
      }]
    }, {
      title: '烘焙',
      sumChoose: [{
        itemClass: 'itemDB',
        name: '威风蛋糕'
      }, {
          itemClass: 'itemDB',
        name: '曲奇'
      }, {
          itemClass: 'itemDB',
        name: '蛋糕卷'
      }, {
          itemClass: 'itemDB',
        name: '补丁'
      }, {
          itemClass: 'itemDB',
        name: '提拉米苏'
      }, {
          itemClass: 'itemDB',
        name: '吐司'
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '全部分类'
    })
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