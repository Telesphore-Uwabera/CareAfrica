(globalThis["webpackChunkcanvas_lms"]=globalThis["webpackChunkcanvas_lms"]||[]).push([[16588],{27456:(e,t,s)=>{"use strict"
s.d(t,{S:()=>v})
var r=s(45987)
var o=s(67294)
var a=s(80958)
var n=s(59092)
var i=s(46757)
var l=s(20243)
var c=s(45697)
var d=s.n(c)
const u={alt:d().string,as:d().elementType,children:d().node}
const h=["alt","as","children"]
const p=["alt","children"]
class v extends o.Component{constructor(...e){super(...e)
this.ref=null
this.handleRef=e=>{this.ref=e}}render(){const e=this.props,t=e.alt,s=e.children,c=(0,r.Z)(e,p)
const d=(0,a.B)(v,this.props)
return o.createElement(d,Object.assign({},(0,n.r)(c),{ref:this.handleRef}),o.createElement(l.c,null,t),o.createElement(i.x,null,s))}}v.displayName="AccessibleContent"
v.propTypes=u
v.allowedProps=h
v.defaultProps={as:"span",children:null}},69127:(e,t,s)=>{"use strict"
s.d(t,{D:()=>E})
var r=s(45987)
var o=s(67294)
var a=s(60474)
var n=s(59778)
var i=s(59092)
var l=s(16121)
var c=s(93211)
var d=s(11493)
var u=s(70917)
const h=(e,t)=>{const s=t.color
const r={primary:{color:e.primaryColor,borderColor:e.primaryColor},success:{color:e.successColor,borderColor:e.successColor},danger:{color:e.dangerColor,borderColor:e.dangerColor},info:{color:e.infoColor,borderColor:e.infoColor},warning:{color:e.warningColor,borderColor:e.warningColor},alert:{color:e.alertColor,borderColor:e.alertColor}}
return{pill:{label:"pill",display:"block",fontFamily:e.fontFamily,boxSizing:"border-box",padding:e.padding,background:e.background,borderWidth:e.borderWidth,borderStyle:e.borderStyle,borderRadius:e.borderRadius,lineHeight:`calc(${e.height} - (${e.borderWidth} * 2))`,...r[s]},text:{label:"pill__text",boxSizing:"border-box",textTransform:e.textTransformStyle,fontSize:e.textFontSize,fontWeight:e.textFontWeight,letterSpacing:"0.0625rem"},maxWidth:e.maxWidth}}
const p=h
const v=e=>{const t=e.borders,s=e.colors,r=e.spacing,o=e.typography,a=e.key
const n={instructure:{height:"1.5rem"}}
const i={fontFamily:null===o||void 0===o?void 0:o.fontFamily,padding:`0 ${null===r||void 0===r?void 0:r.xSmall}`,height:"1.3125rem",background:null===s||void 0===s?void 0:s.backgroundLightest,textTransformStyle:"uppercase",textFontSize:null===o||void 0===o?void 0:o.fontSizeXSmall,textFontWeight:null===o||void 0===o?void 0:o.fontWeightBold,maxWidth:"15rem",primaryColor:null===s||void 0===s?void 0:s.textDark,infoColor:null===s||void 0===s?void 0:s.textInfo,dangerColor:null===s||void 0===s?void 0:s.textDanger,successColor:null===s||void 0===s?void 0:s.textSuccess,warningColor:null===s||void 0===s?void 0:s.textWarning,alertColor:null===s||void 0===s?void 0:s.textAlert,borderWidth:null===t||void 0===t?void 0:t.widthSmall,borderStyle:null===t||void 0===t?void 0:t.style,borderRadius:"999rem"}
return{...i,...n[a]}}
const m=v
var f=s(45697)
var b=s.n(f)
var g=s(85454)
const y={as:b().elementType,children:b().node.isRequired,color:b().oneOf(["primary","success","danger","info","warning","alert"]),elementRef:b().func,margin:g.j7.spacing}
const _=["as","children","color","elementRef","margin"]
const S=["margin","children","color","as","elementRef","styles","makeStyles"]
var N,C,w,x
let E=(N=(0,d.w)(p,m),C=(0,l.j)(),N(w=C(w=(x=class extends o.Component{constructor(e){super(e)
this.ref=null
this.handleRef=e=>{const t=this.props.elementRef
this.ref=e
"function"===typeof t&&t(e)}
this.state={truncated:false}}componentDidMount(){var e,t
null===(e=(t=this.props).makeStyles)||void 0===e||e.call(t)}componentDidUpdate(){var e,t
null===(e=(t=this.props).makeStyles)||void 0===e||e.call(t)}handleTruncation(e){e!==this.state.truncated&&this.setState({truncated:e})}renderPill(e,t){const s=this.props,o=s.margin,l=s.children,c=(s.color,s.as),d=(s.elementRef,s.styles),h=(s.makeStyles,(0,r.Z)(s,S))
const p=(0,i.r)(h)
const v="function"===typeof t?t(p):p
const m=this.state.truncated?{}:{elementRef:this.handleRef}
return(0,u.tZ)(a.G,Object.assign({},v,{as:c},m,{margin:o,padding:"0",maxWidth:null===d||void 0===d?void 0:d.maxWidth,background:"transparent",borderRadius:"pill",borderWidth:"0",display:"inline-block",position:"relative",withFocusOutline:e,focusColor:"info"}),(0,u.tZ)("span",{css:null===d||void 0===d?void 0:d.pill},(0,u.tZ)("span",{css:null===d||void 0===d?void 0:d.text},(0,u.tZ)(n.Y,{onUpdate:e=>{this.handleTruncation(e)}},l))))}render(){return this.state.truncated?(0,u.tZ)(c.u,{renderTip:this.props.children,elementRef:this.handleRef},(({focused:e,getTriggerProps:t})=>this.renderPill(e,t))):this.renderPill()}},x.displayName="Pill",x.componentId="Pill",x.allowedProps=_,x.propTypes=y,x.defaultProps={color:"primary"},x))||w)||w)},68811:(e,t,s)=>{"use strict"
s.r(t)
var r=s(63056)
var o=s(6507)
var a=s.n(o)
var n=s(61323)
var i=s(67294)
var l=s(73935)
var c=s(12215)
var d=s(9524)
var u=s(60474)
var h=s(91269)
var p=s(20243)
var v=s(46757)
var m=s(3986)
const f=(0,n.useScope)("UnreadCounts")
const b=12e4
function g(e){const t=e.match(/\/api\/v1\/(.*)\/unread_count/)
const s=(t?t[1]:"UNKNOWN").replace(/\//g,"_")
return`unread_count_${window.ENV.current_user_id}_${s}`}y.defaultProps={onUpdate:Function.prototype,onError:e=>{console.warn(`Error fetching unread count: ${e}`)},srText:e=>f.t("%{count} unread.",{count:e}),pollIntervalMs:b,allowedAge:b/2,maxTries:5,useSessionStorage:true}
function y(e){const{targetEl:t,onUpdate:s,onError:o,srText:a,dataUrl:n,pollIntervalMs:c,allowedAge:d,maxTries:u,useSessionStorage:h,pollNowPassback:f}=e
const b=(0,i.useRef)({msUntilFirstPoll:0,savedChecked:false})
const[y,_]=(0,i.useState)(NaN)
let S=null
function N(){if(!t)return false
if(!window.ENV.current_user_id)return false
if(window.ENV.current_user&&window.ENV.current_user.fake_student)return false
return true}function C(e){"function"===typeof s&&s(e)}function w(e){_(e)
C(e)
if(!h)return
try{const t=JSON.stringify({updatedAt:+new Date,unreadCount:e})
sessionStorage.setItem(g(n),t)}catch(e){}}function x(){let e=null
let t=0
function s(){e&&clearTimeout(e)}async function r(){try{const e=await fetch(n,m._T)
const{unread_count:s}=await e.json()
const r="number"===typeof s?s:parseInt(s,10)
w(r)
t=0
S=null}catch(e){S=e}}async function a(s){if(document.hidden&&!s){document.addEventListener("visibilitychange",a,{once:true})
return}await r()
t+=1
t<u&&c>0&&(e=setTimeout(a,t*c))
S&&o(`URL=${n} error text=${S.message}`)}if(N()){f&&f((function(e){if("undefined"===typeof e){s()
a(true)}else{if("number"!==typeof e)throw new TypeError("Argument to the poll now callback, if present, must be numeric")
w(e)}}))
const t=b.current.msUntilFirstPoll
t>0?c>0&&(e=setTimeout(a,t)):a()}return s}const E=(0,i.useCallback)((()=>{const e=sessionStorage.getItem(g(n))
if(e&&N()){const t=JSON.parse(e)
const s=new Date-t.updatedAt
if(s<d&&y!==t.unreadCount){w(t.unreadCount)
C(t.unreadCount)
b.current.msUntilFirstPoll=d-s}}}),[d,y,n]);(0,i.useEffect)((()=>{if(h&&!b.current.savedChecked){E()
b.current.savedChecked=true}}),[h,E]);(0,i.useEffect)(x,[])
if(!y)return(0,l.createPortal)(null,t)
return(0,l.createPortal)(i.createElement(i.Fragment,null,(0,r.Z)(p.c,{},void 0,a(y)),(0,r.Z)(v.x,{},void 0,y)),t)}var _=s(83624)
var S=s(57144)
var N=s(63484)
var C=s(52583)
const w=(0,n.useScope)("Navigation")
const x=36e5
const E=i.lazy((()=>Promise.all([s.e(60314),s.e(87155),s.e(59778),s.e(92782),s.e(93863),s.e(65283),s.e(84781),s.e(46898),s.e(90939),s.e(59952),s.e(72448),s.e(47575),s.e(5783),s.e(22946),s.e(89789),s.e(85236),s.e(94537),s.e(42458),s.e(90473),s.e(70057),s.e(6502),s.e(41715),s.e(51344),s.e(78314),s.e(26750)]).then(s.bind(s,96811))))
const L=i.lazy((()=>Promise.all([s.e(60314),s.e(87155),s.e(59778),s.e(92782),s.e(93863),s.e(65283),s.e(84781),s.e(46898),s.e(90939),s.e(59952),s.e(72448),s.e(47575),s.e(5783),s.e(22946),s.e(89789),s.e(85236),s.e(94537),s.e(42458),s.e(90473),s.e(70057),s.e(6502),s.e(41715),s.e(51344),s.e(78314),s.e(26750)]).then(s.bind(s,41501))))
const T=i.lazy((()=>Promise.all([s.e(60314),s.e(87155),s.e(59778),s.e(92782),s.e(93863),s.e(65283),s.e(84781),s.e(46898),s.e(90939),s.e(59952),s.e(72448),s.e(47575),s.e(5783),s.e(22946),s.e(89789),s.e(85236),s.e(94537),s.e(42458),s.e(90473),s.e(70057),s.e(6502),s.e(41715),s.e(51344),s.e(78314),s.e(26750)]).then(s.bind(s,93652))))
const k=i.lazy((()=>Promise.all([s.e(60314),s.e(87155),s.e(59778),s.e(92782),s.e(93863),s.e(65283),s.e(84781),s.e(46898),s.e(90939),s.e(59952),s.e(72448),s.e(47575),s.e(5783),s.e(22946),s.e(89789),s.e(85236),s.e(94537),s.e(42458),s.e(90473),s.e(70057),s.e(6502),s.e(41715),s.e(51344),s.e(78314),s.e(26750)]).then(s.bind(s,32201))))
const U=i.lazy((()=>Promise.all([s.e(60314),s.e(87155),s.e(59778),s.e(92782),s.e(93863),s.e(65283),s.e(84781),s.e(46898),s.e(90939),s.e(59952),s.e(72448),s.e(47575),s.e(5783),s.e(22946),s.e(89789),s.e(85236),s.e(94537),s.e(42458),s.e(90473),s.e(70057),s.e(6502),s.e(41715),s.e(51344),s.e(78314),s.e(26750)]).then(s.bind(s,16961))))
const R=i.lazy((()=>Promise.all([s.e(60314),s.e(87155),s.e(59778),s.e(92782),s.e(93863),s.e(65283),s.e(84781),s.e(46898),s.e(90939),s.e(59952),s.e(72448),s.e(47575),s.e(5783),s.e(22946),s.e(89789),s.e(85236),s.e(94537),s.e(42458),s.e(90473),s.e(70057),s.e(6502),s.e(41715),s.e(51344),s.e(78314),s.e(26750)]).then(s.bind(s,55157))))
const A=/^\/accounts\/[^\/]*\/(external_tools)/
const P=/^\/(courses|groups|accounts|grades|calendar|conversations|profile)|^#history/
const I="ic-app-header__menu-list-item--active"
const Z=e=>e.can_access&&!e.concluded
const D=["courses","groups","accounts","profile","history","help"]
const O={courses:"/api/v1/users/self/favorites/courses?include[]=term&exclude[]=enrollments&sort=nickname",groups:"/api/v1/users/self/groups?include[]=can_access",accounts:"/api/v1/accounts",profile:"/api/v1/users/self/tabs",history:"/api/v1/users/self/history",help:"/help_links"}
const V=10
let F
function z(){if(!F){F=document.createElement("div")
F.id="nav-tray-portal"
F.setAttribute("style","position: relative; z-index: 99;")
document.body.appendChild(F)}return F}function $(){}class W extends i.Component{constructor(e){super(e)
this.forceUnreadReleaseNotesPoll=void 0
this.openPublishUnsubscribe=$
this.overrideDismissUnsubscribe=$
this.closePublishUnsubscribe=$
this.unreadReleaseNotesCountElement=null
this.unreadInboxCountElement=null
this.unreadSharesCountElement=null
this._isLoadedOrLoading=e=>{switch(e){case"courses":return this.state.coursesAreLoaded||this.state.coursesLoading
case"groups":return this.state.groupsAreLoaded||this.state.groupsLoading
case"accounts":return this.state.accountsAreLoaded||this.state.accountsLoading
case"profile":return this.state.profileAreLoaded||this.state.profileAreLoading
case"history":return this.state.historyAreLoaded||this.state.historyLoading
case"help":return this.state.helpAreLoaded||this.state.helpLoading}}
this.closeTray=()=>{this.determineActiveLink()
this.setState({isTrayOpen:false,noFocus:false},(()=>{setTimeout((()=>{this.setState({type:null})}),150)}))}
this.forceUnreadReleaseNotesPoll=void 0
this.setReleaseNotesUnreadPollNow=this.setReleaseNotesUnreadPollNow.bind(this)
this.state={accounts:[],accountsAreLoaded:false,accountsLoading:false,activeItem:"dashboard",courses:[],coursesAreLoaded:false,coursesLoading:false,groups:[],groupsAreLoaded:false,groupsLoading:false,help:[],helpAreLoaded:false,helpLoading:false,history:[],historyAreLoaded:false,historyLoading:false,isTrayOpen:false,noFocus:false,observedUserId:"",overrideDismiss:false,profile:[],profileAreLoaded:false,profileAreLoading:false,type:null,unreadInboxCount:0,unreadSharesCount:0,releaseNotesBadgeDisabled:!ENV.FEATURES.embedded_release_notes||ENV.SETTINGS.release_notes_badge_disabled}}componentDidMount(){D.forEach((e=>{a()(`#global_nav_${e}_link`).on("click",(0,_.Z)(this.handleMenuClick.bind(this,e)))}))
this.openPublishUnsubscribe=N.Z.subscribe("navigation-tray-open",(e=>{let{type:t,noFocus:s}=e
D.includes(t)&&this.ensureLoaded(t)
this.openTray(t,s)
this.state.isTrayOpen&&this.state.type===t&&N.Z.publish("navigation-tray-opened",t)}))
this.closePublishUnsubscribe=N.Z.subscribe("navigation-tray-close",(()=>{this.closeTray()}))
this.overrideDismissUnsubscribe=N.Z.subscribe("navigation-tray-override-dismiss",(e=>{this.setState({overrideDismiss:Boolean(e)})}))}componentWillUnmount(){this.openPublishUnsubscribe&&this.openPublishUnsubscribe()
this.overrideDismissUnsubscribe&&this.overrideDismissUnsubscribe()
this.closePublishUnsubscribe&&this.closePublishUnsubscribe()}componentDidUpdate(e,t){if(t.activeItem!==this.state.activeItem){a()(`.${I}`).removeClass(I).removeAttr("aria-current")
a()(`#global_nav_${this.state.activeItem}_link`).closest("li").addClass(I).attr("aria-current","page")}}getResource(e,t){switch(t){case"courses":this.setState({coursesLoading:true})
break
case"groups":this.setState({groupsLoading:true})
break
case"accounts":this.setState({accountsLoading:true})
break
case"profile":this.setState({profileAreLoading:true})
break
case"history":this.setState({historyLoading:true})
break
case"help":this.setState({helpLoading:true})}this.loadResourcePage(e,t)}ensureLoaded(e){let t=O[e]
if(!t)return
if("courses"===e&&ENV.current_user_roles.includes("observer")){let s=false
const r=(0,C.S9)(ENV.current_user_id)
if(r){t=`${t}&observed_user_id=${r}`
if(r!==this.state.observedUserId){this.setState({observedUserId:r,coursesAreLoaded:false,coursesLoading:false})
s=true}}!s&&this._isLoadedOrLoading(e)||this.getResource(t,e)}else this._isLoadedOrLoading(e)||this.getResource(t,e)}loadResourcePage(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
a().getJSON(e,((e,r,o)=>{const a=s.concat(this.filterDataForType(e,t))
if(a.length<V){const e=(0,S.Z)(o)
if(e.next){this.loadResourcePage(e.next,t,a)
return}}switch(t){case"courses":this.setState({courses:a,coursesLoading:false,coursesAreLoaded:true},this.props.onDataReceived)
break
case"groups":this.setState({groups:a,groupsLoading:false,groupsAreLoaded:true},this.props.onDataReceived)
break
case"accounts":this.setState({accounts:a,accountsLoading:false,accountsAreLoaded:true},this.props.onDataReceived)
break
case"profile":this.setState({profile:a,profileAreLoading:false,profileAreLoaded:true},this.props.onDataReceived)
break
case"history":this.setState({history:a,historyLoading:false,historyAreLoaded:true},this.props.onDataReceived)
break
case"help":this.setState({help:a,helpLoading:false,helpAreLoaded:true},this.props.onDataReceived)}}))}filterDataForType(e,t){if("groups"===t)return e.filter(Z)
return e}determineActiveLink(){const e=window.location.pathname
const t=e.match(A)||e.match(P)
const s=t&&t[1]
s?this.setState({activeItem:s}):this.setState({activeItem:"dashboard"})}handleMenuClick(e){D.includes(e)&&this.ensureLoaded(e)
this.state.isTrayOpen&&this.state.activeItem===e?this.closeTray():(this.state.isTrayOpen&&this.state.activeItem,this.openTray(e))}openTray(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
this.setState({type:e,noFocus:t,isTrayOpen:true,activeItem:e})}renderTrayContent(){var e
switch(this.state.type){case"courses":return(0,r.Z)(E,{courses:window.ENV.K5_USER&&null!==(e=window.ENV.current_user_roles)&&void 0!==e&&e.every((e=>"student"===e||"user"===e))?this.state.courses.filter((e=>!e.homeroom_course)):this.state.courses,hasLoaded:this.state.coursesAreLoaded,k5User:window.ENV.K5_USER})
case"groups":return(0,r.Z)(L,{groups:this.state.groups,hasLoaded:this.state.groupsAreLoaded})
case"accounts":return(0,r.Z)(T,{accounts:this.state.accounts,hasLoaded:this.state.accountsAreLoaded})
case"profile":return(0,r.Z)(k,{userDisplayName:window.ENV.current_user.display_name,userPronouns:window.ENV.current_user.pronouns,userAvatarURL:window.ENV.current_user.avatar_is_fallback?"":window.ENV.current_user.avatar_image_url,loaded:this.state.profileAreLoaded,tabs:this.state.profile,counts:{unreadShares:this.state.unreadSharesCount}})
case"history":return(0,r.Z)(U,{history:this.state.history,hasLoaded:this.state.historyAreLoaded})
case"help":return(0,r.Z)(R,{trayTitle:window.ENV.help_link_name,links:this.state.help,hasLoaded:this.state.helpAreLoaded,closeTray:this.closeTray,showNotes:ENV.FEATURES.embedded_release_notes,badgeDisabled:this.state.releaseNotesBadgeDisabled,setBadgeDisabled:e=>this.setState({releaseNotesBadgeDisabled:e}),forceUnreadPoll:this.forceUnreadReleaseNotesPoll})
default:return null}}getTrayLabel(){switch(this.state.type){case"courses":return w.t("Courses tray")
case"groups":return w.t("Groups tray")
case"accounts":return w.t("Admin tray")
case"profile":return w.t("Profile tray")
case"help":return w.t("%{title} tray",{title:window.ENV.help_link_name})
case"history":return w.t("Recent History tray")
default:return w.t("Global navigation tray")}}onInboxUnreadUpdate(e){this.state.unreadInboxCount!==e&&this.setState({unreadInboxCount:e})
const t=document.getElementById("mobileHeaderInboxUnreadBadge")
t&&(t.style.display=e>0?"":"none")
"function"===typeof this.props.onDataReceived&&this.props.onDataReceived()}onSharesUnreadUpdate(e){this.state.unreadSharesCount!==e&&this.setState({unreadSharesCount:e})}inboxUnreadSRText(e){return w.t({one:"One unread message.",other:"%{count} unread messages."},{count:e})}sharesUnreadSRText(e){return w.t({one:"One unread share.",other:"%{count} unread shares."},{count:e})}releaseNotesBadgeText(e){return w.t({one:"One unread release note.",other:"%{count} unread release notes."},{count:e})}setReleaseNotesUnreadPollNow(e){"undefined"===typeof this.forceUnreadReleaseNotesPoll&&(this.forceUnreadReleaseNotesPoll=e)}render(){const e=this.props.unreadComponent
return i.createElement(i.Fragment,null,(0,r.Z)(c.O,{label:this.getTrayLabel(),size:"small",open:this.state.isTrayOpen,onDismiss:this.state.overrideDismiss?$:this.closeTray,shouldCloseOnDocumentClick:true,shouldContainFocus:!this.state.noFocus,mountNode:z(),themeOverride:{smallWidth:"28em"},onEntered:()=>{N.Z.publish("navigation-tray-opened",this.state.type)}},this.state.type,(0,r.Z)("div",{className:`navigation-tray-container ${this.state.type}-tray`},void 0,(0,r.Z)(d.P,{placement:"end",onClick:this.closeTray,screenReaderLabel:w.t("Close")}),(0,r.Z)("div",{className:"tray-with-space-for-global-nav"},void 0,(0,r.Z)(i.Suspense,{fallback:(0,r.Z)(u.G,{display:"block",textAlign:"center"},void 0,(0,r.Z)(h.$,{size:"large",margin:"large auto",renderTitle:()=>w.t("Loading")}))},void 0,this.renderTrayContent())))),ENV.CAN_VIEW_CONTENT_SHARES&&ENV.current_user_id&&(0,r.Z)(e,{targetEl:this.unreadSharesCountElement||(this.unreadSharesCountElement=document.querySelector("#global_nav_profile_link .menu-item__badge")),dataUrl:"/api/v1/users/self/content_shares/unread_count",onUpdate:e=>this.onSharesUnreadUpdate(e),srText:this.sharesUnreadSRText}),!ENV.current_user_disabled_inbox&&(0,r.Z)(e,{targetEl:this.unreadInboxCountElement||(this.unreadInboxCountElement=document.querySelector("#global_nav_conversations_link .menu-item__badge")),dataUrl:"/api/v1/conversations/unread_count",onUpdate:e=>this.onInboxUnreadUpdate(e),srText:this.inboxUnreadSRText,useSessionStorage:false}),!this.state.releaseNotesBadgeDisabled&&(0,r.Z)(e,{targetEl:this.unreadReleaseNotesCountElement||(this.unreadReleaseNotesCountElement=document.querySelector("#global_nav_help_link .menu-item__badge")),dataUrl:"/api/v1/release_notes/unread_count",srText:this.releaseNotesBadgeText,pollIntervalMs:x,pollNowPassback:this.setReleaseNotesUnreadPollNow}))}}W.defaultProps={unreadComponent:y}
const B=(0,n.useScope)("MobileNavigation")
const M=i.lazy((()=>Promise.all([s.e(30951),s.e(30884)]).then(s.bind(s,30884))))
const j=i.lazy((()=>Promise.all([s.e(60314),s.e(87155),s.e(92782),s.e(93863),s.e(84781),s.e(89789),s.e(94537),s.e(42458),s.e(6502),s.e(41715),s.e(6722),s.e(43586)]).then(s.bind(s,43586))))
class G extends i.Component{constructor(){super(...arguments)
this.state={globalNavIsOpen:false,contextNavIsOpen:false}}componentDidMount(){a()(".mobile-header-hamburger").on("touchstart click",(0,_.Z)((()=>this.setState({globalNavIsOpen:true}))))
a()(".mobile-header-blueprint-button").on("touchstart click",(()=>{window.openBPSidebar()}))
const e=document.getElementById("mobileHeaderArrowIcon")
const t=document.getElementById("mobileContextNavContainer")
a()(".mobile-header-title.expandable, .mobile-header-arrow").on("touchstart click",(0,_.Z)((()=>{this.setState((s=>{const r=!s.contextNavIsOpen
e.className=r?"icon-x":"icon-arrow-open-down"
t.setAttribute("aria-expanded",r)
return{contextNavIsOpen:r}}))})))}render(){const e=()=>this.setState({globalNavIsOpen:false})
const t=(0,r.Z)(u.G,{display:"block",textAlign:"center"},void 0,(0,r.Z)(h.$,{size:"large",margin:"large auto",renderTitle:()=>B.t("...Loading")}))
return i.createElement(i.Fragment,null,this.state.globalNavIsOpen&&(0,r.Z)(c.O,{size:"large",label:B.t("Global Navigation"),open:this.state.globalNavIsOpen,onDismiss:e,shouldCloseOnDocumentClick:true},void 0,this.state.globalNavIsOpen&&(0,r.Z)(i.Suspense,{fallback:t},void 0,(0,r.Z)(j,{DesktopNavComponent:this.props.DesktopNavComponent,onDismiss:e}))),this.state.contextNavIsOpen&&(0,r.Z)(i.Suspense,{fallback:t},void 0,(0,r.Z)(M,{spinner:t})))}}var q=s(75869)
var H=s.n(q)
var J=s(27456)
var K=s(69127)
const X=(0,n.useScope)("NewTabIndicator")
const Y=e=>{let{tabName:t}=e
const s=window.ENV.current_user_id
const o=window.ENV.current_user_visited_tabs||[]
return null==s||o.includes(t)?null:(0,r.Z)(J.S,{alt:X.t("New Tab")},void 0,(0,r.Z)(K.D,{color:"info",margin:"0 0 0 xx-small"},void 0,X.t("New")))}
const Q=Y
const ee=(0,n.useScope)("common")
let te=window.ENV.SETTINGS&&window.ENV.SETTINGS.collapse_global_nav
a()("body").on("click","#primaryNavToggle",(function(){let e
te=!te
if(te){a()("body").removeClass("primary-nav-expanded")
a().ajaxJSON("/api/v1/users/self/settings","PUT",{collapse_global_nav:true})
e=ee.t("Expand global navigation")
a()(this).attr({title:e,"aria-label":e})
setTimeout((()=>{a()("body").addClass("primary-nav-transitions")}),300)}else{a()("body").removeClass("primary-nav-transitions").addClass("primary-nav-expanded")
a().ajaxJSON("/api/v1/users/self/settings","PUT",{collapse_global_nav:false})
e=ee.t("Minimize global navigation")
a()(this).attr({title:e,"aria-label":e})}}))
H()((()=>{const e=document.getElementById("global_nav_tray_container")
if(e){const t=i.createRef()
const s=i.createRef()
l.render(i.createElement(W,{ref:t,onDataReceived:()=>{var e
return null===(e=s.current)||void 0===e?void 0:e.forceUpdate()}}),e,(()=>{const e=document.getElementById("mobileContextNavContainer")
e&&l.render(i.createElement(G,{ref:s,DesktopNavComponent:t.current}),e)}))}const t=document.getElementsByClassName("new-tab-indicator")
Array.from(t).forEach((e=>{e instanceof HTMLElement&&e.dataset.tabname&&l.render((0,r.Z)(Q,{tabName:e.dataset.tabname}),e)}))}))},52583:(e,t,s)=>{"use strict"
s.d(t,{EU:()=>l,S9:()=>n,kX:()=>i})
var r=s(87666)
const o="k5_observed_user_for_"
const a=e=>`${o}${e}`
const n=e=>(0,r.Z)(a(e))
const i=(e,t)=>{document.cookie=c(e,t)}
const l=e=>{document.cookie=`${c(e,"")};max-age=-1`}
const c=(e,t)=>`${a(e)}=${t};path=/`},63484:(e,t,s)=>{"use strict"
s.d(t,{Z:()=>n})
var r=s(55877)
class o{constructor(){this.topics={}}subscribe(e,t){this.topics[e]||(this.topics[e]={})
const s=(0,r.v4)()
this.topics[e][s]=t
return()=>{delete this.topics[e][s]}}publish(e,t){if(!this.topics[e])return
Object.values(this.topics[e]).forEach((e=>{e&&e(t)}))}}const a=new o
const n=a},83624:(e,t,s)=>{"use strict"
s.d(t,{Z:()=>r})
function r(e){return function(t){t&&t.preventDefault()
return e.apply(this,arguments)}}},55877:(e,t,s)=>{var r=s(23570)
var o=s(71171)
var a=o
a.v1=r
a.v4=o
e.exports=a},45327:e=>{var t=[]
for(var s=0;s<256;++s)t[s]=(s+256).toString(16).substr(1)
function r(e,s){var r=s||0
var o=t
return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}e.exports=r},85217:e=>{var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)
if(t){var s=new Uint8Array(16)
e.exports=function(){t(s)
return s}}else{var r=new Array(16)
e.exports=function(){for(var e,t=0;t<16;t++){0===(3&t)&&(e=4294967296*Math.random())
r[t]=e>>>((3&t)<<3)&255}return r}}},23570:(e,t,s)=>{var r=s(85217)
var o=s(45327)
var a
var n
var i=0
var l=0
function c(e,t,s){var c=t&&s||0
var d=t||[]
e=e||{}
var u=e.node||a
var h=void 0!==e.clockseq?e.clockseq:n
if(null==u||null==h){var p=r()
null==u&&(u=a=[1|p[0],p[1],p[2],p[3],p[4],p[5]])
null==h&&(h=n=16383&(p[6]<<8|p[7]))}var v=void 0!==e.msecs?e.msecs:(new Date).getTime()
var m=void 0!==e.nsecs?e.nsecs:l+1
var f=v-i+(m-l)/1e4
f<0&&void 0===e.clockseq&&(h=h+1&16383);(f<0||v>i)&&void 0===e.nsecs&&(m=0)
if(m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
i=v
l=m
n=h
v+=122192928e5
var b=(1e4*(268435455&v)+m)%4294967296
d[c++]=b>>>24&255
d[c++]=b>>>16&255
d[c++]=b>>>8&255
d[c++]=255&b
var g=v/4294967296*1e4&268435455
d[c++]=g>>>8&255
d[c++]=255&g
d[c++]=g>>>24&15|16
d[c++]=g>>>16&255
d[c++]=h>>>8|128
d[c++]=255&h
for(var y=0;y<6;++y)d[c+y]=u[y]
return t||o(d)}e.exports=c},71171:(e,t,s)=>{var r=s(85217)
var o=s(45327)
function a(e,t,s){var a=t&&s||0
if("string"==typeof e){t="binary"===e?new Array(16):null
e=null}e=e||{}
var n=e.random||(e.rng||r)()
n[6]=15&n[6]|64
n[8]=63&n[8]|128
if(t)for(var i=0;i<16;++i)t[a+i]=n[i]
return t||o(n)}e.exports=a},57144:(e,t,s)=>{"use strict"
s.d(t,{Z:()=>o})
const r=/<(http.*?)>; rel="([a-z]*)"/g
function o(e){let t
const s={}
const o=e&&e.getResponseHeader("Link")
if(!o)return s
while(t=r.exec(o))s[t[2]]=t[1]
return s}}}])

//# sourceMappingURL=navigation_header-c-c0691b61ec.js.map