// pages/cookbook/cookbook.js
//获取应用实例
const app = getApp()
Page({
  shareFood() {
    this.onShareAppMessage()
  },
  backtohome(event) {
    wx.navigateBack({
      delta: 2
    })
  },
  collect(event) {
    let iscollect = this.data.isCollect
    let id = this.data.id
    // console.log(iscollect)
    // console.log(id)
    if (iscollect) {
      for (let i = 0; i < app.cookbook.length; i++) {
        if (id == app.cookbook[i].id) {
          app.cookbook[i].isCollect = false
          // console.log(app.cookbook[i])
          break;
        }
      }
      this.setData({
        collecttext: '收藏',
        isCollect: false
      })
    } else {
      for (let i = 0; i < app.cookbook.length; i++) {
        if (id == app.cookbook[i].id) {
          app.cookbook[i].isCollect = true
          // console.log(app.cookbook[i])
          break;
        }
      }
      this.setData({
        collecttext: '已收藏',
        isCollect: true
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    cookbook: {},
    collecttext: '收藏',
    isCollect: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    for (let i = 0; i < app.cookbook.length; i++) {
      if (options.id == app.cookbook[i].id) {
        this.cookbook = app.cookbook[i]
        this.id = options.id
        break;
      }
    }
    this.setData({
      cookbook: this.cookbook,
      id: options.id,
      isCollect: this.cookbook.isCollect
    })
    // console.log(this.data.cookbook)


    if (this.data.isCollect) {
      this.setData({
        collecttext: '已收藏'
      })
    } else {
      this.setData({
        collecttext: '收藏'
      })
    }
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
    let that = this;
    return {
      title: this.data.cookbook.title, // 转发后 所显示的title
      path: '/pages/cookbook/cookbook', // 相对的路径
      success: (res) => { // 成功后要做的事情
        console.log(res.shareTickets[0])
        // console.log

        wx.getShareInfo({
          shareTicket: res.shareTickets[0],
          success: (res) => {
            that.setData({
              isShow: true
            })
            console.log(that.setData.isShow)
          },
          fail: function(res) {
            console.log(res)
          },
          complete: function(res) {
            console.log(res)
          }
        })
      },
      fail: function(res) {
        // 分享失败
        console.log(res)
      }
    }
  }
})