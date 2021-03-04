const apiDemo = require('../../api/apiDemo.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    maxCount: {
      type: Number,
      default: 4
    }, 
  },

  /**
   * 组件的初始数据
   */
  data: {
    fileList: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    afterRead(event) {
      const { file } = event.detail;
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      console.log(file)
      apiDemo.upload({}).then((res)=>{

      })
    },
  }
})
