parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OOmF":[function(require,module,exports) {

},{}],"NvjX":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var o=0;o<i.length;o++){var e=i[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(t,o,e){return o&&i(t.prototype,o),e&&i(t,e),t}require("../css/styles.less");var e=function(){function i(o){var e=o.position,n=void 0===e?{x:0,y:0}:e,r=o.width,a=void 0===r?0:r,h=o.height,s=void 0===h?0:h,c=o.color,d=void 0===c?0:c,l=o.velocityX,u=void 0===l?0:l,v=o.velocityY,y=void 0===v?0:v,f=o.gravity,m=void 0===f?0:f,p=o.randomGeometry,g=void 0===p?.5:p;t(this,i),this.position=n,this.width=a,this.height=s,this.color=d,this.velocityX=u,this.velocityY=y,this.gravity=m,this.randomGeometry=g}return o(i,[{key:"update",value:function(t){this.velocityY+=this.gravity*t,this.position.x+=this.velocityX*t,this.position.y+=this.velocityY*t}},{key:"render",value:function(){u.fillStyle=this.color,this.randomGeometry<.5?(u.beginPath(),u.arc(this.position.x,this.position.y,this.width,0,2*Math.PI),u.closePath(),u.fill()):u.fillRect(this.position.x,this.position.y,this.width,this.height)}}]),i}(),n=function(t,i){return Math.random()*(i-t)+t},r=function(){return"rgb(".concat(255*Math.round(Math.random()),", \n                ").concat(255*Math.round(Math.random()),", \n                ").concat(255*Math.round(Math.random()),")")},a=0,h=512,s=512,c=100,d=new Array,l=document.getElementById("canvas"),u=l.getContext("2d");function v(t){var i=(t/=1e3)-a;a=t,u.clearRect(0,0,l.width,l.height),d.forEach(function(t){t.update(i),t.render(u)}),requestAnimationFrame(v)}l.width=h*devicePixelRatio,l.height=s*devicePixelRatio,l.style.width="".concat(h,"px"),l.style.height="".concat(s,"px"),requestAnimationFrame(v),l.addEventListener("mousedown",function(t){var i=n(10,30),o=new e({position:{x:t.offsetX,y:t.offsetY},width:i,height:i,color:r(),velocityX:n(-200,200),velocityY:n(-200,200),gravity:c,randomGeometry:Math.random()});d.push(o)});
},{"../css/styles.less":"OOmF"}]},{},["NvjX"], null)
//# sourceMappingURL=js.bddb40a0.js.map