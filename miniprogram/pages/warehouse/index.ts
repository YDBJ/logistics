// pages/warehouse/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record: ""
  },
  // 复制
  //复制订单号
  copywxtap: function (e: any) {
    console.log(e.currentTarget.dataset.text)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (_res) {
        console.log(_res);
        wx.getClipboardData({
          //这个api是把拿到的数据放到电脑系统中的
          success: function (res) {
            console.log(res.data) // data
            wx.showToast({
              title: '复制成功',
            })
          }
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let fixedAddressee = "收件人：好物仓库";
    let fixedPhone = "联系电话：18688880130"
    let fixedMail = "邮政编码：518000";
    let fixedHarvest = "收货地址：深圳市龙华区龙华街道工业路壹城环智中心C座2607室";
    let arr = [];
    arr.push(fixedAddressee, fixedPhone, fixedMail, fixedHarvest)
    this.setData({
      fixedAddressee,
      fixedPhone,
      fixedMail,
      fixedHarvest,
      record: String(arr)
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})