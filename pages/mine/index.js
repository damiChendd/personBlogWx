const app = getApp()

Page({
  data: {
    flowToChild:'page页面的数据流向子组件',
    isShow:false,
    avatarUrl:'',
    list:[
      {
        id:'1',
        name:'我的介绍'
      },
      {
        id:'2',
        name:'在线客服'
      },
      {
        id:'3',
        name:'退出登录'
      }
    ]
  },
  onLoad: function () {
    // console.log('我的');
  },
  showToast:function () {
    this.setData({
      isShow:true
    })
    console.log("点击确认按钮")
  },
  closeToast:function (e) {
    console.log(e)
    // console.log("点击组件")
    this.setData({
      isShow:e.detail.isShow
    })
  }
})
