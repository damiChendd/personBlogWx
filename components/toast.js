Component({
    properties:{
        flow:String,
    },
    data:{
        isShow:false
    },
    lifetimes:{
        attached() {
            // 在组件实例进入页面节点树时执行
            // console.log(this.properties.flow)
        },
        ready() {
            //挂载完整个页面执行
            // console.log(this.properties.flow)
            console.log(this.properties.isShow)
        }
    },
    methods:{
        onLoad() {
            console.log(this.properties.flow)
        },
        closeToast(){
            console.log("点击")
            this.triggerEvent("bindTap",{'isShow':this.data.isShow})
        },
        getUserInfo:function (e) {
            // console.log(e.userInfo)
            //如果点击确认则关闭提示弹窗，否则弹窗不关闭
            if(e){
                this.closeToast()
            }else{
            }
            //    获取code并调起微信授权弹窗
            wx.login({
                success(res) {
                    console.log(res.code)
                }
            })

        }

    },
});