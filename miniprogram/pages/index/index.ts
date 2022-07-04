// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    showModal: true,
    leftMenuList: [{ name: "普通货物", id: 0 }, { name: "电子产品", id: 1 }, { name: "液体粉末", id: 2 }, { name: "内地EMS", id: 3 }, { name: "广东EMS", id: 4 }],
    currentIndex: 0
  },
  // 事件处理函数
  selectCountry() {
    console.log("国家");
  },
  handletap() {
    console.log("立即转运");
    this.setData({
      showModal: false
    })
  },
  handleItemTap(e: any) {
    const {
      index
    } = e.currentTarget.dataset;
    this.setData({
      currentIndex: index,
    })
  },
  cancel() {
    this.setData({
      showModal: true
    })
  },
  manual() {
    console.log("联系好物");
  },
  caricon() {
    console.log('转运须知');
  },
  computericon() {
    console.log('运费须知');
  },
  gainaddress() {
    console.log('获取地址');
  },
  onLoad() {

  },
})
