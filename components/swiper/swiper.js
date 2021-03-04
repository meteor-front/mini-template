// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dotStyle: {
      type: String,
      default: 'square-dot'//'square-dot/round-dot'
    }, 
    swiperStyle: {
      type: String,
      default: 'screen-swiper'//'screen-swiper/card-swiper'
    },
    swiperList: {
      type: Array,
      default: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cardCur: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },
    onTap(e){
      let index=e.currentTarget.dataset.index
      this.triggerEvent('onClickItem', {index:index})
    }
  }
})
