// components/upload/upload.js
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
      // wx.uploadFile({
      //   url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      //   filePath: file.url,
      //   name: 'file',
      //   formData: { user: 'test' },
      //   success(res) {
      //     // 上传完成需要更新 fileList
      //     const { fileList = [] } = this.data;
      //     fileList.push({ ...file, url: res.data });
      //     this.setData({ fileList });
      //   },
      // });
    },
  }
})
