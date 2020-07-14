// pages/landing.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: "F*** my code",
        description: "Share your horror stories when writing code at Le Wagon",
        cta: "Start here"
    },

    goToStoriesPage: function() {
        wx.navigateTo({
          url: '/pages/stories/stories'
        })
      },

    switchToStoriesPage: function() {
        wx.switchTab({
          url: '/pages/stories/stories'
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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