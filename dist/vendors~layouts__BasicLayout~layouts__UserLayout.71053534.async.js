(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"55Ip":function(e,r,t){"use strict";t.d(r,"a",(function(){return m}));var n=t("WHYC");function o(e,r){return o=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},o(e,r)}function i(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,o(e,r)}var a=t("q1tI"),u=t.n(a),c=t("YS25");t("17x9");function f(){return f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},f.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}var s=t("9R94");u.a.Component;u.a.Component;var p=function(e,r){return"function"===typeof e?e(r):e},y=function(e,r){return"string"===typeof e?Object(c["c"])(e,null,null,r):e},v=function(e){return e},d=u.a.forwardRef;function h(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}"undefined"===typeof d&&(d=v);var b=d((function(e,r){var t=e.innerRef,n=e.navigate,o=e.onClick,i=l(e,["innerRef","navigate","onClick"]),a=i.target,c=f({},i,{onClick:function(e){try{o&&o(e)}catch(r){throw e.preventDefault(),r}e.defaultPrevented||0!==e.button||a&&"_self"!==a||h(e)||(e.preventDefault(),n())}});return c.ref=v!==d&&r||t,u.a.createElement("a",c)}));var m=d((function(e,r){var t=e.component,o=void 0===t?b:t,i=e.replace,a=e.to,c=e.innerRef,h=l(e,["component","replace","to","innerRef"]);return u.a.createElement(n["e"].Consumer,null,(function(e){e||Object(s["default"])(!1);var t=e.history,n=y(p(a,e.location),e.location),l=n?t.createHref(n):"",b=f({},h,{href:l,navigate:function(){var r=p(a,e.location),n=i?t.replace:t.push;n(r)}});return v!==d?b.ref=r||c:b.innerRef=c,u.a.createElement(o,b)}))})),g=function(e){return e},O=u.a.forwardRef;function w(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((function(e){return e})).join(" ")}"undefined"===typeof O&&(O=g);O((function(e,r){var t=e["aria-current"],o=void 0===t?"page":t,i=e.activeClassName,a=void 0===i?"active":i,c=e.activeStyle,v=e.className,d=e.exact,h=e.isActive,b=e.location,j=e.sensitive,A=e.strict,S=e.style,E=e.to,x=e.innerRef,P=l(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return u.a.createElement(n["e"].Consumer,null,(function(e){e||Object(s["default"])(!1);var t=b||e.location,i=y(p(E,t),t),l=i.pathname,R=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=R?Object(n["f"])(t.pathname,{path:R,exact:d,sensitive:j,strict:A}):null,M=!!(h?h(C,t):C),k=M?w(v,a):v,D=M?f({},S,{},c):S,I=f({"aria-current":M&&o||null,className:k,style:D,to:i},P);return g!==O?I.ref=r||x:I.innerRef=x,u.a.createElement(m,I)}))}))},CiB2:function(e,r,t){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}t.d(r,"a",(function(){return n}))},GOef:function(e,r,t){"use strict";t.d(r,"c",(function(){return Me})),t.d(r,"a",(function(){return Ne})),t.d(r,"b",(function(){return $e}));var n=t("n2rz"),o=t.n(n),i=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function a(e,r){return e===r||!(!i(e)||!i(r))}function u(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(!a(e[t],r[t]))return!1;return!0}function c(e,r){var t;void 0===r&&(r=u);var n,o=[],i=!1;function a(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];return i&&t===this&&r(a,o)||(n=e.apply(this,a),i=!0,t=this,o=a),n}return a}var f=c;function l(e){var r=[],t=0;while(t<e.length){var n=e[t];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)r.push({type:"CHAR",index:t,value:e[t++]});else{var o=1,i="";u=t+1;if("?"===e[u])throw new TypeError('Pattern cannot start with "?" at '+u);while(u<e.length)if("\\"!==e[u]){if(")"===e[u]){if(o--,0===o){u++;break}}else if("("===e[u]&&(o++,"?"!==e[u+1]))throw new TypeError("Capturing groups are not allowed at "+u);i+=e[u++]}else i+=e[u++]+e[u++];if(o)throw new TypeError("Unbalanced pattern at "+t);if(!i)throw new TypeError("Missing pattern at "+t);r.push({type:"PATTERN",index:t,value:i}),t=u}else{var a="",u=t+1;while(u<e.length){var c=e.charCodeAt(u);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;a+=e[u++]}if(!a)throw new TypeError("Missing parameter name at "+t);r.push({type:"NAME",index:t,value:a}),t=u}else r.push({type:"CLOSE",index:t,value:e[t++]});else r.push({type:"OPEN",index:t,value:e[t++]});else r.push({type:"ESCAPED_CHAR",index:t++,value:e[t++]});else r.push({type:"MODIFIER",index:t,value:e[t++]})}return r.push({type:"END",index:t,value:""}),r}function s(e,r){void 0===r&&(r={});var t=l(e),n=r.prefixes,o=void 0===n?"./":n,i="[^"+p(r.delimiter||"/#?")+"]+?",a=[],u=0,c=0,f="",s=function(e){if(c<t.length&&t[c].type===e)return t[c++].value},y=function(e){var r=s(e);if(void 0!==r)return r;var n=t[c],o=n.type,i=n.index;throw new TypeError("Unexpected "+o+" at "+i+", expected "+e)},v=function(){var e,r="";while(e=s("CHAR")||s("ESCAPED_CHAR"))r+=e;return r};while(c<t.length){var d=s("CHAR"),h=s("NAME"),b=s("PATTERN");if(h||b){var m=d||"";-1===o.indexOf(m)&&(f+=m,m=""),f&&(a.push(f),f=""),a.push({name:h||u++,prefix:m,suffix:"",pattern:b||i,modifier:s("MODIFIER")||""})}else{var g=d||s("ESCAPED_CHAR");if(g)f+=g;else{f&&(a.push(f),f="");var O=s("OPEN");if(O){m=v();var w=s("NAME")||"",j=s("PATTERN")||"",A=v();y("CLOSE"),a.push({name:w||(j?u++:""),pattern:w&&!j?i:j,prefix:m,suffix:A,modifier:s("MODIFIER")||""})}else y("END")}}}return a}function p(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function y(e){return e&&e.sensitive?"":"i"}function v(e,r){if(!r)return e;var t=e.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)r.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}function d(e,r,t){var n=e.map((function(e){return m(e,r,t).source}));return new RegExp("(?:"+n.join("|")+")",y(t))}function h(e,r,t){return b(s(e,t),r,t)}function b(e,r,t){void 0===t&&(t={});for(var n=t.strict,o=void 0!==n&&n,i=t.start,a=void 0===i||i,u=t.end,c=void 0===u||u,f=t.encode,l=void 0===f?function(e){return e}:f,s="["+p(t.endsWith||"")+"]|$",v="["+p(t.delimiter||"/#?")+"]",d=a?"^":"",h=0,b=e;h<b.length;h++){var m=b[h];if("string"===typeof m)d+=p(l(m));else{var g=p(l(m.prefix)),O=p(l(m.suffix));if(m.pattern)if(r&&r.push(m),g||O)if("+"===m.modifier||"*"===m.modifier){var w="*"===m.modifier?"?":"";d+="(?:"+g+"((?:"+m.pattern+")(?:"+O+g+"(?:"+m.pattern+"))*)"+O+")"+w}else d+="(?:"+g+"("+m.pattern+")"+O+")"+m.modifier;else d+="("+m.pattern+")"+m.modifier;else d+="(?:"+g+O+")"+m.modifier}}if(c)o||(d+=v+"?"),d+=t.endsWith?"(?="+s+")":"$";else{var j=e[e.length-1],A="string"===typeof j?v.indexOf(j[j.length-1])>-1:void 0===j;o||(d+="(?:"+v+"(?="+s+"))?"),A||(d+="(?="+v+"|"+s+")")}return new RegExp(d,y(t))}function m(e,r,t){return e instanceof RegExp?v(e,r):Array.isArray(e)?d(e,r,t):h(e,r,t)}function g(e,r){return r>>>e|r<<32-e}function O(e,r,t){return e&r^~e&t}function w(e,r,t){return e&r^e&t^r&t}function j(e){return g(2,e)^g(13,e)^g(22,e)}function A(e){return g(6,e)^g(11,e)^g(25,e)}function S(e){return g(7,e)^g(18,e)^e>>>3}function E(e){return g(17,e)^g(19,e)^e>>>10}function x(e,r){return e[15&r]+=E(e[r+14&15])+e[r+9&15]+S(e[r+1&15])}var P,R,C,M=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],k="0123456789abcdef";function D(e,r){var t=(65535&e)+(65535&r),n=(e>>16)+(r>>16)+(t>>16);return n<<16|65535&t}function I(){P=new Array(8),R=new Array(2),C=new Array(64),R[0]=R[1]=0,P[0]=1779033703,P[1]=3144134277,P[2]=1013904242,P[3]=2773480762,P[4]=1359893119,P[5]=2600822924,P[6]=528734635,P[7]=1541459225}function _(){var e,r,t,n,o,i,a,u,c,f,l=new Array(16);e=P[0],r=P[1],t=P[2],n=P[3],o=P[4],i=P[5],a=P[6],u=P[7];for(var s=0;s<16;s++)l[s]=C[3+(s<<2)]|C[2+(s<<2)]<<8|C[1+(s<<2)]<<16|C[s<<2]<<24;for(var p=0;p<64;p++)c=u+A(o)+O(o,i,a)+M[p],c+=p<16?l[p]:x(l,p),f=j(e)+w(e,r,t),u=a,a=i,i=o,o=D(n,c),n=t,t=r,r=e,e=D(c,f);P[0]+=e,P[1]+=r,P[2]+=t,P[3]+=n,P[4]+=o,P[5]+=i,P[6]+=a,P[7]+=u}function N(e,r){var t,n,o=0;n=R[0]>>3&63;var i=63&r;for((R[0]+=r<<3)<r<<3&&R[1]++,R[1]+=r>>29,t=0;t+63<r;t+=64){for(var a=n;a<64;a++)C[a]=e.charCodeAt(o++);_(),n=0}for(var u=0;u<i;u++)C[u]=e.charCodeAt(o++)}function T(){var e=R[0]>>3&63;if(C[e++]=128,e<=56)for(var r=e;r<56;r++)C[r]=0;else{for(var t=e;t<64;t++)C[t]=0;_();for(var n=0;n<56;n++)C[n]=0}C[56]=R[1]>>>24&255,C[57]=R[1]>>>16&255,C[58]=R[1]>>>8&255,C[59]=255&R[1],C[60]=R[0]>>>24&255,C[61]=R[0]>>>16&255,C[62]=R[0]>>>8&255,C[63]=255&R[0],_()}function K(){for(var e=new String,r=0;r<8;r++)for(var t=28;t>=0;t-=4)e+=k.charAt(P[r]>>>t&15);return e}function $(e){return I(),N(e,e.length),T(),K()}var H=$;function z(e){return z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function U(e,r){return J(e)||F(e,r)||ue(e,r)||W()}function W(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function F(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done);n=!0)if(t.push(a.value),r&&t.length===r)break}catch(c){o=!0,i=c}finally{try{n||null==u["return"]||u["return"]()}finally{if(o)throw i}}return t}}function J(e){if(Array.isArray(e))return e}function L(e,r){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=ue(e))||r&&e&&"number"===typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw i}}}}function B(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function G(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e,r,t){return r&&G(e.prototype,r),t&&G(e,t),e}function Y(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&ne(e,r)}function q(e){var r=re();return function(){var t,n=oe(e);if(r){var o=oe(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Q(this,t)}}function Q(e,r){return!r||"object"!==z(r)&&"function"!==typeof r?X(e):r}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){var r="function"===typeof Map?new Map:void 0;return Z=function(e){if(null===e||!te(e))return e;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return ee(e,arguments,oe(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),ne(t,e)},Z(e)}function ee(e,r,t){return ee=re()?Reflect.construct:function(e,r,t){var n=[null];n.push.apply(n,r);var o=Function.bind.apply(e,n),i=new o;return t&&ne(i,t.prototype),i},ee.apply(null,arguments)}function re(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function te(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function ne(e,r){return ne=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},ne(e,r)}function oe(e){return oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},oe(e)}function ie(e){return fe(e)||ce(e)||ue(e)||ae()}function ae(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ue(e,r){if(e){if("string"===typeof e)return le(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?le(e,r):void 0}}function ce(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function fe(e){if(Array.isArray(e))return le(e)}function le(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function se(e,r){if(null==e)return{};var t,n,o=pe(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function pe(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}function ye(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ve(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ye(Object(t),!0).forEach((function(r){de(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ye(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function de(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function he(e){return e.split("?")[0].split("#")[0]}var be=function(e){if(!e.startsWith("http"))return!1;try{var r=new URL(e);return!!r}catch(t){return!1}},me=function(e){var r=e.path;if(!r||"/"===r)try{return"/".concat(H(JSON.stringify(e)))}catch(t){}return r?he(r):r},ge=function(e,r){var t=e.name,n=e.locale;return!("locale"in e&&!1===n||!t)&&(e.locale||"".concat(r,".").concat(t))},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/";return(e||r).startsWith("/")||be(e)?e:"/".concat(r,"/").concat(e).replace(/\/\//g,"/").replace(/\/\//g,"/")},we=function(e,r){var t=e.menu,n=void 0===t?{}:t,o=e.indexRoute,i=e.path,a=void 0===i?"":i,u=e.children,c=n.name,f=void 0===c?e.name:c,l=n.icon,s=void 0===l?e.icon:l,p=n.hideChildren,y=void 0===p?e.hideChildren:p,v=n.flatMenu,d=void 0===v?e.flatMenu:v,h=o&&"redirect"!==Object.keys(o).join(",")?[ve({path:a,menu:n},o)].concat(u||[]):u,b=ve({},e);if(f&&(b.name=f),s&&(b.icon=s),h&&h.length){if(y)return delete b.children,b;var m=je(ve(ve({},r),{},{data:h}),e);if(d)return m;b.children=m}return b};function je(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/"},t=e.data,n=e.formatMessage,o=e.parentName,i=e.locale;return t&&Array.isArray(t)?t.filter((function(e){return!!e&&(!(!e.routes&&!e.children)||(!!e.path||(!!e.layout||(e.redirect,!1))))})).filter((function(e){var r,t;return e.unaccessible&&delete e.name,!!((null===e||void 0===e||null===(r=e.menu)||void 0===r?void 0:r.name)||(null===e||void 0===e?void 0:e.flatMenu)||(null===e||void 0===e||null===(t=e.menu)||void 0===t?void 0:t.flatMenu))||!1!==e.menu})).map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{path:"/"},a=Oe(t.path,r?r.path:"/"),u=t.name,c=ge(t,o||"menu"),f=!1!==c&&!1!==i&&n&&c?n({id:c,defaultMessage:u}):u,l=r.pro_layout_parentKeys,s=void 0===l?[]:l,p=(r.children,r.icon,r.flatMenu,r.indexRoute,se(r,["pro_layout_parentKeys","children","icon","flatMenu","indexRoute"])),y=ve(ve(ve({},p),{},{menu:void 0},t),{},{path:a,locale:c,key:t.key||me(ve(ve({},t),{},{path:a})),routes:null,pro_layout_parentKeys:Array.from(new Set([].concat(ie(t.parentKeys||[]),ie(s),["/".concat(r.key||"").replace(/\/\//g,"/").replace(/\/\//g,"/")]))).filter((function(e){return e&&"/"!==e}))});if(f?y.name=f:delete y.name,void 0===y.menu&&delete y.menu,t.routes||t.children){var v=je(ve(ve({},e),{},{data:t.routes||t.children,parentName:c||""}),y);y.children=v&&v.length>0?v:void 0,y.children||delete y.children}return we(y,e)})).flat(1):[]}var Ae=f(je,o.a),Se=function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.filter((function(e){return e&&(e.name||e.children)&&!e.hideInMenu&&!e.redirect})).map((function(r){if(r.children&&Array.isArray(r.children)&&!r.hideChildrenInMenu&&r.children.some((function(e){return e&&!!e.name}))){var t=e(r.children);if(t.length)return ve(ve({},r),{},{children:t})}return ve(ve({},r),{},{children:void 0})})).filter((function(e){return e}))},Ee=function(e){Y(t,e);var r=q(t);function t(){return B(this,t),r.apply(this,arguments)}return V(t,[{key:"get",value:function(e){var r;try{var t,n=L(this.entries());try{for(n.s();!(t=n.n()).done;){var o=U(t.value,2),i=o[0],a=o[1],u=he(i);if(!be(i)&&m(u,[]).test(e)){r=a;break}}}catch(c){n.e(c)}finally{n.f()}}catch(f){r=void 0}return r}}]),t}(Z(Map)),xe=function(e){var r=new Ee,t=function e(t,n){t.forEach((function(t){t&&t.children&&e(t.children,t);var o=Oe(t.path,n?n.path:"/");r.set(he(o),t)}))};return t(e),r},Pe=f(xe,o.a),Re=function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.map((function(r){if(r.children&&Array.isArray(r.children)&&r.children.length>0){var t=e(r.children);if(t.length)return ve(ve({},r),{},{children:t})}var n=ve({},r);return delete n.children,n})).filter((function(e){return e}))},Ce=function(e,r,t,n){var o=Ae({data:e,formatMessage:t,locale:r}),i=n?Re(o):Se(o),a=Pe(o);return{breadcrumb:a,menuData:i}},Me=Ce;function ke(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function De(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ke(Object(t),!0).forEach((function(r){Ie(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ke(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Ie(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var _e=function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return r.forEach((function(r){r&&r.key&&(t[he(r.path||r.key||"/")]=De({},r),t[r.key||r.path||"/"]=De({},r),r.children&&(t=De(De({},t),e(r.children))))})),t},Ne=_e,Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0;return e.filter((function(e){if("/"===e&&"/"===r)return!0;if("/"!==e&&"/*"!==e&&e&&!be(e)){var n=he(e);try{if(t&&m("".concat(n)).test(r))return!0;if(m("".concat(n),[]).test(r))return!0;if(m("".concat(n,"/(.*)")).test(r))return!0}catch(o){}}return!1})).sort((function(e,t){return e===r?10:t===r?-10:e.substr(1).split("/").length-t.substr(1).split("/").length}))},Ke=function(e,r,t,n){var o=Ne(r),i=Object.keys(o),a=Te(i,e||"/",n);return!a||a.length<1?[]:(t||(a=[a[a.length-1]]),a.map((function(e){var r=o[e]||{pro_layout_parentKeys:"",key:""},t=new Map,n=(r.pro_layout_parentKeys||[]).map((function(e){return t.has(e)?null:(t.set(e,!0),o[e])})).filter((function(e){return e}));return r.key&&n.push(r),n})).flat(1))},$e=Ke},Qv07:function(e,r,t){"use strict";var n=t("GOef");function o(e,r){return u(e)||a(e,r)||l(e,r)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,r){var t=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var n,o,i=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(n=t.next()).done);a=!0)if(i.push(n.value),r&&i.length===r)break}catch(c){u=!0,o=c}finally{try{a||null==t["return"]||t["return"]()}finally{if(u)throw o}}return i}}function u(e){if(Array.isArray(e))return e}function c(e){return p(e)||s(e)||l(e)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,r){if(e){if("string"===typeof e)return y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,r):void 0}}function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function p(e){if(Array.isArray(e))return y(e)}function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function v(e){return c(e).reduce((function(e,r){var t=o(r,2),n=t[0],i=t[1];return e[n]=i,e}),{})}r["a"]=function(e,r,t,o){var i=Object(n["c"])(e,(null===r||void 0===r?void 0:r.locale)||!1,t,!0),a=i.menuData,u=i.breadcrumb;if(!o)return{breadcrumb:v(u),breadcrumbMap:u,menuData:a};var c=Object(n["c"])(o(a),(null===r||void 0===r?void 0:r.locale)||!1,t,!0);return{breadcrumb:v(c.breadcrumb),breadcrumbMap:c.breadcrumb,menuData:c.menuData}}},n2rz:function(e,r,t){"use strict";var n=t("bfL6");e.exports=function e(r,t){if(r===t)return!0;if(r&&t&&"object"==typeof r&&"object"==typeof t){if(r.constructor!==t.constructor)return!1;var o,i,a;if(Array.isArray(r)){if(o=r.length,o!=t.length)return!1;for(i=o;0!==i--;)if(!e(r[i],t[i]))return!1;return!0}if(r instanceof Map&&t instanceof Map){if(r.size!==t.size)return!1;var u,c=n(r.entries());try{for(c.s();!(u=c.n()).done;)if(i=u.value,!t.has(i[0]))return!1}catch(v){c.e(v)}finally{c.f()}var f,l=n(r.entries());try{for(l.s();!(f=l.n()).done;)if(i=f.value,!e(i[1],t.get(i[0])))return!1}catch(v){l.e(v)}finally{l.f()}return!0}if(r instanceof Set&&t instanceof Set){if(r.size!==t.size)return!1;var s,p=n(r.entries());try{for(p.s();!(s=p.n()).done;)if(i=s.value,!t.has(i[0]))return!1}catch(v){p.e(v)}finally{p.f()}return!0}if(ArrayBuffer.isView(r)&&ArrayBuffer.isView(t)){if(o=r.length,o!=t.length)return!1;for(i=o;0!==i--;)if(r[i]!==t[i])return!1;return!0}if(r.constructor===RegExp)return r.source===t.source&&r.flags===t.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===t.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===t.toString();if(a=Object.keys(r),o=a.length,o!==Object.keys(t).length)return!1;for(i=o;0!==i--;)if(!Object.prototype.hasOwnProperty.call(t,a[i]))return!1;for(i=o;0!==i--;){var y=a[i];if(!e(r[y],t[y]))return!1}return!0}return r!==r&&t!==t}},su3W:function(e,r,t){"use strict";t.d(r,"b",(function(){return p}));var n=t("vRGJ"),o=t.n(n);function i(e){return f(e)||c(e)||u(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,r){if(e){if("string"===typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,r):void 0}}function c(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function f(e){if(Array.isArray(e))return l(e)}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var s=function(e,r,t){if(t){var n=i(t.keys()).find((function(r){return o()(r).test(e)}));if(n)return t.get(n)}if(r){var a=Object.keys(r).find((function(r){return o()(r).test(e)}));if(a)return r[a]}return{path:""}},p=function(e,r){var t=e.pathname,n=void 0===t?"/":t,o=e.breadcrumb,i=e.breadcrumbMap,a=e.formatMessage,u=e.title,c=void 0===u?"Ant Design Pro":u,f=e.menu,l=void 0===f?{locale:!1}:f,p=r?"":c||"",y=s(n,o,i);if(!y)return{title:p,id:"",pageName:p};var v=y.name;return!1!==l.locale&&y.locale&&a&&(v=a({id:y.locale||"",defaultMessage:y.name})),v?r||!c?{title:v,id:y.locale||"",pageName:v}:{title:"".concat(v," - ").concat(c),id:y.locale||"",pageName:v}:{title:p,id:y.locale||"",pageName:p}},y=function(e,r){return p(e,r).title};r["a"]=y}}]);