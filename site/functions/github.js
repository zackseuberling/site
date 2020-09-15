!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t){e.exports=require("stream")},function(e,t){e.exports=require("zlib")},function(e,t,r){"use strict";r.r(t),r.d(t,"headers",(function(){return n})),r.d(t,"statusReturn",(function(){return o})),r.d(t,"preparePayload",(function(){return s}));const n={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Content-Type":"application/json"},o=(e,t)=>({statusCode:e,headers:n,body:JSON.stringify(t)}),s=(e,t)=>({query:e,variables:t})},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("http")},function(e,t,r){var n=r(8),o=r(9),s=r(10),i=Function.bind,a=i.bind(i);function u(e,t,r){var n=a(s,null).apply(null,r?[t,r]:[t]);e.api={remove:n},e.remove=n,["before","error","after","wrap"].forEach((function(n){var s=r?[t,n,r]:[t,n];e[n]=e.api[n]=a(o,null).apply(null,s)}))}function c(){var e={registry:{}},t=n.bind(null,e);return u(t,e),t}var l=!1;function f(){return l||(console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'),l=!0),c()}f.Singular=function(){var e={registry:{}},t=n.bind(null,e,"h");return u(t,e,"h"),t}.bind(),f.Collection=c.bind(),e.exports=f,e.exports.Hook=f,e.exports.Singular=f.Singular,e.exports.Collection=f.Collection},function(e,t){e.exports=require("https")},function(e,t,r){var n=r(11);function o(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function s(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}e.exports=n(o),e.exports.strict=n(s),o.proto=o((function(){Object.defineProperty(Function.prototype,"once",{value:function(){return o(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return s(this)},configurable:!0})}))},function(e,t){e.exports=function e(t,r,n,o){if("function"!=typeof n)throw new Error("method for before hook must be a function");o||(o={});if(Array.isArray(r))return r.reverse().reduce((function(r,n){return e.bind(null,t,n,r,o)}),n)();return Promise.resolve().then((function(){return t.registry[r]?t.registry[r].reduce((function(e,t){return t.hook.bind(null,e,o)}),n)():n(o)}))}},function(e,t){e.exports=function(e,t,r,n){var o=n;e.registry[r]||(e.registry[r]=[]);"before"===t&&(n=function(e,t){return Promise.resolve().then(o.bind(null,t)).then(e.bind(null,t))});"after"===t&&(n=function(e,t){var r;return Promise.resolve().then(e.bind(null,t)).then((function(e){return o(r=e,t)})).then((function(){return r}))});"error"===t&&(n=function(e,t){return Promise.resolve().then(e.bind(null,t)).catch((function(e){return o(e,t)}))});e.registry[r].push({hook:n,orig:o})}},function(e,t){e.exports=function(e,t,r){if(!e.registry[t])return;var n=e.registry[t].map((function(e){return e.orig})).indexOf(r);if(-1===n)return;e.registry[t].splice(n,1)}},function(e,t){e.exports=function e(t,r){if(t&&r)return e(t)(r);if("function"!=typeof t)throw new TypeError("need wrapper function");return Object.keys(t).forEach((function(e){n[e]=t[e]})),n;function n(){for(var e=new Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];var n=t.apply(this,e),o=e[e.length-1];return"function"==typeof n&&n!==o&&Object.keys(o).forEach((function(e){n[e]=o[e]})),n}}},function(e,t,r){"use strict";function n(){return"object"==typeof navigator&&"userAgent"in navigator?navigator.userAgent:"object"==typeof process&&"version"in process?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}r.r(t),r.d(t,"handler",(function(){return qe}));var o=r(5);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function s(e){return"[object Object]"===Object.prototype.toString.call(e)}function i(e,t){const r=Object.assign({},e);return Object.keys(t).forEach(n=>{var o,a,u;!1!==s(o=t[n])&&(void 0===(a=o.constructor)||!1!==s(u=a.prototype)&&!1!==u.hasOwnProperty("isPrototypeOf"))?n in e?r[n]=i(e[n],t[n]):Object.assign(r,{[n]:t[n]}):Object.assign(r,{[n]:t[n]})}),r}function a(e,t,r){if("string"==typeof t){let[e,n]=t.split(" ");r=Object.assign(n?{method:e,url:n}:{url:e},r)}else r=Object.assign({},t);var n;r.headers=(n=r.headers)?Object.keys(n).reduce((e,t)=>(e[t.toLowerCase()]=n[t],e),{}):{};const o=i(e||{},r);return e&&e.mediaType.previews.length&&(o.mediaType.previews=e.mediaType.previews.filter(e=>!o.mediaType.previews.includes(e)).concat(o.mediaType.previews)),o.mediaType.previews=o.mediaType.previews.map(e=>e.replace(/-preview/,"")),o}const u=/\{[^}]+\}/g;function c(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}function l(e,t){return Object.keys(e).filter(e=>!t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{})}function f(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map((function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e})).join("")}function p(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function d(e,t,r){return t="+"===e||"#"===e?f(t):p(t),r?p(r)+"="+t:t}function h(e){return null!=e}function b(e){return";"===e||"&"===e||"?"===e}function y(e,t){var r=["+","#",".","/",";","?","&"];return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,(function(e,n,o){if(n){let e="";const o=[];if(-1!==r.indexOf(n.charAt(0))&&(e=n.charAt(0),n=n.substr(1)),n.split(/,/g).forEach((function(r){var n=/([^:\*]*)(?::(\d+)|(\*))?/.exec(r);o.push(function(e,t,r,n){var o=e[r],s=[];if(h(o)&&""!==o)if("string"==typeof o||"number"==typeof o||"boolean"==typeof o)o=o.toString(),n&&"*"!==n&&(o=o.substring(0,parseInt(n,10))),s.push(d(t,o,b(t)?r:""));else if("*"===n)Array.isArray(o)?o.filter(h).forEach((function(e){s.push(d(t,e,b(t)?r:""))})):Object.keys(o).forEach((function(e){h(o[e])&&s.push(d(t,o[e],e))}));else{const e=[];Array.isArray(o)?o.filter(h).forEach((function(r){e.push(d(t,r))})):Object.keys(o).forEach((function(r){h(o[r])&&(e.push(p(r)),e.push(d(t,o[r].toString())))})),b(t)?s.push(p(r)+"="+e.join(",")):0!==e.length&&s.push(e.join(","))}else";"===t?h(o)&&s.push(p(r)):""!==o||"&"!==t&&"?"!==t?""===o&&s.push(""):s.push(p(r)+"=");return s}(t,e,n[1],n[2]||n[3]))})),e&&"+"!==e){var s=",";return"?"===e?s="&":"#"!==e&&(s=e),(0!==o.length?e:"")+o.join(s)}return o.join(",")}return f(o)}))}function g(e){let t,r=e.method.toUpperCase(),n=(e.url||"/").replace(/:([a-z]\w+)/g,"{+$1}"),o=Object.assign({},e.headers),s=l(e,["method","baseUrl","url","headers","request","mediaType"]);const i=function(e){const t=e.match(u);return t?t.map(c).reduce((e,t)=>e.concat(t),[]):[]}(n);var a;n=(a=n,{expand:y.bind(null,a)}).expand(s),/^http/.test(n)||(n=e.baseUrl+n);const f=l(s,Object.keys(e).filter(e=>i.includes(e)).concat("baseUrl"));if(!/application\/octet-stream/i.test(o.accept)&&(e.mediaType.format&&(o.accept=o.accept.split(/,/).map(t=>t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,"application/vnd$1$2."+e.mediaType.format)).join(",")),e.mediaType.previews.length)){const t=o.accept.match(/[\w-]+(?=-preview)/g)||[];o.accept=t.concat(e.mediaType.previews).map(t=>`application/vnd.github.${t}-preview${e.mediaType.format?"."+e.mediaType.format:"+json"}`).join(",")}return["GET","HEAD"].includes(r)?n=function(e,t){const r=/\?/.test(e)?"&":"?",n=Object.keys(t);return 0===n.length?e:e+r+n.map(e=>"q"===e?"q="+t.q.split("+").map(encodeURIComponent).join("+"):`${e}=${encodeURIComponent(t[e])}`).join("&")}(n,f):"data"in f?t=f.data:Object.keys(f).length?t=f:o["content-length"]=0,o["content-type"]||void 0===t||(o["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(r)&&void 0===t&&(t=""),Object.assign({method:r,url:n,headers:o},void 0!==t?{body:t}:null,e.request?{request:e.request}:null)}function m(e,t,r){return g(a(e,t,r))}const w=function e(t,r){const n=a(t,r),o=m.bind(null,n);return Object.assign(o,{DEFAULTS:n,defaults:e.bind(null,n),merge:a.bind(null,n),parse:g})}(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":"octokit-endpoint.js/6.0.6 "+n()},mediaType:{format:"",previews:[]}});
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function v(e){return"[object Object]"===Object.prototype.toString.call(e)}var j=r(0),O=r(4),T=r(3),S=r(6),E=r(1);const k=j.Readable,x=Symbol("buffer"),P=Symbol("type");class q{constructor(){this[P]="";const e=arguments[0],t=arguments[1],r=[];let n=0;if(e){const t=e,o=Number(t.length);for(let e=0;e<o;e++){const o=t[e];let s;s=o instanceof Buffer?o:ArrayBuffer.isView(o)?Buffer.from(o.buffer,o.byteOffset,o.byteLength):o instanceof ArrayBuffer?Buffer.from(o):o instanceof q?o[x]:Buffer.from("string"==typeof o?o:String(o)),n+=s.length,r.push(s)}}this[x]=Buffer.concat(r);let o=t&&void 0!==t.type&&String(t.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[P]=o)}get size(){return this[x].length}get type(){return this[P]}text(){return Promise.resolve(this[x].toString())}arrayBuffer(){const e=this[x],t=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);return Promise.resolve(t)}stream(){const e=new k;return e._read=function(){},e.push(this[x]),e.push(null),e}toString(){return"[object Blob]"}slice(){const e=this.size,t=arguments[0],r=arguments[1];let n,o;n=void 0===t?0:t<0?Math.max(e+t,0):Math.min(t,e),o=void 0===r?e:r<0?Math.max(e+r,0):Math.min(r,e);const s=Math.max(o-n,0),i=this[x].slice(n,n+s),a=new q([],{type:arguments[2]});return a[x]=i,a}}function A(e,t,r){Error.call(this,e),this.message=e,this.type=t,r&&(this.code=this.errno=r.code),Error.captureStackTrace(this,this.constructor)}let C;Object.defineProperties(q.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}}),Object.defineProperty(q.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0}),A.prototype=Object.create(Error.prototype),A.prototype.constructor=A,A.prototype.name="FetchError";try{C=require("encoding").convert}catch(e){}const B=Symbol("Body internals"),U=j.PassThrough;function $(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.size;let o=void 0===n?0:n;var s=r.timeout;let i=void 0===s?0:s;null==e?e=null:L(e)?e=Buffer.from(e.toString()):z(e)||Buffer.isBuffer(e)||("[object ArrayBuffer]"===Object.prototype.toString.call(e)?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof j||(e=Buffer.from(String(e)))),this[B]={body:e,disturbed:!1,error:null},this.size=o,this.timeout=i,e instanceof j&&e.on("error",(function(e){const r="AbortError"===e.name?e:new A(`Invalid response body while trying to fetch ${t.url}: ${e.message}`,"system",e);t[B].error=r}))}function R(){var e=this;if(this[B].disturbed)return $.Promise.reject(new TypeError("body used already for: "+this.url));if(this[B].disturbed=!0,this[B].error)return $.Promise.reject(this[B].error);let t=this.body;if(null===t)return $.Promise.resolve(Buffer.alloc(0));if(z(t)&&(t=t.stream()),Buffer.isBuffer(t))return $.Promise.resolve(t);if(!(t instanceof j))return $.Promise.resolve(Buffer.alloc(0));let r=[],n=0,o=!1;return new $.Promise((function(s,i){let a;e.timeout&&(a=setTimeout((function(){o=!0,i(new A(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))}),e.timeout)),t.on("error",(function(t){"AbortError"===t.name?(o=!0,i(t)):i(new A(`Invalid response body while trying to fetch ${e.url}: ${t.message}`,"system",t))})),t.on("data",(function(t){if(!o&&null!==t){if(e.size&&n+t.length>e.size)return o=!0,void i(new A(`content size at ${e.url} over limit: ${e.size}`,"max-size"));n+=t.length,r.push(t)}})),t.on("end",(function(){if(!o){clearTimeout(a);try{s(Buffer.concat(r,n))}catch(t){i(new A(`Could not create Buffer from response body for ${e.url}: ${t.message}`,"system",t))}}}))}))}function L(e){return"object"==typeof e&&"function"==typeof e.append&&"function"==typeof e.delete&&"function"==typeof e.get&&"function"==typeof e.getAll&&"function"==typeof e.has&&"function"==typeof e.set&&("URLSearchParams"===e.constructor.name||"[object URLSearchParams]"===Object.prototype.toString.call(e)||"function"==typeof e.sort)}function z(e){return"object"==typeof e&&"function"==typeof e.arrayBuffer&&"string"==typeof e.type&&"function"==typeof e.stream&&"function"==typeof e.constructor&&"string"==typeof e.constructor.name&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function _(e){let t,r,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof j&&"function"!=typeof n.getBoundary&&(t=new U,r=new U,n.pipe(t),n.pipe(r),e[B].body=t,n=r),n}function H(e){return null===e?null:"string"==typeof e?"text/plain;charset=UTF-8":L(e)?"application/x-www-form-urlencoded;charset=UTF-8":z(e)?e.type||null:Buffer.isBuffer(e)||"[object ArrayBuffer]"===Object.prototype.toString.call(e)||ArrayBuffer.isView(e)?null:"function"==typeof e.getBoundary?"multipart/form-data;boundary="+e.getBoundary():e instanceof j?null:"text/plain;charset=UTF-8"}function D(e){const t=e.body;return null===t?0:z(t)?t.size:Buffer.isBuffer(t)?t.length:t&&"function"==typeof t.getLengthSync&&(t._lengthRetrievers&&0==t._lengthRetrievers.length||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}$.prototype={get body(){return this[B].body},get bodyUsed(){return this[B].disturbed},arrayBuffer(){return R.call(this).then((function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}))},blob(){let e=this.headers&&this.headers.get("content-type")||"";return R.call(this).then((function(t){return Object.assign(new q([],{type:e.toLowerCase()}),{[x]:t})}))},json(){var e=this;return R.call(this).then((function(t){try{return JSON.parse(t.toString())}catch(t){return $.Promise.reject(new A(`invalid json response body at ${e.url} reason: ${t.message}`,"invalid-json"))}}))},text(){return R.call(this).then((function(e){return e.toString()}))},buffer(){return R.call(this)},textConverted(){var e=this;return R.call(this).then((function(t){return function(e,t){if("function"!=typeof C)throw new Error("The package `encoding` must be installed to use the textConverted() function");const r=t.get("content-type");let n,o,s="utf-8";r&&(n=/charset=([^;]*)/i.exec(r));o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o));!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop())));!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o));n&&(s=n.pop(),"gb2312"!==s&&"gbk"!==s||(s="gb18030"));return C(e,"UTF-8",s).toString()}(t,e.headers)}))}},Object.defineProperties($.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}}),$.mixIn=function(e){for(const t of Object.getOwnPropertyNames($.prototype))if(!(t in e)){const r=Object.getOwnPropertyDescriptor($.prototype,t);Object.defineProperty(e,t,r)}},$.Promise=global.Promise;const F=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,I=/[^\t\x20-\x7e\x80-\xff]/;function N(e){if(e=""+e,F.test(e)||""===e)throw new TypeError(e+" is not a legal HTTP header name")}function M(e){if(e=""+e,I.test(e))throw new TypeError(e+" is not a legal HTTP header value")}function G(e,t){t=t.toLowerCase();for(const r in e)if(r.toLowerCase()===t)return r}const J=Symbol("map");class V{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(this[J]=Object.create(null),e instanceof V){const t=e.raw(),r=Object.keys(t);for(const e of r)for(const r of t[e])this.append(e,r)}else if(null==e);else{if("object"!=typeof e)throw new TypeError("Provided initializer must be an object");{const t=e[Symbol.iterator];if(null!=t){if("function"!=typeof t)throw new TypeError("Header pairs must be iterable");const r=[];for(const t of e){if("object"!=typeof t||"function"!=typeof t[Symbol.iterator])throw new TypeError("Each header pair must be iterable");r.push(Array.from(t))}for(const e of r){if(2!==e.length)throw new TypeError("Each header pair must be a name/value tuple");this.append(e[0],e[1])}}else for(const t of Object.keys(e)){const r=e[t];this.append(t,r)}}}}get(e){N(e=""+e);const t=G(this[J],e);return void 0===t?null:this[J][t].join(", ")}forEach(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=Z(this),n=0;for(;n<r.length;){var o=r[n];const s=o[0],i=o[1];e.call(t,i,s,this),r=Z(this),n++}}set(e,t){t=""+t,N(e=""+e),M(t);const r=G(this[J],e);this[J][void 0!==r?r:e]=[t]}append(e,t){t=""+t,N(e=""+e),M(t);const r=G(this[J],e);void 0!==r?this[J][r].push(t):this[J][e]=[t]}has(e){return N(e=""+e),void 0!==G(this[J],e)}delete(e){N(e=""+e);const t=G(this[J],e);void 0!==t&&delete this[J][t]}raw(){return this[J]}keys(){return W(this,"key")}values(){return W(this,"value")}[Symbol.iterator](){return W(this,"key+value")}}function Z(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key+value";const r=Object.keys(e[J]).sort();return r.map("key"===t?function(e){return e.toLowerCase()}:"value"===t?function(t){return e[J][t].join(", ")}:function(t){return[t.toLowerCase(),e[J][t].join(", ")]})}V.prototype.entries=V.prototype[Symbol.iterator],Object.defineProperty(V.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(V.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});const K=Symbol("internal");function W(e,t){const r=Object.create(Y);return r[K]={target:e,kind:t,index:0},r}const Y=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==Y)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[K];const t=e.target,r=e.kind,n=e.index,o=Z(t,r);return n>=o.length?{value:void 0,done:!0}:(this[K].index=n+1,{value:o[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));function Q(e){const t=Object.assign({__proto__:null},e[J]),r=G(e[J],"Host");return void 0!==r&&(t[r]=t[r][0]),t}Object.defineProperty(Y,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});const X=Symbol("Response internals"),ee=O.STATUS_CODES;class te{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};$.call(this,e,t);const r=t.status||200,n=new V(t.headers);if(null!=e&&!n.has("Content-Type")){const t=H(e);t&&n.append("Content-Type",t)}this[X]={url:t.url,status:r,statusText:t.statusText||ee[r],headers:n,counter:t.counter}}get url(){return this[X].url||""}get status(){return this[X].status}get ok(){return this[X].status>=200&&this[X].status<300}get redirected(){return this[X].counter>0}get statusText(){return this[X].statusText}get headers(){return this[X].headers}clone(){return new te(_(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}}$.mixIn(te.prototype),Object.defineProperties(te.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}}),Object.defineProperty(te.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});const re=Symbol("Request internals"),ne=T.parse,oe=T.format,se="destroy"in j.Readable.prototype;function ie(e){return"object"==typeof e&&"object"==typeof e[re]}class ae{constructor(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ie(e)?t=ne(e.url):(t=e&&e.href?ne(e.href):ne(""+e),e={});let n=r.method||e.method||"GET";if(n=n.toUpperCase(),(null!=r.body||ie(e)&&null!==e.body)&&("GET"===n||"HEAD"===n))throw new TypeError("Request with GET/HEAD method cannot have body");let o=null!=r.body?r.body:ie(e)&&null!==e.body?_(e):null;$.call(this,o,{timeout:r.timeout||e.timeout||0,size:r.size||e.size||0});const s=new V(r.headers||e.headers||{});if(null!=o&&!s.has("Content-Type")){const e=H(o);e&&s.append("Content-Type",e)}let i=ie(e)?e.signal:null;if("signal"in r&&(i=r.signal),null!=i&&!function(e){const t=e&&"object"==typeof e&&Object.getPrototypeOf(e);return!(!t||"AbortSignal"!==t.constructor.name)}(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[re]={method:n,redirect:r.redirect||e.redirect||"follow",headers:s,parsedURL:t,signal:i},this.follow=void 0!==r.follow?r.follow:void 0!==e.follow?e.follow:20,this.compress=void 0!==r.compress?r.compress:void 0===e.compress||e.compress,this.counter=r.counter||e.counter||0,this.agent=r.agent||e.agent}get method(){return this[re].method}get url(){return oe(this[re].parsedURL)}get headers(){return this[re].headers}get redirect(){return this[re].redirect}get signal(){return this[re].signal}clone(){return new ae(this)}}function ue(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}$.mixIn(ae.prototype),Object.defineProperty(ae.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(ae.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}}),ue.prototype=Object.create(Error.prototype),ue.prototype.constructor=ue,ue.prototype.name="AbortError";const ce=j.PassThrough,le=T.resolve;function fe(e,t){if(!fe.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return $.Promise=fe.Promise,new fe.Promise((function(r,n){const o=new ae(e,t),s=function(e){const t=e[re].parsedURL,r=new V(e[re].headers);if(r.has("Accept")||r.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof j.Readable&&!se)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(null==e.body&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),null!=e.body){const t=D(e);"number"==typeof t&&(n=String(t))}n&&r.set("Content-Length",n),r.has("User-Agent")||r.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!r.has("Accept-Encoding")&&r.set("Accept-Encoding","gzip,deflate");let o=e.agent;return"function"==typeof o&&(o=o(t)),r.has("Connection")||o||r.set("Connection","close"),Object.assign({},t,{method:e.method,headers:Q(r),agent:o})}(o),i=("https:"===s.protocol?S:O).request,a=o.signal;let u=null;const c=function(){let e=new ue("The user aborted a request.");n(e),o.body&&o.body instanceof j.Readable&&o.body.destroy(e),u&&u.body&&u.body.emit("error",e)};if(a&&a.aborted)return void c();const l=function(){c(),d()},f=i(s);let p;function d(){f.abort(),a&&a.removeEventListener("abort",l),clearTimeout(p)}a&&a.addEventListener("abort",l),o.timeout&&f.once("socket",(function(e){p=setTimeout((function(){n(new A("network timeout at: "+o.url,"request-timeout")),d()}),o.timeout)})),f.on("error",(function(e){n(new A(`request to ${o.url} failed, reason: ${e.message}`,"system",e)),d()})),f.on("response",(function(e){clearTimeout(p);const t=function(e){const t=new V;for(const r of Object.keys(e))if(!F.test(r))if(Array.isArray(e[r]))for(const n of e[r])I.test(n)||(void 0===t[J][r]?t[J][r]=[n]:t[J][r].push(n));else I.test(e[r])||(t[J][r]=[e[r]]);return t}(e.headers);if(fe.isRedirect(e.statusCode)){const s=t.get("Location"),i=null===s?null:le(o.url,s);switch(o.redirect){case"error":return n(new A("uri requested responds with a redirect, redirect mode is set to error: "+o.url,"no-redirect")),void d();case"manual":if(null!==i)try{t.set("Location",i)}catch(e){n(e)}break;case"follow":if(null===i)break;if(o.counter>=o.follow)return n(new A("maximum redirect reached at: "+o.url,"max-redirect")),void d();const s={headers:new V(o.headers),follow:o.follow,counter:o.counter+1,agent:o.agent,compress:o.compress,method:o.method,body:o.body,signal:o.signal,timeout:o.timeout,size:o.size};return 303!==e.statusCode&&o.body&&null===D(o)?(n(new A("Cannot follow redirect with body being a readable stream","unsupported-redirect")),void d()):(303!==e.statusCode&&(301!==e.statusCode&&302!==e.statusCode||"POST"!==o.method)||(s.method="GET",s.body=void 0,s.headers.delete("content-length")),r(fe(new ae(i,s))),void d())}}e.once("end",(function(){a&&a.removeEventListener("abort",l)}));let s=e.pipe(new ce);const i={url:o.url,status:e.statusCode,statusText:e.statusMessage,headers:t,size:o.size,timeout:o.timeout,counter:o.counter},c=t.get("Content-Encoding");if(!o.compress||"HEAD"===o.method||null===c||204===e.statusCode||304===e.statusCode)return u=new te(s,i),void r(u);const f={flush:E.Z_SYNC_FLUSH,finishFlush:E.Z_SYNC_FLUSH};if("gzip"==c||"x-gzip"==c)return s=s.pipe(E.createGunzip(f)),u=new te(s,i),void r(u);if("deflate"!=c&&"x-deflate"!=c){if("br"==c&&"function"==typeof E.createBrotliDecompress)return s=s.pipe(E.createBrotliDecompress()),u=new te(s,i),void r(u);u=new te(s,i),r(u)}else{e.pipe(new ce).once("data",(function(e){s=8==(15&e[0])?s.pipe(E.createInflate()):s.pipe(E.createInflateRaw()),u=new te(s,i),r(u)}))}})),function(e,t){const r=t.body;null===r?e.end():z(r)?r.stream().pipe(e):Buffer.isBuffer(r)?(e.write(r),e.end()):r.pipe(e)}(f,o)}))}fe.isRedirect=function(e){return 301===e||302===e||303===e||307===e||308===e},fe.Promise=global.Promise;var pe=fe;class de extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}}var he=r(7);const be=r.n(he)()(e=>console.warn(e));class ye extends Error{constructor(e,t,r){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=t,Object.defineProperty(this,"code",{get:()=>(be(new de("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),t)}),this.headers=r.headers||{};const n=Object.assign({},r.request);r.request.headers.authorization&&(n.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),n.url=n.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=n}}function ge(e){var t,r,n;(!1!==v(t=e.body)&&(void 0===(r=t.constructor)||!1!==v(n=r.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf"))||Array.isArray(e.body))&&(e.body=JSON.stringify(e.body));let o,s,i={};return(e.request&&e.request.fetch||pe)(e.url,Object.assign({method:e.method,body:e.body,headers:e.headers,redirect:e.redirect},e.request)).then(t=>{s=t.url,o=t.status;for(const e of t.headers)i[e[0]]=e[1];if(204===o||205===o)return;if("HEAD"===e.method){if(o<400)return;throw new ye(t.statusText,o,{headers:i,request:e})}if(304===o)throw new ye("Not modified",o,{headers:i,request:e});if(o>=400)return t.text().then(t=>{const r=new ye(t,o,{headers:i,request:e});try{let e=JSON.parse(r.message);Object.assign(r,e);let t=e.errors;r.message=r.message+": "+t.map(JSON.stringify).join(", ")}catch(e){}throw r});const r=t.headers.get("content-type");return/application\/json/.test(r)?t.json():!r||/^text\/|charset=utf-8$/.test(r)?t.text():function(e){return e.arrayBuffer()}(t)}).then(e=>({status:o,url:s,headers:i,data:e})).catch(t=>{if(t instanceof ye)throw t;throw new ye(t.message,500,{headers:i,request:e})})}const me=function e(t,r){const n=t.defaults(r);return Object.assign((function(t,r){const o=n.merge(t,r);if(!o.request||!o.request.hook)return ge(n.parse(o));const s=(e,t)=>ge(n.parse(n.merge(e,t)));return Object.assign(s,{endpoint:n,defaults:e.bind(null,n)}),o.request.hook(s,o)}),{endpoint:n,defaults:e.bind(null,n)})}(w,{headers:{"user-agent":"octokit-request.js/5.4.9 "+n()}});class we extends Error{constructor(e,t){super(t.data.errors[0].message),Object.assign(this,t.data),Object.assign(this,{headers:t.headers}),this.name="GraphqlError",this.request=e,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}const ve=["method","baseUrl","url","headers","request","query","mediaType"],je=/\/api\/v3\/?$/;function Oe(e,t){const r=e.defaults(t);return Object.assign((e,t)=>function(e,t,r){if("string"==typeof t&&r&&"query"in r)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));const n="string"==typeof t?Object.assign({query:t},r):t,o=Object.keys(n).reduce((e,t)=>ve.includes(t)?(e[t]=n[t],e):(e.variables||(e.variables={}),e.variables[t]=n[t],e),{}),s=n.baseUrl||e.endpoint.DEFAULTS.baseUrl;return je.test(s)&&(o.url=s.replace(je,"/api/graphql")),e(o).then(e=>{if(e.data.errors){const t={};for(const r of Object.keys(e.headers))t[r]=e.headers[r];throw new we(o,{headers:t,data:e.data})}return e.data.data})}(r,e,t),{defaults:Oe.bind(null,r),endpoint:me.endpoint})}Oe(me,{headers:{"user-agent":"octokit-graphql.js/4.5.6 "+n()},method:"POST",url:"/graphql"});async function Te(e){const t=3===e.split(/\./).length?"app":/^v\d+\./.test(e)?"installation":"oauth";return{type:"token",token:e,tokenType:t}}async function Se(e,t,r,n){const o=t.endpoint.merge(r,n);return o.headers.authorization=function(e){return 3===e.split(/\./).length?"bearer "+e:"token "+e}(e),t(o)}class Ee{constructor(e={}){const t=new o.Collection,r={baseUrl:me.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},e.request,{hook:t.bind(null,"request")}),mediaType:{previews:[],format:""}};var s;if(r.headers["user-agent"]=[e.userAgent,"octokit-core.js/3.1.2 "+n()].filter(Boolean).join(" "),e.baseUrl&&(r.baseUrl=e.baseUrl),e.previews&&(r.mediaType.previews=e.previews),e.timeZone&&(r.headers["time-zone"]=e.timeZone),this.request=me.defaults(r),this.graphql=(s=this.request,Oe(s,{method:"POST",url:"/graphql"})).defaults({...r,baseUrl:r.baseUrl.replace(/\/api\/v3$/,"/api")}),this.log=Object.assign({debug:()=>{},info:()=>{},warn:console.warn.bind(console),error:console.error.bind(console)},e.log),this.hook=t,e.authStrategy){const r=e.authStrategy(Object.assign({request:this.request},e.auth));t.wrap("request",r.hook),this.auth=r}else if(e.auth){const r=function(e){if(!e)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if("string"!=typeof e)throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return e=e.replace(/^(token|bearer) +/i,""),Object.assign(Te.bind(null,e),{hook:Se.bind(null,e)})}(e.auth);t.wrap("request",r.hook),this.auth=r}else this.auth=async()=>({type:"unauthenticated"});this.constructor.plugins.forEach(t=>{Object.assign(this,t(this,e))})}static defaults(e){return class extends(this){constructor(...t){const r=t[0]||{};super("function"!=typeof e?Object.assign({},e,r,r.userAgent&&e.userAgent?{userAgent:`${r.userAgent} ${e.userAgent}`}:null):e(r))}}}static plugin(...e){var t;const r=this.plugins;return(t=class extends(this){}).plugins=r.concat(e.filter(e=>!r.includes(e))),t}}Ee.VERSION="3.1.2",Ee.plugins=[];var ke=r(2);const{GIT_AUTH:xe}=process.env,Pe=new Ee({auth:xe}),qe=async e=>{try{const e=await Pe.request("POST /repos/wastenotworld/site/issues",{org:"wastenotworld",repo:"site",title:"Testing"});return console.log("response",e),Object(ke.statusReturn)(200,{body:"success"})}catch(e){return console.log(e),Object(ke.statusReturn)(500,{error:e.message})}}}]));