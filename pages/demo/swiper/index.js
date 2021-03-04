// pages/demo/swiper/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
        "url": "https://public-1251501774.cos.ap-chengdu.myqcloud.com/randombg/random10.jpg"
      },
      {
        "url": "https://public-1251501774.cos.ap-chengdu.myqcloud.com/randombg/random120.jpg"
      },
      {
        "url": "https://public-1251501774.cos.ap-chengdu.myqcloud.com/randombg/random210.jpg"
      },
      {
        "url": "https://public-1251501774.cos.ap-chengdu.myqcloud.com/randombg/random310.jpg"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  onClickItem: function (e) {
    wx.showToast({
      icon: 'none',
      title: '您点击了' + e.detail.index
    })
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