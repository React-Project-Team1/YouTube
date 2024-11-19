function Pg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Rg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Im={exports:{}},ms={},Pm={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=Symbol.for("react.element"),Og=Symbol.for("react.portal"),Bg=Symbol.for("react.fragment"),Tg=Symbol.for("react.strict_mode"),Mg=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),zg=Symbol.for("react.context"),Dg=Symbol.for("react.forward_ref"),Ug=Symbol.for("react.suspense"),qg=Symbol.for("react.memo"),$g=Symbol.for("react.lazy"),pu=Symbol.iterator;function Wg(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var Rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,Bm={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=Bm,this.updater=n||Rm}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tm(){}Tm.prototype=Cr.prototype;function Jl(e,t,n){this.props=e,this.context=t,this.refs=Bm,this.updater=n||Rm}var Zl=Jl.prototype=new Tm;Zl.constructor=Jl;Om(Zl,Cr.prototype);Zl.isPureReactComponent=!0;var gu=Array.isArray,Mm=Object.prototype.hasOwnProperty,ec={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function zm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Mm.call(t,r)&&!Fm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ei,type:e,key:o,ref:s,props:i,_owner:ec.current}}function Vg(e,t){return{$$typeof:Ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ei}function Hg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vu=/\/+/g;function Gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hg(""+e.key):t.toString(36)}function so(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ei:case Og:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Gs(s,0):r,gu(i)?(n="",e!=null&&(n=e.replace(vu,"$&/")+"/"),so(i,t,n,"",function(u){return u})):i!=null&&(tc(i)&&(i=Vg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(vu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",gu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Gs(o,l);s+=so(o,t,n,c,i)}else if(c=Wg(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Gs(o,l++),s+=so(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Di(e,t,n){if(e==null)return e;var r=[],i=0;return so(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Kg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},ao={transition:null},Gg={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ao,ReactCurrentOwner:ec};function Dm(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Di,forEach:function(e,t,n){Di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Di(e,function(){t++}),t},toArray:function(e){return Di(e,function(t){return t})||[]},only:function(e){if(!tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=Cr;z.Fragment=Bg;z.Profiler=Mg;z.PureComponent=Jl;z.StrictMode=Tg;z.Suspense=Ug;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gg;z.act=Dm;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Om({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ec.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Mm.call(t,c)&&!Fm.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ei,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:zg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fg,_context:e},e.Consumer=e};z.createElement=zm;z.createFactory=function(e){var t=zm.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Dg,render:e}};z.isValidElement=tc;z.lazy=function(e){return{$$typeof:$g,_payload:{_status:-1,_result:e},_init:Kg}};z.memo=function(e,t){return{$$typeof:qg,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=ao.transition;ao.transition={};try{e()}finally{ao.transition=t}};z.unstable_act=Dm;z.useCallback=function(e,t){return Pe.current.useCallback(e,t)};z.useContext=function(e){return Pe.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};z.useEffect=function(e,t){return Pe.current.useEffect(e,t)};z.useId=function(){return Pe.current.useId()};z.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Pe.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};z.useRef=function(e){return Pe.current.useRef(e)};z.useState=function(e){return Pe.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Pe.current.useTransition()};z.version="18.3.1";Pm.exports=z;var S=Pm.exports;const pe=Rg(S),Oa=Pg({__proto__:null,default:pe},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg=S,Xg=Symbol.for("react.element"),Qg=Symbol.for("react.fragment"),Jg=Object.prototype.hasOwnProperty,Zg=Yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ev={key:!0,ref:!0,__self:!0,__source:!0};function Um(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Jg.call(t,r)&&!ev.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Xg,type:e,key:o,ref:s,props:i,_owner:Zg.current}}ms.Fragment=Qg;ms.jsx=Um;ms.jsxs=Um;Im.exports=ms;var a=Im.exports,qm={exports:{}},Je={},$m={exports:{}},Wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var R=E.length;E.push(L);e:for(;0<R;){var $=R-1>>>1,W=E[$];if(0<i(W,L))E[$]=L,E[R]=W,R=$;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],R=E.pop();if(R!==L){E[0]=R;e:for(var $=0,W=E.length,Nt=W>>>1;$<Nt;){var Ee=2*($+1)-1,Oe=E[Ee],Ne=Ee+1,Lt=E[Ne];if(0>i(Oe,R))Ne<W&&0>i(Lt,Oe)?(E[$]=Lt,E[Ne]=R,$=Ne):(E[$]=Oe,E[Ee]=R,$=Ee);else if(Ne<W&&0>i(Lt,R))E[$]=Lt,E[Ne]=R,$=Ne;else break e}}return L}function i(E,L){var R=E.sortIndex-L.sortIndex;return R!==0?R:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,m=null,g=3,_=!1,v=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=E)r(u),L.sortIndex=L.expirationTime,t(c,L);else break;L=n(u)}}function b(E){if(w=!1,h(E),!v)if(n(c)!==null)v=!0,Wt(C);else{var L=n(u);L!==null&&wt(b,L.startTime-E)}}function C(E,L){v=!1,w&&(w=!1,p(k),k=-1),_=!0;var R=g;try{for(h(L),m=n(c);m!==null&&(!(m.expirationTime>L)||E&&!Q());){var $=m.callback;if(typeof $=="function"){m.callback=null,g=m.priorityLevel;var W=$(m.expirationTime<=L);L=e.unstable_now(),typeof W=="function"?m.callback=W:m===n(c)&&r(c),h(L)}else r(c);m=n(c)}if(m!==null)var Nt=!0;else{var Ee=n(u);Ee!==null&&wt(b,Ee.startTime-L),Nt=!1}return Nt}finally{m=null,g=R,_=!1}}var j=!1,x=null,k=-1,B=5,O=-1;function Q(){return!(e.unstable_now()-O<B)}function lt(){if(x!==null){var E=e.unstable_now();O=E;var L=!0;try{L=x(!0,E)}finally{L?be():(j=!1,x=null)}}else j=!1}var be;if(typeof f=="function")be=function(){f(lt)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,$t=xe.port2;xe.port1.onmessage=lt,be=function(){$t.postMessage(null)}}else be=function(){y(lt,0)};function Wt(E){x=E,j||(j=!0,be())}function wt(E,L){k=y(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||_||(v=!0,Wt(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var R=g;g=L;try{return E()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=g;g=E;try{return L()}finally{g=R}},e.unstable_scheduleCallback=function(E,L,R){var $=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?$+R:$):R=$,E){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=R+W,E={id:d++,callback:L,priorityLevel:E,startTime:R,expirationTime:W,sortIndex:-1},R>$?(E.sortIndex=R,t(u,E),n(c)===null&&E===n(u)&&(w?(p(k),k=-1):w=!0,wt(b,R-$))):(E.sortIndex=W,t(c,E),v||_||(v=!0,Wt(C))),E},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(E){var L=g;return function(){var R=g;g=L;try{return E.apply(this,arguments)}finally{g=R}}}})(Wm);$m.exports=Wm;var tv=$m.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=S,Ye=tv;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,ri={};function qn(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(ri[e]=t,e=0;e<t.length;e++)Vm.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ba=Object.prototype.hasOwnProperty,rv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_u={},yu={};function iv(e){return Ba.call(yu,e)?!0:Ba.call(_u,e)?!1:rv.test(e)?yu[e]=!0:(_u[e]=!0,!1)}function ov(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sv(e,t,n,r){if(t===null||typeof t>"u"||ov(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var nc=/[\-:]([a-z])/g;function rc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nc,rc);we[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nc,rc);we[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nc,rc);we[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function ic(e,t,n,r){var i=we.hasOwnProperty(t)?we[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sv(t,n,i,r)&&(n=null),r||i===null?iv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qt=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),Ta=Symbol.for("react.profiler"),Hm=Symbol.for("react.provider"),Km=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),Ma=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),ac=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),Gm=Symbol.for("react.offscreen"),wu=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Ys;function Ur(e){if(Ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ys=t&&t[1]||""}return`
`+Ys+e}var Xs=!1;function Qs(e,t){if(!e||Xs)return"";Xs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Xs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ur(e):""}function av(e){switch(e.tag){case 5:return Ur(e.type);case 16:return Ur("Lazy");case 13:return Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 2:case 15:return e=Qs(e.type,!1),e;case 11:return e=Qs(e.type.render,!1),e;case 1:return e=Qs(e.type,!0),e;default:return""}}function za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Kn:return"Portal";case Ta:return"Profiler";case oc:return"StrictMode";case Ma:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Km:return(e.displayName||"Context")+".Consumer";case Hm:return(e._context.displayName||"Context")+".Provider";case sc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ac:return t=e.displayName||null,t!==null?t:za(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return za(e(t))}catch{}}return null}function lv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return za(t);case 8:return t===oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ym(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cv(e){var t=Ym(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qi(e){e._valueTracker||(e._valueTracker=cv(e))}function Xm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ym(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Da(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qm(e,t){t=t.checked,t!=null&&ic(e,"checked",t,!1)}function Ua(e,t){Qm(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qa(e,t.type,n):t.hasOwnProperty("defaultValue")&&qa(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qa(e,t,n){(t!=="number"||ko(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qr=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Au(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(qr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function Jm(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $i,ef=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($i=$i||document.createElement("div"),$i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ii(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uv=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){uv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function tf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function nf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dv=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(e,t){if(t){if(dv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ga=null,ar=null,lr=null;function Cu(e){if(e=Ii(e)){if(typeof Ga!="function")throw Error(N(280));var t=e.stateNode;t&&(t=vs(t),Ga(e.stateNode,e.type,t))}}function rf(e){ar?lr?lr.push(e):lr=[e]:ar=e}function of(){if(ar){var e=ar,t=lr;if(lr=ar=null,Cu(e),t)for(e=0;e<t.length;e++)Cu(t[e])}}function sf(e,t){return e(t)}function af(){}var Js=!1;function lf(e,t,n){if(Js)return e(t,n);Js=!0;try{return sf(e,t,n)}finally{Js=!1,(ar!==null||lr!==null)&&(af(),of())}}function oi(e,t){var n=e.stateNode;if(n===null)return null;var r=vs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Ya=!1;if(Mt)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){Ya=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{Ya=!1}function mv(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Gr=!1,jo=null,Eo=!1,Xa=null,fv={onError:function(e){Gr=!0,jo=e}};function hv(e,t,n,r,i,o,s,l,c){Gr=!1,jo=null,mv.apply(fv,arguments)}function pv(e,t,n,r,i,o,s,l,c){if(hv.apply(this,arguments),Gr){if(Gr){var u=jo;Gr=!1,jo=null}else throw Error(N(198));Eo||(Eo=!0,Xa=u)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ku(e){if($n(e)!==e)throw Error(N(188))}function gv(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ku(i),e;if(o===r)return ku(i),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function uf(e){return e=gv(e),e!==null?df(e):null}function df(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=df(e);if(t!==null)return t;e=e.sibling}return null}var mf=Ye.unstable_scheduleCallback,ju=Ye.unstable_cancelCallback,vv=Ye.unstable_shouldYield,_v=Ye.unstable_requestPaint,se=Ye.unstable_now,yv=Ye.unstable_getCurrentPriorityLevel,cc=Ye.unstable_ImmediatePriority,ff=Ye.unstable_UserBlockingPriority,No=Ye.unstable_NormalPriority,wv=Ye.unstable_LowPriority,hf=Ye.unstable_IdlePriority,fs=null,Ct=null;function bv(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(fs,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Sv,xv=Math.log,Av=Math.LN2;function Sv(e){return e>>>=0,e===0?32:31-(xv(e)/Av|0)|0}var Wi=64,Vi=4194304;function $r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=$r(l):(o&=s,o!==0&&(r=$r(o)))}else s=n&~i,s!==0?r=$r(s):o!==0&&(r=$r(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),i=1<<n,r|=e[n],t&=~i;return r}function Cv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ht(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=Cv(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Qa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pf(){var e=Wi;return Wi<<=1,!(Wi&4194240)&&(Wi=64),e}function Zs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function jv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function uc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function gf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vf,dc,_f,yf,wf,Ja=!1,Hi=[],nn=null,rn=null,on=null,si=new Map,ai=new Map,Qt=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function Or(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ii(t),t!==null&&dc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Nv(e,t,n,r,i){switch(t){case"focusin":return nn=Or(nn,e,t,n,r,i),!0;case"dragenter":return rn=Or(rn,e,t,n,r,i),!0;case"mouseover":return on=Or(on,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return si.set(o,Or(si.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ai.set(o,Or(ai.get(o)||null,e,t,n,r,i)),!0}return!1}function bf(e){var t=Sn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=cf(n),t!==null){e.blockedOn=t,wf(e.priority,function(){_f(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ka=r,n.target.dispatchEvent(r),Ka=null}else return t=Ii(n),t!==null&&dc(t),e.blockedOn=n,!1;t.shift()}return!0}function Nu(e,t,n){lo(e)&&n.delete(t)}function Lv(){Ja=!1,nn!==null&&lo(nn)&&(nn=null),rn!==null&&lo(rn)&&(rn=null),on!==null&&lo(on)&&(on=null),si.forEach(Nu),ai.forEach(Nu)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,Ja||(Ja=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Lv)))}function li(e){function t(i){return Br(i,e)}if(0<Hi.length){Br(Hi[0],e);for(var n=1;n<Hi.length;n++){var r=Hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&Br(nn,e),rn!==null&&Br(rn,e),on!==null&&Br(on,e),si.forEach(t),ai.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)bf(n),n.blockedOn===null&&Qt.shift()}var cr=qt.ReactCurrentBatchConfig,Io=!0;function Iv(e,t,n,r){var i=H,o=cr.transition;cr.transition=null;try{H=1,mc(e,t,n,r)}finally{H=i,cr.transition=o}}function Pv(e,t,n,r){var i=H,o=cr.transition;cr.transition=null;try{H=4,mc(e,t,n,r)}finally{H=i,cr.transition=o}}function mc(e,t,n,r){if(Io){var i=Za(e,t,n,r);if(i===null)ca(e,t,r,Po,n),Eu(e,r);else if(Nv(i,e,t,n,r))r.stopPropagation();else if(Eu(e,r),t&4&&-1<Ev.indexOf(e)){for(;i!==null;){var o=Ii(i);if(o!==null&&vf(o),o=Za(e,t,n,r),o===null&&ca(e,t,r,Po,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ca(e,t,r,null,n)}}var Po=null;function Za(e,t,n,r){if(Po=null,e=lc(r),e=Sn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Po=e,null}function xf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yv()){case cc:return 1;case ff:return 4;case No:case wv:return 16;case hf:return 536870912;default:return 16}default:return 16}}var Zt=null,fc=null,co=null;function Af(){if(co)return co;var e,t=fc,n=t.length,r,i="value"in Zt?Zt.value:Zt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return co=i.slice(e,1<r?1-r:void 0)}function uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function Lu(){return!1}function Ze(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ki:Lu,this.isPropagationStopped=Lu,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Ze(kr),Li=ie({},kr,{view:0,detail:0}),Rv=Ze(Li),ea,ta,Tr,hs=ie({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(ea=e.screenX-Tr.screenX,ta=e.screenY-Tr.screenY):ta=ea=0,Tr=e),ea)},movementY:function(e){return"movementY"in e?e.movementY:ta}}),Iu=Ze(hs),Ov=ie({},hs,{dataTransfer:0}),Bv=Ze(Ov),Tv=ie({},Li,{relatedTarget:0}),na=Ze(Tv),Mv=ie({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=Ze(Mv),zv=ie({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dv=Ze(zv),Uv=ie({},kr,{data:0}),Pu=Ze(Uv),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wv[e])?!!t[e]:!1}function pc(){return Vv}var Hv=ie({},Li,{key:function(e){if(e.key){var t=qv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(e){return e.type==="keypress"?uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kv=Ze(Hv),Gv=ie({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ru=Ze(Gv),Yv=ie({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),Xv=Ze(Yv),Qv=ie({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=Ze(Qv),Zv=ie({},hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=Ze(Zv),t0=[9,13,27,32],gc=Mt&&"CompositionEvent"in window,Yr=null;Mt&&"documentMode"in document&&(Yr=document.documentMode);var n0=Mt&&"TextEvent"in window&&!Yr,Sf=Mt&&(!gc||Yr&&8<Yr&&11>=Yr),Ou=" ",Bu=!1;function Cf(e,t){switch(e){case"keyup":return t0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function r0(e,t){switch(e){case"compositionend":return kf(t);case"keypress":return t.which!==32?null:(Bu=!0,Ou);case"textInput":return e=t.data,e===Ou&&Bu?null:e;default:return null}}function i0(e,t){if(Yn)return e==="compositionend"||!gc&&Cf(e,t)?(e=Af(),co=fc=Zt=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sf&&t.locale!=="ko"?null:t.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!o0[e.type]:t==="textarea"}function jf(e,t,n,r){rf(r),t=Ro(t,"onChange"),0<t.length&&(n=new hc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,ci=null;function s0(e){Ff(e,0)}function ps(e){var t=Jn(e);if(Xm(t))return e}function a0(e,t){if(e==="change")return t}var Ef=!1;if(Mt){var ra;if(Mt){var ia="oninput"in document;if(!ia){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),ia=typeof Mu.oninput=="function"}ra=ia}else ra=!1;Ef=ra&&(!document.documentMode||9<document.documentMode)}function Fu(){Xr&&(Xr.detachEvent("onpropertychange",Nf),ci=Xr=null)}function Nf(e){if(e.propertyName==="value"&&ps(ci)){var t=[];jf(t,ci,e,lc(e)),lf(s0,t)}}function l0(e,t,n){e==="focusin"?(Fu(),Xr=t,ci=n,Xr.attachEvent("onpropertychange",Nf)):e==="focusout"&&Fu()}function c0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ps(ci)}function u0(e,t){if(e==="click")return ps(t)}function d0(e,t){if(e==="input"||e==="change")return ps(t)}function m0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:m0;function ui(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ba.call(t,i)||!vt(e[i],t[i]))return!1}return!0}function zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Du(e,t){var n=zu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zu(n)}}function Lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function If(){for(var e=window,t=ko();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ko(e.document)}return t}function vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function f0(e){var t=If(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lf(n.ownerDocument.documentElement,n)){if(r!==null&&vc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Du(n,o);var s=Du(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var h0=Mt&&"documentMode"in document&&11>=document.documentMode,Xn=null,el=null,Qr=null,tl=!1;function Uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tl||Xn==null||Xn!==ko(r)||(r=Xn,"selectionStart"in r&&vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&ui(Qr,r)||(Qr=r,r=Ro(el,"onSelect"),0<r.length&&(t=new hc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function Gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Gi("Animation","AnimationEnd"),animationiteration:Gi("Animation","AnimationIteration"),animationstart:Gi("Animation","AnimationStart"),transitionend:Gi("Transition","TransitionEnd")},oa={},Pf={};Mt&&(Pf=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function gs(e){if(oa[e])return oa[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pf)return oa[e]=t[n];return e}var Rf=gs("animationend"),Of=gs("animationiteration"),Bf=gs("animationstart"),Tf=gs("transitionend"),Mf=new Map,qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,t){Mf.set(e,t),qn(t,[e])}for(var sa=0;sa<qu.length;sa++){var aa=qu[sa],p0=aa.toLowerCase(),g0=aa[0].toUpperCase()+aa.slice(1);pn(p0,"on"+g0)}pn(Rf,"onAnimationEnd");pn(Of,"onAnimationIteration");pn(Bf,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Tf,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function $u(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pv(r,t,void 0,e),e.currentTarget=null}function Ff(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;$u(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;$u(i,l,u),o=c}}}if(Eo)throw e=Xa,Eo=!1,Xa=null,e}function G(e,t){var n=t[sl];n===void 0&&(n=t[sl]=new Set);var r=e+"__bubble";n.has(r)||(zf(t,e,2,!1),n.add(r))}function la(e,t,n){var r=0;t&&(r|=4),zf(n,e,r,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function di(e){if(!e[Yi]){e[Yi]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(v0.has(n)||la(n,!1,e),la(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,la("selectionchange",!1,t))}}function zf(e,t,n,r){switch(xf(t)){case 1:var i=Iv;break;case 4:i=Pv;break;default:i=mc}n=i.bind(null,t,n,e),i=void 0,!Ya||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ca(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Sn(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}lf(function(){var u=o,d=lc(n),m=[];e:{var g=Mf.get(e);if(g!==void 0){var _=hc,v=e;switch(e){case"keypress":if(uo(n)===0)break e;case"keydown":case"keyup":_=Kv;break;case"focusin":v="focus",_=na;break;case"focusout":v="blur",_=na;break;case"beforeblur":case"afterblur":_=na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Xv;break;case Rf:case Of:case Bf:_=Fv;break;case Tf:_=Jv;break;case"scroll":_=Rv;break;case"wheel":_=e0;break;case"copy":case"cut":case"paste":_=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ru}var w=(t&4)!==0,y=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var f=u,h;f!==null;){h=f;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,p!==null&&(b=oi(f,p),b!=null&&w.push(mi(f,b,h)))),y)break;f=f.return}0<w.length&&(g=new _(g,v,null,n,d),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",g&&n!==Ka&&(v=n.relatedTarget||n.fromElement)&&(Sn(v)||v[Ft]))break e;if((_||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?Sn(v):null,v!==null&&(y=$n(v),v!==y||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(w=Iu,b="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ru,b="onPointerLeave",p="onPointerEnter",f="pointer"),y=_==null?g:Jn(_),h=v==null?g:Jn(v),g=new w(b,f+"leave",_,n,d),g.target=y,g.relatedTarget=h,b=null,Sn(d)===u&&(w=new w(p,f+"enter",v,n,d),w.target=h,w.relatedTarget=y,b=w),y=b,_&&v)t:{for(w=_,p=v,f=0,h=w;h;h=Vn(h))f++;for(h=0,b=p;b;b=Vn(b))h++;for(;0<f-h;)w=Vn(w),f--;for(;0<h-f;)p=Vn(p),h--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Vn(w),p=Vn(p)}w=null}else w=null;_!==null&&Wu(m,g,_,w,!1),v!==null&&y!==null&&Wu(m,y,v,w,!0)}}e:{if(g=u?Jn(u):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var C=a0;else if(Tu(g))if(Ef)C=d0;else{C=c0;var j=l0}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=u0);if(C&&(C=C(e,u))){jf(m,C,n,d);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&qa(g,"number",g.value)}switch(j=u?Jn(u):window,e){case"focusin":(Tu(j)||j.contentEditable==="true")&&(Xn=j,el=u,Qr=null);break;case"focusout":Qr=el=Xn=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,Uu(m,n,d);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":Uu(m,n,d)}var x;if(gc)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Yn?Cf(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Sf&&n.locale!=="ko"&&(Yn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Yn&&(x=Af()):(Zt=d,fc="value"in Zt?Zt.value:Zt.textContent,Yn=!0)),j=Ro(u,k),0<j.length&&(k=new Pu(k,e,null,n,d),m.push({event:k,listeners:j}),x?k.data=x:(x=kf(n),x!==null&&(k.data=x)))),(x=n0?r0(e,n):i0(e,n))&&(u=Ro(u,"onBeforeInput"),0<u.length&&(d=new Pu("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=x))}Ff(m,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=oi(e,n),o!=null&&r.unshift(mi(e,o,i)),o=oi(e,t),o!=null&&r.push(mi(e,o,i))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=oi(n,o),c!=null&&s.unshift(mi(n,c,l))):i||(c=oi(n,o),c!=null&&s.push(mi(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var _0=/\r\n?/g,y0=/\u0000|\uFFFD/g;function Vu(e){return(typeof e=="string"?e:""+e).replace(_0,`
`).replace(y0,"")}function Xi(e,t,n){if(t=Vu(t),Vu(e)!==t&&n)throw Error(N(425))}function Oo(){}var nl=null,rl=null;function il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ol=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,Hu=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof Hu<"u"?function(e){return Hu.resolve(null).then(e).catch(x0)}:ol;function x0(e){setTimeout(function(){throw e})}function ua(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),St="__reactFiber$"+jr,fi="__reactProps$"+jr,Ft="__reactContainer$"+jr,sl="__reactEvents$"+jr,A0="__reactListeners$"+jr,S0="__reactHandles$"+jr;function Sn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ku(e);e!==null;){if(n=e[St])return n;e=Ku(e)}return t}e=n,n=e.parentNode}return null}function Ii(e){return e=e[St]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function vs(e){return e[fi]||null}var al=[],Zn=-1;function gn(e){return{current:e}}function X(e){0>Zn||(e.current=al[Zn],al[Zn]=null,Zn--)}function K(e,t){Zn++,al[Zn]=e.current,e.current=t}var fn={},je=gn(fn),Fe=gn(!1),On=fn;function fr(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function Bo(){X(Fe),X(je)}function Gu(e,t,n){if(je.current!==fn)throw Error(N(168));K(je,t),K(Fe,n)}function Df(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,lv(e)||"Unknown",i));return ie({},n,r)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,On=je.current,K(je,e),K(Fe,Fe.current),!0}function Yu(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Df(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,X(Fe),X(je),K(je,e)):X(Fe),K(Fe,n)}var Rt=null,_s=!1,da=!1;function Uf(e){Rt===null?Rt=[e]:Rt.push(e)}function C0(e){_s=!0,Uf(e)}function vn(){if(!da&&Rt!==null){da=!0;var e=0,t=H;try{var n=Rt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,_s=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(e+1)),mf(cc,vn),i}finally{H=t,da=!1}}return null}var er=[],tr=0,Mo=null,Fo=0,et=[],tt=0,Bn=null,Ot=1,Bt="";function bn(e,t){er[tr++]=Fo,er[tr++]=Mo,Mo=e,Fo=t}function qf(e,t,n){et[tt++]=Ot,et[tt++]=Bt,et[tt++]=Bn,Bn=e;var r=Ot;e=Bt;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var o=32-ht(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ot=1<<32-ht(t)+i|n<<i|r,Bt=o+e}else Ot=1<<o|n<<i|r,Bt=e}function _c(e){e.return!==null&&(bn(e,1),qf(e,1,0))}function yc(e){for(;e===Mo;)Mo=er[--tr],er[tr]=null,Fo=er[--tr],er[tr]=null;for(;e===Bn;)Bn=et[--tt],et[tt]=null,Bt=et[--tt],et[tt]=null,Ot=et[--tt],et[tt]=null}var Ke=null,Ve=null,ee=!1,mt=null;function $f(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Ve=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Ot,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Ve=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cl(e){if(ee){var t=Ve;if(t){var n=t;if(!Xu(e,t)){if(ll(e))throw Error(N(418));t=sn(n.nextSibling);var r=Ke;t&&Xu(e,t)?$f(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ke=e)}}else{if(ll(e))throw Error(N(418));e.flags=e.flags&-4097|2,ee=!1,Ke=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function Qi(e){if(e!==Ke)return!1;if(!ee)return Qu(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!il(e.type,e.memoizedProps)),t&&(t=Ve)){if(ll(e))throw Wf(),Error(N(418));for(;t;)$f(e,t),t=sn(t.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Ke?sn(e.stateNode.nextSibling):null;return!0}function Wf(){for(var e=Ve;e;)e=sn(e.nextSibling)}function hr(){Ve=Ke=null,ee=!1}function wc(e){mt===null?mt=[e]:mt.push(e)}var k0=qt.ReactCurrentBatchConfig;function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Ji(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ju(e){var t=e._init;return t(e._payload)}function Vf(e){function t(p,f){if(e){var h=p.deletions;h===null?(p.deletions=[f],p.flags|=16):h.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=un(p,f),p.index=0,p.sibling=null,p}function o(p,f,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<f?(p.flags|=2,f):h):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,h,b){return f===null||f.tag!==6?(f=_a(h,p.mode,b),f.return=p,f):(f=i(f,h),f.return=p,f)}function c(p,f,h,b){var C=h.type;return C===Gn?d(p,f,h.props.children,b,h.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yt&&Ju(C)===f.type)?(b=i(f,h.props),b.ref=Mr(p,f,h),b.return=p,b):(b=_o(h.type,h.key,h.props,null,p.mode,b),b.ref=Mr(p,f,h),b.return=p,b)}function u(p,f,h,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=ya(h,p.mode,b),f.return=p,f):(f=i(f,h.children||[]),f.return=p,f)}function d(p,f,h,b,C){return f===null||f.tag!==7?(f=Ln(h,p.mode,b,C),f.return=p,f):(f=i(f,h),f.return=p,f)}function m(p,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=_a(""+f,p.mode,h),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ui:return h=_o(f.type,f.key,f.props,null,p.mode,h),h.ref=Mr(p,null,f),h.return=p,h;case Kn:return f=ya(f,p.mode,h),f.return=p,f;case Yt:var b=f._init;return m(p,b(f._payload),h)}if(qr(f)||Pr(f))return f=Ln(f,p.mode,h,null),f.return=p,f;Ji(p,f)}return null}function g(p,f,h,b){var C=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:l(p,f,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ui:return h.key===C?c(p,f,h,b):null;case Kn:return h.key===C?u(p,f,h,b):null;case Yt:return C=h._init,g(p,f,C(h._payload),b)}if(qr(h)||Pr(h))return C!==null?null:d(p,f,h,b,null);Ji(p,h)}return null}function _(p,f,h,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(h)||null,l(f,p,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ui:return p=p.get(b.key===null?h:b.key)||null,c(f,p,b,C);case Kn:return p=p.get(b.key===null?h:b.key)||null,u(f,p,b,C);case Yt:var j=b._init;return _(p,f,h,j(b._payload),C)}if(qr(b)||Pr(b))return p=p.get(h)||null,d(f,p,b,C,null);Ji(f,b)}return null}function v(p,f,h,b){for(var C=null,j=null,x=f,k=f=0,B=null;x!==null&&k<h.length;k++){x.index>k?(B=x,x=null):B=x.sibling;var O=g(p,x,h[k],b);if(O===null){x===null&&(x=B);break}e&&x&&O.alternate===null&&t(p,x),f=o(O,f,k),j===null?C=O:j.sibling=O,j=O,x=B}if(k===h.length)return n(p,x),ee&&bn(p,k),C;if(x===null){for(;k<h.length;k++)x=m(p,h[k],b),x!==null&&(f=o(x,f,k),j===null?C=x:j.sibling=x,j=x);return ee&&bn(p,k),C}for(x=r(p,x);k<h.length;k++)B=_(x,p,k,h[k],b),B!==null&&(e&&B.alternate!==null&&x.delete(B.key===null?k:B.key),f=o(B,f,k),j===null?C=B:j.sibling=B,j=B);return e&&x.forEach(function(Q){return t(p,Q)}),ee&&bn(p,k),C}function w(p,f,h,b){var C=Pr(h);if(typeof C!="function")throw Error(N(150));if(h=C.call(h),h==null)throw Error(N(151));for(var j=C=null,x=f,k=f=0,B=null,O=h.next();x!==null&&!O.done;k++,O=h.next()){x.index>k?(B=x,x=null):B=x.sibling;var Q=g(p,x,O.value,b);if(Q===null){x===null&&(x=B);break}e&&x&&Q.alternate===null&&t(p,x),f=o(Q,f,k),j===null?C=Q:j.sibling=Q,j=Q,x=B}if(O.done)return n(p,x),ee&&bn(p,k),C;if(x===null){for(;!O.done;k++,O=h.next())O=m(p,O.value,b),O!==null&&(f=o(O,f,k),j===null?C=O:j.sibling=O,j=O);return ee&&bn(p,k),C}for(x=r(p,x);!O.done;k++,O=h.next())O=_(x,p,k,O.value,b),O!==null&&(e&&O.alternate!==null&&x.delete(O.key===null?k:O.key),f=o(O,f,k),j===null?C=O:j.sibling=O,j=O);return e&&x.forEach(function(lt){return t(p,lt)}),ee&&bn(p,k),C}function y(p,f,h,b){if(typeof h=="object"&&h!==null&&h.type===Gn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ui:e:{for(var C=h.key,j=f;j!==null;){if(j.key===C){if(C=h.type,C===Gn){if(j.tag===7){n(p,j.sibling),f=i(j,h.props.children),f.return=p,p=f;break e}}else if(j.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yt&&Ju(C)===j.type){n(p,j.sibling),f=i(j,h.props),f.ref=Mr(p,j,h),f.return=p,p=f;break e}n(p,j);break}else t(p,j);j=j.sibling}h.type===Gn?(f=Ln(h.props.children,p.mode,b,h.key),f.return=p,p=f):(b=_o(h.type,h.key,h.props,null,p.mode,b),b.ref=Mr(p,f,h),b.return=p,p=b)}return s(p);case Kn:e:{for(j=h.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(p,f.sibling),f=i(f,h.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=ya(h,p.mode,b),f.return=p,p=f}return s(p);case Yt:return j=h._init,y(p,f,j(h._payload),b)}if(qr(h))return v(p,f,h,b);if(Pr(h))return w(p,f,h,b);Ji(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,h),f.return=p,p=f):(n(p,f),f=_a(h,p.mode,b),f.return=p,p=f),s(p)):n(p,f)}return y}var pr=Vf(!0),Hf=Vf(!1),zo=gn(null),Do=null,nr=null,bc=null;function xc(){bc=nr=Do=null}function Ac(e){var t=zo.current;X(zo),e._currentValue=t}function ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ur(e,t){Do=e,bc=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(bc!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(Do===null)throw Error(N(308));nr=e,Do.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Cn=null;function Sc(e){Cn===null?Cn=[e]:Cn.push(e)}function Kf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Sc(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function Cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,Sc(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function mo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}function Zu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var i=e.updateQueue;Xt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var m=i.baseState;s=0,d=u=c=null,l=o;do{var g=l.lane,_=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(g=t,_=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){m=v.call(_,m,g);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(_,m,g):v,g==null)break e;m=ie({},m,g);break e;case 2:Xt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else _={eventTime:_,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,c=m):d=d.next=_,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Mn|=s,e.lanes=s,e.memoizedState=m}}function ed(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Pi={},kt=gn(Pi),hi=gn(Pi),pi=gn(Pi);function kn(e){if(e===Pi)throw Error(N(174));return e}function kc(e,t){switch(K(pi,t),K(hi,e),K(kt,Pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wa(t,e)}X(kt),K(kt,t)}function gr(){X(kt),X(hi),X(pi)}function Yf(e){kn(pi.current);var t=kn(kt.current),n=Wa(t,e.type);t!==n&&(K(hi,e),K(kt,n))}function jc(e){hi.current===e&&(X(kt),X(hi))}var ne=gn(0);function qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=[];function Ec(){for(var e=0;e<ma.length;e++)ma[e]._workInProgressVersionPrimary=null;ma.length=0}var fo=qt.ReactCurrentDispatcher,fa=qt.ReactCurrentBatchConfig,Tn=0,re=null,ue=null,fe=null,$o=!1,Jr=!1,gi=0,j0=0;function Ae(){throw Error(N(321))}function Nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Lc(e,t,n,r,i,o){if(Tn=o,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fo.current=e===null||e.memoizedState===null?I0:P0,e=n(r,i),Jr){o=0;do{if(Jr=!1,gi=0,25<=o)throw Error(N(301));o+=1,fe=ue=null,t.updateQueue=null,fo.current=R0,e=n(r,i)}while(Jr)}if(fo.current=Wo,t=ue!==null&&ue.next!==null,Tn=0,fe=ue=re=null,$o=!1,t)throw Error(N(300));return e}function Ic(){var e=gi!==0;return gi=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?re.memoizedState=fe=e:fe=fe.next=e,fe}function ot(){if(ue===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=fe===null?re.memoizedState:fe.next;if(t!==null)fe=t,ue=e;else{if(e===null)throw Error(N(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},fe===null?re.memoizedState=fe=e:fe=fe.next=e}return fe}function vi(e,t){return typeof t=="function"?t(e):t}function ha(e){var t=ot(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((Tn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,s=r):c=c.next=m,re.lanes|=d,Mn|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,vt(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,re.lanes|=o,Mn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pa(e){var t=ot(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);vt(o,t.memoizedState)||(Me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Xf(){}function Qf(e,t){var n=re,r=ot(),i=t(),o=!vt(r.memoizedState,i);if(o&&(r.memoizedState=i,Me=!0),r=r.queue,Pc(eh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,_i(9,Zf.bind(null,n,r,i,t),void 0,null),ge===null)throw Error(N(349));Tn&30||Jf(n,t,i)}return i}function Jf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zf(e,t,n,r){t.value=n,t.getSnapshot=r,th(t)&&nh(e)}function eh(e,t,n){return n(function(){th(t)&&nh(e)})}function th(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function nh(e){var t=zt(e,1);t!==null&&pt(t,e,1,-1)}function td(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vi,lastRenderedState:e},t.queue=e,e=e.dispatch=L0.bind(null,re,e),[t.memoizedState,e]}function _i(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rh(){return ot().memoizedState}function ho(e,t,n,r){var i=xt();re.flags|=e,i.memoizedState=_i(1|t,n,void 0,r===void 0?null:r)}function ys(e,t,n,r){var i=ot();r=r===void 0?null:r;var o=void 0;if(ue!==null){var s=ue.memoizedState;if(o=s.destroy,r!==null&&Nc(r,s.deps)){i.memoizedState=_i(t,n,o,r);return}}re.flags|=e,i.memoizedState=_i(1|t,n,o,r)}function nd(e,t){return ho(8390656,8,e,t)}function Pc(e,t){return ys(2048,8,e,t)}function ih(e,t){return ys(4,2,e,t)}function oh(e,t){return ys(4,4,e,t)}function sh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ah(e,t,n){return n=n!=null?n.concat([e]):null,ys(4,4,sh.bind(null,t,e),n)}function Rc(){}function lh(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ch(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uh(e,t,n){return Tn&21?(vt(n,t)||(n=pf(),re.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function E0(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=fa.transition;fa.transition={};try{e(!1),t()}finally{H=n,fa.transition=r}}function dh(){return ot().memoizedState}function N0(e,t,n){var r=cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mh(e))fh(t,n);else if(n=Kf(e,t,n,r),n!==null){var i=Ie();pt(n,e,r,i),hh(n,t,r)}}function L0(e,t,n){var r=cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mh(e))fh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,vt(l,s)){var c=t.interleaved;c===null?(i.next=i,Sc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Kf(e,t,i,r),n!==null&&(i=Ie(),pt(n,e,r,i),hh(n,t,r))}}function mh(e){var t=e.alternate;return e===re||t!==null&&t===re}function fh(e,t){Jr=$o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,uc(e,n)}}var Wo={readContext:it,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},I0={readContext:it,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:nd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ho(4194308,4,sh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return ho(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=N0.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:td,useDebugValue:Rc,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=td(!1),t=e[0];return e=E0.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,i=xt();if(ee){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ge===null)throw Error(N(349));Tn&30||Jf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,nd(eh.bind(null,r,o,e),[e]),r.flags|=2048,_i(9,Zf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=ge.identifierPrefix;if(ee){var n=Bt,r=Ot;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=j0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},P0={readContext:it,useCallback:lh,useContext:it,useEffect:Pc,useImperativeHandle:ah,useInsertionEffect:ih,useLayoutEffect:oh,useMemo:ch,useReducer:ha,useRef:rh,useState:function(){return ha(vi)},useDebugValue:Rc,useDeferredValue:function(e){var t=ot();return uh(t,ue.memoizedState,e)},useTransition:function(){var e=ha(vi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Xf,useSyncExternalStore:Qf,useId:dh,unstable_isNewReconciler:!1},R0={readContext:it,useCallback:lh,useContext:it,useEffect:Pc,useImperativeHandle:ah,useInsertionEffect:ih,useLayoutEffect:oh,useMemo:ch,useReducer:pa,useRef:rh,useState:function(){return pa(vi)},useDebugValue:Rc,useDeferredValue:function(e){var t=ot();return ue===null?t.memoizedState=e:uh(t,ue.memoizedState,e)},useTransition:function(){var e=pa(vi)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Xf,useSyncExternalStore:Qf,useId:dh,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ws={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=cn(e),o=Tt(r,i);o.payload=t,n!=null&&(o.callback=n),t=an(e,o,i),t!==null&&(pt(t,e,i,r),mo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=cn(e),o=Tt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=an(e,o,i),t!==null&&(pt(t,e,i,r),mo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=cn(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=an(e,i,r),t!==null&&(pt(t,e,r,n),mo(t,e,r))}};function rd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ui(n,r)||!ui(i,o):!0}function ph(e,t,n){var r=!1,i=fn,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=ze(t)?On:je.current,r=t.contextTypes,o=(r=r!=null)?fr(e,i):fn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ws,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function id(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ws.enqueueReplaceState(t,t.state,null)}function ml(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Cc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=ze(t)?On:je.current,i.context=fr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(dl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ws.enqueueReplaceState(i,i.state,null),Uo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,t){try{var n="",r=t;do n+=av(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ga(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function gh(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ho||(Ho=!0,Al=r),fl(e,t)},n}function vh(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fl(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function od(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new O0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=G0.bind(null,e,t,n),t.then(e,e))}function sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ad(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var B0=qt.ReactCurrentOwner,Me=!1;function Le(e,t,n,r){t.child=e===null?Hf(t,null,n,r):pr(t,e.child,n,r)}function ld(e,t,n,r,i){n=n.render;var o=t.ref;return ur(t,i),r=Lc(e,t,n,r,o,i),n=Ic(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ee&&n&&_c(t),t.flags|=1,Le(e,t,r,i),t.child)}function cd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Uc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_h(e,t,o,r,i)):(e=_o(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(s,r)&&e.ref===t.ref)return Dt(e,t,i)}return t.flags|=1,e=un(o,r),e.ref=t.ref,e.return=t,t.child=e}function _h(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ui(o,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,Dt(e,t,i)}return hl(e,t,n,r,i)}function yh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(ir,We),We|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(ir,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,K(ir,We),We|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,K(ir,We),We|=r;return Le(e,t,i,n),t.child}function wh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hl(e,t,n,r,i){var o=ze(n)?On:je.current;return o=fr(t,o),ur(t,i),n=Lc(e,t,n,r,o,i),r=Ic(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dt(e,t,i)):(ee&&r&&_c(t),t.flags|=1,Le(e,t,n,i),t.child)}function ud(e,t,n,r,i){if(ze(n)){var o=!0;To(t)}else o=!1;if(ur(t,i),t.stateNode===null)po(e,t),ph(t,n,r),ml(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=ze(n)?On:je.current,u=fr(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&id(t,s,r,u),Xt=!1;var g=t.memoizedState;s.state=g,Uo(t,r,s,i),c=t.memoizedState,l!==r||g!==c||Fe.current||Xt?(typeof d=="function"&&(dl(t,n,d,r),c=t.memoizedState),(l=Xt||rd(t,n,l,r,g,c,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Gf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ut(t.type,l),s.props=u,m=t.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=it(c):(c=ze(n)?On:je.current,c=fr(t,c));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||g!==c)&&id(t,s,r,c),Xt=!1,g=t.memoizedState,s.state=g,Uo(t,r,s,i);var v=t.memoizedState;l!==m||g!==v||Fe.current||Xt?(typeof _=="function"&&(dl(t,n,_,r),v=t.memoizedState),(u=Xt||rd(t,n,u,r,g,v,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return pl(e,t,n,r,o,i)}function pl(e,t,n,r,i,o){wh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Yu(t,n,!1),Dt(e,t,o);r=t.stateNode,B0.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=pr(t,e.child,null,o),t.child=pr(t,null,l,o)):Le(e,t,l,o),t.memoizedState=r.state,i&&Yu(t,n,!0),t.child}function bh(e){var t=e.stateNode;t.pendingContext?Gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gu(e,t.context,!1),kc(e,t.containerInfo)}function dd(e,t,n,r,i){return hr(),wc(i),t.flags|=256,Le(e,t,n,r),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function xh(e,t,n){var r=t.pendingProps,i=ne.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(ne,i&1),e===null)return cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=As(s,r,0,null),e=Ln(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=vl(n),t.memoizedState=gl,e):Oc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return T0(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=un(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=un(l,o):(o=Ln(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?vl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=gl,r}return o=e.child,e=o.sibling,r=un(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oc(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zi(e,t,n,r){return r!==null&&wc(r),pr(t,e.child,null,n),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function T0(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ga(Error(N(422))),Zi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=As({mode:"visible",children:r.children},i,0,null),o=Ln(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pr(t,e.child,null,s),t.child.memoizedState=vl(s),t.memoizedState=gl,o);if(!(t.mode&1))return Zi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(N(419)),r=ga(o,r,void 0),Zi(e,t,s,r)}if(l=(s&e.childLanes)!==0,Me||l){if(r=ge,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,zt(e,i),pt(r,e,i,-1))}return Dc(),r=ga(Error(N(421))),Zi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Y0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ve=sn(i.nextSibling),Ke=t,ee=!0,mt=null,e!==null&&(et[tt++]=Ot,et[tt++]=Bt,et[tt++]=Bn,Ot=e.id,Bt=e.overflow,Bn=t),t=Oc(t,r.children),t.flags|=4096,t)}function md(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ul(e.return,t,n)}function va(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ah(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Le(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&md(e,n,t);else if(e.tag===19)md(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),va(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}va(t,!0,n,null,o);break;case"together":va(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function M0(e,t,n){switch(t.tag){case 3:bh(t),hr();break;case 5:Yf(t);break;case 1:ze(t.type)&&To(t);break;case 4:kc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?xh(e,t,n):(K(ne,ne.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);K(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ah(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,yh(e,t,n)}return Dt(e,t,n)}var Sh,_l,Ch,kh;Sh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_l=function(){};Ch=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(kt.current);var o=null;switch(n){case"input":i=Da(e,i),r=Da(e,r),o=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),o=[];break;case"textarea":i=$a(e,i),r=$a(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oo)}Va(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ri.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ri.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&G("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};kh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function F0(e,t,n){var r=t.pendingProps;switch(yc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return ze(t.type)&&Bo(),Se(t),null;case 3:return r=t.stateNode,gr(),X(Fe),X(je),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(kl(mt),mt=null))),_l(e,t),Se(t),null;case 5:jc(t);var i=kn(pi.current);if(n=t.type,e!==null&&t.stateNode!=null)Ch(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Se(t),null}if(e=kn(kt.current),Qi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[fi]=o,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<Wr.length;i++)G(Wr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":bu(r,o),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},G("invalid",r);break;case"textarea":Au(r,o),G("invalid",r)}Va(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Xi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Xi(r.textContent,l,e),i=["children",""+l]):ri.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":qi(r),xu(r,o,!0);break;case"textarea":qi(r),Su(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Oo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[St]=t,e[fi]=r,Sh(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ha(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wr.length;i++)G(Wr[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":bu(e,r),i=Da(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),G("invalid",e);break;case"textarea":Au(e,r),i=$a(e,r),G("invalid",e);break;default:i=r}Va(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?nf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ef(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ii(e,c):typeof c=="number"&&ii(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ri.hasOwnProperty(o)?c!=null&&o==="onScroll"&&G("scroll",e):c!=null&&ic(e,o,c,s))}switch(n){case"input":qi(e),xu(e,r,!1);break;case"textarea":qi(e),Su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?sr(e,!!r.multiple,o,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)kh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=kn(pi.current),kn(kt.current),Qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:Xi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Se(t),null;case 13:if(X(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Ve!==null&&t.mode&1&&!(t.flags&128))Wf(),hr(),t.flags|=98560,o=!1;else if(o=Qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[St]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),o=!1}else mt!==null&&(kl(mt),mt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?de===0&&(de=3):Dc())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return gr(),_l(e,t),e===null&&di(t.stateNode.containerInfo),Se(t),null;case 10:return Ac(t.type._context),Se(t),null;case 17:return ze(t.type)&&Bo(),Se(t),null;case 19:if(X(ne),o=t.memoizedState,o===null)return Se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Fr(o,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=qo(e),s!==null){for(t.flags|=128,Fr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>_r&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=qo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ee)return Se(t),null}else 2*se()-o.renderingStartTime>_r&&n!==1073741824&&(t.flags|=128,r=!0,Fr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=ne.current,K(ne,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return zc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function z0(e,t){switch(yc(t),t.tag){case 1:return ze(t.type)&&Bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gr(),X(Fe),X(je),Ec(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jc(t),null;case 13:if(X(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ne),null;case 4:return gr(),null;case 10:return Ac(t.type._context),null;case 22:case 23:return zc(),null;case 24:return null;default:return null}}var eo=!1,Ce=!1,D0=typeof WeakSet=="function"?WeakSet:Set,I=null;function rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function yl(e,t,n){try{n()}catch(r){oe(e,t,r)}}var fd=!1;function U0(e,t){if(nl=Io,e=If(),vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,m=e,g=null;t:for(;;){for(var _;m!==n||i!==0&&m.nodeType!==3||(l=s+i),m!==o||r!==0&&m.nodeType!==3||(c=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(_=m.firstChild)!==null;)g=m,m=_;for(;;){if(m===e)break t;if(g===n&&++u===i&&(l=s),g===o&&++d===r&&(c=s),(_=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=_}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(rl={focusedElem:e,selectionRange:n},Io=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,y=v.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:ut(t.type,w),y);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(b){oe(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=fd,fd=!1,v}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&yl(t,n,o)}i=i.next}while(i!==r)}}function bs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function jh(e){var t=e.alternate;t!==null&&(e.alternate=null,jh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[fi],delete t[sl],delete t[A0],delete t[S0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Eh(e){return e.tag===5||e.tag===3||e.tag===4}function hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oo));else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}function xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}var _e=null,dt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)Nh(e,t,n),n=n.sibling}function Nh(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(fs,n)}catch{}switch(n.tag){case 5:Ce||rr(n,t);case 6:var r=_e,i=dt;_e=null,Ht(e,t,n),_e=r,dt=i,_e!==null&&(dt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(dt?(e=_e,n=n.stateNode,e.nodeType===8?ua(e.parentNode,n):e.nodeType===1&&ua(e,n),li(e)):ua(_e,n.stateNode));break;case 4:r=_e,i=dt,_e=n.stateNode.containerInfo,dt=!0,Ht(e,t,n),_e=r,dt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&yl(n,t,s),i=i.next}while(i!==r)}Ht(e,t,n);break;case 1:if(!Ce&&(rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){oe(n,t,l)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Ht(e,t,n),Ce=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new D0),t.forEach(function(r){var i=X0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,dt=!1;break e;case 3:_e=l.stateNode.containerInfo,dt=!0;break e;case 4:_e=l.stateNode.containerInfo,dt=!0;break e}l=l.return}if(_e===null)throw Error(N(160));Nh(o,s,i),_e=null,dt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lh(t,e),t=t.sibling}function Lh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),bt(e),r&4){try{Zr(3,e,e.return),bs(3,e)}catch(w){oe(e,e.return,w)}try{Zr(5,e,e.return)}catch(w){oe(e,e.return,w)}}break;case 1:ct(t,e),bt(e),r&512&&n!==null&&rr(n,n.return);break;case 5:if(ct(t,e),bt(e),r&512&&n!==null&&rr(n,n.return),e.flags&32){var i=e.stateNode;try{ii(i,"")}catch(w){oe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Qm(i,o),Ha(l,s);var u=Ha(l,o);for(s=0;s<c.length;s+=2){var d=c[s],m=c[s+1];d==="style"?nf(i,m):d==="dangerouslySetInnerHTML"?ef(i,m):d==="children"?ii(i,m):ic(i,d,m,u)}switch(l){case"input":Ua(i,o);break;case"textarea":Jm(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?sr(i,!!o.multiple,_,!1):g!==!!o.multiple&&(o.defaultValue!=null?sr(i,!!o.multiple,o.defaultValue,!0):sr(i,!!o.multiple,o.multiple?[]:"",!1))}i[fi]=o}catch(w){oe(e,e.return,w)}}break;case 6:if(ct(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){oe(e,e.return,w)}}break;case 3:if(ct(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(w){oe(e,e.return,w)}break;case 4:ct(t,e),bt(e);break;case 13:ct(t,e),bt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Mc=se())),r&4&&pd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||d,ct(t,e),Ce=u):ct(t,e),bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(m=I=d;I!==null;){switch(g=I,_=g.child,g.tag){case 0:case 11:case 14:case 15:Zr(4,g,g.return);break;case 1:rr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){oe(r,n,w)}}break;case 5:rr(g,g.return);break;case 22:if(g.memoizedState!==null){vd(m);continue}}_!==null?(_.return=g,I=_):vd(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,c=m.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=tf("display",s))}catch(w){oe(e,e.return,w)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){oe(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ct(t,e),bt(e),r&4&&pd(e);break;case 21:break;default:ct(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Eh(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ii(i,""),r.flags&=-33);var o=hd(e);xl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=hd(e);bl(e,l,s);break;default:throw Error(N(161))}}catch(c){oe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function q0(e,t,n){I=e,Ih(e)}function Ih(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||eo;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ce;l=eo;var u=Ce;if(eo=s,(Ce=c)&&!u)for(I=i;I!==null;)s=I,c=s.child,s.tag===22&&s.memoizedState!==null?_d(i):c!==null?(c.return=s,I=c):_d(i);for(;o!==null;)I=o,Ih(o),o=o.sibling;I=i,eo=l,Ce=u}gd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):gd(e)}}function gd(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||bs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ed(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ed(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&li(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ce||t.flags&512&&wl(t)}catch(g){oe(t,t.return,g)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function vd(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function _d(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bs(4,t)}catch(c){oe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){oe(t,i,c)}}var o=t.return;try{wl(t)}catch(c){oe(t,o,c)}break;case 5:var s=t.return;try{wl(t)}catch(c){oe(t,s,c)}}}catch(c){oe(t,t.return,c)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var $0=Math.ceil,Vo=qt.ReactCurrentDispatcher,Bc=qt.ReactCurrentOwner,rt=qt.ReactCurrentBatchConfig,U=0,ge=null,le=null,ye=0,We=0,ir=gn(0),de=0,yi=null,Mn=0,xs=0,Tc=0,ei=null,Be=null,Mc=0,_r=1/0,It=null,Ho=!1,Al=null,ln=null,to=!1,en=null,Ko=0,ti=0,Sl=null,go=-1,vo=0;function Ie(){return U&6?se():go!==-1?go:go=se()}function cn(e){return e.mode&1?U&2&&ye!==0?ye&-ye:k0.transition!==null?(vo===0&&(vo=pf()),vo):(e=H,e!==0||(e=window.event,e=e===void 0?16:xf(e.type)),e):1}function pt(e,t,n,r){if(50<ti)throw ti=0,Sl=null,Error(N(185));Ni(e,n,r),(!(U&2)||e!==ge)&&(e===ge&&(!(U&2)&&(xs|=n),de===4&&Jt(e,ye)),De(e,r),n===1&&U===0&&!(t.mode&1)&&(_r=se()+500,_s&&vn()))}function De(e,t){var n=e.callbackNode;kv(e,t);var r=Lo(e,e===ge?ye:0);if(r===0)n!==null&&ju(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ju(n),t===1)e.tag===0?C0(yd.bind(null,e)):Uf(yd.bind(null,e)),b0(function(){!(U&6)&&vn()}),n=null;else{switch(gf(r)){case 1:n=cc;break;case 4:n=ff;break;case 16:n=No;break;case 536870912:n=hf;break;default:n=No}n=zh(n,Ph.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ph(e,t){if(go=-1,vo=0,U&6)throw Error(N(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=Lo(e,e===ge?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Go(e,r);else{t=r;var i=U;U|=2;var o=Oh();(ge!==e||ye!==t)&&(It=null,_r=se()+500,Nn(e,t));do try{H0();break}catch(l){Rh(e,l)}while(!0);xc(),Vo.current=o,U=i,le!==null?t=0:(ge=null,ye=0,t=de)}if(t!==0){if(t===2&&(i=Qa(e),i!==0&&(r=i,t=Cl(e,i))),t===1)throw n=yi,Nn(e,0),Jt(e,r),De(e,se()),n;if(t===6)Jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!W0(i)&&(t=Go(e,r),t===2&&(o=Qa(e),o!==0&&(r=o,t=Cl(e,o))),t===1))throw n=yi,Nn(e,0),Jt(e,r),De(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:xn(e,Be,It);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=Mc+500-se(),10<t)){if(Lo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ol(xn.bind(null,e,Be,It),t);break}xn(e,Be,It);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ht(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$0(r/1960))-r,10<r){e.timeoutHandle=ol(xn.bind(null,e,Be,It),r);break}xn(e,Be,It);break;case 5:xn(e,Be,It);break;default:throw Error(N(329))}}}return De(e,se()),e.callbackNode===n?Ph.bind(null,e):null}function Cl(e,t){var n=ei;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Go(e,t),e!==2&&(t=Be,Be=n,t!==null&&kl(t)),e}function kl(e){Be===null?Be=e:Be.push.apply(Be,e)}function W0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~Tc,t&=~xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function yd(e){if(U&6)throw Error(N(327));dr();var t=Lo(e,0);if(!(t&1))return De(e,se()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=Qa(e);r!==0&&(t=r,n=Cl(e,r))}if(n===1)throw n=yi,Nn(e,0),Jt(e,t),De(e,se()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,Be,It),De(e,se()),null}function Fc(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(_r=se()+500,_s&&vn())}}function Fn(e){en!==null&&en.tag===0&&!(U&6)&&dr();var t=U;U|=1;var n=rt.transition,r=H;try{if(rt.transition=null,H=1,e)return e()}finally{H=r,rt.transition=n,U=t,!(U&6)&&vn()}}function zc(){We=ir.current,X(ir)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,w0(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(yc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bo();break;case 3:gr(),X(Fe),X(je),Ec();break;case 5:jc(r);break;case 4:gr();break;case 13:X(ne);break;case 19:X(ne);break;case 10:Ac(r.type._context);break;case 22:case 23:zc()}n=n.return}if(ge=e,le=e=un(e.current,null),ye=We=t,de=0,yi=null,Tc=xs=Mn=0,Be=ei=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Cn=null}return e}function Rh(e,t){do{var n=le;try{if(xc(),fo.current=Wo,$o){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$o=!1}if(Tn=0,fe=ue=re=null,Jr=!1,gi=0,Bc.current=null,n===null||n.return===null){de=1,yi=t,le=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=ye,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=sd(s);if(_!==null){_.flags&=-257,ad(_,s,l,o,t),_.mode&1&&od(o,u,t),t=_,c=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(c),t.updateQueue=w}else v.add(c);break e}else{if(!(t&1)){od(o,u,t),Dc();break e}c=Error(N(426))}}else if(ee&&l.mode&1){var y=sd(s);if(y!==null){!(y.flags&65536)&&(y.flags|=256),ad(y,s,l,o,t),wc(vr(c,l));break e}}o=c=vr(c,l),de!==4&&(de=2),ei===null?ei=[o]:ei.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=gh(o,c,t);Zu(o,p);break e;case 1:l=c;var f=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ln===null||!ln.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=vh(o,l,t);Zu(o,b);break e}}o=o.return}while(o!==null)}Th(n)}catch(C){t=C,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Oh(){var e=Vo.current;return Vo.current=Wo,e===null?Wo:e}function Dc(){(de===0||de===3||de===2)&&(de=4),ge===null||!(Mn&268435455)&&!(xs&268435455)||Jt(ge,ye)}function Go(e,t){var n=U;U|=2;var r=Oh();(ge!==e||ye!==t)&&(It=null,Nn(e,t));do try{V0();break}catch(i){Rh(e,i)}while(!0);if(xc(),U=n,Vo.current=r,le!==null)throw Error(N(261));return ge=null,ye=0,de}function V0(){for(;le!==null;)Bh(le)}function H0(){for(;le!==null&&!vv();)Bh(le)}function Bh(e){var t=Fh(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?Th(e):le=t,Bc.current=null}function Th(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=z0(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,le=null;return}}else if(n=F0(n,t,We),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);de===0&&(de=5)}function xn(e,t,n){var r=H,i=rt.transition;try{rt.transition=null,H=1,K0(e,t,n,r)}finally{rt.transition=i,H=r}return null}function K0(e,t,n,r){do dr();while(en!==null);if(U&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(jv(e,o),e===ge&&(le=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||to||(to=!0,zh(No,function(){return dr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=rt.transition,rt.transition=null;var s=H;H=1;var l=U;U|=4,Bc.current=null,U0(e,n),Lh(n,e),f0(rl),Io=!!nl,rl=nl=null,e.current=n,q0(n),_v(),U=l,H=s,rt.transition=o}else e.current=n;if(to&&(to=!1,en=e,Ko=i),o=e.pendingLanes,o===0&&(ln=null),bv(n.stateNode),De(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ho)throw Ho=!1,e=Al,Al=null,e;return Ko&1&&e.tag!==0&&dr(),o=e.pendingLanes,o&1?e===Sl?ti++:(ti=0,Sl=e):ti=0,vn(),null}function dr(){if(en!==null){var e=gf(Ko),t=rt.transition,n=H;try{if(rt.transition=null,H=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Ko=0,U&6)throw Error(N(331));var i=U;for(U|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Zr(8,d,o)}var m=d.child;if(m!==null)m.return=d,I=m;else for(;I!==null;){d=I;var g=d.sibling,_=d.return;if(jh(d),d===u){I=null;break}if(g!==null){g.return=_,I=g;break}I=_}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var y=w.sibling;w.sibling=null,w=y}while(w!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,I=p;break e}I=o.return}}var f=e.current;for(I=f;I!==null;){s=I;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,I=h;else e:for(s=f;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bs(9,l)}}catch(C){oe(l,l.return,C)}if(l===s){I=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,I=b;break e}I=l.return}}if(U=i,vn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(fs,e)}catch{}r=!0}return r}finally{H=n,rt.transition=t}}return!1}function wd(e,t,n){t=vr(n,t),t=gh(e,t,1),e=an(e,t,1),t=Ie(),e!==null&&(Ni(e,1,t),De(e,t))}function oe(e,t,n){if(e.tag===3)wd(e,e,n);else for(;t!==null;){if(t.tag===3){wd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=vr(n,e),e=vh(t,e,1),t=an(t,e,1),e=Ie(),t!==null&&(Ni(t,1,e),De(t,e));break}}t=t.return}}function G0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ye&n)===n&&(de===4||de===3&&(ye&130023424)===ye&&500>se()-Mc?Nn(e,0):Tc|=n),De(e,t)}function Mh(e,t){t===0&&(e.mode&1?(t=Vi,Vi<<=1,!(Vi&130023424)&&(Vi=4194304)):t=1);var n=Ie();e=zt(e,t),e!==null&&(Ni(e,t,n),De(e,n))}function Y0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mh(e,n)}function X0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Mh(e,n)}var Fh;Fh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,M0(e,t,n);Me=!!(e.flags&131072)}else Me=!1,ee&&t.flags&1048576&&qf(t,Fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;po(e,t),e=t.pendingProps;var i=fr(t,je.current);ur(t,n),i=Lc(null,t,r,e,i,n);var o=Ic();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(o=!0,To(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cc(t),i.updater=ws,t.stateNode=i,i._reactInternals=t,ml(t,r,e,n),t=pl(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&_c(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(po(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=J0(r),e=ut(r,e),i){case 0:t=hl(null,t,r,e,n);break e;case 1:t=ud(null,t,r,e,n);break e;case 11:t=ld(null,t,r,e,n);break e;case 14:t=cd(null,t,r,ut(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),hl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),ud(e,t,r,i,n);case 3:e:{if(bh(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Gf(e,t),Uo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=vr(Error(N(423)),t),t=dd(e,t,r,n,i);break e}else if(r!==i){i=vr(Error(N(424)),t),t=dd(e,t,r,n,i);break e}else for(Ve=sn(t.stateNode.containerInfo.firstChild),Ke=t,ee=!0,mt=null,n=Hf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hr(),r===i){t=Dt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return Yf(t),e===null&&cl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,il(r,i)?s=null:o!==null&&il(r,o)&&(t.flags|=32),wh(e,t),Le(e,t,s,n),t.child;case 6:return e===null&&cl(t),null;case 13:return xh(e,t,n);case 4:return kc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),ld(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,K(zo,r._currentValue),r._currentValue=s,o!==null)if(vt(o.value,s)){if(o.children===i.children&&!Fe.current){t=Dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Tt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ul(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ul(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ur(t,n),i=it(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),cd(e,t,r,i,n);case 15:return _h(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),po(e,t),t.tag=1,ze(r)?(e=!0,To(t)):e=!1,ur(t,n),ph(t,r,i),ml(t,r,i,n),pl(null,t,r,!0,e,n);case 19:return Ah(e,t,n);case 22:return yh(e,t,n)}throw Error(N(156,t.tag))};function zh(e,t){return mf(e,t)}function Q0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new Q0(e,t,n,r)}function Uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J0(e){if(typeof e=="function")return Uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sc)return 11;if(e===ac)return 14}return 2}function un(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _o(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Uc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gn:return Ln(n.children,i,o,t);case oc:s=8,i|=8;break;case Ta:return e=nt(12,n,t,i|2),e.elementType=Ta,e.lanes=o,e;case Ma:return e=nt(13,n,t,i),e.elementType=Ma,e.lanes=o,e;case Fa:return e=nt(19,n,t,i),e.elementType=Fa,e.lanes=o,e;case Gm:return As(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hm:s=10;break e;case Km:s=9;break e;case sc:s=11;break e;case ac:s=14;break e;case Yt:s=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=nt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ln(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function As(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Gm,e.lanes=n,e.stateNode={isHidden:!1},e}function _a(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function ya(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Z0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qc(e,t,n,r,i,o,s,l,c){return e=new Z0(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cc(o),e}function e_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dh(e){if(!e)return fn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ze(n))return Df(e,n,t)}return t}function Uh(e,t,n,r,i,o,s,l,c){return e=qc(n,r,!0,e,i,o,s,l,c),e.context=Dh(null),n=e.current,r=Ie(),i=cn(n),o=Tt(r,i),o.callback=t??null,an(n,o,i),e.current.lanes=i,Ni(e,i,r),De(e,r),e}function Ss(e,t,n,r){var i=t.current,o=Ie(),s=cn(i);return n=Dh(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(i,t,s),e!==null&&(pt(e,i,s,o),mo(e,i,s)),s}function Yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function t_(){return null}var qh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wc(e){this._internalRoot=e}Cs.prototype.render=Wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Ss(e,t,null,null)};Cs.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Ss(null,e,null,null)}),t[Ft]=null}};function Cs(e){this._internalRoot=e}Cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=yf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&bf(e)}};function Vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xd(){}function n_(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Yo(s);o.call(u)}}var s=Uh(t,r,e,0,null,!1,!1,"",xd);return e._reactRootContainer=s,e[Ft]=s.current,di(e.nodeType===8?e.parentNode:e),Fn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Yo(c);l.call(u)}}var c=qc(e,0,!1,null,null,!1,!1,"",xd);return e._reactRootContainer=c,e[Ft]=c.current,di(e.nodeType===8?e.parentNode:e),Fn(function(){Ss(t,c,n,r)}),c}function js(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Yo(s);l.call(c)}}Ss(t,s,e,i)}else s=n_(n,t,e,i,r);return Yo(s)}vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$r(t.pendingLanes);n!==0&&(uc(t,n|1),De(t,se()),!(U&6)&&(_r=se()+500,vn()))}break;case 13:Fn(function(){var r=zt(e,1);if(r!==null){var i=Ie();pt(r,e,1,i)}}),$c(e,1)}};dc=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Ie();pt(t,e,134217728,n)}$c(e,134217728)}};_f=function(e){if(e.tag===13){var t=cn(e),n=zt(e,t);if(n!==null){var r=Ie();pt(n,e,t,r)}$c(e,t)}};yf=function(){return H};wf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Ga=function(e,t,n){switch(t){case"input":if(Ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vs(r);if(!i)throw Error(N(90));Xm(r),Ua(r,i)}}}break;case"textarea":Jm(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};sf=Fc;af=Fn;var r_={usingClientEntryPoint:!1,Events:[Ii,Jn,vs,rf,of,Fc]},zr={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i_={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uf(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||t_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{fs=no.inject(i_),Ct=no}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r_;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vc(t))throw Error(N(200));return e_(e,t,null,n)};Je.createRoot=function(e,t){if(!Vc(e))throw Error(N(299));var n=!1,r="",i=qh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=qc(e,1,!1,null,null,n,!1,r,i),e[Ft]=t.current,di(e.nodeType===8?e.parentNode:e),new Wc(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=uf(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return Fn(e)};Je.hydrate=function(e,t,n){if(!ks(t))throw Error(N(200));return js(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!Vc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=qh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Uh(t,null,e,1,n??null,i,!1,o,s),e[Ft]=t.current,di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Cs(t)};Je.render=function(e,t,n){if(!ks(t))throw Error(N(200));return js(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!ks(e))throw Error(N(40));return e._reactRootContainer?(Fn(function(){js(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};Je.unstable_batchedUpdates=Fc;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ks(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return js(e,t,n,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function $h(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($h)}catch(e){console.error(e)}}$h(),qm.exports=Je;var o_=qm.exports,Wh,Ad=o_;Wh=Ad.createRoot,Ad.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wi.apply(this,arguments)}var tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tn||(tn={}));const Sd="popstate";function s_(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:l="",hash:c=""}=Wn(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),jl("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof o=="string"?o:Vh(o))}function r(i,o){Hc(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return l_(t,n,r,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Hc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function a_(){return Math.random().toString(36).substr(2,8)}function Cd(e,t){return{usr:e.state,key:e.key,idx:t}}function jl(e,t,n,r){return n===void 0&&(n=null),wi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wn(t):t,{state:n,key:t&&t.key||r||a_()})}function Vh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Wn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function l_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=tn.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(wi({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function m(){l=tn.Pop;let y=d(),p=y==null?null:y-u;u=y,c&&c({action:l,location:w.location,delta:p})}function g(y,p){l=tn.Push;let f=jl(w.location,y,p);n&&n(f,y),u=d()+1;let h=Cd(f,u),b=w.createHref(f);try{s.pushState(h,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(b)}o&&c&&c({action:l,location:w.location,delta:1})}function _(y,p){l=tn.Replace;let f=jl(w.location,y,p);n&&n(f,y),u=d();let h=Cd(f,u),b=w.createHref(f);s.replaceState(h,"",b),o&&c&&c({action:l,location:w.location,delta:0})}function v(y){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof y=="string"?y:Vh(y);return f=f.replace(/ $/,"%20"),me(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return l},get location(){return e(i,s)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Sd,m),c=y,()=>{i.removeEventListener(Sd,m),c=null}},createHref(y){return t(i,y)},createURL:v,encodeLocation(y){let p=v(y);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:_,go(y){return s.go(y)}};return w}var kd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kd||(kd={}));function c_(e,t,n){return n===void 0&&(n="/"),u_(e,t,n,!1)}function u_(e,t,n,r){let i=typeof t=="string"?Wn(t):t,o=Gh(i.pathname||"/",n);if(o==null)return null;let s=Hh(e);d_(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=x_(o);l=w_(s[c],u,r)}return l}function Hh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(me(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=In([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Hh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:__(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of Kh(o.path))i(o,s,c)}),t}function Kh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Kh(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function d_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:y_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const m_=/^:[\w-]+$/,f_=3,h_=2,p_=1,g_=10,v_=-2,jd=e=>e==="*";function __(e,t){let n=e.split("/"),r=n.length;return n.some(jd)&&(r+=v_),t&&(r+=h_),n.filter(i=>!jd(i)).reduce((i,o)=>i+(m_.test(o)?f_:o===""?p_:g_),r)}function y_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function w_(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",m=Ed({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),g=c.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=Ed({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:In([o,m.pathname]),pathnameBase:E_(In([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=In([o,m.pathnameBase]))}return s}function Ed(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=b_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,m)=>{let{paramName:g,isOptional:_}=d;if(g==="*"){let w=l[m]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=l[m];return _&&!v?u[g]=void 0:u[g]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function b_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Hc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function x_(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Hc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Gh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function A_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Wn(e):e;return{pathname:n?n.startsWith("/")?n:S_(n,t):t,search:N_(r),hash:L_(i)}}function S_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function C_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function k_(e,t){let n=C_(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function j_(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Wn(e):(i=wi({},e),me(!i.pathname||!i.pathname.includes("?"),wa("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),wa("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),wa("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let m=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?t[m]:"/"}let c=A_(i,l),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const In=e=>e.join("/").replace(/\/\/+/g,"/"),E_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),N_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,L_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function I_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yh=["post","put","patch","delete"];new Set(Yh);const P_=["get",...Yh];new Set(P_);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bi.apply(this,arguments)}const Kc=S.createContext(null),R_=S.createContext(null),Es=S.createContext(null),Ns=S.createContext(null),_n=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Xh=S.createContext(null);function Ls(){return S.useContext(Ns)!=null}function Ri(){return Ls()||me(!1),S.useContext(Ns).location}function Qh(e){S.useContext(Es).static||S.useLayoutEffect(e)}function q(){let{isDataRoute:e}=S.useContext(_n);return e?G_():O_()}function O_(){Ls()||me(!1);let e=S.useContext(Kc),{basename:t,future:n,navigator:r}=S.useContext(Es),{matches:i}=S.useContext(_n),{pathname:o}=Ri(),s=JSON.stringify(k_(i,n.v7_relativeSplatPath)),l=S.useRef(!1);return Qh(()=>{l.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let m=j_(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:In([t,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[t,r,s,o,e])}const B_=S.createContext(null);function T_(e){let t=S.useContext(_n).outlet;return t&&S.createElement(B_.Provider,{value:e},t)}function _t(){let{matches:e}=S.useContext(_n),t=e[e.length-1];return t?t.params:{}}function M_(e,t){return F_(e,t)}function F_(e,t,n,r){Ls()||me(!1);let{navigator:i}=S.useContext(Es),{matches:o}=S.useContext(_n),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Ri(),d;if(t){var m;let y=typeof t=="string"?Wn(t):t;c==="/"||(m=y.pathname)!=null&&m.startsWith(c)||me(!1),d=y}else d=u;let g=d.pathname||"/",_=g;if(c!=="/"){let y=c.replace(/^\//,"").split("/");_="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let v=c_(e,{pathname:_}),w=$_(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:In([c,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:In([c,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n,r);return t&&w?S.createElement(Ns.Provider,{value:{location:bi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:tn.Pop}},w):w}function z_(){let e=K_(),t=I_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const D_=S.createElement(z_,null);class U_ extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(_n.Provider,{value:this.props.routeContext},S.createElement(Xh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function q_(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(Kc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(_n.Provider,{value:t},r)}function $_(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);d>=0||me(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let m=s[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:g,errors:_}=n,v=m.route.loader&&g[m.route.id]===void 0&&(!_||_[m.route.id]===void 0);if(m.route.lazy||v){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,m,g)=>{let _,v=!1,w=null,y=null;n&&(_=l&&m.route.id?l[m.route.id]:void 0,w=m.route.errorElement||D_,c&&(u<0&&g===0?(v=!0,y=null):u===g&&(v=!0,y=m.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,g+1)),f=()=>{let h;return _?h=w:v?h=y:m.route.Component?h=S.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=d,S.createElement(q_,{match:m,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:h})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?S.createElement(U_,{location:n.location,revalidation:n.revalidation,component:w,error:_,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Jh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jh||{}),Xo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Xo||{});function W_(e){let t=S.useContext(Kc);return t||me(!1),t}function V_(e){let t=S.useContext(R_);return t||me(!1),t}function H_(e){let t=S.useContext(_n);return t||me(!1),t}function Zh(e){let t=H_(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function K_(){var e;let t=S.useContext(Xh),n=V_(Xo.UseRouteError),r=Zh(Xo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function G_(){let{router:e}=W_(Jh.UseNavigateStable),t=Zh(Xo.UseNavigateStable),n=S.useRef(!1);return Qh(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,bi({fromRouteId:t},o)))},[e,t])}function ep(e){return T_(e.context)}function J(e){me(!1)}function Y_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=tn.Pop,navigator:o,static:s=!1,future:l}=e;Ls()&&me(!1);let c=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:c,navigator:o,static:s,future:bi({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=Wn(r));let{pathname:d="/",search:m="",hash:g="",state:_=null,key:v="default"}=r,w=S.useMemo(()=>{let y=Gh(d,c);return y==null?null:{location:{pathname:y,search:m,hash:g,state:_,key:v},navigationType:i}},[c,d,m,g,_,v,i]);return w==null?null:S.createElement(Es.Provider,{value:u},S.createElement(Ns.Provider,{children:n,value:w}))}function X_(e){let{children:t,location:n}=e;return M_(El(t),n)}new Promise(()=>{});function El(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,El(r.props.children,o));return}r.type!==J&&me(!1),!r.props.index||!r.props.children||me(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=El(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Q_="6";try{window.__reactRouterVersion=Q_}catch{}const J_="startTransition",Nd=Oa[J_];function Z_(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=s_({window:i,v5Compat:!0}));let s=o.current,[l,c]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=S.useCallback(m=>{u&&Nd?Nd(()=>c(m)):c(m)},[c,u]);return S.useLayoutEffect(()=>s.listen(d),[s,d]),S.createElement(Y_,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}var Ld;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ld||(Ld={}));var Id;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Id||(Id={}));var ke=function(){return ke=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ke.apply(this,arguments)};function xi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Y="-ms-",ni="-moz-",V="-webkit-",tp="comm",Is="rule",Gc="decl",ey="@import",np="@keyframes",ty="@layer",rp=Math.abs,Yc=String.fromCharCode,Nl=Object.assign;function ny(e,t){return he(e,0)^45?(((t<<2^he(e,0))<<2^he(e,1))<<2^he(e,2))<<2^he(e,3):0}function ip(e){return e.trim()}function Pt(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function yo(e,t,n){return e.indexOf(t,n)}function he(e,t){return e.charCodeAt(t)|0}function yr(e,t,n){return e.slice(t,n)}function At(e){return e.length}function op(e){return e.length}function Vr(e,t){return t.push(e),e}function ry(e,t){return e.map(t).join("")}function Pd(e,t){return e.filter(function(n){return!Pt(n,t)})}var Ps=1,wr=1,sp=0,st=0,ae=0,Er="";function Rs(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ps,column:wr,length:s,return:"",siblings:l}}function Gt(e,t){return Nl(Rs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Hn(e){for(;e.root;)e=Gt(e.root,{children:[e]});Vr(e,e.siblings)}function iy(){return ae}function oy(){return ae=st>0?he(Er,--st):0,wr--,ae===10&&(wr=1,Ps--),ae}function gt(){return ae=st<sp?he(Er,st++):0,wr++,ae===10&&(wr=1,Ps++),ae}function Pn(){return he(Er,st)}function wo(){return st}function Os(e,t){return yr(Er,e,t)}function Ll(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sy(e){return Ps=wr=1,sp=At(Er=e),st=0,[]}function ay(e){return Er="",e}function ba(e){return ip(Os(st-1,Il(e===91?e+2:e===40?e+1:e)))}function ly(e){for(;(ae=Pn())&&ae<33;)gt();return Ll(e)>2||Ll(ae)>3?"":" "}function cy(e,t){for(;--t&&gt()&&!(ae<48||ae>102||ae>57&&ae<65||ae>70&&ae<97););return Os(e,wo()+(t<6&&Pn()==32&&gt()==32))}function Il(e){for(;gt();)switch(ae){case e:return st;case 34:case 39:e!==34&&e!==39&&Il(ae);break;case 40:e===41&&Il(e);break;case 92:gt();break}return st}function uy(e,t){for(;gt()&&e+ae!==57;)if(e+ae===84&&Pn()===47)break;return"/*"+Os(t,st-1)+"*"+Yc(e===47?e:gt())}function dy(e){for(;!Ll(Pn());)gt();return Os(e,st)}function my(e){return ay(bo("",null,null,null,[""],e=sy(e),0,[0],e))}function bo(e,t,n,r,i,o,s,l,c){for(var u=0,d=0,m=s,g=0,_=0,v=0,w=1,y=1,p=1,f=0,h="",b=i,C=o,j=r,x=h;y;)switch(v=f,f=gt()){case 40:if(v!=108&&he(x,m-1)==58){yo(x+=F(ba(f),"&","&\f"),"&\f",rp(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:x+=ba(f);break;case 9:case 10:case 13:case 32:x+=ly(v);break;case 92:x+=cy(wo()-1,7);continue;case 47:switch(Pn()){case 42:case 47:Vr(fy(uy(gt(),wo()),t,n,c),c);break;default:x+="/"}break;case 123*w:l[u++]=At(x)*p;case 125*w:case 59:case 0:switch(f){case 0:case 125:y=0;case 59+d:p==-1&&(x=F(x,/\f/g,"")),_>0&&At(x)-m&&Vr(_>32?Od(x+";",r,n,m-1,c):Od(F(x," ","")+";",r,n,m-2,c),c);break;case 59:x+=";";default:if(Vr(j=Rd(x,t,n,u,d,i,l,h,b=[],C=[],m,o),o),f===123)if(d===0)bo(x,t,j,j,b,o,m,l,C);else switch(g===99&&he(x,3)===110?100:g){case 100:case 108:case 109:case 115:bo(e,j,j,r&&Vr(Rd(e,j,j,0,0,i,l,h,i,b=[],m,C),C),i,C,m,l,r?b:C);break;default:bo(x,j,j,j,[""],C,0,l,C)}}u=d=_=0,w=p=1,h=x="",m=s;break;case 58:m=1+At(x),_=v;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&oy()==125)continue}switch(x+=Yc(f),f*w){case 38:p=d>0?1:(x+="\f",-1);break;case 44:l[u++]=(At(x)-1)*p,p=1;break;case 64:Pn()===45&&(x+=ba(gt())),g=Pn(),d=m=At(h=x+=dy(wo())),f++;break;case 45:v===45&&At(x)==2&&(w=0)}}return o}function Rd(e,t,n,r,i,o,s,l,c,u,d,m){for(var g=i-1,_=i===0?o:[""],v=op(_),w=0,y=0,p=0;w<r;++w)for(var f=0,h=yr(e,g+1,g=rp(y=s[w])),b=e;f<v;++f)(b=ip(y>0?_[f]+" "+h:F(h,/&\f/g,_[f])))&&(c[p++]=b);return Rs(e,t,n,i===0?Is:l,c,u,d,m)}function fy(e,t,n,r){return Rs(e,t,n,tp,Yc(iy()),yr(e,2,-2),0,r)}function Od(e,t,n,r,i){return Rs(e,t,n,Gc,yr(e,0,r),yr(e,r+1,-1),r,i)}function ap(e,t,n){switch(ny(e,t)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return ni+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+ni+e+Y+e+e;case 5936:switch(he(e,t+11)){case 114:return V+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+Y+e+e;case 6165:return V+e+Y+"flex-"+e+e;case 5187:return V+e+F(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return V+e+Y+"flex-item-"+F(e,/flex-|-self/g,"")+(Pt(e,/flex-|baseline/)?"":Y+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return V+e+Y+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+Y+F(e,"shrink","negative")+e;case 5292:return V+e+Y+F(e,"basis","preferred-size")+e;case 6060:return V+"box-"+F(e,"-grow","")+V+e+Y+F(e,"grow","positive")+e;case 4554:return V+F(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!Pt(e,/flex-|baseline/))return Y+"grid-column-align"+yr(e,t)+e;break;case 2592:case 3360:return Y+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Pt(r.props,/grid-\w+-end/)})?~yo(e+(n=n[t].value),"span",0)?e:Y+F(e,"-start","")+e+Y+"grid-row-span:"+(~yo(n,"span",0)?Pt(n,/\d+/):+Pt(n,/\d+/)-+Pt(e,/\d+/))+";":Y+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Pt(r.props,/grid-\w+-start/)})?e:Y+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(e)-1-t>6)switch(he(e,t+1)){case 109:if(he(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+ni+(he(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~yo(e,"stretch",0)?ap(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,c,u){return Y+i+":"+o+u+(s?Y+i+"-span:"+(l?c:+c-+o)+u:"")+e});case 4949:if(he(e,t+6)===121)return F(e,":",":"+V)+e;break;case 6444:switch(he(e,he(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(he(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+Y+"$2box$3")+e;case 100:return F(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Qo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function hy(e,t,n,r){switch(e.type){case ty:if(e.children.length)break;case ey:case Gc:return e.return=e.return||e.value;case tp:return"";case np:return e.return=e.value+"{"+Qo(e.children,r)+"}";case Is:if(!At(e.value=e.props.join(",")))return""}return At(n=Qo(e.children,r))?e.return=e.value+"{"+n+"}":""}function py(e){var t=op(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function gy(e){return function(t){t.root||(t=t.return)&&e(t)}}function vy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Gc:e.return=ap(e.value,e.length,n);return;case np:return Qo([Gt(e,{value:F(e.value,"@","@"+V)})],r);case Is:if(e.length)return ry(n=e.props,function(i){switch(Pt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hn(Gt(e,{props:[F(i,/:(read-\w+)/,":"+ni+"$1")]})),Hn(Gt(e,{props:[i]})),Nl(e,{props:Pd(n,r)});break;case"::placeholder":Hn(Gt(e,{props:[F(i,/:(plac\w+)/,":"+V+"input-$1")]})),Hn(Gt(e,{props:[F(i,/:(plac\w+)/,":"+ni+"$1")]})),Hn(Gt(e,{props:[F(i,/:(plac\w+)/,Y+"input-$1")]})),Hn(Gt(e,{props:[i]})),Nl(e,{props:Pd(n,r)});break}return""})}}var _y={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$e={},br=typeof process<"u"&&$e!==void 0&&($e.REACT_APP_SC_ATTR||$e.SC_ATTR)||"data-styled",lp="active",cp="data-styled-version",Bs="6.1.13",Xc=`/*!sc*/
`,Jo=typeof window<"u"&&"HTMLElement"in window,yy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==""?$e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.SC_DISABLE_SPEEDY!==void 0&&$e.SC_DISABLE_SPEEDY!==""&&$e.SC_DISABLE_SPEEDY!=="false"&&$e.SC_DISABLE_SPEEDY),wy={},Ts=Object.freeze([]),xr=Object.freeze({});function up(e,t,n){return n===void 0&&(n=xr),e.theme!==n.theme&&e.theme||t||n.theme}var dp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),by=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xy=/(^-|-$)/g;function Bd(e){return e.replace(by,"-").replace(xy,"")}var Ay=/(a)(d)/gi,ro=52,Td=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pl(e){var t,n="";for(t=Math.abs(e);t>ro;t=t/ro|0)n=Td(t%ro)+n;return(Td(t%ro)+n).replace(Ay,"$1-$2")}var xa,mp=5381,or=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},fp=function(e){return or(mp,e)};function hp(e){return Pl(fp(e)>>>0)}function Sy(e){return e.displayName||e.name||"Component"}function Aa(e){return typeof e=="string"&&!0}var pp=typeof Symbol=="function"&&Symbol.for,gp=pp?Symbol.for("react.memo"):60115,Cy=pp?Symbol.for("react.forward_ref"):60112,ky={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ey=((xa={})[Cy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xa[gp]=vp,xa);function Md(e){return("type"in(t=e)&&t.type.$$typeof)===gp?vp:"$$typeof"in e?Ey[e.$$typeof]:ky;var t}var Ny=Object.defineProperty,Ly=Object.getOwnPropertyNames,Fd=Object.getOwnPropertySymbols,Iy=Object.getOwnPropertyDescriptor,Py=Object.getPrototypeOf,zd=Object.prototype;function _p(e,t,n){if(typeof t!="string"){if(zd){var r=Py(t);r&&r!==zd&&_p(e,r,n)}var i=Ly(t);Fd&&(i=i.concat(Fd(t)));for(var o=Md(e),s=Md(t),l=0;l<i.length;++l){var c=i[l];if(!(c in jy||n&&n[c]||s&&c in s||o&&c in o)){var u=Iy(t,c);try{Ny(e,c,u)}catch{}}}}return e}function Ar(e){return typeof e=="function"}function Qc(e){return typeof e=="object"&&"styledComponentId"in e}function jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Rl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ai(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ol(e,t,n){if(n===void 0&&(n=!1),!n&&!Ai(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ol(e[r],t[r]);else if(Ai(t))for(var r in t)e[r]=Ol(e[r],t[r]);return e}function Jc(e,t){Object.defineProperty(e,"toString",{value:t})}function Oi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ry=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Oi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Xc);return n},e}(),xo=new Map,Zo=new Map,Ao=1,io=function(e){if(xo.has(e))return xo.get(e);for(;Zo.has(Ao);)Ao++;var t=Ao++;return xo.set(e,t),Zo.set(t,e),t},Oy=function(e,t){Ao=t+1,xo.set(e,t),Zo.set(t,e)},By="style[".concat(br,"][").concat(cp,'="').concat(Bs,'"]'),Ty=new RegExp("^".concat(br,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),My=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Fy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Xc),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var c=l.match(Ty);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(Oy(d,u),My(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},Dd=function(e){for(var t=document.querySelectorAll(By),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(br)!==lp&&(Fy(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function zy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(br,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(br,lp),r.setAttribute(cp,Bs);var s=zy();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Dy=function(){function e(t){this.element=yp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Oi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Uy=function(){function e(t){this.element=yp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ud=Jo,$y={isServer:!Jo,useCSSOMInjection:!yy},es=function(){function e(t,n,r){t===void 0&&(t=xr),n===void 0&&(n={});var i=this;this.options=ke(ke({},$y),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Jo&&Ud&&(Ud=!1,Dd(this)),Jc(this,function(){return function(o){for(var s=o.getTag(),l=s.length,c="",u=function(m){var g=function(p){return Zo.get(p)}(m);if(g===void 0)return"continue";var _=o.names.get(g),v=s.getGroup(m);if(_===void 0||!_.size||v.length===0)return"continue";var w="".concat(br,".g").concat(m,'[id="').concat(g,'"]'),y="";_!==void 0&&_.forEach(function(p){p.length>0&&(y+="".concat(p,","))}),c+="".concat(v).concat(w,'{content:"').concat(y,'"}').concat(Xc)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return io(t)},e.prototype.rehydrate=function(){!this.server&&Jo&&Dd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ke(ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new qy(i):r?new Dy(i):new Uy(i)}(this.options),new Ry(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(io(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(io(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(io(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Wy=/&/g,Vy=/^\s*\/\/.*$/gm;function wp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wp(n.children,t)),n})}function Hy(e){var t,n,r,i=xr,o=i.options,s=o===void 0?xr:o,l=i.plugins,c=l===void 0?Ts:l,u=function(g,_,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},d=c.slice();d.push(function(g){g.type===Is&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Wy,n).replace(r,u))}),s.prefix&&d.push(vy),d.push(hy);var m=function(g,_,v,w){_===void 0&&(_=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var y=g.replace(Vy,""),p=my(v||_?"".concat(v," ").concat(_," { ").concat(y," }"):y);s.namespace&&(p=wp(p,s.namespace));var f=[];return Qo(p,py(d.concat(gy(function(h){return f.push(h)})))),f};return m.hash=c.length?c.reduce(function(g,_){return _.name||Oi(15),or(g,_.name)},mp).toString():"",m}var Ky=new es,Bl=Hy(),bp=pe.createContext({shouldForwardProp:void 0,styleSheet:Ky,stylis:Bl});bp.Consumer;pe.createContext(void 0);function Tl(){return S.useContext(bp)}var Gy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Bl);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Jc(this,function(){throw Oi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Bl),this.name+t.hash},e}(),Yy=function(e){return e>="A"&&e<="Z"};function qd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Yy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xp=function(e){return e==null||e===!1||e===""},Ap=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!xp(o)&&(Array.isArray(o)&&o.isCss||Ar(o)?r.push("".concat(qd(i),":"),o,";"):Ai(o)?r.push.apply(r,xi(xi(["".concat(i," {")],Ap(o),!1),["}"],!1)):r.push("".concat(qd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in _y||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function dn(e,t,n,r){if(xp(e))return[];if(Qc(e))return[".".concat(e.styledComponentId)];if(Ar(e)){if(!Ar(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return dn(i,t,n,r)}var o;return e instanceof Gy?n?(e.inject(n,r),[e.getName(r)]):[e]:Ai(e)?Ap(e):Array.isArray(e)?Array.prototype.concat.apply(Ts,e.map(function(s){return dn(s,t,n,r)})):[e.toString()]}function Sp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ar(n)&&!Qc(n))return!1}return!0}var Xy=fp(Bs),Qy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Sp(t),this.componentId=n,this.baseHash=or(Xy,n),this.baseStyle=r,es.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=jn(i,this.staticRulesId);else{var o=Rl(dn(this.rules,t,n,r)),s=Pl(or(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=jn(i,s),this.staticRulesId=s}else{for(var c=or(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var m=this.rules[d];if(typeof m=="string")u+=m;else if(m){var g=Rl(dn(m,t,n,r));c=or(c,g+d),u+=g}}if(u){var _=Pl(c>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(u,".".concat(_),void 0,this.componentId)),i=jn(i,_)}}return i},e}(),Zc=pe.createContext(void 0);Zc.Consumer;var Sa={};function Jy(e,t,n){var r=Qc(e),i=e,o=!Aa(e),s=t.attrs,l=s===void 0?Ts:s,c=t.componentId,u=c===void 0?function(b,C){var j=typeof b!="string"?"sc":Bd(b);Sa[j]=(Sa[j]||0)+1;var x="".concat(j,"-").concat(hp(Bs+j+Sa[j]));return C?"".concat(C,"-").concat(x):x}(t.displayName,t.parentComponentId):c,d=t.displayName,m=d===void 0?function(b){return Aa(b)?"styled.".concat(b):"Styled(".concat(Sy(b),")")}(e):d,g=t.displayName&&t.componentId?"".concat(Bd(t.displayName),"-").concat(t.componentId):t.componentId||u,_=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;v=function(b,C){return w(b,C)&&y(b,C)}}else v=w}var p=new Qy(n,g,r?i.componentStyle:void 0);function f(b,C){return function(j,x,k){var B=j.attrs,O=j.componentStyle,Q=j.defaultProps,lt=j.foldedComponentIds,be=j.styledComponentId,xe=j.target,$t=pe.useContext(Zc),Wt=Tl(),wt=j.shouldForwardProp||Wt.shouldForwardProp,E=up(x,$t,Q)||xr,L=function(Oe,Ne,Lt){for(var Ir,wn=ke(ke({},Ne),{className:void 0,theme:Lt}),Ks=0;Ks<Oe.length;Ks+=1){var zi=Ar(Ir=Oe[Ks])?Ir(wn):Ir;for(var Vt in zi)wn[Vt]=Vt==="className"?jn(wn[Vt],zi[Vt]):Vt==="style"?ke(ke({},wn[Vt]),zi[Vt]):zi[Vt]}return Ne.className&&(wn.className=jn(wn.className,Ne.className)),wn}(B,x,E),R=L.as||xe,$={};for(var W in L)L[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&L.theme===E||(W==="forwardedAs"?$.as=L.forwardedAs:wt&&!wt(W,R)||($[W]=L[W]));var Nt=function(Oe,Ne){var Lt=Tl(),Ir=Oe.generateAndInjectStyles(Ne,Lt.styleSheet,Lt.stylis);return Ir}(O,L),Ee=jn(lt,be);return Nt&&(Ee+=" "+Nt),L.className&&(Ee+=" "+L.className),$[Aa(R)&&!dp.has(R)?"class":"className"]=Ee,$.ref=k,S.createElement(R,$)}(h,b,C)}f.displayName=m;var h=pe.forwardRef(f);return h.attrs=_,h.componentStyle=p,h.displayName=m,h.shouldForwardProp=v,h.foldedComponentIds=r?jn(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=g,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(C){for(var j=[],x=1;x<arguments.length;x++)j[x-1]=arguments[x];for(var k=0,B=j;k<B.length;k++)Ol(C,B[k],!0);return C}({},i.defaultProps,b):b}}),Jc(h,function(){return".".concat(h.styledComponentId)}),o&&_p(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function $d(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Wd=function(e){return Object.assign(e,{isCss:!0})};function eu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ar(e)||Ai(e))return Wd(dn($d(Ts,xi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?dn(r):Wd(dn($d(r,t)))}function Ml(e,t,n){if(n===void 0&&(n=xr),!t)throw Oi(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,eu.apply(void 0,xi([i],o,!1)))};return r.attrs=function(i){return Ml(e,t,ke(ke({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ml(e,t,ke(ke({},n),i))},r}var Cp=function(e){return Ml(Jy,e)},T=Cp;dp.forEach(function(e){T[e]=Cp(e)});var Zy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Sp(t),es.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Rl(dn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&es.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function kp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=eu.apply(void 0,xi([e],t,!1)),i="sc-global-".concat(hp(JSON.stringify(r))),o=new Zy(r,i),s=function(c){var u=Tl(),d=pe.useContext(Zc),m=pe.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(m,c,u.styleSheet,d,u.stylis),pe.useLayoutEffect(function(){if(!u.styleSheet.server)return l(m,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(m,u.styleSheet)}},[m,c,u.styleSheet,d,u.stylis]),null};function l(c,u,d,m,g){if(o.isStatic)o.renderStyles(c,wy,d,g);else{var _=ke(ke({},u),{theme:up(u,m,s.defaultProps)});o.renderStyles(c,_,d,g)}}return pe.memo(s)}const Ca={mobile:"600px",tablet:"1023px",desktop:"1024px"},D={mobile:`(max-width: ${Ca.mobile})`,tablet:`(max-width: ${Ca.tablet})`,desktop:`(max-width: ${Ca.desktop})`},e1=T.header`
    box-sizing: border-box;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 999;
    width: 100%;
    div {
        box-sizing: border-box;
    }
    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 2rem;
        .first-box {
            display: flex;
            align-items: center;
        }
        .logo-gif {
            max-width: 10rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            img {
                width: 100%;
            }
        }
        .logo {
            cursor: pointer;
        }
        .all-menu {
            .icon {
                margin-right: 2.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                padding: 0.8rem;
                border-radius: 50%;
                &:hover {
                    background-color: #f5f5f5;
                }
            }
        }
        .search-box {
            border: 1px solid #dcdcdc;
            box-sizing: border-box;
            border-radius: 2rem;
            overflow: hidden;
            width: 60rem;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: invert;
            input {
                width: 90%;
                height: 4rem;
                border: none;
                outline: none;
                text-indent: 2rem;
                font-size: 1.6rem;
            }
            .search-btn {
                width: 10%;
                height: 4rem;
                border: none;
                border-left: 1px solid #dcdcdc;
                cursor: pointer;
                background-color: #efefef;
                transition: all 0.3s;
                &:hover {
                    background-color: #dddd;
                }
            }
        }

        .search-history {
            position: absolute;
            background: #fff;
            border-radius: 1rem;
            min-width: 50rem;
            max-width: 56rem;
            padding: 1.5rem;
            box-shadow: #00000050 0px 1px 3px;
            top: 100%;
            left: 36.3%;
            z-index: 999;
            .search-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 2%;
                &:last-child {
                    margin-bottom: 0%;
                }
                &:hover {
                    background: #fafafa;
                }
                .search-keyword {
                    display: flex;
                    align-items: center;
                    width: 90%;
                    img {
                        margin-right: 3%;
                    }
                }
                .history-btn {
                    border: none;
                    background: none;
                    display: flex;
                    .close-btn {
                        width: 70%;
                    }
                }
            }
            @media ${D.mobile} {
                left: 33.5%;
                min-width: 56vw;
                max-width: 62vw;
                img {
                    width: 8%;
                }
                .history-btn {
                    width: 14%;
                    margin-right: -5%;
                }
            }
        }
        .user-menu {
            display: flex;
            justify-content: center;
            align-items: center;
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.8rem;
                border-radius: 50%;
                &:not(:last-of-type) {
                    margin-right: 1rem;
                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
                .user-profile {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    background-color: var(--youtube-red);
                    box-sizing: border-box;
                    font-size: 1.4rem;
                    color: #fff;
                    width: 3rem;
                    height: 3rem;
                    position: relative;
                }
            }
        }
    }
    @media ${D.mobile} {
        box-shadow: #00000050 0px 1px 3px;
        margin-bottom: 1rem;
        .login-menu {
            display: none;
        }
        .top {
            min-height: 8rem;
            .user-menu {
                display: none;
            }
            .search-box {
                width: 40rem;
                border: none;
                &:hover {
                    border: 1px solid #dcdcdc;
                    input {
                        transform: scaleX(1);
                    }
                    .search-btn {
                        width: 10%;
                        height: 4rem;
                        border: none;
                        border-left: 1px solid #dcdcdc;
                        cursor: pointer;
                        background-color: #efefef;
                        transition: all 0.3s;
                        &:hover {
                            background-color: #dddd;
                        }
                        img {
                            width: 2.6rem;
                        }
                    }
                }
                input {
                    transition: all 0.3s;
                    transform: scaleX(0);
                    transform-origin: right;
                }
                .search-btn {
                    background-color: #fff;
                    border: none;
                    position: relative;
                    img {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 3rem;
                    }
                }
            }
        }
    }
`,jp=T.div`
    min-width: 25rem;
    z-index: 10;
    height: 100vh;
    overflow: scroll;
    position: sticky;
    top: 5.6rem;
    .channel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 10% 0;
        .channel-img-wrap {
            border-radius: 50%;
            overflow: hidden;
            width: 12rem;
            height: 12rem;
            margin-bottom: 6%;
            cursor: pointer;
            transition: all 0.3s;
            position: relative;
            img {
                width: 100%;
                height: 100%;
                transition: all 0.3s;
            }
            .edit-img {
                opacity: 0;
                transition: all 0.3s;
                z-index: 99;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                img {
                    width: 4rem;
                }
            }
            &:hover {
                background-color: #fff;
                .edit-img {
                    opacity: 1;
                }
                > img {
                    opacity: 0.4;
                }
            }
        }

        .channel-name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .my-channel-name {
                font-size: 1.2rem;
                color: #666;
                max-width: 16rem;
            }
        }
    }
    ul {
        border-bottom: 1px solid #dcdcdc;
        box-sizing: border-box;
        padding: 1.5rem 1rem;
        .menu-title {
            font-size: 1.6rem;
            margin-bottom: 1rem;
            padding: 0rem 1rem;
            display: flex;
            align-items: center;
            user-select: none;
            img {
                margin-left: 1rem;
            }
        }
        li {
            display: flex;
            width: 22rem;
            box-sizing: border-box;
            align-items: center;
            cursor: pointer;
            padding: 0.8rem 1rem;
            border-radius: 1rem;
            font-size: 1.4rem;
            &:hover {
                background-color: #dddd;
            }
            img {
                margin-right: 2rem;
            }
        }
    }
    .studiomenu-list {
        li {
            min-height: 5rem;
            color: #666;
            img {
                max-width: 2.6rem;
                max-height: 2.6rem;
            }
        }
    }
    .footer {
        width: 18rem;
        word-break: keep-all;
        font-size: 1rem;
        margin-bottom: 20rem;
    }
    .not-login-span {
        display: block;
        width: 20rem;
        font-size: 1.4rem;
        box-sizing: border-box;
        padding: 0 1rem;
        margin-bottom: 1rem;
    }
    .login-menu {
        width: 10rem;
    }
    .thisChannel-item {
        img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
        }
        .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`,t1=T.div`
    .content-wrap {
        display: flex;
        width: 100%;
        position: relative;
        .scroll_up {
            position: fixed;
            bottom: 3rem;
            right: 3rem;
            .scroll_up_btn {
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                cursor: pointer;
                border: none;
                background-color: rgba(0, 0, 0, 0);
                img {
                    width: 100%;
                }
            }
        }
    }
    @media ${D.mobile} {
        margin-bottom: 9rem;
        .content-wrap {
            .scroll_up {
                bottom: 10rem;
                .scroll_up_btn {
                    width: 7rem;
                }
            }
        }
    }
`,n1=T.div`
    width: 100%;
    min-height: 100vh;
    header {
        box-shadow: rgba(0, 0, 0, 0.03) 0px 1rem 2.5rem -0.5rem,
            rgba(0, 0, 0, 0.04) 0rem 1rem 1rem -0.5rem;
    }
    .content-wrap {
        display: flex;
    }
    .studio-title {
        font-size: 2.6rem;
        font-weight: 500;
        margin-bottom: 3rem;
    }
    .inner {
        padding: 2%;
        box-sizing: border-box;
        width: 100%;
    }
`,r1=T.div`
    .spinner {
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .spinner-circle {
        width: 100%;
        height: 100%;
        background: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: inherit;
    }

    .spinner-circle:before {
        z-index: 5;
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 3px dashed #333;
        width: 50px;
        height: 50px;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        animation: loading 1s linear infinite;
    }

    .spinner-circle:after {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 3px dashed #333;
        width: 50px;
        height: 50px;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        animation: loading 1s ease infinite;
        z-index: 10;
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,i1=T.div`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 10%;
    .not {
        text-align: center;
        font-size: 2rem;
    }
`,o1=T.div`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    .menu-list {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 2%;
    }
    .btn-item {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;var Ep={exports:{}},Np={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bi=S;function s1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var a1=typeof Object.is=="function"?Object.is:s1,l1=Bi.useSyncExternalStore,c1=Bi.useRef,u1=Bi.useEffect,d1=Bi.useMemo,m1=Bi.useDebugValue;Np.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=c1(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=d1(function(){function c(_){if(!u){if(u=!0,d=_,_=r(_),i!==void 0&&s.hasValue){var v=s.value;if(i(v,_))return m=v}return m=_}if(v=m,a1(d,_))return v;var w=r(_);return i!==void 0&&i(v,w)?v:(d=_,m=w)}var u=!1,d,m,g=n===void 0?null:n;return[function(){return c(t())},g===null?void 0:function(){return c(g())}]},[t,n,r,i]);var l=l1(e,o[0],o[1]);return u1(function(){s.hasValue=!0,s.value=l},[l]),m1(l),l};Ep.exports=Np;var f1=Ep.exports,He="default"in Oa?pe:Oa,Vd=Symbol.for("react-redux-context"),Hd=typeof globalThis<"u"?globalThis:{};function h1(){if(!He.createContext)return{};const e=Hd[Vd]??(Hd[Vd]=new Map);let t=e.get(He.createContext);return t||(t=He.createContext(null),e.set(He.createContext,t)),t}var hn=h1(),p1=()=>{throw new Error("uSES not initialized!")};function tu(e=hn){return function(){return He.useContext(e)}}var Lp=tu(),Ip=p1,g1=e=>{Ip=e},v1=(e,t)=>e===t;function _1(e=hn){const t=e===hn?Lp:tu(e),n=(r,i={})=>{const{equalityFn:o=v1,devModeChecks:s={}}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:c,getServerState:u,stabilityCheck:d,identityFunctionCheck:m}=t();He.useRef(!0);const g=He.useCallback({[r.name](v){return r(v)}}[r.name],[r,d,s.stabilityCheck]),_=Ip(c.addNestedSub,l.getState,u||l.getState,g,o);return He.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var P=_1();function y1(e){e()}function w1(){let e=null,t=null;return{clear(){e=null,t=null},notify(){y1(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Kd={notify(){},get:()=>[]};function b1(e,t){let n,r=Kd,i=0,o=!1;function s(w){d();const y=r.subscribe(w);let p=!1;return()=>{p||(p=!0,y(),m())}}function l(){r.notify()}function c(){v.onStateChange&&v.onStateChange()}function u(){return o}function d(){i++,n||(n=e.subscribe(c),r=w1())}function m(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Kd)}function g(){o||(o=!0,d())}function _(){o&&(o=!1,m())}const v={addNestedSub:s,notifyNestedSubs:l,handleChangeWrapper:c,isSubscribed:u,trySubscribe:g,tryUnsubscribe:_,getListeners:()=>r};return v}var x1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",A1=typeof navigator<"u"&&navigator.product==="ReactNative",S1=x1||A1?He.useLayoutEffect:He.useEffect;function C1({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:o="once"}){const s=He.useMemo(()=>{const u=b1(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:o}},[e,r,i,o]),l=He.useMemo(()=>e.getState(),[e]);S1(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),l!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,l]);const c=t||hn;return He.createElement(c.Provider,{value:s},n)}var k1=C1;function Pp(e=hn){const t=e===hn?Lp:tu(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var j1=Pp();function E1(e=hn){const t=e===hn?j1:Pp(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var te=E1();g1(f1.useSyncExternalStoreWithSelector);function ve(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var N1=typeof Symbol=="function"&&Symbol.observable||"@@observable",Gd=N1,ka=()=>Math.random().toString(36).substring(7).split("").join("."),L1={INIT:`@@redux/INIT${ka()}`,REPLACE:`@@redux/REPLACE${ka()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ka()}`},ts=L1;function nu(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Rp(e,t,n){if(typeof e!="function")throw new Error(ve(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ve(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ve(1));return n(Rp)(e,t)}let r=e,i=t,o=new Map,s=o,l=0,c=!1;function u(){s===o&&(s=new Map,o.forEach((y,p)=>{s.set(p,y)}))}function d(){if(c)throw new Error(ve(3));return i}function m(y){if(typeof y!="function")throw new Error(ve(4));if(c)throw new Error(ve(5));let p=!0;u();const f=l++;return s.set(f,y),function(){if(p){if(c)throw new Error(ve(6));p=!1,u(),s.delete(f),o=null}}}function g(y){if(!nu(y))throw new Error(ve(7));if(typeof y.type>"u")throw new Error(ve(8));if(typeof y.type!="string")throw new Error(ve(17));if(c)throw new Error(ve(9));try{c=!0,i=r(i,y)}finally{c=!1}return(o=s).forEach(f=>{f()}),y}function _(y){if(typeof y!="function")throw new Error(ve(10));r=y,g({type:ts.REPLACE})}function v(){const y=m;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(ve(11));function f(){const b=p;b.next&&b.next(d())}return f(),{unsubscribe:y(f)}},[Gd](){return this}}}return g({type:ts.INIT}),{dispatch:g,subscribe:m,getState:d,replaceReducer:_,[Gd]:v}}function I1(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:ts.INIT})>"u")throw new Error(ve(12));if(typeof n(void 0,{type:ts.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ve(13))})}function P1(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let i;try{I1(n)}catch(o){i=o}return function(s={},l){if(i)throw i;let c=!1;const u={};for(let d=0;d<r.length;d++){const m=r[d],g=n[m],_=s[m],v=g(_,l);if(typeof v>"u")throw l&&l.type,new Error(ve(14));u[m]=v,c=c||v!==_}return c=c||r.length!==Object.keys(s).length,c?u:s}}function ns(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function R1(...e){return t=>(n,r)=>{const i=t(n,r);let o=()=>{throw new Error(ve(15))};const s={getState:i.getState,dispatch:(c,...u)=>o(c,...u)},l=e.map(c=>c(s));return o=ns(...l)(i.dispatch),{...i,dispatch:o}}}function O1(e){return nu(e)&&"type"in e&&typeof e.type=="string"}var Op=Symbol.for("immer-nothing"),Yd=Symbol.for("immer-draftable"),Xe=Symbol.for("immer-state");function ft(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Sr=Object.getPrototypeOf;function zn(e){return!!e&&!!e[Xe]}function Ut(e){var t;return e?Bp(e)||Array.isArray(e)||!!e[Yd]||!!((t=e.constructor)!=null&&t[Yd])||Fs(e)||zs(e):!1}var B1=Object.prototype.constructor.toString();function Bp(e){if(!e||typeof e!="object")return!1;const t=Sr(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===B1}function rs(e,t){Ms(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Ms(e){const t=e[Xe];return t?t.type_:Array.isArray(e)?1:Fs(e)?2:zs(e)?3:0}function Fl(e,t){return Ms(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Tp(e,t,n){const r=Ms(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function T1(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Fs(e){return e instanceof Map}function zs(e){return e instanceof Set}function An(e){return e.copy_||e.base_}function zl(e,t){if(Fs(e))return new Map(e);if(zs(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Bp(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[Xe];let i=Reflect.ownKeys(r);for(let o=0;o<i.length;o++){const s=i[o],l=r[s];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(r[s]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[s]})}return Object.create(Sr(e),r)}else{const r=Sr(e);if(r!==null&&n)return{...e};const i=Object.create(r);return Object.assign(i,e)}}function ru(e,t=!1){return Ds(e)||zn(e)||!Ut(e)||(Ms(e)>1&&(e.set=e.add=e.clear=e.delete=M1),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>ru(r,!0))),e}function M1(){ft(2)}function Ds(e){return Object.isFrozen(e)}var F1={};function Dn(e){const t=F1[e];return t||ft(0,e),t}var Si;function Mp(){return Si}function z1(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Xd(e,t){t&&(Dn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Dl(e){Ul(e),e.drafts_.forEach(D1),e.drafts_=null}function Ul(e){e===Si&&(Si=e.parent_)}function Qd(e){return Si=z1(Si,e)}function D1(e){const t=e[Xe];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Jd(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Xe].modified_&&(Dl(t),ft(4)),Ut(e)&&(e=is(t,e),t.parent_||os(t,e)),t.patches_&&Dn("Patches").generateReplacementPatches_(n[Xe].base_,e,t.patches_,t.inversePatches_)):e=is(t,n,[]),Dl(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Op?e:void 0}function is(e,t,n){if(Ds(t))return t;const r=t[Xe];if(!r)return rs(t,(i,o)=>Zd(e,r,t,i,o,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return os(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let o=i,s=!1;r.type_===3&&(o=new Set(i),i.clear(),s=!0),rs(o,(l,c)=>Zd(e,r,i,l,c,n,s)),os(e,i,!1),n&&e.patches_&&Dn("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Zd(e,t,n,r,i,o,s){if(zn(i)){const l=o&&t&&t.type_!==3&&!Fl(t.assigned_,r)?o.concat(r):void 0,c=is(e,i,l);if(Tp(n,r,c),zn(c))e.canAutoFreeze_=!1;else return}else s&&n.add(i);if(Ut(i)&&!Ds(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;is(e,i),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&os(e,i)}}function os(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ru(t,n)}function U1(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Mp(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=iu;n&&(i=[r],o=Ci);const{revoke:s,proxy:l}=Proxy.revocable(i,o);return r.draft_=l,r.revoke_=s,l}var iu={get(e,t){if(t===Xe)return e;const n=An(e);if(!Fl(n,t))return q1(e,n,t);const r=n[t];return e.finalized_||!Ut(r)?r:r===ja(e.base_,t)?(Ea(e),e.copy_[t]=$l(r,e)):r},has(e,t){return t in An(e)},ownKeys(e){return Reflect.ownKeys(An(e))},set(e,t,n){const r=Fp(An(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=ja(An(e),t),o=i==null?void 0:i[Xe];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(T1(n,i)&&(n!==void 0||Fl(e.base_,t)))return!0;Ea(e),ql(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return ja(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Ea(e),ql(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=An(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){ft(11)},getPrototypeOf(e){return Sr(e.base_)},setPrototypeOf(){ft(12)}},Ci={};rs(iu,(e,t)=>{Ci[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Ci.deleteProperty=function(e,t){return Ci.set.call(this,e,t,void 0)};Ci.set=function(e,t,n){return iu.set.call(this,e[0],t,n,e[0])};function ja(e,t){const n=e[Xe];return(n?An(n):e)[t]}function q1(e,t,n){var i;const r=Fp(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function Fp(e,t){if(!(t in e))return;let n=Sr(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Sr(n)}}function ql(e){e.modified_||(e.modified_=!0,e.parent_&&ql(e.parent_))}function Ea(e){e.copy_||(e.copy_=zl(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var $1=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const o=n;n=t;const s=this;return function(c=o,...u){return s.produce(c,d=>n.call(this,d,...u))}}typeof n!="function"&&ft(6),r!==void 0&&typeof r!="function"&&ft(7);let i;if(Ut(t)){const o=Qd(this),s=$l(t,void 0);let l=!0;try{i=n(s),l=!1}finally{l?Dl(o):Ul(o)}return Xd(o,r),Jd(i,o)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===Op&&(i=void 0),this.autoFreeze_&&ru(i,!0),r){const o=[],s=[];Dn("Patches").generateReplacementPatches_(t,i,o,s),r(o,s)}return i}else ft(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...l)=>this.produceWithPatches(s,c=>t(c,...l));let r,i;return[this.produce(t,n,(s,l)=>{r=s,i=l}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Ut(e)||ft(8),zn(e)&&(e=W1(e));const t=Qd(this),n=$l(e,void 0);return n[Xe].isManual_=!0,Ul(t),n}finishDraft(e,t){const n=e&&e[Xe];(!n||!n.isManual_)&&ft(9);const{scope_:r}=n;return Xd(r,t),Jd(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=Dn("Patches").applyPatches_;return zn(e)?r(e,t):this.produce(e,i=>r(i,t))}};function $l(e,t){const n=Fs(e)?Dn("MapSet").proxyMap_(e,t):zs(e)?Dn("MapSet").proxySet_(e,t):U1(e,t);return(t?t.scope_:Mp()).drafts_.push(n),n}function W1(e){return zn(e)||ft(10,e),zp(e)}function zp(e){if(!Ut(e)||Ds(e))return e;const t=e[Xe];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=zl(e,t.scope_.immer_.useStrictShallowCopy_)}else n=zl(e,!0);return rs(n,(r,i)=>{Tp(n,r,zp(i))}),t&&(t.finalized_=!1),n}var Qe=new $1,Dp=Qe.produce;Qe.produceWithPatches.bind(Qe);Qe.setAutoFreeze.bind(Qe);Qe.setUseStrictShallowCopy.bind(Qe);Qe.applyPatches.bind(Qe);Qe.createDraft.bind(Qe);Qe.finishDraft.bind(Qe);function Up(e){return({dispatch:n,getState:r})=>i=>o=>typeof o=="function"?o(n,r,e):i(o)}var V1=Up(),H1=Up,K1=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ns:ns.apply(null,arguments)};function em(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(jt(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>O1(r)&&r.type===e,n}var qp=class Hr extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Hr.prototype)}static get[Symbol.species](){return Hr}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Hr(...t[0].concat(this)):new Hr(...t.concat(this))}};function tm(e){return Ut(e)?Dp(e,()=>{}):e}function nm(e,t,n){if(e.has(t)){let i=e.get(t);return n.update&&(i=n.update(i,t,e),e.set(t,i)),i}if(!n.insert)throw new Error(jt(10));const r=n.insert(t,e);return e.set(t,r),r}function G1(e){return typeof e=="boolean"}var Y1=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let s=new qp;return n&&(G1(n)?s.push(V1):s.push(H1(n.extraArgument))),s},X1="RTK_autoBatch",$p=e=>t=>{setTimeout(t,e)},Q1=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:$p(10),J1=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,o=!1,s=!1;const l=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?Q1:e.type==="callback"?e.queueNotification:$p(e.timeout),u=()=>{s=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const m=()=>i&&d(),g=r.subscribe(m);return l.add(d),()=>{g(),l.delete(d)}},dispatch(d){var m;try{return i=!((m=d==null?void 0:d.meta)!=null&&m[X1]),o=!i,o&&(s||(s=!0,c(u))),r.dispatch(d)}finally{i=!0}}})},Z1=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new qp(e);return r&&i.push(J1(typeof r=="object"?r:void 0)),i};function ew(e){const t=Y1(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let l;if(typeof n=="function")l=n;else if(nu(n))l=P1(n);else throw new Error(jt(1));let c;typeof r=="function"?c=r(t):c=t();let u=ns;i&&(u=K1({trace:!1,...typeof i=="object"&&i}));const d=R1(...c),m=Z1(d);let g=typeof s=="function"?s(m):m();const _=u(...g);return Rp(l,o,_)}function Wp(e){const t={},n=[];let r;const i={addCase(o,s){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(jt(28));if(l in t)throw new Error(jt(29));return t[l]=s,i},addMatcher(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase(o){return r=o,i}};return e(i),[t,n,r]}function tw(e){return typeof e=="function"}function nw(e,t){let[n,r,i]=Wp(t),o;if(tw(e))o=()=>tm(e());else{const l=tm(e);o=()=>l}function s(l=o(),c){let u=[n[c.type],...r.filter(({matcher:d})=>d(c)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,m)=>{if(m)if(zn(d)){const _=m(d,c);return _===void 0?d:_}else{if(Ut(d))return Dp(d,g=>m(g,c));{const g=m(d,c);if(g===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}}return d},l)}return s.getInitialState=o,s}var rw=Symbol.for("rtk-slice-createasyncthunk");function iw(e,t){return`${e}/${t}`}function ow({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[rw];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(jt(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(aw()):i.reducers)||{},c=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(h,b){const C=typeof h=="string"?h:h.type;if(!C)throw new Error(jt(12));if(C in u.sliceCaseReducersByType)throw new Error(jt(13));return u.sliceCaseReducersByType[C]=b,d},addMatcher(h,b){return u.sliceMatchers.push({matcher:h,reducer:b}),d},exposeAction(h,b){return u.actionCreators[h]=b,d},exposeCaseReducer(h,b){return u.sliceCaseReducersByName[h]=b,d}};c.forEach(h=>{const b=l[h],C={reducerName:h,type:iw(o,h),createNotation:typeof i.reducers=="function"};cw(b)?dw(C,b,d,t):lw(C,b,d)});function m(){const[h={},b=[],C=void 0]=typeof i.extraReducers=="function"?Wp(i.extraReducers):[i.extraReducers],j={...h,...u.sliceCaseReducersByType};return nw(i.initialState,x=>{for(let k in j)x.addCase(k,j[k]);for(let k of u.sliceMatchers)x.addMatcher(k.matcher,k.reducer);for(let k of b)x.addMatcher(k.matcher,k.reducer);C&&x.addDefaultCase(C)})}const g=h=>h,_=new Map;let v;function w(h,b){return v||(v=m()),v(h,b)}function y(){return v||(v=m()),v.getInitialState()}function p(h,b=!1){function C(x){let k=x[h];return typeof k>"u"&&b&&(k=y()),k}function j(x=g){const k=nm(_,b,{insert:()=>new WeakMap});return nm(k,x,{insert:()=>{const B={};for(const[O,Q]of Object.entries(i.selectors??{}))B[O]=sw(Q,x,y,b);return B}})}return{reducerPath:h,getSelectors:j,get selectors(){return j(C)},selectSlice:C}}const f={name:o,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:y,...p(s),injectInto(h,{reducerPath:b,...C}={}){const j=b??s;return h.inject({reducerPath:j,reducer:w},C),{...f,...p(j,!0)}}};return f}}function sw(e,t,n,r){function i(o,...s){let l=t(o);return typeof l>"u"&&r&&(l=n()),e(l,...s)}return i.unwrapped=e,i}var Ti=ow();function aw(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function lw({type:e,reducerName:t,createNotation:n},r,i){let o,s;if("reducer"in r){if(n&&!uw(r))throw new Error(jt(17));o=r.reducer,s=r.prepare}else o=r;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?em(e,s):em(e))}function cw(e){return e._reducerDefinitionType==="asyncThunk"}function uw(e){return e._reducerDefinitionType==="reducerWithPrepare"}function dw({type:e,reducerName:t},n,r,i){if(!i)throw new Error(jt(18));const{payloadCreator:o,fulfilled:s,pending:l,rejected:c,settled:u,options:d}=n,m=i(e,o,d);r.exposeAction(t,m),s&&r.addCase(m.fulfilled,s),l&&r.addCase(m.pending,l),c&&r.addCase(m.rejected,c),u&&r.addMatcher(m.settled,u),r.exposeCaseReducer(t,{fulfilled:s||oo,pending:l||oo,rejected:c||oo,settled:u||oo})}function oo(){}function jt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const mw={isSideMenu:!0},Vp=Ti({name:"headerSlice",initialState:mw,reducers:{SideMenuChange(e){e.isSideMenu=!e.isSideMenu}}}),{SideMenuChange:ou}=Vp.actions,fw=Vp.reducer,hw=()=>{const e=te(),t=()=>{e(ou())};return a.jsx("div",{className:"all-menu pc",onClick:t,children:a.jsx("div",{className:"icon",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/All_menu.svg",alt:"menu"})})})},pw=()=>{const e=q(),[t,n]=S.useState(!0);return S.useEffect(()=>{setTimeout(()=>{n(!1)},12e3)},[]),a.jsx(a.Fragment,{children:t?a.jsx("div",{className:"logo-gif",onClick:()=>e("/"),children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/refs/heads/main/Icon/YouTube_logo.webp",alt:"Youtube"})}):a.jsx("div",{className:"logo",onClick:()=>e("/"),children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/YouTube_logo.svg",alt:"Youtube"})})})},gw=[{user_id:798311,user_name:"진돗개 이레",user_age:20,user_tel:"010-5305-9524",user_email:"jindoEre@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[660495]},{user_id:660495,user_name:"쇼핑맘",user_age:29,user_tel:"010-0652-9305",user_email:"shoppingMom@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[798311]},{user_id:201864,user_name:"mamu마므",user_age:20,user_tel:"010-4505-9420",user_email:"mamu_vlog@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[904206]},{user_id:904206,user_name:"무찌",user_age:35,user_tel:"010-0654-7051",user_email:"moozzi@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[201864]},{user_id:806540,user_name:"아가리어터",user_age:27,user_tel:"010-5305-9524",user_email:"Or7r2l@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[56165156]},{user_id:56165156,user_name:"radiohead",user_age:20,user_tel:"010-1234-1234",user_email:"radiohead@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[806540]},{user_id:6546654,user_name:"ultraTasteDiary",user_age:30,user_tel:"010-3481-1745",user_email:"ultraTasteDiary@naver.com",user_password:"8761",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[96745102]},{user_id:96745102,user_name:"suede",user_age:27,user_tel:"010-4912-9012",user_email:"suede@naver.com",user_password:"1568",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[41846541]},{user_id:41846541,user_name:"woowakgood",user_age:35,user_tel:"010-4975-6179",user_email:"woowakgood@naver.com",user_password:"3715",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:81372931,user_name:"goodboykris",user_age:26,user_tel:"010-1546-4891",user_email:"goodboykris@naver.com",user_password:"8154",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:741852,user_name:"KBS_Joy",user_age:34,user_tel:"010-1234-1234",user_email:"KBS_Joy@naver.com",user_password:"1111",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:458963,user_name:"LIJULIKE",user_age:25,user_tel:"010-5647-7894",user_email:"LIJULIKE@naver.com",user_password:"2222",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:641322,user_name:"Highfiction",user_age:21,user_tel:"010-5648-0057",user_email:"Highfiction@naver.com",user_password:"3333",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:984562,user_name:"Beginagain",user_age:34,user_tel:"010-7489-5587",user_email:"Beginagain@naver.com",user_password:"4444",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:859641,user_name:"G_Movie",user_age:37,user_tel:"010-1122-3344",user_email:"G_Movie@naver.com",user_password:"5555",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:452454,user_name:"workman",user_age:30,user_tel:"010-1546-4780",user_email:"workman@naver.com",user_password:"1234",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:775460,user_name:"sbs_dali",user_age:30,user_tel:"010-1226-4905",user_email:"sbs_dali@naver.com",user_password:"1434",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:125424,user_name:"ootbstudio",user_age:38,user_tel:"010-1226-4905",user_email:"ootbstudio@naver.com",user_password:"8834",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:2250024,user_name:"SBSKPOP",user_age:25,user_tel:"010-4872-1655",user_email:"SBSKPOP@naver.com",user_password:"8204",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]},{user_id:2215544,user_name:"SBSANIMAL",user_age:33,user_tel:"010-3264-2585",user_email:"SBSANIMAL@naver.com",user_password:"1212",user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]}],vw={LoginUser:JSON.parse(localStorage.getItem("YoutubeLoginUser"))||gw,isLoginUser:JSON.parse(localStorage.getItem("YoutubeIsLoginUser"))||{},isAuth:JSON.parse(localStorage.getItem("YoutubeIsAuth"))||!1},Hp=Ti({name:"authSlice",initialState:vw,reducers:{UserLogin(e,t){const{user_email:n,user_password:r}=t.payload,i=e.LoginUser.find(o=>o.user_email===n&&o.user_password===r);i?(e.isAuth=!0,e.isLoginUser=i,localStorage.setItem("YoutubeIsAuth",JSON.stringify(!0)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(i))):(e.isAuth=!1,e.isLoginUser={},localStorage.removeItem("YoutubeIsAuth"),localStorage.removeItem("YoutubeIsLoginUser"))},UserLogout(e){e.isAuth=!1,e.isLoginUser=null,localStorage.removeItem("YoutubeIsAuth"),localStorage.removeItem("YoutubeIsLoginUser")},AddNewUser(e,t){if(t.payload.ip){const n=e.LoginUser.find(r=>r.user_id===t.payload.ip);if(n)e.isLoginUser=n;else{const r={user_id:t.payload.ip,user_search_list:[],Viewing_Record:[]};e.LoginUser.push(r),e.isLoginUser=r}}else{const n={user_id:Math.floor(Math.random()*1e6),...t.payload,user_search_list:[],Viewing_Record:[],Playlist:[],Later_Watch:[],like_Movie_List:[],dislike_Movie_List:[],Download_List:[],Subscription_Id:[]};e.LoginUser.push(n),e.isLoginUser=n,e.isAuth=!0}localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)),localStorage.setItem("YoutubeIsAuth",JSON.stringify(e.isAuth)),localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser))},IsAddList(e,t){const{user_id:n,type:r,movie:i}=t.payload,o=e.LoginUser.find(s=>s.user_id===n);if(o&&o[r]){const s=o[r].findIndex(l=>l.movie_id===i.movie_id);s!==-1&&o[r].splice(s,1),o[r].push(i),o[r].sort((l,c)=>new Date(c.movie_date.year,c.movie_date.month-1,c.movie_date.day)-new Date(l.movie_date.year,l.movie_date.month-1,l.movie_date.day)),e.isLoginUser=o}localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},IsDelList(e,t){const{user_id:n,type:r,movie:i}=t.payload,o=e.LoginUser.find(s=>s.user_id===n);o&&(o[r]=o[r].filter(s=>s.movie_id!==i.movie_id)),e.isLoginUser=o,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},AllDelList(e,t){const{user_id:n,type:r}=t.payload,i=e.LoginUser.find(o=>o.user_id===n);i&&(i[r]=[]),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))},AddNewSearchList(e,t){const{user_id:n,search:r}=t.payload,i=e.LoginUser.find(o=>o.user_id===n);if(i&&!i.user_search_list.some(s=>s.search===r)){const s={search_id:Math.floor(Math.random()*1e6),search:r};i.user_search_list.unshift(s),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))}},DelSearchList(e,t){const{user_id:n,search:r}=t.payload,i=e.LoginUser.find(o=>o.user_id===n);i&&(i.user_search_list=i.user_search_list.filter(o=>o.search!==r),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)))},AddNewSubscription(e,t){var o;const{user_id:n,channel_id:r}=t.payload,i=e.LoginUser.find(s=>s.user_id===n);i&&((o=i.Subscription_Id)!=null&&o.includes(r)||i.Subscription_Id.push(r),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser)))},DelSubscription(e,t){const{user_id:n,channel_id:r}=t.payload,i=e.LoginUser.find(o=>o.user_id===n);i.Subscription_Id=i.Subscription_Id.filter(o=>o!==r),e.isLoginUser=i,localStorage.setItem("YoutubeLoginUser",JSON.stringify(e.LoginUser)),localStorage.setItem("YoutubeIsLoginUser",JSON.stringify(e.isLoginUser))}}}),{UserLogin:Kp,UserLogout:Gp,AddNewUser:Yp,IsAddList:su,AllDelList:_w,IsDelList:au,AddNewSearchList:yw,DelSearchList:ww,AddNewSubscription:bw,DelSubscription:xw}=Hp.actions,Aw=Hp.reducer,Sw=({setIsShown:e,isShown:t,search:n,setSearch:r})=>{const i=q(),o=te(),s=P(c=>c.auth.isLoginUser),l=c=>{c.preventDefault(),n&&(o(yw({user_id:s.user_id,search:n})),i(`/movies/${n}`),r(""))};return a.jsxs("form",{onSubmit:l,className:"search-box",onClick:()=>e(!t),children:[a.jsx("input",{type:"text",name:"search",id:"search",placeholder:"검색",value:n,onChange:c=>{r(c.target.value)}}),a.jsx("button",{type:"submit",className:"search-btn",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg",alt:"search"})})]})},Cw=T.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    padding: 0.6rem 0.8%;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background-color: #dddd;
    }
    .account-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1rem;
    }
    .login-btn {
        font-size: 1.4rem;
    }
    @media ${D.mobile} {
        min-width: 10rem;
    }
`,kw=T.ul`
    position: absolute;
    left: -18rem;
    top: 4rem;
    padding: 1rem 0;
    z-index: 999;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1); /* 그림자 추가 */
    width: 100%;
    min-width: 22rem;
    overflow: hidden;
    li {
        display: flex;
        align-items: center;
        padding: 0.6rem 1.6rem;
        cursor: pointer;
        font-size: 1.4rem;
        color: #333;
        &:hover {
            background-color: #f0f0f0;
        }
        img {
            margin-right: 0.8rem;
        }
    }
`,jw={isSavePop:!1,popMsg:null},Xp=Ti({name:"savepopSlice",initialState:jw,reducers:{isSavePopTrue(e,t){e.isSavePop=!0,e.popMsg=t.payload},isSavePopFalse(e){e.isSavePop=!1,e.popMsg=null}}}),{isSavePopTrue:at,isSavePopFalse:Ew}=Xp.actions,Nw=Xp.reducer,Lw=()=>{const{isAuth:e,isLoginUser:t}=P(o=>o.auth),n=q(),r=te(),i=o=>{e&&(o==="logout"?(r(Gp()),n("/"),r(at(`${t.user_name}님 로그아웃`))):o==="studio"?n(`/studio/${t.user_id}/dashboard`):alert("error"))};if(e&&t)return a.jsxs(kw,{children:[a.jsxs("li",{onClick:()=>i("logout"),className:"log-out",children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/logout.svg",alt:"logout"}),"로그아웃"]}),a.jsxs("li",{onClick:()=>i("studio"),className:"studio",children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/119e28bfa00f6df905130034043fd7183cdfc9f3/Icon/YouTube_studio.svg",alt:"studio"}),"Youtube 스튜디오"]})]})},yn=e=>{const t=S.useRef(null),n=r=>{t.current&&!t.current.contains(r.target)&&e()};return S.useEffect(()=>(document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}),[]),t},Iw=()=>{var o;const{isLoginUser:e}=P(s=>s.auth),[t,n]=S.useState(!1),r=yn(()=>n(!1)),i=q();return a.jsxs("div",{className:"user-menu pc",children:[a.jsx("a",{href:"#",onClick:s=>{s.preventDefault(),i(`/studio/${e.user_id}/dashboard`)},children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Making_video.svg",alt:"MakingVideo"})}),a.jsx("a",{href:"#",onClick:()=>n(!t),ref:r,children:a.jsxs("span",{className:"user-profile",children:[(o=e==null?void 0:e.user_name)==null?void 0:o.charAt(0),t&&a.jsx(Lw,{})]})})]})},lu=()=>{const e=q();return a.jsxs(Cw,{className:"login-menu",onClick:()=>e("/login"),children:[a.jsx("div",{className:"account-wrap ",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/Account.svg",alt:"Account"})}),a.jsx("p",{className:"login-btn",children:"로그인"})]})},Pw=({isShown:e,setSearch:t,setIsShown:n})=>{const r=q(),i=te(),o=P(u=>u.auth.isLoginUser),s=(o==null?void 0:o.user_search_list)||[],l=u=>{t(u),n(!0),r(`/movies/${u}`)},c=u=>{i(ww({user_id:o.user_id,search:u}))};return s.length>0&&!e&&a.jsx("ul",{className:"search-history",children:s.map(u=>a.jsxs("li",{className:"search-item",onClick:()=>l(u.search),children:[a.jsxs("p",{className:"search-keyword",children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Search.svg",alt:"search"}),u.search]}),a.jsx("button",{className:"history-btn",onClick:d=>{d.stopPropagation(),c(u.search)},children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/Close_Btn.svg",alt:"close-btn",className:"close-btn"})})]},u.search_id))})},Qp=()=>{const{isAuth:e}=P(l=>l.auth),[t,n]=S.useState(!0),[r,i]=S.useState(""),{Search:o}=_t(),s=yn(()=>n(!0));return a.jsx(e1,{id:"header",ref:s,children:a.jsxs("div",{className:"top",children:[a.jsxs("div",{className:"first-box",children:[a.jsx(hw,{}),a.jsx(pw,{})]}),a.jsx(Sw,{isShown:t,setIsShown:n,search:r,setSearch:i}),a.jsx(Pw,{Search:o,isShown:t,setSearch:i,setIsShown:n}),e?a.jsx(Iw,{}):a.jsx(lu,{})]})})},ss={Home:[{id:1029844,name:"홈",type:"Home",nav:"/",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Home_menu.svg"},{id:46089394,name:"구독",type:"Subscription",nav:"/subscription",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Subscription_menu.svg"}],MyPage:[{id:35329104,name:"시청 기록",type:"Viewing_Record",nav:"/feed/Viewing_Record",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/viewing_record.svg"},{id:3290384132,name:"재생 목록",type:"Playlist",nav:"/feed/Playlist",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Play_list.svg"},{id:4390684386,name:"내 동영상",type:"MyVideo",nav:"/dashboard",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/My_video.svg"},{id:56905630,name:"나중에 볼 동영상",type:"Later_Watch",nav:"/feed/Later_Watch",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/later_on.svg"},{id:3249320423,name:"좋아요 표시한 동영상",type:"like_Movie_List",nav:"/feed/like_Movie_List",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Like_list.svg"},{id:896773,name:"오프라인 저장 동영상",type:"Download_List",nav:"/feed/Download_List",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Download.svg"}],SearchCategory:[{id:43968339,name:"쇼핑",type:"shopping",nav:"/movies/shopping",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Shopping.svg"},{id:54907840,name:"음악",type:"music",nav:"/movies/music",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Music.svg"},{id:5604365436,name:"영화",type:"movies",nav:"/movies/movie",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Movies.svg"},{id:592122126,name:"실시간",type:"realtime",nav:"/movies/live",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Real-time.svg"},{id:89065962,name:"학습 프로그램",type:"learningprogram",nav:"/movies/challenge",icon:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/learning_program.svg"}]},ki=({id:e,name:t,type:n,nav:r,icon:i})=>{const o=q(),{isLoginUser:s}=P(c=>c.auth),l=()=>{o(n==="MyVideo"||n==="Dashboard"||n==="Content"||n==="Comment"||n==="VideoUpload"?`/studio/${s.user_id}${r}`:r)};return a.jsxs("li",{onClick:l,children:[a.jsx("img",{src:i,alt:n}),a.jsx("span",{className:"name",children:t})]})},Rw=()=>a.jsx("ul",{children:ss.Home.map(e=>a.jsx(ki,{...e},e.id))}),Ow=()=>{const{isAuth:e}=P(t=>t.auth);return a.jsxs("ul",{children:[a.jsxs("p",{className:"menu-title",children:["내 페이지"," ",a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Right.svg",alt:"right"})]}),e?ss.MyPage.map(t=>a.jsx(ki,{...t},t.id)):ss.MyPage.filter(t=>t.type!=="Download_List"&&t.type!=="like_Movie_List"&&t.type!=="Playlist"&&t.type!=="Later_Watch").map(t=>a.jsx(ki,{...t},t.id))]})},Bw=()=>a.jsxs("ul",{children:[a.jsx("p",{className:"menu-title",children:"탐색"}),ss.SearchCategory.map(e=>a.jsx(ki,{...e},e.id))]}),Tw=()=>{const{Channel:e}=P(o=>o.channel),{isAuth:t,isLoginUser:n}=P(o=>o.auth),r=q(),i=Object.values(e).filter(o=>{var s;return(s=n==null?void 0:n.Subscription_Id)==null?void 0:s.includes(o.channel_id)});return a.jsxs("ul",{className:"subscription-wrap",children:[a.jsx("p",{className:"menu-title",children:"구독"}),t?i.map(o=>a.jsxs("li",{className:"thisChannel-item",onClick:()=>{var s;return r(`/channel/${((s=o.Movies[0])==null?void 0:s.movie_channel)||o.channel_nav}`)},children:[a.jsx("img",{src:o.channel_image,alt:o.channel_name}),a.jsx("span",{className:"name",children:o.channel_name})]},o.channel_id)):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"not-login-span",children:"로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다."}),a.jsx(lu,{})]})]})},Mw=()=>a.jsxs(jp,{className:"pc",children:[a.jsx(Rw,{}),a.jsx(Ow,{}),a.jsx(Tw,{}),a.jsx(Bw,{}),a.jsx("ul",{children:a.jsx("p",{className:"footer",children:"© 2024 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC, 사업자정보, 불법촬영물 신고 크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다."})})]}),Fw=T.ul`
    padding: 1rem 0;
    position: absolute;
    top: 3rem;
    right: -400%;
    z-index: 500;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    width: 100%;
    min-width: 22rem;
    overflow: hidden;
    .save-item {
        display: flex;
        align-items: center;
        padding: 0.6rem 1.6rem;
        cursor: pointer;
        font-size: 1.4rem;
        &:hover {
            background-color: #f0f0f0;
        }
        img {
            margin-right: 0.8rem;
        }
    }
    /* 11/12 김혜림 전체 추가 */
    @media ${D.mobile} {
        width: 24rem;
        .save-item {
            font-size: 1.5rem;
            img {
                width: 3rem;
            }
        }
    }
`,zw=T.div`
    border: 1px solid #000;
    position: fixed;
    bottom: 5rem;
    left: ${e=>e.left};
    padding: 1rem 1.6rem;
    border-radius: 1rem;
    background: #000;
    color: #fff;
    /* 11/15 김혜림 추가 */
    @media ${D.mobile} {
        left: 1rem;
        bottom: 10rem;
    }
`,Dw=({left:e})=>{const{popMsg:t}=P(n=>n.savepop);return a.jsx(zw,{left:e,children:a.jsxs("p",{children:[t," 이(가) 되었습니다."]})})},Uw=T.dialog`
  &.popup-box {
    max-width: 60rem;
    padding: 2.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 0.6rem 5rem rgba(0, 0, 0, 0.4);
    border: none;
    background: #fff;
    .popup-title {
      margin-bottom: 3rem;
      color: #606060;
      font-size: 1.4rem;
    }
    .popup-btns {
      display: flex;
      justify-content: end;
      button {
        z-index: 10;
        cursor: pointer;
        background: none;
        border: none;
      }
      .popup-subscript-end {
        color: #065fd4;
        margin-left: 1rem;
      }
    }
  }
`,qw={KBS_Joy:{channel_id:741852,channel_name:"KBS Joy",channel_nav:"KBS_Joy",channel_banner:"https://yt3.googleusercontent.com/mB8n4aqavnr5nGV5P7UH67hZd2qRYTJ5sCnXVqNIxFMX8NNQ26iyoztz-zfpUj7Nx6Vtp7_WEg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/wNoNXmOpkCgBiPmx8pusWVLDeXIADKo1MhiYz22JBdpVxzCFII7kbZ9g8ihRh1oRszvrvwetgw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"KBS Joy 공식 채널입니다.",channel_subscribers:117e4,Movies:[{movie_id:5961259,movie_title:"피할 수 없는 운명.. 귀신(鬼神) 보는 남자👻 (소름주의) [무엇이든 물어보살]",movie_body:"그의 눈앞에 시도 때도 없이 나타난다는 귀신들!독실한 크리스천이지만 신묘한 능력 덕분에 모르는 사람들까지 점 봐달라고 찾아온다는데..",movie_image:"https://i.ytimg.com/vi/j-rZqBXHIic/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDc5a2AFFlDSZ1NnUBbw6obVrfkKw",movie_video:"https://www.youtube.com/embed/j-rZqBXHIic?si=m8lX6Aec3_QXyyZh&autoplay=1&mute=1",movie_like_count:91e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:11,day:18},movie_comments:[{comment_id:943854943,comment_body:"공부안하고 딴짓할때 수호령이 뒤통수 때려줬음 좋겠다..",comment_user_id:"test",comment_user_name:"ino-zk3go"}]},{movie_id:58709456945,movie_title:"유명한 엄마를 둔 딸의 흔한 고민 [무엇이든 물어보살]",movie_body:"엄마가 유명해서 불편해요 SNS 중독 엄마와 팩트폭격기 딸의 한 치 양보 없는 썰전! ",movie_image:"https://i.ytimg.com/vi/pxPADFCRFY4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNtOffVDGsBO3Z0_nOhVcFH7FQoA",movie_video:"https://www.youtube.com/embed/pxPADFCRFY4?si=IeVxx9gJUd6fQE-p&autoplay=1&mute=1",movie_like_count:48e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:5,day:28},movie_comments:[{comment_id:456852,comment_body:"부모님이 유명해서 고민돼요라고 나오려면 철구 딸은 돼야할 것 같은데 ㅋㅋㅋ 이쯤되면 ㄹㅇ 인생이 고민될만하지",comment_user_id:"test",comment_user_name:"Frog27beat"}]},{movie_id:32905203,movie_title:"행복한 삶을 꿈꾸는 투렛 증후군 환자, '인생을 어떻게 살아가야 할까요..' [무엇이든 물어보살]",movie_body:"행복한 삶을 꿈꾸는 #투렛증후군 환자의 고백",movie_image:"https://i.ytimg.com/vi/eAXN1C0dLe8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAU_AOTsQpOpjh0Wu_JfwMY1jKFaw",movie_video:"https://www.youtube.com/embed/eAXN1C0dLe8?si=K1gkasXQmkbjj42S&autoplay=1&mute=1",movie_like_count:14e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2020,month:3,day:23},movie_comments:[{comment_id:748569,comment_body:"현대의학으로 안된다면 우리의 눈이 달라지면됩니다",comment_user_id:"test",comment_user_name:"전현주-j4c"}]},{movie_id:932848,movie_title:"스스로도 풀지 못한.. 진짜 무속인의 마음속 고민 [무엇이든 물어보살]",movie_body:"신빨 최고 신입 보살이 물어보살에 찾아왔다! 스스로도 못 푼 그녀의 마음 속 고민을 풀어 줄 아기동자의 공감 100배 특급 조언!",movie_image:"https://i.ytimg.com/vi/HBpxhWhWpuw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9XoUoh6LstlgHZzMo74_h2zmJSw",movie_video:"https://www.youtube.com/embed/HBpxhWhWpuw?si=rveNvcv3_Qq9D2n8&autoplay=1&mute=1",movie_like_count:53e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2019,month:9,day:18},movie_comments:[{comment_id:125869,comment_body:"",comment_user_id:"test",comment_user_name:""}]},{movie_id:8862923,movie_title:"(역대급 고민) '잘못된 만남' 현실판🤦‍♂️ '아내가 20년지기 절친과 바람났습니다...' [무엇이든 물어보살]",movie_body:"'아내가 제 절친과 바람났습니다..' 초보 싱글 대디의 안타까운 고민🤦‍♂️",movie_image:"https://i.ytimg.com/vi/rxIiCI-5hsc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8RrMxr0wxcF8b9PZ61VG5aj5k4g",movie_video:"https://www.youtube.com/embed/rxIiCI-5hsc?si=TBIulhyWK7n7yBDO&autoplay=1&mute=1",movie_like_count:67e3,movie_category:"talk",movie_channel:"KBS_Joy",movie_channel_id:741852,movie_date:{year:2020,month:3,day:9},movie_comments:[{comment_id:165265,comment_body:"좀 잔인한 얘기지만 아기도 유전자 검사 한번 해 보길..",comment_user_id:"test",comment_user_name:"신사임니당-w2y"}]}]},LIJULIKE:{channel_id:458963,channel_name:"리쥬라이크",channel_nav:"LIJULIKE",channel_banner:"https://yt3.googleusercontent.com/LPYJH3KwfkCifSwsUuVaVFuKi1Uz09HpDLOi11ddXHlVOBh3XwlYSZfJ7UHjiudY3YAWseAU0q4=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/pcFLVUDQVSlOjqLjCr3K34RiAvvtj0DGTxbdOzYYqmBnmfKN0vfVRv4FSSJo0X9UnTGEoRcg97U=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"유혜주Vlog",channel_subscribers:85e4,Movies:[{movie_id:586412,movie_title:"[VLOG] 벌써 나온다고??😱 남편 없이 갑작스런 출산!! 생전 처음 겪는 엄청난 고통💦",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/cQb-6mQV-KQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB31OYLvG7ZcTDySJTy1hMsOm2fsA",movie_video:"https://www.youtube.com/embed/cQb-6mQV-KQ?si=jccwNpyuj6FWpXLa&autoplay=1&mute=1",movie_like_count:66e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:3,day:3},movie_comments:[{comment_id:567894,comment_body:"볼때마다 눈물이 주륵주륵…평생 잘할게요",comment_user_id:"test",comment_user_name:"@조땡-r8b"}]},{movie_id:789321,movie_title:"드디어 동생과 내친구의 결혼식 공개해요! (제 축사도..)",movie_body:"드디어 제 동생 현주와 제 친구 태성이의 결혼식을 공개해요 !",movie_image:"https://i.ytimg.com/vi/lWwyGT1BJMA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVHK7saocl61XDD-xZOHlNnf3Byg",movie_video:"https://www.youtube.com/embed/lWwyGT1BJMA?si=ZamdeYRmluFQ4nC7&autoplay=1&mute=1",movie_like_count:17e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2022,month:5,day:9},movie_comments:[{comment_id:853121,comment_body:"경찬님 개웃기다.. 영상 볼때마다 한시도 가만히 있질 않으시네요",comment_user_id:"test",comment_user_name:"user-is7du8lu6x"}]},{movie_id:168997,movie_title:"[VLOG] 처음으로 손자를 보는 어머니, 첫조카를 본 가족의 반응은? l 대가족 특집",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/YaxocJPDMDY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDizKIGKdh_cb5Wc6y6lvY3yUTMQ",movie_video:"https://www.youtube.com/embed/YaxocJPDMDY?si=GvxkGOgBrYlgbQ-q&autoplay=1&mute=1",movie_like_count:26e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:4,day:29},movie_comments:[{comment_id:842112,comment_body:"가족이 많다는 건 정말 행복한 일 같아요 정 넘치는 모습 보기 좋아요 🥰",comment_user_id:"test",comment_user_name:"@옹글몽글-e7j"}]},{movie_id:211666,movie_title:"[드디어 공개] 동생과 내친구가 연애하게된 스토리 ep.1",movie_body:"드디어 제 동생 현주와 제 친구 태성이의 연애스토리를 공개합니다❤️ 오랫동안 기다려주셔서 감사해요☺️",movie_image:"https://i.ytimg.com/vi/nyMZxK2Kvhs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdY3151EqR0c7ZBkdJ17MBXgys7Q",movie_video:"https://www.youtube.com/embed/nyMZxK2Kvhs?si=iJT0KA3RWRV3v5Af&autoplay=1&mute=1",movie_like_count:16e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2021,month:10,day:30},movie_comments:[{comment_id:673212,comment_body:"개재밌다...남의 연애사....",comment_user_id:"test",comment_user_name:"@hermit__crab"}]},{movie_id:167556,movie_title:"[VLOG] 남편과 조리원 첫 입소! 처음으로 안아보는 아들👩‍🍼 (모유수유/회음부통증/출산지원금)",movie_body:"instagram : @r_yuhyeju",movie_image:"https://i.ytimg.com/vi/MiBlImCwkso/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdLe_OzNOXirgKX86KNW2tM-x8Hw",movie_video:"https://www.youtube.com/embed/gB1EonLy5lQ?si=laMZ9Xj6HLVMjQi6&autoplay=1&mute=1",movie_like_count:29e3,movie_category:"vlog",movie_channel:"LIJULIKE",movie_channel_id:45896,movie_date:{year:2023,month:3,day:12},movie_comments:[{comment_id:296747,comment_body:"남편분 든든하다.. 옆에서 저렇게 서류 처리할거나 신청 할것들 알아서 착착해주기만 해도 맘 놓을 수 있을듯..",comment_user_id:"test",comment_user_name:"@_nyong_"}]}]},Highfiction:{channel_id:641322,channel_name:"하이픽션",channel_nav:"Highfiction",channel_banner:"https://yt3.googleusercontent.com/w8XfHLFzmciL0QYoAEwv_CP5qvVRRN5wzIkLfAdgtMNuaNtMrJhkTLX0dC46f5gVHWFaoY4YMg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/TJo2vsrvi2HtumSu8qU9OGvRTM6SOPpNZ9lXxC0vLKasedPX-cMOMJgWpY2rkdTxr_f7k5TIpw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"더 높은 재미를 추구하는 하이픽션 입니다",channel_subscribers:756e3,Movies:[{movie_id:567732,movie_title:"(ep.1~10) 조폭여친과 함께하는 연애스토리",movie_body:"조폭여친 몰아보기편!!! 재밌게 봐주세요~!",movie_image:"https://i.ytimg.com/vi/0WZGu5-gwYY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOMsvUKKlWP9t7Xmg-ifXaViTa2A",movie_video:"https://www.youtube.com/embed/0WZGu5-gwYY?si=S6y8EncMYiq64k_c&autoplay=1&mute=1",movie_like_count:29e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2024,month:3,day:21},movie_comments:[{comment_id:247855,comment_body:"그냥 이쁘기만한게 아니라 볼수록 매력있는 시연님!! 계속 매력적인 작품 기대해봅니다. 화이팅!!",comment_user_id:"test",comment_user_name:"arden-white"}]},{movie_id:135276,movie_title:"나 꼬시고 싶어? [거짓말 없는 세상]",movie_body:"안녕하세요 스톡커입니다 재밌게 봐주세요~!",movie_image:"https://i.ytimg.com/vi/I2so7rnoDEM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUmB5blGdntffbfTHpi4XLhIt7rw",movie_video:"https://www.youtube.com/embed/I2so7rnoDEM?si=rQi-dvnPIdToyATH&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2022,month:7,day:2},movie_comments:[{comment_id:851144,comment_body:"문 열리니까 괜히 와보는 고양이 존나 귀엽다",comment_user_id:"test",comment_user_name:"김김-t2h"}]},{movie_id:875312,movie_title:"숏박스 구독 안 한 새끼 누구냐??",movie_body:"안녕하세요 오늘은 유튜버 똥군기입니다 재밌게 만든 픽션이니까 오해하지말고 재미로 봐주세요~!!",movie_image:"https://i.ytimg.com/vi/MgdXR4vTtxQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEVsOphJ1wTY1BEwoPnqP7_8T1hQ",movie_video:"https://www.youtube.com/embed/MgdXR4vTtxQ?si=GwxbT8ZznAtF1Kxm&autoplay=1&mute=1",movie_like_count:37e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2023,month:6,day:17},movie_comments:[{comment_id:342532,comment_body:"안녕하세요 루키치입니다!!! 말씀 하신대로 채널명 바꿨습니다 선배님…",comment_user_id:"test",comment_user_name:"rookitsch"}]},{movie_id:653112,movie_title:"도망가면 뒤진다?",movie_body:"안녕하세요 하이픽션입니다 오늘도 재밌게 봐주세요!!",movie_image:"https://i.ytimg.com/vi/KpV430uiUkY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7VbGVys7By0hxajhDNZhvqLKVQQ",movie_video:"https://www.youtube.com/embed/KpV430uiUkY?si=F2mGpsPg0Vk6Pt7x&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:"641322",movie_date:{year:2023,month:12,day:5},movie_comments:[{comment_id:642323,comment_body:"그래도 세번 도망칠 용기라도 있네 친구는 ㅋㅋㅋㅋㅋㅋㅋ 이쁜사랑 하세요 ㅋㅋㅋㅋㅋ",comment_user_id:"test",comment_user_name:"AKI-___"}]},{movie_id:325464,movie_title:"또 쳐다보세요 [거짓말 없는 세상]",movie_body:"안녕하세요 스톡커입니다 다시 돌아온 헬스장편 재밌게 봐주세요~!!",movie_image:"https://i.ytimg.com/vi/0cEMl3j2cAU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYsI-7LoLfSCZ6yPl6w-Fwd-ol7Q",movie_video:"https://www.youtube.com/embed/0cEMl3j2cAU?si=kz2G69MhCdpzC4bM&autoplay=1&mute=1",movie_like_count:22e3,movie_category:"Comedy",movie_channel:"Highfiction",movie_channel_id:641322,movie_date:{year:2022,month:6,day:22},movie_comments:[{comment_id:564223,comment_body:"이거 헬스장에 대형 티비로 틀어나야  한다",comment_user_id:"test",comment_user_name:"짱코씨"}]}]},Beginagain:{channel_id:984562,channel_name:"@begin_again",channel_nav:"Beginagain",channel_banner:"https://yt3.googleusercontent.com/SgYk8-S4UrUAxgTx4Y0wB64PNsENZK0raxLYEiN800OiRSwh6eMozF0Z9YZoday7cZpII8SV=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/FmxZkGyu8p9bBT774Owjr3A2GNfBQofKZi_yBss5bFMvyhP9RJlFTYCrwcvONxQZ6sVvvJjriQ=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"JTBC의 힐링 음악 예능 [비긴어게인] 공식 채널입니다🎵",channel_subscribers:183e4,Movies:[{movie_id:259877,movie_title:"🎤언제 들어도 소름 돋는 이하이(Lee Hi)의 ′Rose🌹♪ 〈비긴어게인 코리아(beginagainkorea)〉 4회",movie_body:"🎤언제 들어도 소름 돋는 이하이의 ′Rose🌹♪",movie_image:"https://i.ytimg.com/vi/cq-A2RJC7fg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHvwfqHd1X24KLdrxSJUYL25xDFg",movie_video:"https://www.youtube.com/embed/cq-A2RJC7fg?si=V1LgeIM39vh5OAml&autoplay=1&mute=1",movie_like_count:26e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:28},movie_comments:[{comment_id:894448,comment_body:"하이는 본인을 이기는구나,, 라이브가 음원을 압살해버리네",comment_user_id:"test",comment_user_name:"조은교-y1g"}]},{movie_id:423411,movie_title:"[ENG] 수현(Su-hyun)x정승환(Jung Seung-hwan)의 ′어떻게 이별까지 사랑하겠어， 널 사랑하는 거지′♪ 〈비긴어게인 코리아(beginagainkorea)〉 1회",movie_body:"이수현x정승환의 ′어떻게 이별까지 사랑하겠어， 널 사랑하는 거지′♪",movie_image:"https://i.ytimg.com/vi/XNGoOqB8380/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDyocU3z6aYqzs-BCnoS0vhThrQ_A",movie_video:"https://www.youtube.com/embed/XNGoOqB8380?si=5RsOiKM5D9N9dFNz&autoplay=1&mute=1",movie_like_count:12e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:7},movie_comments:[{comment_id:564221,comment_body:"오빠랑 안불러서 더 감정이 들어가 완벽해졌다는 전설의 라이브 영상",comment_user_id:"test",comment_user_name:"관동이관동이"}]},{movie_id:876543,movie_title:"[ENG] (반전의 반전↗) 이수현x헨리x크러쉬x정승환 ′All For You′♬ 〈비긴어게인 코리아(beginagainkorea)〉 1회",movie_body:"(반전의 반전↗) 이수현x헨리x크러쉬x정승환 ′All For You′♬",movie_image:"https://i.ytimg.com/vi/wEgvCBcfFLI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-Z584pH-XHi9wlU2NMG62MHXYwA",movie_video:"https://www.youtube.com/embed/wEgvCBcfFLI?si=q1O96MbHz3GbFUe5&autoplay=1&mute=1",movie_like_count:24e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:6,day:7},movie_comments:[{comment_id:534121,comment_body:"진짜 정승환 목소리가 이수현 목소리 싹 감싸주는 그런느낌 받음",comment_user_id:"test",comment_user_name:"뭐봐일"}]},{movie_id:452431,movie_title:"🎧이수현 Playlist🎧 '심신 안정 보이스' 이수현 노래 모음 ｜ 비긴어게인 모아듣기",movie_body:"🎧비긴어게인 이수현 Playlist🎧",movie_image:"https://i.ytimg.com/vi/STwHSJSA86c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCftOY5ZUPTPthjULKeF-K1kPjTIA",movie_video:"https://www.youtube.com/embed/STwHSJSA86c?si=W3U9NoS5ERACOGH7&autoplay=1&mute=1",movie_like_count:11e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2020,month:8,day:6},movie_comments:[{comment_id:98491202,comment_body:"편집자 상줘라",comment_user_id:"test",comment_user_name:"tuna3298"}]},{movie_id:642431,movie_title:"[ENG｜단독 풀버전] 비긴어게인 코리아 '길' ｜ 눈물바다가 된 비긴코 버스킹 현장😢",movie_body:"비긴어게인 코리아 '길' 풀버전 버스킹 현장이 눈물바다가 된 사연은?!",movie_image:"https://i.ytimg.com/vi/YS10Cdaz2Kk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8bhQuomv7G42p44l1WG1TuPsoeg",movie_video:"https://www.youtube.com/embed/YS10Cdaz2Kk?si=1tV2bLLnE1IUEmNN&autoplay=1&mute=1",movie_like_count:29e4,movie_category:"music",movie_channel:"Beginagain",movie_channel_id:984562,movie_date:{year:2024,month:10,day:28},movie_comments:[{comment_id:432165,comment_body:"저도 한 번만 응원해주세요 죄송합니다..",comment_user_id:"test",comment_user_name:"민석-z4n"}]}]},G_Movie:{channel_id:859641,channel_name:"@지무비",channel_nav:"G_Movie",channel_banner:"https://yt3.googleusercontent.com/YZSsAoZix0DCd0figFc81fktZHrOmvpWg0Se4bspLVD4BLbZH1hsBaPmoG3hlGqlRUxgDovyqg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ytc/AIdro_nLr4j1MqKUus9uB2RADncMRaC__c2D6MKj4x4YbA4IwcU=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"영화&드라마&예능&패션&게임&전자제품&광고를 더 G리게.. 모든 걸 영화처럼..",channel_subscribers:358e4,Movies:[{movie_id:98384321,movie_title:"수갑채워놨는데 남편이 심장마비로 사망하면 벌어지는 대참사",movie_body:"영화 제럴드의게임(2017)입니다",movie_image:"https://i.ytimg.com/vi/2EahotHTVpc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3sfFbsdOHoyNxdvJ0GIg7RiJ6pw",movie_video:"https://www.youtube.com/embed/2EahotHTVpc?si=fng9erydx2hVg_bq&autoplay=1&mute=1",movie_like_count:27e4,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2019,month:3,day:2},movie_comments:[{comment_id:378765,comment_body:"이거 영상 초반만 보고 바로 넷플릭스 드가서 봤는데 진짜 긴장감 쩔고 후반부 소름 장난 아니에요 개무서워요ㅠ퓨 그리고 폰 배터리 없는 설정이라 시리 부르는것두 안댐",comment_user_id:"test",comment_user_name:"cuddly0"}]},{movie_id:989831,movie_title:"'수임료 1000원'인데 '승률 100%'인 전설의 변호사가 주차장 갑질남 차 박살내버린 뒤, 참교육하는 역대 최고로 신박한 방법 ㅋㅋㅋ 《천원짜리 변호사》",movie_body:"드라마 ≪천원짜리 변호사≫, 1화~2화의 내용입니다. 채널 SBS에서 매주 금,토 밤 10시 방영됩니다.",movie_image:"https://i.ytimg.com/vi/yyiox2536C0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnAyfSOlqWJGhw2eRAMWp2MzsOAg",movie_video:"https://www.youtube.com/embed/yyiox2536C0?si=PALxhnFQEsTxm9hi&autoplay=1&mute=1",movie_like_count:11e4,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:9,day:25},movie_comments:[{comment_id:892585,comment_body:"어느 순간부터 남궁민하면 그냥 믿고 보게 됨 작품선정이나 특유의 딕션이랑 연기력이 드라마쪽에선 ㄹㅇ독보적 존재",comment_user_id:"test",comment_user_name:"standstill8152"}]},{movie_id:907429,movie_title:"제목 따위 필요 없는, 내 인생 최고의 드라마 《이태원클라쓰》",movie_body:"드라마, 《이태원클라쓰》 1-4화 소개 영상입니다.",movie_image:"https://i.ytimg.com/vi/P0ikE6tFbas/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1V4ANcuPOrDvWuF3pf0LuZCZ-Ow",movie_video:"https://www.youtube.com/embed/P0ikE6tFbas?si=Dn3uKDy6SES_t03P&autoplay=1&mute=1",movie_like_count:91e3,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:4,day:9},movie_comments:[{comment_id:985234,comment_body:"이태원클라쓰 보고 진짜 아직도 피가 끓는 기분... 열심히 살고자 하는 의지를 계속 일깨워주는 드라마,  진짜 명작이다",comment_user_id:"test",comment_user_name:"vvs7530"}]},{movie_id:215464,movie_title:"퍼스트 클래스탔다고 승무원한테 온갖 진상 다 부리던 손님 옆에 하필 절대 불의를 못참는 자산 3000억 천재 CEO 조승우가 타고 있으면 벌어지는 일 ㅠㅠ",movie_body:"드라마 ≪시지프스≫, 1화~4화의 내용입니다.",movie_image:"https://i.ytimg.com/vi/RIj9IdZvg6M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDtlVjX8Kfc1lGqlbJXNvGZ1T4Og",movie_video:"https://www.youtube.com/embed/RIj9IdZvg6M?si=hPbUY9_bnY3y4BRX&autoplay=1&mute=1",movie_like_count:78e3,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2022,month:9,day:24},movie_comments:[{comment_id:214644,comment_body:"세상에서 가장 무서운게'후회' 인데 후회 하기 싫으면 열심히 잘해해주 잘챙겨주면 되는데 현실에서도 그러지를 못함",comment_user_id:"test",comment_user_name:"꼬꼬마-v4h"}]},{movie_id:4809634,movie_title:"하필이면..힘숨찐도 아닌 초숨찐을 건드린 일진들의 최후ㅠ",movie_body:"OCN 오리지널 드라마, ‘경이로운 소문’ 1-2화 내용입니다. 매주 토,일 밤 10시 30분 채널 OCN에서 방영합니다.",movie_image:"https://i.ytimg.com/vi/eJ5U0tuDxKk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzeIKOpDmmjPBJKv_wSjR_CpMd5Q",movie_video:"https://www.youtube.com/embed/eJ5U0tuDxKk?si=Qj0oDz0Rl92Lp-0V&autoplay=1&mute=1",movie_like_count:1e5,movie_category:"movie_review",movie_channel:"G_Movie",movie_channel_id:859641,movie_date:{year:2020,month:12,day:5},movie_comments:[{comment_id:865412,comment_body:"유준상 배우는 나이가 몇인데자기관리 진짜 엄청나신거같음....비쥬얼이나 체력이나 액션씬 같은거보면 30대라고 해도 믿으실듯;;; 레전드",comment_user_id:"test",comment_user_name:"__Uz"}]}]},radiohead:{channel_id:56165156,channel_name:"라디오헤드",channel_nav:"radiohead",channel_banner:"https://yt3.googleusercontent.com/7YJU_BnlYUPHGI1abV2FfjhgizivH6UZpPaMjAdjKWbuy_o_nspoIOhoa82lDA_c38Jfubve=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/iGWTxAf6tokq9e2cVapQL6D1qgbtD-oFkVLqcUGF24WjUwX68qCm-iN4mMqqJEz_4eRSi-EyEQ=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"radiohead.com",channel_subscribers:404e4,Movies:[{movie_id:556151,movie_title:"라디오헤드 - Fake Plastic Trees",movie_body:"‘Fake Plastic Trees’ is taken from ‘The Bends’ out on XL Recordings. Director: Jake Scott Producer: Ellen JacobsonCinematography: Salvatore Totino Production",movie_image:"https://i.ytimg.com/vi/EzcJhJt_vQY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgXCg5MA8=&rs=AOn4CLDSe2Z3YNdtCuBYnvoVdDAZTymL3g",movie_video:"https://www.youtube.com/embed/EzcJhJt_vQY?autoplay=1&mute=1",movie_like_count:49e4,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2015,month:1,day:23},movie_comments:[{comment_id:136551,comment_body:`"why did you take so long to buy groceries?" 
                                            me:`,comment_user_id:"miguelrodriguez-pineroriva6713",comment_user_name:"산미구엘"}]},{movie_id:556152,movie_title:"이쯤에서 돌아보는 그들의 발자취 라디오헤드 이야기",movie_body:"‘Lotus Flower’ is taken from ‘The King of Limbs’ out on XL Recordings Director of Photograph: Nick Wood",movie_image:"https://i.ytimg.com/vi/f2fjTisiUDI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/f2fjTisiUDI?autoplay=1&mute=1",movie_like_count:44e4,movie_category:"music",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2023,month:10,day:6},movie_comments:[{comment_id:136552,comment_body:"Hi, my name's Thom Yorke and I'll be your freestyle dance teacher",comment_user_id:"pulllak",comment_user_name:"돼지와함께춤을"}]},{movie_id:556153,movie_title:"라디오헤드 - creep",movie_body:"라디오헤드는 Creep 말고도 좋은 노래가 많다 #라디오헤드 56165156#creep #okcomputer #오아시스 #톰요크 #thesmile #더스마일",movie_image:"https://i.ytimg.com/vi/XFkzRNyygfk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCkbazk73In3wUcMpWdiSNFURE3A",movie_video:"https://www.youtube.com/embed/bthufxQepAk?autoplay=1&mute=1",movie_like_count:57e4,movie_category:"music",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2008,month:10,day:15},movie_comments:[{comment_id:136553,comment_body:"Nice dream을 너무 좋아해요 신비한곡인듯",comment_user_id:"Pre_lude",comment_user_name:"레코너"}]},{movie_id:556154,movie_title:"라디오헤드 라이브 - 2 + 2 = 5",movie_body:"'2 + 2 = 5' is taken from 'Hail to the Thief' out on XL Recordings.",movie_image:"https://i.ytimg.com/vi/11oAXmVdEyQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgKAAvABigIMCAAQARgTICsofzAP&rs=AOn4CLB6QlCofl8Rnkm-zzX0EjscePbHdA",movie_video:"https://www.youtube.com/embed/c6GO7c-zO6E?autoplay=1&mute=1",movie_like_count:9400,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2015,month:1,day:23},movie_comments:[{comment_id:136554,comment_body:"2 + 2 = 140p",comment_user_id:"andreylucass",comment_user_name:"앤디"}]},{movie_id:556155,movie_title:"라디오헤드 라이브 - No Surprises",movie_body:"‘No Surprises’ is taken from ‘OK Computer’ out on XL Recordings",movie_image:"https://i.ytimg.com/vi/u5CVsCnxyXg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSo72rG7nC88JI6Ez5InNKRYqhMw",movie_video:"https://www.youtube.com/embed/a8Yh0mNTBuo?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"live",movie_channel:"radiohead",movie_channel_id:56165156,movie_date:{year:2021,month:11,day:1},movie_comments:[{comment_id:136555,comment_body:`Thom: drowns
                                           His face: (            -_-             )`,comment_user_id:"mushfiqahmad1783",comment_user_name:"독버섯"}]}]},ultraTasteDiary:{channel_id:6546654,channel_name:"최강록 Ultra Taste Diary",channel_nav:"ultraTasteDiary",channel_banner:"https://yt3.googleusercontent.com/nVk2CWFo_sMLATnX4kvDakcFI7vuAsBKGBEh-V9MzclW1j8HfYKIz-Xowx_UuOdM2bZn2DJ7aw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/vIc-veEiaMx4XJLekuHNtgzM4DiBTXXhHIGRB9JxZHw_WA_tS3qb16Z-FmaYKpjQtU8YUcmK=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"귀찮음과 시간이 만들어내는 예술 비즈니스 : utdcook@gmail.com",channel_subscribers:57e4,Movies:[{movie_id:794541,movie_title:"제모옥은.......고추장…닭날개 쪼림으로 하겠습니다 근데 이제.. 바지를 겨뜨린",movie_body:"8년 이상 지난 이 음식을 기억하고 계신분들께 감사를 드립니다. 진심은... 그냥 그 때 그 순간에 남은 영상으로 떠돌아 다니는게 이 음식을 돋보이게 하는거라 생각했어요. ",movie_image:"https://i.ytimg.com/vi/JdD3OqGRB_Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnkmCZnxlQxrPCSb-PLyPLDsbt8Q",movie_video:"https://www.youtube.com/embed/JdD3OqGRB_Y?autoplay=1&mute=1",movie_like_count:3500,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2021,month:4,day:30},movie_comments:[{comment_id:348941,comment_body:"미소메시드뭐꼬뭐시라카노'도 꼭 만들어주세요ㅠㅠ",comment_user_id:"Mushirakano",comment_user_name:"김소희"}]},{movie_id:794542,movie_title:"최강록이 최강록을 시작하는 이야기",movie_body:"첫편부터 길고 긴 요리영상을 올리기가 좀 그래서 만든 영상. 근데 이제 주성치 팬심을 곁들인.. 휴...",movie_image:"https://i.ytimg.com/vi/ysLaz2YJ2c4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFw5rw__2RGVNup0KFKjUqJXoSqw",movie_video:"https://www.youtube.com/embed/ysLaz2YJ2c4?autoplay=1&mute=1",movie_like_count:9600,movie_category:"talk",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2020,month:9,day:1},movie_comments:[{comment_id:348942,comment_body:"와...조렸다....",comment_user_id:"acdc",comment_user_name:"암참차"}]},{movie_id:794543,movie_title:"Miso Mashed... Mushirakano(미소 매쉬드 포테이토)",movie_body:"#최강록 #UltraTasteDiary #미소 김소희님 헌정",movie_image:"https://i.ytimg.com/vi/A0t58bjx00s/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/A0t58bjx00s?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2021,month:6,day:25},movie_comments:[{comment_id:348943,comment_body:"결국 흑백요리사에도 등장해버린 미소 매쉬드 머시라카노..",comment_user_id:"strongB",comment_user_name:"강한비-s9x"}]},{movie_id:794544,movie_title:"MBTI 무료 성격유형 검사",movie_body:"#최강록 #UTD #mbti",movie_image:"https://i.ytimg.com/vi/deq3zoLUc_U/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/deq3zoLUc_U?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"comedy",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2022,month:9,day:2},movie_comments:[{comment_id:348944,comment_body:"아니 내향형 100프로 처음 봄 ㅋㅋㅋㅋ",comment_user_id:"kimsbl6n",comment_user_name:"김상부-l6n"}]},{movie_id:794545,movie_title:"지금 만나러 갑니다 / 수빙고(하이브리드 아이스)",movie_body:"#최강록 #강레오 #수빙고 #하이브리드아이스 오랜만에 그 분을 만나러 갔습니다.",movie_image:"https://i.ytimg.com/vi/6o4vGCjZ3WI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/6o4vGCjZ3WI?autoplay=1&mute=1",movie_like_count:7600,movie_category:"food",movie_channel:"ultraTasteDiary",movie_channel_id:6546654,movie_date:{year:2023,month:2,day:3},movie_comments:[{comment_id:348945,comment_body:"강레오..셰프님의 그 쏘는 눈빛 거기에 마주치면 한..6개월씩 늙어요...",comment_user_id:"peterparker",comment_user_name:"파커-u7d"}]}]},suede:{channel_id:96745102,channel_name:"스웨이드",channel_nav:"suede",channel_banner:"https://yt3.googleusercontent.com/iZpbhbFb_GrB1aO_JWSE8-j1tTAP19jxAngN_VSTADyuuqW7UmfMhA_zScznzBTboMN2c8vqV5M=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/UX1nAVaOk_ARxZXQu5uknwTP2JJ3C54dcSWKNjTwoB4Ft8B2v1v4nIVeJCuYWHAYDFd6AxtVjw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"Welcome to the official Suede Youtube channel, the Hub of all of your favourite Suede video's featuring Brett Anderson - such as, 'Beautiful Ones' 'Trash' and 'Animal Nitrate'. Subscribe for stay updates on the latest Music Videos, Interviews and Live footage from Suede.",channel_subscribers:157e3,Movies:[{movie_id:738161,movie_title:"스웨이드 - Life Is Golden (Official Video)",movie_body:"Official video for Life Is Golden, from Suede's 8th studio album 'The Blue Hour'. Filmed on location in Pripyat, Ukraine, near Chernobyl. Directed by Mike Christie.",movie_image:"https://i.ytimg.com/vi/pEJfWrfN15k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6L984WNodmomrig1dFx2SVi2Q7g",movie_video:"https://www.youtube.com/embed/Q9wbVPmUlOw?autoplay=1&mute=1",movie_like_count:17e3,movie_category:"music",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2018,month:8,day:16},movie_comments:[{comment_id:317891,comment_body:"This song is golden",comment_user_id:"hessehessen4334",comment_user_name:"헤헤"}]},{movie_id:738162,movie_title:"스웨이드 - 'She Still Leads Me On' (Live Streamed from Cirque Royal, Brussels)",movie_body:"Suede debut their brand new single ‘She Still Leads Me On’, streaming live on stage at a headline performance in Belgium at Brussels’ Cirque Royal.",movie_image:"https://i.ytimg.com/vi/tfDgLym55Pg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKy3j6bVSAWAffzphdYR0V3MhkmA",movie_video:"https://www.youtube.com/embed/VvDxY0kInV0?autoplay=1&mute=1",movie_like_count:21e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2022,month:5,day:25},movie_comments:[{comment_id:317892,comment_body:"Great lyrics Brett has definitely wrote this song for his mother who past away when he was just a young man",comment_user_id:"sunstar9709",comment_user_name:"해달별"}]},{movie_id:738163,movie_title:"브렛 앤더슨 93년 스웨덴 인터뷰 (Brett Anderson Interview Sweden, 1993 Kor sub cc)",movie_body:"오랜만에 올리네요 펄프 커먼피플은 계속 번역중인데 제가 게을러서 시간이 꽤 걸릴듯",movie_image:"https://i.ytimg.com/vi/PX6L65xgOzY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5mtz-M8xCkrnltxlGQccViokC-g",movie_video:"https://www.youtube.com/embed/939_uYyZa1A?autoplay=1&mute=1",movie_like_count:1018,movie_category:"interview",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2016,month:12,day:21},movie_comments:[{comment_id:317893,comment_body:"He's so Handsome",comment_user_id:"yorkellic",comment_user_name:"톰요크"}]},{movie_id:738164,movie_title:"스웨이드, 사상 첫 단독 내한 공연 개최🇬🇧 [#위클리팝]",movie_body:"브릿팝의 주역, 스웨이드(Suede)가 8년 만에 한국을 찾습니다. '녹슬지 않는 록 스피릿' 관록이 느껴지는 베테랑 밴드 스웨이드의 내한 공연에 대한 자세한 내용은 영상을 통해 만나보세요🤟",movie_image:"https://i.ytimg.com/vi/Z4J2D9ZNpvI/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/Z4J2D9ZNpvI?autoplay=1&mute=1",movie_like_count:3e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2024,month:6,day:13},movie_comments:[{comment_id:317894,comment_body:"저에겐 최고의 공연 이었습니다. 한국에 또 온다는 약속 기다리고 있겠습니다.",comment_user_id:"fajinchan",comment_user_name:"김길환"}]},{movie_id:738165,movie_title:"스웨이드 - she 내한 공연",movie_body:"Suede 스웨이드 - She @ LIVE 라이브 @2013 INCHEON PENTAPORT ROCK FESTIVAl",movie_image:"https://i.ytimg.com/vi/twoO3xYRsz0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVNcO5wAtTuHBa3jadFUsnlzK57A",movie_video:"https://www.youtube.com/embed/V3T6NDalQeU?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"live",movie_channel:"suede",movie_channel_id:96745102,movie_date:{year:2010,month:6,day:16},movie_comments:[{comment_id:317895,comment_body:"우와",comment_user_id:"hippieswave",comment_user_name:"히피"}]}]},woowakgood:{channel_id:41846541,channel_name:"우왁굳",channel_nav:"woowakgood",channel_banner:"https://yt3.googleusercontent.com/eYI-CDr4AXjjnzZv8ERzW-P2u1AQPNNCNDRLxBw1mlIwEjA-BIKUHpdd6dFDD7pjGF7urPZTrA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/vhOEy7Ode6Y8ZN3noHKZua0LMt2n2Z7xfEyfWmzTXwQ6oq59BFyTXnN9AcnksHTYAM1YCzdY=s160-c-k-c0x00ffffff-no-rj",channel_introduction:`아프리카 TV에서 게임방송을 하고 있는 "우왁굳"의 유튜브 채널입니다.
                                   방송에서 재밌었던 장면들, 편집영상, 녹화영상등이 올라옵니다.
                                   영상 업로드 시간 : 매일 새벽중
                                   우왁굳 카카오톡 친구추가 하기 : @우왁굳`,channel_subscribers:172e4,Movies:[{movie_id:314511,movie_title:"편의점 알바하면 찾아오는 진상들이 한 번에 다 온다면? ㅋㅋㅋ",movie_body:"편의점 알바하면 찾아오는 진상들이 한 번에 다 온다면? ㅋㅋㅋ - VR챗 상황극",movie_image:"https://i1.ytimg.com/vi/BxzPDQzux40/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/BxzPDQzux40?autoplay=1&mute=1",movie_like_count:12e4,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2020,month:9,day:5},movie_comments:[{comment_id:635171,comment_body:"진짜 소름끼치는 것은 담배 사는 할아버지는 고시원과 관련이 없는 그냥 진상이라는 것이다.",comment_user_id:"rice_thief",comment_user_name:"밥도둑"}]},{movie_id:314512,movie_title:"폭력적인 중국인에게 대처하는 법 : 중국인에게 타이완 넘버원을 외쳐보았다",movie_body:"TAIWAN #1 (conan exiles)",movie_image:"https://i1.ytimg.com/vi/Hkg6Vu2Um5k/sddefault.jpg",movie_video:"https://www.youtube.com/embed/Hkg6Vu2Um5k?autoplay=1&mute=1",movie_like_count:4e4,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2017,month:2,day:2},movie_comments:[{comment_id:635172,comment_body:"이영상 해외에서도 유명함.. 특히 대만에서 엽기영상으로 인기많음",comment_user_id:"dongjoo87",comment_user_name:"윤동주"}]},{movie_id:314513,movie_title:"몸으로 말해요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",movie_body:"※ E-Mail : ecvhao@naver.com",movie_image:"https://i.ytimg.com/vi/wKyoYzpDEEM/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/wKyoYzpDEEM?autoplay=1&mute=1",movie_like_count:35e3,movie_category:"gaming",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2022,month:12,day:12},movie_comments:[{comment_id:635173,comment_body:"이장면들 왜케 웃기고 귀엽짘ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",comment_user_id:"koreatownrunner",comment_user_name:"하니"}]},{movie_id:314514,movie_title:"시청자가 사는 역대급 쓰레기 방",movie_body:"0:00 컨텐츠 설명 0:17 미션놀이 시작 5:56 썸네일 7:26 미션놀이",movie_image:"https://i.ytimg.com/vi/cKi4E_nXQNE/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/cKi4E_nXQNE?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"challenge",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2024,month:10,day:24},movie_comments:[{comment_id:635174,comment_body:"TMI) 방 주인분 결국 업체불러서 정상화 완료함",comment_user_id:"videotape",comment_user_name:"영상업로드용계정"}]},{movie_id:314515,movie_title:"아빠가 되었습니다",movie_body:"우왁굳 핫클립 광고 문의 : marketing@parable-asia.com",movie_image:"https://i.ytimg.com/vi/O7TeGzypNrg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIahTkMd7jwYIMT5Q8lXtVbJqIIA",movie_video:"https://www.youtube.com/embed/O7TeGzypNrg?autoplay=1&mute=1",movie_like_count:32e3,movie_category:"comedy",movie_channel:"woowakgood",movie_channel_id:41846541,movie_date:{year:2023,month:4,day:14},movie_comments:[{comment_id:635175,comment_body:'이 형 아직 애기 나오기 전에는 막 본인 애기한테 "초면","그 분", "외계인", 이랬었는데 막상 그 분 태어나시니깐 누구보다 딸 바보 된 거 개귀여움 ㅋㅋㅋㅋㅋ',comment_user_id:"wakmulwon",comment_user_name:"침팬치"}]}]},goodboykris:{channel_id:81372931,channel_name:"소련 여자",channel_nav:"goodboykris",channel_banner:"https://yt3.googleusercontent.com/FB29DrRZRBPzHTH5kb8yEanNdWrQaF76lnobBdlqUTNC-1mkg-btjUeJn6KNq6l0OIS0JB6fAw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ytc/AIdro_nUV1fdUmCnAo_V1c9CPjrJjGJOyy8e6ASnbhDOI9G-vsw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"개소리에도 철학이 있다, 대한민국 1타 개소리 예술가 국뽕이란 무엇인가? 대한민국 1타 국뽕 기술자 크리스 교수입니다.",channel_subscribers:105e4,Movies:[{movie_id:119751,movie_title:"던질까 말까 100시간 춤 추기 (세계 최초)",movie_body:"대한민국 유튜브 algorithm 매우 이해 힘든 것 이상한 유행의 Origin : 트니트니 '던질까 말까'",movie_image:"https://i1.ytimg.com/vi/JsISM29qgC0/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/JsISM29qgC0?autoplay=1&mute=1",movie_like_count:91e3,movie_category:"comedy",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2019,month:12,day:19},movie_comments:[{comment_id:319481,comment_body:"한 달에 만원씩 바쳐서 광고 지웠더니 그런 나를 위해 또 광고를 넣어줬구나",comment_user_id:"undertale",comment_user_name:"전래동화"}]},{movie_id:119752,movie_title:"한국인들은 백인이 길바닥에 똥을 싸도 칭찬해줄까?",movie_body:"#똥 #한국 #백인 🇰🇷🤔👩🏼💩👏🏻?",movie_image:"https://i1.ytimg.com/vi/WG5aX86i3rs/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/WG5aX86i3rs?autoplay=1&mute=1",movie_like_count:13e3,movie_category:"challenge",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2021,month:3,day:19},movie_comments:[{comment_id:319482,comment_body:"근데 진짜 소련여자 영상들 보다보면 현실들을 제대로 비판하는 풍자 영상들을 많이 올리는거 같다. 맨날 영상들 보면 웃긴 대사들이나 편집들이 많아서 남들이 보기엔 생각없이 찍은거 같아보여도 다 무언가 찝어서 비판하는게 있음.",comment_user_id:"namenickr9p",comment_user_name:"네임닉-r9p"}]},{movie_id:119753,movie_title:"러시아어 왕초보 강의(‘스파시바’ 절대 쓰지 마세요)",movie_body:"특별 출연하신 일리야 선생님 고맙습니다. 🎁 댓글에 메일 주소 적으면 ‘가벼운 러시아어 학습지 스타트팩'을 선물세트 자동 응모! 🎁",movie_image:"https://i.ytimg.com/vi_webp/UtljPnhHPJY/maxresdefault.webp",movie_video:"https://www.youtube.com/embed/UtljPnhHPJY?autoplay=1&mute=1",movie_like_count:14e3,movie_category:"challenge",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2021,month:6,day:11},movie_comments:[{comment_id:319483,comment_body:"설마했는데 진짜 한국인인 척 하는 스파이였을 줄이야... 가짜 소련여자인 스파이 크리스를 몰아내고 원조 소련여자인 샌즈님을 구해냅시다 여러분",comment_user_id:"tiramisu",comment_user_name:"티라미수"}]},{movie_id:119754,movie_title:"죄송해서 거짓말합니다.",movie_body:"#나는행복합니다 #죄송합니다 #해명합니다 ㅈㅅㅈㅅ~ ㅋ",movie_image:"https://i.ytimg.com/vi_webp/v7i62-5BHeQ/maxresdefault.webp",movie_video:"https://www.youtube.com/embed/v7i62-5BHeQ?autoplay=1&mute=1",movie_like_count:53e3,movie_category:"comedy",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2020,month:8,day:21},movie_comments:[{comment_id:319484,comment_body:"사과는 꼭 죄송한일이 있어야 해야하는걸까? 죄송해야 사과할 수 있다는 고정관념에 우리 스스로를 가둔건 아닐까",comment_user_id:"nohandle",comment_user_name:"핸들좀없애라"}]},{movie_id:119755,movie_title:"북한 러시아 동맹 해명합니다.",movie_body:"#지드래곤 #북한 #러시아 북한이랑 친해라는데 어쩌라고요~ #북한, #러시아, #지드래곤, #해명, #북한풍선, #스타게이저, #버튜버",movie_image:"https://i.ytimg.com/vi/SL_sPoo5OuU/maxresdefault.jpg",movie_video:"https://www.youtube.com/embed/SL_sPoo5OuU?autoplay=1&mute=1",movie_like_count:1e4,movie_category:"talk",movie_channel:"goodboykris",movie_channel_id:81372931,movie_date:{year:2024,month:7,day:12},movie_comments:[{comment_id:319484,comment_body:"와 북한에서 몰래보고있는 오물풍선 알바생인데;; ㅠㅠ 구독합니다 힘내세요!",comment_user_id:"protect1108",comment_user_name:"알바생"}]}]},workman:{channel_id:452454,channel_name:"워크맨-Workman",channel_nav:"workman",channel_banner:"https://yt3.googleusercontent.com/YSzNgAfL46tAd9qCJDyBKxIXVzfJUzq4ic8dY9LbGCsnGEuZ3S6QZkcY6zPZG_GIuuNaa9f1=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/ihi8LdmSNfcp96-gaHBE1Av3-PLotF9rOhUxTy_pY-CeHYCAkDzE1ktxfe4gbhtYR0CIYjUPba0=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"🐜🐜워크맨 인력소 강남점🐜🐜",channel_subscribers:415e4,Movies:[{movie_id:165984,movie_title:"카페 경력 짬바가 뭔지 보여주..“주문 안 받고요, 키오스크에서 알아서 해주세요!!”😵‍💫 | 팀홀튼 카페 알바 | 대니구 | 워크맨2",movie_body:"Job것들아~~~~~~,,, 인력소장이다,,, ",movie_image:"https://i.ytimg.com/vi/9jl-oxM0FxU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwsc8KHtBS9lVn_A-u-KtT-Gy3OQ",movie_video:"https://www.youtube.com/embed/7eJajoei--0?si=3bJI0gFwv_BWGsfg&autoplay=1&mute=1",movie_like_count:15e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:10,day:18},movie_comments:[{comment_id:88437539,comment_body:"진짜  5년 했으면 직업 찾기 힘들건디.. 정말 대단하네요..오늘도 재밌게 봅니다",comment_user_id:"test",comment_user_name:"욀량"}]},{movie_id:165977,movie_title:"[SUB] 뽀시래기들 놀아주다 멘탈 뿌시래기(?) 됨😇 | 키즈카페 | 월간워크맨 범규 | 투모로우바이투게더 | TXT | 워크맨2",movie_body:"오늘은,, 성규,, 아니고 범규가,,,키즈카페 알바를 하고 왔다,,,~ ",movie_image:"https://i.ytimg.com/vi/SOSJ-q-7CRA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyKHdIb-ChBXO1W-wEdDxipdeXmw",movie_video:"https://www.youtube.com/embed/SOSJ-q-7CRA?si=4rN5-WJcFSEz_bpX&autoplay=1&mute=1",movie_like_count:16e4,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2023,month:11,day:3},movie_comments:[{comment_id:451089,comment_body:"아니 애기들 가르치는 입장으로 범규 너무 적성에 맞는 듯 너무 잘 가르침",comment_user_id:"test",comment_user_name:"힛콩"}]},{movie_id:194984,movie_title:"반갑습니다! 올리브영입니다~☺️ 도움 필요하셔도 말씀하지마ㅅ... | 올리브영 알바 | 브링그린 | 지예은 | 워크맨2",movie_body:"오늘은,,,울 잡것덜이,,,많이 추천해준,,,올리브영 다녀왔다,,,~~",movie_image:"https://i.ytimg.com/vi/G_W9pXqnheY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBDxsU7nAsTGRYTlbF0KMQytaNUw",movie_video:"https://www.youtube.com/embed/G_W9pXqnheY?si=_oA8nuXGuR4qASvk&autoplay=1&mute=1",movie_like_count:18e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:9,day:13},movie_comments:[{comment_id:456879,comment_body:"예으니 넘 귀엽다ㅠ",comment_user_id:"test",comment_user_name:"happy123"}]},{movie_id:160084,movie_title:'"고객님 잠시 후에 뵙겠습니다,,,😄" 정신 차려보니 전국일주? 철도 승무원 알바 | 해랑열차 | 승무원 | 아일릿(ILLIT) | 워크맨2',movie_body:"오늘은 해랑열차 알바하고 왔다,,,정말 너무 좋더라고~,,나중에 꼭 가족들과 한번 가보는 거 추천혀~,,,~~!!",movie_image:"https://i.ytimg.com/vi/NCma_qnVu-4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-nlwkuC3KKAdWCGnd99CpNnJj9A",movie_video:"https://www.youtube.com/embed/NCma_qnVu-4?si=9d3llszhrs_lJVXJ&autoplay=1&mute=1",movie_like_count:16e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:10,day:11},movie_comments:[{comment_id:414519,comment_body:"아 보는 내내 너무 행복해서 입꼬리가 내려가질 않네…",comment_user_id:"test",comment_user_name:"xrospo"}]},{movie_id:160978,movie_title:"앞으로 안경 벗는 거 유죄! 살짝 얹기만 했을 뿐인데 갓경 등극😍 | 안경점 알바 | 브리즘 | 보이넥스트도어 이한X운학 | 워크맨2",movie_body:"오늘은,,, 안경점 알바하고 왔다,,,우리 보이넥스트도어,,, 친구들 안경을 얹기만 했는데도 참 멋지더라고,,,,",movie_image:"https://i.ytimg.com/vi/g64d5UPLjFo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDfkOXiFasHnykeFYkAc5ynRSPnGQ",movie_video:"https://www.youtube.com/embed/g64d5UPLjFo?si=QZL7J5gq56Hg-Z4-&autoplay=1&mute=1",movie_like_count:32e3,movie_category:"entertainment",movie_channel:"workman",movie_channel_id:452454,movie_date:{year:2024,month:8,day:30},movie_comments:[{comment_id:410309,comment_body:"아육대 안 나오고 워크맨 찍었다 들었는데 그게 드디어 나왔구만ㅋㅋ",comment_user_id:"test",comment_user_name:"riririr"}]}]},sbs_dali:{channel_id:775460,channel_name:"달리 [SBS DALI] - SBS 공식 교양 채널",channel_nav:"sbs_dali",channel_banner:"https://yt3.googleusercontent.com/sMSp7eIV0sktjQTpjflRyf3q4zDAC1A8UJhz_c9oSdWJGMdg88k6TlxOCS63GyK4WpToo7oX=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/M7XGfxQMxEFeZ5GnnlEEbeuEzeCLs-CGYAtFQQ_I-IsPLttj8P01QJMxXFGKwpuL4eNgiA9F0g=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"SBS 교양 공식채널 달리입니다.",channel_subscribers:108e4,Movies:[{movie_id:100846,movie_title:"[꼬꼬무 148회 요약] 강남역에서 사라지는 청년들, 그들이 빨려들어간 다단계라는 지옥 | 꼬리에 꼬리를 무는 그날 이야기 (SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #다단계 #SMK #이광남",movie_image:"https://i.ytimg.com/vi/PQ6eDFLyn4E/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD69dTl0SYq9Ls62Q2BZoUAuUKc2A",movie_video:"https://www.youtube.com/embed/PQ6eDFLyn4E?si=vKLy81wGZPPt6WSl&autoplay=1&mute=1",movie_like_count:4700,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:466679,comment_body:"사회초년생 친구들 이 영상 보시고 전형적인 다단계 구조 알아두시면 좋겠네요.",comment_user_id:"test",comment_user_name:"denden"}]},{movie_id:161117,movie_title:"[꼬꼬무 147회 요약] 131명의 사상자, 충분히 막을 수 있었다. 2003 태풍 매미 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송) ",movie_body:"#꼬꼬무 #꼬꼬무요약 #태풍매미",movie_image:"https://i.ytimg.com/vi/aPY7KS0K5NY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBWilX4clPSTGFQS9Ujzmqf5F2ipg",movie_video:"https://www.youtube.com/embed/aPY7KS0K5NY?si=WhJVFOK9_bMl5RK0&autoplay=1&mute=1",movie_like_count:8100,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:18},movie_comments:[{comment_id:93285329,comment_body:"지금까지 살면서 매미가 태풍 중에서 젤 기억에 남음",comment_user_id:"test",comment_user_name:"뎅뎅"}]},{movie_id:194747,movie_title:"[꼬꼬무 146회 요약] 100조 원과 함께 사라진 비트코인의 창시자 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #비트코인 #사토시나카모토",movie_image:"https://i.ytimg.com/vi/42VIq8EW0wU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDEWCHAwhORr80kArOeGZEOP3C6yQ",movie_video:"https://www.youtube.com/embed/42VIq8EW0wU?si=kRlQrubOZqxSEt5t&autoplay=1&mute=1",movie_like_count:6400,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:11},movie_comments:[{comment_id:452229,comment_body:"비트코인은 우리 생활에 자연스럽게 스며들 것입니다.",comment_user_id:"test",comment_user_name:"동동"}]},{movie_id:870084,movie_title:"[꼬꼬무 145회 요약] “형사님, 제가 계급장 한 번 달아 드릴까요?” 허세 속 숨겨진 연쇄살인의 단서 | 꼬리에 꼬리를 무는 그날 이야기(SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #의정부연쇄살인사건 #뻥식이사건",movie_image:"https://i.ytimg.com/vi/GAqV_mkqJhU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvDUfeX9mMWvQfdJk9XGe7r0m9SA",movie_video:"https://www.youtube.com/embed/GAqV_mkqJhU?si=Qt2iuH4iTnUd5m8r&autoplay=1&mute=1",movie_like_count:7200,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:10,day:4},movie_comments:[{comment_id:784235,comment_body:"꼬꼬무가 끝날 일은 없겟다 ... 하도 많은 사건이 나와서...",comment_user_id:"test",comment_user_name:"popo"}]},{movie_id:333578,movie_title:"[꼬꼬무 144회 요약] 조국의 운명을 짊어진 3인의 특사가 헤이그로 향한 그 날 | 꼬리에 꼬리를 무는 그날 이야기 (SBS방송)",movie_body:"#꼬꼬무 #꼬꼬무요약 #헤이그특사",movie_image:"https://i.ytimg.com/vi/cS4M7OBprBc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA97bKQ8M3gFRUSRmOXTKtt29xCZg",movie_video:"https://www.youtube.com/embed/cS4M7OBprBc?si=LRN60vPzFQhAIsnE&autoplay=1&mute=1",movie_like_count:2700,movie_category:"documentary",movie_channel:"sbs_dali",movie_channel_id:775460,movie_date:{year:2024,month:9,day:27},movie_comments:[{comment_id:958923,comment_body:"헤이그특사라는게 교과서 한줄정도로만기억에남아있는데 이야기로 들으니까 너무 좋네요",comment_user_id:"test",comment_user_name:"lucky12"}]}]},ootbstudio:{channel_id:125424,channel_name:"ootb STUDIO",channel_nav:"ootbstudio",channel_banner:"https://yt3.googleusercontent.com/7K01zQCZpweun9YtKU0wNM9rBotE8TSUE1r3WLMX98AhZ9YeCBApWyHvQbr75uytLWsCrY-uPQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/K74Og8dqtK72UXy-ySJsXMZuMV4M71dCNQmIIOcPkzYHfdHvsUndE31Lbm1znSNVWcffJ_RP=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"Out of the Box! ootb STUDIO (오오티비 스튜디오) 틀을 깨는 시각으로 누구도 경험해보지 못한 신선한 콘텐츠를 만듭니다",channel_subscribers:162e4,Movies:[{movie_id:104216,movie_title:"포항공대 vs 카이스트 맞짱 뜬 썰 푼다 [포항공대 컴퓨터공학과] | 전과자 ep.70 [EN]",movie_body:"코딩 알못 전과자의 코딩 도전🧑‍💻오늘은 포항공대 컴퓨터공학과 다녀옴!",movie_image:"https://i.ytimg.com/vi/-k_Q9Svr7j4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCJu_IUJQ6Y34U-K2FQ8mPHvjrnoA",movie_video:"https://www.youtube.com/embed/-k_Q9Svr7j4?si=BFFkS3KTBcvHcFAY&autoplay=1&mute=1",movie_like_count:19e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:24},movie_comments:[{comment_id:400059,comment_body:"볶음밥 먹는 걸로 코딩 비유한 거 완전 이해 잘 된당",comment_user_id:"test",comment_user_name:"may"}]},{movie_id:162399,movie_title:"동심파괴하는 역대급 동화 발표 [단국대 문예창작과] | 전과자 ep.69 [EN] ",movie_body:"동화 작가 데뷔한 전과자?!✏️ 오늘은 단국대학교 문예창작과 다녀옴!",movie_image:"https://i.ytimg.com/vi/D-xlw07rGEM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAzWam2-YPnpvnms1gKLAQsZCAGcw",movie_video:"https://www.youtube.com/embed/D-xlw07rGEM?si=BgTdxkt5gWSxRT3c&autoplay=1&mute=1",movie_like_count:23e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:17},movie_comments:[{comment_id:488829,comment_body:"동화 진심 천재아님...? 20분도 안되는 시간이 저렇게 구성했다고??????",comment_user_id:"test",comment_user_name:"hannna"}]},{movie_id:177207,movie_title:"식빵언니 김연경이 새내기인 학과 [한국방송통신대 생활체육지도과] | 전과자 ep.68 [EN/ID]",movie_body:"김연경 선수 실물 영접하고 왔습니다..🤭",movie_image:"https://i.ytimg.com/vi/X8COuUKz2K0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAHQ38xhEbHipBtK_zQafMJCXmj3w",movie_video:"https://www.youtube.com/embed/X8COuUKz2K0?si=6xtzyaJ1CfJw2szG&autoplay=1&mute=1",movie_like_count:26e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:10},movie_comments:[{comment_id:306429,comment_body:"배움엔 끝이 없다고, 정말 40대 50대. 90대가 되어서도 하려고 하는 거 보니 뭉클합니다",comment_user_id:"test",comment_user_name:"소소한소"}]},{movie_id:8974284,movie_title:"미안하면 씨X 하는 학과 [한국외대 아랍어과] | 전과자 ep.67 [EN]",movie_body:"아랍어 1도 모르는 전과자가 한국외대 아랍어과 다녀옴!",movie_image:"https://i.ytimg.com/vi/Gzs1qNmTcYY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCfIfUsPcPqH92WaJxO8pEXZwPjPQ",movie_video:"https://www.youtube.com/embed/Gzs1qNmTcYY?si=vx02u1zbiOhO0baG&autoplay=1&mute=1",movie_like_count:32e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:10,day:3},movie_comments:[{comment_id:781122,comment_body:"아랍어 학생 멘토한 림입니다~이런 멋진 기회를 주셔서 감사합니다! 정말 즐거운 시간이었어요~♡♡",comment_user_id:"test",comment_user_name:"reem"}]},{movie_id:333888,movie_title:"연기 괜찮아요? 많이 놀랐죠? [경희대 연극영화학과] | 전과자 ep.66 [EN]",movie_body:"드디어 전과자도 2학기 개강 완!🏫 오늘은 경희대학교 연극영화학과 다녀옴!",movie_image:"https://i.ytimg.com/vi/sQknHM8unPM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBP-qcUyVxiAqEg2GimMuzqnjDGUg",movie_video:"https://www.youtube.com/embed/sQknHM8unPM?si=Brwk4oDoDT4E0v_h&autoplay=1&mute=1",movie_like_count:33e3,movie_category:"entertainment",movie_channel:"ootbstudio",movie_channel_id:125424,movie_date:{year:2024,month:9,day:26},movie_comments:[{comment_id:121114,comment_body:"ㅋㅋㅋㅋㅋㅋㅋ겁나 웃기네 진짜",comment_user_id:"test",comment_user_name:"child22"}]}]},SBSKPOP:{channel_id:2250024,channel_name:"SBSKPOP X INKIGAYO",channel_nav:"SBSKPOP",channel_banner:"https://yt3.googleusercontent.com/oOQHsiZrRMv3jYKY4M7kJsqcBjlXfwf1Wq1X96qsUuYWxY5TdFiNHUewkl8XWmVDvL9uMucUoOc=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/Uxpz5J0EcsFJRbqh4Ip7i3TTNsxTh5jVUxfZmV1DTrCQM_ihfzBGMmkfSRGWoFK9M0anhIie=s160-c-k-c0x00ffffff-no-rj",channel_introduction:" 기존의  Inkigayo인기가요 채널의 확장 버전으로 새롭게 태어난 SBS 공식 디지털 KPOP채널입니다.",channel_subscribers:815e4,Movies:[{movie_id:541236,movie_title:"aespa (에스파) – Whiplash @인기가요 inkigayo 20241027",movie_body:"에스파 - Whiplash #aespa #Whiplash",movie_image:"https://i.ytimg.com/vi/p3kJOuNnkJg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw9oGNHqbtjkBlRI0hQU85fe9LCg",movie_video:"https://www.youtube.com/embed/p3kJOuNnkJg?si=fF2ky_2of1fliP6G&autoplay=1&mute=1",movie_like_count:55e3,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:415059,comment_body:"닝닝 너무 예쁘다",comment_user_id:"test",comment_user_name:"fnksif"}]},{movie_id:148399,movie_title:"ITZY (있지) – GOLD @인기가요 inkigayo 20241027",movie_body:"있지 - GOLD #ITZY #GOLD",movie_image:"https://i.ytimg.com/vi/2WNIGv1r5d4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDihD8KUyOdVjxXngpjYFB6KJ4Npg",movie_video:"https://www.youtube.com/embed/2WNIGv1r5d4?si=IU51kHkPu9mZle0s&autoplay=1&mute=1",movie_like_count:12e3,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:487829,comment_body:"So beautiul LIA",comment_user_id:"test",comment_user_name:"hpa012"}]},{movie_id:100680,movie_title:"Billlie (빌리) – Remembrance Candy (기억사탕) @인기가요 inkigayo 20241027",movie_body:"빌리 - 기억사탕 #Billlie #Remembrance_Candy",movie_image:"https://i.ytimg.com/vi/zyzRypp6dbQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9daqmRFj7s35yyO_4dbbctPcyGA",movie_video:"https://www.youtube.com/embed/zyzRypp6dbQ?si=zu-9x2jdhW_w3NDP&autoplay=1&mute=1",movie_like_count:1200,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2024,month:10,day:27},movie_comments:[{comment_id:302153,comment_body:"이번 컴백무대중에 가장 헤메코 좋다.",comment_user_id:"test",comment_user_name:"딴딴"}]},{movie_id:897124,movie_title:"[단독샷캠4K] 아이브 After LIKE 단독샷 별도녹화│IVE ONE TAKE STAGE @SBS Inkigayo 220828",movie_body:"[단독샷캠4K] 아이브 After LIKE 단독샷 별도녹화│IVE ONE TAKE STAGE @SBS Inkigayo 220828",movie_image:"https://i.ytimg.com/vi/fdzojloPlFA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArt4d22OllBmd1Gfxovdb_lcNuKg",movie_video:"https://www.youtube.com/embed/fdzojloPlFA?si=nQwDPXBvL1pmSExl&autoplay=1&mute=1",movie_like_count:21e4,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2022,month:9,day:1},movie_comments:[{comment_id:125452,comment_body:"I love her voice at 2:25",comment_user_id:"test",comment_user_name:"sias"}]},{movie_id:49386439,movie_title:"[단독샷캠4K] 뉴진스 Ditto 단독샷 별도녹화│NewJeans ONE TAKE STAGE @SBS Inkigayo 230115",movie_body:"[단독샷캠4K] 뉴진스 Ditto 단독샷 별도녹화│NewJeans ONE TAKE STAGE @SBS Inkigayo 230115",movie_image:"https://i.ytimg.com/vi/jUNz-uTF--E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAO7YFNY9buWMwRPfy6vHYJkTkWow",movie_video:"https://www.youtube.com/embed/jUNz-uTF--E?si=UDI5QuZOMAiPeC17&autoplay=1&mute=1",movie_like_count:21e4,movie_category:"music",movie_channel:"SBSKPOP",movie_channel_id:2250024,movie_date:{year:2023,month:1,day:19},movie_comments:[{comment_id:184314,comment_body:"뉴진스 곡중에 ditto 진짜 최고야...😢❤",comment_user_id:"test",comment_user_name:"celds22"}]}]},SBSANIMAL:{channel_id:2215544,channel_name:"SBS TV동물농장x애니멀봐 공식 유튜브 채널입니다!",channel_nav:"SBSANIMAL",channel_banner:"https://yt3.googleusercontent.com/jJb9nRaO1XSX7cCyUCWlddsO4VEMAfmKkpUfCKsWSco9VOi0QdUvFeTjUSpt669Xs85CIWp9lw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://github.com/React-Project-Team1/data-center/blob/main/images/Youtube/channels4_profile.jpg?raw=true",channel_introduction:"SBS 동물농장 x 애니멀봐 공식 유튜브 채널입니다! ",channel_subscribers:492e4,Movies:[{movie_id:512236,movie_title:"해외여행 후 빈대걱정 개코가 다 잡아드림 ㅣDo Not Worry About Bedbug After A Trip Anymore",movie_body:"개코개코했지만 빈대냄새까지 찾아내는 검역탐지견들....☆",movie_image:"https://i.ytimg.com/vi/HOGfNYten8c/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCtbjNXF9VEL1nMlZoqVwPY9QJQUA",movie_video:"https://www.youtube.com/embed/HOGfNYten8c?si=k6-fUSnQNNAnXJ4v&autoplay=1&mute=1",movie_like_count:1500,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:10,day:28},movie_comments:[{comment_id:9318122,comment_body:"너무너무 기엽고 눈빛이 영특해욥",comment_user_id:"test",comment_user_name:"bunnie"}]},{movie_id:990159,movie_title:"나는 태어난 지 30일 된 먼치킨 새끼다 [애니멀봐 나새끼 26호]",movie_body:"[나는 새끼다] 26호 새끼 - 먼치킨 - 우리는 태어난 지 30일 된 먼치킨 고양이를 밀착취재 해보았다.",movie_image:"https://i.ytimg.com/vi/E8V02ArInjY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2x9N9Np1o4crItzsX1yA2dek_HQ",movie_video:"https://www.youtube.com/embed/E8V02ArInjY?si=-gZ7rSEfkdHYv1lH&autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2023,month:5,day:16},movie_comments:[{comment_id:464659,comment_body:"심장뿌셔짐",comment_user_id:"test",comment_user_name:"stsgj"}]},{movie_id:100470,movie_title:"쪼꼬미 동물병원 시즌3 1화 (내원환자 : 드워프햄스터 콩콩님)ㅣAnimal Hospital for Tiny Animals 3 Ep 1 (Patient: Dwarf Hamster)",movie_body:"동물농장 전설의 수의사와 함께하는 –쪼꼬미 동물병원- 시즌3 첫번째 내원환자 드워프 햄스터 콩콩이님 들어오실게요",movie_image:"https://i.ytimg.com/vi/d-PV-ScWtB8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDCai2kKXqHqIpaCi-if-Il1SpFQg",movie_video:"https://www.youtube.com/embed/d-PV-ScWtB8?si=fXQ_wjNh_U0VDBRm&autoplay=1&mute=1",movie_like_count:6800,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2023,month:3,day:8},movie_comments:[{comment_id:32948239,comment_body:"햄찌 진짜 순하다 귀여워ㅋㅋㅋ",comment_user_id:"test",comment_user_name:"얌얌"}]},{movie_id:815444,movie_title:"서울 한복판에서 너굴맨 만난 썰 푼다;;ㅣHow I Met Raccoon Man In City Center",movie_body:"서울 한복판에서 산책하다 너굴맨을 만났다?",movie_image:"https://i.ytimg.com/vi/Tkw5NKyCpeU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaQmyb0JA9lGuJehEKCea8snH1Qg",movie_video:"https://www.youtube.com/embed/Tkw5NKyCpeU?si=uG5O3Z2WJPAqR9CJ&autoplay=1&mute=1",movie_like_count:500,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:10,day:7},movie_comments:[{comment_id:106652,comment_body:"썸넬이 너무 귀여워요 ㅠㅠ",comment_user_id:"test",comment_user_name:"bobo"}]},{movie_id:399998,movie_title:"푸바오의 조상님 그때 그 시절 판다들(장꾸력 만렙ㅋㅋ)ㅣFu Bao’s Ancestors. Pandas Back In The Day",movie_body:"판다 덕후 주목! 우유라떼 마시며 들려주는 그때 그 시절 핫한 판다들의 이야기..⭐️ ",movie_image:"https://i.ytimg.com/vi/MlKFeqBIZJs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArU-vHn5ofD3InGBgEJcZGvgZB4w",movie_video:"https://www.youtube.com/embed/MlKFeqBIZJs?si=2twwrn3h4FCtmZRB&autoplay=1&mute=1",movie_like_count:2100,movie_category:"animal",movie_channel:"SBSANIMAL",movie_channel_id:2215544,movie_date:{year:2024,month:9,day:14},movie_comments:[{comment_id:912932,comment_body:"인공수정 너무 잔인하고, 판다가 너무 불쌍하네요..",comment_user_id:"test",comment_user_name:"simsim"}]}]},jindoEre:{channel_id:798311,channel_name:"진돗개 이레",channel_nav:"jindoEre",channel_banner:"https://yt3.googleusercontent.com/byG9tgzrpnpoM2Zu20_WMqX4QjqYX-bxbhPCoJZhFYkPqOtqW1IJPD0FwtoAQMl3dVwlw7ULlg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/UFRAIo6roqbUtvBQuoZ-euDsf5xGnlrUIpKdkLgTk5wzEYPu4ekHgNMjlkC7sGdLp_th0ZB9KUw=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"바다건너 돌아와보니, 이레네🐾❤️",channel_subscribers:84700,Movies:[{movie_id:78494,movie_title:"임시보호하는 아기 고양이들, 집이 7번이나 바뀐 이유",movie_body:"#캣타워 #아기고양이 #고양이 #고양이 #아기고양이 #캣타워",movie_image:"https://i.ytimg.com/vi/1qrH9H8GN_s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRLzIkZj4Cw7c4wvmFDc_Z3wUKDg",movie_video:"https://www.youtube.com/embed/1qrH9H8GN_s?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:78619,comment_body:"이정도면 임시보호가 아니라 지극히 사심채우기 같은뎈ㅋㅋㄱㅋㄱㅋ",comment_user_id:"test",comment_user_name:"정성희"}]},{movie_id:15965,movie_title:"새끼 고양이와 병원 간 진돗개가 보인 반응",movie_body:" #진돗개 #동물병원 #새끼고양이 #진돗개 #새끼고양이 #동물병원",movie_image:"https://i.ytimg.com/vi/v-vg-2TqDf8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7es255msmnPG80ROxdJmbsCANww",movie_video:"https://www.youtube.com/embed/v-vg-2TqDf8?autoplay=1&mute=1",movie_like_count:2700,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:10,day:9},movie_comments:[{comment_id:11568,comment_body:"엄빠보다 더 초조한 이레보호자💕",comment_user_id:"test",comment_user_name:"god123"}]},{movie_id:156234,movie_title:"강아지 빗질을 못해주면 이렇게 됩니다..😶‍🌫️ #진돗개털갈이",movie_body:"산 운동장에 다녀왔다가 돌아온 날이에요-!⛰️ 아이들도 저희도 일정이 워낙 빠듯해서 일주일 정도 빗질을 못했던 상황인데다 여름에서 가을로 넘어가는 시기여서 털갈이 성수기였던 게 한몫한 영상인 점 꼭 기억해주세요!ㅎ",movie_image:"https://i.ytimg.com/vi/UxT7nY1p7V0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTLwAAkXE8jWXlTvQ-CsKmBJVHyg",movie_video:"https://www.youtube.com/embed/UxT7nY1p7V0?autoplay=1&mute=1",movie_like_count:2500,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2024,month:1,day:19},movie_comments:[{comment_id:654935,comment_body:"어쩜 아이들이 서로 싸우지도 않으면서 각자 편안한 자세로 꿈나라로 고고~~",comment_user_id:"test",comment_user_name:"반야심"}]},{movie_id:357416,movie_title:"유기견이 스스로 우리집에 들어왔다.🐕‍🦺 구조자를 직접 고른 버려진 개의 이야기",movie_body:"곱슬이는 빠삐용의 ’삐용‘이란 이름을 갖게 되었어요. 그리곤 심장사상충 치료를 시작했었답니다.",movie_image:"https://i.ytimg.com/vi/hbxzkJ62zVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAwiqLlDqC2LaXQMB35ZKzVdj4aQ",movie_video:"https://www.youtube.com/embed/hbxzkJ62zVI?autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2023,month:12,day:26},movie_comments:[{comment_id:152722,comment_body:"삐용이 입양하신 이웃분도 너무 멋지셔요. ",comment_user_id:"test",comment_user_name:"애옹이사랑"}]},{movie_id:220045,movie_title:"얘들아.. 아빠 생일이라구ㅠㅋㅋㅋ (진돗개)",movie_body:"이레아빠의 생일파티는 어때보이나요?ㅠㅎ '다견가정'스럽게(?) 보낸 개아빠의 생일파티(?)...😂",movie_image:"https://i.ytimg.com/vi/nRV6SKGq3lQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD855jOPKms3gDj2S5aQdFaAejN0Q",movie_video:"https://www.youtube.com/embed/nRV6SKGq3lQ?autoplay=1&mute=1",movie_like_count:12e3,movie_category:"animal",movie_channel:"jindoEre",movie_channel_id:798311,movie_date:{year:2023,month:10,day:18},movie_comments:[{comment_id:448861,comment_body:"아가들 완전 귀요미들~~~ 대환장파티~~ 아빠 생일인데 아가들이 더 신났네요~ 개귀엽당",comment_user_id:"test",comment_user_name:"김지혜"}]}]},shoppingMom:{channel_id:660495,channel_name:"쇼핑맘",channel_nav:"shoppingMom",channel_banner:"https://yt3.googleusercontent.com/DTgCPAH4K8MxbMYGrLtQVum6D_1Ys3iU868mDeH_CalsqdGKL9Ou99teL7z7V8g1Y8p3-mAfZL8=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/xGX7RIjkTR3P1BMX24icwwHiJJ6WYK-BJpb5tTHMecKalm2fsGjAc2xTQA3davbeUVIFW6wR=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"⬇️⬇️⬇️영상 속 제품 링크🩷⬇️⬇️⬇️ 진지하게 살림을 합니다. 리뷰 영상에 진심을 담습니다 :)",channel_subscribers:10600,Movies:[{movie_id:6738049,movie_title:"쿠팡에서 내가 꿈꾸던 실용적인 팬트리 셋업 17가지ㅣ쿠팡에서 살 수 있는 가성비 최고의 정리 제품ㅣ주방투어ㅣ주방 꾸미기ㅣ최저가ㅣ가성비다모았다ㅣ좁은주방ㅣ앵글활용100%ㅣ설치방법",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/clvV6sG6i1Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD83S70mJQ-shHwJlR3ef4BJ3VT2w",movie_video:"https://www.youtube.com/embed/clvV6sG6i1Y?autoplay=1&mute=1",movie_like_count:544,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2023,month:9,day:21},movie_comments:[{comment_id:116101,comment_body:"좋았어! 이제 집만 넓어지면 되겠어요!!😂ㅋㅋㅋㅋㅋㅋㅋ",comment_user_id:"test",comment_user_name:"golldd_d"}]},{movie_id:167205,movie_title:"쿠팡 정리 추천템 | 살림이 행복해지는 수납 정리 아이템 | 주방정리 꿀템 | 잡동사니 정리 꿀팁 | 분리수거 방법 꿀팁",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/VD33utJraE0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE97KxtNBTDfX8fqCp1XYRAGf5Hw",movie_video:"https://www.youtube.com/embed/VD33utJraE0?autoplay=1&mute=1",movie_like_count:2500,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:3,day:9},movie_comments:[{comment_id:7046458,comment_body:"저 오늘 이사가기전에 집 정리한다고 절반 정도 집 엎었는데 너무 제 모습을 보는 것 같아요😂😂😂",comment_user_id:"test",comment_user_name:"yshans"}]},{movie_id:106478,movie_title:"리뷰 수천개씩 보는 주부가 직접 검증한 쿠팡 추천템 | 내 손으로 검증한 찐 추천템 | 품절되기전 사야템 | 삶의질 수직상승 | 재재구매 꿀템 | 청소 정리 꿀템 | 알리공구예고",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/SObd7CMcp3c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2VdiYZb211K5gz3R6nBkVEzj1sg",movie_video:"https://www.youtube.com/embed/SObd7CMcp3c?autoplay=1&mute=1",movie_like_count:376,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:5,day:25},movie_comments:[{comment_id:7945154,comment_body:"이염방지시트는 세탁시에만 넣나요? 세탁과 건조기에도 넣어도 되나요?",comment_user_id:"test",comment_user_name:"장뽕뽕"}]},{movie_id:478513,movie_title:"리뷰 몇천개씩 보는 주부가 고른 쿠팡 살림 추천템 13가지 | 요즘 SNS 난리난 바로 그 제품! | 입고후 즉시품절 | 품절대란 생활 꿀템 | 삶의질 수직상승 | 내돈내산",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/A7NzGlfUtYc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcn9tdUw1T0ZstSZCjjrxnYK9yWQ",movie_video:"https://www.youtube.com/embed/A7NzGlfUtYc?autoplay=1&mute=1",movie_like_count:2100,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:2,day:9},movie_comments:[{comment_id:516151,comment_body:"설명 꼼꼼하게, 듣기 편하게 잘하시네요~ 개인적으로 꿀템 소개영상 중 제일 보기 좋은 영상이었음",comment_user_id:"test",comment_user_name:"flying_witch6527"}]},{movie_id:1583085,movie_title:"쿠팡 품절되기 전에 구매하세요!! | 완벽한 삶의 질 상승템 | 디자인부터 기능까지 다 갖췄다 | 예쁘고 실속있는 쿠팡 살림템  | 내돈내산템",movie_body:"하단에 쿠팡 링크로 구매하면 쿠팡으로부터 일정액의 수수료를 쇼핑맘 채널이 제공 받아 내돈내산 리뷰 운영에 도움이 됩니다 :)",movie_image:"https://i.ytimg.com/vi/iaOjF9aCcK0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsemOpqXLzAgFhU4E_fEAJiQ7Rsw",movie_video:"https://www.youtube.com/embed/iaOjF9aCcK0?autoplay=1&mute=1",movie_like_count:757,movie_category:"shopping",movie_channel:"shoppingMom",movie_channel_id:660495,movie_date:{year:2024,month:3,day:16},movie_comments:[{comment_id:111504,comment_body:"유익한정보감사해요 거실카펫.건식욕조러그두추천해주셈",comment_user_id:"test",comment_user_name:"신나라신나라"}]}]},mamu_vlog:{channel_id:201864,channel_name:"mamu마므",channel_nav:"mamu_vlog",channel_banner:"https://yt3.googleusercontent.com/lArY9lbEFU12URnCHfvsQ8d1KaktdkJ5AbCSL0FnyRWws8GMkTBIFlWRzzQAGpyZxXFDpV9Iew=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/B9AkXHC7chFdQHNhcOhBCXObehilWrpfB_ysDi1cyvj7C9GLkkJcuBlwSMol6KpPu7Jw0LsEjoc=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"instagram | @mma_muu email | morningood9922@gmail.com",channel_subscribers:35900,Movies:[{movie_id:4506901,movie_title:"5평 방을 호텔처럼 꾸미기‧₊˚☁️ 셀프인테리어 | 타일카페트 시공✂️ | 모듈 가구 | 6단 북선반 | 책꽂이 | 미니 다육이",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/HxCRe7uDyAM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXHa2B_7ErgdIARsosiKMleOWuvw",movie_video:"https://www.youtube.com/embed/HxCRe7uDyAM?autoplay=1&mute=1",movie_like_count:21e3,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2023,month:12,day:31},movie_comments:[{comment_id:101054,comment_body:"저도 이사할때  회색 타일 카페트를 깔았는데요 퇴근하고 청소기 + 돌돌이해도 먼지가 날리고 비염이 생겼어여. 비염이 있으시면 좋았을텐데 봐도바도이뿌녀요 ㅠㅡㅠ",comment_user_id:"test",comment_user_name:"왕왕우왕"}]},{movie_id:412321,movie_title:"vlog. 일만 하는 브이로그🔥, 쇼핑몰 사장의 일상 | 피곤하지만 재밌어 | 매일 시장가다가 삼촌 써봄 | 필인더블랭크 가방 | 달라진 사무실 | 바디스크럽 추천",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/1_35QO9UVYk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWCnBcp3_BQyr5qfYReTl24QLGcg",movie_video:"https://www.youtube.com/embed/1_35QO9UVYk?autoplay=1&mute=1",movie_like_count:1600,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:8,day:19},movie_comments:[{comment_id:794861,comment_body:"하 마므님 기다리다가 기린 목 됐어요.. 목 빠지는 줄 알았어요 ♥",comment_user_id:"test",comment_user_name:"콩시크릿쥬쥬"}]},{movie_id:575156,movie_title:"vlog. 일상 브이로그, 포장지옥📦 | 용산 데이트 (브런치, 키보드 구경, 닭한마리 맛집) | 롯데백화점 라운지 5초 체험기",movie_body:"✧outer 누이어 - 리프 스웨이드 하프 자켓",movie_image:"https://i.ytimg.com/vi/cYhMT9pX4xU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhPCxa09mVABS-h_j1igycOjKY8A",movie_video:"https://www.youtube.com/embed/cYhMT9pX4xU?autoplay=1&mute=1",movie_like_count:6200,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:10,day:25},movie_comments:[{comment_id:8940984,comment_body:"요거트에 토마토 맛나 보여요 🤍",comment_user_id:"test",comment_user_name:"나는야 분노핑"}]},{movie_id:360324,movie_title:"vlog. 일상 브이로그, 쇼핑몰 열심히 해나가기🔥 | 썸웨어버터 선물&아디다스 스페지알 언박싱 | 네일하고 혼밥과 카공 | 메디힐 당근패드로 피부 정리하기",movie_body:"메디힐 당근 수분 진정 패드",movie_image:"https://i.ytimg.com/vi/HE89T9XNew0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACaE1cGETg6z4yENTleWBsaq1opg",movie_video:"https://www.youtube.com/embed/HE89T9XNew0?autoplay=1&mute=1",movie_like_count:1600,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:8,day:19},movie_comments:[{comment_id:491304,comment_body:"실버 가방 취저에요! 아디다스 스페지알 탐나요 🤍",comment_user_id:"test",comment_user_name:"vlog8852"}]},{movie_id:242685,movie_title:"vlog. 오픈 2주차 일상 브이로그, 초보사장 냄새난다 | 구독자분께서 주신 선물 | 아디다스 신발 언박싱 | 매일 가는 동대문 시장 | 포장검수하고 촬영하기",movie_body:"오늘 영상에서 보여드린 마켓비 타일카페트, 모듈 협탁 이외에 고오오급진 모듈 수납장까지 공구 진행하니까 혹시 필요하셨던 분들은 쟁여가세요! ",movie_image:"https://i.ytimg.com/vi/WNBeisZs5xk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfkivid92jAq4QOyFIkfYDXKnY3w",movie_video:"https://www.youtube.com/embed/WNBeisZs5xk?autoplay=1&mute=1",movie_like_count:1800,movie_category:"vlog",movie_channel:"mamu_vlog",movie_channel_id:201864,movie_date:{year:2024,month:3,day:22},movie_comments:[{comment_id:404658,comment_body:"마므님이라면 조립하는거 올릴거 같아서기다리고 있었어요 ! 영상 꾸준히 올려주셔서 감사합니당 트롤리 보면서 제 생각도 1년에 한번씩 해주세여",comment_user_id:"test",comment_user_name:"김민정하튜"}]}]},moozzi:{channel_id:904206,channel_name:"무찌",channel_nav:"moozzi",channel_banner:"https://yt3.googleusercontent.com/_c2vXh4oFCHaqxOTehNhs-WLCTuzATSHTJ5fiQDz4E4tbBFsXwliKoXo00K_Xmyt_YmpZZCPYQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/lK7Y9eC82RAXumtR3OPo2HKuHKbJ3obt-WPpAh9sxfo2oPfu55qveLKBSwHva4wRSOEOWwJcK9A=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"무쌍 뷰티의 모든 것💜 🔗@mo.ojji_",channel_subscribers:164e3,Movies:[{movie_id:760806,movie_title:"메이크업 아티스트 쌤들이 만든 제품으로 샵 퀄리티 메이크업 따라해보면?!🤔 과연 좋을까..? / 애교살 꿀템",movie_body:"오늘은 최근에 업로드 했던 릴스&쇼츠에서 가장 예쁘다고 해줬던 쿨톤메이크업 버전 들고왔지롱 ,, ✩",movie_image:"https://i.ytimg.com/vi/wwX_ObHl3pc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBqgUdn0sDe0Vr2p_nFYBEJ6Kv3g",movie_video:"https://www.youtube.com/embed/wwX_ObHl3pc?autoplay=1&mute=1",movie_like_count:711,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:9,day:22},movie_comments:[{comment_id:354605,comment_body:"얼굴이 이뻐서 다 커버되는 언니…😍",comment_user_id:"test",comment_user_name:"Woosigke"}]},{movie_id:1026381,movie_title:"추천템에 진심인;; 사람이 추천하는 쿠팡&올영 올타임 레전드 템 모음집💰(다이어트템, 여름 겨드랑이 관리템)",movie_body:"무찌픽 향수인 슈가 플로럴이 지금 #올리브영에서 할인 중이니 얼른 달려가봐 🍑",movie_image:"https://i.ytimg.com/vi/h0PMQw54tWA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvfvIMDZazcOFUyWSEaKWuOZwbKA",movie_video:"https://www.youtube.com/embed/h0PMQw54tWA?autoplay=1&mute=1",movie_like_count:1800,movie_category:"shopping",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:6,day:10},movie_comments:[{comment_id:451054,comment_body:"!!헉 카메라 두개쓰셔서 실제색상 보여주셔서 감사해욤❤무찌 정성 무쳣다!!",comment_user_id:"test",comment_user_name:"__daebbanggg"}]},{movie_id:659056,movie_title:"No 마스카라‼️ 요청 폭발한 내추럴 아이 메이크업 (진짜 10분컷)",movie_body:"영상에 나온 네이밍 레이어드 핏 쿠션 리필 기획과 색감 뽀용한 플러피 파우더 블러쉬가 할인하니 궁금하신 분들은 아래 링크에서 확인 해주세요(✿◡‿◡)",movie_image:"https://i.ytimg.com/vi/jUZlsfv6XwI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArcAArMUXvWKVjTV_xxvqdDKIAsA",movie_video:"https://www.youtube.com/embed/jUZlsfv6XwI?autoplay=1&mute=1",movie_like_count:1100,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2024,month:1,day:28},movie_comments:[{comment_id:113155,comment_body:"근데 에스쁘아 오트라떼 단종소식...ㅜㅜㅜ😢😢",comment_user_id:"test",comment_user_name:"@jyeon."}]},{movie_id:1054604,movie_title:"서핑 이렇게 재밌다고? 🌊양양으로 떠난 데이뉴 소속사 네트워킹 | 여름 휴가☀️",movie_body:"무찌에용💖 오늘은 제 소속사 데이뉴에서 1박 2일 네트워킹을 양양으로 다녀왔어요!!",movie_image:"https://i.ytimg.com/vi/rBEzFMUk1G4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1WHvPnLlJur92nREN1ZQ-KCRN1Q",movie_video:"https://www.youtube.com/embed/rBEzFMUk1G4?autoplay=1&mute=1",movie_like_count:243,movie_category:"vlog",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2023,month:7,day:22},movie_comments:[{comment_id:546515,comment_body:"헐 웅니 찐으로 웃는 거 처음 보는 것 같은데 넘짱짱 귀여운 거 아닌가여 😭😍",comment_user_id:"test",comment_user_name:"usekadns"}]},{movie_id:305135,movie_title:"무쌍이 따라해보는 카즈하,아린님 st 토끼상🐰 메이크업 (신상템 가득🔥)",movie_body:"원래 제목은 '얼굴에 토끼 1도 없는데 저도 토끼가 될 수 있나요..? ' 이였던 메이크업 영상...",movie_image:"https://i.ytimg.com/vi/hKtoxxWf5cE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9iAguipmx4W7NvR4ZXdrLkyLQjg",movie_video:"https://www.youtube.com/embed/hKtoxxWf5cE?autoplay=1&mute=1",movie_like_count:498,movie_category:"makeup",movie_channel:"moozzi",movie_channel_id:904206,movie_date:{year:2023,month:2,day:23},movie_comments:[{comment_id:4604648,comment_body:"무찌님 덕에 누드밀크티 사고 인생 메이크업 완성했습니다..❤️‍🔥 ",comment_user_id:"test",comment_user_name:"minio_oi"}]}]},Or7r2l:{channel_id:806540,channel_name:"아가리어터",channel_nav:"Or7r2l",channel_banner:"https://yt3.googleusercontent.com/LlkjnLTQEfDyOSWelXnV_4XJb-EethG3Dfc92JvZJnLlnaHufmM6QVx_y9GLyf9Qc3As9QlpngA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",channel_image:"https://yt3.googleusercontent.com/pjlMeWVK6071iovFtndMKIZk3mSZ5fV8YYZJcNx0_3YmXPmr0a2oPYjv3Z8EIFbfkHc2fFRxog=s160-c-k-c0x00ffffff-no-rj",channel_introduction:"[노말] 말이 안 되다",channel_subscribers:38e4,Movies:[{movie_id:446545,movie_title:"인팁걸 공주걸과 세부에서 살아남기",movie_body:"안녕 얘들아 나는 아가리어터야 ",movie_image:"https://i.ytimg.com/vi/JMcR6_-O92M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD41hQEZ2q94T492JrTGiBIbd3ISg",movie_video:"https://www.youtube.com/embed/JMcR6_-O92M?autoplay=1&mute=1",movie_like_count:3400,movie_category:"travel",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:10,day:21},movie_comments:[{comment_id:848484,comment_body:"가리걸 무서워도 도전 해보는 용기 너무 멋잇잔아~~ 가리업 가리업~",comment_user_id:"test",comment_user_name:"ttoiiiiii"}]},{movie_id:651654,movie_title:"인생썰 풀면서 겟레디윗미",movie_body:"(최대 혜택가) 25,000원에 5G 무제한 놓치지 마세요😘 ",movie_image:"https://i.ytimg.com/vi/ohi235S5-yU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAySptXPFI04GhWZ9tqsJHsIdneXw",movie_video:"https://www.youtube.com/embed/ohi235S5-yU?autoplay=1&mute=1",movie_like_count:3900,movie_category:"makeup",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:10,day:16},movie_comments:[{comment_id:198315,comment_body:"아니 썸넬 미쳤냐고요 깜이가 놀이;;; 미모베리 미가 쳤어요;;;",comment_user_id:"test",comment_user_name:"내인생이거든"}]},{movie_id:440845,movie_title:"혼자 급발진으로 떠난 대만여행",movie_body:"🌎호텔스컴바인 대만 타이베이 최.저.가. 기획전🌎 ",movie_image:"https://i.ytimg.com/vi/qf42eT5OIPs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLA5mZrnz7iaaJi7nNK3DOz7z2Bw",movie_video:"https://www.youtube.com/embed/qf42eT5OIPs?autoplay=1&mute=1",movie_like_count:4e3,movie_category:"travel",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:6,day:6},movie_comments:[{comment_id:8751516,comment_body:"언니 피부관리 루틴 당장 공개해조요 제발",comment_user_id:"test",comment_user_name:"rlarladd"}]},{movie_id:684156,movie_title:"먹고 마시고 깔깔대다가 아침이야..",movie_body:"💚시카지우개패드 단품 9,900원💚 가성비가 걍 미치셨어요",movie_image:"https://i.ytimg.com/vi/5BKkxdp8NqU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbJJdL1emlgUB3HjvFzdV2zpCWcg",movie_video:"https://www.youtube.com/embed/5BKkxdp8NqU?autoplay=1&mute=1",movie_like_count:2500,movie_category:"vlog",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2024,month:2,day:16},movie_comments:[{comment_id:110002,comment_body:"빨리 보고 싶어서 사회적 체면 포기하고 버스에서 웃참쇼 미쳐버려~~",comment_user_id:"test",comment_user_name:"Moall_al"}]},{movie_id:200235,movie_title:"퇴사하고 에버랜드 가기",movie_body:"👄인스타 놀러오세요👄",movie_image:"https://i.ytimg.com/vi/OTNFiUeq7u0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-k1Px3ZJYHZmrs3Ss2XXsAhkWMA",movie_video:"https://www.youtube.com/embed/OTNFiUeq7u0?autoplay=1&mute=1",movie_like_count:3e3,movie_category:"vlog",movie_channel:"Or7r2l",movie_channel_id:806540,movie_date:{year:2023,month:3,day:22},movie_comments:[{comment_id:3304558,comment_body:"환장의 나라 에버랜드에 오신걸 환영합니다. 팬입니다.",comment_user_id:"test",comment_user_name:"모르는지idontknowji"}]}]}},$w={Channel:JSON.parse(localStorage.getItem("YoutubeChannel"))||qw,allMovies:JSON.parse(localStorage.getItem("YoutubeAllMovies"))||[]},Jp=Ti({name:"channelSlice",initialState:$w,reducers:{ChangeChannelInfo(e,t){const{channel_nav:n,channel:r}=t.payload,i=e.Channel[n];i&&Object.assign(i,r),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewChannel(e,t){const{user_id:n,user_name:r,user_email:i}=t.payload,o=i.split("@")[0],s={channel_id:n,channel_name:r,channel_banner:"https://via.placeholder.com/1280x200",channel_image:"https://via.placeholder.com/160x160",channel_introduction:`안녕하세요 ${r} 채널 입니다.`,channel_subscribers:0,channel_nav:o,Movies:[]};e.Channel[o]=s,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewMovies(e,t){const n={movie_id:Math.floor(Math.random()*999999),...t.payload};e.Channel[t.payload.movie_channel].Movies.push(n),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},DelMovies(e,t){const{channel_name:n,movie_id:r}=t.payload,i=e.Channel[n];i.Movies=i.Movies.filter(o=>!r.includes(o.movie_id)),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},AddNewMoviesComment(e,t){const{movie_id:n,movie_channel:r,comment_body:i,comment_user_id:o,comment_user_name:s}=t.payload,l={comment_id:Math.floor(Math.random()*99999),comment_body:i,comment_user_id:o,comment_user_name:s};e.Channel[r].Movies.find(u=>u.movie_id===n).movie_comments.push(l),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},DelMoviesComment(e,t){const{movie_id:n,movie_channel:r,comment_id:i}=t.payload,s=e.Channel[r].Movies.find(l=>l.movie_id===n);s&&(s.movie_comments=s.movie_comments.filter(l=>l.comment_id!==i)),localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},IsMovieChangeLike(e,t){const{channel_name:n,type:r,movie_id:i}=t.payload,s=e.Channel[n].Movies.find(l=>l.movie_id===i);r==="plus"?s.movie_like_count+=1:s.movie_like_count-=1,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},IsMovieChangeSubscriber(e,t){const{channel_name:n,type:r}=t.payload,i=e.Channel[n];r==="plus"?i.channel_subscribers+=1:i.channel_subscribers-=1,localStorage.setItem("YoutubeChannel",JSON.stringify(e.Channel))},getAllMovies(e){e.allMovies=[],Object.keys(e.Channel).forEach(t=>{e.allMovies.push(...e.Channel[t].Movies)}),localStorage.setItem("YoutubeAllMovies",JSON.stringify(e.allMovies))}}}),{ChangeChannelInfo:Ww,AddNewChannel:Vw,AddNewMovies:Hw,DelMovies:Kw,AddNewMoviesComment:Gw,DelMoviesComment:Yw,IsMovieChangeLike:Xw,getAllMovies:Et,IsMovieChangeSubscriber:Zp}=Jp.actions,Qw=Jp.reducer,Jw={isSubscribers:!1,thisChannel:null},eg=Ti({name:"subscribersSlice",initialState:Jw,reducers:{isSubscribersTrue(e,t){e.isSubscribers=!0,e.thisChannel=t.payload},isSubscribersFalse(e){e.isSubscribers=!1,e.thisChannel=null}}}),{isSubscribersTrue:Zw,isSubscribersFalse:Na}=eg.actions,eb=eg.reducer,tb=()=>{const e=te(),{isLoginUser:t}=P(i=>i.auth),{thisChannel:n}=P(i=>i.subscribers),r=yn(()=>e(Na()));if(n)return a.jsxs(Uw,{id:"subscript-popup",className:"popup-box",children:[a.jsxs("p",{className:"popup-title",children:[n==null?void 0:n.channel_name," 구독을 취소하시겠습니까?"]}),a.jsxs("div",{className:"popup-btns",ref:r,children:[a.jsx("button",{className:"popup-close",onClick:()=>e(Na()),children:"취소"}),a.jsx("button",{className:"popup-subscript-end",onClick:i=>{i.stopPropagation(),e(Na()),e(at(`${n.channel_name} 채널 구독 취소`)),e(xw({user_id:t.user_id,channel_id:n==null?void 0:n.channel_id})),e(Zp({channel_name:n==null?void 0:n.channel_nav,type:"minus"}))},children:"구독 취소"})]})]})},tg=()=>{const{isSideMenu:e}=P(i=>i.header),{isSubscribers:t}=P(i=>i.subscribers),{isSavePop:n}=P(i=>i.savepop),r=te();return S.useEffect(()=>{t&&document.querySelector("#subscript-popup").showModal()},[t]),S.useEffect(()=>{const i=setTimeout(()=>{r(Ew())},1e3);return()=>clearTimeout(i)},[n]),a.jsxs(a.Fragment,{children:[a.jsx(tb,{}),n&&a.jsx(Dw,{left:e?"28rem":"4rem"})]})},nb=()=>{const e=q();return a.jsxs("ul",{className:"menu-list",children:[a.jsxs("li",{className:"btn-item",onClick:()=>e("/"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Home_menu.svg",alt:"Home"}),a.jsx("p",{className:"btn-name",children:"홈"})]}),a.jsxs("li",{className:"btn-item",onClick:()=>e("/feed/Playlist"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Play_list.svg",alt:"Playlist"}),a.jsx("p",{className:"btn-name",children:"재생목록"})]}),a.jsxs("li",{className:"btn-item",onClick:()=>e("/subscription"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Subscription_menu.svg",alt:"Subscription"}),a.jsx("p",{className:"btn-name",children:"구독"})]}),a.jsxs("li",{className:"btn-item",onClick:()=>e("/mypage"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/Account.svg",alt:"myPage"}),a.jsx("p",{className:"btn-name",children:"내페이지"})]})]})},rb=()=>a.jsx(o1,{className:"mobile",children:a.jsx(nb,{})}),ib=()=>{const e=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};return a.jsx("div",{className:"scroll_up",onClick:e,children:a.jsx("button",{className:"scroll_up_btn",children:a.jsx("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUZJREFUaEPtllEOwjAMQ7ObwcmAk8HNgEibNI2usZdkaBB+JtE29bNDxiAH/wwH1y8F8O0EK4FKwOnAX7bQ02madZwyldo83lwARgSUqdTmX0nA6uFd17cksKtA67ICMBy6juvT0zKUXs9MQEVfRkW39zMFIgtgLn5yNQUiA6AlPg0iGqAnPgUiEgARHw4RBcCID4WIANgiPgzCC7AmXifONELnYpff6ZprOnkAeuJ1bfm3W++yzuz2IkOEtABUIHIWBtmSACpgDSAUggVAxavIHkAYBANwEpF7I9u1H6EF0IM4i8gD6SMGoHVhb4IgAGzNDyYWYH6hNf5QAKZmCIAW0XayImYA0JphAEh7sgBIzQJgXKoEELe2TCGkLvIiQ+t09xVAx576DSA9ltlCyP3uPQXgttBZoBJwGug+Xgm4LXQWOHwCL424RTGF/pxQAAAAAElFTkSuQmCC",alt:""})})})},ob=()=>{const{isSideMenu:e}=P(n=>n.header),{pathname:t}=Ri();return S.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),a.jsxs(t1,{children:[a.jsx(Qp,{}),a.jsxs("div",{className:"content-wrap",children:[e&&a.jsx(Mw,{}),a.jsx(ep,{}),a.jsx(ib,{})]}),a.jsx(tg,{}),a.jsx(rb,{})]})},sb=[{id:350982352,name:"대시보드",type:"Dashboard",nav:"/dashboard",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAPpJREFUaEPtWEEOwjAM834GL0O8DH4GFAkJlWpRwDHr5F56WOfFTpy2WzD5WCaPHybw7ww6A1vOwAHACUCbM+MK4Px4r83vg433xF4rocsXwb8CbsEfOwJsvJDALSP7YG0vDhvPBKIEOQOdQkO/rpmYXbNsPHvAHogUsAeSCvXLd9dGpz9KyA9zJX37x7L8eF25kbFjl29kJjBSQHmhkZuY/UF5G2XXbElXU/5WMYGsiacvIbaJ5SXE7hpyAuwPsvHkRwkTyHYhtmJsPJdQtE/s7k7sEsqamL2RsfFCE7OPEmy8kEBk0k08V94HSgibQImsCVBnICFWydI7IJtYMWeTFLgAAAAASUVORK5CYII="},{id:51294102,name:"동영상 업로드",type:"VideoUpload",nav:"/videoupload",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAU1JREFUaEPtWNsNwjAMdDeDyYDJYDPoSbXUVnm5jpsaOV9I1I7vzo8kEzlfk/P4KQCMVjAUCAWUDEQKKQlUm/+tAjcieiz04Lf1es0bPI9sklPge8RZB5s7EX0kflIAwASzL/HV41sEDxDNKwVgFPsI2gSAdaHvCSvth+zY1EqLAlcB8J4VQkPZxNMTgITJdY7X7Lgjcjd0BQBBg/n1cgMg1w1dACi18ssDQCstTf/LA6gNMTUA7aDbdz6pvwAgZWyfEqFAdigsf9QmY67IetmZF7E1AFxuSsd5dRFbA0CArgcZM+z6KMEqp0C4SKF1mp52nK51D23tsBpmClgDgP+mKyVf3Y4GpLUTXWFTH48EIH7gSgFIXeO0rLbai9iH09oTxhkPXPwSB/ZFr3I1AK2sDf1OLNnQaBObB4DRioQCoYCSgUghJYFqc/cK/ABFEVUxJ47WSgAAAABJRU5ErkJggg=="},{id:2092345023,name:"콘텐츠",type:"Content",nav:"/content",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAATlJREFUaEPtmGEOwjAIhdnN9GTqyfRmWpJtce0qhQm0Sn+ZtA6+91rWMcHgYxo8fwgAbwelDpwA4DInj7+1xy0FuO4FkQI8tTOuPP8MAI/3OQkAKrGob82BySPEOiQAXupj0ioAEhE4zuWCbeJJgn98ICezxrUBkAv1tw5IwbvZQgEw72W3KmTmABWImq9VR5X/7b0HqEDU/PAAR68auajsKkQpzJ1vfOFW72cBwLI0XbWH30LDH+IAyBQwP8ThQDiQKcAto9wXF7W+mzNAJSo6O5aXuQBo/aChLmv31GCy6IfWHCO/yHoGKJq8kjOA6qMLHqPIVwKwJG7V5F260aj+pjONiRwB8HCgiBkA3jb8pAPWdV7S4q92AHBieADrOv91B6zrvBqAd4Fpin+IvimC8qIAUBaYfPwLQhdrMcO6YW4AAAAASUVORK5CYII="},{id:2305932021,name:"댓글",type:"Comment",nav:"/comment",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAS5JREFUaEPtWdEOgjAMLH+mX6b+GX+mNnEGRkfadaRdcnsykY273u0GZaHJxzI5fgKBaAVbCtyI6PEDx7+jx+sL4CmBaBF4RyNu3P9OROv2P4kAMy3Vz8aDwTOJ/5AIZK0+g+4iEJ1UdUF3eDQKgIBzI0EBWCirhUbHrfZQHZZCIFBZCwqUgpzmrnND9kzHOYBzoMc3mzmXWag3Rq2KgoA2n7VOgQLWV0prxbRKaK+7bA9oAXivAwFYyOkhWKi2UHTnzvVGFg3+0OTVNrZKtzq6U33AqyHArCObvaUbzTh2nWkOBw0BKUR4IXFBZ+KYp/cQaH5sMN99wAQrgVTgLRZKY5laNI0C6apueZxODf7MQmkto7EQn7biJ80BoTF8iehHZTchEHCX0LnA9Ap8AFRvXTEkWgnRAAAAAElFTkSuQmCC"}],ab=()=>a.jsx("ul",{className:"studiomenu-list",children:sb.map(e=>a.jsx(ki,{...e},e.id))}),lb=({setEdit:e})=>{const{Channel:t}=P(i=>i.channel),{isLoginUser:n}=P(i=>i.auth),r=Object.values(t).find(i=>i.channel_id===Number(n.user_id));return a.jsxs(jp,{children:[r&&a.jsxs("div",{className:"channel",children:[a.jsxs("div",{className:"channel-img-wrap",onClick:()=>e(!0),children:[a.jsx("img",{src:r.channel_image,alt:r.channel_name}),a.jsx("div",{className:"edit-img",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/12f918aeb4b87634ed4832e8b8f7679b31e3e53a/Icon/edit.svg",alt:"edit"})})]}),a.jsxs("div",{className:"channel-name",children:[a.jsx("p",{className:"my-channel",children:"내 채널"}),a.jsx("p",{className:"my-channel-name",children:r.channel_name})]})]}),a.jsx(ab,{})]})},cb=T.ul`
    max-height: 24rem;
    .subscribers {
        font-size: 1.4rem;
        color: #666;
    }
    .subscribers-count {
        font-size: 4rem;
    }
`,ub=T.ul`
    max-height: 46rem;
`,db=T.li`
    display: flex;
    max-width: 40rem;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 2%;
    .comment-text-wrap {
        width: 75%;
        margin-right: 5%;
    }
    .comment-img-wrap {
        width: 20%;
        img {
            width: 100%;
        }
    }
    .user-profile {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 2%;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        font-size: 1.2rem;
        background-color: ${({userColor:e})=>e||"var(--youtube-red)"};
        color: #fff;
    }
    .comment_body {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 1.4rem;
        max-width: 80rem;
    }
    .user {
        display: flex;
        align-items: center;
        margin-bottom: 1%;
        color: #666;
        font-size: 1.2rem;
    }
    .comment_title-wrap {
        display: none;
        font-size: 1.2rem;
        width: 20rem;
        margin-left: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.6rem; /* 한 줄의 높이 설정 */
        max-height: 3.2rem; /* 두 줄의 높이에 맞추어 설정 */
    }
`,mb=T.ul`
    .movie-list {
        width: 100%;
        min-width: 46rem;
        .video-loder {
            width: 100%;
            display: flex;
            .video-wrap {
                width: 100%;
                max-width: 20rem;
                padding-bottom: 24%;
                margin-right: 5%;
            }
            .channel-logo {
                display: none;
            }
            .plus-menu {
                display: none;
            }
            .movie_title {
                padding-right: 0;
                max-width: 30rem;
            }
            .text-wrap {
                max-width: 22rem;
            }
        }
    }
`,fb=T.div`
    width: 100%;
    .comment-nav-bar {
        width: 100%;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        padding: 0 4rem;
        .comment-tab {
            padding: 1.4rem;
            display: inline-block;
            cursor: pointer;
            position: relative;
            &::after {
                content: '';
                width: 100%;
                height: 0.2rem;
                background-color: #000;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
    }
    .comment-list {
        width: 100%;
        .comment-item {
            max-width: 100%;
            border-bottom: 1px solid #ddd;
            margin-bottom: 0;
            box-sizing: border-box;
            padding: 1%;
            .user-profile {
                margin-right: 1rem;
            }
            .comment-img-wrap {
                max-width: 16rem;
                img {
                    height: 100%;
                }
            }
            .comment_title-wrap {
                display: -webkit-box;
            }
        }
    }
`,hb=T.div`
    width: 100%;
    .del-menu {
        background-color: #212121;
        width: 100%;
        height: 0;
        display: flex;
        align-items: center;
        color: #fafafa;
        box-sizing: border-box;
        padding: 0 4rem;
        p {
            font-weight: 400;
            font-size: 1.4rem;
        }
        .selectedMovies-length {
            margin-right: 4rem;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                width: 0.1rem;
                height: 100%;
                right: -2rem;
                top: 0;
                background-color: #fafafa;
                opacity: 0.2;
            }
        }
        .del-btn {
            cursor: pointer;
            padding: 0 1rem;
            text-align: center;
            transition: all 0.2s;
            &:hover {
                background-color: #424242;
            }
        }
        overflow: hidden;
        transition: all 0.2s;
        &.active {
            height: 6rem;
        }
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 1.2rem;
    }
    thead th {
        color: #666;
        font-weight: bold;
        padding: 1.2rem;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        text-align: left;
    }
    tbody td {
        padding: 1rem;
        border-bottom: 1px solid #ddd;
        color: #555;
        vertical-align: top;
        &:first-child {
            width: 3rem;
        }
        &.movie_video {
            min-width: 8rem;
        }
        &.movie_info {
            max-width: 24rem;
        }
        .movie_body {
            max-width: 40rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #999;
        }
    }
    .video-loder {
        .video-wrap {
            margin: 0;
        }
        .text-wrap {
            display: none;
        }
    }
`,pb=T.div`
    width: 100%;
    min-height: 100vh;
    .upload-form {
        max-width: 140rem;
        box-sizing: border-box;
        padding: 0 2%;
        > p {
            margin-bottom: 2%;
        }
        label {
            display: block;
            font-size: 1.4rem;
            color: #999;
        }
        .movie_title,
        .movie_body,
        .movie_category {
            width: 100%;
            padding: 1rem;
            box-sizing: border-box;
            border-radius: 1rem;
            border: 1px solid #333;
            font-size: 1.6rem;
            color: #666;
        }
        .movie_category {
            max-width: 40rem;
        }
        .video-wrap,
        .img-wrap {
            margin: 1% 0;
            img {
                max-height: 40rem;
            }
            video {
                max-height: 40rem;
            }
        }
        button {
            background-color: #000;
            color: #fafafa;
            &:hover {
                background-color: #212121;
            }
        }
    }
`,gb=T.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
        border-radius: 2rem;
        width: 70%;
        min-height: 50rem;
        background-color: #fff;
        input {
            display: block;
            margin-bottom: 1rem;
            width: 100%;
            box-sizing: border-box;
        }
        input[type='text'] {
            height: 4rem;
            padding: 1rem;
        }
        .btn-wrap {
            display: flex;
            button {
                &:nth-child(1) {
                    margin-right: 1rem;
                }
            }
        }
        .banner-img {
            width: 100%;
            max-height: 15rem;
        }
        .channel_img {
            width: 16rem;
            height: 16rem;
        }
    }
`,Z=T.button`
    background-color: #eeeeee;
    border-radius: 2rem;
    border: none;
    padding: 1.2rem 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #e0e0e0;
    }
    @media ${D.mobile} {
        /* width: 100%; */
        padding: 1.5rem 2rem;
        font-size: 100%;
    }
`,vb=({setEdit:e})=>{const{User_ID:t}=_t(),{Channel:n}=P(d=>d.channel),r=te(),i=Object.values(n).find(d=>d.channel_id===Number(t)),[o,s]=S.useState({channel_name:i.channel_name,channel_banner:i.channel_banner,channel_image:i.channel_image,channel_introduction:i.channel_introduction}),l=d=>{const{name:m,value:g}=d.target;s({...o,[m]:g})},c=d=>{const m=d.target.files[0];m&&s(g=>({...g,[d.target.name]:URL.createObjectURL(m)}))},u=d=>{d.preventDefault(),r(Ww({channel_nav:i.channel_nav,channel:o})),e(!1),r(at("채널정보가 변경"))};if(i)return a.jsx(gb,{children:a.jsxs("form",{className:"inner",onSubmit:u,children:[a.jsxs("p",{children:[a.jsx("label",{htmlFor:"channel_name",children:"채널명"}),a.jsx("input",{type:"text",name:"channel_name",id:"channel_name",value:o.channel_name,onChange:l})]}),a.jsxs("p",{children:[a.jsx("label",{htmlFor:"channel_introduction",children:"채널 설명"}),a.jsx("input",{type:"text",name:"channel_introduction",id:"channel_introduction",value:o.channel_introduction,onChange:l})]}),a.jsxs("p",{children:[a.jsx("input",{type:"file",name:"channel_banner",id:"channel_banner",onChange:c}),a.jsx("img",{className:"banner-img",src:o.channel_banner,alt:"channel_banner"})]}),a.jsxs("p",{children:[a.jsx("input",{type:"file",name:"channel_image",id:"channel_image",onChange:c}),a.jsx("img",{className:"channel_img",src:o.channel_image,alt:"channel_image"})]}),a.jsxs("p",{className:"btn-wrap",children:[a.jsx(Z,{type:"submit",children:"업로드"}),a.jsx(Z,{onClick:()=>e(!1),children:"취소"})]})]})})},_b=()=>{const{isSideMenu:e}=P(o=>o.header),{isAuth:t}=P(o=>o.auth),[n,r]=S.useState(!1),i=q();if(S.useEffect(()=>{t||i("/login")},[]),t)return a.jsxs(n1,{children:[a.jsx(Qp,{}),a.jsxs("div",{className:"content-wrap",children:[e&&a.jsx(lb,{setEdit:r}),a.jsx(ep,{})]}),a.jsx(tg,{}),n&&a.jsx(vb,{setEdit:r})]})},as=()=>a.jsx(r1,{children:a.jsx("div",{className:"spinner","aria-label":"spinner-icon",children:a.jsx("div",{className:"spinner-circle"})})}),yb=()=>{const e=q();return S.useEffect(()=>{setTimeout(()=>{e("/")},3e3)},[]),a.jsxs(i1,{children:[a.jsx("p",{className:"not",children:"잘못된 접근 입니다."}),a.jsx(as,{})]})},ng=({comment:e,thisChannel:t})=>{const n=t.Movies.find(s=>s.movie_comments.find(l=>l.comment_id===e.comment_id)),r=q(),i=["var(--youtube-red)","skyblue","green","orange","pink"],o=i[Math.floor(Math.random()*i.length)];return a.jsxs(db,{className:"comment-item",onClick:()=>r(`/watch/${n.movie_id}`),userColor:o,children:[a.jsxs("div",{className:"comment-text-wrap",children:[a.jsxs("div",{className:"user",children:[a.jsx("span",{className:"user-profile",children:e.comment_user_name.charAt(0)}),a.jsxs("span",{className:"comment_user_name",children:["@",e.comment_user_name]})]}),a.jsx("p",{className:"comment_body",children:e.comment_body})]}),a.jsx("div",{className:"comment-img-wrap",children:a.jsx("img",{src:n.movie_image,alt:"Movie-image"})}),a.jsx("div",{className:"comment_title-wrap",children:n.movie_title})]})},wb=()=>{const{User_ID:e}=_t(),{Channel:t}=P(s=>s.channel),{isAuth:n}=P(s=>s.auth),r=Object.values(t).find(s=>s.channel_id===Number(e)),i=r.Movies.flatMap(s=>s.movie_comments),o=q();return S.useEffect(()=>{n||o("/")},[n]),a.jsx(fb,{children:a.jsxs("div",{className:"inner",children:[a.jsx("h2",{className:"studio-title",children:"채널 댓글"}),a.jsx("div",{className:"comment-nav-bar",children:a.jsx("p",{className:"comment-tab",children:"댓글"})}),a.jsx("ul",{className:"comment-list",children:i.map(s=>a.jsx(ng,{comment:s,thisChannel:r},s.comment_id))})]})})},bb=T.li`
    cursor: pointer;
    width: 100%;
    .video-wrap {
        width: 100%;
        padding-bottom: 56%;
        position: relative;
        margin-bottom: 1rem;
        border-radius: 1rem;
        overflow: hidden;
        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        iframe,
        video {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }
    .text-wrap {
        position: relative;
        display: flex;
    }
    .channel-logo {
        min-width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        margin-right: 1rem;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .movie_title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: keep-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        box-sizing: border-box;
        padding-right: 2.5rem;
    }
    .movie_body {
        display: none;
        font-size: 1.2rem;
        color: #999;
    }
    .movie_like_count,
    .channel_name {
        font-size: 1.4rem;
        color: #666;
    }
    .channel_name {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 70%;
    }
    .movie_date {
        margin-left: 1rem;
    }
    .movie_info {
        width: 100%;
        margin-bottom: 1%;
    }
    .close-menu {
        display: none;
        cursor: pointer;
    }
    .plus-menu {
        position: absolute;
        top: 0;
        right: 0;

        img {
            position: relative;
        }
    }
    .mobile_movie_like_count,
    .mobile_movie_date,
    .mobile_channel_name {
        display: none;
    }
    @media ${D.mobile} {
        .video-wrap {
            border-radius: 0;
        }
        .text-wrap {
            padding: 0 1.6rem;
            .channel-logo {
                margin-top: 0.6rem;
                width: 4rem;
                height: 4rem;
                margin-right: 2rem;
            }
            .movie_info {
                .movie_title {
                    display: inline-block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-bottom: -1rem;
                    font-size: 2.6rem;
                }
                .mobile {
                    width: 100%;
                    display: flex;
                    color: #666;
                    font-size: 2rem;
                    .mobile_movie_like_count {
                        display: block;
                        margin-right: 1rem;
                        position: relative;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        .mobile_movie_date {
                            display: inline-block;
                            margin-left: 1rem;
                            position: relative;

                            &::after {
                                content: '';
                                display: block;
                                position: absolute;
                                left: -0.6rem;
                                top: 50%;
                                transform: translateY(-50%);
                                width: 0.2rem;
                                height: 0.2rem;
                                border-radius: 50%;
                                background: #666;
                            }
                        }
                    }
                    .mobile_channel_name {
                        /* 11/15 김혜림 부분 수정 */
                        max-width: 25rem;

                        text-overflow: ellipsis;
                        word-break: keep-all;
                        display: inline-block;
                        white-space: nowrap;
                        margin-right: 1rem;
                        position: relative;
                        overflow: hidden;
                        padding-right: 1rem;
                        &::after {
                            content: '';
                            display: block;
                            position: absolute;
                            right: 0rem;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 0.2rem;
                            height: 0.2rem;
                            border-radius: 50%;
                            background: #666;
                        }
                    }
                }
                .channel_name,
                .movie_like_count {
                    display: none;
                }
            }
            .plus-menu {
                right: 1rem;
            }
        }
    }
`,xb=[{id:76165159843,falseName:"나중에 볼 동영상 저장",trueName:"나중에 볼 동영상 삭제",type:"Later_Watch",img:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/later_on.svg"},{id:23165165165,falseName:"재생목록 저장",trueName:"재생목록 삭제",type:"Playlist",img:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/save.svg.svg"},{id:86651890151,falseName:"오프라인 저장",trueName:"오프라인 동영상 삭제",type:"Download_List",SaveType:!1,falseImg:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Download.svg",trueImg:"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg"}],Ab=({save:e,movie:t})=>{const{type:n,img:r,falseName:i,trueName:o,falseImg:s,trueImg:l}=e,{isLoginUser:c,isAuth:u}=P(y=>y.auth),{isSavePop:d}=P(y=>y.savepop),m=te(),g=q(),[_,v]=S.useState(!1),w=y=>{y.preventDefault(),u||g("/login"),_?(m(au({user_id:c.user_id,type:n,movie:t})),m(at(o))):(m(su({user_id:c.user_id,type:n,movie:t})),m(at(i)))};return S.useEffect(()=>{var y;(y=c[n])!=null&&y.find(p=>p.movie_id===t.movie_id)?v(!0):v(!1)},[n,m,w]),n!=="Download_List"?a.jsxs("li",{className:"save-item",onClick:w,style:{pointerEvents:d&&"none"},children:[a.jsx("img",{src:r,alt:_?o:i}),_?o:i]}):a.jsxs("li",{className:"save-item",onClick:w,style:{pointerEvents:d&&"none"},children:[a.jsx("img",{src:_?l:s,alt:_?o:i}),_?o:i]})},Sb=({movie:e})=>a.jsx(Fw,{className:"save-list",onClick:t=>t.stopPropagation(),children:xb.map(t=>a.jsx(Ab,{save:t,movie:e},t.id))}),Te=({movie:e,type:t})=>{const{movie_id:n,movie_title:r,movie_image:i,movie_video:o,movie_like_count:s,movie_date:l,movie_channel:c,movie_video_type:u,movie_body:d}=e,{Channel:m}=P(k=>k.channel),{isSideMenu:g}=P(k=>k.header),{isLoginUser:_}=P(k=>k.auth),[v,w]=S.useState(!1),y=te(),p=k=>{if(k>=1e4)return Math.floor(k/1e4)+"만회";if(k>=1e3)return Math.floor(k/1e3)+"천회";if(k<=1e3)return k+"회"},f=k=>{k.stopPropagation(),y(au({user_id:_.user_id,type:t,movie:e}))},h=q(),[b,C]=S.useState(!1),j=k=>{k.stopPropagation(),C(!b)},x=yn(()=>C(!1));return a.jsxs(bb,{onClick:()=>{h(`/watch/${n}`),g&&y(ou())},className:"video-loder",children:[a.jsx("div",{className:"video-wrap",onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:v?u!=="video"?a.jsx("iframe",{src:o+"&controls=0",title:r,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",autoPlay:"1"}):a.jsx("video",{autoPlay:!0,muted:!0,src:o}):a.jsx("img",{src:i,alt:r})}),a.jsxs("div",{className:"text-wrap",children:[a.jsx("div",{className:"channel-logo",children:a.jsx("img",{src:m[c].channel_image,alt:""})}),a.jsxs("div",{className:"movie_info",children:[a.jsx("p",{className:"movie_title",children:r}),a.jsx("p",{className:"channel_name",children:m[c].channel_name}),a.jsxs("div",{className:"mobile",children:[a.jsx("p",{className:"mobile_channel_name",children:m[c].channel_name}),a.jsxs("p",{className:"mobile_movie_like_count",children:["조회수 ",p(s),a.jsxs("span",{className:"mobile_movie_date",children:[l.year,".",l.month,".",l.day]})]})]}),a.jsxs("p",{className:"movie_like_count",children:["조회수 ",p(s),a.jsxs("span",{className:"movie_date",children:[l.year,".",l.month,".",l.day]})]}),a.jsx("p",{className:"movie_body",children:d})]}),a.jsx("div",{className:"close-menu",onClick:f,children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Close_Btn.svg",alt:"close-menu"})}),a.jsxs("div",{className:"plus-menu",ref:x,children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/8771a05a9203fec750cd13cc666d881eddd08ad9/Icon/See_more.svg",alt:"pluse-menu",onClick:j}),b&&a.jsx(Sb,{movie:e})]})]})]})},Cb=()=>{const{Channel:e}=P(m=>m.channel),{isLoginUser:t,isAuth:n}=P(m=>m.auth),r=te(),i=q(),o=Object.values(e).find(m=>m.channel_id===Number(t.user_id)),[s,l]=S.useState([]),c=m=>{if(m.target.checked){const g=o.Movies.map(_=>_.movie_id);l(g)}else l([])},u=m=>{l(g=>g.includes(m)?g.filter(_=>_!==m):[...g,m])},d=()=>{r(Kw({channel_name:o.Movies[0].movie_channel,movie_id:s})),l([]),r(Et()),r(at(`${s.length}개의 영상 삭제`))};return S.useEffect(()=>{n||i("/")},[n]),a.jsx(hb,{children:a.jsxs("div",{className:"inner",children:[a.jsx("h2",{className:"studio-title",children:"채널 콘텐츠"}),a.jsxs("div",{className:s.length>0?"del-menu active":"del-menu",children:[a.jsxs("p",{className:"selectedMovies-length",children:[s.length,"개 선택됨"]}),a.jsx("p",{className:"del-btn",onClick:d,children:"삭제"})]}),a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:a.jsx("input",{type:"checkbox",onChange:c,checked:s.length===o.Movies.length})}),a.jsx("th",{children:"동영상"}),a.jsx("th",{children:"제목"}),a.jsx("th",{children:"공개 상태"}),a.jsx("th",{children:"제한사항"}),a.jsx("th",{children:"날짜"}),a.jsx("th",{children:"조회수"}),a.jsx("th",{children:"댓글"}),a.jsx("th",{children:"좋아요"})]})}),a.jsx("tbody",{children:o.Movies.map(m=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("input",{type:"checkbox",checked:s.includes(m.movie_id),onChange:()=>u(m.movie_id)})}),a.jsx("td",{className:"movie_video",children:a.jsx(Te,{movie:m})}),a.jsxs("td",{className:"movie_info",children:[a.jsx("p",{className:"movie_title",children:m.movie_title}),a.jsx("p",{className:"movie_body",children:m.movie_body})]}),a.jsx("td",{children:"공개"}),a.jsx("td",{className:"limited-text",children:"저작권"}),a.jsxs("td",{className:"movie_date",children:[m.movie_date.year,".",m.movie_date.month,".",m.movie_date.day]}),a.jsx("td",{children:m.movie_like_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),a.jsx("td",{children:m.movie_comments.length}),a.jsx("td",{children:m.movie_like_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]},m.movie_id))})]})]})})},kb=()=>{const{isLoginUser:e}=P(y=>y.auth),[t,n]=S.useState(null),[r,i]=S.useState(null),o=new Date,[s,l]=S.useState({movie_title:"",movie_body:"",movie_category:"",movie_image:null,movie_video:null}),c=te(),u=q(),d=y=>{const{name:p,value:f}=y.target;l(h=>({...h,[p]:f}))},m=y=>{const p=y.target.files[0];p&&(l(f=>({...f,movie_image:p})),i(URL.createObjectURL(p)),v(p))},g=y=>{const p=y.target.files[0];p&&(l(f=>({...f,movie_video:p})),n(URL.createObjectURL(p)),_(p))},_=y=>{const p=indexedDB.open("videoDB",1);p.onupgradeneeded=f=>{const h=f.target.result;h.objectStoreNames.contains("videos")||h.createObjectStore("videos",{keyPath:"id",autoIncrement:!0})},p.onsuccess=f=>{f.target.result.transaction("videos","readwrite").objectStore("videos").add({video:y})},p.onerror=f=>{console.error("IndexedDB 에러:",f)}},v=y=>{const p=indexedDB.open("imageDB",1);p.onupgradeneeded=f=>{const h=f.target.result;h.objectStoreNames.contains("images")||h.createObjectStore("images",{keyPath:"id",autoIncrement:!0})},p.onsuccess=f=>{f.target.result.transaction("images","readwrite").objectStore("images").add({image:y})},p.onerror=f=>{console.error("IndexedDB 에러:",f)}},w=y=>{y.preventDefault(),!s.movie_title||!s.movie_body||!s.movie_image||!s.movie_video?alert("누락된 정보가 있습니다."):(c(at(`${s.movie_title} 추가`)),c(Hw({movie_title:s.movie_title,movie_body:s.movie_body,movie_category:s.movie_category,movie_image:r,movie_video:t,movie_like_count:0,movie_channel:e.user_email.split("@")[0],movie_channel_id:e.user_id,movie_date:{year:o.getFullYear(),month:o.getMonth()+1,day:o.getDate()},movie_comments:[],movie_video_type:"video"})),u(`/studio/${e.user_id}/content`),c(Et()))};return a.jsx(pb,{children:a.jsxs("div",{className:"inner",children:[a.jsx("h2",{className:"studio-title",children:"동영상 업로드"}),a.jsxs("form",{className:"upload-form",onSubmit:w,children:[a.jsxs("p",{children:[a.jsx("label",{htmlFor:"movie_title",children:"제목"}),a.jsx("input",{type:"text",name:"movie_title",id:"movie_title",className:"movie_title",value:s.movie_title,onChange:d,placeholder:"영상 제목을 작성해 주세요"})]}),a.jsxs("p",{children:[a.jsx("label",{htmlFor:"movie_body",children:"설명"}),a.jsx("textarea",{name:"movie_body",id:"movie_body",className:"movie_body",value:s.movie_body,onChange:d,placeholder:"영상 소개글을 작성해 주세요"})]}),a.jsxs("p",{children:[a.jsx("label",{htmlFor:"movie_category",children:"카테고리"}),a.jsx("input",{type:"text",name:"movie_category",id:"movie_category",className:"movie_category",value:s.movie_category,onChange:d,placeholder:"카테고리는 영문으로 작성해 주세요 ex) vloog"})]}),a.jsxs("p",{children:[a.jsx("label",{htmlFor:"movie_image",children:"썸네일"}),a.jsx("input",{type:"file",name:"movie_image",id:"movie_image",className:"movie_image",onChange:m}),a.jsxs("div",{className:"img-wrap",children:[a.jsx("p",{children:"미리보기"}),r&&a.jsx("img",{src:r,alt:"썸네일 미리보기"})]})]}),a.jsxs("p",{children:[a.jsx("label",{htmlFor:"movie_video",children:"동영상"}),a.jsx("input",{type:"file",name:"movie_video",id:"movie_video",className:"movie_video",onChange:g}),a.jsxs("div",{className:"video-wrap",children:[a.jsx("p",{children:"미리보기"}),t&&a.jsx("video",{controls:!0,width:"500",src:t})]})]}),a.jsx("p",{children:a.jsx(Z,{type:"submit",children:"업로드"})})]})]})})},jb=T.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2%;
    .top-category {
        display: flex;
        flex-direction: row; /* 가로 정렬 */
        flex-wrap: nowrap; /* 줄 바꿈 방지 */
        overflow-x: auto; /* 가로 스크롤 활성화 */
        white-space: nowrap; /* 항목들이 한 줄로 나오게 설정 */
        margin-bottom: 2.6rem;
        .top-menu-li {
            margin-right: 1rem;
            &.active {
                .top-menu-button {
                    background-color: #000;
                    color: #fff;
                }
            }
            .top-menu-button {
                padding: 0.8rem 1.6rem;
                border-radius: 1rem;
                overflow: hidden;
                white-space: nowrap; /* 버튼 텍스트가 줄 바꿈 되지 않도록 설정 */
            }
        }
    }
    .main-video-wrap {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .video-loder {
            width: ${e=>e.width};
            &:not(:nth-child(${e=>e.$not}n)) {
                margin-right: 1%;
            }
            &:nth-child(${e=>e.$not}n) {
                .plus-menu {
                    .save-list {
                        position: absolute;
                        top: 100%;
                        right: 0;
                        left: -20rem;
                    }
                }
            }
            margin-bottom: 2.2%;
            .text-wrap {
                .movie_info {
                    max-width: 28rem;
                }
            }
            .plus-menu {
                .save-list {
                    right: -750%;
                }
            }
        }
    }
    .main-banner {
        width: 100%;
        margin-bottom: 5rem;
        .main-banner-img {
            width: 100%;
        }
    }
    #scroll-anchor {
        min-height: 1rem;
        position: relative;
        width: 100%;
    }
    @media ${D.mobile} {
        width: 100%;
        box-sizing: border-box;
        padding: 0;
        width: 100%;
        .top-category {
            overflow-x: scroll;
            white-space: nowrap;
            padding: 1rem;
            .top-menu-li {
                button {
                    display: inline-block;
                    width: fit-content;
                    padding: 0.6rem 1rem;
                    /* 11/13 오후 김헤림 부분 수정 */
                    font-size: 2.4rem;
                }
            }
        }

        .main-video-wrap {
            display: flex;
            flex-direction: column;
            width: 100%;
            .video-loder {
                width: 100%;
                margin-right: 0;
                .plus-menu {
                    .save-list {
                        position: absolute;
                        top: 100%;
                        right: 0;
                        left: -20rem;
                    }
                }
                margin-bottom: 4%;
                .text-wrap {
                    .movie_info {
                        max-width: 50rem;
                    }
                }
            }
        }
    }
`,rm=({name:e,category:t,thisMenu:n,setThisMenu:r})=>a.jsx("li",{className:`top-menu-li ${n===t?" active":""}`,onClick:()=>r(t),children:a.jsx(Z,{className:"top-menu-button",children:e})}),Eb=[{id:16545641,name:"전체",category:"all"},{id:153,name:"이야기",category:"talk"},{id:513,name:"브이로그",category:"vlog"},{id:165,name:"코미디",category:"Comedy"},{id:955,name:"음악",category:"music"},{id:562,name:"영화감상",category:"movie_review"},{id:464,name:"라이브",category:"live"},{id:161,name:"음식",category:"food"},{id:164,name:"인터뷰",category:"interview"},{id:478,name:"게임",category:"gaming"},{id:654,name:"챌린지",category:"challenge"},{id:789,name:"엔터테인먼트",category:"entertainment"},{id:879,name:"다큐멘터리",category:"documentary"},{id:963,name:"동물",category:"animal"},{id:844,name:"쇼핑",category:"shopping"},{id:951,name:"메이크업",category:"makeup"},{id:351,name:"여행",category:"travel"}],Nb=T.div`
    height: 100%;
    margin: 2% auto;
    min-height: 100vh;
`,im=T.ul`
    width: 100rem;
    min-height: 100vh;
    .not-search {
    }
    .channel-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5%;
        cursor: pointer;
        .channel-profile {
            width: 50%;
            display: flex;
            justify-content: center;
            .channel-logo {
                border-radius: 50%;
                width: 100%;

                max-width: 16rem;
                max-height: 16rem;
            }
        }
        .channel-info {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 2%;
            .info-text {
                width: 75%;
                .name {
                    font-size: 2rem;
                }
                .info {
                    font-size: 1.4rem;
                    color: #777;
                    .username {
                        margin-right: 1.4rem;
                    }
                    .sub-count {
                        position: relative;
                        &::before {
                            content: '';
                            width: 0.4rem;
                            height: 0.4rem;
                            background: #777;
                            border-radius: 50%;
                            position: absolute;
                            top: 50%;
                            left: -12%;
                        }
                    }
                }
            }
        }
    }
    .video-loder {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 30rem;
        .video-wrap {
            width: 50%;
            overflow: unset;
            img,
            iframe,
            video {
                height: 50%;
                border-radius: 1rem;
            }
        }
        .text-wrap {
            width: 50%;
            margin-left: 2%;
            height: 100%;
            padding: 0.2rem 0;
            .movie_info {
                .movie_title {
                    font-size: 2rem;
                    font-weight: 500;
                }
                .movie_body {
                    display: block;
                    margin-top: 1rem;
                }
            }
        }
    }
    @media ${D.mobile} {
        width: 100vw;
        margin-bottom: 2%;
        overflow: hidden;
        button {
            margin-top: 1vh;
        }
        .channel-item {
            display: flex;
            align-items: center;
            padding: 5% 0;
            border-bottom: 1px solid #eee;
            margin-bottom: 0;
            &:last-child {
            }
            .channel-profile {
                .channel-logo {
                    width: 40%;
                    min-width: 11rem;
                    height: 11rem;
                }
            }
            .channel-info {
                display: flex;
                flex-direction: column;
                align-items: start;
                width: 60%;
                .info {
                    color: #777;
                    display: flex;
                    flex-direction: column;
                    .sub-count {
                        &::before {
                            display: none;
                        }
                    }
                }
            }
        }
        .video-loder {
            height: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 7%;
            .video-wrap {
                width: 100%;
                iframe,
                img {
                    height: 100%;
                    border-radius: 0%;
                }
            }
            .text-wrap {
                width: 100%;
                display: flex;
                .channel-logo {
                    display: flex;
                    width: 10%;
                    height: auto;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .movie_info {
                    width: 80%;
                    position: absolute;
                    left: 13%;
                    top: 20%;
                    .movie_title {
                        -webkit-line-clamp: 2;
                    }
                    .movie_body {
                        display: none;
                    }
                }
                .plus-menu {
                    top: 25%;
                    right: 5%;
                }
            }
        }
    }
`,Lb=T.div`
    width: 100%;
    display: flex;
    @media ${D.mobile} {
        margin-top: 50%;
    }
    .no-search {
        margin: auto;
        box-shadow: #00000024 0.2rem 0.4rem 2rem;
        width: 50rem;
        border-radius: 1rem;
        padding: 2rem;
        box-sizing: border-box;
        text-align: center;
        .no-search-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        .no-search-desc {
            font-size: 1.4rem;
            color: #777;
        }
    }
`,rg=()=>a.jsx(Lb,{children:a.jsxs("div",{className:"no-search",children:[a.jsx("h2",{className:"no-search-title",children:"검색하여 시작하기"}),a.jsxs("p",{className:"no-search-desc",children:["내가 좋아할 만한 동영상 피드를 받을 수 있도록",a.jsx("br",{}),"동영상 시청을 시작해 보세요"]})]})});function ig(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ib}=Object.prototype,{getPrototypeOf:cu}=Object,Us=(e=>t=>{const n=Ib.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),yt=e=>(e=e.toLowerCase(),t=>Us(t)===e),qs=e=>t=>typeof t===e,{isArray:Nr}=Array,ji=qs("undefined");function Pb(e){return e!==null&&!ji(e)&&e.constructor!==null&&!ji(e.constructor)&&Ge(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const og=yt("ArrayBuffer");function Rb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&og(e.buffer),t}const Ob=qs("string"),Ge=qs("function"),sg=qs("number"),$s=e=>e!==null&&typeof e=="object",Bb=e=>e===!0||e===!1,So=e=>{if(Us(e)!=="object")return!1;const t=cu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Tb=yt("Date"),Mb=yt("File"),Fb=yt("Blob"),zb=yt("FileList"),Db=e=>$s(e)&&Ge(e.pipe),Ub=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ge(e.append)&&((t=Us(e))==="formdata"||t==="object"&&Ge(e.toString)&&e.toString()==="[object FormData]"))},qb=yt("URLSearchParams"),[$b,Wb,Vb,Hb]=["ReadableStream","Request","Response","Headers"].map(yt),Kb=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Mi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Nr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function ag(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const En=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lg=e=>!ji(e)&&e!==En;function Wl(){const{caseless:e}=lg(this)&&this||{},t={},n=(r,i)=>{const o=e&&ag(t,i)||i;So(t[o])&&So(r)?t[o]=Wl(t[o],r):So(r)?t[o]=Wl({},r):Nr(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Mi(arguments[r],n);return t}const Gb=(e,t,n,{allOwnKeys:r}={})=>(Mi(t,(i,o)=>{n&&Ge(i)?e[o]=ig(i,n):e[o]=i},{allOwnKeys:r}),e),Yb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Xb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Qb=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&cu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Jb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Zb=e=>{if(!e)return null;if(Nr(e))return e;let t=e.length;if(!sg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ex=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&cu(Uint8Array)),tx=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},nx=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},rx=yt("HTMLFormElement"),ix=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),om=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ox=yt("RegExp"),cg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Mi(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},sx=e=>{cg(e,(t,n)=>{if(Ge(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ge(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ax=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Nr(e)?r(e):r(String(e).split(t)),n},lx=()=>{},cx=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,La="abcdefghijklmnopqrstuvwxyz",sm="0123456789",ug={DIGIT:sm,ALPHA:La,ALPHA_DIGIT:La+La.toUpperCase()+sm},ux=(e=16,t=ug.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function dx(e){return!!(e&&Ge(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const mx=e=>{const t=new Array(10),n=(r,i)=>{if($s(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Nr(r)?[]:{};return Mi(r,(s,l)=>{const c=n(s,i+1);!ji(c)&&(o[l]=c)}),t[i]=void 0,o}}return r};return n(e,0)},fx=yt("AsyncFunction"),hx=e=>e&&($s(e)||Ge(e))&&Ge(e.then)&&Ge(e.catch),dg=((e,t)=>e?setImmediate:t?((n,r)=>(En.addEventListener("message",({source:i,data:o})=>{i===En&&o===n&&r.length&&r.shift()()},!1),i=>{r.push(i),En.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ge(En.postMessage)),px=typeof queueMicrotask<"u"?queueMicrotask.bind(En):typeof process<"u"&&process.nextTick||dg,A={isArray:Nr,isArrayBuffer:og,isBuffer:Pb,isFormData:Ub,isArrayBufferView:Rb,isString:Ob,isNumber:sg,isBoolean:Bb,isObject:$s,isPlainObject:So,isReadableStream:$b,isRequest:Wb,isResponse:Vb,isHeaders:Hb,isUndefined:ji,isDate:Tb,isFile:Mb,isBlob:Fb,isRegExp:ox,isFunction:Ge,isStream:Db,isURLSearchParams:qb,isTypedArray:ex,isFileList:zb,forEach:Mi,merge:Wl,extend:Gb,trim:Kb,stripBOM:Yb,inherits:Xb,toFlatObject:Qb,kindOf:Us,kindOfTest:yt,endsWith:Jb,toArray:Zb,forEachEntry:tx,matchAll:nx,isHTMLForm:rx,hasOwnProperty:om,hasOwnProp:om,reduceDescriptors:cg,freezeMethods:sx,toObjectSet:ax,toCamelCase:ix,noop:lx,toFiniteNumber:cx,findKey:ag,global:En,isContextDefined:lg,ALPHABET:ug,generateString:ux,isSpecCompliantForm:dx,toJSONObject:mx,isAsyncFn:fx,isThenable:hx,setImmediate:dg,asap:px};function M(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}A.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.status}}});const mg=M.prototype,fg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{fg[e]={value:e}});Object.defineProperties(M,fg);Object.defineProperty(mg,"isAxiosError",{value:!0});M.from=(e,t,n,r,i,o)=>{const s=Object.create(mg);return A.toFlatObject(e,s,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),M.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const gx=null;function Vl(e){return A.isPlainObject(e)||A.isArray(e)}function hg(e){return A.endsWith(e,"[]")?e.slice(0,-2):e}function am(e,t,n){return e?e.concat(t).map(function(i,o){return i=hg(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function vx(e){return A.isArray(e)&&!e.some(Vl)}const _x=A.toFlatObject(A,{},null,function(t){return/^is[A-Z]/.test(t)});function Ws(e,t,n){if(!A.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=A.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,y){return!A.isUndefined(y[w])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&A.isSpecCompliantForm(t);if(!A.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(A.isDate(v))return v.toISOString();if(!c&&A.isBlob(v))throw new M("Blob is not supported. Use a Buffer instead.");return A.isArrayBuffer(v)||A.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function d(v,w,y){let p=v;if(v&&!y&&typeof v=="object"){if(A.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(A.isArray(v)&&vx(v)||(A.isFileList(v)||A.endsWith(w,"[]"))&&(p=A.toArray(v)))return w=hg(w),p.forEach(function(h,b){!(A.isUndefined(h)||h===null)&&t.append(s===!0?am([w],b,o):s===null?w:w+"[]",u(h))}),!1}return Vl(v)?!0:(t.append(am(y,w,o),u(v)),!1)}const m=[],g=Object.assign(_x,{defaultVisitor:d,convertValue:u,isVisitable:Vl});function _(v,w){if(!A.isUndefined(v)){if(m.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));m.push(v),A.forEach(v,function(p,f){(!(A.isUndefined(p)||p===null)&&i.call(t,p,A.isString(f)?f.trim():f,w,g))===!0&&_(p,w?w.concat(f):[f])}),m.pop()}}if(!A.isObject(e))throw new TypeError("data must be an object");return _(e),t}function lm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function uu(e,t){this._pairs=[],e&&Ws(e,this,t)}const pg=uu.prototype;pg.append=function(t,n){this._pairs.push([t,n])};pg.toString=function(t){const n=t?function(r){return t.call(this,r,lm)}:lm;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function yx(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gg(e,t,n){if(!t)return e;const r=n&&n.encode||yx,i=n&&n.serialize;let o;if(i?o=i(t,n):o=A.isURLSearchParams(t)?t.toString():new uu(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class cm{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){A.forEach(this.handlers,function(r){r!==null&&t(r)})}}const vg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},wx=typeof URLSearchParams<"u"?URLSearchParams:uu,bx=typeof FormData<"u"?FormData:null,xx=typeof Blob<"u"?Blob:null,Ax={isBrowser:!0,classes:{URLSearchParams:wx,FormData:bx,Blob:xx},protocols:["http","https","file","blob","url","data"]},du=typeof window<"u"&&typeof document<"u",Hl=typeof navigator=="object"&&navigator||void 0,Sx=du&&(!Hl||["ReactNative","NativeScript","NS"].indexOf(Hl.product)<0),Cx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kx=du&&window.location.href||"http://localhost",jx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:du,hasStandardBrowserEnv:Sx,hasStandardBrowserWebWorkerEnv:Cx,navigator:Hl,origin:kx},Symbol.toStringTag,{value:"Module"})),Ue={...jx,...Ax};function Ex(e,t){return Ws(e,new Ue.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Ue.isNode&&A.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Nx(e){return A.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Lx(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function _g(e){function t(n,r,i,o){let s=n[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),c=o>=n.length;return s=!s&&A.isArray(i)?i.length:s,c?(A.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!A.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&A.isArray(i[s])&&(i[s]=Lx(i[s])),!l)}if(A.isFormData(e)&&A.isFunction(e.entries)){const n={};return A.forEachEntry(e,(r,i)=>{t(Nx(r),i,n,0)}),n}return null}function Ix(e,t,n){if(A.isString(e))try{return(t||JSON.parse)(e),A.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const Fi={transitional:vg,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=A.isObject(t);if(o&&A.isHTMLForm(t)&&(t=new FormData(t)),A.isFormData(t))return i?JSON.stringify(_g(t)):t;if(A.isArrayBuffer(t)||A.isBuffer(t)||A.isStream(t)||A.isFile(t)||A.isBlob(t)||A.isReadableStream(t))return t;if(A.isArrayBufferView(t))return t.buffer;if(A.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ex(t,this.formSerializer).toString();if((l=A.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ws(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Ix(t)):t}],transformResponse:[function(t){const n=this.transitional||Fi.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(A.isResponse(t)||A.isReadableStream(t))return t;if(t&&A.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?M.from(l,M.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ue.classes.FormData,Blob:Ue.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};A.forEach(["delete","get","head","post","put","patch"],e=>{Fi.headers[e]={}});const Px=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Rx=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&Px[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},um=Symbol("internals");function Dr(e){return e&&String(e).trim().toLowerCase()}function Co(e){return e===!1||e==null?e:A.isArray(e)?e.map(Co):String(e)}function Ox(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Bx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ia(e,t,n,r,i){if(A.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!A.isString(t)){if(A.isString(r))return t.indexOf(r)!==-1;if(A.isRegExp(r))return r.test(t)}}function Tx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Mx(e,t){const n=A.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class qe{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,c,u){const d=Dr(c);if(!d)throw new Error("header name must be a non-empty string");const m=A.findKey(i,d);(!m||i[m]===void 0||u===!0||u===void 0&&i[m]!==!1)&&(i[m||c]=Co(l))}const s=(l,c)=>A.forEach(l,(u,d)=>o(u,d,c));if(A.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(A.isString(t)&&(t=t.trim())&&!Bx(t))s(Rx(t),n);else if(A.isHeaders(t))for(const[l,c]of t.entries())o(c,l,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=Dr(t),t){const r=A.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Ox(i);if(A.isFunction(n))return n.call(this,i,r);if(A.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Dr(t),t){const r=A.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ia(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Dr(s),s){const l=A.findKey(r,s);l&&(!n||Ia(r,r[l],l,n))&&(delete r[l],i=!0)}}return A.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Ia(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return A.forEach(this,(i,o)=>{const s=A.findKey(r,o);if(s){n[s]=Co(i),delete n[o];return}const l=t?Tx(o):String(o).trim();l!==o&&delete n[o],n[l]=Co(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return A.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&A.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[um]=this[um]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=Dr(s);r[l]||(Mx(i,s),r[l]=!0)}return A.isArray(t)?t.forEach(o):o(t),this}}qe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);A.reduceDescriptors(qe.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});A.freezeMethods(qe);function Pa(e,t){const n=this||Fi,r=t||n,i=qe.from(r.headers);let o=r.data;return A.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function yg(e){return!!(e&&e.__CANCEL__)}function Lr(e,t,n){M.call(this,e??"canceled",M.ERR_CANCELED,t,n),this.name="CanceledError"}A.inherits(Lr,M,{__CANCEL__:!0});function wg(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Fx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function zx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=r[o];s||(s=u),n[i]=c,r[i]=u;let m=o,g=0;for(;m!==i;)g+=n[m++],m=m%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const _=d&&u-d;return _?Math.round(g*1e3/_):void 0}}function Dx(e,t){let n=0,r=1e3/t,i,o;const s=(u,d=Date.now())=>{n=d,i=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const d=Date.now(),m=d-n;m>=r?s(u,d):(i=u,o||(o=setTimeout(()=>{o=null,s(i)},r-m)))},()=>i&&s(i)]}const ls=(e,t,n=3)=>{let r=0;const i=zx(50,250);return Dx(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,c=s-r,u=i(c),d=s<=l;r=s;const m={loaded:s,total:l,progress:l?s/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&d?(l-s)/u:void 0,event:o,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(m)},n)},dm=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},mm=e=>(...t)=>A.asap(()=>e(...t)),Ux=Ue.hasStandardBrowserEnv?function(){const t=Ue.navigator&&/(msie|trident)/i.test(Ue.navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=A.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),qx=Ue.hasStandardBrowserEnv?{write(e,t,n,r,i,o){const s=[e+"="+encodeURIComponent(t)];A.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),A.isString(r)&&s.push("path="+r),A.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function $x(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Wx(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function bg(e,t){return e&&!$x(t)?Wx(e,t):t}const fm=e=>e instanceof qe?{...e}:e;function Un(e,t){t=t||{};const n={};function r(u,d,m){return A.isPlainObject(u)&&A.isPlainObject(d)?A.merge.call({caseless:m},u,d):A.isPlainObject(d)?A.merge({},d):A.isArray(d)?d.slice():d}function i(u,d,m){if(A.isUndefined(d)){if(!A.isUndefined(u))return r(void 0,u,m)}else return r(u,d,m)}function o(u,d){if(!A.isUndefined(d))return r(void 0,d)}function s(u,d){if(A.isUndefined(d)){if(!A.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function l(u,d,m){if(m in t)return r(u,d);if(m in e)return r(void 0,u)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,d)=>i(fm(u),fm(d),!0)};return A.forEach(Object.keys(Object.assign({},e,t)),function(d){const m=c[d]||i,g=m(e[d],t[d],d);A.isUndefined(g)&&m!==l||(n[d]=g)}),n}const xg=e=>{const t=Un({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:l}=t;t.headers=s=qe.from(s),t.url=gg(bg(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(A.isFormData(n)){if(Ue.hasStandardBrowserEnv||Ue.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((c=s.getContentType())!==!1){const[u,...d]=c?c.split(";").map(m=>m.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...d].join("; "))}}if(Ue.hasStandardBrowserEnv&&(r&&A.isFunction(r)&&(r=r(t)),r||r!==!1&&Ux(t.url))){const u=i&&o&&qx.read(o);u&&s.set(i,u)}return t},Vx=typeof XMLHttpRequest<"u",Hx=Vx&&function(e){return new Promise(function(n,r){const i=xg(e);let o=i.data;const s=qe.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=i,d,m,g,_,v;function w(){_&&_(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let y=new XMLHttpRequest;y.open(i.method.toUpperCase(),i.url,!0),y.timeout=i.timeout;function p(){if(!y)return;const h=qe.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),C={data:!l||l==="text"||l==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:h,config:e,request:y};wg(function(x){n(x),w()},function(x){r(x),w()},C),y=null}"onloadend"in y?y.onloadend=p:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(p)},y.onabort=function(){y&&(r(new M("Request aborted",M.ECONNABORTED,e,y)),y=null)},y.onerror=function(){r(new M("Network Error",M.ERR_NETWORK,e,y)),y=null},y.ontimeout=function(){let b=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const C=i.transitional||vg;i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),r(new M(b,C.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,y)),y=null},o===void 0&&s.setContentType(null),"setRequestHeader"in y&&A.forEach(s.toJSON(),function(b,C){y.setRequestHeader(C,b)}),A.isUndefined(i.withCredentials)||(y.withCredentials=!!i.withCredentials),l&&l!=="json"&&(y.responseType=i.responseType),u&&([g,v]=ls(u,!0),y.addEventListener("progress",g)),c&&y.upload&&([m,_]=ls(c),y.upload.addEventListener("progress",m),y.upload.addEventListener("loadend",_)),(i.cancelToken||i.signal)&&(d=h=>{y&&(r(!h||h.type?new Lr(null,e,y):h),y.abort(),y=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const f=Fx(i.url);if(f&&Ue.protocols.indexOf(f)===-1){r(new M("Unsupported protocol "+f+":",M.ERR_BAD_REQUEST,e));return}y.send(o||null)})},Kx=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const o=function(u){if(!i){i=!0,l();const d=u instanceof Error?u:this.reason;r.abort(d instanceof M?d:new Lr(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,o(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:c}=r;return c.unsubscribe=()=>A.asap(l),c}},Gx=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Yx=async function*(e,t){for await(const n of Xx(e))yield*Gx(n,t)},Xx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},hm=(e,t,n,r)=>{const i=Yx(e,t);let o=0,s,l=c=>{s||(s=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await i.next();if(u){l(),c.close();return}let m=d.byteLength;if(n){let g=o+=m;n(g)}c.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},Vs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ag=Vs&&typeof ReadableStream=="function",Qx=Vs&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Sg=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Jx=Ag&&Sg(()=>{let e=!1;const t=new Request(Ue.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),pm=64*1024,Kl=Ag&&Sg(()=>A.isReadableStream(new Response("").body)),cs={stream:Kl&&(e=>e.body)};Vs&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!cs[t]&&(cs[t]=A.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new M(`Response type '${t}' is not supported`,M.ERR_NOT_SUPPORT,r)})})})(new Response);const Zx=async e=>{if(e==null)return 0;if(A.isBlob(e))return e.size;if(A.isSpecCompliantForm(e))return(await new Request(Ue.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(A.isArrayBufferView(e)||A.isArrayBuffer(e))return e.byteLength;if(A.isURLSearchParams(e)&&(e=e+""),A.isString(e))return(await Qx(e)).byteLength},e4=async(e,t)=>{const n=A.toFiniteNumber(e.getContentLength());return n??Zx(t)},t4=Vs&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:o,timeout:s,onDownloadProgress:l,onUploadProgress:c,responseType:u,headers:d,withCredentials:m="same-origin",fetchOptions:g}=xg(e);u=u?(u+"").toLowerCase():"text";let _=Kx([i,o&&o.toAbortSignal()],s),v;const w=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let y;try{if(c&&Jx&&n!=="get"&&n!=="head"&&(y=await e4(d,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),j;if(A.isFormData(r)&&(j=C.headers.get("content-type"))&&d.setContentType(j),C.body){const[x,k]=dm(y,ls(mm(c)));r=hm(C.body,pm,x,k)}}A.isString(m)||(m=m?"include":"omit");const p="credentials"in Request.prototype;v=new Request(t,{...g,signal:_,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:p?m:void 0});let f=await fetch(v);const h=Kl&&(u==="stream"||u==="response");if(Kl&&(l||h&&w)){const C={};["status","statusText","headers"].forEach(B=>{C[B]=f[B]});const j=A.toFiniteNumber(f.headers.get("content-length")),[x,k]=l&&dm(j,ls(mm(l),!0))||[];f=new Response(hm(f.body,pm,x,()=>{k&&k(),w&&w()}),C)}u=u||"text";let b=await cs[A.findKey(cs,u)||"text"](f,e);return!h&&w&&w(),await new Promise((C,j)=>{wg(C,j,{data:b,headers:qe.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:v})})}catch(p){throw w&&w(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,e,v),{cause:p.cause||p}):M.from(p,p&&p.code,e,v)}}),Gl={http:gx,xhr:Hx,fetch:t4};A.forEach(Gl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const gm=e=>`- ${e}`,n4=e=>A.isFunction(e)||e===null||e===!1,Cg={getAdapter:e=>{e=A.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!n4(n)&&(r=Gl[(s=String(n)).toLowerCase()],r===void 0))throw new M(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(gm).join(`
`):" "+gm(o[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Gl};function Ra(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Lr(null,e)}function vm(e){return Ra(e),e.headers=qe.from(e.headers),e.data=Pa.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Cg.getAdapter(e.adapter||Fi.adapter)(e).then(function(r){return Ra(e),r.data=Pa.call(e,e.transformResponse,r),r.headers=qe.from(r.headers),r},function(r){return yg(r)||(Ra(e),r&&r.response&&(r.response.data=Pa.call(e,e.transformResponse,r.response),r.response.headers=qe.from(r.response.headers))),Promise.reject(r)})}const kg="1.7.7",mu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{mu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _m={};mu.transitional=function(t,n,r){function i(o,s){return"[Axios v"+kg+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new M(i(s," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!_m[s]&&(_m[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function r4(e,t,n){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],c=l===void 0||s(l,o,e);if(c!==!0)throw new M("option "+o+" must be "+c,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+o,M.ERR_BAD_OPTION)}}const Yl={assertOptions:r4,validators:mu},Kt=Yl.validators;class Rn{constructor(t){this.defaults=t,this.interceptors={request:new cm,response:new cm}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Un(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Yl.assertOptions(r,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean)},!1),i!=null&&(A.isFunction(i)?n.paramsSerializer={serialize:i}:Yl.assertOptions(i,{encode:Kt.function,serialize:Kt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&A.merge(o.common,o[n.method]);o&&A.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=qe.concat(s,o);const l=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,m=0,g;if(!c){const v=[vm.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,u),g=v.length,d=Promise.resolve(n);m<g;)d=d.then(v[m++],v[m++]);return d}g=l.length;let _=n;for(m=0;m<g;){const v=l[m++],w=l[m++];try{_=v(_)}catch(y){w.call(this,y);break}}try{d=vm.call(this,_)}catch(v){return Promise.reject(v)}for(m=0,g=u.length;m<g;)d=d.then(u[m++],u[m++]);return d}getUri(t){t=Un(this.defaults,t);const n=bg(t.baseURL,t.url);return gg(n,t.params,t.paramsSerializer)}}A.forEach(["delete","get","head","options"],function(t){Rn.prototype[t]=function(n,r){return this.request(Un(r||{},{method:t,url:n,data:(r||{}).data}))}});A.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(Un(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Rn.prototype[t]=n(),Rn.prototype[t+"Form"]=n(!0)});class fu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new Lr(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new fu(function(i){t=i}),cancel:t}}}function i4(e){return function(n){return e.apply(null,n)}}function o4(e){return A.isObject(e)&&e.isAxiosError===!0}const Xl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Xl).forEach(([e,t])=>{Xl[t]=e});function jg(e){const t=new Rn(e),n=ig(Rn.prototype.request,t);return A.extend(n,Rn.prototype,t,{allOwnKeys:!0}),A.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return jg(Un(e,i))},n}const ce=jg(Fi);ce.Axios=Rn;ce.CanceledError=Lr;ce.CancelToken=fu;ce.isCancel=yg;ce.VERSION=kg;ce.toFormData=Ws;ce.AxiosError=M;ce.Cancel=ce.CanceledError;ce.all=function(t){return Promise.all(t)};ce.spread=i4;ce.isAxiosError=o4;ce.mergeConfig=Un;ce.AxiosHeaders=qe;ce.formToJSON=e=>_g(A.isHTMLForm(e)?new FormData(e):e);ce.getAdapter=Cg.getAdapter;ce.HttpStatusCode=Xl;ce.default=ce;const s4=()=>{var C,j;const{allMovies:e}=P(x=>x.channel),{isAuth:t,isLoginUser:n}=P(x=>x.auth),{isSideMenu:r}=P(x=>x.header),i=te(),o=S.useRef(),s=S.useRef(),[l]=S.useState(Eb.filter(x=>x.category!=="all").sort(()=>Math.random()-.5).slice(0,7)),[c,u]=S.useState("all"),[d,m]=S.useState(8),[g,_]=S.useState([]),[v,w]=S.useState([]),[y,p]=S.useState([]),f=()=>{m(x=>x+(r?8:10))},[h,b]=S.useState({});if(S.useEffect(()=>{e.length===0&&i(Et()),document.title="YouTube",d>=e.length&&m(e.length+10)},[i,e.length,d]),S.useEffect(()=>{if(e.length>0){const x=e.slice().sort(()=>Math.random()-.5),k=[],B=[];for(let O=0;O<x.length;O+=10)k.push(x.slice(O,O+10));for(let O=0;O<x.length;O+=8)B.push(x.slice(O,O+8));_(k),w(B),m(r?8:10)}},[e]),S.useEffect(()=>{},[r]),S.useEffect(()=>(o.current&&o.current.disconnect(),o.current=new IntersectionObserver(x=>{x.forEach(k=>{k.isIntersecting&&f()})},{threshold:1}),s.current&&o.current.observe(s.current),()=>{o.current&&s.current&&o.current.unobserve(s.current)}),[]),S.useEffect(()=>{if(t)return;(async()=>{try{const B=(await ce.get("https://geolocation-db.com/json/")).data.IPv4;!t&&B&&i(Yp({ip:B}))}catch(k){console.log(k)}})()},[t]),S.useEffect(()=>{var B,O;if(!n)return;const x=Array.from(new Set((B=n==null?void 0:n.Viewing_Record)==null?void 0:B.map(Q=>Q.movie_category))),k=Array.from(new Set((O=n==null?void 0:n.user_search_list)==null?void 0:O.map(Q=>Q.search)));b({...h,movieCategory:x,searchList:k})},[n==null?void 0:n.Viewing_Record,n==null?void 0:n.user_search_list]),S.useEffect(()=>{const x=xe=>xe[Math.floor(Math.random()*xe.length)],k=h!=null&&h.movieCategory?x(h==null?void 0:h.movieCategory):null,B=h!=null&&h.searchList?x(h==null?void 0:h.searchList):null,O=k?e.filter(xe=>xe.movie_category.includes(k)):[],Q=B?e.filter(xe=>xe.movie_title.includes(B)):[],be=(O||Q).sort(()=>Math.random()-.5).slice(0,10);if(be.length<10){const xe=e.filter($t=>!be.includes($t)).sort(()=>Math.random()-.5).slice(0,10-be.length);p([...be,...xe])}else p(be)},[h]),!e)return a.jsx(as,{});if(e)return a.jsx(jb,{width:r?"24.25%":"19.2%",$not:r?4:5,children:((C=h==null?void 0:h.movieCategory)==null?void 0:C.length)!==0||((j=h==null?void 0:h.searchList)==null?void 0:j.length)!==0?a.jsxs(a.Fragment,{children:[a.jsxs("ul",{className:"top-category",children:[a.jsx(rm,{name:"전체",category:"all",thisMenu:c,setThisMenu:u},"16545641"),l&&l.map(x=>a.jsx(rm,{name:x.name,category:x.category,thisMenu:c,setThisMenu:u},x.id))]}),a.jsx("ul",{className:"main-video-wrap",children:c==="all"?(y==null?void 0:y.length)===0&&g.length!==0?g[0].slice(0,r?8:10).map(x=>a.jsx(Te,{movie:x},x.movie_id)):y.slice(0,r?8:10).map(x=>a.jsx(Te,{movie:x},x.movie_id)):e.filter(x=>x.movie_category.includes(c)).sort(()=>Math.random()-.5).slice(0,r?8:10).map(x=>a.jsx(Te,{movie:x},x.movie_id))}),a.jsx("div",{className:"main-banner",children:a.jsx("img",{className:"main-banner-img",src:"https://github.com/React-Project-Team1/data-center/blob/main/images/Youtube/channels4_banner.jpg?raw=true",alt:"Main Banner"})}),r?v.slice(0,Math.ceil(d/8)).map((x,k)=>a.jsx("ul",{className:"main-video-wrap",children:x.map(B=>a.jsx(Te,{movie:B},B.movie_id))},`video-chunk-${k}`)):g.slice(0,Math.ceil(d/10)).map((x,k)=>a.jsx("ul",{className:"main-video-wrap",children:x.map(B=>a.jsx(Te,{movie:B},B.movie_id))},`video-chunk-${k}`)),a.jsx("div",{id:"scroll-anchor",ref:s,children:d!==(e==null?void 0:e.length)+10&&a.jsx(as,{})})]}):a.jsx("div",{className:"no-login",children:a.jsx(rg,{})})})},ym=T.div`
    display: flex;
    button {
        /* 11/13 오후 김혜림 부분 수정  */
        max-height: 4rem;
    }
    .subscribers-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        /* 11/13 오후 김혜림 부분 추가 */
        white-space: nowrap;
        img {
            width: 2.4rem;
            margin-right: 0.4rem;
        }
    }
    .not-subscribers-btn {
        color: #fff;
        background-color: #212121;
        &:hover {
            background-color: #424242;
        }
    }
    /* 11-18 김신영 추가 */
    .channel-btn,
    .video-btn {
        width: 6.1vw;
        letter-spacing: -0.1rem;
    }
    .channel-btn {
        margin-right: 1rem;
    }
    /* 11/13 오후 김혜림 부분 추가 */
    @media ${D.mobile} {
        .subscribers-btn {
            .img {
                width: 35%;
            }
        }
        /* 11-18 김신영 추가 */
        .channel-btn,
        .video-btn {
            width: 20vw;
            font-size: 90%;
        }
    }
`,Hs=({channel_id:e,channel_name:t,thisChannel:n})=>{var g;const{isLoginUser:r,isAuth:i}=P(_=>_.auth),o=e===(r==null?void 0:r.user_id),s=(g=r==null?void 0:r.Subscription_Id)==null?void 0:g.includes(e),l=te(),c=q(),u=_=>{_.stopPropagation(),i?r.user_id!==e?(l(bw({user_id:r.user_id,channel_id:e})),l(Zp({channel_name:t,type:"plus"})),l(at(`${n.channel_name} 채널 구독`))):alert("error"):c("/login")},d=_=>{i||c("/login"),_.stopPropagation(),l(Zw(n))},m=_=>{_.stopPropagation(),i&&c(`/studio/${e}/dashboard`)};if(o)return a.jsxs(ym,{children:[a.jsx(Z,{onClick:m,className:"channel-btn",children:"채널 맞춤설정"}),a.jsx(Z,{onClick:m,className:"video-btn",children:"동영상 관리"})]});if(!o)return a.jsx(ym,{children:s?a.jsxs(Z,{className:"subscribers-btn",onClick:d,children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Notification.svg",alt:"구독 중",className:"img"}),"구독중"]}):a.jsx(Z,{className:"not-subscribers-btn",onClick:u,children:"구독"})})},a4=({channel:e})=>{var u;const t=q(),{channel_image:n,channel_name:r,channel_subscribers:i,Movies:o,channel_id:s,channel_nav:l}=e,c=d=>{if(d>=1e4)return Math.floor(d/1e4)+"만명";if(d>=1e3)return Math.floor(d/1e3)+"천명";if(d<=1e3)return d+"명"};return a.jsxs("li",{className:"channel-item",onClick:()=>{var d;return t(`/channel/${((d=o[0])==null?void 0:d.movie_channel)||l}`)},children:[a.jsx("div",{className:"channel-profile",children:a.jsx("img",{src:n,alt:r,className:"channel-logo"})}),a.jsxs("div",{className:"channel-info",children:[a.jsxs("div",{className:"info-text",children:[a.jsx("h3",{className:"name",children:r}),a.jsxs("p",{className:"info",children:[a.jsxs("span",{className:"username",children:["@",((u=o[0])==null?void 0:u.movie_channel)||l]}),a.jsxs("span",{className:"sub-count",children:["구독자 ",c(i)]})]})]}),a.jsx(Hs,{channel_id:s,channel_name:l,thisChannel:e})]})]})},l4=({filteredMovies:e})=>{if(e)return a.jsx(a.Fragment,{children:e.map(t=>a.jsx(Te,{movie:t},t.movie_id))})},c4=({Search:e,allMovies:t})=>{const{Channel:n}=P(s=>s.channel),i=Object.keys(n).map(s=>n[s]).filter(s=>s.channel_name.toLowerCase().includes(e.toLowerCase())),o=t.filter(s=>s.movie_title.toLowerCase().includes(e.toLowerCase())||s.movie_category.toLowerCase().includes(e.toLowerCase()));if(i.length===0&&o.length===0)return a.jsx(im,{children:a.jsxs("p",{className:"not-search",children:['"',e,'" 찾으시는 검색 결과가 없습니다.']})});if(i.length>0||o.length>0)return a.jsxs(im,{children:[i.map(s=>a.jsx(a4,{channel:s},s.channel_id)),a.jsx(l4,{Search:e,filteredMovies:o})]})},wm=()=>{const{Search:e}=_t(),{allMovies:t}=P(r=>r.channel),n=te();return S.useEffect(()=>{n(Et())},[]),S.useEffect(()=>{document.title=`${e} | YouTube`},[e]),a.jsx(Nb,{children:e?a.jsx(c4,{Search:e,allMovies:t}):a.jsx(rg,{})})},bm=T.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2% 3.5%;
    display: flex;
    > .video-wrap {
        position: relative;
        width: 70%;
        margin: 0 2rem 0 0;
        .videoInner {
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
            position: relative;
            border-radius: 2rem;
            overflow: hidden;
        }
        iframe,
        video {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
    }
    @media ${D.mobile} {
        display: block;
        padding: 0;
        margin-top: -0.9rem;
        .video-wrap {
            width: 100%;
            .videoInner {
                border-radius: 0;
            }
        }
    }
`,u4=T.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    .sub_video_wrap {
        width: 100%;
    }
    .video-loder {
        display: flex;
        width: 100%;
        .video-wrap {
            max-width: 22rem;
            overflow: hidden;
            padding-bottom: 24%;
        }
        .text-wrap {
            width: 100%;
            .channel-logo {
                display: none;
            }
            .movie_info {
                margin-left: 1rem;
                .movie_title {
                    font-size: 1.4rem;
                    word-break: break-all;
                }
                .mobile {
                    display: block;
                }
                .channel_name,
                .movie_like_count {
                    font-size: 1.2rem;
                }
            }
        }
    }
    @media ${D.mobile} {
        display: block;
        width: 100%;
        .sub_video_wrap {
            .video-loder {
                display: flex;
                width: 100%;
                flex-direction: column;
                margin-bottom: 2rem;
                .video-wrap {
                    border-radius: 0;
                    max-width: 100%;
                    padding-bottom: 55%;
                }
                .text-wrap {
                    .movie_info {
                        .movie_title {
                            font-size: 2.4rem;
                        }
                        .mobile {
                            display: flex;
                        }
                    }
                }
            }
        }
    }
    @media ${D.tablet} {
        display: block;
        width: 100%;
        .movie_title {
            display: block;
        }
        .video-loder {
            .video-wrap {
                border-radius: 2rem;
                .movie_title {
                }
            }
        }
        .text-wrap {
        }
        .save-list {
            right: -100%;
        }
    }
`,d4=T.div`
    height: 4rem;
    padding: 1% 0;
    position: relative;
    .title {
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.8rem;
    }
    .top {
        padding: 1% 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .channel {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            overflow: hidden;
            .channelImg {
                width: 4rem;
                height: 4rem;
                margin-top: 0.5rem;
                border-radius: 2.5rem;
            }
            .channel_detail {
                margin-left: 1.2rem;
                margin-right: 2.4rem;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                white-space: nowrap;
                user-select: none;
                cursor: pointer;
                .channel_name {
                    font-size: 1.7rem;
                    font-weight: 600;
                    max-width: 200px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .channel_subscribers {
                    font-size: 1.4rem;
                    color: #606060;
                    max-width: 200px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }

        .subscribers {
            margin-left: 1.5rem;
        }

        .action {
            display: flex;
            flex-wrap: nowrap;
            gap: 1rem;
            .Like {
                .BelowBtn {
                    position: relative;
                    margin-left: 0;
                    border-radius: 3rem 0 0 3rem;

                    &:last-child {
                        border-radius: 0 3rem 3rem 0;
                        padding-left: 15px;
                        &::after {
                            content: '';
                            height: 1.7rem;
                            background: rgba(0, 0, 0, 0.1);
                            position: absolute;
                            left: 0;
                            top: 1rem;
                            width: 0.1rem;
                        }
                    }
                    &:hover {
                        background: rgba(0, 0, 0, 0.1);
                    }
                }
            }

            .BelowBtn {
                flex-basis: auto;
                height: 3.8rem;
                font-size: 1.4rem;
                background: rgba(0, 0, 0, 0.05);
                border: none;
                border-radius: 3rem;
                padding: 0.8rem 1.2rem;

                &:hover {
                    background: rgba(0, 0, 0, 0.1);
                }
            }
        }
    }
    .more1 {
        display: block;
    }

    .more2 {
        display: none;
    }

    .BelowBtn_comment {
        margin-left: 0.9rem;
        vertical-align: top;
        font-size: 1.4rem;
        &.comment {
        }
    }
    .img {
        width: 2.2rem;
    }

    .report-text {
        position: absolute;
        right: -4rem;
        top: 10rem;
        background: #fff;
        padding: 1%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 15px;
        z-index: 1;
    }
    .CommentList {
        position: relative;
    }
    .Comment_items {
        width: auto;
        position: absolute;
        right: -5rem;
        top: 3.5rem;
        background: #fff;
        padding: 1%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 15px;
        z-index: 1;
        .Comment_item {
            vertical-align: top;
            margin-left: 0.3rem;
        }
    }

    @media ${D.tablet} {
        height: auto;
        .report-text {
            right: -2rem;
        }
    }
    @media ${D.mobile} {
        padding: 1rem;
        box-sizing: border-box;
        .channel_detail {
            max-width: 20rem;
        }
        .Comment_items {
            right: -2rem;
        }
        .Comment_img {
            width: 30%;
        }
        .report-text {
            right: 0;
        }
        .more1 {
            display: none;
        }
        .more2 {
            display: block;
        }
        .save {
            display: none;
        }
        .mobile_save {
            width: auto;
            background: transparent;
        }
        @media ${D.mobile} {
            .subscribers-btn {
                width: 17vw;
            }
        }
    }
`,m4=T.div`
    min-width: min(450px, 100%);
    background: rgba(0, 0, 0, 0.05);
    border-radius: 2rem;
    padding: 1%;
    font-size: 1.5rem;
    .info {
        .desc {
            margin-left: 1rem;
        }
    }
    .more {
        cursor: pointer;
    }

    .script {
        margin-top: 5rem;

        .script_title {
            font-size: 2rem;
            font-weight: 600;
        }

        .script_desc {
            font-size: 1.4rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            color: #7d7d7d;
        }
    }
    .script_btn {
        font-size: 1.6rem;
        height: 3.8rem;
        color: #065fd4;
        border-radius: 3rem;
        border: 1px solid #d4d4d4;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        &:hover {
            background: #dceafe;
            border: none;
        }
    }
    .channel {
        display: flex;
        align-items: center;
        margin-top: 5rem;

        .channelImg {
            width: 4rem;
            height: 4rem;
            margin-top: 0.5rem;
            border-radius: 2.5rem;
        }

        .channel_detail {
            margin-left: 1.2rem;
            margin-right: 2.4rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .channel_name {
                font-size: 1.8rem;
                font-weight: 600;
            }

            .channel_subscribers {
                font-size: 1.3rem;
                color: #606060;
                max-width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
    .channel_btn {
        font-size: 1.5rem;
        height: 3.8rem;
        border-radius: 3rem;
        border: 1px solid #d4d4d4;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }
    .but_container {
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
        .icons {
            font-size: 1.8rem;
            margin-right: 1rem;
        }
    }
    .briefly {
        margin-top: 6rem;
        cursor: pointer;
    }
    .img {
        margin-right: 1rem;
    }
`,f4=T.div`
    .section {
        margin-bottom: 5rem;
        min-height: 30rem;
    }
    .comment_top {
        margin-top: 2rem;
        display: flex;
        margin-bottom: 2rem;
        position: relative;
        .total_comment {
            font-size: 2rem;
            line-height: 2.8rem;
            font-weight: 700;
            margin-right: 2.5rem;
        }
    }

    .text {
        width: 12rem;
        position: absolute;
        left: 12rem;
        top: 2.5rem;
        background: #fff;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 15px;
        padding-top: 1rem;
        padding-bottom: 1rem;
        z-index: 1;
    }
    .user_profile {
        width: 4rem;
        margin-top: 0.5rem;
    }
    .label_comment {
        cursor: pointer;
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }

    .label {
        border: none;
        background: none;
        display: flex;
        vertical-align: bottom;
        text-align: center;
        cursor: pointer;
        .label_title {
            margin-left: 1.2rem;
            font-size: 1.4rem;
        }
    }
    .label_comment {
        padding: 1.5rem 1.8rem;
        text-align: left;
        font-size: 1.5rem;
    }
    .comment_inner {
        display: flex;
        vertical-align: middle;
        align-items: center;
        .comment_edit {
            width: 100%;
            margin-left: 2rem;
            margin-bottom: 1.3rem;
        }
        .comment_edit_input {
            border: none;
            border-bottom: 1px solid #d4d4d4;
            width: 100%;
            outline: none;
            height: 3.2rem;
            font-size: 1.4rem;
            transition: 250ms ease-in-out;
        }

        .comment_edit_input:focus {
            border-bottom: 2px solid #000;
        }
    }
    .comment_footer {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }
    .btn {
        border-radius: 5rem;
        padding: 0.7rem 1.2rem;
        border: none;
        background: none;
        font-size: 1.4rem;
    }
    .cancel {
        margin-right: 1.5rem;
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }
    .btn_comment {
        background: rgba(0, 0, 0, 0.08);
        color: #646464;
    }
    .user_comment {
        margin-top: 2rem;
        display: flex;
        height: auto;
        position: relative;
        flex-direction: column;
        li {
            display: flex;
            margin-bottom: 2rem;
        }
    }
    .user-profile {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: var(--youtube-red);
        box-sizing: border-box;
        font-size: 1.6rem;
        color: #fff;
        width: 4rem;
        height: 4rem;
    }
    .CommentBtn {
        height: 8rem;
        font-size: 2rem;
    }
    .CommentDel {
        width: 5rem;
    }
    .comment_user {
        margin-bottom: 5rem;
    }
    .Like {
        display: block;
        width: 10rem;
        display: flex;
        justify-content: space-between;
        margin-left: -0.8rem;
        margin-top: 0.5rem;
    }
    .BelowBtn {
        border: none;
        background: none;
        margin-top: 0.5rem;
    }

    .BelowBtn_comment {
        text-align: center;
        vertical-align: 40%;
    }
    .comment_userId {
        margin-left: 1.5rem;
        width: 100%;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2rem;
        .userId {
            font-size: 1.3rem;
            font-weight: 600;
            line-height: 1.8rem;
            margin-bottom: 0.3rem;
        }
    }
    @media ${D.mobile} {
        .section {
            min-height: 0;
            margin-bottom: 0;
        }
    }
`;var Eg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xm=pe.createContext&&pe.createContext(Eg),h4=["attr","size","title"];function p4(e,t){if(e==null)return{};var n=g4(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function g4(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function us(){return us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(this,arguments)}function Am(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ds(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Am(Object(n),!0).forEach(function(r){v4(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Am(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function v4(e,t,n){return t=_4(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _4(e){var t=y4(e,"string");return typeof t=="symbol"?t:t+""}function y4(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ng(e){return e&&e.map((t,n)=>pe.createElement(t.tag,ds({key:n},t.attr),Ng(t.child)))}function hu(e){return t=>pe.createElement(w4,us({attr:ds({},e.attr)},t),Ng(e.child))}function w4(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=p4(e,h4),l=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),pe.createElement("svg",us({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:c,style:ds(ds({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&pe.createElement("title",null,o),e.children)};return xm!==void 0?pe.createElement(xm.Consumer,null,n=>t(n)):t(Eg)}function Sm(e){return hu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"},child:[]}]})(e)}const b4=({movieBody:e,channelName:t,movie_date:n,movieLikeCount:r,channelSubscribers:i,channelImage:o,channel_name:s})=>{const{year:l,month:c,day:u}=n,d=q(),[m,g]=S.useState(!1),_=()=>{g(v=>!v)};return a.jsx(m4,{children:a.jsxs("div",{className:"detail_inner",children:[a.jsxs("p",{className:"info",children:[a.jsxs("span",{children:["조회수 ",r,"회"]}),a.jsxs("span",{className:"desc",children:["최초 공개: ",l,". ",c,". ",u,"."]})]}),a.jsx("div",{className:"hidden",children:m?a.jsxs(a.Fragment,{children:[a.jsx("span",{children:e}),a.jsxs("div",{className:"script",children:[a.jsx("h2",{className:"script_title",children:"스크립트"}),a.jsx("p",{className:"script_desc",children:"스크립트를 보면서 시청하세요"}),a.jsx("button",{className:"script_btn",children:"스크립트 표시"})]}),a.jsxs("div",{className:"channel",children:[a.jsx("div",{children:a.jsx("img",{className:"channelImg",src:o,alt:""})}),a.jsxs("div",{className:"channel_detail",children:[a.jsx("h2",{className:"channel_name",children:t}),a.jsxs("p",{className:"channel_subscribers",children:["구독자 ",i]})]})]}),a.jsxs("div",{className:"but_container",children:[a.jsxs("button",{className:"channel_btn",onClick:()=>d(`/channel/${s}`),children:[a.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/play.svg.svg",alt:""}),"동영상"]}),a.jsxs("button",{className:"channel_btn",onClick:()=>d(`/channel/${s}`),children:[a.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/user.svg.svg",alt:""}),"정보"]})]}),a.jsx("div",{className:"briefly",onClick:_,children:"간략히"})]}):a.jsx(a.Fragment,{children:a.jsx("span",{className:"more",onClick:_,children:"...더보기"})})})]})})};function x4(e){return hu({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.382 3C12.7607 3 13.107 3.214 13.2764 3.55279L14 5H20C20.5523 5 21 5.44772 21 6V17C21 17.5523 20.5523 18 20 18H13.618C13.2393 18 12.893 17.786 12.7236 17.4472L12 16H5V22H3V3H12.382ZM11.7639 5H5V14H13.2361L14.2361 16H19V7H12.7639L11.7639 5Z"},child:[]}]})(e)}const A4=({movie_id:e,movie_channel:t})=>{var v;const{isAuth:n,isLoginUser:r}=P(w=>w.auth),[i,o]=S.useState(!1),[s,l]=S.useState(""),c=q(),u=te(),d=()=>{o(!1),l("")},m=()=>{n?o(!0):(alert("로그인이 필요합니다."),c("/login"))},g=w=>{l(w.target.value)},_=w=>{if(w.preventDefault(),!n){alert("로그인이 필요합니다."),c("/login");return}u(Gw({movie_id:e,movie_channel:t,comment_body:s,comment_user_id:r.user_id,comment_user_name:r.user_name})),l(""),u(Et())};return a.jsx("div",{className:"comment",children:a.jsxs("div",{className:"comment_inner",children:[a.jsx("div",{children:a.jsx("span",{className:"user-profile",children:(v=r==null?void 0:r.user_name)==null?void 0:v.charAt(0)})}),a.jsxs("form",{className:"comment_edit",onSubmit:_,children:[a.jsx("input",{type:"text",className:"comment_edit_input",placeholder:"댓글 추가...",onFocus:m,onChange:g,value:s}),i&&a.jsxs("div",{className:"comment_footer",children:[a.jsx("div",{className:"emoji",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/emoji.svg.svg",alt:"emoji"})}),a.jsxs("div",{className:"btns",children:[a.jsx("button",{className:"btn cancel",onClick:d,children:"취소"}),a.jsx("button",{className:"btn btn_comment",type:"submit",style:{backgroundColor:s?"#007BFF":"",color:s?"#fff":""},disabled:!s,children:"댓글"})]})]})]})]})})};function S4(e){return hu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"},child:[]}]})(e)}const C4=({item:e,movie_id:t,movie_channel:n})=>{const{comment_user_name:r,comment_body:i,comment_user_id:o,comment_id:s}=e,[l,c]=S.useState(!1),{isLoginUser:u}=P(v=>v.auth),d=te(),m=yn(()=>c(!1)),g=()=>{c(v=>!v)},_=()=>{d(Yw({movie_id:t,movie_channel:n,comment_id:s,comment_user_id:o})),d(Et())};return a.jsxs("li",{className:"CommentList",children:[a.jsx("div",{children:a.jsx("span",{className:"user-profile",children:r.charAt(0)})}),a.jsxs("div",{className:"comment_userId",children:[a.jsxs("p",{className:"userId",children:["@",r]}),a.jsx("p",{children:i})]}),a.jsx("button",{className:"BelowBtn Comment",onClick:g,children:a.jsx(S4,{})}),l&&a.jsx("div",{className:"Comment_items",ref:m,children:(u==null?void 0:u.user_id)===o?a.jsx(a.Fragment,{children:a.jsxs("p",{onClick:_,children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/trash.svg",alt:"삭제"}),a.jsx("span",{className:"Comment_item",children:"삭제"})]})}):a.jsxs("p",{children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/complaint.svg",alt:"신고"}),a.jsx("span",{className:"Comment_item",children:"신고"})]})})]})},k4=({moviesComment:e,movie_id:t,movie_channel:n})=>a.jsx("ul",{className:"user_comment",children:e.map(r=>a.jsx(C4,{item:r,movie_id:t,movie_channel:n,moviesComment:e},r.comment_id))}),j4=({moviesComment:e,movie_id:t,movie_channel:n})=>{const[r,i]=S.useState(!1),[o,s]=S.useState(e),l=yn(()=>i(!1)),c=d=>{const m=[...e].sort((g,_)=>d==="oldest"?new Date(g.date)-new Date(_.date):d==="newest"?new Date(_.date)-new Date(g.date):0);s(m),i(!1)},u=()=>{i(d=>!d)};return a.jsx(f4,{children:a.jsxs("div",{className:"section",children:[a.jsxs("div",{className:"comment_top",ref:l,children:[a.jsxs("h2",{className:"total_comment",children:["댓글 ",e.length," 개"]}),a.jsxs("button",{className:"label",onClick:u,children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/menu.svg.svg",alt:""}),a.jsx("span",{className:"label_title",children:"정렬 기준"})]}),r&&a.jsxs("div",{className:"text",children:[a.jsx("div",{className:"label_comment",onClick:()=>c("popular"),children:a.jsx("p",{children:"인기 댓글순"})}),a.jsx("div",{className:"label_comment",onClick:()=>c("newest"),children:a.jsx("p",{children:"최신순"})})]})]}),a.jsx(A4,{movie_id:t,movie_channel:n}),a.jsx(k4,{moviesComment:e,movie_id:t,movie_channel:n})]})})},E4=({movie:e,title:t,channelName:n,channelSubscribers:r,movieLikeCount:i,channelImage:o,movieBody:s,movie_date:l,channelId:c,moviesComment:u,movie_id:d,channel_name:m,movie_channel:g,thisChannel:_})=>{var O,Q,lt,be,xe,$t,Wt,wt;const[v,w]=S.useState(!1),[y,p]=S.useState(!1),f=te(),{isLoginUser:h,isAuth:b}=P(E=>E.auth),C=q(),j=yn(()=>w(!1)),x=(E,L,R)=>{if(E.preventDefault(),!h||!b){alert("로그인이 필요합니다."),C("/login");return}const $=Oe=>h[Oe].some(Ne=>Ne.movie_id===d),W=Oe=>{f(au({user_id:h.user_id,type:Oe,movie:e}))},Nt=()=>{f(su({user_id:h.user_id,type:L,movie:e})),f(at(R))},Ee=Oe=>{f(Xw({channel_name:m,movie_id:d,type:Oe}))};$(L)?(W(L),f(at(R)),L==="like_Movie_List"&&(Ee("minus"),f(Et()))):(Nt(),L==="like_Movie_List"?($("dislike_Movie_List")&&W("dislike_Movie_List"),Ee("plus"),f(Et())):L==="dislike_Movie_List"&&$("like_Movie_List")&&(W("like_Movie_List"),Ee("minus"),f(Et())))},k=()=>{w(E=>!E)},B=()=>{p(E=>!E)};return a.jsxs(d4,{children:[a.jsx("h2",{className:"title",children:t}),a.jsxs("div",{className:"top",children:[a.jsxs("div",{className:"channel",children:[a.jsx("div",{onClick:()=>C(`/channel/${m}`),children:a.jsx("img",{className:"channelImg",src:o,alt:""})}),a.jsxs("div",{className:"channel_detail",onClick:()=>C(`/channel/${m}`),children:[a.jsx("h2",{className:"channel_name",children:n}),a.jsxs("p",{className:"channel_subscribers",children:[r,"명"]})]}),a.jsx("div",{className:"subscribers",children:a.jsx(Hs,{channel_id:c,channel_name:m,thisChannel:_})})]}),a.jsxs("div",{className:"action",children:[a.jsxs("span",{className:"Like",children:[a.jsxs("button",{className:"BelowBtn like",onClick:E=>{var L;return x(E,"like_Movie_List",(L=h.like_Movie_List)!=null&&L.find(R=>R.movie_id===d)?"좋아요 목록에 삭제":"좋아요 목록에 추가")},children:[a.jsx("img",{className:"img",src:(O=h.like_Movie_List)!=null&&O.find(E=>E.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/disLike_black.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/ee727f8dfb7bcd0c51e97b02fc6c584acdb7cd2f/Icon/like.svg.svg",alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:i})]}),a.jsx("button",{className:"BelowBtn",onClick:E=>{var L;return x(E,"dislike_Movie_List",(L=h.dislike_Movie_List)!=null&&L.find(R=>R.movie_id===d)?"싫어요 취소":"싫어요")},children:a.jsx("img",{className:"img",src:(Q=h.dislike_Movie_List)!=null&&Q.find(E=>E.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/DisLike_black.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/dislike.svg.svg",alt:""})})]}),a.jsxs(Z,{className:"BelowBtn pc",onClick:E=>{var L;return x(E,"Download_List",(L=h.Download_List)!=null&&L.find(R=>R.movie_id===d)?"오프라인 저장 삭제":"오프라인 저장")},children:[a.jsx("img",{className:"img",src:(lt=h.Download_List)!=null&&lt.find(E=>E.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/save2.svg.svg",alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:(be=h.Download_List)!=null&&be.find(E=>E.movie_id===d)?"오프라인 저장 삭제":"오프라인 저장"})]}),a.jsxs(Z,{className:"BelowBtn pc",onClick:E=>{var L;return x(E,"Playlist",(L=h.Playlist)!=null&&L.find(R=>R.movie_id===d)?"재생목록 삭제":"재생목록 저장")},children:[a.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/save.svg.svg",alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:(xe=h.Playlist)!=null&&xe.find(E=>E.movie_id===d)?"재생목록 삭제":"재생목록 저장"})]}),a.jsx(Z,{className:"BelowBtn pc",onClick:k,children:a.jsx(Sm,{className:"icons"})}),v&&a.jsxs("div",{className:"report-text",ref:j,children:[a.jsx(x4,{})," 신고"]}),a.jsx(Z,{className:"BelowBtn more2",onClick:B,ref:j,children:a.jsx(Sm,{className:"icons"})}),y&&a.jsxs("div",{className:"report-text",children:[a.jsxs(Z,{className:"mobile_save",children:[a.jsx("img",{className:"img",src:`https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/complaint.svg\r
               `,alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:"신고"})]}),a.jsxs(Z,{className:"mobile_save",onClick:E=>{var L;return x(E,"Download_List",(L=h.Download_List)!=null&&L.find(R=>R.movie_id===d)?"오프라인 저장 삭제":"오프라인 저장")},children:[a.jsx("img",{className:"img",src:($t=h.Download_List)!=null&&$t.find(E=>E.movie_id===d)?"https://raw.githubusercontent.com/React-Project-Team1/data-center/01142956452b8bed27fa95419332aca1f595ea45/Icon/trash.svg":"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/save2.svg.svg",alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:(Wt=h.Download_List)!=null&&Wt.find(E=>E.movie_id===d)?"오프라인 저장 삭제":"오프라인 저장"})]}),a.jsxs(Z,{className:"mobile_save",onClick:E=>{var L;return x(E,"Playlist",(L=h.Playlist)!=null&&L.find(R=>R.movie_id===d)?"재생목록 삭제":"재생목록 저장")},children:[a.jsx("img",{className:"img",src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/cfcea0ca72ded7c526b3eff908c10fbe750b2924/Icon/save.svg.svg",alt:""}),a.jsx("span",{className:"BelowBtn_comment",children:(wt=h.Playlist)!=null&&wt.find(E=>E.movie_id===d)?"재생목록 삭제":"재생목록 저장"})]})]})]})]}),a.jsx(b4,{movieBody:s,channelName:n,movie_date:l,movieLikeCount:i,channelSubscribers:r,channelImage:o,channel_name:m}),a.jsx(j4,{moviesComment:u,movie_id:d,movie_channel:g})]})},N4=({currentVideoCategory:e,currentVideoId:t})=>{const{allMovies:n}=P(i=>i.channel),r=n.filter(i=>i.movie_category===e).filter(i=>i.movie_id!==t);return a.jsx("ul",{className:"sub_video_wrap",children:r.slice().sort(()=>Math.random()-.5).slice(0,15).map(i=>a.jsx(Te,{movie:i},i.movie_id))})},L4=()=>{var u;const{isSideMenu:e}=P(d=>d.header),{allMovies:t}=P(d=>d.channel),{isLoginUser:n}=P(d=>d.auth),{Channel:r}=P(d=>d.channel),{Movie_ID:i}=_t(),o=te(),s=t.find(d=>d.movie_id===Number(i)),l=s?r[s.movie_channel]:null;if(S.useEffect(()=>{s||o(Et()),e&&o(ou()),s&&(document.title=s.movie_title,o(su({user_id:n.user_id,type:"Viewing_Record",movie:s})))},[i,t,s,o]),!i||!s)return a.jsx(bm,{children:a.jsx("p",{children:"찾으시는 동영상이 없습니다."})});const c=d=>d>=1e4?Math.floor(d/1e4)+"만":d>=1e3?Math.floor(d/1e3)+"천":d<=1e3?d:d.toString();if(t)return a.jsxs(bm,{children:[a.jsxs("div",{className:"video-wrap",children:[a.jsx("div",{className:"videoInner",children:s.movie_video_type!=="video"?a.jsx("iframe",{src:s.movie_video,title:s.movie_title,allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",autoPlay:!0}):a.jsx("video",{controls:!0,autoPlay:!0,muted:!0,src:s.movie_video})}),a.jsx(E4,{title:s.movie_title,movie_date:s.movie_date,movieBody:s.movie_body,channelName:l?l.channel_name:"알 수 없음",channelSubscribers:l?c(l.channel_subscribers):"알 수 없음",movieLikeCount:c(s.movie_like_count),channelImage:l?l.channel_image:"",moviesComment:s.movie_comments,movie_id:s.movie_id,movie_channel:s.movie_channel,channel_name:((u=l==null?void 0:l.Movies[0])==null?void 0:u.movie_channel)||thisChannel_channel_nav,channelId:l.channel_id,movie:s,thisChannel:l})]}),a.jsx(u4,{children:a.jsx(N4,{currentVideoCategory:s.movie_category,currentVideoId:s.movie_id})})]})},Cm=T.div`
    width: 100%;
    .content-box {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        > ul {
            box-sizing: border-box;
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid #dcdcdc;
            min-height: 20rem;
            min-width: 26%;
            margin: 0 2% 2% 0;
            button {
                margin-top: 1.6rem;
            }
        }
    }
    .title-h3 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
`,I4=({subscribers:e,channel:t})=>{const n=q();return a.jsxs(cb,{children:[a.jsx("h3",{className:"title-h3",children:"채널 분석"}),a.jsx("p",{className:"subscribers",children:"현재 구독자수"}),a.jsx("p",{className:"subscribers-count",children:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),a.jsx(Z,{onClick:()=>n(`/channel/${t}`),children:"채널 이동"})]})},P4=({comment:e,thisChannel:t})=>{const n=q(),{isLoginUser:r}=P(i=>i.auth);return a.jsxs(ub,{children:[a.jsxs("h3",{className:"title-h3",children:["최신 댓글 (",e.length,")"]}),a.jsx("ul",{children:e.map(i=>a.jsx(ng,{comment:i,thisChannel:t},i.comment_id))}),a.jsx(Z,{onClick:()=>n(`/studio/${r.user_id}/comment`),children:"더 보기"})]})},R4=({movies:e})=>{const t=q(),{isLoginUser:n}=P(r=>r.auth);return a.jsxs(mb,{children:[a.jsx("h3",{className:"title-h3",children:"영상 콘텐츠"}),a.jsx("ul",{className:"movie-list",children:e.slice().sort(()=>Math.random()-.5).slice(0,4).map(r=>a.jsx(Te,{movie:r},r.movie_id))}),a.jsx(Z,{onClick:()=>t(`/studio/${n.user_id}/content`),children:"콘텐츠 더 보기"})]})},O4=()=>{var l;const{User_ID:e}=_t(),{Channel:t}=P(c=>c.channel),{isAuth:n,isLoginUser:r}=P(c=>c.auth),i=q(),o=te(),s=Object.values(t).find(c=>c.channel_id===Number(e));if(S.useEffect(()=>{n||i("/login"),s||o(Vw(r)),document.title=`${s.channel_name} | Studio`},[n,s,e,t]),!s)return a.jsx(Cm,{children:a.jsx(as,{})});if(s)return a.jsx(Cm,{children:a.jsxs("div",{className:"inner",children:[a.jsx("h2",{className:"studio-title",children:"채널 대시보드"}),a.jsxs("div",{className:"content-box",children:[a.jsx(I4,{subscribers:s.channel_subscribers,channel:((l=s.Movies[0])==null?void 0:l.movie_channel)||r.user_email.split("@")[0]}),a.jsx(R4,{movies:s.Movies}),a.jsx(P4,{comment:s.Movies.flatMap(c=>c.movie_comments),thisChannel:s})]})]})})},B4=T.div`
    background: #e0e0e0;
    min-height: 100vh;
    display: flex;
    .login-container {
        box-sizing: border-box;
        width: 60%;
        margin: auto;
        border-radius: 4rem;
        background-color: #fff;
        display: flex;
        overflow: hidden;
        min-height: 40rem;
    }
    .left-con-box,
    .right-con-box {
        box-sizing: border-box;
        width: 50%;
        padding: 8% 0;
    }
    .left-con-box {
        padding: 4% 5rem;
        .logo-wrap {
            width: 6rem;
            height: 6rem;
            margin-bottom: 2rem;
            img {
                width: 100%;
            }
        }
        .title {
            color: #333;
            font-size: 4rem;
            font-weight: 500;
        }
    }
    .nav-youtube {
        display: inline-block;
        border-bottom: 1px solid #000;
        user-select: none;
        cursor: pointer;
        font-size: 1.4rem;
    }
    @media ${D.mobile} {
        background: #fff;
        .left-con-box,
        .right-con-box {
            width: 100%;
        }
        .login-container {
            flex-direction: column;
            padding: 5.5%;
            width: 100%;
            .left-con-box {
                padding: 0;
                .title {
                    font-size: 4.5rem;
                }
                .nav-youtube {
                    font-size: 160%;
                    margin: 1% 0;
                }
            }
        }
    }
`,T4=T.form`
    &.login-box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;

        .login-input,
        .failed-input {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 5%;
            input {
                border: 1px solid #ddd;
                border-radius: 0.9rem;
                outline: invert;
                text-indent: 2rem;
                font-size: 1.6rem;
                height: 5rem;
                margin-bottom: 5%;
                width: 40rem;
            }
        }
        .failed-input {
            label {
                font-size: 1.4rem;
                margin-bottom: 1rem;
                color: #ed1d24;
            }
            input {
                border: 1px solid #ed1d24;
            }
        }
        .btn-wrap {
            margin-top: 2rem;
            width: 40rem;
            display: flex;
            justify-content: end;
            align-items: center;
            .join-btn {
                margin-left: 1rem;
                background-color: #212121;
                color: #fff;
                &:hover {
                    background-color: #424242;
                }
            }
        }
        input {
            &.password {
                transition: all 0.5s;
                height: 0;
                opacity: 0;
            }
            &.active {
                height: 5rem;
                opacity: 1;
            }
        }
    }
    @media ${D.mobile} {
        &.login-box {
            display: flex;
            align-items: end;
            .login-input,
            .failed-input {
                width: 100%;
                margin: 0;
                align-items: start;
                input {
                    width: 100%;
                    height: 10rem;
                    font-size: 150%;
                    margin-bottom: 3%;
                }
                label {
                    font-size: 100%;
                }
            }
            .btn-wrap {
                width: 50%;
                button {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    font-size: 100%;
                }
            }
        }
    }
`,M4=T.ul`
    box-sizing: border-box;
    padding: 0 2rem;
    .login-item {
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid #dcdcdc;
        padding: 1%;
        box-sizing: border-box;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
            background-color: #eeeeee;
        }
    }
    .profile-wrap {
        background-color: var(--youtube-red);
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fafafa;
        font-size: 1.2rem;
        margin-right: 1.2rem;
    }
    .account-wrap {
        width: 3rem;
        height: 3rem;
        margin-right: 1.2rem;
        padding: 1.4% 1%;
        img {
            width: 100%;
        }
    }
    @media ${D.mobile} {
        padding: 0;
        .login-item {
            padding: 8% 0;
            height: 6vh;
            .profile-wrap {
                width: 5rem;
                height: 5rem;
                font-size: 140%;
            }
            .text-wrap {
                font-size: 150%;
                margin-left: 5px;
                .user-email {
                    font-size: 80%;
                }
            }
            .account-wrap {
                width: 4rem;
                height: 4rem;
            }
        }
    }
`,F4=T.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    .join-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    input {
        border: 1px solid #dcdcdc;
        border-radius: 0.9rem;
        outline: invert;
        text-indent: 2rem;
        font-size: 1.6rem;
        height: 0;
        opacity: 0;
        margin-bottom: 2%;
        width: 40rem;
        transition: all 0.5s;
        &.active {
            height: 5rem;
            opacity: 1;
        }
    }
    .btn-wrap {
        margin-top: 2rem;
        width: 40rem;
        display: flex;
        justify-content: end;
        align-items: center;
        .cancel-btn {
            margin-left: 1rem;
            background-color: #212121;
            color: #fff;
            &:hover {
                background-color: #424242;
            }
        }
    }
    @media ${D.mobile} {
        display: flex;
        align-items: end;
        .join-wrap {
            width: 100%;
            input {
                width: 100%;
                height: 10rem;
                font-size: 150%;
                margin-bottom: 3%;
            }
        }
        .btn-wrap {
            width: 45%;
            button {
                width: 100%;
                font-size: 100%;
            }
            .join-btn {
                width: 45%;
            }
        }
    }
`,z4=({loginCheck:e,setLoginCheck:t,setPageType:n})=>{const{LoginUser:r}=P(v=>v.auth),[i,o]=S.useState({user_email:"",user_password:""}),[s,l]=S.useState(!1),c=te(),u=q(),d=Ri(),m=v=>{const{name:w,value:y}=v.target;o({...i,[w]:y})},g=v=>{if(v.preventDefault(),r.find(w=>w.user_email===i.user_email&&w.user_password===i.user_password))c(Kp(i)),c(at(`${i.user_email}님 로그인`)),d.pathname.startsWith("/studio")||d.pathname.startsWith("/login")||d.pathname.startsWith("/join")?u("/"):u(-1);else{t(!0);return}},_=v=>{v.preventDefault(),i.user_email?l(!s):alert("아이디를 입력해 주세요")};return a.jsxs(T4,{className:"login-box",onSubmit:g,children:[e?a.jsxs("p",{className:"failed-input",children:[a.jsx("label",{htmlFor:"",children:"이메일 또는 비밀번호가 잘못 입력되었습니다."}),a.jsx("input",{type:"email",name:"user_email",placeholder:"이메일",onChange:m}),a.jsx("input",{type:"password",name:"user_password",placeholder:"비밀번호",onChange:m,className:s?"password active":"password"})]}):a.jsxs("p",{className:"login-input",children:[a.jsx("input",{type:"email",name:"user_email",placeholder:"이메일",onChange:m}),a.jsx("input",{type:"password",name:"user_password",placeholder:"비밀번호",onChange:m,className:s?"password active":"password"})]}),a.jsxs("div",{className:"btn-wrap",children:[s?a.jsx(Z,{className:"login-btn",type:"submit",children:"로그인"}):a.jsx(Z,{className:"login-btn",onClick:_,children:"다음"}),a.jsx(Z,{className:"join-btn",onClick:v=>{v.preventDefault(),n("join")},children:"계정 만들기"})]})]})},D4=({setPageType:e})=>{const{LoginUser:t}=P(l=>l.auth),n=t.filter(l=>typeof l.user_id=="number").slice().sort(()=>Math.random()-.5).slice(0,3),r=te(),i=q(),o=Ri(),s=l=>{alert(`${l.user_name}님 로그인`),r(Kp({user_email:l.user_email,user_password:l.user_password})),r(at(`${l.user_name}님 로그인`)),o.pathname.startsWith("/studio")||o.pathname.startsWith("/login")||o.pathname.startsWith("/join")?i("/"):i(-1)};return a.jsxs(M4,{children:[n.map(l=>a.jsxs("li",{className:"login-item",onClick:()=>s(l),children:[a.jsx("div",{className:"profile-wrap",children:a.jsx("span",{className:"user-profile",children:l.user_name.charAt(0)})}),a.jsxs("div",{className:"text-wrap",children:[a.jsx("p",{className:"user-name",children:l.user_name}),a.jsx("p",{className:"user-email",children:l.user_email})]})]},l.user_id)),a.jsxs("li",{className:"login-item",onClick:()=>e("login"),children:[a.jsx("div",{className:"account-wrap",children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/23eefc8c9a7f5aebbc05941d76cabae0ea0fca14/Icon/Account.svg",alt:"Account"})}),a.jsx("div",{className:"text-wrap",children:a.jsx("p",{children:"다른 계정 사용"})})]})]})},U4=({setPageType:e})=>{const[t,n]=S.useState({user_name:"",user_age:"",user_tel:"",user_email:"",user_password:""}),[r,i]=S.useState(!1),o=te(),{LoginUser:s}=P(d=>d.auth),l=d=>{d.preventDefault(),t.user_name&&t.user_age&&t.user_tel&&i(!0)},c=d=>{const{name:m,value:g}=d.target;n({...t,[m]:g})},u=d=>{d.preventDefault(),s.find(m=>m.user_email===t.user_email)?alert("중복되는 아이디가 있습니다."):o(Yp(t))};return a.jsxs(F4,{onSubmit:u,children:[a.jsxs("p",{className:"join-wrap",children:[a.jsx("input",{type:"text",name:"user_name",id:"user_name",placeholder:"이름",className:"active",onChange:c}),a.jsx("input",{type:"age",name:"user_age",id:"user_age",placeholder:"나이",className:"active",onChange:c}),a.jsx("input",{type:"tel",name:"user_tel",id:"user_tel",placeholder:"전화번호",className:"active",onChange:c}),a.jsx("input",{type:"email",name:"user_email",id:"user_email",placeholder:"이메일",className:r&&"active",onChange:c}),a.jsx("input",{type:"password",name:"user_password",id:"user_password",placeholder:"비밀번호",className:r&&"active",onChange:c})]}),a.jsx("div",{className:"btn-wrap",children:r?a.jsx(Z,{type:"submit",className:"join-btn",children:"회원가입"}):a.jsxs(a.Fragment,{children:[a.jsx(Z,{onClick:l,className:"next-btn",children:"다음"}),a.jsx(Z,{onClick:d=>{d.preventDefault(),e("login")},className:"cancel-btn",children:"취소"})]})})]})},q4=()=>{const{isAuth:e}=P(s=>s.auth),[t,n]=S.useState("quickLogin"),[r,i]=S.useState(!1),o=q();if(S.useEffect(()=>{e&&o("/"),document.title="로그인 | YouTube"},[e]),!e)return a.jsx(B4,{children:a.jsxs("div",{className:"login-container",children:[a.jsxs("div",{className:"left-con-box",children:[a.jsx("div",{className:"logo-wrap",children:a.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20170301123009%21Google_%22G%22_logo.svg"})}),a.jsxs("h2",{className:"title",children:[t==="quickLogin"&&"계정 선택",t==="login"&&"로그인",t==="join"&&"계정 생성"]}),a.jsx("p",{className:"nav-youtube",onClick:()=>o("/"),children:"YouTube로 이동"})]}),a.jsxs("div",{className:"right-con-box",children:[t==="quickLogin"&&a.jsx(D4,{setPageType:n}),t==="login"&&a.jsx(z4,{loginCheck:r,setLoginCheck:i,setPageType:n}),t==="join"&&a.jsx(U4,{setPageType:n})]})]})})},km=T.div`
    width: 100%;
    min-height: 100vh;
    /* display: flex; */
    .inner {
        padding-top: 2.4rem;
        padding-right: 35%;
        padding-left: calc(50% - 64.2rem);
        h2 {
            font-size: 3.5rem;
            line-height: 5rem;
            font-weight: 700;
        }
        .video-list {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-top: 1.5%;
            margin-top: 0;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row;
                .video-wrap {
                    flex: 1 1 auto;
                    max-width: 24.6rem; /* 최대 너비 설정 */
                    aspect-ratio: 16 / 9; /* 16:9 비율 */
                    padding-bottom: 0%;
                    margin-right: 1.5%;
                    margin-bottom: 2%;
                    img,
                    iframe,
                    video {
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                    }
                }
            }
            .text-wrap {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .movie_title {
                    font-size: 1.8rem;
                    line-height: 2.6rem;
                    font-weight: 400;
                    word-break: break-all;
                    padding: 0;
                }
                .channel-logo {
                    display: none;
                }
                .movie_info {
                    .movie_title {
                    }
                    .channel_name {
                    }
                    .movie_like_count {
                        .movie_date {
                            display: none;
                        }
                    }
                    .movie_body {
                        display: block;
                        margin-top: 0.4rem;
                        max-width: 50rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                .close-menu,
                .plus-menu {
                    padding: 0 1rem;
                    img {
                        width: 2.4rem;
                        height: 2.4rem;
                    }
                    position: relative;
                    text-align: center;
                }
                .close-menu {
                    display: inline-block;
                }
            }
        }
    }
    .page_menu {
        position: fixed;
        background-color: white;
        top: 20rem;
        right: 15%;
        .search_wrap {
            display: flex; /* Flex 컨테이너로 설정 */
            flex-direction: column;
            min-width: 23.5rem;
            .search {
                display: flex;
                margin-bottom: 1rem;
                border-bottom: 1px solid #000;
                img {
                    width: 3rem;
                    height: 3rem;
                    padding: 1rem;
                    border-radius: 50%;
                }
                input {
                    border: none;
                    outline: none;
                }
            }
            .content {
                width: 100%;
                margin: 1rem 0;
                padding: 1rem;
                border-radius: 5rem;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                cursor: pointer;
                font-size: 1.4rem;
                img {
                    display: flex;
                    margin-right: 3%;
                }
            }
            .content:hover {
                background-color: #e5e5e5;
            }
        }
    }
    @media ${D.mobile} {
        .hearder {
            .inner {
                padding: 2%;
            }
        }
        .viewing_content {
            .inner {
                padding: 2%;
                .video-list {
                    width: 100%;
                    overflow: hidden;
                    .video-loder {
                        width: 100%;
                        .video-wrap {
                            width: 30%;
                            img {
                                width: 100%;
                                height: 100%;
                                border-radius: 1rem;
                            }
                        }
                        .text-wrap {
                            /* width: 60%; */
                            width: 220px;
                            padding-left: 0;
                            .channel-logo {
                            }
                            .movie_info {
                                .movie_title {
                                    padding-right: 10%;
                                    word-break: keep-all;
                                }
                                .channel_name {
                                }
                                .movie_body {
                                    padding-right: 10%;
                                    word-break: keep-all;
                                }
                            }
                        }
                        .close-menu {
                            /* position: absolute;
                        right:0; */
                            display: none;
                        }
                        .plus-menu {
                            position: absolute;
                            right: 0;
                        }
                    }
                }
            }
        }
        .page_menu {
            display: none;
        }
    }
`;T.div``;const Ql=({category:e})=>{var l,c,u;const{Category:t}=_t(),{isLoginUser:n}=P(d=>d.auth),[r,i]=S.useState(""),o=te(),s=()=>{switch(t||e){case"Viewing_Record":return"시청 기록";case"Playlist":return"재생 목록";case"Later_Watch":return"나중에 볼 동영상";case"like_Movie_List":return"좋아요 표시한 동영상";case"Download_List":return"오프라인 저장 동영상";default:return"피드"}};if(S.useEffect(()=>{document.title=`${s()} | YouTube`},[t]),((l=n[t||e])==null?void 0:l.length)===0)return a.jsx(km,{className:"feed-wrap",children:a.jsx("div",{className:"inner",children:a.jsxs("p",{className:"not-list",children:[s(),"이 없습니다."]})})});if(((c=n[t||e])==null?void 0:c.length)>0)return a.jsxs(km,{className:"feed-wrap",children:[a.jsx("div",{className:"hearder",children:a.jsx("div",{className:"inner",children:a.jsx("h2",{children:s()})})}),a.jsx("div",{className:"viewing_content",children:a.jsx("div",{className:"inner",children:a.jsx("ul",{className:"video-list",children:(u=n[t||e])==null?void 0:u.filter(d=>d.movie_title.toLowerCase().includes(r==null?void 0:r.toLowerCase())||d.movie_category.toLowerCase().includes(r.toLowerCase())).map(d=>a.jsx(Te,{movie:d,type:t},d.movie_id))})})}),a.jsx("div",{className:"page_menu",children:a.jsxs("div",{className:"search_wrap",children:[a.jsxs("div",{className:"search",children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/a95871720c235be8180dd58ccc5bf67fbb92d7a4/Icon/Search.svg",alt:`${s()} 검색`}),a.jsx("input",{type:"text",value:r,onChange:d=>i(d.target.value),placeholder:`${s()} 검색`})]}),a.jsxs("div",{className:"content",onClick:()=>o(_w({user_id:n.user_id,type:t})),children:[a.jsx("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlUEKgCAQRV93CYK6TsdpGXSZrlPQaYpAXVjDt8xd7mR03v8z6FQUXlXh/ChAD4xAYwjZgAGYLaEKsACtcLkC3VvA7i5aQlRclkglUPELwF/I7X1wHFsvDvDKpfXIonn+dfO+BsQK1T7wUx2ohNkl+gGXd/W0JH8P5NeUXSJFeAxIGTQx9HbwWC/5HJUTUCvpLm6OTjUyE/Pbx4oDDlBhOBmYaWrOAAAAAElFTkSuQmCC"}),a.jsxs("p",{children:[s()," 지우기 "]})]})]})})]})},jm=T.div`
    /* background-color: black; */
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    padding: 2%;
    .channel_home {
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        h2 {
            margin-top: 1%;
            font-weight: 600;
            font-size: 150%;
        }
    }
    .search_results-wrap {
        display: flex;
        width: 100%;
        margin-top: 1%;
        flex-wrap: wrap;
        .video-loder {
            width: 19.2%;
            margin-bottom: 2%;
            &:not(:nth-child(5n)) {
                margin-right: 1%;
            }
        }
    }
    .header_banner {
        display: block;
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        height: 21.2109rem;
        /* height: 21.21%; */
        /* background-color: #dddddd; */
        .channel_banner {
            height: 100%;
            max-height: 30rem;
            overflow: hidden;
            img {
                display: inline-block;
                object-fit: cover;
                width: 100%;
                border-radius: 1.5rem;
                min-height: 1px;
                min-width: 1px;
            }
        }
    }
    .page_header {
        padding-top: 1.6rem;
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        margin-bottom: 1rem;
        /* border: 1px solid #000; */
        .page_header_profile {
            display: flex;
            /* border: 1px solid red; */
            .header_left {
                margin-right: 16px;
                .channel_img {
                    border-radius: 50%;
                    width: 16rem;
                    height: 16rem;
                }
            }
            .header_right {
                .channel_name {
                    font-size: 2em;
                    font-weight: bold;
                }
                .channel_info {
                    color: #555;
                }
                .channel_desc {
                    max-width: 80rem;
                    margin-bottom: 1.2rem;
                    font-size: 1.4rem;
                    word-break: keep-all;
                }
            }
        }
    }

    .channel_navbar {
        padding-right: calc(50% - 64.2rem);
        padding-left: calc(50% - 64.2rem);
        border-bottom: 1px solid #e4e4e4;
        .inner {
            display: flex;
            line-height: 4.8rem;
            align-items: center;
            li {
                padding: 0 2% 0 2%;
                position: relative;
                cursor: pointer;
                display: flex;
                justify-content: center;
            }
            li::after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                width: 100%;
                opacity: 0;
                transform: scaleX(0);
                background-color: black;
                height: 2px;
                transition: opacity 0.3s ease, transform 0.3s ease-in-out;
            }
            li:hover::after {
                opacity: 0.5;
            }
            li.nav_active::after {
                opacity: 1;
                transform: scaleX(1);
            }
            //검색버튼
            .channel_search {
                padding-left: 1rem;
                padding-right: 0;
            }
            button {
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                border: none;
                padding: none;
                background-color: white;
                img {
                }
            }
            .search_input {
                outline: none;
                margin-left: 0.5rem;
                border-width: 0;
                border-bottom: 0.1rem solid #000;
            }
        }
    }
    button {
        max-height: 3.6rem;
    }

    @media ${D.mobile} {
        .header_banner {
            /* height: 13%; */
            /* height: 100px; */
            height: 15rem;
            .channel_banner {
                width: 100%;
                height: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        .page_header {
            .page_header_profile {
                .header_left {
                    display: flex;
                    align-items: center;
                    margin-right: 16px;
                    .channel_img {
                        width: 12.5rem;
                    }
                }
                .header-right {
                    .channel_name {
                        font-size: 26px;
                    }
                    .channel_info {
                        .channel_desc {
                        }
                    }
                }
            }
        }
        .channel_navbar {
            .inner {
                li {
                    line-height: 6rem;
                }
                .channel_search {
                    button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0;
                        img {
                            width: 3rem;
                        }
                    }
                    .search_input {
                        width: 100px;
                    }
                    .search_input::placeholder {
                        font-size: 70%;
                    }
                }
            }
        }
    }
`,$4=T.div`
    border-bottom: 0.1rem solid #e4e4e4;
    padding-right: calc(50% - 64.2rem);
    padding-left: calc(50% - 64.2rem);
    /* overflow: hidden; */
    .channel_home_inner {
        display: flex;
        /* border: 1px solid blue; */
    }
    .channel_mainvideo {
        width: 100%;
        padding: 2.4rem 0;
        .video-loder {
            display: flex;

            .channel-logo {
                display: none;
            }
            .video-wrap {
                width: 42.4rem;
                height: 23.8rem;
                padding-bottom: 0%;
                margin-right: 1%;
                img,
                iframe {
                    width: 42.4rem;
                    height: 23.8rem;
                }
            }
            .text-wrap {
                padding-left: 1%;
            }
        }
        .movie_info {
        }
        .channel_name,
        .pluse-menu {
            display: none;
        }
    }
    @media ${D.mobile} {
        .search_results-wrap {
            flex-direction: column;
            .video-loder {
                display: flex;
                width: 100%;
                .video-wrap {
                    width: 45%;
                    padding-bottom: 28%;
                    border-radius: 1rem;
                    overflow: hidden;
                }
                .text-wrap {
                    width: 55%;
                    overflow: hidden;
                    .channel-logo {
                        display: none;
                    }
                    .movie_info {
                        width: 100%;
                        .movie_title {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                            white-space: wrap;
                            text-overflow: ellipsis;
                            font-size: 2rem;
                            line-height: 2.5rem;
                            margin-bottom: 1%;
                            word-break: break-all;
                            padding-right: 4rem;
                        }
                        .mobile {
                            .mobile_channel_name {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
        .channel_mainvideo {
            .video-loder {
                display: flex;
                flex-direction: column;
                width: 60rem;

                .video-wrap {
                    width: 100%;
                    height: 33rem;
                    img,
                    iframe {
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                    }
                }
                .text-wrap {
                    .channel-logo {
                        display: none;
                    }
                }
            }
        }
    }
`,W4=T.div`
    padding-right: calc(50% - 64.2rem);
    padding-left: calc(50% - 64.2rem);
    .channel_video_tab {
        padding-top: 1%;
        .sort_btn {
            border-radius: 0.5rem;
            background-color: #f2f2f2;
            border: none;
            padding: 0.5rem 1rem;
            margin-right: 1rem;
            font-size: 1.4rem;
            line-height: 2rem;
            font-weight: 500;
        }
        .sort_btn.active {
            background-color: black;
            color: white;
        }
        .channel_videolist {
        }
    }
    @media ${D.mobile} {
        .channel_video_tab {
            padding: 0;
            margin: 1.5rem 0;
        }
        .channel_videolist {
            .search_results-wrap {
                width: 100%;
                display: flex;
                flex-direction: column;
                .video-loder {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    .video-wrap {
                        width: 45%;
                        height: 15rem;
                        padding-bottom: 0%;

                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 1rem;
                        }
                    }
                    .text-wrap {
                        width: 55%;
                        padding: 0;
                        margin-left: 1.5rem;
                        .channel-logo {
                            display: none;
                        }
                        .movie_info {
                            display: inline-block;
                            width: 100%;
                            .movie_title {
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 3; /* 원하는 줄 수 설정 */
                                overflow: hidden;
                                white-space: wrap;
                                text-overflow: ellipsis;
                                font-size: 2rem;
                                line-height: 2.5rem;
                                margin-bottom: 1%;
                                word-break: break-all; /* 글자 단위로 줄바꿈 */
                                padding-right: 4rem;
                            }
                            .mobile_channel_name {
                                display: none;
                            }
                        }
                        .plus-menu {
                            right: 0;
                        }
                    }
                }
            }
        }
    }
`;T.div`
    /* padding-right: calc(50% - 64.2rem);
    padding-left: calc(50% - 64.2rem); */
    @media ${D.mobile} {
        h2 {
            font-size: 150%;
            font-weight: 700;
        }
        .search_results-wrap {
            width: 100%;
            display: flex;
            flex-direction: column;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .video-wrap {
                    width: 45%;
                    height: 15rem;
                    padding-bottom: 0%;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                    }
                }
                .text-wrap {
                    width: 55%;
                    padding: 0;
                    margin-left: 1.5rem;
                    .channel-logo {
                        display: none;
                    }
                    .movie_info {
                        display: inline-block;
                        width: 100%;
                        .mobile {
                            display: flex;
                            flex-direction: column;
                            .mobile_channel_name {
                                line-height: 2.2rem;
                            }
                            .mobile_movie_like_count {
                            }
                        }

                        .movie_title {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                            white-space: wrap;
                            text-overflow: ellipsis;
                            font-size: 2rem;
                            line-height: 2.5rem;
                            margin-bottom: 1%;
                            word-break: break-all;
                            padding-right: 4rem;
                        }
                    }
                    .plus-menu {
                        right: 0;
                    }
                }
            }
        }
    }
`;const V4=T.div`
    .search_results {
        /* padding-right: calc(50% - 64.2rem); */
        padding-left: calc(50% - 64.2rem);
        padding-right: 30%;
        flex-direction: column;
        .search_results-wrap {
            flex-direction: column;
            width: 100%;
            padding-top: 1.5%;
            margin-top: 0;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row;
                border-bottom: 0.1rem solid #e4e4e4;
                margin: 0 1.5% 1.5% 0;
                .video-wrap {
                    width: 24.6rem;
                    height: 13.8rem;
                    padding-bottom: 0%;
                    margin-right: 1%;
                    margin-bottom: 1.5%;
                    img,
                    iframe {
                        width: 24.6rem;
                        height: 13.8rem;
                    }
                }
            }
            .text-wrap {
                width: 80%;
                display: flex;
                justify-content: space-between;
                .channel-logo {
                    display: none;
                }
                .movie_info {
                    .movie_title {
                    }
                    .channel_name {
                    }
                    .movie_like_count {
                        .movie_date {
                        }
                    }
                }
            }
        }
    }
    @media ${D.mobile} {
        margin-top: 10px;
        .search_results {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0%;
            .video-loder {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .video-wrap {
                    width: 45%;
                    height: 15rem;
                    padding-bottom: 0%;
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 1rem;
                    }
                }
                .text-wrap {
                    width: 55%;
                    padding: 0;
                    margin-left: 1.5rem;
                    .channel-logo {
                        display: none;
                    }
                    .movie_info {
                        display: inline-block;
                        width: 100%;
                        .movie_title {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                            white-space: wrap;
                            text-overflow: ellipsis;
                            font-size: 2rem;
                            line-height: 2.5rem;
                            margin-bottom: 1%;
                            word-break: break-all;
                            padding-right: 4rem;
                        }
                        .mobile_channel_name {
                            display: none;
                        }
                    }
                    .plus-menu {
                        right: 0;
                    }
                }
            }
        }
    }
`,H4=()=>{const{Channel_name:e}=_t(),{Channel:t}=P(n=>n.channel);return a.jsx(a.Fragment,{children:a.jsxs($4,{children:[a.jsx("div",{className:"channel_home_inner",children:a.jsx("div",{className:"channel_main",children:a.jsx("div",{className:"channel_mainvideo",children:t[e].Movies&&t[e].Movies.length>0&&a.jsx(Te,{movie:t[e].Movies[0]},t[e].Movies[0].movie_id)})})}),a.jsxs("div",{className:"channel_home",children:[a.jsx("h2",{children:"추천"}),a.jsx("ul",{className:"search_results-wrap",children:t[e].Movies.map(n=>a.jsx(Te,{movie:n},n.movie_id))})]})]})})},K4=()=>{const{Channel_name:e}=_t(),{Channel:t}=P(c=>c.channel),[n,r]=S.useState("latest"),i=t[e].Movies,o=c=>{const{year:u,month:d,day:m}=c.movie_date;return new Date(u,d-1,m)},l=(()=>{switch(n){case"latest":return[...i].sort((c,u)=>o(u)-o(c));case"popular":return[...i].sort((c,u)=>u.movie_like_count-c.movie_like_count);case"date":return[...i].sort((c,u)=>o(c)-o(u));default:return i}})();return a.jsxs(W4,{children:[a.jsxs("div",{className:"channel_video_tab",children:[a.jsxs("button",{className:`sort_btn ${n==="latest"?"active":""}`,onClick:()=>r("latest"),children:[" ","최신순"," "]}),a.jsxs("button",{className:`sort_btn ${n==="popular"?"active":""}`,onClick:()=>r("popular"),children:[" ","인기순"," "]}),a.jsxs("button",{className:`sort_btn ${n==="date"?"active":""}`,onClick:()=>r("date"),children:[" ","날짜순"," "]})]}),a.jsx("div",{className:"channel_videolist",children:a.jsx("div",{className:"search_results-wrap",children:l.map(c=>a.jsx(Te,{movie:c},c.movie_id))})})]})},G4=({searchTerm:e})=>{var i;const{Channel_name:t}=_t(),{Channel:n}=P(o=>o.channel),r=((i=n[t])==null?void 0:i.Movies.filter(o=>o.movie_title.includes(e)||o.movie_body.includes(e)))||[];return a.jsx(V4,{children:a.jsx("div",{className:"search_results",children:a.jsx("ul",{className:"search_results-wrap",children:r.length>0?r.map(o=>a.jsx(Te,{movie:o},o.movie_id)):a.jsxs("p",{children:["이 채널에 ‘",e,"’와(과) 일치하는 콘텐츠가 없습니다."]})})})})},Y4=()=>{const{Channel_name:e}=_t(),{Channel:t}=P(u=>u.channel),[n,r]=S.useState("home"),[i,o]=S.useState(""),s=t[e],l=s==null?void 0:s.Movies.length,c=u=>u>=1e4?`${Math.floor(u/1e4)}만명`:`${u}명`;if(S.useEffect(()=>{document.title=`${s.channel_name} | YouTube`},[]),!s)return a.jsx(jm,{children:a.jsxs("p",{children:['"',e,'" 찾으시는 채널이 없습니다.']})});if(s)return a.jsxs(jm,{children:[a.jsx("div",{className:"header_banner",children:a.jsx("div",{className:"channel_banner",children:a.jsx("img",{src:s.channel_banner,alt:s})})}),a.jsx("div",{className:"page_header",children:a.jsxs("div",{className:"page_header_profile",children:[a.jsx("div",{className:"header_left",children:a.jsx("img",{className:"channel_img",src:s.channel_image,alt:s})}),a.jsxs("div",{className:"header_right",children:[a.jsx("div",{className:"channel_name",children:s.channel_name}),a.jsxs("div",{className:"channel_info",children:["@",e," • 구독자"," ",c(s.channel_subscribers)," • 동영상"," ",l,"개",a.jsxs("div",{className:"channel_desc",children:[" ",s.channel_introduction]}),a.jsx(Hs,{thisChannel:s,channel_id:s.channel_id,channel_name:s.channel_nav})]})]})]})}),a.jsx("div",{className:"channel_navbar",children:a.jsxs("ul",{className:"inner",children:[a.jsx("li",{className:n==="home"?"nav_active":"",onClick:()=>r("home"),children:"홈"}),a.jsx("li",{className:n==="video"?"nav_active":"",onClick:()=>r("video"),children:"동영상"}),a.jsxs("li",{className:"channel_search",children:[a.jsx("button",{children:a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/752a52cbfb5bf64b383b0941ba3834539b2988ac/Icon/Search.svg",alt:"영상검색"})}),a.jsx("input",{className:"search_input",type:"text",value:i,onChange:u=>o(u.target.value),placeholder:"검색"})]})]})}),a.jsx("div",{className:"channel_content",children:i?a.jsx(G4,{searchTerm:i}):n==="home"?a.jsx(H4,{}):a.jsx(K4,{})})]})},X4=T.div`
  width: 100%;
  position: relative;
  .subscript-select {
    width: 9rem;
    background-color: rgba(0, 0, 0, 0.05);
    color: #0f0f0f;
    border-radius: 1rem;
    padding: 0.4rem 0.5rem.4rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.6rem;
    img {
      width: 1.8rem;
      margin-left: 0.5rem;
    }
  }
  .subscript-ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    border-radius: 1rem;
    box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    .simple-shadow {
      cursor: pointer;
    }
    li {
      background: #fff;
      padding: 1rem 16rem 1rem 1.2rem;
      font-size: 1.4rem;
      &:hover {
        background: #ececec;
      }
    }
  }
  /* 11/13 오후 김혜림 전체 추가 */
  @media ${D.mobile} {
    .subscript-select {
      width: 13rem;
      padding: 1rem;
      font-size: 2rem;
    }
  }
`,Q4=T.ul`
  width: 100%;
  .subscript-li {
    margin: 3rem 0;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    .subscript-li-img {
      width: 13.6rem;
      height: 13.6rem;
      border-radius: 50%;
      margin-right: 3rem;
    }
    .subscript-channel-content {
      width: 70%;
      .content-channel-name {
        display: block;
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      .content-channel-engName,
      .content-channel-subscribers,
      .content-channel-introduction {
        font-size: 1.2rem;
        padding-right: 1rem;
        color: #606060;
      }
      .content-channel-engName {
        position: relative;
        &::before {
          content: "";
          border-radius: 50%;
          border: 1px solid #606060;
          width: 0.05rem;
          height: 0.05rem;
          position: absolute;
          top: 50%;
          right: 0.4rem;
        }
      }
    }
    .subscript-icon {
      width: 20%;
      .icon-notification {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.6rem 1.6rem;
        font-size: 1.4rem;
        color: #333;
        &:hover {
          background-color: #b3b3b3;
        }
        .button-icon-notification {
          margin-right: 0.6rem;
          width: 2.6rem;
        }
      }
    }
  }
  /* 11/13 오후 김혜림 추가 */
  @media ${D.mobile} {
    .subscript-li {
      .subscript-li-img {
        width: 8rem;
        height: 8rem;
        margin-right: 1.6rem;
      }
      .subscript-channel-content {
        width: 63%;
        .content-channel-name {
          margin-bottom: 0;
        }
        .content-channel-engName,
        .content-channel-subscribers,
        .content-channel-introduction {
          font-size: 1.6rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: keep-all;
        }
      }
      .subscript-icon {
        .subscribers-btn {
          width: 100%;
          font-size: 1.6rem;
          .img {
            width: 30%;
          }
        }
      }
    }
  }
`,J4=T.div`
  width: 100%;
  margin: 10rem 0;
  text-align: center;
  .Not_login_subscription_img {
    width: 18%;
  }
  .Not_login_subscription_title {
    display: block;
    font-size: 2.8rem;
    margin-bottom: 1.6rem;
  }
  .Not_login_subscription_desc {
    margin-bottom: 3rem;
  }
  .login_button {
    width: 10rem;
    margin: auto;
  }

  /* 11/15 김혜림 추가 */
  @media ${D.mobile} {
    .login_button {
      width: 15rem;
      .login-menu {
        .login-btn {
          font-size: 2rem;
        }
      }
    }
  }
`,Z4=({channel:e})=>{var u;const{channel_id:t,channel_name:n,channel_image:r,channel_introduction:i,channel_subscribers:o,channel_nav:s,Movies:l}=e,c=q();return a.jsxs("li",{className:"subscript-li",onClick:()=>{var d;return c(`/channel/${((d=e.Movies[0])==null?void 0:d.movie_channel)||s}`)},children:[a.jsx("img",{className:"subscript-li-img",src:r,alt:n}),a.jsxs("div",{className:"subscript-channel-content",children:[a.jsx("strong",{className:"content-channel-name",children:n}),a.jsxs("span",{className:"content-channel-engName",children:["@",((u=l[0])==null?void 0:u.movie_channel)||s]}),a.jsxs("span",{className:"content-channel-subscribers",children:["구독자 ",o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"명"]}),a.jsx("p",{className:"content-channel-introduction",children:i})]}),a.jsx("div",{className:"subscript-icon",children:a.jsx(Hs,{channel_id:t,channel_name:n,thisChannel:e})})]})},e2=({sortData:e,setThisSortType:t,thisSortType:n})=>{const[r,i]=S.useState(!1),o=yn(()=>i(!1));return a.jsx("div",{ref:o,children:a.jsxs(X4,{className:"subscript-sort",children:[a.jsxs("p",{className:"subscript-select",onClick:()=>i(!r),children:[n.name,a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/b26aaeebc663db109b629ff9f3eba7500b8fc6f3/Icon/Down_B.svg",alt:""})]}),a.jsx("ul",{className:"subscript-ul",style:{display:r?"block":"none"},children:e.map(s=>a.jsx("li",{className:s.type,onClick:()=>{t(s),i(!r)},children:s.name},s.id))})]})})},Em=[{id:0x580cafab62fb5,name:"가나다순",type:"channel_name"},{id:6546165164451165,name:"구독자순",type:"channel_subscribers"}],t2=()=>{const{Channel:e}=P(s=>s.channel),t=Object.keys(e).map(s=>e[s]),[n,r]=S.useState(Em[0]),{isLoginUser:i}=P(s=>s.auth),o=t.filter(s=>{var l;return(l=i==null?void 0:i.Subscription_Id)==null?void 0:l.includes(s.channel_id)});return a.jsxs(Q4,{children:[a.jsx(e2,{sortData:Em,setThisSortType:r,thisSortType:n}),o.sort((s,l)=>n.type==="channel_name"?s[n.type]>l[n.type]?1:s[n.type]<l[n.type]?-1:0:l[n.type]>s[n.type]?1:l[n.type]<s[n.type]?-1:0).map(s=>a.jsx(Z4,{channel:s},s.channel_id))]})},n2=T.div`
    width: 100%;
    .subscriptInner {
        width: 60%;
        margin: 2rem auto;
        .subscriptH2 {
            font-size: 3.6rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }
    }
    /* 11/13 김혜림 전체 추가 */
    @media ${D.mobile} {
        .subscriptInner {
            width: 100%;
            padding: 0 2rem;
        }
    }
`,r2=()=>a.jsxs(J4,{children:[a.jsx("img",{src:"https://github.com/React-Project-Team1/data-center/blob/main/Subscription_logout.png?raw=true",alt:"icon",className:"Not_login_subscription_img"}),a.jsx("strong",{className:"Not_login_subscription_title",children:"새로운 동영상을 놓치지 마세요."}),a.jsx("p",{className:"Not_login_subscription_desc",children:"즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요."}),a.jsx("div",{className:"login_button",children:a.jsx(lu,{})})]}),i2=()=>{const{isAuth:e}=P(t=>t.auth);return S.useEffect(()=>{document.title="모든 구독 채널 | YouTube"},[]),a.jsx(n2,{children:e?a.jsxs("div",{className:"subscriptInner",children:[a.jsx("h2",{className:"subscriptH2",children:"모든 구독 채널"}),a.jsx("div",{className:"subscription-content-box",children:a.jsx(t2,{})})]}):a.jsx(r2,{})})},o2=T.div`
    @media ${D.mobile} {
        width: 100%;
        min-height: 100vh;
        .feed-wrap {
            min-height: 0;
        }
    }
`,s2=T.ul`
    width: 100%;
    .menu-item {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 2rem;
        border-bottom: 1px solid #dfdfdf;
        img {
            margin-right: 2rem;
        }
        .name {
            font-size: 2.4rem;
        }
    }
`,a2=()=>{const e=te(),t=q();return a.jsxs(s2,{children:[a.jsxs("li",{className:"menu-item",onClick:()=>t("/feed/Download_List"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Download.svg",alt:"Download"}),a.jsx("p",{className:"name",children:"오프라인 저장 동영상"})]}),a.jsxs("li",{className:"menu-item",onClick:()=>t("/feed/like_Movie_List"),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/50bcadb338add2ff5dcb6ac28c339d051e58635b/Icon/Like_list.svg",alt:"Like_list"}),a.jsx("p",{className:"name",children:"좋아요 표시한 동영상"})]}),a.jsxs("li",{className:"menu-item",onClick:()=>e(Gp()),children:[a.jsx("img",{src:"https://raw.githubusercontent.com/React-Project-Team1/data-center/09bd61b24941543866f471ccbd590a39c6d36f03/Icon/logout.svg",alt:"logout"}),a.jsx("p",{className:"name",children:"로그아웃"})]})]})},l2=()=>{const{isAuth:e}=P(n=>n.auth),t=q();if(S.useEffect(()=>{e||t("/login"),document.title="마이 페이지 | YouTube"},[e]),e)return a.jsxs(o2,{children:[a.jsx(Ql,{category:"Viewing_Record"}),a.jsx(Ql,{category:"Later_Watch"}),a.jsx(a2,{})]})};var Lg=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ig=eu(Nm||(Nm=Lg([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));kp(Lm||(Lm=Lg(["",""],["",""])),Ig);var Nm,Lm;const c2=kp`
  ${Ig}
  :root{
    --youtube-red:#f00
  }
  html{
    font-size: 10px;
  }
  body {
    font-size: 1.6rem;
    line-height: 1.6;
    font-family: "Noto Sans KR";    
  }
  a {
    text-decoration: none;
    color: #000;
  }
  li {
    list-style: none;
  }
  table {
    width: 100%;
  }
  input{
    box-sizing: border-box;
  }
  p,
  span{
    user-select: none;
  }
  .pc{
    display: block;
  }
  .mobile{
    display: none;
  }

  @media ${D.tablet} {
    html{
      font-size: 8px;
    }
  }
  @media ${D.mobile} {
    html{
      font-size: 6px;
    }
    .pc{
      display: none;
    }
    .mobile{
      display: block;
    }
    p,div,form,ul,li,span,input,button{
      box-sizing: border-box;
    }
    
  }
`,u2=()=>a.jsx(a.Fragment,{children:a.jsxs(Z_,{children:[a.jsx(c2,{}),a.jsxs(X_,{children:[a.jsxs(J,{path:"/",element:a.jsx(ob,{}),children:[a.jsx(J,{index:!0,element:a.jsx(s4,{})}),a.jsxs(J,{path:"/movies",children:[a.jsx(J,{index:!0,element:a.jsx(wm,{})}),a.jsx(J,{path:":Search",element:a.jsx(wm,{})})]}),a.jsx(J,{path:"/watch",children:a.jsx(J,{path:":Movie_ID",element:a.jsx(L4,{})})}),a.jsx(J,{path:"/channel",children:a.jsx(J,{path:":Channel_name",element:a.jsx(Y4,{})})}),a.jsx(J,{path:"/feed",children:a.jsx(J,{path:":Category",element:a.jsx(Ql,{})})}),a.jsx(J,{path:"/subscription",children:a.jsx(J,{index:!0,element:a.jsx(i2,{})})}),a.jsx(J,{path:"/mypage",children:a.jsx(J,{index:!0,element:a.jsx(l2,{})})}),a.jsx(J,{path:"*",element:a.jsx(yb,{})})]}),a.jsx(J,{path:"/login",children:a.jsx(J,{index:!0,element:a.jsx(q4,{})})}),a.jsxs(J,{path:"/studio",element:a.jsx(_b,{}),children:[a.jsx(J,{path:":User_ID/videoupload",element:a.jsx(kb,{})}),a.jsx(J,{path:":User_ID/dashboard",element:a.jsx(O4,{})}),a.jsx(J,{path:":User_ID/content",element:a.jsx(Cb,{})}),a.jsx(J,{path:":User_ID/comment",element:a.jsx(wb,{})})]})]})]})}),d2=ew({reducer:{auth:Aw,channel:Qw,header:fw,subscribers:eb,savepop:Nw}});Wh(document.getElementById("root")).render(a.jsx(S.StrictMode,{children:a.jsx(k1,{store:d2,children:a.jsx(u2,{})})}));
