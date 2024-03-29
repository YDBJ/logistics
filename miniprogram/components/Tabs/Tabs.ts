// components/Tabs/Tabs.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e:any){
      // 1 获取点击的索引
      const {index}=e.currentTarget.dataset;
      // 2 触发 父组件中的自定义事件
      // this.triggerEvent('父组件自定义事件名',参数)
      this.triggerEvent("tabsItemChange",{index});
    }
  }
})
