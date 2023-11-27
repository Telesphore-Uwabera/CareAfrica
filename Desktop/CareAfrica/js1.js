(globalThis["webpackChunkcanvas_lms"]=globalThis["webpackChunkcanvas_lms"]||[]).push([[97373],{19105:(e,t,n)=>{"use strict"
n.r(t)
var r=n(63056)
var o=n(75869)
var s=n.n(o)
var i=n(67294)
var a=n(73935)
var l=n(61323)
var d=n(60564)
var c=n(31878)
var u=n(90087)
var v=n(3986)
var g
const m=(0,l.useScope)("terms_of_service_modal")
const p=m.t("Acceptable Use Policy")
class h extends i.Component{constructor(){super(...arguments)
this.state={TERMS_OF_SERVICE_CUSTOM_CONTENT:void 0}}async componentDidMount(){const e="/api/v1/terms_of_service_custom_content"
const t=await(await fetch(e,v._T)).text()
this.setState({TERMS_OF_SERVICE_CUSTOM_CONTENT:t})}render(){return this.state.TERMS_OF_SERVICE_CUSTOM_CONTENT?(0,r.Z)("div",{dangerouslySetInnerHTML:{__html:this.state.TERMS_OF_SERVICE_CUSTOM_CONTENT}}):(0,r.Z)("span",{},void 0,m.t("Loading..."))}}class f extends i.Component{constructor(){super(...arguments)
this.state={open:false}
this.handleCloseModal=()=>{this.link.focus()
this.setState({open:false})}
this.handleLinkClick=()=>{this.setState((e=>{const t=document.getElementById("custom_tos_rce_container")
let n
if(t){const e=t.querySelector("textarea")
n=c.Z.callOnRCE(e,"get_code")}return{open:!e.open,TERMS_OF_SERVICE_CUSTOM_CONTENT:n}}))}}render(){return(0,r.Z)("span",{id:"terms_of_service_modal"},void 0,(0,r.Z)(u.r,{elementRef:e=>{this.link=e},href:"#",onClick:this.handleLinkClick},void 0,this.props.preview?m.t("Preview"):p),this.state.open&&(0,r.Z)(d.Z,{open:this.state.open,onDismiss:this.handleCloseModal,size:"fullscreen",label:p},void 0,(0,r.Z)(d.Z.Body,{},void 0,this.props.preview?(0,r.Z)("div",{dangerouslySetInnerHTML:{__html:this.state.TERMS_OF_SERVICE_CUSTOM_CONTENT}}):g||(g=(0,r.Z)(h,{})))))}}f.defaultProps={preview:false}
var _,E
s()((()=>{let e=document.querySelector("#terms_of_service_preview_link")
if(e)a.render(_||(_=(0,r.Z)(f,{preview:true})),e)
else{e=document.querySelectorAll(".terms_of_service_link")
if(e.length)for(let t=0;t<e.length;t++)a.render(E||(E=(0,r.Z)(f,{})),e[t])}}))},50324:(e,t,n)=>{"use strict"
n.d(t,{IM:()=>y,ZP:()=>C,aZ:()=>b,au:()=>w})
var r=n(63056)
var o=n(67294)
var s=n(73935)
var i=n(61323)
var a=n(65020)
var l=n(90087)
var d=n(34163)
var c=n(46757)
var u=n(20243)
var v=n(57150)
var g
const m=(0,i.useScope)("ajaxflashalert")
const p="flashalert_message_holder"
const h="flash_screenreader_holder"
const f=1e4
function _(e){let t=e.message
let n
if(e.response&&e.response.data)try{if(Array.isArray(e.response.data.errors)){t=e.response.data.errors[0].message
n=e.message}else if(e.response.data.message){t=e.response.data.message
n=e.message}}catch(n){t=e.message}return{a:t,b:n}}const E=e=>"string"===typeof e&&e.toLowerCase().includes("loading chunk")
class C extends o.Component{constructor(){super(...arguments)
this.timerId=0
this.state={showDetails:false,isOpen:true}
this.showDetails=()=>{this.setState({showDetails:true})
clearTimeout(this.timerId)
this.timerId=setTimeout((()=>this.closeAlert()),this.props.timeout)}
this.closeAlert=()=>{this.setState({isOpen:false},(()=>{setTimeout((()=>{clearTimeout(this.timerId)
this.props.onClose()}),500)}))}}getLiveRegion(){let e=document.getElementById(h)
if(!e){e=document.createElement("div")
e.id=h
e.setAttribute("role","alert")
document.body.appendChild(e)}return e}renderDetailMessage(e,t){const n=e&&!E(e)
const s=t&&!E(t)
return(0,r.Z)(d.x,{as:"p",fontStyle:"italic"},void 0,n&&(0,r.Z)(d.x,{},void 0,e),s&&o.createElement(o.Fragment,null,g||(g=(0,r.Z)("br",{})),(0,r.Z)(d.x,{},void 0,t)))}render(){let e=null
if(this.props.error){const{a:t,b:n}=_(this.props.error)
const o=t&&!E(t)
const s=n&&!E(n);(o||s)&&(e=this.state.showDetails?this.renderDetailMessage(t,n):(0,r.Z)("span",{},void 0,(0,r.Z)(c.x,{},void 0,(0,r.Z)(l.r,{isWithinText:false,as:"button",onClick:this.showDetails},void 0,m.t("Details"))),(0,r.Z)(u.c,{},void 0,this.renderDetailMessage(t,n))))}return(0,r.Z)(v.u,{transitionOnMount:true,in:this.state.isOpen,type:"fade"},void 0,(0,r.Z)(a.b,{variant:this.props.variant,renderCloseButtonLabel:m.t("Close"),onDismiss:this.closeAlert,margin:"small auto",timeout:this.props.timeout,liveRegion:this.getLiveRegion,transition:"fade",screenReaderOnly:this.props.screenReaderOnly,liveRegionPoliteness:this.props.liveRegionPoliteness},void 0,(0,r.Z)("div",{},void 0,(0,r.Z)("p",{style:{margin:"0 -5px"}},void 0,this.props.message),e)))}}C.defaultProps={variant:"info",timeout:f,screenReaderOnly:false}
function b(e){const{message:t,err:n,type:o=(n?"error":"info"),srOnly:i=false,politeness:a}=e
function l(e){s.unmountComponentAtNode(e)
e.remove()}function d(){let e=document.getElementById(p)
if(!e){e=document.createElement("div")
e.classList.add("clickthrough-container")
e.id=p
e.setAttribute("style","position: fixed; top: 0; left: 0; width: 100%; z-index: 100000;")
document.body.appendChild(e)}return e}function c(e){s.render((0,r.Z)(C,{message:t,timeout:ENV.flashAlertTimeout??f,error:n,variant:o,onClose:l.bind(null,e),screenReaderOnly:i,liveRegionPoliteness:a}),e)}const u=document.createElement("div")
u.setAttribute("style","max-width:50em;margin:1rem auto;")
u.setAttribute("class","flashalert-message")
d().appendChild(u)
c(u)}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.t("An error occurred making a network request")
return t=>b({message:e,err:t,type:"error"})}function w(e){return()=>b({message:e,type:"success"})}},96437:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>o})
const r=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
const o=r},67879:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>a})
var r=n(67294)
var o=n(61323)
const s=(0,o.useScope)("external_toolsModalLauncher")
const i=r.forwardRef(((e,t)=>r.createElement("iframe",Object.assign({title:s.t("External tool frame"),ref:t,className:"tool_launch"},e,{"data-lti-launch":"true"}))))
const a=i},60564:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>u})
var r=n(63056)
var o=n(67294)
var s=n(9524)
var i=n(74265)
var a=n(61323)
var l=n(1160)
const d=(0,a.useScope)("modal")
function c(){return document.getElementById("flash_screenreader_holder")}function u(e){let{label:t,closeButtonLabel:n,onDismiss:a,children:u,...v}=e
return o.createElement(l.u_,Object.assign({liveRegion:c},v,{label:t,onDismiss:a}),(0,r.Z)(l.u_.Header,{},void 0,(0,r.Z)(s.P,{"data-testid":"instui-modal-close",placement:"end",offset:"medium",onClick:a,screenReaderLabel:n||d.t("Close")}),(0,r.Z)(i.X,{},void 0,t)),u)}["Header","Body","Footer"].forEach((e=>u[e]=l.u_[e]))},90291:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>h})
var r=n(63056)
var o=n(61323)
var s=n(67294)
var i=n(9524)
var a=n(60474)
var l=n(74265)
var d=n(1160)
var c=n(16744)
var u=n(93964)
var v=n(39558)
var g=n.n(v)
const m=(0,o.useScope)("canvas_modal")
function p(e){let{padding:t="small",errorSubject:n,errorCategory:o,errorImageUrl:v=g(),label:p,title:h=null,onDismiss:f,children:_,footer:E=null,closeButtonSize:C,...b}=e
null==h&&(h=p)
return s.createElement(d.u_,Object.assign({label:p,onDismiss:f},b),(0,r.Z)(d.u_.Header,{},void 0,(0,r.Z)(l.X,{},void 0,h),(0,r.Z)(i.P,{"data-instui-modal-close-button":"true",onClick:f,size:C,screenReaderLabel:m.t("Close"),placement:"end",offset:"medium"})),(0,r.Z)(d.u_.Body,{padding:t},void 0,(0,r.Z)(a.G,{as:"div",height:"100%"},void 0,(0,r.Z)(c.Z,{errorComponent:(0,r.Z)(u.Z,{imageUrl:v,errorSubject:n,errorCategory:o})},void 0,_))),E&&(0,r.Z)(d.u_.Footer,{},void 0,"function"===typeof E?E():E))}const h=p},45503:(e,t,n)=>{"use strict"
n.d(t,{tq:()=>m,h2:()=>g,xI:()=>R})
var r=n(55877)
var o=n.n(r)
var s=n(55023)
const i="error"
const a="unsupported_subject"
const l="wrong_origin"
const d="bad_request"
const c=e=>{let{targetWindow:t,origin:n,subject:r,message_id:o,sourceToolInfo:s}=e
const c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const i={subject:`${r}.response`}
o&&(i.message_id=o)
s&&(i.sourceToolInfo=s)
t?t.postMessage({...i,...e},n):console.error("Error sending response postMessage: target window does not exist")}
const u=()=>{c({})}
const v=(e,t)=>{const n={code:e}
t&&(n.message=t)
c({error:n})}
const g=e=>{v(i,e)}
const m=e=>{v(d,e)}
const p=()=>{v(l)}
const h=e=>{v(a,e)}
const f=e=>{var t,n
return!!(null!==(t=e.data)&&void 0!==t&&null!==(n=t.subject)&&void 0!==n&&n.endsWith(".response"))}
return{sendResponse:c,sendSuccess:u,sendError:v,sendGenericError:g,sendBadRequestError:m,sendWrongOriginError:p,sendUnsupportedSubjectError:h,isResponse:f}}
const u=c
var v=n(31961)
const g={}
const m=["lti.enableScrollEvents","lti.fetchWindowSize","lti.frameResize","lti.hideRightSideWrapper","lti.removeUnloadMessage","lti.resourceImported","lti.screenReaderAlert","lti.scrollToTop","lti.setUnloadMessage","lti.showAlert","lti.showModuleNavigation","org.imsglobal.lti.capabilities","org.imsglobal.lti.get_data","org.imsglobal.lti.put_data","lti.capabilities","lti.get_data","lti.put_data","requestFullWindowLaunch","toggleCourseNavigationMenu"]
const p=e=>"string"===typeof e&&m.includes(e)
const h=e=>"string"===typeof e&&_.includes(e)
const f=e=>"string"===typeof e&&E.includes(e)
const _=["A2ExternalContentReady","LtiDeepLinkingResponse","externalContentReady","externalContentCancel",s.P6,s.On,s.Ok,"betterchat.is_mini_chat","defaultToolContentReady"]
const E=["lti.frameResize","lti.enableScrollEvents","lti.scrollToTop","lti.setUnloadMessage","lti.removeUnloadMessage"]
const C=e=>"object"===typeof e
const b=e=>C(e)&&((0,v.wH)("source",e)&&"string"===typeof e.source&&e.source.includes("react-devtools")||(0,v.wH)("isAngularDevTools",e)&&!!e.isAngularDevTools)
const y={"lti.enableScrollEvents":()=>n.e(83505).then(n.bind(n,83505)),"lti.fetchWindowSize":()=>n.e(6907).then(n.bind(n,86296)),"lti.frameResize":()=>n.e(61776).then(n.bind(n,61776)),"lti.hideRightSideWrapper":()=>n.e(90263).then(n.bind(n,90263)),"lti.removeUnloadMessage":()=>n.e(63648).then(n.bind(n,63648)),"lti.resourceImported":()=>n.e(58776).then(n.bind(n,58776)),"lti.screenReaderAlert":()=>n.e(49356).then(n.bind(n,49356)),"lti.scrollToTop":()=>n.e(314).then(n.bind(n,314)),"lti.setUnloadMessage":()=>n.e(67108).then(n.bind(n,74733)),"lti.showAlert":()=>n.e(26802).then(n.bind(n,26802)),"lti.showModuleNavigation":()=>n.e(60790).then(n.bind(n,60790)),"org.imsglobal.lti.capabilities":()=>n.e(42570).then(n.bind(n,94817)),"org.imsglobal.lti.get_data":()=>n.e(33141).then(n.bind(n,33141)),"org.imsglobal.lti.put_data":()=>n.e(78944).then(n.bind(n,78944)),"lti.capabilities":()=>n.e(42570).then(n.bind(n,94817)),"lti.get_data":()=>n.e(33141).then(n.bind(n,33141)),"lti.put_data":()=>n.e(78944).then(n.bind(n,78944)),requestFullWindowLaunch:()=>n.e(81384).then(n.bind(n,81384)),toggleCourseNavigationMenu:()=>n.e(49351).then(n.bind(n,49351))}
async function w(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(b(e.data))return false
let n
try{n="string"===typeof e.data?JSON.parse(e.data):e.data}catch(e){return false}if("object"!==typeof n||null===n)return false
const r=!!(0,v.km)("in_rce",n);(0,v.L2)("in_rce",n)
const s=e.source
const i=(0,v.km)("subject",n)||(0,v.km)("messageType",n)
const a=u({targetWindow:s,origin:e.origin,subject:i,message_id:(0,v.km)("message_id",n),sourceToolInfo:(0,v.km)("sourceToolInfo",n)})
if(void 0===i||h(i)||a.isResponse(e))return false
if(!p(i)){a.sendUnsupportedSubjectError()
return false}if(f(i)&&r){a.sendUnsupportedSubjectError("Not supported inside Rich Content Editor")
return false}if(t&&i.includes("org.imsglobal.")){a.sendUnsupportedSubjectError()
return false}try{const t=await y[i]()
const r=t.default({message:n,event:e,responseMessages:a})
r||a.sendSuccess()
window.ENV.DATA_COLLECTION_ENDPOINT&&"string"===typeof window.ENV.DATA_COLLECTION_ENDPOINT&&fetch(window.ENV.DATA_COLLECTION_ENDPOINT,{method:"PUT",mode:"cors",credentials:"omit",headers:{"Content-Type":"application/json"},body:JSON.stringify([{id:o().v4(),type:"postmessage_usage",subject:i,origin:e.origin}])})
return true}catch(e){console.error(`Error loading or executing message handler for "${i}": ${e}`)
const t=C(e)&&(0,v.wH)("message",e)&&"string"===typeof e.message?e.message:void 0
a.sendGenericError(t)
return false}}let T=false
function R(){var e,t,n
const r=(null===(e=ENV)||void 0===e?void 0:e.IGNORE_LTI_POST_MESSAGES)||false
const o=(null===(t=ENV)||void 0===t||null===(n=t.FEATURES)||void 0===n?void 0:n.lti_platform_storage)||false
const s=e=>{""!==e.data&&w(e,o)}
if(!T&&!r){window.addEventListener("message",s)
T=true}}},31961:(e,t,n)=>{"use strict"
n.d(t,{Au:()=>s,H3:()=>o,L2:()=>d,km:()=>l,r7:()=>i,wH:()=>a})
let r=null
function o(e){s()
r=function(t){return t.returnValue=e||""}
window.addEventListener("beforeunload",r)}function s(){if(r){window.removeEventListener("beforeunload",r)
r=null}}function i(e){const t=Array.from(document.getElementsByTagName("iframe"))
const n=t.find((t=>t.contentWindow===e))
return n||null}function a(e,t){return e in t}function l(e,t){return"object"===typeof t&&null!==t&&a(e,t)?t[e]:void 0}function d(e,t){"object"===typeof t&&null!==t&&a(e,t)&&delete t[e]}},31878:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>Z})
var r=n(6507)
var o=n.n(r)
var s=n(25683)
var i=n.n(s)
var a=n(56766)
function l(e,t,n){const r={...n}
e.forEach((e=>{const o=t[e]
const s=n[e]
Array.isArray(o)&&Array.isArray(s)&&(r[e]=[...new Set(o.concat(s))])}))
return r}"INST"in window||(window.INST={})
function d(e,t,n,r,o){const s=new a.Z(o,window.INST,e,t)
const i={...s.defaultConfig()}
return{...i,...l(n.optionsToMerge||[],i,n.tinyOptions)}}const c=d
var u=n(88480)
const v={call(e){if("exists?"===e)return true
for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return this[e](...n)},focus(){if(void 0!==tinymce){const e=tinymce.get(this.getTextarea().id)
e&&e.focus(true)}}}
const g={show(){o()("#editor_tabs").show()},hide(){o()("#editor_tabs").hide()}}
const m={wrapEditor(e){const t={...v,...e}
return Object.assign(e,t)},wrapSidebar(e){const t={...g,...e}
return Object.assign(e,t)}}
const p=m
var h=n(93339)
var f=n(59931)
const _={loadingPromise:null,preload(e){(window.requestIdleCallback||window.setTimeout)((()=>this.loadRCE(e)))},loadOnTarget(e,t,n){const r=this.getTargetTextarea(e)
const o=this.getRenderingTarget(r,t.getRenderingTarget)
const s=this.createRCEProps(r,t)
this.loadRCE((e=>{e.renderIntoDiv(o,s,(e=>{e.tinymceOn("init",(()=>n(r,p.wrapEditor(e))))}))}))},loadingCallbacks:[],RCE:null,loadRCE(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{}
return n.e(99737).then(n.bind(n,38839)).then((e=>{this.RCE=e;(0,u.Z)()
return e})).then((()=>{this.loadingCallbacks.forEach((e=>e(this.RCE)))
this.loadingCallbacks=[]
e(this.RCE)}))},getTargetTextarea:e=>"textarea"===o()(e).get(0).type?o()(e).get(0):o()(e).find("textarea").get(0),getRenderingTarget(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0
let n
n="undefined"===typeof t?o()(e).parent().get(0):t(e)
o()(n).addClass("ic-RichContentEditor")
return n},_attrsToMirror(e){const t=["name"]
const n=i().reduce(e.attributes,((e,t)=>{e[t.name]=t.value
return e}),{})
return i().pick(n,t)},createRCEProps(e,t){var n,r,s,i,a,l,d,u,v,g,m
const p=e.offsetWidth
const _=e.offsetHeight||400
_&&(t.tinyOptions={height:_,...t.tinyOptions||{}})
const E={enabled:true,maxAge:Number.isNaN(ENV.rce_auto_save_max_age_ms)?36e5:ENV.rce_auto_save_max_age_ms}
return{defaultContent:e.value||t.defaultContent,editorOptions:c.bind(null,p,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:(0,h.Z)(),liveRegion:()=>document.getElementById("flash_screenreader_holder"),ltiTools:null===(n=window.INST)||void 0===n?void 0:n.editorButtons,autosave:t.autosave||E,instRecordDisabled:ENV.RICH_CONTENT_INST_RECORD_TAB_DISABLED,maxInitRenderedRCEs:t.maxInitRenderedRCEs,highContrastCSS:null===(r=window.ENV)||void 0===r?void 0:r.url_for_high_contrast_tinymce_editor_css,use_rce_icon_maker:(0,f.Z)(f.L.IconMaker,window.ENV),features:(null===(s=ENV)||void 0===s?void 0:s.FEATURES)||{},flashAlertTimeout:(null===(i=ENV)||void 0===i?void 0:i.flashAlertTimeout)||1e4,timezone:null===(a=ENV)||void 0===a?void 0:a.TIMEZONE,userCacheKey:null===(l=ENV)||void 0===l?void 0:l.user_cache_key,canvasOrigin:(null===(d=ENV)||void 0===d?void 0:d.DEEP_LINKING_POST_MESSAGE_ORIGIN)||(null===(u=window.location)||void 0===u?void 0:u.origin)||"",externalToolsConfig:{ltiIframeAllowances:null===(v=window.ENV)||void 0===v?void 0:v.LTI_LAUNCH_FRAME_ALLOWANCES,isA2StudentView:null===(g=window.ENV)||void 0===g?void 0:g.a2_student_view,maxMruTools:null===(m=window.ENV)||void 0===m?void 0:m.MAX_MRU_LTI_TOOLS,resourceSelectionUrlOverride:o()("#context_external_tool_resource_selection_url").attr("href")||null}}}}
const E=_
var C=n(2610)
function b(e,t,n){e.css("display","none")
const r=t.onFocus
t.onFocus=function(){r instanceof Function&&r(...arguments)}
E.loadOnTarget(e,t,((t,r)=>{const s=I(e)
const i=N(o()(t))
i.data("remoteEditor",r)
s.trigger(C.gA,r)
n&&n(r)}))}function y(e){const t=I(e)
const n=t.attr("id")
const r=`tinymce-parent-of-${n}`
if(t.parent().attr("id")!==r)return t.wrap(`<div id='${r}' style='visibility: hidden'></div>`)}function w(){o()(".mce-resizehandle").attr("aria-hidden",true)}let T=0
function R(){return"random_editor_id_"+T++}function S(e){const t=o()(e)
const n="attr"in t?t.attr("id"):t.id
n&&""!=n||t.attr("id",R())}function N(e){const t=I(e)
const n=t.attr("id")
if(!n||""==n)return t
const r=o()(`#${n}`)
if(r.length<=0)return t
return r}const O={preloadRemoteModule(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{}
return E.preload(e)},loadNewEditor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
let n=arguments.length>2?arguments[2]:void 0
let r=I(e)
if(r.length<=0)return
S(r)
t=o().extend({},t)
const s=e=>{t.focus&&this.activateRCE(r)
n&&n(e)}
r=this.freshNode(r)
if(t.manageParent){delete t.manageParent
y(r)}b(r,t,s)
w()},callOnRCE(e,t){let n=I(e)
n=this.freshNode(n)
for(var r=arguments.length,o=new Array(r>2?r-2:0),s=2;s<r;s++)o[s-2]=arguments[s]
return(0,C.lW)(n,t,...o)},destroyRCE(e){let t=I(e)
t=this.freshNode(t);(0,C.ob)(t)},closeRCE(e){this.callOnRCE(e,"RCEClosed")},activateRCE(e){let t=I(e)
t=this.freshNode(t);(0,C.T_)(t)},freshNode:N,ensureID:S,node2jquery:I}
function I(e){return e&&e.length?e:o()(e)}const Z=O},55023:(e,t,n)=>{"use strict"
n.d(t,{Ok:()=>u,On:()=>c,P6:()=>d,PZ:()=>o,UR:()=>g,Zs:()=>a,d4:()=>i,mH:()=>l,nx:()=>v,qm:()=>r,t0:()=>m,t8:()=>s})
const r="@"
const o="mentions-marker"
const s=`span#${o}`
const i="mention-menu"
const a="span#mention-menu"
const l=ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN
const d="mentions.NavigationEvent"
const c="mentions.InputChangeEvent"
const u="mentions.SelectionEvent"
const v={backspace:8,enter:13,up:38,down:40,escape:27,tab:9}
const g={[v.up]:"UpArrow",[v.down]:"DownArrow",[v.enter]:"Enter"}
const m={ariaControlTemplate:e=>`${e}-mention-popup`,activeDescendant:(e,t)=>`${e}-mention-popup-item-${t}`}},11613:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>f})
var r=n(63056)
var o=n(61323)
var s=n(67294)
var i=n(9524)
var a=n(60474)
var l=n(16228)
var d=n(74265)
var c=n(12215)
var u=n(59778)
var v=n(16744)
var g=n(93964)
var m=n(39558)
var p=n.n(m)
const h=(0,o.useScope)("tray")
function f(e){var t,n
let{padding:o,headerPadding:m,contentPadding:p,errorSubject:f,errorCategory:_,errorImageUrl:E,label:C,title:b,onDismiss:y,children:w,...T}=e
null==m&&(m=`0 0 ${o} 0`)
null==b&&(b=C)
function R(){return(0,r.Z)(l.kC,{as:"div",padding:m},void 0,(0,r.Z)(l.kC.Item,{shouldGrow:true},void 0,(0,r.Z)(d.X,{},void 0,(0,r.Z)(u.Y,{},void 0,b))),(0,r.Z)(l.kC.Item,{},void 0,(0,r.Z)(i.P,{onClick:y,size:"small",screenReaderLabel:h.t("Close")})))}function S(){return(0,r.Z)(v.Z,{errorComponent:t||(t=(0,r.Z)(g.Z,{imageUrl:E,errorSubject:f,errorCategory:_}))},void 0,n||(n=(0,r.Z)(a.G,{as:"div",padding:p,width:"100%",height:"100%"},void 0,w)))}return s.createElement(c.O,Object.assign({label:C,onDismiss:y},T),(0,r.Z)(a.G,{as:"div",padding:o,position:"absolute",insetBlockStart:"0",insetBlockEnd:"0",insetInlineStart:"0",insetInlineEnd:"0"},void 0,(0,r.Z)("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"}},void 0,R(),(0,r.Z)("div",{style:{position:"relative",flex:1}},void 0,S()))))}f.defaultProps={padding:"small",contentPadding:"0",errorImageUrl:p()}},55877:(e,t,n)=>{var r=n(23570)
var o=n(71171)
var s=o
s.v1=r
s.v4=o
e.exports=s},45327:e=>{var t=[]
for(var n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1)
function r(e,n){var r=n||0
var o=t
return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}e.exports=r},85217:e=>{var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)
if(t){var n=new Uint8Array(16)
e.exports=function(){t(n)
return n}}else{var r=new Array(16)
e.exports=function(){for(var e,t=0;t<16;t++){0===(3&t)&&(e=4294967296*Math.random())
r[t]=e>>>((3&t)<<3)&255}return r}}},23570:(e,t,n)=>{var r=n(85217)
var o=n(45327)
var s
var i
var a=0
var l=0
function d(e,t,n){var d=t&&n||0
var c=t||[]
e=e||{}
var u=e.node||s
var v=void 0!==e.clockseq?e.clockseq:i
if(null==u||null==v){var g=r()
null==u&&(u=s=[1|g[0],g[1],g[2],g[3],g[4],g[5]])
null==v&&(v=i=16383&(g[6]<<8|g[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime()
var p=void 0!==e.nsecs?e.nsecs:l+1
var h=m-a+(p-l)/1e4
h<0&&void 0===e.clockseq&&(v=v+1&16383);(h<0||m>a)&&void 0===e.nsecs&&(p=0)
if(p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
a=m
l=p
i=v
m+=122192928e5
var f=(1e4*(268435455&m)+p)%4294967296
c[d++]=f>>>24&255
c[d++]=f>>>16&255
c[d++]=f>>>8&255
c[d++]=255&f
var _=m/4294967296*1e4&268435455
c[d++]=_>>>8&255
c[d++]=255&_
c[d++]=_>>>24&15|16
c[d++]=_>>>16&255
c[d++]=v>>>8|128
c[d++]=255&v
for(var E=0;E<6;++E)c[d+E]=u[E]
return t||o(c)}e.exports=d},71171:(e,t,n)=>{var r=n(85217)
var o=n(45327)
function s(e,t,n){var s=t&&n||0
if("string"==typeof e){t="binary"===e?new Array(16):null
e=null}e=e||{}
var i=e.random||(e.rng||r)()
i[6]=15&i[6]|64
i[8]=63&i[8]|128
if(t)for(var a=0;a<16;++a)t[s+a]=i[a]
return t||o(i)}e.exports=s}}])

//# sourceMappingURL=terms_of_service_modal-c-8597c870ac.js.map