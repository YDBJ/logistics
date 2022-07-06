// pages/address/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: [
      { title: "Name：", ishint: true, id: 0, hint: "Please fill in the recipient‘s name", isshow: false, },
      { title: "Phone：", ishint: true, id: 1, hint: "Please fill in the recipient‘s phone", isshow: false, },
      { title: "Address：", ishint: true, id: 2, hint: "Please fill in the address", isshow: false, },
      { title: "City：", id: 3, ishint: true, hint: "Please fill in the city", isshow: false, },
      { title: "PostCode：", id: 4, ishint: true, hint: "Please fill in the postcode", isshow: false, },
    ],
    areaList: {
      province_list: {
        110000: '北京市',
        120000: '天津市',
      },
      city_list: {
        110100: '北京市',
        120100: '天津市',
      },
    },
    checked: true,
    show: false,
  },

  _bindblur(e: any) {
    let index = e.currentTarget.dataset.index
    // abcdefg 13421312312 美国纽约
    let value = e.detail.value  //可以通过e.detail.value获取到输入框的值
    let name = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
    let Phone = /^1[34578]\d{9}$/
    let Address = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/
    let City = /^[a-zA-Z]+$/
    let PostCode = /^[a-zA-Z]+$/
    let {
      title
    } = this.data;
    let res = title.filter((_v, i) => i === index)[0]
    res.id === index ? res.isshow = true : res.isshow = false
    index === 0 && name.test(value) ? res.ishint = false : res.ishint = true
    index === 1 && Phone.test(value) ? res.ishint = false : ''
    index === 2 && Address.test(value) ? res.ishint = false : ''
    index === 3 && City.test(value) ? res.ishint = false : ''
    index === 4 && PostCode.test(value) ? res.ishint = false : ''
    this.setData({
      title
    })
  },

  Country() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onChange({ detail }: any) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
    console.log(detail);
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