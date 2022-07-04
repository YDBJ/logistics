// pages/order/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      id: 0,
      value: "全部",
      isActive: true
    },
    {
      id: 1,
      value: "待支付",
      isActive: false
    },
    {
      id: 2,
      value: "已支付",
      isActive: false
    },
    {
      id: 3,
      value: "已完成",
      isActive: false
    }],
    orders: [
      { order_number: "20220509140712345678", start: "中国", end: "美国", variable: { status: "待入仓", affirm: "确认打包", state: 0 }, details: '详情' },
      { order_number: "20220509140712345678", start: "中国", end: "美国", variable: { status: "待入仓", affirm: "确认打包", state: 1 }, details: '详情' },
      { order_number: "20220509140712345678", start: "中国", end: "美国", variable: { status: "待入仓", affirm: "去支付", state: 2 }, details: '详情' },
      { order_number: "20220509140712345678", start: "中国", end: "美国", variable: { status: "待入仓", affirm: "物流详情", state: 3 }, details: '详情' }
    ],
  },

  handleTabsItemChange(e: any) {
    // 1 获取被点击的标题索引 从子组件传过来的参数index
    const {
      index
    } = e.detail;
    let {
      tabs
    } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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