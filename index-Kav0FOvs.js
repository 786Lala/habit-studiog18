(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))d(A);new MutationObserver(A=>{for(const N of A)if(N.type==="childList")for(const Q of N.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&d(Q)}).observe(document,{childList:!0,subtree:!0});function _(A){const N={};return A.integrity&&(N.integrity=A.integrity),A.referrerPolicy&&(N.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?N.credentials="include":A.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function d(A){if(A.ep)return;A.ep=!0;const N=_(A);fetch(A.href,N)}})();function Dd(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var uf={exports:{}},xn={};var yd;function P0(){if(yd)return xn;yd=1;var v=Symbol.for("react.transitional.element"),C=Symbol.for("react.fragment");function _(d,A,N){var Q=null;if(N!==void 0&&(Q=""+N),A.key!==void 0&&(Q=""+A.key),"key"in A){N={};for(var Z in A)Z!=="key"&&(N[Z]=A[Z])}else N=A;return A=N.ref,{$$typeof:v,type:d,key:Q,ref:A!==void 0?A:null,props:N}}return xn.Fragment=C,xn.jsx=_,xn.jsxs=_,xn}var bd;function eh(){return bd||(bd=1,uf.exports=P0()),uf.exports}var f=eh(),cf={exports:{}},W={};var pd;function th(){if(pd)return W;pd=1;var v=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),H=Symbol.iterator;function K(s){return s===null||typeof s!="object"?null:(s=H&&s[H]||s["@@iterator"],typeof s=="function"?s:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Me={};function xe(s,T,U){this.props=s,this.context=T,this.refs=Me,this.updater=U||X}xe.prototype.isReactComponent={},xe.prototype.setState=function(s,T){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,T,"setState")},xe.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function Ke(){}Ke.prototype=xe.prototype;function Ae(s,T,U){this.props=s,this.context=T,this.refs=Me,this.updater=U||X}var qe=Ae.prototype=new Ke;qe.constructor=Ae,F(qe,xe.prototype),qe.isPureReactComponent=!0;var Fe=Array.isArray;function V(){}var R={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function Y(s,T,U){var w=U.ref;return{$$typeof:v,type:s,key:T,ref:w!==void 0?w:null,props:U}}function oe(s,T){return Y(s.type,T,s.props)}function Ne(s){return typeof s=="object"&&s!==null&&s.$$typeof===v}function Be(s){var T={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(U){return T[U]})}var zl=/\/+/g;function Ut(s,T){return typeof s=="object"&&s!==null&&s.key!=null?Be(""+s.key):T.toString(36)}function Tt(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(V,V):(s.status="pending",s.then(function(T){s.status==="pending"&&(s.status="fulfilled",s.value=T)},function(T){s.status==="pending"&&(s.status="rejected",s.reason=T)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function S(s,T,U,w,$){var ee=typeof s;(ee==="undefined"||ee==="boolean")&&(s=null);var se=!1;if(s===null)se=!0;else switch(ee){case"bigint":case"string":case"number":se=!0;break;case"object":switch(s.$$typeof){case v:case C:se=!0;break;case O:return se=s._init,S(se(s._payload),T,U,w,$)}}if(se)return $=$(s),se=w===""?"."+Ut(s,0):w,Fe($)?(U="",se!=null&&(U=se.replace(zl,"$&/")+"/"),S($,T,U,"",function(Aa){return Aa})):$!=null&&(Ne($)&&($=oe($,U+($.key==null||s&&s.key===$.key?"":(""+$.key).replace(zl,"$&/")+"/")+se)),T.push($)),1;se=0;var ke=w===""?".":w+":";if(Fe(s))for(var De=0;De<s.length;De++)w=s[De],ee=ke+Ut(w,De),se+=S(w,T,U,ee,$);else if(De=K(s),typeof De=="function")for(s=De.call(s),De=0;!(w=s.next()).done;)w=w.value,ee=ke+Ut(w,De++),se+=S(w,T,U,ee,$);else if(ee==="object"){if(typeof s.then=="function")return S(Tt(s),T,U,w,$);throw T=String(s),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return se}function M(s,T,U){if(s==null)return s;var w=[],$=0;return S(s,w,"","",function(ee){return T.call(U,ee,$++)}),w}function J(s){if(s._status===-1){var T=s._result;T=T(),T.then(function(U){(s._status===0||s._status===-1)&&(s._status=1,s._result=U)},function(U){(s._status===0||s._status===-1)&&(s._status=2,s._result=U)}),s._status===-1&&(s._status=0,s._result=T)}if(s._status===1)return s._result.default;throw s._result}var he=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},pe={map:M,forEach:function(s,T,U){M(s,function(){T.apply(this,arguments)},U)},count:function(s){var T=0;return M(s,function(){T++}),T},toArray:function(s){return M(s,function(T){return T})||[]},only:function(s){if(!Ne(s))throw Error("React.Children.only expected to receive a single React element child.");return s}};return W.Activity=E,W.Children=pe,W.Component=xe,W.Fragment=_,W.Profiler=A,W.PureComponent=Ae,W.StrictMode=d,W.Suspense=D,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,W.__COMPILER_RUNTIME={__proto__:null,c:function(s){return R.H.useMemoCache(s)}},W.cache=function(s){return function(){return s.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(s,T,U){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var w=F({},s.props),$=s.key;if(T!=null)for(ee in T.key!==void 0&&($=""+T.key),T)!k.call(T,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&T.ref===void 0||(w[ee]=T[ee]);var ee=arguments.length-2;if(ee===1)w.children=U;else if(1<ee){for(var se=Array(ee),ke=0;ke<ee;ke++)se[ke]=arguments[ke+2];w.children=se}return Y(s.type,$,w)},W.createContext=function(s){return s={$$typeof:Q,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:N,_context:s},s},W.createElement=function(s,T,U){var w,$={},ee=null;if(T!=null)for(w in T.key!==void 0&&(ee=""+T.key),T)k.call(T,w)&&w!=="key"&&w!=="__self"&&w!=="__source"&&($[w]=T[w]);var se=arguments.length-2;if(se===1)$.children=U;else if(1<se){for(var ke=Array(se),De=0;De<se;De++)ke[De]=arguments[De+2];$.children=ke}if(s&&s.defaultProps)for(w in se=s.defaultProps,se)$[w]===void 0&&($[w]=se[w]);return Y(s,ee,$)},W.createRef=function(){return{current:null}},W.forwardRef=function(s){return{$$typeof:Z,render:s}},W.isValidElement=Ne,W.lazy=function(s){return{$$typeof:O,_payload:{_status:-1,_result:s},_init:J}},W.memo=function(s,T){return{$$typeof:p,type:s,compare:T===void 0?null:T}},W.startTransition=function(s){var T=R.T,U={};R.T=U;try{var w=s(),$=R.S;$!==null&&$(U,w),typeof w=="object"&&w!==null&&typeof w.then=="function"&&w.then(V,he)}catch(ee){he(ee)}finally{T!==null&&U.types!==null&&(T.types=U.types),R.T=T}},W.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},W.use=function(s){return R.H.use(s)},W.useActionState=function(s,T,U){return R.H.useActionState(s,T,U)},W.useCallback=function(s,T){return R.H.useCallback(s,T)},W.useContext=function(s){return R.H.useContext(s)},W.useDebugValue=function(){},W.useDeferredValue=function(s,T){return R.H.useDeferredValue(s,T)},W.useEffect=function(s,T){return R.H.useEffect(s,T)},W.useEffectEvent=function(s){return R.H.useEffectEvent(s)},W.useId=function(){return R.H.useId()},W.useImperativeHandle=function(s,T,U){return R.H.useImperativeHandle(s,T,U)},W.useInsertionEffect=function(s,T){return R.H.useInsertionEffect(s,T)},W.useLayoutEffect=function(s,T){return R.H.useLayoutEffect(s,T)},W.useMemo=function(s,T){return R.H.useMemo(s,T)},W.useOptimistic=function(s,T){return R.H.useOptimistic(s,T)},W.useReducer=function(s,T,U){return R.H.useReducer(s,T,U)},W.useRef=function(s){return R.H.useRef(s)},W.useState=function(s){return R.H.useState(s)},W.useSyncExternalStore=function(s,T,U){return R.H.useSyncExternalStore(s,T,U)},W.useTransition=function(){return R.H.useTransition()},W.version="19.2.3",W}var vd;function mf(){return vd||(vd=1,cf.exports=th()),cf.exports}var ue=mf();const Od=Dd(ue);var ff={exports:{}},Sn={},rf={exports:{}},of={};var xd;function lh(){return xd||(xd=1,(function(v){function C(S,M){var J=S.length;S.push(M);e:for(;0<J;){var he=J-1>>>1,pe=S[he];if(0<A(pe,M))S[he]=M,S[J]=pe,J=he;else break e}}function _(S){return S.length===0?null:S[0]}function d(S){if(S.length===0)return null;var M=S[0],J=S.pop();if(J!==M){S[0]=J;e:for(var he=0,pe=S.length,s=pe>>>1;he<s;){var T=2*(he+1)-1,U=S[T],w=T+1,$=S[w];if(0>A(U,J))w<pe&&0>A($,U)?(S[he]=$,S[w]=J,he=w):(S[he]=U,S[T]=J,he=T);else if(w<pe&&0>A($,J))S[he]=$,S[w]=J,he=w;else break e}}return M}function A(S,M){var J=S.sortIndex-M.sortIndex;return J!==0?J:S.id-M.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var N=performance;v.unstable_now=function(){return N.now()}}else{var Q=Date,Z=Q.now();v.unstable_now=function(){return Q.now()-Z}}var D=[],p=[],O=1,E=null,H=3,K=!1,X=!1,F=!1,Me=!1,xe=typeof setTimeout=="function"?setTimeout:null,Ke=typeof clearTimeout=="function"?clearTimeout:null,Ae=typeof setImmediate<"u"?setImmediate:null;function qe(S){for(var M=_(p);M!==null;){if(M.callback===null)d(p);else if(M.startTime<=S)d(p),M.sortIndex=M.expirationTime,C(D,M);else break;M=_(p)}}function Fe(S){if(F=!1,qe(S),!X)if(_(D)!==null)X=!0,V||(V=!0,Be());else{var M=_(p);M!==null&&Tt(Fe,M.startTime-S)}}var V=!1,R=-1,k=5,Y=-1;function oe(){return Me?!0:!(v.unstable_now()-Y<k)}function Ne(){if(Me=!1,V){var S=v.unstable_now();Y=S;var M=!0;try{e:{X=!1,F&&(F=!1,Ke(R),R=-1),K=!0;var J=H;try{t:{for(qe(S),E=_(D);E!==null&&!(E.expirationTime>S&&oe());){var he=E.callback;if(typeof he=="function"){E.callback=null,H=E.priorityLevel;var pe=he(E.expirationTime<=S);if(S=v.unstable_now(),typeof pe=="function"){E.callback=pe,qe(S),M=!0;break t}E===_(D)&&d(D),qe(S)}else d(D);E=_(D)}if(E!==null)M=!0;else{var s=_(p);s!==null&&Tt(Fe,s.startTime-S),M=!1}}break e}finally{E=null,H=J,K=!1}M=void 0}}finally{M?Be():V=!1}}}var Be;if(typeof Ae=="function")Be=function(){Ae(Ne)};else if(typeof MessageChannel<"u"){var zl=new MessageChannel,Ut=zl.port2;zl.port1.onmessage=Ne,Be=function(){Ut.postMessage(null)}}else Be=function(){xe(Ne,0)};function Tt(S,M){R=xe(function(){S(v.unstable_now())},M)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(S){S.callback=null},v.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<S?Math.floor(1e3/S):5},v.unstable_getCurrentPriorityLevel=function(){return H},v.unstable_next=function(S){switch(H){case 1:case 2:case 3:var M=3;break;default:M=H}var J=H;H=M;try{return S()}finally{H=J}},v.unstable_requestPaint=function(){Me=!0},v.unstable_runWithPriority=function(S,M){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var J=H;H=S;try{return M()}finally{H=J}},v.unstable_scheduleCallback=function(S,M,J){var he=v.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?he+J:he):J=he,S){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=J+pe,S={id:O++,callback:M,priorityLevel:S,startTime:J,expirationTime:pe,sortIndex:-1},J>he?(S.sortIndex=J,C(p,S),_(D)===null&&S===_(p)&&(F?(Ke(R),R=-1):F=!0,Tt(Fe,J-he))):(S.sortIndex=pe,C(D,S),X||K||(X=!0,V||(V=!0,Be()))),S},v.unstable_shouldYield=oe,v.unstable_wrapCallback=function(S){var M=H;return function(){var J=H;H=M;try{return S.apply(this,arguments)}finally{H=J}}}})(of)),of}var Sd;function ah(){return Sd||(Sd=1,rf.exports=lh()),rf.exports}var sf={exports:{}},Je={};var zd;function nh(){if(zd)return Je;zd=1;var v=mf();function C(D){var p="https://react.dev/errors/"+D;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)p+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+D+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(){}var d={d:{f:_,r:function(){throw Error(C(522))},D:_,C:_,L:_,m:_,X:_,S:_,M:_},p:0,findDOMNode:null},A=Symbol.for("react.portal");function N(D,p,O){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:E==null?null:""+E,children:D,containerInfo:p,implementation:O}}var Q=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Z(D,p){if(D==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Je.createPortal=function(D,p){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(C(299));return N(D,p,null,O)},Je.flushSync=function(D){var p=Q.T,O=d.p;try{if(Q.T=null,d.p=2,D)return D()}finally{Q.T=p,d.p=O,d.d.f()}},Je.preconnect=function(D,p){typeof D=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,d.d.C(D,p))},Je.prefetchDNS=function(D){typeof D=="string"&&d.d.D(D)},Je.preinit=function(D,p){if(typeof D=="string"&&p&&typeof p.as=="string"){var O=p.as,E=Z(O,p.crossOrigin),H=typeof p.integrity=="string"?p.integrity:void 0,K=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;O==="style"?d.d.S(D,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:H,fetchPriority:K}):O==="script"&&d.d.X(D,{crossOrigin:E,integrity:H,fetchPriority:K,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Je.preinitModule=function(D,p){if(typeof D=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var O=Z(p.as,p.crossOrigin);d.d.M(D,{crossOrigin:O,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&d.d.M(D)},Je.preload=function(D,p){if(typeof D=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var O=p.as,E=Z(O,p.crossOrigin);d.d.L(D,O,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Je.preloadModule=function(D,p){if(typeof D=="string")if(p){var O=Z(p.as,p.crossOrigin);d.d.m(D,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:O,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else d.d.m(D)},Je.requestFormReset=function(D){d.d.r(D)},Je.unstable_batchedUpdates=function(D,p){return D(p)},Je.useFormState=function(D,p,O){return Q.H.useFormState(D,p,O)},Je.useFormStatus=function(){return Q.H.useHostTransitionStatus()},Je.version="19.2.3",Je}var jd;function ih(){if(jd)return sf.exports;jd=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(C){console.error(C)}}return v(),sf.exports=nh(),sf.exports}var Td;function uh(){if(Td)return Sn;Td=1;var v=ah(),C=mf(),_=ih();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function N(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function Q(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Z(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(N(e)!==e)throw Error(d(188))}function p(e){var t=e.alternate;if(!t){if(t=N(e),t===null)throw Error(d(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return D(n),e;if(i===a)return D(n),t;i=i.sibling}throw Error(d(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(d(189))}}if(l.alternate!==a)throw Error(d(190))}if(l.tag!==3)throw Error(d(188));return l.stateNode.current===l?e:t}function O(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=O(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,H=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Me=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),Ke=Symbol.for("react.consumer"),Ae=Symbol.for("react.context"),qe=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),oe=Symbol.for("react.memo_cache_sentinel"),Ne=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=Ne&&e[Ne]||e["@@iterator"],typeof e=="function"?e:null)}var zl=Symbol.for("react.client.reference");function Ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case xe:return"Profiler";case Me:return"StrictMode";case Fe:return"Suspense";case V:return"SuspenseList";case Y:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case Ae:return e.displayName||"Context";case Ke:return(e._context.displayName||"Context")+".Consumer";case qe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return t=e.displayName||null,t!==null?t:Ut(e.type)||"Memo";case k:t=e._payload,e=e._init;try{return Ut(e(t))}catch{}}return null}var Tt=Array.isArray,S=C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},he=[],pe=-1;function s(e){return{current:e}}function T(e){0>pe||(e.current=he[pe],he[pe]=null,pe--)}function U(e,t){pe++,he[pe]=e.current,e.current=t}var w=s(null),$=s(null),ee=s(null),se=s(null);function ke(e,t){switch(U(ee,t),U($,e),U(w,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ys(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ys(t),e=Gs(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(w),U(w,e)}function De(){T(w),T($),T(ee)}function Aa(e){e.memoizedState!==null&&U(se,e);var t=w.current,l=Gs(t,e.type);t!==l&&(U($,e),U(w,l))}function zn(e){$.current===e&&(T(w),T($)),se.current===e&&(T(se),yn._currentValue=J)}var Xi,hf;function jl(e){if(Xi===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Xi=t&&t[1]||"",hf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+e+hf}var Qi=!1;function Zi(e,t){if(!e||Qi)return"";Qi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(b){var y=b}Reflect.construct(e,[],j)}else{try{j.call()}catch(b){y=b}e.call(j.prototype)}}else{try{throw Error()}catch(b){y=b}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var r=u.split(`
`),g=c.split(`
`);for(n=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(a===r.length||n===g.length)for(a=r.length-1,n=g.length-1;1<=a&&0<=n&&r[a]!==g[n];)n--;for(;1<=a&&0<=n;a--,n--)if(r[a]!==g[n]){if(a!==1||n!==1)do if(a--,n--,0>n||r[a]!==g[n]){var x=`
`+r[a].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=a&&0<=n);break}}}finally{Qi=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?jl(l):""}function _d(e,t){switch(e.tag){case 26:case 27:case 5:return jl(e.type);case 16:return jl("Lazy");case 13:return e.child!==t&&t!==null?jl("Suspense Fallback"):jl("Suspense");case 19:return jl("SuspenseList");case 0:case 15:return Zi(e.type,!1);case 11:return Zi(e.type.render,!1);case 1:return Zi(e.type,!0);case 31:return jl("Activity");default:return""}}function gf(e){try{var t="",l=null;do t+=_d(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Li=Object.prototype.hasOwnProperty,Vi=v.unstable_scheduleCallback,Ji=v.unstable_cancelCallback,Md=v.unstable_shouldYield,Ud=v.unstable_requestPaint,nt=v.unstable_now,Cd=v.unstable_getCurrentPriorityLevel,yf=v.unstable_ImmediatePriority,bf=v.unstable_UserBlockingPriority,jn=v.unstable_NormalPriority,Hd=v.unstable_LowPriority,pf=v.unstable_IdlePriority,Rd=v.log,Bd=v.unstable_setDisableYieldValue,Na=null,it=null;function $t(e){if(typeof Rd=="function"&&Bd(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Na,e)}catch{}}var ut=Math.clz32?Math.clz32:Yd,wd=Math.log,qd=Math.LN2;function Yd(e){return e>>>=0,e===0?32:31-(wd(e)/qd|0)|0}var Tn=256,En=262144,An=4194304;function Tl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=Tl(a):(u&=c,u!==0?n=Tl(u):l||(l=c&~e,l!==0&&(n=Tl(l))))):(c=a&~i,c!==0?n=Tl(c):u!==0?n=Tl(u):l||(l=a&~e,l!==0&&(n=Tl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Da(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vf(){var e=An;return An<<=1,(An&62914560)===0&&(An=4194304),e}function Ki(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Oa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xd(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,r=e.expirationTimes,g=e.hiddenUpdates;for(l=u&~l;0<l;){var x=31-ut(l),j=1<<x;c[x]=0,r[x]=-1;var y=g[x];if(y!==null)for(g[x]=null,x=0;x<y.length;x++){var b=y[x];b!==null&&(b.lane&=-536870913)}l&=~j}a!==0&&xf(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function xf(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ut(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Sf(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-ut(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function zf(e,t){var l=t&-t;return l=(l&42)!==0?1:ki(l),(l&(e.suspendedLanes|t))!==0?0:l}function ki(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jf(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:rd(e.type))}function Tf(e,t){var l=M.p;try{return M.p=e,t()}finally{M.p=l}}var It=Math.random().toString(36).slice(2),Xe="__reactFiber$"+It,$e="__reactProps$"+It,Ql="__reactContainer$"+It,Fi="__reactEvents$"+It,Qd="__reactListeners$"+It,Zd="__reactHandles$"+It,Ef="__reactResources$"+It,_a="__reactMarker$"+It;function $i(e){delete e[Xe],delete e[$e],delete e[Fi],delete e[Qd],delete e[Zd]}function Zl(e){var t=e[Xe];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ql]||l[Xe]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Ks(e);e!==null;){if(l=e[Xe])return l;e=Ks(e)}return t}e=l,l=e.parentNode}return null}function Ll(e){if(e=e[Xe]||e[Ql]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ma(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Vl(e){var t=e[Ef];return t||(t=e[Ef]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[_a]=!0}var Af=new Set,Nf={};function El(e,t){Jl(e,t),Jl(e+"Capture",t)}function Jl(e,t){for(Nf[e]=t,e=0;e<t.length;e++)Af.add(t[e])}var Ld=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Df={},Of={};function Vd(e){return Li.call(Of,e)?!0:Li.call(Df,e)?!1:Ld.test(e)?Of[e]=!0:(Df[e]=!0,!1)}function Dn(e,t,l){if(Vd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function On(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Ct(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){if(!e._valueTracker){var t=_f(e)?"checked":"value";e._valueTracker=Jd(e,t,""+e[t])}}function Mf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=_f(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kd=/[\n"\\]/g;function gt(e){return e.replace(Kd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Pi(e,t,l,a,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ht(t)):e.value!==""+ht(t)&&(e.value=""+ht(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?eu(e,u,ht(t)):l!=null?eu(e,u,ht(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ht(c):e.removeAttribute("name")}function Uf(e,t,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ii(e);return}l=l!=null?""+ht(l):"",t=t!=null?""+ht(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Ii(e)}function eu(e,t,l){t==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Kl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+ht(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Cf(e,t,l){if(t!=null&&(t=""+ht(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+ht(l):""}function Hf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(d(92));if(Tt(a)){if(1<a.length)throw Error(d(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=ht(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Ii(e)}function kl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var kd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rf(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||kd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Bf(e,t,l){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Rf(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Rf(e,i,t[i])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mn(e){return Fd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ht(){}var lu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,Fl=null;function wf(e){var t=Ll(e);if(t&&(e=t.stateNode)){var l=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(Pi(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[$e]||null;if(!n)throw Error(d(90));Pi(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Mf(a)}break e;case"textarea":Cf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Kl(e,!!l.multiple,t,!1)}}}var nu=!1;function qf(e,t,l){if(nu)return e(t,l);nu=!0;try{var a=e(t);return a}finally{if(nu=!1,(Wl!==null||Fl!==null)&&(pi(),Wl&&(t=Wl,e=Fl,Fl=Wl=null,wf(t),e)))for(t=0;t<e.length;t++)wf(e[t])}}function Ua(e,t){var l=e.stateNode;if(l===null)return null;var a=l[$e]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(d(231,t,typeof l));return l}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(Rt)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{iu=!1}var Pt=null,uu=null,Un=null;function Yf(){if(Un)return Un;var e,t=uu,l=t.length,a,n="value"in Pt?Pt.value:Pt.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return Un=n.slice(e,1<a?1-a:void 0)}function Cn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function Gf(){return!1}function Ie(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hn:Gf,this.isPropagationStopped=Gf,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=Ie(Al),Ha=E({},Al,{view:0,detail:0}),$d=Ie(Ha),cu,fu,Ra,Bn=E({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ra&&(Ra&&e.type==="mousemove"?(cu=e.screenX-Ra.screenX,fu=e.screenY-Ra.screenY):fu=cu=0,Ra=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:fu}}),Xf=Ie(Bn),Id=E({},Bn,{dataTransfer:0}),Pd=Ie(Id),em=E({},Ha,{relatedTarget:0}),ru=Ie(em),tm=E({},Al,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=Ie(tm),am=E({},Al,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nm=Ie(am),im=E({},Al,{data:0}),Qf=Ie(im),um={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fm[e])?!!t[e]:!1}function ou(){return rm}var om=E({},Ha,{key:function(e){if(e.key){var t=um[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?Cn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sm=Ie(om),dm=E({},Bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=Ie(dm),mm=E({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),hm=Ie(mm),gm=E({},Al,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=Ie(gm),bm=E({},Bn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pm=Ie(bm),vm=E({},Al,{newState:0,oldState:0}),xm=Ie(vm),Sm=[9,13,27,32],su=Rt&&"CompositionEvent"in window,Ba=null;Rt&&"documentMode"in document&&(Ba=document.documentMode);var zm=Rt&&"TextEvent"in window&&!Ba,Lf=Rt&&(!su||Ba&&8<Ba&&11>=Ba),Vf=" ",Jf=!1;function Kf(e,t){switch(e){case"keyup":return Sm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $l=!1;function jm(e,t){switch(e){case"compositionend":return kf(t);case"keypress":return t.which!==32?null:(Jf=!0,Vf);case"textInput":return e=t.data,e===Vf&&Jf?null:e;default:return null}}function Tm(e,t){if($l)return e==="compositionend"||!su&&Kf(e,t)?(e=Yf(),Un=uu=Pt=null,$l=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lf&&t.locale!=="ko"?null:t.data;default:return null}}var Em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Em[e.type]:t==="textarea"}function Ff(e,t,l,a){Wl?Fl?Fl.push(a):Fl=[a]:Wl=a,t=Ei(t,"onChange"),0<t.length&&(l=new Rn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var wa=null,qa=null;function Am(e){Cs(e,0)}function wn(e){var t=Ma(e);if(Mf(t))return e}function $f(e,t){if(e==="change")return t}var If=!1;if(Rt){var du;if(Rt){var mu="oninput"in document;if(!mu){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),mu=typeof Pf.oninput=="function"}du=mu}else du=!1;If=du&&(!document.documentMode||9<document.documentMode)}function er(){wa&&(wa.detachEvent("onpropertychange",tr),qa=wa=null)}function tr(e){if(e.propertyName==="value"&&wn(qa)){var t=[];Ff(t,qa,e,au(e)),qf(Am,t)}}function Nm(e,t,l){e==="focusin"?(er(),wa=t,qa=l,wa.attachEvent("onpropertychange",tr)):e==="focusout"&&er()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wn(qa)}function Om(e,t){if(e==="click")return wn(t)}function _m(e,t){if(e==="input"||e==="change")return wn(t)}function Mm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Mm;function Ya(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Li.call(t,n)||!ct(e[n],t[n]))return!1}return!0}function lr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ar(e,t){var l=lr(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=lr(l)}}function nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_n(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=_n(e.document)}return t}function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Um=Rt&&"documentMode"in document&&11>=document.documentMode,Il=null,gu=null,Ga=null,yu=!1;function ur(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;yu||Il==null||Il!==_n(a)||(a=Il,"selectionStart"in a&&hu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ga&&Ya(Ga,a)||(Ga=a,a=Ei(gu,"onSelect"),0<a.length&&(t=new Rn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Il)))}function Nl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Pl={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionrun:Nl("Transition","TransitionRun"),transitionstart:Nl("Transition","TransitionStart"),transitioncancel:Nl("Transition","TransitionCancel"),transitionend:Nl("Transition","TransitionEnd")},bu={},cr={};Rt&&(cr=document.createElement("div").style,"AnimationEvent"in window||(delete Pl.animationend.animation,delete Pl.animationiteration.animation,delete Pl.animationstart.animation),"TransitionEvent"in window||delete Pl.transitionend.transition);function Dl(e){if(bu[e])return bu[e];if(!Pl[e])return e;var t=Pl[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in cr)return bu[e]=t[l];return e}var fr=Dl("animationend"),rr=Dl("animationiteration"),or=Dl("animationstart"),Cm=Dl("transitionrun"),Hm=Dl("transitionstart"),Rm=Dl("transitioncancel"),sr=Dl("transitionend"),dr=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function Et(e,t){dr.set(e,t),El(t,[e])}var qn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],ea=0,vu=0;function Yn(){for(var e=ea,t=vu=ea=0;t<e;){var l=yt[t];yt[t++]=null;var a=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var i=yt[t];if(yt[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&mr(l,n,i)}}function Gn(e,t,l,a){yt[ea++]=e,yt[ea++]=t,yt[ea++]=l,yt[ea++]=a,vu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function xu(e,t,l,a){return Gn(e,t,l,a),Xn(e)}function Ol(e,t){return Gn(e,null,null,t),Xn(e)}function mr(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ut(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Xn(e){if(50<rn)throw rn=0,Oc=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ta={};function Bm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,l,a){return new Bm(e,t,l,a)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bt(e,t){var l=e.alternate;return l===null?(l=ft(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function hr(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qn(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")Su(e)&&(u=1);else if(typeof e=="string")u=X0(e,l,w.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Y:return e=ft(31,l,t,n),e.elementType=Y,e.lanes=i,e;case F:return _l(l.children,n,i,t);case Me:u=8,n|=24;break;case xe:return e=ft(12,l,t,n|2),e.elementType=xe,e.lanes=i,e;case Fe:return e=ft(13,l,t,n),e.elementType=Fe,e.lanes=i,e;case V:return e=ft(19,l,t,n),e.elementType=V,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ae:u=10;break e;case Ke:u=9;break e;case qe:u=11;break e;case R:u=14;break e;case k:u=16,a=null;break e}u=29,l=Error(d(130,e===null?"null":typeof e,"")),a=null}return t=ft(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function _l(e,t,l,a){return e=ft(7,e,a,t),e.lanes=l,e}function zu(e,t,l){return e=ft(6,e,null,t),e.lanes=l,e}function gr(e){var t=ft(18,null,null,0);return t.stateNode=e,t}function ju(e,t,l){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yr=new WeakMap;function bt(e,t){if(typeof e=="object"&&e!==null){var l=yr.get(e);return l!==void 0?l:(t={value:e,source:t,stack:gf(t)},yr.set(e,t),t)}return{value:e,source:t,stack:gf(t)}}var la=[],aa=0,Zn=null,Xa=0,pt=[],vt=0,el=null,Dt=1,Ot="";function wt(e,t){la[aa++]=Xa,la[aa++]=Zn,Zn=e,Xa=t}function br(e,t,l){pt[vt++]=Dt,pt[vt++]=Ot,pt[vt++]=el,el=e;var a=Dt;e=Ot;var n=32-ut(a)-1;a&=~(1<<n),l+=1;var i=32-ut(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Dt=1<<32-ut(t)+n|l<<n|a,Ot=i+e}else Dt=1<<i|l<<n|a,Ot=e}function Tu(e){e.return!==null&&(wt(e,1),br(e,1,0))}function Eu(e){for(;e===Zn;)Zn=la[--aa],la[aa]=null,Xa=la[--aa],la[aa]=null;for(;e===el;)el=pt[--vt],pt[vt]=null,Ot=pt[--vt],pt[vt]=null,Dt=pt[--vt],pt[vt]=null}function pr(e,t){pt[vt++]=Dt,pt[vt++]=Ot,pt[vt++]=el,Dt=t.id,Ot=t.overflow,el=e}var Qe=null,Se=null,ie=!1,tl=null,xt=!1,Au=Error(d(519));function ll(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qa(bt(t,e)),Au}function vr(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Xe]=e,t[$e]=a,l){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(l=0;l<sn.length;l++)le(sn[l],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),Uf(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),Hf(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||ws(t.textContent,l)?(a.popover!=null&&(le("beforetoggle",t),le("toggle",t)),a.onScroll!=null&&le("scroll",t),a.onScrollEnd!=null&&le("scrollend",t),a.onClick!=null&&(t.onclick=Ht),t=!0):t=!1,t||ll(e,!0)}function xr(e){for(Qe=e.return;Qe;)switch(Qe.tag){case 5:case 31:case 13:xt=!1;return;case 27:case 3:xt=!0;return;default:Qe=Qe.return}}function na(e){if(e!==Qe)return!1;if(!ie)return xr(e),ie=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Lc(e.type,e.memoizedProps)),l=!l),l&&Se&&ll(e),xr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Se=Js(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Se=Js(e)}else t===27?(t=Se,yl(e.type)?(e=Wc,Wc=null,Se=e):Se=t):Se=Qe?zt(e.stateNode.nextSibling):null;return!0}function Ml(){Se=Qe=null,ie=!1}function Nu(){var e=tl;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),tl=null),e}function Qa(e){tl===null?tl=[e]:tl.push(e)}var Du=s(null),Ul=null,qt=null;function al(e,t,l){U(Du,t._currentValue),t._currentValue=l}function Yt(e){e._currentValue=Du.current,T(Du)}function Ou(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function _u(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var r=0;r<t.length;r++)if(c.context===t[r]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Ou(i.return,l,e),a||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(d(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),Ou(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ia(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var c=n.type;ct(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===se.current){if(u=n.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(yn):e=[yn])}n=n.return}e!==null&&_u(t,e,l,a),t.flags|=262144}function Ln(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cl(e){Ul=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Sr(Ul,e)}function Vn(e,t){return Ul===null&&Cl(e),Sr(e,t)}function Sr(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},qt===null){if(e===null)throw Error(d(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return l}var wm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},qm=v.unstable_scheduleCallback,Ym=v.unstable_NormalPriority,Ue={$$typeof:Ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new wm,data:new Map,refCount:0}}function Za(e){e.refCount--,e.refCount===0&&qm(Ym,function(){e.controller.abort()})}var La=null,Uu=0,ua=0,ca=null;function Gm(e,t){if(La===null){var l=La=[];Uu=0,ua=Rc(),ca={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Uu++,t.then(zr,zr),t}function zr(){if(--Uu===0&&La!==null){ca!==null&&(ca.status="fulfilled");var e=La;La=null,ua=0,ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var jr=S.S;S.S=function(e,t){cs=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gm(e,t),jr!==null&&jr(e,t)};var Hl=s(null);function Cu(){var e=Hl.current;return e!==null?e:ve.pooledCache}function Jn(e,t){t===null?U(Hl,Hl.current):U(Hl,t.pool)}function Tr(){var e=Cu();return e===null?null:{parent:Ue._currentValue,pool:e}}var fa=Error(d(460)),Hu=Error(d(474)),Kn=Error(d(542)),kn={then:function(){}};function Er(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ar(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Ht,Ht),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dr(e),e;default:if(typeof t.status=="string")t.then(Ht,Ht);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dr(e),e}throw Bl=t,fa}}function Rl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Bl=l,fa):l}}var Bl=null;function Nr(){if(Bl===null)throw Error(d(459));var e=Bl;return Bl=null,e}function Dr(e){if(e===fa||e===Kn)throw Error(d(483))}var ra=null,Va=0;function Wn(e){var t=Va;return Va+=1,ra===null&&(ra=[]),Ar(ra,e,t)}function Ja(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fn(e,t){throw t.$$typeof===H?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Or(e){function t(m,o){if(e){var h=m.deletions;h===null?(m.deletions=[o],m.flags|=16):h.push(o)}}function l(m,o){if(!e)return null;for(;o!==null;)t(m,o),o=o.sibling;return null}function a(m){for(var o=new Map;m!==null;)m.key!==null?o.set(m.key,m):o.set(m.index,m),m=m.sibling;return o}function n(m,o){return m=Bt(m,o),m.index=0,m.sibling=null,m}function i(m,o,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<o?(m.flags|=67108866,o):h):(m.flags|=67108866,o)):(m.flags|=1048576,o)}function u(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function c(m,o,h,z){return o===null||o.tag!==6?(o=zu(h,m.mode,z),o.return=m,o):(o=n(o,h),o.return=m,o)}function r(m,o,h,z){var G=h.type;return G===F?x(m,o,h.props.children,z,h.key):o!==null&&(o.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===k&&Rl(G)===o.type)?(o=n(o,h.props),Ja(o,h),o.return=m,o):(o=Qn(h.type,h.key,h.props,null,m.mode,z),Ja(o,h),o.return=m,o)}function g(m,o,h,z){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=ju(h,m.mode,z),o.return=m,o):(o=n(o,h.children||[]),o.return=m,o)}function x(m,o,h,z,G){return o===null||o.tag!==7?(o=_l(h,m.mode,z,G),o.return=m,o):(o=n(o,h),o.return=m,o)}function j(m,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=zu(""+o,m.mode,h),o.return=m,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case K:return h=Qn(o.type,o.key,o.props,null,m.mode,h),Ja(h,o),h.return=m,h;case X:return o=ju(o,m.mode,h),o.return=m,o;case k:return o=Rl(o),j(m,o,h)}if(Tt(o)||Be(o))return o=_l(o,m.mode,h,null),o.return=m,o;if(typeof o.then=="function")return j(m,Wn(o),h);if(o.$$typeof===Ae)return j(m,Vn(m,o),h);Fn(m,o)}return null}function y(m,o,h,z){var G=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return G!==null?null:c(m,o,""+h,z);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case K:return h.key===G?r(m,o,h,z):null;case X:return h.key===G?g(m,o,h,z):null;case k:return h=Rl(h),y(m,o,h,z)}if(Tt(h)||Be(h))return G!==null?null:x(m,o,h,z,null);if(typeof h.then=="function")return y(m,o,Wn(h),z);if(h.$$typeof===Ae)return y(m,o,Vn(m,h),z);Fn(m,h)}return null}function b(m,o,h,z,G){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return m=m.get(h)||null,c(o,m,""+z,G);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case K:return m=m.get(z.key===null?h:z.key)||null,r(o,m,z,G);case X:return m=m.get(z.key===null?h:z.key)||null,g(o,m,z,G);case k:return z=Rl(z),b(m,o,h,z,G)}if(Tt(z)||Be(z))return m=m.get(h)||null,x(o,m,z,G,null);if(typeof z.then=="function")return b(m,o,h,Wn(z),G);if(z.$$typeof===Ae)return b(m,o,h,Vn(o,z),G);Fn(o,z)}return null}function B(m,o,h,z){for(var G=null,ce=null,q=o,P=o=0,ne=null;q!==null&&P<h.length;P++){q.index>P?(ne=q,q=null):ne=q.sibling;var fe=y(m,q,h[P],z);if(fe===null){q===null&&(q=ne);break}e&&q&&fe.alternate===null&&t(m,q),o=i(fe,o,P),ce===null?G=fe:ce.sibling=fe,ce=fe,q=ne}if(P===h.length)return l(m,q),ie&&wt(m,P),G;if(q===null){for(;P<h.length;P++)q=j(m,h[P],z),q!==null&&(o=i(q,o,P),ce===null?G=q:ce.sibling=q,ce=q);return ie&&wt(m,P),G}for(q=a(q);P<h.length;P++)ne=b(q,m,P,h[P],z),ne!==null&&(e&&ne.alternate!==null&&q.delete(ne.key===null?P:ne.key),o=i(ne,o,P),ce===null?G=ne:ce.sibling=ne,ce=ne);return e&&q.forEach(function(Sl){return t(m,Sl)}),ie&&wt(m,P),G}function L(m,o,h,z){if(h==null)throw Error(d(151));for(var G=null,ce=null,q=o,P=o=0,ne=null,fe=h.next();q!==null&&!fe.done;P++,fe=h.next()){q.index>P?(ne=q,q=null):ne=q.sibling;var Sl=y(m,q,fe.value,z);if(Sl===null){q===null&&(q=ne);break}e&&q&&Sl.alternate===null&&t(m,q),o=i(Sl,o,P),ce===null?G=Sl:ce.sibling=Sl,ce=Sl,q=ne}if(fe.done)return l(m,q),ie&&wt(m,P),G;if(q===null){for(;!fe.done;P++,fe=h.next())fe=j(m,fe.value,z),fe!==null&&(o=i(fe,o,P),ce===null?G=fe:ce.sibling=fe,ce=fe);return ie&&wt(m,P),G}for(q=a(q);!fe.done;P++,fe=h.next())fe=b(q,m,P,fe.value,z),fe!==null&&(e&&fe.alternate!==null&&q.delete(fe.key===null?P:fe.key),o=i(fe,o,P),ce===null?G=fe:ce.sibling=fe,ce=fe);return e&&q.forEach(function(I0){return t(m,I0)}),ie&&wt(m,P),G}function be(m,o,h,z){if(typeof h=="object"&&h!==null&&h.type===F&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case K:e:{for(var G=h.key;o!==null;){if(o.key===G){if(G=h.type,G===F){if(o.tag===7){l(m,o.sibling),z=n(o,h.props.children),z.return=m,m=z;break e}}else if(o.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===k&&Rl(G)===o.type){l(m,o.sibling),z=n(o,h.props),Ja(z,h),z.return=m,m=z;break e}l(m,o);break}else t(m,o);o=o.sibling}h.type===F?(z=_l(h.props.children,m.mode,z,h.key),z.return=m,m=z):(z=Qn(h.type,h.key,h.props,null,m.mode,z),Ja(z,h),z.return=m,m=z)}return u(m);case X:e:{for(G=h.key;o!==null;){if(o.key===G)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){l(m,o.sibling),z=n(o,h.children||[]),z.return=m,m=z;break e}else{l(m,o);break}else t(m,o);o=o.sibling}z=ju(h,m.mode,z),z.return=m,m=z}return u(m);case k:return h=Rl(h),be(m,o,h,z)}if(Tt(h))return B(m,o,h,z);if(Be(h)){if(G=Be(h),typeof G!="function")throw Error(d(150));return h=G.call(h),L(m,o,h,z)}if(typeof h.then=="function")return be(m,o,Wn(h),z);if(h.$$typeof===Ae)return be(m,o,Vn(m,h),z);Fn(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(l(m,o.sibling),z=n(o,h),z.return=m,m=z):(l(m,o),z=zu(h,m.mode,z),z.return=m,m=z),u(m)):l(m,o)}return function(m,o,h,z){try{Va=0;var G=be(m,o,h,z);return ra=null,G}catch(q){if(q===fa||q===Kn)throw q;var ce=ft(29,q,null,m.mode);return ce.lanes=z,ce.return=m,ce}}}var wl=Or(!0),_r=Or(!1),nl=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function il(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ul(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(re&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Xn(e),mr(e,null,l),t}return Gn(e,a,t,l),Xn(e)}function Ka(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Sf(e,l)}}function wu(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var qu=!1;function ka(){if(qu){var e=ca;if(e!==null)throw e}}function Wa(e,t,l,a){qu=!1;var n=e.updateQueue;nl=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var r=c,g=r.next;r.next=null,u===null?i=g:u.next=g,u=r;var x=e.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==u&&(c===null?x.firstBaseUpdate=g:c.next=g,x.lastBaseUpdate=r))}if(i!==null){var j=n.baseState;u=0,x=g=r=null,c=i;do{var y=c.lane&-536870913,b=y!==c.lane;if(b?(ae&y)===y:(a&y)===y){y!==0&&y===ua&&(qu=!0),x!==null&&(x=x.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var B=e,L=c;y=t;var be=l;switch(L.tag){case 1:if(B=L.payload,typeof B=="function"){j=B.call(be,j,y);break e}j=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=L.payload,y=typeof B=="function"?B.call(be,j,y):B,y==null)break e;j=E({},j,y);break e;case 2:nl=!0}}y=c.callback,y!==null&&(e.flags|=64,b&&(e.flags|=8192),b=n.callbacks,b===null?n.callbacks=[y]:b.push(y))}else b={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(g=x=b,r=j):x=x.next=b,u|=y;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;b=c,c=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);x===null&&(r=j),n.baseState=r,n.firstBaseUpdate=g,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),sl|=u,e.lanes=u,e.memoizedState=j}}function Mr(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Ur(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Mr(l[e],t)}var oa=s(null),$n=s(0);function Cr(e,t){e=kt,U($n,e),U(oa,t),kt=e|t.baseLanes}function Yu(){U($n,kt),U(oa,oa.current)}function Gu(){kt=$n.current,T(oa),T($n)}var rt=s(null),St=null;function cl(e){var t=e.alternate;U(Oe,Oe.current&1),U(rt,e),St===null&&(t===null||oa.current!==null||t.memoizedState!==null)&&(St=e)}function Xu(e){U(Oe,Oe.current),U(rt,e),St===null&&(St=e)}function Hr(e){e.tag===22?(U(Oe,Oe.current),U(rt,e),St===null&&(St=e)):fl()}function fl(){U(Oe,Oe.current),U(rt,rt.current)}function ot(e){T(rt),St===e&&(St=null),T(Oe)}var Oe=s(0);function In(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Kc(l)||kc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,I=null,ge=null,Ce=null,Pn=!1,sa=!1,ql=!1,ei=0,Fa=0,da=null,Qm=0;function Te(){throw Error(d(321))}function Qu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!ct(e[l],t[l]))return!1;return!0}function Zu(e,t,l,a,n,i){return Gt=i,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?po:nc,ql=!1,i=l(a,n),ql=!1,sa&&(i=Br(t,l,a,n)),Rr(e),i}function Rr(e){S.H=Pa;var t=ge!==null&&ge.next!==null;if(Gt=0,Ce=ge=I=null,Pn=!1,Fa=0,da=null,t)throw Error(d(300));e===null||He||(e=e.dependencies,e!==null&&Ln(e)&&(He=!0))}function Br(e,t,l,a){I=e;var n=0;do{if(sa&&(da=null),Fa=0,sa=!1,25<=n)throw Error(d(301));if(n+=1,Ce=ge=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}S.H=vo,i=t(l,a)}while(sa);return i}function Zm(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?$a(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(I.flags|=1024),t}function Lu(){var e=ei!==0;return ei=0,e}function Vu(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Ju(e){if(Pn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pn=!1}Gt=0,Ce=ge=I=null,sa=!1,Fa=ei=0,da=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?I.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function _e(){if(ge===null){var e=I.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=Ce===null?I.memoizedState:Ce.next;if(t!==null)Ce=t,ge=e;else{if(e===null)throw I.alternate===null?Error(d(467)):Error(d(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ce===null?I.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function ti(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $a(e){var t=Fa;return Fa+=1,da===null&&(da=[]),e=Ar(da,e,t),t=I,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?po:nc),e}function li(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $a(e);if(e.$$typeof===Ae)return Ze(e)}throw Error(d(438,String(e)))}function Ku(e){var t=null,l=I.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=I.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=ti(),I.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=oe;return t.index++,l}function Xt(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=_e();return ku(t,ge,e)}function ku(e,t,l){var a=e.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,r=null,g=t,x=!1;do{var j=g.lane&-536870913;if(j!==g.lane?(ae&j)===j:(Gt&j)===j){var y=g.revertLane;if(y===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),j===ua&&(x=!0);else if((Gt&y)===y){g=g.next,y===ua&&(x=!0);continue}else j={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(c=r=j,u=i):r=r.next=j,I.lanes|=y,sl|=y;j=g.action,ql&&l(i,j),i=g.hasEagerState?g.eagerState:l(i,j)}else y={lane:j,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(c=r=y,u=i):r=r.next=y,I.lanes|=j,sl|=j;g=g.next}while(g!==null&&g!==t);if(r===null?u=i:r.next=c,!ct(i,e.memoizedState)&&(He=!0,x&&(l=ca,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=r,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Wu(e){var t=_e(),l=t.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);ct(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function wr(e,t,l){var a=I,n=_e(),i=ie;if(i){if(l===void 0)throw Error(d(407));l=l()}else l=t();var u=!ct((ge||n).memoizedState,l);if(u&&(n.memoizedState=l,He=!0),n=n.queue,Iu(Gr.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||Ce!==null&&Ce.memoizedState.tag&1){if(a.flags|=2048,ma(9,{destroy:void 0},Yr.bind(null,a,n,l,t),null),ve===null)throw Error(d(349));i||(Gt&127)!==0||qr(a,t,l)}return l}function qr(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=I.updateQueue,t===null?(t=ti(),I.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Yr(e,t,l,a){t.value=l,t.getSnapshot=a,Xr(t)&&Qr(e)}function Gr(e,t,l){return l(function(){Xr(t)&&Qr(e)})}function Xr(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!ct(e,l)}catch{return!0}}function Qr(e){var t=Ol(e,2);t!==null&&at(t,e,2)}function Fu(e){var t=We();if(typeof e=="function"){var l=e;if(e=l(),ql){$t(!0);try{l()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Zr(e,t,l,a){return e.baseState=l,ku(e,ge,typeof a=="function"?a:Xt)}function Lm(e,t,l,a,n){if(ui(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};S.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Lr(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Lr(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=S.T,u={};S.T=u;try{var c=l(n,a),r=S.S;r!==null&&r(u,c),Vr(e,t,c)}catch(g){$u(e,t,g)}finally{i!==null&&u.types!==null&&(i.types=u.types),S.T=i}}else try{i=l(n,a),Vr(e,t,i)}catch(g){$u(e,t,g)}}function Vr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Jr(e,t,a)},function(a){return $u(e,t,a)}):Jr(e,t,l)}function Jr(e,t,l){t.status="fulfilled",t.value=l,Kr(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Lr(e,l)))}function $u(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Kr(t),t=t.next;while(t!==a)}e.action=null}function Kr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function kr(e,t){return t}function Wr(e,t){if(ie){var l=ve.formState;if(l!==null){e:{var a=I;if(ie){if(Se){t:{for(var n=Se,i=xt;n.nodeType!==8;){if(!i){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Se=zt(n.nextSibling),a=n.data==="F!";break e}}ll(a)}a=!1}a&&(t=l[0])}}return l=We(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:t},l.queue=a,l=go.bind(null,I,a),a.dispatch=l,a=Fu(!1),i=ac.bind(null,I,!1,a.queue),a=We(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Lm.bind(null,I,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Fr(e){var t=_e();return $r(t,ge,e)}function $r(e,t,l){if(t=ku(e,t,kr)[0],e=ai(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=$a(t)}catch(u){throw u===fa?Kn:u}else a=t;t=_e();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(I.flags|=2048,ma(9,{destroy:void 0},Vm.bind(null,n,l),null)),[a,i,e]}function Vm(e,t){e.action=t}function Ir(e){var t=_e(),l=ge;if(l!==null)return $r(t,l,e);_e(),t=t.memoizedState,l=_e();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ma(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=I.updateQueue,t===null&&(t=ti(),I.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Pr(){return _e().memoizedState}function ni(e,t,l,a){var n=We();I.flags|=e,n.memoizedState=ma(1|t,{destroy:void 0},l,a===void 0?null:a)}function ii(e,t,l,a){var n=_e();a=a===void 0?null:a;var i=n.memoizedState.inst;ge!==null&&a!==null&&Qu(a,ge.memoizedState.deps)?n.memoizedState=ma(t,i,l,a):(I.flags|=e,n.memoizedState=ma(1|t,i,l,a))}function eo(e,t){ni(8390656,8,e,t)}function Iu(e,t){ii(2048,8,e,t)}function Jm(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=ti(),I.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function to(e){var t=_e().memoizedState;return Jm({ref:t,nextImpl:e}),function(){if((re&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function lo(e,t){return ii(4,2,e,t)}function ao(e,t){return ii(4,4,e,t)}function no(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function io(e,t,l){l=l!=null?l.concat([e]):null,ii(4,4,no.bind(null,t,e),l)}function Pu(){}function uo(e,t){var l=_e();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Qu(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function co(e,t){var l=_e();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Qu(t,a[1]))return a[0];if(a=e(),ql){$t(!0);try{e()}finally{$t(!1)}}return l.memoizedState=[a,t],a}function ec(e,t,l){return l===void 0||(Gt&1073741824)!==0&&(ae&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=rs(),I.lanes|=e,sl|=e,l)}function fo(e,t,l,a){return ct(l,t)?l:oa.current!==null?(e=ec(e,l,a),ct(e,t)||(He=!0),e):(Gt&42)===0||(Gt&1073741824)!==0&&(ae&261930)===0?(He=!0,e.memoizedState=l):(e=rs(),I.lanes|=e,sl|=e,t)}function ro(e,t,l,a,n){var i=M.p;M.p=i!==0&&8>i?i:8;var u=S.T,c={};S.T=c,ac(e,!1,t,l);try{var r=n(),g=S.S;if(g!==null&&g(c,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var x=Xm(r,a);Ia(e,t,x,mt(e))}else Ia(e,t,a,mt(e))}catch(j){Ia(e,t,{then:function(){},status:"rejected",reason:j},mt())}finally{M.p=i,u!==null&&c.types!==null&&(u.types=c.types),S.T=u}}function Km(){}function tc(e,t,l,a){if(e.tag!==5)throw Error(d(476));var n=oo(e).queue;ro(e,n,t,J,l===null?Km:function(){return so(e),l(a)})}function oo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:J},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function so(e){var t=oo(e);t.next===null&&(t=e.alternate.memoizedState),Ia(e,t.next.queue,{},mt())}function lc(){return Ze(yn)}function mo(){return _e().memoizedState}function ho(){return _e().memoizedState}function km(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=mt();e=il(l);var a=ul(t,e,l);a!==null&&(at(a,t,l),Ka(a,t,l)),t={cache:Mu()},e.payload=t;return}t=t.return}}function Wm(e,t,l){var a=mt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ui(e)?yo(t,l):(l=xu(e,t,l,a),l!==null&&(at(l,e,a),bo(l,t,a)))}function go(e,t,l){var a=mt();Ia(e,t,l,a)}function Ia(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ui(e))yo(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,ct(c,u))return Gn(e,t,n,0),ve===null&&Yn(),!1}catch{}if(l=xu(e,t,n,a),l!==null)return at(l,e,a),bo(l,t,a),!0}return!1}function ac(e,t,l,a){if(a={lane:2,revertLane:Rc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ui(e)){if(t)throw Error(d(479))}else t=xu(e,l,a,2),t!==null&&at(t,e,2)}function ui(e){var t=e.alternate;return e===I||t!==null&&t===I}function yo(e,t){sa=Pn=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function bo(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Sf(e,l)}}var Pa={readContext:Ze,use:li,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useLayoutEffect:Te,useInsertionEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useSyncExternalStore:Te,useId:Te,useHostTransitionStatus:Te,useFormState:Te,useActionState:Te,useOptimistic:Te,useMemoCache:Te,useCacheRefresh:Te};Pa.useEffectEvent=Te;var po={readContext:Ze,use:li,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:eo,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,ni(4194308,4,no.bind(null,t,e),l)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){ni(4,2,e,t)},useMemo:function(e,t){var l=We();t=t===void 0?null:t;var a=e();if(ql){$t(!0);try{e()}finally{$t(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=We();if(l!==void 0){var n=l(t);if(ql){$t(!0);try{l(t)}finally{$t(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Wm.bind(null,I,e),[a.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=Fu(e);var t=e.queue,l=go.bind(null,I,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Pu,useDeferredValue:function(e,t){var l=We();return ec(l,e,t)},useTransition:function(){var e=Fu(!1);return e=ro.bind(null,I,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=I,n=We();if(ie){if(l===void 0)throw Error(d(407));l=l()}else{if(l=t(),ve===null)throw Error(d(349));(ae&127)!==0||qr(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,eo(Gr.bind(null,a,i,e),[e]),a.flags|=2048,ma(9,{destroy:void 0},Yr.bind(null,a,i,l,t),null),l},useId:function(){var e=We(),t=ve.identifierPrefix;if(ie){var l=Ot,a=Dt;l=(a&~(1<<32-ut(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ei++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Qm++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:lc,useFormState:Wr,useActionState:Wr,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=ac.bind(null,I,!0,l),l.dispatch=t,[e,t]},useMemoCache:Ku,useCacheRefresh:function(){return We().memoizedState=km.bind(null,I)},useEffectEvent:function(e){var t=We(),l={impl:e};return t.memoizedState=l,function(){if((re&2)!==0)throw Error(d(440));return l.impl.apply(void 0,arguments)}}},nc={readContext:Ze,use:li,useCallback:uo,useContext:Ze,useEffect:Iu,useImperativeHandle:io,useInsertionEffect:lo,useLayoutEffect:ao,useMemo:co,useReducer:ai,useRef:Pr,useState:function(){return ai(Xt)},useDebugValue:Pu,useDeferredValue:function(e,t){var l=_e();return fo(l,ge.memoizedState,e,t)},useTransition:function(){var e=ai(Xt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:$a(e),t]},useSyncExternalStore:wr,useId:mo,useHostTransitionStatus:lc,useFormState:Fr,useActionState:Fr,useOptimistic:function(e,t){var l=_e();return Zr(l,ge,e,t)},useMemoCache:Ku,useCacheRefresh:ho};nc.useEffectEvent=to;var vo={readContext:Ze,use:li,useCallback:uo,useContext:Ze,useEffect:Iu,useImperativeHandle:io,useInsertionEffect:lo,useLayoutEffect:ao,useMemo:co,useReducer:Wu,useRef:Pr,useState:function(){return Wu(Xt)},useDebugValue:Pu,useDeferredValue:function(e,t){var l=_e();return ge===null?ec(l,e,t):fo(l,ge.memoizedState,e,t)},useTransition:function(){var e=Wu(Xt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:$a(e),t]},useSyncExternalStore:wr,useId:mo,useHostTransitionStatus:lc,useFormState:Ir,useActionState:Ir,useOptimistic:function(e,t){var l=_e();return ge!==null?Zr(l,ge,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:ho};vo.useEffectEvent=to;function ic(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:E({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var uc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=mt(),n=il(a);n.payload=t,l!=null&&(n.callback=l),t=ul(e,n,a),t!==null&&(at(t,e,a),Ka(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=mt(),n=il(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=ul(e,n,a),t!==null&&(at(t,e,a),Ka(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=mt(),a=il(l);a.tag=2,t!=null&&(a.callback=t),t=ul(e,a,l),t!==null&&(at(t,e,l),Ka(t,e,l))}};function xo(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ya(l,a)||!Ya(n,i):!0}function So(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&uc.enqueueReplaceState(t,t.state,null)}function Yl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=E({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function zo(e){qn(e)}function jo(e){console.error(e)}function To(e){qn(e)}function ci(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Eo(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function cc(e,t,l){return l=il(l),l.tag=3,l.payload={element:null},l.callback=function(){ci(e,t)},l}function Ao(e){return e=il(e),e.tag=3,e}function No(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Eo(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Eo(t,l,a),typeof n!="function"&&(dl===null?dl=new Set([this]):dl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Fm(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ia(t,l,n,!0),l=rt.current,l!==null){switch(l.tag){case 31:case 13:return St===null?vi():l.alternate===null&&Ee===0&&(Ee=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===kn?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Uc(e,a,n)),!1;case 22:return l.flags|=65536,a===kn?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Uc(e,a,n)),!1}throw Error(d(435,l.tag))}return Uc(e,a,n),vi(),!1}if(ie)return t=rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Au&&(e=Error(d(422),{cause:a}),Qa(bt(e,l)))):(a!==Au&&(t=Error(d(423),{cause:a}),Qa(bt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=bt(a,l),n=cc(e.stateNode,a,n),wu(e,n),Ee!==4&&(Ee=2)),!1;var i=Error(d(520),{cause:a});if(i=bt(i,l),fn===null?fn=[i]:fn.push(i),Ee!==4&&(Ee=2),t===null)return!0;a=bt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=cc(l.stateNode,a,e),wu(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(dl===null||!dl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Ao(n),No(n,e,l,a),wu(l,n),!1}l=l.return}while(l!==null);return!1}var fc=Error(d(461)),He=!1;function Le(e,t,l,a){t.child=e===null?_r(t,null,l,a):wl(t,e.child,l,a)}function Do(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return Cl(t),a=Zu(e,t,l,u,i,n),c=Lu(),e!==null&&!He?(Vu(e,t,n),Qt(e,t,n)):(ie&&c&&Tu(t),t.flags|=1,Le(e,t,a,n),t.child)}function Oo(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Su(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,_o(e,t,i,a,n)):(e=Qn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!yc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ya,l(u,a)&&e.ref===t.ref)return Qt(e,t,n)}return t.flags|=1,e=Bt(i,a),e.ref=t.ref,e.return=t,t.child=e}function _o(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Ya(i,a)&&e.ref===t.ref)if(He=!1,t.pendingProps=a=i,yc(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Qt(e,t,n)}return rc(e,t,l,a,n)}function Mo(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Uo(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jn(t,i!==null?i.cachePool:null),i!==null?Cr(t,i):Yu(),Hr(t);else return a=t.lanes=536870912,Uo(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Jn(t,i.cachePool),Cr(t,i),fl(),t.memoizedState=null):(e!==null&&Jn(t,null),Yu(),fl());return Le(e,t,n,l),t.child}function en(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uo(e,t,l,a,n){var i=Cu();return i=i===null?null:{parent:Ue._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&Jn(t,null),Yu(),Hr(t),e!==null&&ia(e,t,a,!0),t.childLanes=n,null}function fi(e,t){return t=oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Co(e,t,l){return wl(t,e.child,null,l),e=fi(t,t.pendingProps),e.flags|=2,ot(t),t.memoizedState=null,e}function $m(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ie){if(a.mode==="hidden")return e=fi(t,a),t.lanes=536870912,en(null,e);if(Xu(t),(e=Se)?(e=Vs(e,xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},l=gr(e),l.return=t,t.child=l,Qe=t,Se=null)):e=null,e===null)throw ll(t);return t.lanes=536870912,null}return fi(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Xu(t),n)if(t.flags&256)t.flags&=-257,t=Co(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(He||ia(e,t,l,!1),n=(l&e.childLanes)!==0,He||n){if(a=ve,a!==null&&(u=zf(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ol(e,u),at(a,e,u),fc;vi(),t=Co(e,t,l)}else e=i.treeContext,Se=zt(u.nextSibling),Qe=t,ie=!0,tl=null,xt=!1,e!==null&&pr(t,e),t=fi(t,a),t.flags|=4096;return t}return e=Bt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ri(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(d(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function rc(e,t,l,a,n){return Cl(t),l=Zu(e,t,l,a,void 0,n),a=Lu(),e!==null&&!He?(Vu(e,t,n),Qt(e,t,n)):(ie&&a&&Tu(t),t.flags|=1,Le(e,t,l,n),t.child)}function Ho(e,t,l,a,n,i){return Cl(t),t.updateQueue=null,l=Br(t,a,l,n),Rr(e),a=Lu(),e!==null&&!He?(Vu(e,t,i),Qt(e,t,i)):(ie&&a&&Tu(t),t.flags|=1,Le(e,t,l,i),t.child)}function Ro(e,t,l,a,n){if(Cl(t),t.stateNode===null){var i=ta,u=l.contextType;typeof u=="object"&&u!==null&&(i=Ze(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=uc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Ru(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?Ze(u):ta,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(ic(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&uc.enqueueReplaceState(i,i.state,null),Wa(t,a,i,n),ka(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,r=Yl(l,c);i.props=r;var g=i.context,x=l.contextType;u=ta,typeof x=="object"&&x!==null&&(u=Ze(x));var j=l.getDerivedStateFromProps;x=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||g!==u)&&So(t,i,a,u),nl=!1;var y=t.memoizedState;i.state=y,Wa(t,a,i,n),ka(),g=t.memoizedState,c||y!==g||nl?(typeof j=="function"&&(ic(t,l,j,a),g=t.memoizedState),(r=nl||xo(t,l,r,a,y,g,u))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=g),i.props=a,i.state=g,i.context=u,a=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Bu(e,t),u=t.memoizedProps,x=Yl(l,u),i.props=x,j=t.pendingProps,y=i.context,g=l.contextType,r=ta,typeof g=="object"&&g!==null&&(r=Ze(g)),c=l.getDerivedStateFromProps,(g=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==j||y!==r)&&So(t,i,a,r),nl=!1,y=t.memoizedState,i.state=y,Wa(t,a,i,n),ka();var b=t.memoizedState;u!==j||y!==b||nl||e!==null&&e.dependencies!==null&&Ln(e.dependencies)?(typeof c=="function"&&(ic(t,l,c,a),b=t.memoizedState),(x=nl||xo(t,l,x,a,y,b,r)||e!==null&&e.dependencies!==null&&Ln(e.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,b,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,b,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=b),i.props=a,i.state=b,i.context=r,a=x):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,ri(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=wl(t,e.child,null,n),t.child=wl(t,null,l,n)):Le(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Qt(e,t,n),e}function Bo(e,t,l,a){return Ml(),t.flags|=256,Le(e,t,l,a),t.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(e){return{baseLanes:e,cachePool:Tr()}}function dc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=dt),e}function wo(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Oe.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ie){if(n?cl(t):fl(),(e=Se)?(e=Vs(e,xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},l=gr(e),l.return=t,t.child=l,Qe=t,Se=null)):e=null,e===null)throw ll(t);return kc(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(fl(),n=t.mode,c=oi({mode:"hidden",children:c},n),a=_l(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=sc(l),a.childLanes=dc(e,u,l),t.memoizedState=oc,en(null,a)):(cl(t),mc(t,c))}var r=e.memoizedState;if(r!==null&&(c=r.dehydrated,c!==null)){if(i)t.flags&256?(cl(t),t.flags&=-257,t=hc(e,t,l)):t.memoizedState!==null?(fl(),t.child=e.child,t.flags|=128,t=null):(fl(),c=a.fallback,n=t.mode,a=oi({mode:"visible",children:a.children},n),c=_l(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,wl(t,e.child,null,l),a=t.child,a.memoizedState=sc(l),a.childLanes=dc(e,u,l),t.memoizedState=oc,t=en(null,a));else if(cl(t),kc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var g=u.dgst;u=g,a=Error(d(419)),a.stack="",a.digest=u,Qa({value:a,source:null,stack:null}),t=hc(e,t,l)}else if(He||ia(e,t,l,!1),u=(l&e.childLanes)!==0,He||u){if(u=ve,u!==null&&(a=zf(u,l),a!==0&&a!==r.retryLane))throw r.retryLane=a,Ol(e,a),at(u,e,a),fc;Kc(c)||vi(),t=hc(e,t,l)}else Kc(c)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,Se=zt(c.nextSibling),Qe=t,ie=!0,tl=null,xt=!1,e!==null&&pr(t,e),t=mc(t,a.children),t.flags|=4096);return t}return n?(fl(),c=a.fallback,n=t.mode,r=e.child,g=r.sibling,a=Bt(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,g!==null?c=Bt(g,c):(c=_l(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,en(null,a),a=t.child,c=e.child.memoizedState,c===null?c=sc(l):(n=c.cachePool,n!==null?(r=Ue._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Tr(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=dc(e,u,l),t.memoizedState=oc,en(e.child,a)):(cl(t),l=e.child,e=l.sibling,l=Bt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function mc(e,t){return t=oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function oi(e,t){return e=ft(22,e,null,t),e.lanes=0,e}function hc(e,t,l){return wl(t,e.child,null,l),e=mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qo(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ou(e.return,t,l)}function gc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Yo(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=Oe.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,U(Oe,u),Le(e,t,a,l),a=ie?Xa:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qo(e,l,t);else if(e.tag===19)qo(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&In(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),gc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&In(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}gc(t,!0,l,null,i,a);break;case"together":gc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Qt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),sl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ia(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,l=Bt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Bt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function yc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ln(e)))}function Im(e,t,l){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),al(t,Ue,e.memoizedState.cache),Ml();break;case 27:case 5:Aa(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:al(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Xu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(cl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?wo(e,t,l):(cl(t),e=Qt(e,t,l),e!==null?e.sibling:null);cl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ia(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Yo(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),U(Oe,Oe.current),a)break;return null;case 22:return t.lanes=0,Mo(e,t,l,t.pendingProps);case 24:al(t,Ue,e.memoizedState.cache)}return Qt(e,t,l)}function Go(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!yc(e,l)&&(t.flags&128)===0)return He=!1,Im(e,t,l);He=(e.flags&131072)!==0}else He=!1,ie&&(t.flags&1048576)!==0&&br(t,Xa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Rl(t.elementType),t.type=e,typeof e=="function")Su(e)?(a=Yl(e,a),t.tag=1,t=Ro(null,t,e,a,l)):(t.tag=0,t=rc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===qe){t.tag=11,t=Do(null,t,e,a,l);break e}else if(n===R){t.tag=14,t=Oo(null,t,e,a,l);break e}}throw t=Ut(e)||e,Error(d(306,t,""))}}return t;case 0:return rc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Yl(a,t.pendingProps),Ro(e,t,a,n,l);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(d(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,Bu(e,t),Wa(t,a,null,l);var u=t.memoizedState;if(a=u.cache,al(t,Ue,a),a!==i.cache&&_u(t,[Ue],l,!0),ka(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Bo(e,t,a,l);break e}else if(a!==n){n=bt(Error(d(424)),t),Qa(n),t=Bo(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Se=zt(e.firstChild),Qe=t,ie=!0,tl=null,xt=!0,l=_r(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ml(),a===n){t=Qt(e,t,l);break e}Le(e,t,a,l)}t=t.child}return t;case 26:return ri(e,t),e===null?(l=$s(t.type,null,t.pendingProps,null))?t.memoizedState=l:ie||(l=t.type,e=t.pendingProps,a=Ai(ee.current).createElement(l),a[Xe]=t,a[$e]=e,Ve(a,l,e),Ye(a),t.stateNode=a):t.memoizedState=$s(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Aa(t),e===null&&ie&&(a=t.stateNode=ks(t.type,t.pendingProps,ee.current),Qe=t,xt=!0,n=Se,yl(t.type)?(Wc=n,Se=zt(a.firstChild)):Se=n),Le(e,t,t.pendingProps.children,l),ri(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ie&&((n=a=Se)&&(a=D0(a,t.type,t.pendingProps,xt),a!==null?(t.stateNode=a,Qe=t,Se=zt(a.firstChild),xt=!1,n=!0):n=!1),n||ll(t)),Aa(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,Lc(n,i)?a=null:u!==null&&Lc(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Zu(e,t,Zm,null,null,l),yn._currentValue=n),ri(e,t),Le(e,t,a,l),t.child;case 6:return e===null&&ie&&((e=l=Se)&&(l=O0(l,t.pendingProps,xt),l!==null?(t.stateNode=l,Qe=t,Se=null,e=!0):e=!1),e||ll(t)),null;case 13:return wo(e,t,l);case 4:return ke(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=wl(t,null,a,l):Le(e,t,a,l),t.child;case 11:return Do(e,t,t.type,t.pendingProps,l);case 7:return Le(e,t,t.pendingProps,l),t.child;case 8:return Le(e,t,t.pendingProps.children,l),t.child;case 12:return Le(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,al(t,t.type,a.value),Le(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Cl(t),n=Ze(n),a=a(n),t.flags|=1,Le(e,t,a,l),t.child;case 14:return Oo(e,t,t.type,t.pendingProps,l);case 15:return _o(e,t,t.type,t.pendingProps,l);case 19:return Yo(e,t,l);case 31:return $m(e,t,l);case 22:return Mo(e,t,l,t.pendingProps);case 24:return Cl(t),a=Ze(Ue),e===null?(n=Cu(),n===null&&(n=ve,i=Mu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Ru(t),al(t,Ue,n)):((e.lanes&l)!==0&&(Bu(e,t),Wa(t,null,null,l),ka()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),al(t,Ue,a)):(a=i.cache,al(t,Ue,a),a!==n.cache&&_u(t,[Ue],l,!0))),Le(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Zt(e){e.flags|=4}function bc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(ms())e.flags|=8192;else throw Bl=kn,Hu}else e.flags&=-16777217}function Xo(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ld(t))if(ms())e.flags|=8192;else throw Bl=kn,Hu}function si(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vf():536870912,e.lanes|=t,ba|=t)}function tn(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Pm(e,t,l){var a=t.pendingProps;switch(Eu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yt(Ue),De(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(na(t)?Zt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nu())),ze(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Zt(t),i!==null?(ze(t),Xo(t,i)):(ze(t),bc(t,n,null,a,l))):i?i!==e.memoizedState?(Zt(t),ze(t),Xo(t,i)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Zt(t),ze(t),bc(t,n,e,a,l)),null;case 27:if(zn(t),l=ee.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(!a){if(t.stateNode===null)throw Error(d(166));return ze(t),null}e=w.current,na(t)?vr(t):(e=ks(n,a,l),t.stateNode=e,Zt(t))}return ze(t),null;case 5:if(zn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(!a){if(t.stateNode===null)throw Error(d(166));return ze(t),null}if(i=w.current,na(t))vr(t);else{var u=Ai(ee.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Xe]=t,i[$e]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Ve(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Zt(t)}}return ze(t),bc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(d(166));if(e=ee.current,na(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Qe,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Xe]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||ws(e.nodeValue,l)),e||ll(t,!0)}else e=Ai(e).createTextNode(a),e[Xe]=t,t.stateNode=e}return ze(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=na(t),l!==null){if(e===null){if(!a)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Xe]=t}else Ml(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else l=Nu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(ot(t),t):(ot(t),null);if((t.flags&128)!==0)throw Error(d(558))}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=na(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Xe]=t}else Ml(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Nu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ot(t),t):(ot(t),null)}return ot(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),si(t,t.updateQueue),ze(t),null);case 4:return De(),e===null&&Yc(t.stateNode.containerInfo),ze(t),null;case 10:return Yt(t.type),ze(t),null;case 19:if(T(Oe),a=t.memoizedState,a===null)return ze(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)tn(a,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=In(e),i!==null){for(t.flags|=128,tn(a,!1),e=i.updateQueue,t.updateQueue=e,si(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)hr(l,e),l=l.sibling;return U(Oe,Oe.current&1|2),ie&&wt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&nt()>yi&&(t.flags|=128,n=!0,tn(a,!1),t.lanes=4194304)}else{if(!n)if(e=In(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,si(t,e),tn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ie)return ze(t),null}else 2*nt()-a.renderingStartTime>yi&&l!==536870912&&(t.flags|=128,n=!0,tn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=nt(),e.sibling=null,l=Oe.current,U(Oe,n?l&1|2:l&1),ie&&wt(t,a.treeForkCount),e):(ze(t),null);case 22:case 23:return ot(t),Gu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),l=t.updateQueue,l!==null&&si(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&T(Hl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Yt(Ue),ze(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function e0(e,t){switch(Eu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yt(Ue),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zn(t),null;case 31:if(t.memoizedState!==null){if(ot(t),t.alternate===null)throw Error(d(340));Ml()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Ml()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(Oe),null;case 4:return De(),null;case 10:return Yt(t.type),null;case 22:case 23:return ot(t),Gu(),e!==null&&T(Hl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yt(Ue),null;case 25:return null;default:return null}}function Qo(e,t){switch(Eu(t),t.tag){case 3:Yt(Ue),De();break;case 26:case 27:case 5:zn(t);break;case 4:De();break;case 31:t.memoizedState!==null&&ot(t);break;case 13:ot(t);break;case 19:T(Oe);break;case 10:Yt(t.type);break;case 22:case 23:ot(t),Gu(),e!==null&&T(Hl);break;case 24:Yt(Ue)}}function ln(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){me(t,t.return,c)}}function rl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var r=l,g=c;try{g()}catch(x){me(n,r,x)}}}a=a.next}while(a!==i)}}catch(x){me(t,t.return,x)}}function Zo(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Ur(t,l)}catch(a){me(e,e.return,a)}}}function Lo(e,t,l){l.props=Yl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){me(e,t,a)}}function an(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){me(e,t,n)}}function _t(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){me(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){me(e,t,n)}else l.current=null}function Vo(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){me(e,e.return,n)}}function pc(e,t,l){try{var a=e.stateNode;z0(a,e.type,l,t),a[$e]=t}catch(n){me(e,e.return,n)}}function Jo(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yl(e.type)||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jo(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Ht));else if(a!==4&&(a===27&&yl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(xc(e,t,l),e=e.sibling;e!==null;)xc(e,t,l),e=e.sibling}function di(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&yl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(di(e,t,l),e=e.sibling;e!==null;)di(e,t,l),e=e.sibling}function Ko(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ve(t,a,l),t[Xe]=e,t[$e]=l}catch(i){me(e,e.return,i)}}var Lt=!1,Re=!1,Sc=!1,ko=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function t0(e,t){if(e=e.containerInfo,Qc=Ci,e=ir(e),hu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,c=-1,r=-1,g=0,x=0,j=e,y=null;t:for(;;){for(var b;j!==l||n!==0&&j.nodeType!==3||(c=u+n),j!==i||a!==0&&j.nodeType!==3||(r=u+a),j.nodeType===3&&(u+=j.nodeValue.length),(b=j.firstChild)!==null;)y=j,j=b;for(;;){if(j===e)break t;if(y===l&&++g===n&&(c=u),y===i&&++x===a&&(r=u),(b=j.nextSibling)!==null)break;j=y,y=j.parentNode}j=b}l=c===-1||r===-1?null:{start:c,end:r}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zc={focusedElem:e,selectionRange:l},Ci=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var B=Yl(l.type,n);e=a.getSnapshotBeforeUpdate(B,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(L){me(l,l.return,L)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Jc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Wo(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Jt(e,l),a&4&&ln(5,l);break;case 1:if(Jt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){me(l,l.return,u)}else{var n=Yl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){me(l,l.return,u)}}a&64&&Zo(l),a&512&&an(l,l.return);break;case 3:if(Jt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Ur(e,t)}catch(u){me(l,l.return,u)}}break;case 27:t===null&&a&4&&Ko(l);case 26:case 5:Jt(e,l),t===null&&a&4&&Vo(l),a&512&&an(l,l.return);break;case 12:Jt(e,l);break;case 31:Jt(e,l),a&4&&Io(e,l);break;case 13:Jt(e,l),a&4&&Po(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=o0.bind(null,l),_0(e,l))));break;case 22:if(a=l.memoizedState!==null||Lt,!a){t=t!==null&&t.memoizedState!==null||Re,n=Lt;var i=Re;Lt=a,(Re=t)&&!i?Kt(e,l,(l.subtreeFlags&8772)!==0):Jt(e,l),Lt=n,Re=i}break;case 30:break;default:Jt(e,l)}}function Fo(e){var t=e.alternate;t!==null&&(e.alternate=null,Fo(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$i(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Pe=!1;function Vt(e,t,l){for(l=l.child;l!==null;)$o(e,t,l),l=l.sibling}function $o(e,t,l){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Na,l)}catch{}switch(l.tag){case 26:Re||_t(l,t),Vt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Re||_t(l,t);var a=je,n=Pe;yl(l.type)&&(je=l.stateNode,Pe=!1),Vt(e,t,l),mn(l.stateNode),je=a,Pe=n;break;case 5:Re||_t(l,t);case 6:if(a=je,n=Pe,je=null,Vt(e,t,l),je=a,Pe=n,je!==null)if(Pe)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(l.stateNode)}catch(i){me(l,t,i)}else try{je.removeChild(l.stateNode)}catch(i){me(l,t,i)}break;case 18:je!==null&&(Pe?(e=je,Zs(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ea(e)):Zs(je,l.stateNode));break;case 4:a=je,n=Pe,je=l.stateNode.containerInfo,Pe=!0,Vt(e,t,l),je=a,Pe=n;break;case 0:case 11:case 14:case 15:rl(2,l,t),Re||rl(4,l,t),Vt(e,t,l);break;case 1:Re||(_t(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Lo(l,t,a)),Vt(e,t,l);break;case 21:Vt(e,t,l);break;case 22:Re=(a=Re)||l.memoizedState!==null,Vt(e,t,l),Re=a;break;default:Vt(e,t,l)}}function Io(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ea(e)}catch(l){me(t,t.return,l)}}}function Po(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ea(e)}catch(l){me(t,t.return,l)}}function l0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ko),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ko),t;default:throw Error(d(435,e.tag))}}function mi(e,t){var l=l0(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=s0.bind(null,e,a);a.then(n,n)}})}function et(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(yl(c.type)){je=c.stateNode,Pe=!1;break e}break;case 5:je=c.stateNode,Pe=!1;break e;case 3:case 4:je=c.stateNode.containerInfo,Pe=!0;break e}c=c.return}if(je===null)throw Error(d(160));$o(i,u,n),je=null,Pe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)es(t,e),t=t.sibling}var At=null;function es(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),a&4&&(rl(3,e,e.return),ln(3,e),rl(5,e,e.return));break;case 1:et(t,e),tt(e),a&512&&(Re||l===null||_t(l,l.return)),a&64&&Lt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=At;if(et(t,e),tt(e),a&512&&(Re||l===null||_t(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[_a]||i[Xe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ve(i,a,l),i[Xe]=e,Ye(i),a=i;break e;case"link":var u=ed("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(a),Ve(i,a,l),n.head.appendChild(i);break;case"meta":if(u=ed("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}i=n.createElement(a),Ve(i,a,l),n.head.appendChild(i);break;default:throw Error(d(468,a))}i[Xe]=e,Ye(i),a=i}e.stateNode=a}else td(n,e.type,e.stateNode);else e.stateNode=Ps(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?td(n,e.type,e.stateNode):Ps(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&pc(e,e.memoizedProps,l.memoizedProps)}break;case 27:et(t,e),tt(e),a&512&&(Re||l===null||_t(l,l.return)),l!==null&&a&4&&pc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(et(t,e),tt(e),a&512&&(Re||l===null||_t(l,l.return)),e.flags&32){n=e.stateNode;try{kl(n,"")}catch(B){me(e,e.return,B)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,pc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Sc=!0);break;case 6:if(et(t,e),tt(e),a&4){if(e.stateNode===null)throw Error(d(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(B){me(e,e.return,B)}}break;case 3:if(Oi=null,n=At,At=Ni(t.containerInfo),et(t,e),At=n,tt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ea(t.containerInfo)}catch(B){me(e,e.return,B)}Sc&&(Sc=!1,ts(e));break;case 4:a=At,At=Ni(e.stateNode.containerInfo),et(t,e),tt(e),At=a;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,mi(e,a)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(gi=nt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,mi(e,a)));break;case 22:n=e.memoizedState!==null;var r=l!==null&&l.memoizedState!==null,g=Lt,x=Re;if(Lt=g||n,Re=x||r,et(t,e),Re=x,Lt=g,tt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||r||Lt||Re||Gl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){r=l=t;try{if(i=r.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=r.stateNode;var j=r.memoizedProps.style,y=j!=null&&j.hasOwnProperty("display")?j.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(B){me(r,r.return,B)}}}else if(t.tag===6){if(l===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(B){me(r,r.return,B)}}}else if(t.tag===18){if(l===null){r=t;try{var b=r.stateNode;n?Ls(b,!0):Ls(r.stateNode,!1)}catch(B){me(r,r.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,mi(e,l))));break;case 19:et(t,e),tt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,mi(e,a)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Jo(a)){l=a;break}a=a.return}if(l==null)throw Error(d(160));switch(l.tag){case 27:var n=l.stateNode,i=vc(e);di(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(kl(u,""),l.flags&=-33);var c=vc(e);di(e,c,u);break;case 3:case 4:var r=l.stateNode.containerInfo,g=vc(e);xc(e,g,r);break;default:throw Error(d(161))}}catch(x){me(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ts(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ts(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Jt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Wo(e,t.alternate,t),t=t.sibling}function Gl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:rl(4,t,t.return),Gl(t);break;case 1:_t(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Lo(t,t.return,l),Gl(t);break;case 27:mn(t.stateNode);case 26:case 5:_t(t,t.return),Gl(t);break;case 22:t.memoizedState===null&&Gl(t);break;case 30:Gl(t);break;default:Gl(t)}e=e.sibling}}function Kt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Kt(n,i,l),ln(4,i);break;case 1:if(Kt(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){me(a,a.return,g)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Mr(r[n],c)}catch(g){me(a,a.return,g)}}l&&u&64&&Zo(i),an(i,i.return);break;case 27:Ko(i);case 26:case 5:Kt(n,i,l),l&&a===null&&u&4&&Vo(i),an(i,i.return);break;case 12:Kt(n,i,l);break;case 31:Kt(n,i,l),l&&u&4&&Io(n,i);break;case 13:Kt(n,i,l),l&&u&4&&Po(n,i);break;case 22:i.memoizedState===null&&Kt(n,i,l),an(i,i.return);break;case 30:break;default:Kt(n,i,l)}t=t.sibling}}function zc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Za(l))}function jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e))}function Nt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ls(e,t,l,a),t=t.sibling}function ls(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Nt(e,t,l,a),n&2048&&ln(9,t);break;case 1:Nt(e,t,l,a);break;case 3:Nt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e)));break;case 12:if(n&2048){Nt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){me(t,t.return,r)}}else Nt(e,t,l,a);break;case 31:Nt(e,t,l,a);break;case 13:Nt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Nt(e,t,l,a):nn(e,t):i._visibility&2?Nt(e,t,l,a):(i._visibility|=2,ha(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&zc(u,t);break;case 24:Nt(e,t,l,a),n&2048&&jc(t.alternate,t);break;default:Nt(e,t,l,a)}}function ha(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=l,r=a,g=u.flags;switch(u.tag){case 0:case 11:case 15:ha(i,u,c,r,n),ln(8,u);break;case 23:break;case 22:var x=u.stateNode;u.memoizedState!==null?x._visibility&2?ha(i,u,c,r,n):nn(i,u):(x._visibility|=2,ha(i,u,c,r,n)),n&&g&2048&&zc(u.alternate,u);break;case 24:ha(i,u,c,r,n),n&&g&2048&&jc(u.alternate,u);break;default:ha(i,u,c,r,n)}t=t.sibling}}function nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:nn(l,a),n&2048&&zc(a.alternate,a);break;case 24:nn(l,a),n&2048&&jc(a.alternate,a);break;default:nn(l,a)}t=t.sibling}}var un=8192;function ga(e,t,l){if(e.subtreeFlags&un)for(e=e.child;e!==null;)as(e,t,l),e=e.sibling}function as(e,t,l){switch(e.tag){case 26:ga(e,t,l),e.flags&un&&e.memoizedState!==null&&Q0(l,At,e.memoizedState,e.memoizedProps);break;case 5:ga(e,t,l);break;case 3:case 4:var a=At;At=Ni(e.stateNode.containerInfo),ga(e,t,l),At=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=un,un=16777216,ga(e,t,l),un=a):ga(e,t,l));break;default:ga(e,t,l)}}function ns(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function cn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ge=a,us(a,e)}ns(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)is(e),e=e.sibling}function is(e){switch(e.tag){case 0:case 11:case 15:cn(e),e.flags&2048&&rl(9,e,e.return);break;case 3:cn(e);break;case 12:cn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hi(e)):cn(e);break;default:cn(e)}}function hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ge=a,us(a,e)}ns(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:rl(8,t,t.return),hi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,hi(t));break;default:hi(t)}e=e.sibling}}function us(e,t){for(;Ge!==null;){var l=Ge;switch(l.tag){case 0:case 11:case 15:rl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ge=a;else e:for(l=e;Ge!==null;){a=Ge;var n=a.sibling,i=a.return;if(Fo(a),a===l){Ge=null;break e}if(n!==null){n.return=i,Ge=n;break e}Ge=i}}}var a0={getCacheForType:function(e){var t=Ze(Ue),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ze(Ue).controller.signal}},n0=typeof WeakMap=="function"?WeakMap:Map,re=0,ve=null,te=null,ae=0,de=0,st=null,ol=!1,ya=!1,Tc=!1,kt=0,Ee=0,sl=0,Xl=0,Ec=0,dt=0,ba=0,fn=null,lt=null,Ac=!1,gi=0,cs=0,yi=1/0,bi=null,dl=null,we=0,ml=null,pa=null,Wt=0,Nc=0,Dc=null,fs=null,rn=0,Oc=null;function mt(){return(re&2)!==0&&ae!==0?ae&-ae:S.T!==null?Rc():jf()}function rs(){if(dt===0)if((ae&536870912)===0||ie){var e=En;En<<=1,(En&3932160)===0&&(En=262144),dt=e}else dt=536870912;return e=rt.current,e!==null&&(e.flags|=32),dt}function at(e,t,l){(e===ve&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(va(e,0),hl(e,ae,dt,!1)),Oa(e,l),((re&2)===0||e!==ve)&&(e===ve&&((re&2)===0&&(Xl|=l),Ee===4&&hl(e,ae,dt,!1)),Mt(e))}function os(e,t,l){if((re&6)!==0)throw Error(d(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Da(e,t),n=a?c0(e,t):Mc(e,t,!0),i=a;do{if(n===0){ya&&!a&&hl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!i0(l)){n=Mc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=fn;var r=c.current.memoizedState.isDehydrated;if(r&&(va(c,u).flags|=256),u=Mc(c,u,!1),u!==2){if(Tc&&!r){c.errorRecoveryDisabledLanes|=i,Xl|=i,n=4;break e}i=lt,lt=n,i!==null&&(lt===null?lt=i:lt.push.apply(lt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){va(e,0),hl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:hl(a,t,dt,!ol);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(n=gi+300-nt(),10<n)){if(hl(a,t,dt,!ol),Nn(a,0,!0)!==0)break e;Wt=t,a.timeoutHandle=Xs(ss.bind(null,a,l,lt,bi,Ac,t,dt,Xl,ba,ol,i,"Throttled",-0,0),n);break e}ss(a,l,lt,bi,Ac,t,dt,Xl,ba,ol,i,null,-0,0)}}break}while(!0);Mt(e)}function ss(e,t,l,a,n,i,u,c,r,g,x,j,y,b){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ht},as(t,i,j);var B=(i&62914560)===i?gi-nt():(i&4194048)===i?cs-nt():0;if(B=Z0(j,B),B!==null){Wt=i,e.cancelPendingCommit=B(vs.bind(null,e,t,i,l,a,n,u,c,r,x,j,null,y,b)),hl(e,i,u,!g);return}}vs(e,t,i,l,a,n,u,c,r)}function i0(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!ct(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hl(e,t,l,a){t&=~Ec,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-ut(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&xf(e,l,t)}function pi(){return(re&6)===0?(on(0),!1):!0}function _c(){if(te!==null){if(de===0)var e=te.return;else e=te,qt=Ul=null,Ju(e),ra=null,Va=0,e=te;for(;e!==null;)Qo(e.alternate,e),e=e.return;te=null}}function va(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,E0(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Wt=0,_c(),ve=e,te=l=Bt(e.current,null),ae=t,de=0,st=null,ol=!1,ya=Da(e,t),Tc=!1,ba=dt=Ec=Xl=sl=Ee=0,lt=fn=null,Ac=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-ut(a),i=1<<n;t|=e[n],a&=~i}return kt=t,Yn(),l}function ds(e,t){I=null,S.H=Pa,t===fa||t===Kn?(t=Nr(),de=3):t===Hu?(t=Nr(),de=4):de=t===fc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,te===null&&(Ee=1,ci(e,bt(t,e.current)))}function ms(){var e=rt.current;return e===null?!0:(ae&4194048)===ae?St===null:(ae&62914560)===ae||(ae&536870912)!==0?e===St:!1}function hs(){var e=S.H;return S.H=Pa,e===null?Pa:e}function gs(){var e=S.A;return S.A=a0,e}function vi(){Ee=4,ol||(ae&4194048)!==ae&&rt.current!==null||(ya=!0),(sl&134217727)===0&&(Xl&134217727)===0||ve===null||hl(ve,ae,dt,!1)}function Mc(e,t,l){var a=re;re|=2;var n=hs(),i=gs();(ve!==e||ae!==t)&&(bi=null,va(e,t)),t=!1;var u=Ee;e:do try{if(de!==0&&te!==null){var c=te,r=st;switch(de){case 8:_c(),u=6;break e;case 3:case 2:case 9:case 6:rt.current===null&&(t=!0);var g=de;if(de=0,st=null,xa(e,c,r,g),l&&ya){u=0;break e}break;default:g=de,de=0,st=null,xa(e,c,r,g)}}u0(),u=Ee;break}catch(x){ds(e,x)}while(!0);return t&&e.shellSuspendCounter++,qt=Ul=null,re=a,S.H=n,S.A=i,te===null&&(ve=null,ae=0,Yn()),u}function u0(){for(;te!==null;)ys(te)}function c0(e,t){var l=re;re|=2;var a=hs(),n=gs();ve!==e||ae!==t?(bi=null,yi=nt()+500,va(e,t)):ya=Da(e,t);e:do try{if(de!==0&&te!==null){t=te;var i=st;t:switch(de){case 1:de=0,st=null,xa(e,t,i,1);break;case 2:case 9:if(Er(i)){de=0,st=null,bs(t);break}t=function(){de!==2&&de!==9||ve!==e||(de=7),Mt(e)},i.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:Er(i)?(de=0,st=null,bs(t)):(de=0,st=null,xa(e,t,i,7));break;case 5:var u=null;switch(te.tag){case 26:u=te.memoizedState;case 5:case 27:var c=te;if(u?ld(u):c.stateNode.complete){de=0,st=null;var r=c.sibling;if(r!==null)te=r;else{var g=c.return;g!==null?(te=g,xi(g)):te=null}break t}}de=0,st=null,xa(e,t,i,5);break;case 6:de=0,st=null,xa(e,t,i,6);break;case 8:_c(),Ee=6;break e;default:throw Error(d(462))}}f0();break}catch(x){ds(e,x)}while(!0);return qt=Ul=null,S.H=a,S.A=n,re=l,te!==null?0:(ve=null,ae=0,Yn(),Ee)}function f0(){for(;te!==null&&!Md();)ys(te)}function ys(e){var t=Go(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?xi(e):te=t}function bs(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Ho(l,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=Ho(l,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:Ju(t);default:Qo(l,t),t=te=hr(t,kt),t=Go(l,t,kt)}e.memoizedProps=e.pendingProps,t===null?xi(e):te=t}function xa(e,t,l,a){qt=Ul=null,Ju(t),ra=null,Va=0;var n=t.return;try{if(Fm(e,n,t,l,ae)){Ee=1,ci(e,bt(l,e.current)),te=null;return}}catch(i){if(n!==null)throw te=n,i;Ee=1,ci(e,bt(l,e.current)),te=null;return}t.flags&32768?(ie||a===1?e=!0:ya||(ae&536870912)!==0?e=!1:(ol=e=!0,(a===2||a===9||a===3||a===6)&&(a=rt.current,a!==null&&a.tag===13&&(a.flags|=16384))),ps(t,e)):xi(t)}function xi(e){var t=e;do{if((t.flags&32768)!==0){ps(t,ol);return}e=t.return;var l=Pm(t.alternate,t,kt);if(l!==null){te=l;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);Ee===0&&(Ee=5)}function ps(e,t){do{var l=e0(e.alternate,e);if(l!==null){l.flags&=32767,te=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){te=e;return}te=e=l}while(e!==null);Ee=6,te=null}function vs(e,t,l,a,n,i,u,c,r){e.cancelPendingCommit=null;do Si();while(we!==0);if((re&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=vu,Xd(e,l,i,u,c,r),e===ve&&(te=ve=null,ae=0),pa=t,ml=e,Wt=l,Nc=i,Dc=n,fs=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,d0(jn,function(){return Ts(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,n=M.p,M.p=2,u=re,re|=4;try{t0(e,t,l)}finally{re=u,M.p=n,S.T=a}}we=1,xs(),Ss(),zs()}}function xs(){if(we===1){we=0;var e=ml,t=pa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=S.T,S.T=null;var a=M.p;M.p=2;var n=re;re|=4;try{es(t,e);var i=Zc,u=ir(e.containerInfo),c=i.focusedElem,r=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&nr(c.ownerDocument.documentElement,c)){if(r!==null&&hu(c)){var g=r.start,x=r.end;if(x===void 0&&(x=g),"selectionStart"in c)c.selectionStart=g,c.selectionEnd=Math.min(x,c.value.length);else{var j=c.ownerDocument||document,y=j&&j.defaultView||window;if(y.getSelection){var b=y.getSelection(),B=c.textContent.length,L=Math.min(r.start,B),be=r.end===void 0?L:Math.min(r.end,B);!b.extend&&L>be&&(u=be,be=L,L=u);var m=ar(c,L),o=ar(c,be);if(m&&o&&(b.rangeCount!==1||b.anchorNode!==m.node||b.anchorOffset!==m.offset||b.focusNode!==o.node||b.focusOffset!==o.offset)){var h=j.createRange();h.setStart(m.node,m.offset),b.removeAllRanges(),L>be?(b.addRange(h),b.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),b.addRange(h))}}}}for(j=[],b=c;b=b.parentNode;)b.nodeType===1&&j.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<j.length;c++){var z=j[c];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Ci=!!Qc,Zc=Qc=null}finally{re=n,M.p=a,S.T=l}}e.current=t,we=2}}function Ss(){if(we===2){we=0;var e=ml,t=pa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=S.T,S.T=null;var a=M.p;M.p=2;var n=re;re|=4;try{Wo(e,t.alternate,t)}finally{re=n,M.p=a,S.T=l}}we=3}}function zs(){if(we===4||we===3){we=0,Ud();var e=ml,t=pa,l=Wt,a=fs;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?we=5:(we=0,pa=ml=null,js(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(dl=null),Wi(l),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Na,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,n=M.p,M.p=2,S.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{S.T=t,M.p=n}}(Wt&3)!==0&&Si(),Mt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Oc?rn++:(rn=0,Oc=e):rn=0,on(0)}}function js(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Za(t)))}function Si(){return xs(),Ss(),zs(),Ts()}function Ts(){if(we!==5)return!1;var e=ml,t=Nc;Nc=0;var l=Wi(Wt),a=S.T,n=M.p;try{M.p=32>l?32:l,S.T=null,l=Dc,Dc=null;var i=ml,u=Wt;if(we=0,pa=ml=null,Wt=0,(re&6)!==0)throw Error(d(331));var c=re;if(re|=4,is(i.current),ls(i,i.current,u,l),re=c,on(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Na,i)}catch{}return!0}finally{M.p=n,S.T=a,js(e,t)}}function Es(e,t,l){t=bt(l,t),t=cc(e.stateNode,t,2),e=ul(e,t,2),e!==null&&(Oa(e,2),Mt(e))}function me(e,t,l){if(e.tag===3)Es(e,e,l);else for(;t!==null;){if(t.tag===3){Es(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(dl===null||!dl.has(a))){e=bt(l,e),l=Ao(2),a=ul(t,l,2),a!==null&&(No(l,a,t,e),Oa(a,2),Mt(a));break}}t=t.return}}function Uc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new n0;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Tc=!0,n.add(l),e=r0.bind(null,e,t,l),t.then(e,e))}function r0(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,ve===e&&(ae&l)===l&&(Ee===4||Ee===3&&(ae&62914560)===ae&&300>nt()-gi?(re&2)===0&&va(e,0):Ec|=l,ba===ae&&(ba=0)),Mt(e)}function As(e,t){t===0&&(t=vf()),e=Ol(e,t),e!==null&&(Oa(e,t),Mt(e))}function o0(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),As(e,l)}function s0(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(t),As(e,l)}function d0(e,t){return Vi(e,t)}var zi=null,Sa=null,Cc=!1,ji=!1,Hc=!1,gl=0;function Mt(e){e!==Sa&&e.next===null&&(Sa===null?zi=Sa=e:Sa=Sa.next=e),ji=!0,Cc||(Cc=!0,h0())}function on(e,t){if(!Hc&&ji){Hc=!0;do for(var l=!1,a=zi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-ut(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,_s(a,i))}else i=ae,i=Nn(a,a===ve?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Da(a,i)||(l=!0,_s(a,i));a=a.next}while(l);Hc=!1}}function m0(){Ns()}function Ns(){ji=Cc=!1;var e=0;gl!==0&&T0()&&(e=gl);for(var t=nt(),l=null,a=zi;a!==null;){var n=a.next,i=Ds(a,t);i===0?(a.next=null,l===null?zi=n:l.next=n,n===null&&(Sa=l)):(l=a,(e!==0||(i&3)!==0)&&(ji=!0)),a=n}we!==0&&we!==5||on(e),gl!==0&&(gl=0)}function Ds(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ut(i),c=1<<u,r=n[u];r===-1?((c&l)===0||(c&a)!==0)&&(n[u]=Gd(c,t)):r<=t&&(e.expiredLanes|=c),i&=~c}if(t=ve,l=ae,l=Nn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ji(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Da(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Ji(a),Wi(l)){case 2:case 8:l=bf;break;case 32:l=jn;break;case 268435456:l=pf;break;default:l=jn}return a=Os.bind(null,e),l=Vi(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Ji(a),e.callbackPriority=2,e.callbackNode=null,2}function Os(e,t){if(we!==0&&we!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Si()&&e.callbackNode!==l)return null;var a=ae;return a=Nn(e,e===ve?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(os(e,a,t),Ds(e,nt()),e.callbackNode!=null&&e.callbackNode===l?Os.bind(null,e):null)}function _s(e,t){if(Si())return null;os(e,t,!0)}function h0(){A0(function(){(re&6)!==0?Vi(yf,m0):Ns()})}function Rc(){if(gl===0){var e=ua;e===0&&(e=Tn,Tn<<=1,(Tn&261888)===0&&(Tn=256)),gl=e}return gl}function Ms(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mn(""+e)}function Us(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function g0(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=Ms((n[$e]||null).action),u=a.submitter;u&&(t=(t=u[$e]||null)?Ms(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new Rn("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(gl!==0){var r=u?Us(n,u):new FormData(n);tc(l,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(c.preventDefault(),r=u?Us(n,u):new FormData(n),tc(l,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Bc=0;Bc<pu.length;Bc++){var wc=pu[Bc],y0=wc.toLowerCase(),b0=wc[0].toUpperCase()+wc.slice(1);Et(y0,"on"+b0)}Et(fr,"onAnimationEnd"),Et(rr,"onAnimationIteration"),Et(or,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(Cm,"onTransitionRun"),Et(Hm,"onTransitionStart"),Et(Rm,"onTransitionCancel"),Et(sr,"onTransitionEnd"),Jl("onMouseEnter",["mouseout","mouseover"]),Jl("onMouseLeave",["mouseout","mouseover"]),Jl("onPointerEnter",["pointerout","pointerover"]),Jl("onPointerLeave",["pointerout","pointerover"]),El("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),El("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),El("onBeforeInput",["compositionend","keypress","textInput","paste"]),El("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),El("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),El("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sn));function Cs(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],r=c.instance,g=c.currentTarget;if(c=c.listener,r!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=g;try{i(n)}catch(x){qn(x)}n.currentTarget=null,i=r}else for(u=0;u<a.length;u++){if(c=a[u],r=c.instance,g=c.currentTarget,c=c.listener,r!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=g;try{i(n)}catch(x){qn(x)}n.currentTarget=null,i=r}}}}function le(e,t){var l=t[Fi];l===void 0&&(l=t[Fi]=new Set);var a=e+"__bubble";l.has(a)||(Hs(t,e,2,!1),l.add(a))}function qc(e,t,l){var a=0;t&&(a|=4),Hs(l,e,a,t)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Yc(e){if(!e[Ti]){e[Ti]=!0,Af.forEach(function(l){l!=="selectionchange"&&(p0.has(l)||qc(l,!1,e),qc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ti]||(t[Ti]=!0,qc("selectionchange",!1,t))}}function Hs(e,t,l,a){switch(rd(t)){case 2:var n=J0;break;case 8:n=K0;break;default:n=ef}l=n.bind(null,t,l,e),n=void 0,!iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Gc(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=Zl(c),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){a=i=u;continue e}c=c.parentNode}}a=a.return}qf(function(){var g=i,x=au(l),j=[];e:{var y=dr.get(e);if(y!==void 0){var b=Rn,B=e;switch(e){case"keypress":if(Cn(l)===0)break e;case"keydown":case"keyup":b=sm;break;case"focusin":B="focus",b=ru;break;case"focusout":B="blur",b=ru;break;case"beforeblur":case"afterblur":b=ru;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=hm;break;case fr:case rr:case or:b=lm;break;case sr:b=ym;break;case"scroll":case"scrollend":b=$d;break;case"wheel":b=pm;break;case"copy":case"cut":case"paste":b=nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Zf;break;case"toggle":case"beforetoggle":b=xm}var L=(t&4)!==0,be=!L&&(e==="scroll"||e==="scrollend"),m=L?y!==null?y+"Capture":null:y;L=[];for(var o=g,h;o!==null;){var z=o;if(h=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||h===null||m===null||(z=Ua(o,m),z!=null&&L.push(dn(o,z,h))),be)break;o=o.return}0<L.length&&(y=new b(y,B,null,l,x),j.push({event:y,listeners:L}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",y&&l!==lu&&(B=l.relatedTarget||l.fromElement)&&(Zl(B)||B[Ql]))break e;if((b||y)&&(y=x.window===x?x:(y=x.ownerDocument)?y.defaultView||y.parentWindow:window,b?(B=l.relatedTarget||l.toElement,b=g,B=B?Zl(B):null,B!==null&&(be=N(B),L=B.tag,B!==be||L!==5&&L!==27&&L!==6)&&(B=null)):(b=null,B=g),b!==B)){if(L=Xf,z="onMouseLeave",m="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(L=Zf,z="onPointerLeave",m="onPointerEnter",o="pointer"),be=b==null?y:Ma(b),h=B==null?y:Ma(B),y=new L(z,o+"leave",b,l,x),y.target=be,y.relatedTarget=h,z=null,Zl(x)===g&&(L=new L(m,o+"enter",B,l,x),L.target=h,L.relatedTarget=be,z=L),be=z,b&&B)t:{for(L=v0,m=b,o=B,h=0,z=m;z;z=L(z))h++;z=0;for(var G=o;G;G=L(G))z++;for(;0<h-z;)m=L(m),h--;for(;0<z-h;)o=L(o),z--;for(;h--;){if(m===o||o!==null&&m===o.alternate){L=m;break t}m=L(m),o=L(o)}L=null}else L=null;b!==null&&Rs(j,y,b,L,!1),B!==null&&be!==null&&Rs(j,be,B,L,!0)}}e:{if(y=g?Ma(g):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var ce=$f;else if(Wf(y))if(If)ce=_m;else{ce=Dm;var q=Nm}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?g&&tu(g.elementType)&&(ce=$f):ce=Om;if(ce&&(ce=ce(e,g))){Ff(j,ce,l,x);break e}q&&q(e,y,g),e==="focusout"&&g&&y.type==="number"&&g.memoizedProps.value!=null&&eu(y,"number",y.value)}switch(q=g?Ma(g):window,e){case"focusin":(Wf(q)||q.contentEditable==="true")&&(Il=q,gu=g,Ga=null);break;case"focusout":Ga=gu=Il=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,ur(j,l,x);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":ur(j,l,x)}var P;if(su)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else $l?Kf(e,l)&&(ne="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ne="onCompositionStart");ne&&(Lf&&l.locale!=="ko"&&($l||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&$l&&(P=Yf()):(Pt=x,uu="value"in Pt?Pt.value:Pt.textContent,$l=!0)),q=Ei(g,ne),0<q.length&&(ne=new Qf(ne,e,null,l,x),j.push({event:ne,listeners:q}),P?ne.data=P:(P=kf(l),P!==null&&(ne.data=P)))),(P=zm?jm(e,l):Tm(e,l))&&(ne=Ei(g,"onBeforeInput"),0<ne.length&&(q=new Qf("onBeforeInput","beforeinput",null,l,x),j.push({event:q,listeners:ne}),q.data=P)),g0(j,e,g,l,x)}Cs(j,t)})}function dn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Ei(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ua(e,l),n!=null&&a.unshift(dn(e,n,i)),n=Ua(e,t),n!=null&&a.push(dn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function v0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rs(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var c=l,r=c.alternate,g=c.stateNode;if(c=c.tag,r!==null&&r===a)break;c!==5&&c!==26&&c!==27||g===null||(r=g,n?(g=Ua(l,i),g!=null&&u.unshift(dn(l,g,r))):n||(g=Ua(l,i),g!=null&&u.push(dn(l,g,r)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var x0=/\r\n?/g,S0=/\u0000|\uFFFD/g;function Bs(e){return(typeof e=="string"?e:""+e).replace(x0,`
`).replace(S0,"")}function ws(e,t){return t=Bs(t),Bs(e)===t}function ye(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||kl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&kl(e,""+a);break;case"className":On(e,"class",a);break;case"tabIndex":On(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":On(e,l,a);break;case"style":Bf(e,a,i);break;case"data":if(t!=="object"){On(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Mn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&ye(e,t,"name",n.name,n,null),ye(e,t,"formEncType",n.formEncType,n,null),ye(e,t,"formMethod",n.formMethod,n,null),ye(e,t,"formTarget",n.formTarget,n,null)):(ye(e,t,"encType",n.encType,n,null),ye(e,t,"method",n.method,n,null),ye(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Mn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Ht);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Mn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":le("beforetoggle",e),le("toggle",e),Dn(e,"popover",a);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Dn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Wd.get(l)||l,Dn(e,l,a))}}function Xc(e,t,l,a,n,i){switch(l){case"style":Bf(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=l}}break;case"children":typeof a=="string"?kl(e,a):(typeof a=="number"||typeof a=="bigint")&&kl(e,""+a);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ht);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[$e]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Dn(e,l,a)}}}function Ve(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ye(e,t,i,u,l,null)}}n&&ye(e,t,"srcSet",l.srcSet,l,null),a&&ye(e,t,"src",l.src,l,null);return;case"input":le("invalid",e);var c=i=u=n=null,r=null,g=null;for(a in l)if(l.hasOwnProperty(a)){var x=l[a];if(x!=null)switch(a){case"name":n=x;break;case"type":u=x;break;case"checked":r=x;break;case"defaultChecked":g=x;break;case"value":i=x;break;case"defaultValue":c=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,t));break;default:ye(e,t,a,x,l,null)}}Uf(e,i,c,r,g,u,n,!1);return;case"select":le("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:ye(e,t,n,c,l,null)}t=i,l=u,e.multiple=!!a,t!=null?Kl(e,!!a,t,!1):l!=null&&Kl(e,!!a,l,!0);return;case"textarea":le("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:ye(e,t,u,c,l,null)}Hf(e,a,n,i);return;case"option":for(r in l)l.hasOwnProperty(r)&&(a=l[r],a!=null)&&(r==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ye(e,t,r,a,l,null));return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(a=0;a<sn.length;a++)le(sn[a],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in l)if(l.hasOwnProperty(g)&&(a=l[g],a!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ye(e,t,g,a,l,null)}return;default:if(tu(t)){for(x in l)l.hasOwnProperty(x)&&(a=l[x],a!==void 0&&Xc(e,t,x,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&ye(e,t,c,a,l,null))}function z0(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,r=null,g=null,x=null;for(b in l){var j=l[b];if(l.hasOwnProperty(b)&&j!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":r=j;default:a.hasOwnProperty(b)||ye(e,t,b,null,a,j)}}for(var y in a){var b=a[y];if(j=l[y],a.hasOwnProperty(y)&&(b!=null||j!=null))switch(y){case"type":i=b;break;case"name":n=b;break;case"checked":g=b;break;case"defaultChecked":x=b;break;case"value":u=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,t));break;default:b!==j&&ye(e,t,y,b,a,j)}}Pi(e,u,c,r,g,x,i,n);return;case"select":b=u=c=y=null;for(i in l)if(r=l[i],l.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":b=r;default:a.hasOwnProperty(i)||ye(e,t,i,null,a,r)}for(n in a)if(i=a[n],r=l[n],a.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":y=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==r&&ye(e,t,n,i,a,r)}t=c,l=u,a=b,y!=null?Kl(e,!!l,y,!1):!!a!=!!l&&(t!=null?Kl(e,!!l,t,!0):Kl(e,!!l,l?[]:"",!1));return;case"textarea":b=y=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ye(e,t,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":y=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&ye(e,t,u,n,a,i)}Cf(e,y,b);return;case"option":for(var B in l)y=l[B],l.hasOwnProperty(B)&&y!=null&&!a.hasOwnProperty(B)&&(B==="selected"?e.selected=!1:ye(e,t,B,null,a,y));for(r in a)y=a[r],b=l[r],a.hasOwnProperty(r)&&y!==b&&(y!=null||b!=null)&&(r==="selected"?e.selected=y&&typeof y!="function"&&typeof y!="symbol":ye(e,t,r,y,a,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in l)y=l[L],l.hasOwnProperty(L)&&y!=null&&!a.hasOwnProperty(L)&&ye(e,t,L,null,a,y);for(g in a)if(y=a[g],b=l[g],a.hasOwnProperty(g)&&y!==b&&(y!=null||b!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(d(137,t));break;default:ye(e,t,g,y,a,b)}return;default:if(tu(t)){for(var be in l)y=l[be],l.hasOwnProperty(be)&&y!==void 0&&!a.hasOwnProperty(be)&&Xc(e,t,be,void 0,a,y);for(x in a)y=a[x],b=l[x],!a.hasOwnProperty(x)||y===b||y===void 0&&b===void 0||Xc(e,t,x,y,a,b);return}}for(var m in l)y=l[m],l.hasOwnProperty(m)&&y!=null&&!a.hasOwnProperty(m)&&ye(e,t,m,null,a,y);for(j in a)y=a[j],b=l[j],!a.hasOwnProperty(j)||y===b||y==null&&b==null||ye(e,t,j,y,a,b)}function qs(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function j0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&qs(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var r=l[a],g=r.startTime;if(g>c)break;var x=r.transferSize,j=r.initiatorType;x&&qs(j)&&(r=r.responseEnd,u+=x*(r<c?1:(c-g)/(r-g)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qc=null,Zc=null;function Ai(e){return e.nodeType===9?e:e.ownerDocument}function Ys(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gs(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vc=null;function T0(){var e=window.event;return e&&e.type==="popstate"?e===Vc?!1:(Vc=e,!0):(Vc=null,!1)}var Xs=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,A0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(e){return Qs.resolve(null).then(e).catch(N0)}:Xs;function N0(e){setTimeout(function(){throw e})}function yl(e){return e==="head"}function Zs(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ea(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")mn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,mn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[_a]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&mn(e.ownerDocument.body);l=n}while(l);Ea(t)}function Ls(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Jc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Jc(l),$i(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function D0(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[_a])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function O0(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=zt(e.nextSibling),e===null))return null;return e}function Vs(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function Kc(e){return e.data==="$?"||e.data==="$~"}function kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _0(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wc=null;function Js(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return zt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Ks(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function ks(e,t,l){switch(t=Ai(l),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$i(e)}var jt=new Map,Ws=new Set;function Ni(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=M.d;M.d={f:M0,r:U0,D:C0,C:H0,L:R0,m:B0,X:q0,S:w0,M:Y0};function M0(){var e=Ft.f(),t=pi();return e||t}function U0(e){var t=Ll(e);t!==null&&t.tag===5&&t.type==="form"?so(t):Ft.r(e)}var za=typeof document>"u"?null:document;function Fs(e,t,l){var a=za;if(a&&typeof t=="string"&&t){var n=gt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Ws.has(n)||(Ws.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ve(t,"link",e),Ye(t),a.head.appendChild(t)))}}function C0(e){Ft.D(e),Fs("dns-prefetch",e,null)}function H0(e,t){Ft.C(e,t),Fs("preconnect",e,t)}function R0(e,t,l){Ft.L(e,t,l);var a=za;if(a&&e&&t){var n='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+gt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+gt(l.imageSizes)+'"]')):n+='[href="'+gt(e)+'"]';var i=n;switch(t){case"style":i=ja(e);break;case"script":i=Ta(e)}jt.has(i)||(e=E({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),jt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(hn(i))||t==="script"&&a.querySelector(gn(i))||(t=a.createElement("link"),Ve(t,"link",e),Ye(t),a.head.appendChild(t)))}}function B0(e,t){Ft.m(e,t);var l=za;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+gt(a)+'"][href="'+gt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ta(e)}if(!jt.has(i)&&(e=E({rel:"modulepreload",href:e},t),jt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(gn(i)))return}a=l.createElement("link"),Ve(a,"link",e),Ye(a),l.head.appendChild(a)}}}function w0(e,t,l){Ft.S(e,t,l);var a=za;if(a&&e){var n=Vl(a).hoistableStyles,i=ja(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(hn(i)))c.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},l),(l=jt.get(i))&&Fc(e,l);var r=u=a.createElement("link");Ye(r),Ve(r,"link",e),r._p=new Promise(function(g,x){r.onload=g,r.onerror=x}),r.addEventListener("load",function(){c.loading|=1}),r.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Di(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function q0(e,t){Ft.X(e,t);var l=za;if(l&&e){var a=Vl(l).hoistableScripts,n=Ta(e),i=a.get(n);i||(i=l.querySelector(gn(n)),i||(e=E({src:e,async:!0},t),(t=jt.get(n))&&$c(e,t),i=l.createElement("script"),Ye(i),Ve(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Y0(e,t){Ft.M(e,t);var l=za;if(l&&e){var a=Vl(l).hoistableScripts,n=Ta(e),i=a.get(n);i||(i=l.querySelector(gn(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=jt.get(n))&&$c(e,t),i=l.createElement("script"),Ye(i),Ve(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function $s(e,t,l,a){var n=(n=ee.current)?Ni(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=ja(l.href),l=Vl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=ja(l.href);var i=Vl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(hn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),jt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},jt.set(e,l),i||G0(n,e,l,u.state))),t&&a===null)throw Error(d(528,""));return u}if(t&&a!==null)throw Error(d(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ta(l),l=Vl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ja(e){return'href="'+gt(e)+'"'}function hn(e){return'link[rel="stylesheet"]['+e+"]"}function Is(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function G0(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ve(t,"link",l),Ye(t),e.head.appendChild(t))}function Ta(e){return'[src="'+gt(e)+'"]'}function gn(e){return"script[async]"+e}function Ps(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+gt(l.href)+'"]');if(a)return t.instance=a,Ye(a),a;var n=E({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ye(a),Ve(a,"style",n),Di(a,l.precedence,e),t.instance=a;case"stylesheet":n=ja(l.href);var i=e.querySelector(hn(n));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;a=Is(l),(n=jt.get(n))&&Fc(a,n),i=(e.ownerDocument||e).createElement("link"),Ye(i);var u=i;return u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),Ve(i,"link",a),t.state.loading|=4,Di(i,l.precedence,e),t.instance=i;case"script":return i=Ta(l.src),(n=e.querySelector(gn(i)))?(t.instance=n,Ye(n),n):(a=l,(n=jt.get(i))&&(a=E({},l),$c(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ye(n),Ve(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Di(a,l.precedence,e));return t.instance}function Di(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Oi=null;function ed(e,t,l){if(Oi===null){var a=new Map,n=Oi=new Map;n.set(l,a)}else n=Oi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[_a]||i[Xe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function td(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function X0(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ld(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Q0(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=ja(a.href),i=t.querySelector(hn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_i.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Ye(i);return}i=t.ownerDocument||t,a=Is(a),(n=jt.get(n))&&Fc(a,n),i=i.createElement("link"),Ye(i);var u=i;u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),Ve(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=_i.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Ic=0;function Z0(e,t){return e.stylesheets&&e.count===0&&Ui(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Ui(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ic===0&&(Ic=62500*j0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ui(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ic?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function _i(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mi=null;function Ui(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mi=new Map,t.forEach(L0,e),Mi=null,_i.call(e))}function L0(e,t){if(!(t.state.loading&4)){var l=Mi.get(e);if(l)var a=l.get(null);else{l=new Map,Mi.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=_i.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var yn={$$typeof:Ae,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function V0(e,t,l,a,n,i,u,c,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function ad(e,t,l,a,n,i,u,c,r,g,x,j){return e=new V0(e,t,l,u,r,g,x,j,c),t=1,i===!0&&(t|=24),i=ft(3,null,null,t),e.current=i,i.stateNode=e,t=Mu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Ru(i),e}function nd(e){return e?(e=ta,e):ta}function id(e,t,l,a,n,i){n=nd(n),a.context===null?a.context=n:a.pendingContext=n,a=il(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=ul(e,a,t),l!==null&&(at(l,e,t),Ka(l,e,t))}function ud(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Pc(e,t){ud(e,t),(e=e.alternate)&&ud(e,t)}function cd(e){if(e.tag===13||e.tag===31){var t=Ol(e,67108864);t!==null&&at(t,e,67108864),Pc(e,67108864)}}function fd(e){if(e.tag===13||e.tag===31){var t=mt();t=ki(t);var l=Ol(e,t);l!==null&&at(l,e,t),Pc(e,t)}}var Ci=!0;function J0(e,t,l,a){var n=S.T;S.T=null;var i=M.p;try{M.p=2,ef(e,t,l,a)}finally{M.p=i,S.T=n}}function K0(e,t,l,a){var n=S.T;S.T=null;var i=M.p;try{M.p=8,ef(e,t,l,a)}finally{M.p=i,S.T=n}}function ef(e,t,l,a){if(Ci){var n=tf(a);if(n===null)Gc(e,t,a,Hi,l),od(e,a);else if(W0(n,e,t,l,a))a.stopPropagation();else if(od(e,a),t&4&&-1<k0.indexOf(e)){for(;n!==null;){var i=Ll(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Tl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var r=1<<31-ut(u);c.entanglements[1]|=r,u&=~r}Mt(i),(re&6)===0&&(yi=nt()+500,on(0))}}break;case 31:case 13:c=Ol(i,2),c!==null&&at(c,i,2),pi(),Pc(i,2)}if(i=tf(a),i===null&&Gc(e,t,a,Hi,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Gc(e,t,a,null,l)}}function tf(e){return e=au(e),lf(e)}var Hi=null;function lf(e){if(Hi=null,e=Zl(e),e!==null){var t=N(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=Q(t),e!==null)return e;e=null}else if(l===31){if(e=Z(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hi=e,null}function rd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cd()){case yf:return 2;case bf:return 8;case jn:case Hd:return 32;case pf:return 268435456;default:return 32}default:return 32}}var af=!1,bl=null,pl=null,vl=null,bn=new Map,pn=new Map,xl=[],k0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function od(e,t){switch(e){case"focusin":case"focusout":bl=null;break;case"dragenter":case"dragleave":pl=null;break;case"mouseover":case"mouseout":vl=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(t.pointerId)}}function vn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ll(t),t!==null&&cd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function W0(e,t,l,a,n){switch(t){case"focusin":return bl=vn(bl,e,t,l,a,n),!0;case"dragenter":return pl=vn(pl,e,t,l,a,n),!0;case"mouseover":return vl=vn(vl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,vn(bn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,pn.set(i,vn(pn.get(i)||null,e,t,l,a,n)),!0}return!1}function sd(e){var t=Zl(e.target);if(t!==null){var l=N(t);if(l!==null){if(t=l.tag,t===13){if(t=Q(l),t!==null){e.blockedOn=t,Tf(e.priority,function(){fd(l)});return}}else if(t===31){if(t=Z(l),t!==null){e.blockedOn=t,Tf(e.priority,function(){fd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=tf(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);lu=a,l.target.dispatchEvent(a),lu=null}else return t=Ll(l),t!==null&&cd(t),e.blockedOn=l,!1;t.shift()}return!0}function dd(e,t,l){Ri(e)&&l.delete(t)}function F0(){af=!1,bl!==null&&Ri(bl)&&(bl=null),pl!==null&&Ri(pl)&&(pl=null),vl!==null&&Ri(vl)&&(vl=null),bn.forEach(dd),pn.forEach(dd)}function Bi(e,t){e.blockedOn===t&&(e.blockedOn=null,af||(af=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,F0)))}var wi=null;function md(e){wi!==e&&(wi=e,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){wi===e&&(wi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(lf(a||l)===null)continue;break}var i=Ll(l);i!==null&&(e.splice(t,3),t-=3,tc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ea(e){function t(r){return Bi(r,e)}bl!==null&&Bi(bl,e),pl!==null&&Bi(pl,e),vl!==null&&Bi(vl,e),bn.forEach(t),pn.forEach(t);for(var l=0;l<xl.length;l++){var a=xl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<xl.length&&(l=xl[0],l.blockedOn===null);)sd(l),l.blockedOn===null&&xl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[$e]||null;if(typeof i=="function")u||md(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[$e]||null)c=u.formAction;else if(lf(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),md(l)}}}function hd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function nf(e){this._internalRoot=e}qi.prototype.render=nf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var l=t.current,a=mt();id(l,a,e,t,null,null)},qi.prototype.unmount=nf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;id(e.current,2,null,e,null,null),pi(),t[Ql]=null}};function qi(e){this._internalRoot=e}qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=jf();e={blockedOn:null,target:e,priority:t};for(var l=0;l<xl.length&&t!==0&&t<xl[l].priority;l++);xl.splice(l,0,e),l===0&&sd(e)}};var gd=C.version;if(gd!=="19.2.3")throw Error(d(527,gd,"19.2.3"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=p(t),e=e!==null?O(e):null,e=e===null?null:e.stateNode,e};var $0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yi.isDisabled&&Yi.supportsFiber)try{Na=Yi.inject($0),it=Yi}catch{}}return Sn.createRoot=function(e,t){if(!A(e))throw Error(d(299));var l=!1,a="",n=zo,i=jo,u=To;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ad(e,1,!1,null,null,l,a,null,n,i,u,hd),e[Ql]=t.current,Yc(e),new nf(t)},Sn.hydrateRoot=function(e,t,l){if(!A(e))throw Error(d(299));var a=!1,n="",i=zo,u=jo,c=To,r=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),t=ad(e,1,!0,t,l??null,a,n,r,i,u,c,hd),t.context=nd(null),l=t.current,a=mt(),a=ki(a),n=il(a),n.callback=null,ul(l,n,a),l=a,t.current.lanes=l,Oa(t,l),Mt(t),e[Ql]=t.current,Yc(e),new qi(t)},Sn.version="19.2.3",Sn}var Ed;function ch(){if(Ed)return ff.exports;Ed=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(C){console.error(C)}}return v(),ff.exports=uh(),ff.exports}var fh=ch();const rh=Dd(fh),df=[{name:"Sky Blue",hex:"#A7C7E7"},{name:"Powder Blue",hex:"#B0E0E6"},{name:"Ice Blue",hex:"#D6F6FF"},{name:"Mint",hex:"#A8E6CF"},{name:"Aqua",hex:"#7FDBFF"},{name:"Periwinkle",hex:"#B4AEE8"},{name:"Lavender",hex:"#C3B1E1"},{name:"Light Teal",hex:"#7FE7DC"},{name:"Cool Grey",hex:"#B8C6DB"},{name:"Lilac",hex:"#D6C1ED"}];function oh({onAdd:v,existingCategories:C={}}){const[_,d]=ue.useState(""),[A,N]=ue.useState(""),[Q,Z]=ue.useState(!0),[D,p]=ue.useState(df[0].hex),O=Object.keys(C),E=new Set(Object.values(C));Od.useEffect(()=>{!Q&&A&&C[A]&&p(C[A])},[A,Q,C]);function H(X){if(X.preventDefault(),!_.trim())return alert("Please enter a habit name");if(!A.trim())return alert("Please enter or select a category");const F=A.trim(),Me=C[F]||D;v({name:_.trim(),category:F,color:Me}),d(""),N(""),p(df[0].hex),Z(!0)}const K=df.filter(X=>!E.has(X.hex)||D===X.hex);return f.jsxs("div",{className:"add-habit-bubble-wrapper",children:[f.jsxs("form",{onSubmit:H,className:"add-habit-bubble-form",children:[f.jsx("h2",{className:"add-habit-bubble-title",style:{color:"#6366f1",fontWeight:800,fontSize:"2.1rem",letterSpacing:"-0.01em"},children:"Create a New Habit"}),f.jsxs("div",{className:"add-habit-bubble-group",children:[f.jsx("label",{children:"Name"}),f.jsx("input",{type:"text",value:_,onChange:X=>d(X.target.value),placeholder:"What habit do you want to start today?",className:"add-habit-bubble-input",required:!0})]}),f.jsxs("div",{className:"add-habit-bubble-group",children:[f.jsx("label",{children:"Category"}),f.jsxs("div",{className:"add-habit-bubble-toggle-row",children:[f.jsx("button",{type:"button",className:`add-habit-bubble-toggle${Q?" active":""}`,onClick:()=>Z(!0),children:"New"}),f.jsx("button",{type:"button",className:`add-habit-bubble-toggle${Q?"":" active"}`,onClick:()=>Z(!1),children:"Existing"})]}),Q?f.jsx("input",{type:"text",value:A,onChange:X=>N(X.target.value),placeholder:"e.g. Health, Learning, Spiritual",className:"add-habit-bubble-input",required:!0}):f.jsxs("select",{value:A,onChange:X=>N(X.target.value),className:"add-habit-bubble-input",required:!0,children:[f.jsx("option",{value:"",children:"Select a category"}),O.map(X=>f.jsx("option",{value:X,children:X},X))]})]}),f.jsxs("div",{className:"add-habit-bubble-group",children:[f.jsx("label",{children:"Color"}),f.jsx("div",{className:"add-habit-bubble-colors",children:K.map(X=>f.jsx("button",{type:"button",className:`add-habit-bubble-color${D===X.hex?" selected":""}`,style:{backgroundColor:X.hex},onClick:()=>p(X.hex),title:X.name},X.hex))})]}),f.jsx("div",{className:"add-habit-bubble-actions",children:f.jsx("button",{type:"submit",className:"add-habit-bubble-btn",children:"Add Habit"})})]}),f.jsx("style",{jsx:!0,children:`
        .add-habit-bubble-wrapper {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(99,102,241,0.08);
          border: 2px solid #e0e7ff;
          padding: 1.5rem 3rem 1.5rem 3rem;
          max-width: 650px;
          width: 100%;
          min-width: 320px;
          margin: 0 auto;
        }
        .add-habit-bubble-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .add-habit-bubble-title {
          text-align: center;
          font-size: 1.6rem;
          font-weight: 700;
          color: #7c6ee6;
          margin-bottom: 0.5rem;
        }
        .add-habit-bubble-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .add-habit-bubble-input {
          border: none;
          border-radius: 12px;
          background: #fff;
          padding: 0.9rem 1.2rem;
          font-size: 1rem;
          box-shadow: 0 1px 4px rgba(99,102,241,0.04);
          outline: none;
          margin-top: 0.2rem;
        }
        .add-habit-bubble-toggle-row {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .add-habit-bubble-toggle {
          flex: 1;
          border: none;
          border-radius: 10px;
          background: #e0e7ff;
          color: #7c6ee6;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.6rem 0;
          transition: background 0.2s, color 0.2s;
          cursor: pointer;
        }
        .add-habit-bubble-toggle.active {
          background: linear-gradient(90deg, #a5b4fc 0%, #7c6ee6 100%);
          color: #fff;
        }
        .add-habit-bubble-toggle:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .add-habit-bubble-colors {
          display: flex;
          gap: 1.2rem;
          margin-top: 0.5rem;
        }
        .add-habit-bubble-color {
          width: 28px !important;
          height: 28px !important;
          min-width: 28px !important;
          min-height: 28px !important;
          max-width: 28px !important;
          max-height: 28px !important;
          aspect-ratio: 1 / 1 !important;
          border-radius: 50% !important;
          border: 2px solid transparent;
          cursor: pointer;
          transition: border 0.2s;
          box-sizing: border-box;
          display: block !important;
          padding: 0 !important;
        }
        .add-habit-bubble-color.selected {
          border: 2.5px solid #a5b4fc;
        }
        .add-habit-bubble-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 1.5rem;
        }
        .add-habit-bubble-btn {
          background: linear-gradient(90deg, #a5b4fc 0%, #7c6ee6 100%);
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          padding: 0.9rem 2.5rem;
          box-shadow: 0 2px 8px rgba(99,102,241,0.10);
          cursor: pointer;
          transition: background 0.2s;
        }
        .add-habit-bubble-btn:hover {
          background: linear-gradient(90deg, #7c6ee6 0%, #a5b4fc 100%);
        }
      `})]})}function sh({open:v,title:C,message:_,onConfirm:d,onCancel:A}){return v?f.jsxs("div",{className:"confirm-dialog-backdrop",children:[f.jsxs("div",{className:"confirm-dialog",children:[f.jsx("h3",{children:C}),f.jsx("p",{children:_}),f.jsxs("div",{className:"confirm-dialog-actions",children:[f.jsx("button",{className:"confirm-btn",onClick:d,children:"Yes"}),f.jsx("button",{className:"cancel-btn",onClick:A,children:"No"})]})]}),f.jsx("style",{jsx:!0,children:`
        .confirm-dialog-backdrop {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.18);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .confirm-dialog {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 24px 0 rgba(160, 180, 200, 0.18);
          padding: 2rem 2.5rem;
          min-width: 320px;
          max-width: 90vw;
          text-align: center;
        }
        .confirm-dialog-actions {
          margin-top: 1.5rem;
          display: flex;
          gap: 1.2rem;
          justify-content: center;
        }
        .confirm-btn {
          background: #e57373;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 0.5rem 1.2rem;
          font-weight: 700;
          cursor: pointer;
        }
        .cancel-btn {
          background: #f8fafc;
          color: #22223b;
          border: 1px solid #b5b5b5;
          border-radius: 6px;
          padding: 0.5rem 1.2rem;
          font-weight: 700;
          cursor: pointer;
        }
      `})]}):null}function dh({onNavigate:v,currentPage:C,forceShowAuthModal:_,onCloseAuthModal:d}){const[A,N]=ue.useState(!1),[Q,Z]=ue.useState(!1),[D,p]=ue.useState(!1),[O,E]=ue.useState({username:"",email:"",password:""}),[H,K]=ue.useState(null),[X,F]=ue.useState(!1),[Me,xe]=ue.useState(!1);ue.useEffect(()=>{const Y=localStorage.getItem("user");if(Y)try{K(JSON.parse(Y))}catch{console.error("Failed to parse user data")}else K(null)},[Q]),ue.useEffect(()=>{_&&Z(!0)},[_]);const Ke=()=>{try{return JSON.parse(localStorage.getItem("users")||"[]")}catch{return[]}},Ae=(Y,oe,Ne)=>{const Be=Ke();Be.push({username:Y,email:oe,password:Ne}),localStorage.setItem("users",JSON.stringify(Be))},qe=Y=>Ke().some(Ne=>Ne.email===Y),Fe=Y=>Ke().find(Ne=>Ne.email===Y),V=Y=>{if(Y.preventDefault(),!O.email||!O.password){alert("Please fill in all fields");return}if(D){if(!O.username){alert("Please enter a username");return}if(qe(O.email)){alert("This email is already registered. Please sign in."),p(!1);return}Ae(O.username,O.email,O.password),localStorage.setItem("user",JSON.stringify({username:O.username,email:O.email})),K({username:O.username,email:O.email}),Z(!1),E({username:"",email:"",password:""}),v&&v("profile")}else{if(!qe(O.email)){F(!0);return}const oe=Fe(O.email);if(oe.password!==O.password){xe(!0);return}localStorage.setItem("user",JSON.stringify({username:oe.username,email:O.email})),K({username:oe.username,email:O.email}),Z(!1),E({username:"",email:"",password:""}),v&&v("profile")}},R=Y=>{const{name:oe,value:Ne}=Y.target;E(Be=>({...Be,[oe]:Ne}))},k=[{id:"home",label:"Home"},{id:"dashboard",label:"Dashboard"},{id:"analytics",label:"Analytics"}];return f.jsxs("header",{className:"professional-header",children:[f.jsx("div",{className:"container",children:f.jsxs("div",{className:"header-content",children:[f.jsx("div",{className:"logo-section",children:f.jsx("span",{className:"logo-text",children:"Habit Studio"})}),f.jsx("nav",{className:`nav ${A?"mobile-open":""}`,children:k.map(Y=>f.jsx("button",{className:`nav-item ${C===Y.id?"active":""}`,onClick:()=>{v&&v(Y.id),N(!1)},children:Y.label},Y.id))}),f.jsxs("div",{className:"header-actions",children:[f.jsx("button",{className:"nav-item","aria-label":"Log in",onClick:()=>{Z(!0),p(!1)},style:{fontSize:"1rem",borderRadius:"20px",padding:"0.3rem 0.9rem",color:"#fff",background:"#4f46e5",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontWeight:600,textDecoration:"none"},children:"Log in"}),f.jsx("button",{className:"mobile-menu-toggle",onClick:()=>N(!A),children:A?"✕":"☰"})]})]})}),X&&f.jsx("div",{className:"modal-overlay",style:{zIndex:3e3},children:f.jsxs("div",{className:"modal-content",style:{textAlign:"center",padding:"2.5rem 1.2rem",maxWidth:"340px",width:"90%"},children:[f.jsx("h2",{style:{color:"var(--primary,#6366f1)",marginBottom:"1rem"},children:"Gmail Not Registered"}),f.jsx("p",{style:{color:"var(--slate-700)",marginBottom:"1.5rem",fontSize:"1.1rem"},children:"This Gmail was not registered to any account yet."}),f.jsx("button",{className:"btn-primary",style:{width:"100%",marginBottom:"1rem"},onClick:()=>{p(!0),F(!1)},children:"Sign Up"}),f.jsx("button",{className:"btn-secondary",style:{width:"100%"},onClick:()=>F(!1),children:"Cancel"})]})}),Q&&f.jsx("div",{className:"modal-overlay",onClick:()=>{Z(!1),d&&d()},children:f.jsxs("div",{className:"modal-content",onClick:Y=>Y.stopPropagation(),children:[f.jsxs("div",{className:"modal-header",children:[f.jsx("h2",{children:D?"Create Account":"Sign In"}),f.jsx("button",{className:"modal-close",onClick:()=>{Z(!1),d&&d()},children:"✕"})]}),f.jsx("div",{className:"modal-body",children:f.jsxs("form",{onSubmit:V,style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[f.jsx("p",{style:{marginBottom:"0.5rem",color:"var(--slate-600)",fontWeight:600,fontSize:"1.1rem"},children:D?"Create your account":"Sign in to your account"}),D&&f.jsx("input",{type:"text",name:"username",placeholder:"Username",className:"modal-input",value:O.username,onChange:R,autoComplete:"username",required:!0}),f.jsx("input",{type:"email",name:"email",placeholder:"Email address",className:"modal-input",value:O.email,onChange:R,autoComplete:"email",required:!0}),f.jsx("input",{type:"password",name:"password",placeholder:"Password",className:"modal-input",value:O.password,onChange:R,autoComplete:"current-password",required:!0}),f.jsx("button",{className:"btn-primary",style:{width:"100%",marginTop:"0.5rem"},type:"submit",children:D?"Create Account":"Sign In"}),f.jsx("div",{className:"modal-footer",style:{textAlign:"center",marginTop:"0.5rem",color:"#6b7280"},children:D?f.jsxs("span",{children:["Already have an account? ",f.jsx("a",{style:{color:"var(--primary,#6366f1)",cursor:"pointer",fontWeight:600},onClick:()=>p(!1),children:"Sign In"})]}):f.jsxs("span",{children:["Don't have an account? ",f.jsx("a",{style:{color:"var(--primary,#6366f1)",cursor:"pointer",fontWeight:600},onClick:()=>p(!0),children:"Sign Up"})]})})]})})]})}),f.jsx("style",{children:`
        .professional-header {
          background: white;
          border-bottom: 1px solid var(--slate-200);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          width: 100%;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .logo-section:hover {
          opacity: 0.8;
        }

        .logo-icon {
          font-size: 1.75rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: #000;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .nav {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .nav-item {
          background: none;
          border: none;
          padding: 0.5rem 1rem;
          color: var(--slate-600);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          border-radius: 6px;
        }

        .nav-item:hover {
          color: var(--primary);
          background: rgba(99, 102, 241, 0.05);
        }

        .nav-item.active {
          color: var(--primary);
          background: rgba(99, 102, 241, 0.1);
          border-bottom: 2px solid var(--primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }



        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--slate-600);
          cursor: pointer;
          padding: 0;
        }

        @media (max-width: 768px) {
          .nav {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-bottom: 1px solid var(--slate-200);
            padding: 1rem 1.5rem;
            gap: 0;
            width: 100%;
          }

          .nav.mobile-open {
            display: flex;
          }

          .nav-item {
            width: 100%;
            text-align: left;
            padding: 0.75rem;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .header-content {
            flex-wrap: wrap;
          }

          .logo-text {
            font-size: 1.25rem;
          }
        }

        .auth-toggle {
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .auth-toggle:hover {
          color: var(--primary-dark);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          z-index: 2001;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: var(--slate-900);
        }

        .modal-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--slate-500);
          padding: 0;
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .modal-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--slate-200);
          border-radius: 12px;
          font-size: 1rem;
          box-sizing: border-box;
        }

        .modal-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
      `})]})}function mh({onGetStarted:v}){return f.jsxs("section",{className:"hero-section",children:[f.jsx("div",{className:"container",children:f.jsxs("div",{className:"hero-wrapper",children:[f.jsxs("div",{className:"hero-content",children:[f.jsx("div",{className:"hero-badge",children:"✨ Make habits stick with us ✨"}),f.jsxs("h1",{className:"hero-title",children:["Transform Yourself,",f.jsx("br",{}),"One Day at a Time"]}),f.jsx("p",{className:"hero-subtitle",style:{whiteSpace:"nowrap"},children:"The journey to becoming your best self with Habit Studio."}),f.jsxs("div",{className:"hero-stats",children:[f.jsxs("div",{className:"stat-item",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[f.jsx("span",{className:"stat-number",style:{marginBottom:0,display:"block"},children:"∞"}),f.jsx("span",{className:"stat-label",style:{display:"block",textAlign:"center"},children:"Possibilities"})]}),f.jsxs("div",{className:"stat-item",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[f.jsx("span",{className:"stat-number",style:{marginBottom:0,display:"block"},children:"2 mins"}),f.jsx("span",{className:"stat-label",style:{display:"block",textAlign:"center"},children:"Quick Setup"})]}),f.jsxs("div",{className:"stat-item",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[f.jsx("span",{className:"stat-number",style:{marginBottom:0,display:"block"},children:"4.8★"}),f.jsx("span",{className:"stat-label",style:{display:"block",textAlign:"center"},children:"Average Rating"})]})]}),f.jsx("div",{className:"hero-actions",style:{justifyContent:"center",width:"100%",display:"flex"},children:f.jsx("button",{className:"btn-primary btn-lg",onClick:v,children:"Start Your Journey"})})]}),f.jsx("div",{className:"hero-visual",children:f.jsxs("div",{className:"dashboard-preview",children:[f.jsxs("div",{className:"preview-header",children:[f.jsx("h3",{children:"Today's Progress"}),f.jsx("span",{className:"preview-badge",children:"7-Day Streak"})]}),f.jsxs("div",{className:"preview-item",children:[f.jsx("span",{children:"Drink Water"}),f.jsx("div",{className:"progress",children:f.jsx("div",{className:"progress-bar",style:{width:"100%"}})})]}),f.jsxs("div",{className:"preview-item",children:[f.jsx("span",{children:"Morning Exercise"}),f.jsx("div",{className:"progress",children:f.jsx("div",{className:"progress-bar",style:{width:"60%"}})})]}),f.jsxs("div",{className:"preview-item",children:[f.jsx("span",{children:"Reading"}),f.jsx("div",{className:"progress",children:f.jsx("div",{className:"progress-bar",style:{width:"40%"}})})]})]})})]})}),f.jsx("style",{jsx:!0,children:`
        .hero-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .hero-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin: 0 auto;
          max-width: 1280px;
        }

        .hero-content {
          animation: slideInLeft 0.6s ease;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 9999px;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #000000;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--slate-600);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
          padding: 2rem 0;
          border-top: 1px solid var(--slate-200);
          border-bottom: 1px solid var(--slate-200);
        }

        .stat-item {
          text-align: left;
        }

        .stat-number {
          font-size: 1.875rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--slate-600);
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-visual {
          animation: slideInRight 0.6s ease;
        }

        .dashboard-preview {
          background: var(--bg-primary);
          border-radius: 12px;
          border: 1px solid var(--slate-200);
          padding: 2rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          color: var(--text-primary);
        }

        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .preview-header h3 {
          font-size: 1.125rem;
          margin: 0;
          color: var(--text-primary);
        }

        .preview-badge {
          background: rgba(16, 185, 129, 0.1);
          color: var(--success);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .preview-item {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .preview-item span {
          font-size: 0.875rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .progress {
          height: 6px;
          background: var(--slate-200);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        @media (max-width: 768px) {
          .hero-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.25rem;
          }

          .hero-stats {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .hero-actions {
            flex-direction: column;
          }

          button {
            width: 100%;
          }
        }
      `})]})}function hh(){const v=[{icon:"📈",title:"Smart Tracking",description:"Track your habits with daily check-ins and visual progress indicators."},{icon:"🔥",title:"Streak Counter",description:"Build momentum with streak tracking. Never break the chain!"},{icon:"🎯",title:"Goal Setting",description:"Set meaningful goals and track progress towards achieving them."},{icon:"📊",title:"Analytics",description:"Visualize your progress with detailed analytics and insights."},{icon:"🏆",title:"Achievements",description:"Unlock badges and rewards as you hit your milestones."},{icon:"💬",title:"Community",description:"Connect with others and get motivated by shared success stories."}],C=v.slice(0,4),_=v.slice(4);return f.jsxs("section",{className:"features-section",children:[f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"features-header",children:[f.jsx("span",{className:"features-badge",children:"Features"}),f.jsx("h2",{children:"Why Choose Habit Studio?"}),f.jsx("p",{className:"features-desc",children:"Everything you need to build lasting habits and achieve your goals"})]}),f.jsx("div",{className:"features-grid",children:C.map((d,A)=>f.jsxs("div",{className:"feature-card",children:[f.jsx("div",{className:"feature-icon-wrapper",children:f.jsx("span",{className:"feature-icon",children:d.icon})}),f.jsx("h3",{children:d.title}),f.jsx("p",{children:d.description})]},A))}),f.jsxs("div",{className:"upcoming-section",children:[f.jsx("span",{className:"upcoming-badge",children:"Coming Soon"}),f.jsx("div",{className:"upcoming-grid",children:_.map((d,A)=>f.jsxs("div",{className:"feature-card upcoming-card",children:[f.jsx("div",{className:"feature-icon-wrapper upcoming-icon",children:f.jsx("span",{className:"feature-icon",children:d.icon})}),f.jsx("h3",{children:d.title}),f.jsx("p",{children:d.description})]},A))})]})]}),f.jsx("style",{jsx:!0,children:`
        .features-section {
          padding: 5rem 2rem;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          width: 100%;
          box-sizing: border-box;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .features-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .features-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          border-radius: 999px;
          margin-bottom: 1.25rem;
          letter-spacing: 0.025em;
        }

        .features-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin: 0 0 1rem 0;
          letter-spacing: -0.025em;
        }

        .features-desc {
          font-size: 1.125rem;
          color: #64748b;
          margin: 0;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }

        .upcoming-section {
          margin-top: 3rem;
          text-align: center;
        }

        .upcoming-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          border-radius: 999px;
          margin-bottom: 1.5rem;
          letter-spacing: 0.025em;
        }

        .upcoming-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .upcoming-card {
          opacity: 0.9;
          border-style: dashed;
        }

        .upcoming-icon {
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
        }

        .feature-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 2rem 1.75rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .feature-card:hover {
          border-color: #c7d2fe;
          box-shadow: 0 20px 40px -12px rgba(99, 102, 241, 0.15);
          transform: translateY(-4px);
        }

        .feature-icon-wrapper {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
        }

        .feature-icon {
          font-size: 2rem;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 0.75rem 0;
        }

        .feature-card p {
          color: #64748b;
          font-size: 0.9375rem;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .upcoming-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 500px;
          }
        }

        @media (max-width: 640px) {
          .features-section {
            padding: 3rem 1rem;
          }

          .features-header h2 {
            font-size: 1.875rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .upcoming-grid {
            grid-template-columns: 1fr;
            max-width: 300px;
          }

          .feature-card {
            padding: 1.5rem 1.25rem;
          }
        }
      `})]})}function gh({habits:v=[],logs:C={},onToggle:_,onDeleteHabit:d,onDeleteCategory:A}){const[N,Q]=ue.useState(null),Z=new Date().toISOString().slice(0,10),D=v.reduce((p,O)=>{const E=O.category||"Uncategorized";return p[E]||(p[E]={color:O.color,habits:[]}),p[E].color=O.color||p[E].color,p[E].habits.push(O),p},{});return f.jsxs("div",{style:{background:"transparent",padding:"0.5rem 0.7rem 0.8rem 0.7rem",marginBottom:"1.3rem",maxWidth:820,width:"100%",fontFamily:"Inter, Arial, sans-serif",marginLeft:"auto",marginRight:"auto"},children:[f.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:f.jsx("h2",{style:{color:"#6366f1",fontWeight:800,fontSize:"2.1rem",margin:"0.5rem 0 1.5rem 0",letterSpacing:"-0.01em",textAlign:"center"},children:"Today's Habits"})}),v.length!==0&&f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.1rem"},children:Object.entries(D).map(([p,O])=>f.jsxs("div",{style:{marginBottom:"0.2rem"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.3rem",gap:"0.4rem"},children:[f.jsx("div",{style:{width:6,height:18,borderRadius:3,background:O.color||"#6366f1",marginRight:6}}),f.jsx("span",{style:{fontWeight:700,fontSize:"0.98rem",color:O.color||"#6366f1",fontFamily:"Inter, Arial, sans-serif",letterSpacing:"-0.01em",textShadow:"0 1px 3px #e0e7ff",minWidth:120,display:"inline-block"},children:p}),f.jsx("div",{style:{flex:1}}),f.jsx("button",{title:`Delete category '${p}'`,onClick:()=>Q({type:"category",id:p}),style:{background:"none",border:"none",marginLeft:8,cursor:"pointer",borderRadius:6,padding:"0.1rem 0.4rem",display:"flex",alignItems:"center",transition:"background 0.15s"},onMouseOver:E=>E.currentTarget.style.background="#ffeaea",onMouseOut:E=>E.currentTarget.style.background="none",children:f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("circle",{cx:"10",cy:"10",r:"8.5",fill:"#f8fafc",stroke:"#e57373",strokeWidth:"1.5"}),f.jsx("path",{d:"M7 7L13 13M13 7L7 13",stroke:"#e57373",strokeWidth:"2",strokeLinecap:"round"})]})})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.8rem"},children:[O.habits.map(E=>{const H=C[Z]?.[E.id]===!0;return f.jsxs("label",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:H?"rgba(99, 102, 241, 0.15)":E.color||"#e0e7ff",borderRadius:22,padding:"0.55rem 0.9rem 0.55rem 0.7rem",boxShadow:H?"0 2px 10px 0 #6366f133":"0 1px 3px 0 rgba(99,102,241,0.04)",cursor:"pointer",height:"44px",fontWeight:500,color:H?"#94a3b8":"#22223b",fontSize:"0.91rem",border:H?"2px solid #6366f1":"2px solid transparent",transition:"all 0.2s ease",position:"relative",filter:H?"blur(0.8px) brightness(0.95)":"none",opacity:H?.7:1,textDecoration:H?"line-through":"none"},children:[f.jsxs("span",{style:{display:"flex",alignItems:"center",overflow:"hidden"},children:[f.jsx("input",{type:"checkbox",checked:H,onChange:()=>_(E.id,!H),style:{marginRight:6,accentColor:"#6366f1",width:16,height:16,borderRadius:8,flexShrink:0}}),f.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:E.name})]}),f.jsx("button",{title:`Delete habit '${E.name}'`,onClick:K=>{K.preventDefault(),K.stopPropagation(),Q({type:"habit",id:E.id})},style:{background:"none",border:"none",marginLeft:8,cursor:"pointer",borderRadius:6,padding:"0.1rem 0.3rem",display:"flex",alignItems:"center",transition:"background 0.15s",flexShrink:0},onMouseOver:K=>K.currentTarget.style.background="#ffeaea",onMouseOut:K=>K.currentTarget.style.background="none",children:f.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsx("circle",{cx:"10",cy:"10",r:"8.5",fill:"#f8fafc",stroke:"#e57373",strokeWidth:"1.5"}),f.jsx("path",{d:"M7 7L13 13M13 7L7 13",stroke:"#e57373",strokeWidth:"2",strokeLinecap:"round"})]})})]},E.id)}),f.jsx(sh,{open:!!N,title:N?.type==="category"?"Delete Category":"Delete Habit",message:N?.type==="category"?"Are you sure you want to delete this category and all its habits? This cannot be undone.":"Are you sure you want to delete this habit? This cannot be undone.",onConfirm:()=>{N?.type==="category"&&A&&A(N.id),N?.type==="habit"&&d&&d(N.id),Q(null)},onCancel:()=>Q(null)})]})]},p))})]})}const yh=[{id:"1",name:"Drink Water",category:"Health",color:"#a8d8c8",completed:18,total:21},{id:"2",name:"Read Book",category:"Personal Growth",color:"#c4b0e8",completed:15,total:21},{id:"3",name:"Exercise",category:"Health",color:"#a8d8c8",completed:12,total:21},{id:"4",name:"Meditate",category:"Mindfulness",color:"#ffe4a8",completed:10,total:21}];function bh(v){return v.reduce((C,_)=>(C[_.category]||(C[_.category]=[]),C[_.category].push(_),C),{})}function ph({habits:v=yh,logs:C={},onToggleTodayHabit:_,onDeleteHabit:d,onDeleteCategory:A}){const N=Object.keys(C).sort(),Q=bh(v);function Z(O){return N.filter(E=>C[E]&&C[E][O]===!0).length}function D(O){return N.filter(E=>C[E]&&C[E][O]!==void 0).length}const p=v&&v.length>0;return f.jsx("div",{style:{minHeight:"80vh",background:"linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",padding:"3rem 0"},children:f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2.5rem",maxWidth:900,margin:"0 auto"},children:[f.jsx(gh,{habits:v,logs:C,onToggle:_,onDeleteHabit:d,onDeleteCategory:A}),!p&&f.jsxs("div",{style:{background:"rgba(255,255,255,0.95)",border:"2px solid #dbeafe",borderRadius:"14px",boxShadow:"0 2px 16px 0 rgba(99,102,241,0.04)",padding:"1rem 1.5rem",margin:"1rem auto",maxWidth:320,textAlign:"center",fontFamily:"Inter, Arial, sans-serif"},children:[f.jsx("h2",{style:{color:"#22223b",fontWeight:700,fontSize:"1.25rem",marginBottom:"0.5rem",whiteSpace:"nowrap"},children:"No analytics yet"}),f.jsx("p",{style:{color:"#64748b",fontSize:"0.95rem",fontWeight:400,margin:0},children:"Start tracking your progress by creating your first habit."})]}),p&&Object.entries(Q).map(([O,E])=>{const H=E[0]?.color||"#b2b3c6";return f.jsxs("div",{style:{marginBottom:"2.5rem"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.5rem",gap:"0.5rem"},children:[f.jsx("div",{style:{width:6,height:32,borderRadius:4,background:H}}),f.jsx("span",{style:{fontWeight:700,fontSize:"1.5rem",color:H,fontFamily:"Inter, Arial, sans-serif",letterSpacing:"-0.01em"},children:O})]}),f.jsx("div",{style:{background:"rgba(255,255,255,0.95)",borderRadius:18,boxShadow:"0 2px 16px 0 rgba(99,102,241,0.08)",padding:"1rem 1.25rem",border:"none",maxWidth:"100%"},children:f.jsxs("table",{style:{width:"100%",borderCollapse:"separate",borderSpacing:0,background:"transparent",borderRadius:12,overflow:"hidden",fontFamily:"Inter, Arial, sans-serif"},children:[f.jsx("thead",{children:f.jsxs("tr",{style:{background:"transparent",color:"#22292f",fontWeight:700,fontSize:"0.9rem",letterSpacing:"0.04em"},children:[f.jsx("th",{style:{padding:"0.5rem 0.5rem",textAlign:"left",borderBottom:"2px solid #e3e6f3",fontWeight:700,color:"#22292f"},children:"HABIT"}),f.jsx("th",{style:{padding:"0.5rem 0.5rem",textAlign:"center",borderBottom:"2px solid #e3e6f3",fontWeight:700,color:"#22292f"},children:"DAYS ACTIVE"}),f.jsx("th",{style:{padding:"0.5rem 0.5rem",textAlign:"center",borderBottom:"2px solid #e3e6f3",fontWeight:700,color:"#22292f"},children:"COMPLETED"}),f.jsx("th",{style:{padding:"0.5rem 0.5rem",textAlign:"center",borderBottom:"2px solid #e3e6f3",fontWeight:700,color:"#22292f"},children:"MISSED"}),f.jsx("th",{style:{padding:"0.5rem 0.5rem",textAlign:"center",borderBottom:"2px solid #e3e6f3",fontWeight:700,color:"#22292f"},children:"SUCCESS RATE"})]})}),f.jsx("tbody",{children:E.map(K=>{const X=D(K.id),F=Z(K.id),Me=X-F,xe=X>0?Math.round(F/X*100):0;return f.jsxs("tr",{style:{background:"transparent"},children:[f.jsx("td",{style:{padding:"0.6rem 0.5rem",fontWeight:600,color:"#22292f",borderBottom:"1px solid #ececf6",fontSize:"0.95rem"},children:K.name}),f.jsx("td",{style:{padding:"0.6rem 0.5rem",color:"#22292f",borderBottom:"1px solid #ececf6",textAlign:"center",fontWeight:500,fontSize:"0.9rem"},children:X}),f.jsx("td",{style:{padding:"0.6rem 0.5rem",color:"#22292f",borderBottom:"1px solid #ececf6",textAlign:"center",fontWeight:500,fontSize:"0.9rem"},children:F}),f.jsx("td",{style:{padding:"0.6rem 0.5rem",color:"#22292f",borderBottom:"1px solid #ececf6",textAlign:"center",fontWeight:500,fontSize:"0.9rem"},children:Me}),f.jsx("td",{style:{padding:"0.6rem 0.5rem",color:"#22292f",borderBottom:"1px solid #ececf6",textAlign:"center",fontWeight:700,fontSize:"0.9rem"},children:X>0?`${xe}%`:"—"})]},K.id)})})]})})]},O)})]})})}const vh=({onAdd:v,existingCategories:C})=>f.jsx("div",{className:"dashboard-main-container",children:f.jsx("div",{className:"dashboard-content-wrapper",style:{minHeight:180,paddingTop:"3.5rem",paddingBottom:"3rem"},children:f.jsx(oh,{onAdd:v,existingCategories:C})})});function xh(){const v=[{number:"1",title:"Create Your First Habit",description:"Add the habits you want to track. Be specific and measurable.",icon:""},{number:"2",title:"Track Daily",description:"Check off your habits each day. Consistency is key to building success.",icon:""},{number:"3",title:"Build Your Streak",description:"Watch your streak grow. The longer you maintain it, the stronger the habit.",icon:""},{number:"4",title:"Achieve Your Goals",description:"Reach milestones, earn rewards, and celebrate your transformation.",icon:""}];return f.jsxs("section",{className:"onboarding-section",children:[f.jsxs("div",{className:"container",children:[f.jsx("div",{className:"onboarding-header",children:f.jsx("h2",{children:"How It Works"})}),f.jsx("div",{className:"steps-container",children:v.map((C,_)=>f.jsxs("div",{className:"step",children:[f.jsx("div",{className:"step-icon",children:C.icon}),f.jsx("div",{className:"step-number",children:C.number}),f.jsx("h3",{children:C.title}),f.jsx("p",{children:C.description}),_<v.length-1&&f.jsx("div",{className:"step-arrow",children:"→"})]},_))})]}),f.jsx("style",{jsx:!0,children:`
        .onboarding-section {
          padding: 6rem 0;
          background: var(--bg-primary);
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .onboarding-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .onboarding-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .onboarding-header p {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin: 0 auto;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
          margin: 0 auto;
          max-width: 1200px;
          align-items: stretch;
        }

        .step {
          text-align: center;
          position: relative;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: 20px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100%;
          color: var(--text-primary);
        }

        .step:hover {
          border-color: var(--primary);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.1);
          transform: translateY(-8px);
        }

        .step-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .step-number {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.25rem;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .step h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .step p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .step-arrow {
          position: absolute;
          right: -30px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.5rem;
          color: var(--primary);
          font-weight: bold;
        }

        @media (max-width: 1024px) {
          .step-arrow {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .onboarding-section {
            padding: 3rem 0;
          }

          .onboarding-header h2 {
            font-size: 2rem;
          }

          .steps-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .step {
            padding: 1.5rem;
          }
        }
      `})]})}const Gi=[{name:"Sarah Chen",role:"Product Manager",content:"Habit Studio transformed my daily routine. The streak counter keeps me motivated every single day!"},{name:"Marcus Johnson",role:"Fitness Enthusiast",content:"I finally stuck with my workout routine for 90 days straight. This app made it possible."},{name:"Emma Williams",role:"Student",content:"The analytics feature helped me understand my study patterns and improve my productivity."},{name:"Carlos Rivera",role:"Entrepreneur",content:"I love how easy it is to track my habits. The reminders keep me on track even on busy days."},{name:"Priya Patel",role:"Software Engineer",content:"The streak feature is so motivating! I haven’t missed a day of meditation in months."},{name:"Liam O’Connor",role:"Designer",content:"The interface is beautiful and intuitive. I recommend it to all my friends."},{name:"Ava Müller",role:"Researcher",content:"Habit Studio helps me balance work and life. The analytics are a game changer."},{name:"Noah Kim",role:"Fitness Coach",content:"My clients love using this app to build healthy routines. It’s a must-have!"},{name:"Sofia Rossi",role:"Teacher",content:"I use Habit Studio to encourage my students to develop good study habits. It works wonders."},{name:"David Lee",role:"Photographer",content:"Tracking my creative habits has never been easier. I feel more productive every week."},{name:"Maya Singh",role:"Nutritionist",content:"The daily check-ins help my clients stay accountable. Fantastic tool!"},{name:"Lucas Dubois",role:"Student",content:"I finally managed to stick to my reading goals. The app is simple and effective."}];function Ad({testimonial:v}){return f.jsxs("div",{className:"testimonial-card",children:[f.jsx("div",{className:"testimonial-header",children:f.jsxs("div",{children:[f.jsx("p",{className:"testimonial-name",children:v.name}),f.jsx("p",{className:"testimonial-role",children:v.role})]})}),f.jsxs("p",{className:"testimonial-content",children:['"',v.content,'"']}),f.jsx("div",{className:"testimonial-rating",children:"⭐⭐⭐⭐⭐"})]})}function Sh(){const v=[...Gi,...Gi],C=[...Gi,...Gi];return f.jsxs("section",{className:"testimonials-section",children:[f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"testimonials-header",children:[f.jsx("h2",{children:"Loved by Thousands"}),f.jsx("p",{style:{whiteSpace:"nowrap"},children:"Join thousands of users building better habits with Habit Studio."})]}),f.jsx("div",{className:"marquee-row marquee-left",children:f.jsx("div",{className:"marquee-track",children:v.map((_,d)=>f.jsx(Ad,{testimonial:_},`row1-${d}`))})}),f.jsx("div",{className:"marquee-row marquee-right",children:f.jsx("div",{className:"marquee-track",children:C.map((_,d)=>f.jsx(Ad,{testimonial:_},`row2-${d}`))})})]}),f.jsx("style",{jsx:!0,children:`
        .testimonials-section {
          padding: 3.5rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
        .testimonials-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .testimonials-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--slate-900);
        }
        .testimonials-header p {
          font-size: 1.125rem;
          color: var(--slate-600);
          max-width: 500px;
          margin: 0 auto;
        }
        .marquee-row {
          width: 100%;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .testimonials-section:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-left .marquee-track {
          animation-name: marqueeLeft;
          animation-duration: 30s;
        }
        .marquee-right .marquee-track {
          animation-name: marqueeRight;
          animation-duration: 30s;
        }
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .testimonial-card {
          background: white;
          border-radius: 22px;
          padding: 1.1rem 1.1rem;
          border: 1px solid var(--slate-200);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-width: 240px;
          max-width: 300px;
          margin: 0 0.7rem;
        }
        .testimonial-header {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.7rem;
        }

        .testimonial-name {
          font-weight: 600;
          color: var(--slate-900);
          margin: 0;
          font-size: 1rem;
        }
        .testimonial-role {
          font-size: 0.875rem;
          color: #6366f1;
          font-weight: 500;
          margin: 0.25rem 0 0 0;
          background: linear-gradient(135deg, #e0e7ff 0%, #ede9fe 100%);
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          display: inline-block;
        }
        .testimonial-content {
          color: var(--slate-600);
          font-style: italic;
          line-height: 1.5;
          margin-bottom: 0.6rem;
          flex-grow: 1;
        }
        .testimonial-rating {
          font-size: 1.25rem;
          letter-spacing: 0.1em;
          margin-top: auto;
        }
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 1.5rem 0;
          }
          .testimonials-header h2 {
            font-size: 2rem;
          }
          .testimonial-card {
            min-width: 140px;
            max-width: 180px;
            padding: 0.7rem 0.7rem;
          }
        }
      `})]})}function zh(){const v=()=>{window.scrollTo({top:0,behavior:"smooth"})};return f.jsxs("section",{className:"cta-section",children:[f.jsx("div",{className:"container",children:f.jsxs("div",{className:"cta-content",children:[f.jsx("h2",{children:"Ready to Build Better Habits?"}),f.jsx("p",{className:"cta-single-line",children:"Join thousands of users who are transforming their lives."}),f.jsx("div",{className:"cta-buttons",children:f.jsx("button",{className:"btn-primary btn-lg",onClick:v,children:"Start Tracking Now — It's Free"})}),f.jsx("p",{className:"cta-hint",children:"No credit card required • Takes 2 minutes to set up"})]})}),f.jsx("style",{children:`
        .cta-single-line {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }
        .cta-section {
          padding: 2.5rem 2rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          text-align: center;
          margin: 1.5rem auto;
          border-radius: 16px;
          width: 100%;
          max-width: 900px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .cta-content h2 {
          font-size: 2.1rem;
          color: white;
          margin-bottom: 0.7rem;
          letter-spacing: -0.02em;
        }

        .cta-content p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 480px;
          margin: 0 auto 1.2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 0.7rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .cta-buttons .btn-primary {
          background: #ffffff;
          color: var(--primary);
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }

        .cta-buttons .btn-primary:hover {
          background: #f0f0f0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        }

        .cta-buttons .btn-ghost {
          background: rgba(255, 255, 255, 0.2);
          border-color: white;
          color: white;
        }

        .cta-buttons .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: white;
        }

        .cta-hint {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 1.7rem 0.5rem;
          }

          .cta-content h2 {
            font-size: 1.3rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-buttons button {
            width: 100%;
          }
        }
      `})]})}function jh(){return f.jsxs("footer",{className:"footer",children:[f.jsxs("div",{className:"container",children:[f.jsxs("div",{className:"footer-about-wrapper plain",style:{padding:"0",margin:"0 auto",maxWidth:"1200px",minHeight:"unset"},children:[f.jsxs("div",{className:"footer-about-block plain",children:[f.jsx("h2",{children:"About Us"}),f.jsx("p",{children:"We're group 18, two individuals who are interested in bringing you a simple yet effective habit tracking system. As part of the SDG goals, we focus on sustainability and consistency in our website. Thanks for visiting our site - we're excited to share our work with you!"})]}),f.jsxs("div",{className:"footer-about-block plain",children:[f.jsx("h2",{children:"About Habit Studio"}),f.jsx("p",{children:"Targeting on the third category of the SDG - good health and well-being, Habit Studio is created to raise awareness about sustainable habits. Not only will it help tracking and analyzing your habit, Habit Studio also prioritize your thoughts by creating a journalling page."})]})]}),f.jsx("div",{className:"footer-horizontal-line"}),f.jsx("div",{className:"footer-copyright",children:"© 2025 Habit Studio. All rights reserved."})]}),f.jsx("style",{jsx:!0,children:`
        .footer-horizontal-line {
          width: 100%;
          height: 1px;
          background: #d1d5db;
          margin: 2.5rem 0 1.2rem 0;
        }
        .footer-divider {
          width: 2px;
          height: 90px;
          background: #222;
          margin: 0 1.5rem;
          border-radius: 2px;
          align-self: center;
        }

        .footer-copyright {
          width: 100%;
          text-align: left;
          color: #111;
          font-size: 1rem;
          margin-top: 2.5rem;
          margin-bottom: 0.5rem;
          margin-left: 0.5rem;
        }
        .footer {
          background: #f8fafc;
          color: var(--slate-300);
          padding: 1.5rem 0 1rem;
          margin-top: 2rem;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .footer-about-wrapper.plain {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          gap: 2rem;
          background: none;
          padding: 0;
          margin: 0 auto;
          max-width: 1200px;
          min-height: unset;
        }

        .footer-about-block.plain {
          background: none;
          border-radius: 0;
          padding: 0.5rem 0.5rem;
          max-width: 340px;
          width: 100%;
          box-shadow: none;
          text-align: left;
          margin: 0 auto;
        }

        .footer-about-block.plain h2 {
          color: #374151;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          font-weight: 700;
          text-align: left;
        }

        .footer-about-block.plain p {
          color: #374151;
          font-size: 0.95rem;
          line-height: 1.3;
          text-align: left;
        }

        @media (max-width: 800px) {
          .footer-about-wrapper.plain {
            flex-direction: column;
            gap: 1.2rem;
          }
        }

        .footer-section h3,
        .footer-section h4 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        .footer-section p {
          color: var(--slate-400);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section li {
          margin-bottom: 0.75rem;
        }

        .footer-section a {
          color: var(--slate-400);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-section a:hover {
          color: var(--primary);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 40px;
          min-height: 40px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
          flex-shrink: 0;
          font-size: 0.875rem;
        }

        .social-links a:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-4px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          margin: 0;
          color: var(--slate-400);
          font-size: 0.9rem;
        }

        .footer-badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 6px;
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer {
            background: #6366F1;
            padding: 2rem 0 1rem;
          }

          .footer-content {
            gap: 2rem;
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-badges {
            justify-content: center;
          }
        }
      `})]})}function Th({isOpen:v,onClose:C,onLogin:_}){const[d,A]=ue.useState(!1),[N,Q]=ue.useState(""),[Z,D]=ue.useState(""),[p,O]=ue.useState(""),[E,H]=ue.useState("");if(!v)return null;const K=F=>{if(F.preventDefault(),H(""),!N||!Z){H("Please fill in all fields");return}if(d&&!p){H("Please enter your name");return}if(d){if(localStorage.getItem(`user_${N}`)){H("An account with this email already exists");return}const xe={email:N,name:p,password:Z,createdAt:new Date().toISOString()};localStorage.setItem(`user_${N}`,JSON.stringify(xe)),localStorage.setItem("user",JSON.stringify({email:N,name:p})),_({email:N,name:p})}else{const Me=localStorage.getItem(`user_${N}`);if(!Me){H("No account found with this email");return}const xe=JSON.parse(Me);if(xe.password!==Z){H("Incorrect password");return}localStorage.setItem("user",JSON.stringify({email:N,name:xe.name})),_({email:N,name:xe.name})}},X=F=>{F.target===F.currentTarget&&C()};return f.jsxs("div",{className:"modal-overlay",onClick:X,children:[f.jsxs("div",{className:"modal-container",children:[f.jsx("button",{className:"modal-close",onClick:C,children:"×"}),f.jsxs("div",{className:"modal-header",children:[f.jsx("h2",{children:d?"Create Account":"Welcome Back"}),f.jsx("p",{children:d?"Start your habit journey today":"Log in to continue your progress"})]}),f.jsxs("form",{onSubmit:K,className:"modal-form",children:[d&&f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Full Name"}),f.jsx("input",{type:"text",value:p,onChange:F=>O(F.target.value),placeholder:"Enter your name"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Email"}),f.jsx("input",{type:"email",value:N,onChange:F=>Q(F.target.value),placeholder:"Enter your email"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Password"}),f.jsx("input",{type:"password",value:Z,onChange:F=>D(F.target.value),placeholder:"Enter your password"})]}),E&&f.jsx("div",{className:"error-message",children:E}),f.jsx("button",{type:"submit",className:"submit-btn",children:d?"Create Account":"Log In"})]}),f.jsx("div",{className:"modal-footer",children:f.jsxs("p",{children:[d?"Already have an account?":"Don't have an account?"," ",f.jsx("button",{type:"button",className:"toggle-btn",onClick:()=>{A(!d),H("")},children:d?"Log In":"Sign Up"})]})})]}),f.jsx("style",{jsx:!0,children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-container {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          width: 100%;
          max-width: 420px;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          animation: modalSlideIn 0.3s ease;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.75rem;
          color: #94a3b8;
          cursor: pointer;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .modal-close:hover {
          background: #f1f5f9;
          color: #64748b;
        }

        .modal-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .modal-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 0.5rem 0;
        }

        .modal-header p {
          color: #64748b;
          font-size: 0.95rem;
          margin: 0;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
        }

        .form-group input {
          padding: 0.875rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.2s;
          background: #f8fafc;
        }

        .form-group input:focus {
          outline: none;
          border-color: #6366f1;
          background: white;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .error-message {
          background: #fef2f2;
          color: #dc2626;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          text-align: center;
        }

        .submit-btn {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 0.5rem;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
        }

        .modal-footer {
          text-align: center;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
        }

        .modal-footer p {
          color: #64748b;
          font-size: 0.9rem;
          margin: 0;
        }

        .toggle-btn {
          background: none;
          border: none;
          color: #6366f1;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .toggle-btn:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .modal-container {
            padding: 1.75rem;
          }

          .modal-header h2 {
            font-size: 1.5rem;
          }
        }
      `})]})}function Eh({onNavigate:v}){const[C,_]=ue.useState(null),[d,A]=ue.useState(!1),[N,Q]=ue.useState({username:"",email:"",password:""});ue.useEffect(()=>{const E=localStorage.getItem("user");if(E)try{_(JSON.parse(E));const H=JSON.parse(E);Q({username:H.username||"",email:H.email||"",password:H.password||""})}catch{console.error("Failed to parse user data")}},[]);const Z=()=>{if(!N.username||!N.email||!N.password){alert("Please fill in all fields");return}let E=[];try{E=JSON.parse(localStorage.getItem("users")||"[]")}catch{}E=E.map(K=>K.email===C.email?{...K,...N}:K),localStorage.setItem("users",JSON.stringify(E));const H={...C,...N};_(H),localStorage.setItem("user",JSON.stringify(H)),A(!1),alert("Profile updated successfully!")},D=()=>{if(!window.confirm("Are you sure you want to delete your account? This cannot be undone."))return;let E=[];try{E=JSON.parse(localStorage.getItem("users")||"[]")}catch{}E=E.filter(H=>H.email!==C.email),localStorage.setItem("users",JSON.stringify(E)),localStorage.removeItem("user"),_(null),v&&v("home")},p=()=>{localStorage.removeItem("user"),_(null),v("home")},O=E=>{const{name:H,value:K}=E.target;Q(X=>({...X,[H]:K}))};return C?f.jsxs("div",{className:"profile-container",children:[f.jsxs("div",{className:"container",style:{paddingTop:"3rem",paddingBottom:"3rem"},children:[f.jsxs("div",{className:"profile-header",children:[f.jsx("h1",{children:"My Profile"}),f.jsx("p",{style:{color:"var(--slate-600)"},children:"Manage your account settings and preferences"})]}),f.jsxs("div",{className:"profile-grid-centered",children:[f.jsxs("div",{className:"profile-card",style:{minWidth:"320px",maxWidth:"400px",padding:"1.2rem 1.2rem",border:"1px solid #a5b4fc",boxShadow:"0 2px 8px rgba(99, 102, 241, 0.05)",borderRadius:"24px",background:"white"},children:[f.jsx("div",{className:"profile-card-header",children:f.jsx("h2",{children:"Account Information"})}),d?f.jsxs("div",{className:"profile-edit-form",children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Username"}),f.jsx("input",{type:"text",name:"username",value:N.username,onChange:O,className:"profile-input"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Email Address"}),f.jsx("input",{type:"email",name:"email",value:N.email,onChange:O,className:"profile-input"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Password"}),f.jsx("input",{type:"password",name:"password",value:N.password,onChange:O,className:"profile-input"})]}),f.jsx("button",{className:"btn-primary",onClick:Z,children:"Save Changes"})]}):f.jsxs("div",{className:"profile-info",children:[f.jsxs("div",{className:"info-item",children:[f.jsx("span",{className:"info-label",children:"Username"}),f.jsx("span",{className:"info-value",children:C.username})]}),f.jsxs("div",{className:"info-item",children:[f.jsx("span",{className:"info-label",children:"Email"}),f.jsx("span",{className:"info-value",children:C.email})]}),f.jsxs("div",{className:"info-item",children:[f.jsx("span",{className:"info-label",children:"Member Since"}),f.jsx("span",{className:"info-value",children:new Date().toLocaleDateString()})]})]})]}),f.jsxs("div",{className:"profile-card danger-zone",style:{minWidth:"320px",maxWidth:"400px",padding:"1.2rem 1.2rem",background:"white"},children:[f.jsx("h2",{children:"Account Management"}),f.jsxs("div",{className:"danger-section",children:[f.jsx("h3",{children:"Logout"}),f.jsx("p",{children:"Sign out of your account on this device"}),f.jsx("button",{className:"btn-secondary",onClick:p,children:f.jsx("span",{className:"btn-logout-box",children:"Logout"})})]}),f.jsx("hr",{style:{margin:"1.5rem 0",border:"none",borderTop:"1px solid rgba(239, 68, 68, 0.2)"}}),f.jsxs("div",{className:"danger-section",children:[f.jsx("h3",{children:"Delete Account"}),f.jsx("p",{children:"Permanently delete your account and all data"}),f.jsx("button",{className:"btn-danger",onClick:D,children:"Delete Account"})]})]})]})]}),f.jsx("style",{jsx:!0,children:`
        .profile-container {
          min-height: 100vh;
          background: var(--slate-50);
          padding: 2rem 0;
        }

        .profile-header {
          margin-bottom: 3rem;
        }

        .profile-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--slate-900);
        }

        .profile-header p {
          font-size: 1.125rem;
          color: var(--slate-600);
        }

        .profile-grid-centered {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .profile-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid var(--slate-200);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .profile-card:hover {
          border-color: var(--primary);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.1);
        }

        .profile-card h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--slate-900);
        }

        .profile-card h3 {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
          color: var(--slate-800);
        }

        .profile-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .profile-card-header h2 {
          margin-bottom: 0;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: var(--slate-50);
          border-radius: 12px;
        }

        .info-label {
          color: var(--slate-600);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          color: var(--slate-900);
          font-weight: 600;
          font-size: 1.05rem;
        }

        .profile-edit-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          color: var(--slate-700);
          font-size: 0.95rem;
        }

        .profile-input {
          padding: 0.75rem 1rem;
          border: 1px solid var(--slate-300);
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .profile-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .settings-group {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          gap: 2rem;
        }

        .setting-item > div:first-child {
          flex: 1;
        }

        .setting-item h3 {
          margin: 0;
        }

        .setting-item p {
          margin: 0.25rem 0 0 0;
          font-size: 0.9rem;
          color: var(--slate-600);
        }

        .toggle-button {
          background: var(--slate-200);
          border: 2px solid var(--slate-300);
          border-radius: 12px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
          padding: 0;
        }

        .toggle-button:hover {
          border-color: var(--primary);
          background: rgba(99, 102, 241, 0.1);
        }

        .toggle-button.active {
          background: rgba(99, 102, 241, 0.15);
          border-color: var(--primary);
        }

        .toggle-switch {
          position: relative;
          display: inline-flex;
          align-items: center;
          width: 50px;
          height: 24px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--slate-300);
          transition: all 0.3s ease;
          border-radius: 12px;
          z-index: 1;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          top: 3px;
          background-color: white;
          transition: all 0.3s ease;
          border-radius: 50%;
          z-index: 2;
        }

        .support-section {
          margin-bottom: 1rem;
        }

        .support-section h3 {
          margin: 0 0 0.5rem 0;
        }

        .support-section p {
          margin: 0 0 1rem 0;
          color: var(--slate-600);
          font-size: 0.9rem;
        }

        .danger-zone {
          border-color: rgba(239, 68, 68, 0.2);
          background: rgba(239, 68, 68, 0.02);
        }

        .danger-section h3 {
          color: #dc2626;
          margin: 0 0 0.5rem 0;
        }

        .danger-section p {
          margin: 0 0 1rem 0;
          color: var(--slate-600);
          font-size: 0.9rem;
        }

        .btn-danger {
          background: #ef4444;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-danger:hover {
          background: #dc2626;
          box-shadow: 0 8px 24px rgba(239, 68, 68, 0.25);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .profile-header h1 {
            font-size: 1.75rem;
          }

          .profile-grid {
            grid-template-columns: 1fr;
          }

          .setting-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `})]}):(v&&v("home"),null)}function Ah({habits:v=[],logs:C={}}){const _=v.reduce((A,N)=>{const Q=N.category||"Uncategorized";return A[Q]||(A[Q]={color:N.color,habits:[]}),A[Q].habits.push(N),A},{}),d=(A,N)=>{const Z=Object.entries(C).filter(([K,X])=>A in X&&X[A]).length,D=new Date(parseInt(A)),O=Math.floor((new Date-D)/(1e3*60*60*24))+1,E=O-Z,H=O>0?Math.round(Z/O*100):0;return{startDate:D.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),daysSinceStart:O,completedDays:Z,missedDays:E,completionRate:H}};return v.length===0?f.jsxs("div",{className:"card empty-state",children:[f.jsx("div",{className:"empty-icon",children:"📊"}),f.jsx("h3",{children:"No Data Yet"}),f.jsx("p",{children:"Start tracking habits to see your statistics here!"})]}):f.jsxs("div",{className:"database-container",children:[f.jsx("h2",{className:"database-title",children:"Habit Statistics"}),Object.entries(_).map(([A,{color:N,habits:Q}])=>f.jsxs("div",{className:"stats-category-section",children:[f.jsx("h3",{className:"stats-category-header",style:{borderLeftColor:N,color:N},children:A}),f.jsx("div",{className:"stats-table-wrapper",children:f.jsxs("table",{className:"stats-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Habit"}),f.jsx("th",{children:"Started"}),f.jsx("th",{children:"Days Active"}),f.jsx("th",{children:"Completed"}),f.jsx("th",{children:"Missed"}),f.jsx("th",{children:"Success Rate"})]})}),f.jsx("tbody",{children:Q.map(Z=>{const D=d(Z.id,Z.createdDate);return f.jsxs("tr",{style:{"--category-color":N},children:[f.jsx("td",{className:"habit-name-cell",children:Z.name}),f.jsx("td",{children:D.startDate}),f.jsx("td",{children:D.daysSinceStart}),f.jsx("td",{className:"positive-stat",children:D.completedDays}),f.jsx("td",{className:"negative-stat",children:D.missedDays}),f.jsx("td",{children:f.jsxs("div",{className:"completion-cell",children:[f.jsx("div",{className:"completion-bar",children:f.jsx("div",{className:"completion-fill",style:{width:`${D.completionRate}%`,backgroundColor:N}})}),f.jsxs("span",{className:"completion-text",children:[D.completionRate,"%"]})]})})]},Z.id)})})]})})]},A))]})}function Nh(){return f.jsxs("div",{className:"card about-section",style:{marginTop:"1rem",padding:"1.5rem 2rem"},children:[f.jsx("h2",{style:{marginBottom:"0.75rem",fontSize:"1.5rem"},children:"About Us"}),f.jsx("p",{className:"about-text",style:{margin:0,lineHeight:"1.6"},children:"We're group 18, two individuals who are interested in bringing you a simple yet effective habit tracking system. As part of the SDG goals, we focus on sustainability and consistency in our website. Thanks for visiting our site - we're excited to share our work with you!"})]})}function Dh(){return f.jsxs("div",{className:"card about-section",style:{marginTop:"1rem",padding:"1.5rem 2rem"},children:[f.jsx("h2",{style:{marginBottom:"0.75rem",fontSize:"1.5rem"},children:"About Habit Studio"}),f.jsx("p",{className:"about-text",style:{margin:0,lineHeight:"1.6"},children:"Targeting on the third category of the SDG - good health and well-being, Habit Studio is created to raise awareness about sustainable habits. Not only will it help tracking and analyzing your habit, Habit Studio also prioritize your thoughts by creating a journalling page."})]})}const Oh=(v=new Date)=>v.toISOString().slice(0,10);function Nd(){try{const v=JSON.parse(localStorage.getItem("user"));return v&&v.email?v.email:null}catch{return null}}function _h(){const[v,C]=ue.useState(Nd()),[_,d]=ue.useState([]),[A,N]=ue.useState({}),[Q,Z]=ue.useState(!1);ue.useEffect(()=>{const V=Nd();if(C(V),V){const R=localStorage.getItem(`habits_${V}`),k=localStorage.getItem(`logs_${V}`);d(R?JSON.parse(R):[]),N(k?JSON.parse(k):{})}else d([]),N({})},[localStorage.getItem("user")]),ue.useEffect(()=>{v&&(localStorage.setItem(`habits_${v}`,JSON.stringify(_)),localStorage.setItem(`logs_${v}`,JSON.stringify(A)))},[_,A,v]);const[D,p]=ue.useState("home"),H=[...["home","dashboard","analytics","database","about-us","about-studio","profile","account"],"dashboard-alt"].includes(D)?D:"home",K=Oh(),X=["#A7C7E7","#B0E0E6","#D6F6FF","#A8E6CF","#7FDBFF","#B4AEE8","#C3B1E1","#7FE7DC","#B8C6DB","#D6C1ED","#FFD6E0","#FFFACD","#F9D5A7","#F7B7A3","#B5EAD7","#E2F0CB","#FFDAC1","#C7CEEA","#FFB7B2","#B5B9FF"],F=V=>p(V),Me=V=>{const R={...V,id:Date.now().toString()};d(k=>[...k,R])},xe=_.reduce((V,R)=>(R.category&&R.color&&(V[R.category]=R.color),V),{}),Ke=V=>{d(R=>R.filter(k=>k.id!==V)),N(R=>{const k={...R};return Object.keys(k).forEach(Y=>{k[Y][V]&&delete k[Y][V]}),k})},Ae=V=>{d(k=>k.filter(Y=>Y.category!==V));const R=_.filter(k=>k.category===V).map(k=>k.id);N(k=>{const Y={...k};return Object.keys(Y).forEach(oe=>{R.forEach(Ne=>{Y[oe][Ne]&&delete Y[oe][Ne]})}),Y})},qe=(V,R)=>{N(k=>{const Y={...k[K]||{},[V]:R};return{...k,[K]:Y}})},Fe=V=>A[K]&&V in A[K]?A[K][V]:null;return ue.useEffect(()=>{if(!localStorage.getItem("colorsMigrated")&&_.length>0){const R={};let k=0;_.forEach(oe=>{oe.category&&!R[oe.category]&&(R[oe.category]=X[k%X.length],k++)});const Y=_.map(oe=>oe.category&&R[oe.category]?{...oe,color:R[oe.category]}:oe);d(Y),localStorage.setItem("colorsMigrated","true")}},[]),ue.useEffect(()=>{const V={};let R=!1;_.forEach(Y=>{Y.category&&!V[Y.category]&&(V[Y.category]=Y.color)});const k=_.map(Y=>Y.category&&Y.color!==V[Y.category]?(R=!0,{...Y,color:V[Y.category]}):Y);R&&d(k)},[_,d]),f.jsxs("div",{className:"app-shell",children:[f.jsx(dh,{onNavigate:F,currentPage:H}),H==="home"&&f.jsxs(f.Fragment,{children:[f.jsx(mh,{onGetStarted:()=>{v?(window.scrollTo({top:0,behavior:"smooth"}),F("dashboard")):Z(!0)}}),f.jsx(hh,{}),f.jsx(xh,{}),f.jsx(Sh,{}),f.jsx(zh,{onGetStarted:()=>{v?(window.scrollTo({top:0,behavior:"smooth"}),F("dashboard")):Z(!0)}})]}),H==="dashboard"&&f.jsx(vh,{onAdd:Me,existingCategories:xe,habits:_,getValue:Fe,setValue:qe,onDeleteCategory:Ae,onDeleteHabit:Ke}),H==="analytics"&&f.jsx(ph,{habits:_,logs:A,onToggleTodayHabit:(V,R)=>qe(V,R),onDeleteHabit:Ke,onDeleteCategory:Ae}),H==="database"&&f.jsx(Ah,{habits:_,logs:A}),H==="about-us"&&f.jsx(Nh,{}),H==="about-studio"&&f.jsx(Dh,{}),H==="profile"&&f.jsx(Eh,{onNavigate:F}),f.jsx(jh,{}),f.jsx(Th,{isOpen:Q,onClose:()=>Z(!1),onLogin:V=>{C(V.email),Z(!1),F("dashboard")}}),f.jsx("style",{jsx:!0,children:`
        .app-shell {
          min-height: 100vh;
          background: var(--slate-50);
          width: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
          box-sizing: border-box;
        }

        .card {
          background: white;
          border-radius: 12px;
          border: 1px solid var(--slate-200);
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .card {
            padding: 1.5rem;
          }
        }

      `})]})}rh.createRoot(document.getElementById("root")).render(f.jsx(Od.StrictMode,{children:f.jsx(_h,{})}));
