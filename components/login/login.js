const app = getApp();
const apiDemo = require('../../api/apiDemo.js');
import create from '../../utils/create'
create.Component({
  use: ['modalName'],
  /**
   * 组件的方法列表
   */
  methods: {
    hideModal() {
      this.store.data.modalName = ''
    },
    showModal() {
      this.store.data.modalName = 'loginModal'
    },
    onGotUserInfo: function (e) {
      this.hideModal()
      if ('getUserInfo:ok' == e.detail.errMsg) {
        wx.showLoading({
          title: '请稍后..'
        })
        this.getUser(function (data) {})
      }
    },
    getUser(success) {
      let that = this
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                app.globalData.userInfo = res.userInfo
                that.getCode(res)
              }
            })
          }
        }
      });
    },
    getCode(userData) {

      let that = this
      wx.login({
        success(res) {
          if (res.code) {
            //发起网络请求
            apiDemo.error({
              "code": res.code
            }).then((res) => {
              var data = res.data
              if (data.code == 0) {
                that.updateInfo(userData, data.sessionKey)
              } else {}
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    },
    updateInfo(userData, sessionKey) {
      let that = this
      apiDemo.error({
        "encryptedData": userData.encryptedData,
        "iv": userData.iv,
        "rawData": userData.rawData,
        "sessionKey": sessionKey,
        "signature": userData.signature
      }).then((res) => {
        var data = res.data
        if (data.code == 0) {
          //获取用户信息成功 做后续业务处理
          that.triggerEvent('updateUserInfo', {})
        } else {}
      })

    }
  }
})