const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    console.log('我的');
  },
//  先通过wx.login函数获取code提交给后台，--getUserInfo调用授权页面后台通过appid、appsecreat、code获取openid、session_key传给前端
  wxLogin:function(){
    wx.login({
      success(res) {
        console.log("打印res.code")
        console.log(res.code)
      }
    })
  },

  getUserInfo:function(e){
    console.log("打印用户信息");
    console.log(e);
    console.log(e.code)
    this.wxLogin();
  }

})
