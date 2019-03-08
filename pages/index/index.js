const app = getApp()

Page({
  data: {
    flowToChild:'page页面的数据流向子组件',
    isShow:false,
    blogList:[
      {
        id:'1',
        name:'项目',
        toogal:false,
        list:[
          {
            id:'1',
            blogTitle:'博客项目'
          },
          {
            id:'2',
            blogTitle:'伴读'
          },
        ]
      },
      {
        id:'2',
        name:'vue',
        toogal:false,
        list:[
          {
            id:'1',
            blogTitle:'vue架构'
          },
          {
            id:'2',
            blogTitle:'vue脚手架搭建'
          },
        ]
      },
      {
        id:'3',
        name:'小程序',
        toogal:false,
        list:[
          {
            id:'1',
            blogTitle:'小程序组件传参'
          },
          {
            id:'2',
            blogTitle:'小程序动态修改数组'
          },
        ]
      },
      {
        id:'4',
        name:'mpvue',
        toogal:false,
        list:[
          {
            id:'1',
            blogTitle:'mpvue生命周期'
          },
          {
            id:'2',
            blogTitle:'mpvue搭建项目'
          },
        ]
      }
    ]
  },
  onLoad: function () {
    let that = this;
  //  加载页面时如果用户没点击授权，打开弹窗，否则打开
    wx.getSetting({
      success(res) {
        if(res.authSetting['scope.userInfo']){
          that.setData({
            isShow:false
          })
        }else{
          that.setData({
            isShow:true
          })
        }
      }
    })
  },
  closeToast:function (e) {
    this.setData({
      isShow:e.detail.isShow
    })
  },
  showBlogList(event) {
    let xiugai = 'blogList['+event.currentTarget.id+'].toogal';
    this.setData({
      [xiugai]:!this.data.blogList[event.currentTarget.id].toogal
    })
  }
})
