"use strict";(globalThis["webpackChunkcanvas_lms"]=globalThis["webpackChunkcanvas_lms"]||[]).push([[59966],{55510:(e,a,s)=>{s.r(a)
    var r=s(63056)
    var t=s(67294)
    var o=s(73935)
    var d=s(6507)
    var n=s.n(d)
    var i=s(75869)
    var l=s.n(i)
    s(42449)
    s(5777)
    var h=s(61323)
    var c=s(89714)
    var v=s(94184)
    var b=s.n(v)
    var p=s(1412)
    var u=s(3986)
    var _=s(50324)
    var m=s(98349)
    var E=s(20243)
    var S=s(32146)
    var g=s(61460)
    var D=s(20293)
    var w
    const y=(0,h.useScope)("dashboard")
    class C extends t.Component{constructor(){super(...arguments)
    this.state={showColorOverlays:!(ENV&&ENV.PREFERENCES&&ENV.PREFERENCES.hide_dashcard_color_overlays)}
    this.handleViewOptionSelect=(e,a)=>{let[s]=a
    if(this.props.view===s)return
    this.props.onDashboardChange(s)}
    this.handleColorOverlayOptionSelect=e=>{if(e===this.state.showColorOverlays)return
    this.setState({showColorOverlays:e},(()=>{this.toggleColorOverlays()
    this.postToggleColorOverlays()}))}}toggleColorOverlays(){document.querySelectorAll(".ic-DashboardCard__header").forEach((e=>{const a=e.querySelector(".ic-DashboardCard__header_image")
    if(a){const s=a.querySelector(".ic-DashboardCard__header_hero")
    s.style.opacity=this.state.showColorOverlays?.6:0
    const r=e.querySelector(".ic-DashboardCard__header-button-bg")
    r.style.opacity=this.state.showColorOverlays?0:1}}))}postToggleColorOverlays(){c.Z.post("/users/toggle_hide_dashcard_color_overlays")}render(){const e="cards"===this.props.view
    return(0,r.Z)(S.v2,{trigger:(0,r.Z)(g.h,{renderIcon:D.p,withBackground:false,withBorder:false,elementRef:this.props.menuButtonRef,screenReaderLabel:y.t("Dashboard Options")}),contentRef:e=>this.menuContentRef=e},void 0,(0,r.Z)(S.v2.Group,{label:y.t("Dashboard View"),onSelect:this.handleViewOptionSelect,selected:[this.props.view]},void 0,(0,r.Z)(S.v2.Item,{value:"cards"},void 0,y.t("Card View")),this.props.planner_enabled&&(0,r.Z)(S.v2.Item,{value:"planner"},void 0,y.t("List View")),(0,r.Z)(S.v2.Item,{value:"activity"},void 0,y.t("Recent Activity")),this.props.canEnableElementaryDashboard&&(0,r.Z)(S.v2.Item,{value:"elementary"},void 0,y.t("Homeroom View"))),e&&(w||(w=(0,r.Z)(S.v2.Separator,{}))),e&&(0,r.Z)(S.v2.Group,{label:(0,r.Z)(E.c,{},void 0,y.t("Toggle course card color overlays"))},void 0,(0,r.Z)(S.v2.Item,{onSelect:(e,a,s)=>this.handleColorOverlayOptionSelect(s),selected:this.state.showColorOverlays},void 0,y.t("Color Overlay"))))}}C.defaultProps={planner_enabled:false,view:"cards",menuButtonRef:()=>{},canEnableElementaryDashboard:false}
    var f=s(64406)
    var O=s(81174)
    var I=s(21741)
    var N=s(52583)
    var R=s(44128)
    var V=s(60474)
    var Z=s(74265)
    var L=s(16228)
    var A
    const T=(0,h.useScope)("dashboard")
    const[M,U]=["block","none"].map((e=>a=>{const s=document.getElementById(a)
    s&&(s.style.display=e)}))
    const B=()=>{var e
    return null===(e=ENV.current_user_roles)||void 0===e?void 0:e.includes("observer")}
    class F extends t.Component{constructor(){super(...arguments)
    this.state={currentDashboard:["cards","activity",this.props.planner_enabled&&"planner"].filter(Boolean).includes(this.props.dashboard_view)?this.props.dashboard_view:"cards",loadedViews:[],selectedObserveeId:null}
    this.ready=()=>this.props.planner_enabled?this.planner_init_promise:Promise.resolve()
    this.getActiveApp=()=>this.state.currentDashboard
    this.changeDashboard=e=>{if("elementary"===e)this.switchToElementary()
    else{this.saveDashboardView(e)
    this.switchDashboard(e)}return this.ready()}
    this.switchDashboard=e=>{this.showDashboard(e)
    this.setState({currentDashboard:e})}
    this.switchToElementary=()=>{this.saveElementaryPreference(false)}
    this.showDashboard=e=>{this.resetClasses(e)
    const a={planner:["dashboard-planner","dashboard-planner-header","dashboard-planner-header-aux"],activity:["dashboard-activity","right-side-wrapper"],cards:["DashboardCard_Container","right-side-wrapper"]}
    this.loadDashboard(e)
    Object.keys(a).filter((a=>a!==e)).forEach((e=>a[e].forEach(U)))
    a[e].forEach(M)}
    this.reloadDashboardForObserver=e=>{this.sidebarHasLoaded=false
    this.setState({selectedObserveeId:e,loadedViews:[]},(()=>{this.cardDashboardLoader=new f.J0
    this.loadDashboard(this.state.currentDashboard)}))}
    this.cardDashboardLoader=new f.J0
    this.planner_init_promise=void 0
    this.plannerLoaded=false
    if(this.props.planner_enabled){let e
    if(B()&&ENV.OBSERVED_USERS_LIST.length>0){const a=(0,N.S9)(ENV.current_user.id)
    const{id:s,name:r,avatar_url:t}=ENV.OBSERVED_USERS_LIST.find((e=>e.id===a))||ENV.OBSERVED_USERS_LIST[0]
    e=s===ENV.current_user_id?null:{id:s,name:r,avatarUrl:t}}this.planner_init_promise=(0,p.Mx)({changeDashboardView:this.changeDashboard,getActiveApp:this.getActiveApp,flashError:e=>(0,_.aZ)({message:e,type:"error"}),flashMessage:e=>(0,_.aZ)({message:e,type:"info"}),srFlashMessage:this.props.screenReaderFlashMessage,convertApiUserContent:m.Z.convert,dateTimeFormatters:{dateString:n().dateString,timeString:n().timeString,datetimeString:n().datetimeString},externalFallbackFocusable:this.menuButtonFocusable,observedUser:e,env:this.props.env})}}componentDidMount(){this.showDashboard(this.state.currentDashboard)}resetClasses(e){"planner"===e?document.body.classList.add("dashboard-is-planner"):document.body.classList.remove("dashboard-is-planner")}loadPlannerComponent(){(0,p.Ng)()}loadCardDashboard(e){this.cardDashboardLoader.loadCardDashboard(void 0,e)}loadStreamItemDashboard(e){const a=e&&B()?`/dashboard/stream_items?observed_user_id=${e}`:"/dashboard/stream_items"
    const r=n()("#dashboard-activity")
    if(!B()&&r.text().trim())return
    if(this.streamItemDashboard){this.streamItemDashboard.undelegateEvents()
    this.streamItemDashboard=void 0}const t=Promise.all([s.e(60314),s.e(32842),s.e(89014),s.e(9669)]).then(s.bind(s,68276))
    const o=c.Z.get(a)
    r.show().disableWhileLoading(Promise.all([t,o]).then((e=>{let[{default:a},s]=e
    r.html(s.data)
    this.streamItemDashboard=new a})).catch((0,_.IM)(T.t("Failed to load recent activity"))))}loadDashboard(e){if(B()&&!this.state.selectedObserveeId)return
    if(this.state.loadedViews.includes(e))return
    "planner"===e&&this.props.planner_enabled?this.planner_init_promise.then((()=>{if(!this.plannerLoaded){this.loadPlannerComponent()
    this.plannerLoaded=true}})).catch((e=>{(0,_.aZ)({message:T.t("Failed initializing dashboard"),type:"error"})})):"cards"===e?this.loadCardDashboard(this.state.selectedObserveeId):"activity"===e&&this.loadStreamItemDashboard(this.state.selectedObserveeId)
    if("planner"!==e&&!this.sidebarHasLoaded){this.props.loadDashboardSidebar(this.state.selectedObserveeId)
    this.sidebarHasLoaded=true}this.setState(((a,s)=>({loadedViews:a.loadedViews.concat(e)})))}saveDashboardView(e){c.Z.put("/dashboard/view",{dashboard_view:e}).catch((()=>{(0,_.IM)(T.t("Failed to save dashboard selection"))()}))}saveElementaryPreference(e){return c.Z.put("/api/v1/users/self/settings",{elementary_dashboard_disabled:e}).then((()=>window.location.reload())).catch((0,_.IM)(T.t("Failed to save dashboard selection")))}handleChangeObservedUser(e){e!==this.state.selectedObserveeId&&(0,R.Y2)(e).then((a=>{if(a.show_k5_dashboard)window.location.reload()
    else{this.reloadDashboardForObserver(e)
    this.props.planner_enabled&&this.planner_init_promise.then((()=>{(0,p.wB)(e)})).catch((()=>{}))}})).catch((e=>(0,_.IM)(T.t("Unable to switch students"))(e)))}render(){const e=this.props.allowElementaryDashboard&&(!B()||this.state.selectedObserveeId===ENV.current_user_id)
    return(0,r.Z)("div",{className:b()(this.props.responsiveSize,"ic-Dashboard-header__layout")},void 0,(0,r.Z)(L.kC,{direction:"row",alignItems:"center",justifyItems:"space-between",width:"100%"},void 0,(0,r.Z)(L.kC.Item,{},void 0,(0,r.Z)(Z.X,{as:"span",level:"h1",className:".ic-Dashboard-header__title"},void 0,(0,r.Z)("span",{className:"hidden-phone"},void 0,T.t("Dashboard")))),(0,r.Z)(L.kC.Item,{},void 0,(0,r.Z)("div",{className:"ic-Dashboard-header__actions"},void 0,B()&&(0,r.Z)(V.G,{as:"div",maxWidth:"16em",margin:"0 small"},void 0,(0,r.Z)(I.ZP,{currentUser:ENV.current_user,currentUserRoles:ENV.current_user_roles,observedUsersList:ENV.OBSERVED_USERS_LIST,canAddObservee:ENV.CAN_ADD_OBSERVEE,handleChangeObservedUser:e=>this.handleChangeObservedUser(e)})),this.props.planner_enabled&&(0,r.Z)("div",{id:"dashboard-planner-header",className:"CanvasPlanner__HeaderContainer",style:{display:"planner"===this.state.currentDashboard?"block":"none"}}),(0,r.Z)("div",{id:"DashboardOptionsMenu_Container"},void 0,(0,r.Z)(C,{view:this.state.currentDashboard,planner_enabled:this.props.planner_enabled,onDashboardChange:this.changeDashboard,menuButtonRef:e=>{this.menuButtonFocusable=e},canEnableElementaryDashboard:e})),this.props.planner_enabled&&(A||(A=(0,r.Z)("div",{id:"dashboard-planner-header-aux"})))))))}}F.defaultProps={dashboard_view:"cards",screenReaderFlashMessage:()=>{},env:{},loadDashboardSidebar:k,responsiveSize:"large"}
    const P=(0,p.sq)()(F)
    function k(e){const a=e&&B()?`/dashboard-sidebar?observed_user_id=${e}`:"/dashboard-sidebar"
    const t=n()("#right-side")
    const d=s.e(73898).then(s.bind(s,73898))
    const i=(0,u.V4)((0,u.N2)(a),"text")||c.Z.get(a)
    t.disableWhileLoading(Promise.all([d,i]).then((e=>{var a
    const s=e[0].default
    const d=e[1].data
    t.html(d)
    s()
    const n=document.querySelector(".Sidebar__TodoListContainer")
    n&&(0,p.Wi)(n)
    const i=document.getElementById("start_new_course")
    const l=document.getElementById("create_course_modal_container")
    i&&l&&null!==(a=ENV.FEATURES)&&void 0!==a&&a.create_course_subaccount_picker&&i.addEventListener("click",(()=>{o.render((0,r.Z)(O.z,{isModalOpen:true,setModalOpen:e=>{e||o.unmountComponentAtNode(l)},permissions:ENV.CREATE_COURSES_PERMISSIONS.PERMISSION,restrictToMCCAccount:ENV.CREATE_COURSES_PERMISSIONS.RESTRICT_TO_MCC_ACCOUNT,isK5User:false}),l)}))})))}l()((()=>{const e=document.getElementById("dashboard_header_container")
    if(e){const a=ENV.PREFERENCES.dashboard_view
    o.render((0,r.Z)(P,{dashboard_view:a,allowElementaryDashboard:!!ENV.ALLOW_ELEMENTARY_DASHBOARD,isElementaryUser:!!ENV.K5_USER,planner_enabled:ENV.STUDENT_PLANNER_ENABLED,flashError:n().flashError,flashMessage:n().flashMessage,screenReaderFlashMessage:n().screenReaderFlashMessage,env:window.ENV}),e)}else Promise.all([s.e(60314),s.e(32842),s.e(89014),s.e(9669)]).then(s.bind(s,68276)).then((e=>{let{default:a}=e
    return new a}))}))}}])
    
    //# sourceMappingURL=dashboard-c-4acb5f7df6.js.map