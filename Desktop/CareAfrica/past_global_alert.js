"use strict";(globalThis["webpackChunkcanvas_lms"]=globalThis["webpackChunkcanvas_lms"]||[]).push([[23682],{70531:(e,n,t)=>{t.r(n)
    var o=t(63056)
    var a=t(6507)
    var r=t.n(a)
    var s=t(67294)
    var l=t(73935)
    var d=t(65020)
    var i=t(85394)
    var u=t(61323)
    const c=(0,u.useScope)("past_global_announcements")
    class h extends s.Component{constructor(){super(...arguments)
    this.state={shouldRender:false}
    this.handleAlertRender=()=>{this.setState({shouldRender:true})}}componentDidMount(){document.addEventListener("globalAlertShouldRender",this.handleAlertRender)}componentWillUnmount(){document.removeEventListener("globalAlertShouldRender",this.handleAlertRender)}render(){if(this.state.shouldRender)return(0,o.Z)(d.b,{renderCloseButtonLabel:c.t("Close")},void 0,(0,o.Z)("div",{"data-testid":"globalAnnouncementsAlert"},void 0,c.t("You can view dismissed announcements by going to Account and selecting Global\n            Announcements from the menu.")),(0,o.Z)(i.z,{"data-testid":"globalAnnouncementsButton",href:"/account_notifications",color:"primary",margin:"small 0 0 0"},void 0,c.t("View")))
    return null}}var m
    r()((()=>{l.render(m||(m=(0,o.Z)(h,{})),r()("<div/>").appendTo("#announcementWrapper")[0])}))}}])
    
    //# sourceMappingURL=past_global_alert-c-4de639c991.js.map