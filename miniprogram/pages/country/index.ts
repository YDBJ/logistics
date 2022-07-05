// pages/country/index.ts
export interface CountryData {
  code: string;
  name: string;
  enName: string;
  phoneAreaCode: string;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    scrollTop: 0,
    customerList: [
      {
        firstLetter: "A",
        list: [
          { code: "AB01", name: "澳大利亚" },
          { code: "AB02", name: "阿根廷" },
          { code: "AB03", name: "安提瓜和巴布达" },
        ],
      },
      {
        firstLetter: "B",
        list: [
          { code: "BB01", name: "巴林" },
          { code: "BB02", name: "巴哈马" },
          { code: "BB03", name: "白俄罗斯" },
        ],
      },
      {
        firstLetter: "C",
        list: [
          { code: "CB01", name: "C1客户" },
          { code: "CB02", name: "C2客户" },
          { code: "CB03", name: "C3客户" },
          { code: "CB04", name: "C4客户" },
          { code: "CB05", name: "C5客户" },
        ],
      },
      {
        firstLetter: "D",
        list: [
          { code: "DB01", name: "D1客户" },
          { code: "DB02", name: "D2客户" },
          { code: "DB03", name: "D3客户" },
          { code: "DB04", name: "D4客户" },
          { code: "DB05", name: "D5客户" },
          { code: "DB06", name: "D6客户" },
        ],
      },
      {
        firstLetter: "M",
        list: [
          { code: "us", name: "美国" },
          { code: "bd", name: "孟加拉国" },
          { code: "mx", name: "墨西哥" },
        ],
      },
      {
        firstLetter: "Z",
        list: [
          { code: "cn", name: "中国" },
          { code: "zm", name: "赞比亚" },
        ],
      },
    ],
    filter: false,
    filterData: [{ code: '', name: '' }]
  },
  TimeId: -1,

  handleInput(e: any) {
    const {
      value
    } = e.detail;
    if (!value.trim()) {
      // 值不合法
      wx.showToast({
        title: '输入值违法',
        icon: 'error',
        duration: 2000
      })
      return;
    }
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
      let { customerList } = this.data;
      for (let values of customerList) {
        let list = values.list
        // list.map(v => v)
        let arr: any = []
        let box = list.filter((v, i) => {
          return v.name == value
        })
        if (box.length > 0) {
          console.log(box);
          this.setData({
            filterData: box,
            filter: true
          })
        }
      }
    }, 1000);
  },

  //索引栏发生变化事件	
  // onPageScroll(event) {
  //   console.log(123);
  //   this.setData({
  //     scrollTop: event.scrollTop,
  //   });
  // },

  /**选择客户发生事件 */
  getCustomer: function (event: any) {
    console.log(event.currentTarget.dataset.id);
    console.log(event.currentTarget.dataset.name);
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