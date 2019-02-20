(function(){var e,n,r,t,f,a,u,c,o,l,i,s,b,d,h,p,g,m,y,v,w,k,_,N,M,x,A,O,j,q,G,L,P,B,R,Y,E,S,X,z,U,V,C,F,I,K,Z,D,$,H,J,Q,T,W,ee,ne,re,te,fe,ae,ue,ce,oe,le,ie,se,be,de,he,pe,ge,ye,ve,we,ke,_e,Ne,Me,xe,Ae,Oe=[].slice;_e=function(){var e,n,r,t,f;for(e={},t=0,n=(f="Boolean Number String Function Array Date RegExp Undefined Null".split(" ")).length;t<n;t++)r=f[t],e["[object "+r+"]"]=r.toLowerCase();return function(n){var r;return r=Object.prototype.toString.call(n),e[r]||"object"}}(),Z=function(e,n,r){return null==n&&(n=0),null==r&&(r=1),e<n&&(e=n),e>r&&(e=r),e},Ne=function(e){return e.length>=3?Array.prototype.slice.call(e):e[0]},w=function(e){var n,r;for(e._clipped=!1,e._unclipped=e.slice(0),n=r=0;r<3;n=++r)n<3?((e[n]<0||e[n]>255)&&(e._clipped=!0),e[n]<0&&(e[n]=0),e[n]>255&&(e[n]=255)):3===n&&(e[n]<0&&(e[n]=0),e[n]>1&&(e[n]=1));return e._clipped||delete e._unclipped,e},t=Math.PI,ge=Math.round,_=Math.cos,O=Math.floor,ee=Math.pow,D=Math.log,ve=Math.sin,we=Math.sqrt,d=Math.atan2,J=Math.max,b=Math.abs,u=2*t,f=t/3,n=t/180,a=180/t,(v=function(){return arguments[0]instanceof e?arguments[0]:function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,arguments,function(){})}).default=v,s=[],"undefined"!=typeof module&&null!==module&&null!=module.exports&&(module.exports=v),"function"==typeof define&&define.amd?define([],function(){return v}):("undefined"!=typeof exports&&null!==exports?exports:this).chroma=v,v.version="1.3.7",i={},o=[],l=!1,e=function(){function e(){var e,n,r,t,f,a,u,c,s;for(a=this,n=[],c=0,t=arguments.length;c<t;c++)null!=(e=arguments[c])&&n.push(e);if(n.length>1&&(u=n[n.length-1]),null!=i[u])a._rgb=w(i[u](Ne(n.slice(0,-1))));else{for(l||(o=o.sort(function(e,n){return n.p-e.p}),l=!0),s=0,f=o.length;s<f&&!(u=(r=o[s]).test.apply(r,n));s++);u&&(a._rgb=w(i[u].apply(i,n)))}null==a._rgb&&console.warn("unknown format: "+n),null==a._rgb&&(a._rgb=[0,0,0]),3===a._rgb.length&&a._rgb.push(1)}return e.prototype.toString=function(){return this.hex()},e.prototype.clone=function(){return v(me._rgb)},e}(),v._input=i,v.brewer=m={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},function(){var e,n;for(e in n=[],m)n.push(m[e.toLowerCase()]=m[e])}(),v.colors=Me={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},V=function(){var e,n,t,f,a,u,c;return f=(n=Ne(arguments))[0],e=n[1],t=n[2],u=(f+16)/116,a=isNaN(e)?u:u+e/500,c=isNaN(t)?u:u-t/200,u=r.Yn*C(u),a=r.Xn*C(a),c=r.Zn*C(c),[Ae(3.2404542*a-1.5371385*u-.4985314*c),Ae(-.969266*a+1.8760108*u+.041556*c),t=Ae(.0556434*a-.2040259*u+1.0572252*c),n.length>3?n[3]:1]},Ae=function(e){return 255*(e<=.00304?12.92*e:1.055*ee(e,1/2.4)-.055)},C=function(e){return e>r.t1?e*e*e:r.t2*(e-r.t0)},r={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},oe=function(){var e,n,r,t,f,a,u;return r=(t=Ne(arguments))[0],n=t[1],e=t[2],a=(f=de(r,n,e))[0],[116*(u=f[1])-16,500*(a-u),200*(u-f[2])]},he=function(e){return(e/=255)<=.04045?e/12.92:ee((e+.055)/1.055,2.4)},xe=function(e){return e>r.t3?ee(e,1/3):e/r.t2+r.t0},de=function(){var e,n,t,f;return t=(f=Ne(arguments))[0],n=f[1],e=f[2],t=he(t),n=he(n),e=he(e),[xe((.4124564*t+.3575761*n+.1804375*e)/r.Xn),xe((.2126729*t+.7151522*n+.072175*e)/r.Yn),xe((.0193339*t+.119192*n+.9503041*e)/r.Zn)]},v.lab=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,Oe.call(arguments).concat(["lab"]),function(){})},i.lab=V,e.prototype.lab=function(){return oe(this._rgb)},h=function(e){var n,r,t,f,a,u,c,o,l,i,s;return 2===(e=function(){var n,r,t;for(t=[],r=0,n=e.length;r<n;r++)f=e[r],t.push(v(f));return t}()).length?(l=function(){var n,r,t;for(t=[],r=0,n=e.length;r<n;r++)f=e[r],t.push(f.lab());return t}(),a=l[0],u=l[1],n=function(e){var n,r;return r=function(){var r,t;for(t=[],n=r=0;r<=2;n=++r)t.push(a[n]+e*(u[n]-a[n]));return t}(),v.lab.apply(v,r)}):3===e.length?(i=function(){var n,r,t;for(t=[],r=0,n=e.length;r<n;r++)f=e[r],t.push(f.lab());return t}(),a=i[0],u=i[1],c=i[2],n=function(e){var n,r;return r=function(){var r,t;for(t=[],n=r=0;r<=2;n=++r)t.push((1-e)*(1-e)*a[n]+2*(1-e)*e*u[n]+e*e*c[n]);return t}(),v.lab.apply(v,r)}):4===e.length?(s=function(){var n,r,t;for(t=[],r=0,n=e.length;r<n;r++)f=e[r],t.push(f.lab());return t}(),a=s[0],u=s[1],c=s[2],o=s[3],n=function(e){var n,r;return r=function(){var r,t;for(t=[],n=r=0;r<=2;n=++r)t.push((1-e)*(1-e)*(1-e)*a[n]+3*(1-e)*(1-e)*e*u[n]+3*(1-e)*e*e*c[n]+e*e*e*o[n]);return t}(),v.lab.apply(v,r)}):5===e.length&&(r=h(e.slice(0,3)),t=h(e.slice(2,5)),n=function(e){return e<.5?r(2*e):t(2*(e-.5))}),n},v.bezier=function(e){var n;return(n=h(e)).scale=function(){return v.scale(n)},n},v.cubehelix=function(e,n,r,t,f){var a,c,o;return null==e&&(e=300),null==n&&(n=-1.5),null==r&&(r=1),null==t&&(t=1),null==f&&(f=[0,1]),a=0,"array"===_e(f)?c=f[1]-f[0]:(c=0,f=[f,f]),(o=function(o){var l,i,s,b,d;return l=u*((e+120)/360+n*o),b=ee(f[0]+c*o,t),i=(0!==a?r[0]+o*a:r)*b*(1-b)/2,s=_(l),d=ve(l),v(w([255*(b+i*(-.14861*s+1.78277*d)),255*(b+i*(-.29227*s-.90649*d)),255*(b+i*(1.97294*s))]))}).start=function(n){return null==n?e:(e=n,o)},o.rotations=function(e){return null==e?n:(n=e,o)},o.gamma=function(e){return null==e?t:(t=e,o)},o.hue=function(e){return null==e?r:("array"===_e(r=e)?0==(a=r[1]-r[0])&&(r=r[1]):a=0,o)},o.lightness=function(e){return null==e?f:("array"===_e(e)?(f=e,c=e[1]-e[0]):(f=[e,e],c=0),o)},o.scale=function(){return v.scale(o)},o.hue(r),o},v.random=function(){var n,r,t;for(r="0123456789abcdef",n="#",t=0;t<6;++t)n+=r.charAt(O(16*Math.random()));return new e(n)},s=[],v.interpolate=R=function(e,n,r,t){var f,a,u,c;for(null==r&&(r=.5),null==t&&(t="rgb"),"object"!==_e(e)&&(e=v(e)),"object"!==_e(n)&&(n=v(n)),u=0,a=s.length;u<a;u++)if(t===(f=s[u])[0]){c=f[1](e,n,r,t);break}if(null==c)throw"color mode "+t+" is not supported";return c.alpha(e.alpha()+r*(n.alpha()-e.alpha()))},e.prototype.interpolate=function(e,n,r){return R(this,e,n,r)},v.mix=R,e.prototype.mix=e.prototype.interpolate,i.rgb=function(){var e,n,r,t;for(e in r=[],n=Ne(arguments))t=n[e],r.push(t);return r},v.rgb=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,Oe.call(arguments).concat(["rgb"]),function(){})},e.prototype.rgb=function(e){return null==e&&(e=!0),e?this._rgb.map(Math.round).slice(0,3):this._rgb.slice(0,3)},e.prototype.rgba=function(e){return null==e&&(e=!0),e?[Math.round(this._rgb[0]),Math.round(this._rgb[1]),Math.round(this._rgb[2]),this._rgb[3]]:this._rgb.slice(0)},o.push({p:3,test:function(e){var n;return n=Ne(arguments),"array"===_e(n)&&3===n.length?"rgb":4===n.length&&"number"===_e(n[3])&&n[3]>=0&&n[3]<=1?"rgb":void 0}}),i.lrgb=i.rgb,S=function(n,r,t,f){var a,u;return a=n._rgb,u=r._rgb,new e(we(ee(a[0],2)*(1-t)+ee(u[0],2)*t),we(ee(a[1],2)*(1-t)+ee(u[1],2)*t),we(ee(a[2],2)*(1-t)+ee(u[2],2)*t),f)},c=function(n){var r,t,f,a,u;for(r=1/n.length,u=[0,0,0,0],f=0,t=n.length;f<t;f++)a=n[f]._rgb,u[0]+=ee(a[0],2)*r,u[1]+=ee(a[1],2)*r,u[2]+=ee(a[2],2)*r,u[3]+=a[3]*r;return u[0]=we(u[0]),u[1]=we(u[1]),u[2]=we(u[2]),new e(u)},s.push(["lrgb",S]),v.average=function(e,n){var r,f,a,u,o,l,i,s,b,h,p,g,m;if(null==n&&(n="rgb"),b=e.length,i=(e=e.map(function(e){return v(e)})).splice(0,1)[0],"lrgb"===n)return c(e);for(s in u=[],o=0,l=0,g=i.get(n))g[s]=g[s]||0,u.push(isNaN(g[s])?0:1),"h"!==n.charAt(s)||isNaN(g[s])||(r=g[s]/180*t,o+=_(r),l+=ve(r));for(f=i.alpha(),p=0,h=e.length;p<h;p++)for(s in m=(a=e[p]).get(n),f+=a.alpha(),g)isNaN(m[s])||(u[s]+=1,"h"===n.charAt(s)?(r=m[s]/180*t,o+=_(r),l+=ve(r)):g[s]+=m[s]);for(s in g)if("h"===n.charAt(s)){for(r=d(l/u[s],o/u[s])/t*180;r<0;)r+=360;for(;r>=360;)r-=360;g[s]=r}else g[s]=g[s]/u[s];return v(g,n).alpha(f/b)},q=function(e){var n,r;if(e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))return 4!==e.length&&7!==e.length||(e=e.substr(1)),3===e.length&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]),[(r=parseInt(e,16))>>16,r>>8&255,255&r,1];if(e.match(/^#?([A-Fa-f0-9]{8})$/))return 9===e.length&&(e=e.substr(1)),[(r=parseInt(e,16))>>24&255,r>>16&255,r>>8&255,ge((255&r)/255*100)/100];if(null!=i.css&&(n=i.css(e)))return n;throw"unknown color: "+e},fe=function(e,n){var r,t,f,a,u,c;return null==n&&(n="rgb"),u=e[0],f=e[1],t=e[2],r=e[3],u=Math.round(u),f=Math.round(f),t=Math.round(t),c=(c="000000"+(u<<16|f<<8|t).toString(16)).substr(c.length-6),a=(a="0"+ge(255*r).toString(16)).substr(a.length-2),"#"+function(){switch(n.toLowerCase()){case"rgba":return c+a;case"argb":return a+c;default:return c}}()},i.hex=function(e){return q(e)},v.hex=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,Oe.call(arguments).concat(["hex"]),function(){})},e.prototype.hex=function(e){return null==e&&(e="rgb"),fe(this._rgb,e)},o.push({p:4,test:function(e){if(1===arguments.length&&"string"===_e(e))return"hex"}}),P=function(){var e,n,r,t,f,a,u,c,o,l,i,s,b,d;if(f=(e=Ne(arguments))[0],i=e[1],u=e[2],0===i)o=t=n=255*u;else{for(d=[0,0,0],r=[0,0,0],s=2*u-(b=u<.5?u*(1+i):u+i-u*i),f/=360,d[0]=f+1/3,d[1]=f,d[2]=f-1/3,a=c=0;c<=2;a=++c)d[a]<0&&(d[a]+=1),d[a]>1&&(d[a]-=1),6*d[a]<1?r[a]=s+6*(b-s)*d[a]:2*d[a]<1?r[a]=b:3*d[a]<2?r[a]=s+(b-s)*(2/3-d[a])*6:r[a]=s;o=(l=[ge(255*r[0]),ge(255*r[1]),ge(255*r[2])])[0],t=l[1],n=l[2]}return e.length>3?[o,t,n,e[3]]:[o,t,n]},ue=function(e,n,r){var t,f,a,u,c;return void 0!==e&&e.length>=3&&(e=(u=e)[0],n=u[1],r=u[2]),e/=255,n/=255,r/=255,a=Math.min(e,n,r),f=((J=Math.max(e,n,r))+a)/2,J===a?(c=0,t=Number.NaN):c=f<.5?(J-a)/(J+a):(J-a)/(2-J-a),e===J?t=(n-r)/(J-a):n===J?t=2+(r-e)/(J-a):r===J&&(t=4+(e-n)/(J-a)),(t*=60)<0&&(t+=360),[t,c,f]},v.hsl=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,Oe.call(arguments).concat(["hsl"]),function(){})},i.hsl=P,e.prototype.hsl=function(){return ue(this._rgb)},B=function(){var e,n,r,t,f,a,u,c,o,l,i,s,b,d,h,p,g,m;if(f=(e=Ne(arguments))[0],p=e[1],m=e[2],m*=255,0===p)o=t=n=m;else switch(360===f&&(f=0),f>360&&(f-=360),f<0&&(f+=360),f/=60,a=O(f),r=f-a,u=m*(1-p),c=m*(1-p*r),g=m*(1-p*(1-r)),a){case 0:o=(l=[m,g,u])[0],t=l[1],n=l[2];break;case 1:o=(i=[c,m,u])[0],t=i[1],n=i[2];break;case 2:o=(s=[u,m,g])[0],t=s[1],n=s[2];break;case 3:o=(b=[u,c,m])[0],t=b[1],n=b[2];break;case 4:o=(d=[g,u,m])[0],t=d[1],n=d[2];break;case 5:o=(h=[m,u,c])[0],t=h[1],n=h[2]}return[o,t,n,e.length>3?e[3]:1]},ce=function(){var e,n,r,t,f,a,u,c,o;return a=(u=Ne(arguments))[0],r=u[1],e=u[2],f=Math.min(a,r,e),n=(J=Math.max(a,r,e))-f,o=J/255,0===J?(t=Number.NaN,c=0):(c=n/J,a===J&&(t=(r-e)/n),r===J&&(t=2+(e-a)/n),e===J&&(t=4+(a-r)/n),(t*=60)<0&&(t+=360)),[t,c,o]},v.hsv=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,Oe.call(arguments).concat(["hsv"]),function(){})},i.hsv=B,e.prototype.hsv=function(){return ce(this._rgb)},T=function(e){return"number"===_e(e)&&e>=0&&e<=16777215?[e>>16,e>>8&255,255&e,1]:(console.warn("unknown num color: "+e),[0,0,0,1])},se=function(){var e;return((e=Ne(arguments))[0]<<16)+(e[1]<<8)+e[2]},v.num=function(n){return new e(n,"num")},e.prototype.num=function(e){return null==e&&(e="rgb"),se(this._rgb,e)},i.num=T,o.push({p:1,test:function(e){if(1===arguments.length&&"number"===_e(e)&&e>=0&&e<=16777215)return"num"}}),j=function(){var e,n,r,t,f,a,u,c,o,l,i,s,b,d,h,p,g,m,y,v;if(c=(r=Ne(arguments))[0],f=r[1],n=r[2],u=u/100*255,e=255*(f/=100),0===f)s=u=t=n;else switch(360===c&&(c=0),c>360&&(c-=360),c<0&&(c+=360),c/=60,o=O(c),a=c-o,l=n*(1-f),i=l+e*(1-a),y=l+e*a,v=l+e,o){case 0:s=(b=[v,y,l])[0],u=b[1],t=b[2];break;case 1:s=(d=[i,v,l])[0],u=d[1],t=d[2];break;case 2:s=(h=[l,v,y])[0],u=h[1],t=h[2];break;case 3:s=(p=[l,i,v])[0],u=p[1],t=p[2];break;case 4:s=(g=[y,l,v])[0],u=g[1],t=g[2];break;case 5:s=(m=[v,l,i])[0],u=m[1],t=m[2]}return[s,u,t,r.length>3?r[3]:1]},te=function(){var e,n,r,t,f,a,u,c,o;return c=(o=Ne(arguments))[0],f=o[1],n=o[2],u=Math.min(c,f,n),r=100*(t=(J=Math.max(c,f,n))-u)/255,e=u/(255-t)*100,0===t?a=Number.NaN:(c===J&&(a=(f-n)/t),f===J&&(a=2+(n-c)/t),n===J&&(a=4+(c-f)/t),(a*=60)<0&&(a+=360)),[a,r,e]},v.hcg=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,Oe.call(arguments).concat(["hcg"]),function(){})},i.hcg=j,e.prototype.hcg=function(){return te(this._rgb)},N=function(e){var n,r,t,f,a,u,c,o;if(e=e.toLowerCase(),null!=v.colors&&v.colors[e])return q(v.colors[e]);if(a=e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)){for(c=a.slice(1,4),f=u=0;u<=2;f=++u)c[f]=+c[f];c[3]=1}else if(a=e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/))for(c=a.slice(1,5),f=o=0;o<=3;f=++o)c[f]=+c[f];else if(a=e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)){for(c=a.slice(1,4),f=n=0;n<=2;f=++n)c[f]=ge(2.55*c[f]);c[3]=1}else if(a=e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)){for(c=a.slice(1,5),f=r=0;r<=2;f=++r)c[f]=ge(2.55*c[f]);c[3]=+c[3]}else(a=e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/))?((t=a.slice(1,4))[1]*=.01,t[2]*=.01,(c=P(t))[3]=1):(a=e.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/))&&((t=a.slice(1,4))[1]*=.01,t[2]*=.01,(c=P(t))[3]=+a[4]);return c},re=function(e){var n;return"rgb"===(n=e[3]<1?"rgba":"rgb")?n+"("+e.slice(0,3).map(ge).join(",")+")":"rgba"===n?n+"("+e.slice(0,3).map(ge).join(",")+","+e[3]+")":void 0},pe=function(e){return ge(100*e)/100},L=function(e,n){var r;return r=n<1?"hsla":"hsl",e[0]=pe(e[0]||0),e[1]=pe(100*e[1])+"%",e[2]=pe(100*e[2])+"%","hsla"===r&&(e[3]=n),r+"("+e.join(",")+")"},i.css=function(e){return N(e)},v.css=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,Oe.call(arguments).concat(["css"]),function(){})},e.prototype.css=function(e){return null==e&&(e="rgb"),"rgb"===e.slice(0,3)?re(this._rgb):"hsl"===e.slice(0,3)?L(this.hsl(),this.alpha()):void 0},i.named=function(e){return q(Me[e])},o.push({p:5,test:function(e){if(1===arguments.length&&null!=Me[e])return"named"}}),e.prototype.name=function(e){var n,r;for(r in arguments.length&&(Me[e]&&(this._rgb=q(Me[e])),this._rgb[3]=1),n=this.hex(),Me)if(n===Me[r])return r;return n},F=function(){var e,r,t,f;return t=(f=Ne(arguments))[0],e=f[1],r=f[2],[t,_(r*=n)*e,ve(r)*e]},I=function(){var e,n,r,t,f,a,u,c,o;return u=(r=Ne(arguments))[0],f=r[1],a=r[2],e=(c=F(u,f,a))[0],n=c[1],t=c[2],[(o=V(e,n,t))[0],o[1],t=o[2],r.length>3?r[3]:1]},U=function(){var e,n,r,t,f,u;return f=(u=Ne(arguments))[0],e=u[1],n=u[2],r=we(e*e+n*n),t=(d(n,e)*a+360)%360,0===ge(1e4*r)&&(t=Number.NaN),[f,r,t]},le=function(){var e,n,r,t,f,a,u;return f=(a=Ne(arguments))[0],r=a[1],n=a[2],t=(u=oe(f,r,n))[0],e=u[1],n=u[2],U(t,e,n)},v.lch=function(){var n;return n=Ne(arguments),new e(n,"lch")},v.hcl=function(){var n;return n=Ne(arguments),new e(n,"hcl")},i.lch=I,i.hcl=function(){var e,n,r,t;return n=(t=Ne(arguments))[0],e=t[1],r=t[2],I([r,e,n])},e.prototype.lch=function(){return le(this._rgb)},e.prototype.hcl=function(){return le(this._rgb).reverse()},ne=function(e){var n,r,t,f,a,u;return null==e&&(e="rgb"),a=(u=Ne(arguments))[0],t=u[1],n=u[2],t/=255,n/=255,[(1-(a/=255)-(f=1-Math.max(a,Math.max(t,n))))*(r=f<1?1/(1-f):0),(1-t-f)*r,(1-n-f)*r,f]},k=function(){var e,n,r,t,f,a;return r=(n=Ne(arguments))[0],f=n[1],a=n[2],t=n[3],e=n.length>4?n[4]:1,1===t?[0,0,0,e]:[r>=1?0:255*(1-r)*(1-t),f>=1?0:255*(1-f)*(1-t),a>=1?0:255*(1-a)*(1-t),e]},i.cmyk=function(){return k(Ne(arguments))},v.cmyk=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,Oe.call(arguments).concat(["cmyk"]),function(){})},e.prototype.cmyk=function(){return ne(this._rgb)},i.gl=function(){var e,n,r,t,f;for(t=function(){var e,r;for(n in r=[],e=Ne(arguments))f=e[n],r.push(f);return r}.apply(this,arguments),e=r=0;r<=2;e=++r)t[e]*=255;return t},v.gl=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,Oe.call(arguments).concat(["gl"]),function(){})},e.prototype.gl=function(){var e;return[(e=this._rgb)[0]/255,e[1]/255,e[2]/255,e[3]]},ie=function(e,n,r){var t;return e=(t=Ne(arguments))[0],n=t[1],r=t[2],.2126*(e=$(e))+.7152*(n=$(n))+.0722*(r=$(r))},$=function(e){return(e/=255)<=.03928?e/12.92:ee((e+.055)/1.055,2.4)},z=function(n,r,t,f){var a,u;return a=n._rgb,u=r._rgb,new e(a[0]+t*(u[0]-a[0]),a[1]+t*(u[1]-a[1]),a[2]+t*(u[2]-a[2]),f)},s.push(["rgb",z]),e.prototype.luminance=function(e,n){var r,t,f,a,u;return null==n&&(n="rgb"),arguments.length?(a=this._rgb,0===e?a=[0,0,0,this._rgb[3]]:1===e?a=[255,255,255,this[3]]:(r=ie(this._rgb),t=1e-7,f=20,u=function(r,a){var c,o;return c=(o=r.interpolate(a,.5,n)).luminance(),Math.abs(e-c)<t||!f--?o:c>e?u(r,o):u(o,a)},a=r>e?u(v("black"),this).rgba():u(this,v("white")).rgba()),v(a).alpha(this.alpha())):ie(this._rgb)},ke=function(e){var n,r,t,f;return(f=e/100)<66?(t=255,r=-155.25485562709179-.44596950469579133*(r=f-2)+104.49216199393888*D(r),n=f<20?0:.8274096064007395*(n=f-10)-254.76935184120902+115.67994401066147*D(n)):(t=351.97690566805693+.114206453784165*(t=f-55)-40.25366309332127*D(t),r=325.4494125711974+.07943456536662342*(r=f-50)-28.0852963507957*D(r),n=255),[t,r,n]},be=function(){var e,n,r,t,f,a,u;for(t=(f=Ne(arguments))[0],f[1],e=f[2],r=1e3,n=4e4,.4;n-r>.4;)(a=ke(u=.5*(n+r)))[2]/a[0]>=e/t?n=u:r=u;return ge(u)},v.temperature=v.kelvin=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,Oe.call(arguments).concat(["temperature"]),function(){})},i.temperature=i.kelvin=i.K=ke,e.prototype.temperature=function(){return be(this._rgb)},e.prototype.kelvin=e.prototype.temperature,v.contrast=function(n,r){var t,f,a,u;return"string"!==(a=_e(n))&&"number"!==a||(n=new e(n)),"string"!==(u=_e(r))&&"number"!==u||(r=new e(r)),(t=n.luminance())>(f=r.luminance())?(t+.05)/(f+.05):(f+.05)/(t+.05)},v.distance=function(n,r,t){var f,a,u,c,o,l,i;for(a in null==t&&(t="lab"),"string"!==(o=_e(n))&&"number"!==o||(n=new e(n)),"string"!==(l=_e(r))&&"number"!==l||(r=new e(r)),u=n.get(t),c=r.get(t),i=0,u)i+=(f=(u[a]||0)-(c[a]||0))*f;return Math.sqrt(i)},v.deltaE=function(n,r,f,a){var u,c,o,l,i,s,h,p,g,m,y,v,w,k,N,M,x,A,O,j,q,G,L,P;for(null==f&&(f=1),null==a&&(a=1),"string"!==(N=_e(n))&&"number"!==N||(n=new e(n)),"string"!==(M=_e(r))&&"number"!==M||(r=new e(r)),u=(x=n.lab())[0],o=x[1],i=x[2],c=(A=r.lab())[0],l=A[1],s=A[2],h=we(o*o+i*i),p=we(l*l+s*s),j=u<16?.511:.040975*u/(1+.01765*u),O=.0638*h/(1+.0131*h)+.638,k=h<1e-6?0:180*d(i,o)/t;k<0;)k+=360;for(;k>=360;)k-=360;return q=k>=164&&k<=345?.56+b(.2*_(t*(k+168)/180)):.36+b(.4*_(t*(k+35)/180)),w=we((g=h*h*h*h)/(g+1900)),we((G=(u-c)/(f*j))*G+(L=(v=h-p)/(a*O))*L+((m=o-l)*m+(y=i-s)*y-v*v)/((P=O*(w*q+1-w))*P))},e.prototype.get=function(e){var n,r,t,f,a;return this,t=(f=e.split("."))[0],n=f[1],a=this[t](),n?(r=t.indexOf(n))>-1?a[r]:console.warn("unknown channel "+n+" in mode "+t):a},e.prototype.set=function(e,n){var r,t,f,a,u,c;if(f=this,a=(u=e.split("."))[0],r=u[1])if(c=f[a](),(t=a.indexOf(r))>-1)if("string"===_e(n))switch(n.charAt(0)){case"+":case"-":c[t]+=+n;break;case"*":c[t]*=+n.substr(1);break;case"/":c[t]/=+n.substr(1);break;default:c[t]=+n}else c[t]=n;else console.warn("unknown channel "+r+" in mode "+a);else c=n;return v(c,a).alpha(f.alpha())},e.prototype.clipped=function(){return this._rgb._clipped||!1},e.prototype.alpha=function(e){return arguments.length?v.rgb([this._rgb[0],this._rgb[1],this._rgb[2],e]):this._rgb[3]},e.prototype.darken=function(e){var n,t;return null==e&&(e=1),(n=(t=this).lab())[0]-=r.Kn*e,v.lab(n).alpha(t.alpha())},e.prototype.brighten=function(e){return null==e&&(e=1),this.darken(-e)},e.prototype.darker=e.prototype.darken,e.prototype.brighter=e.prototype.brighten,e.prototype.saturate=function(e){var n,t;return null==e&&(e=1),(n=(t=this).lch())[1]+=e*r.Kn,n[1]<0&&(n[1]=0),v.lch(n).alpha(t.alpha())},e.prototype.desaturate=function(e){return null==e&&(e=1),this.saturate(-e)},e.prototype.premultiply=function(){var e,n;return n=this.rgb(),e=this.alpha(),v(n[0]*e,n[1]*e,n[2]*e,e)},Q=function(e,n){return e*n/255},M=function(e,n){return e>n?n:e},K=function(e,n){return e>n?e:n},ye=function(e,n){return 255*(1-(1-e/255)*(1-n/255))},W=function(e,n){return n<128?2*e*n/255:255*(1-2*(1-e/255)*(1-n/255))},y=function(e,n){return 255*(1-(1-n/255)/(e/255))},x=function(e,n){return 255===e?255:(e=n/255*255/(1-e/255))>255?255:e},(p=function(e,n,r){if(!p[r])throw"unknown blend mode "+r;return p[r](e,n)}).normal=(g=function(e){return function(n,r){var t,f;return t=v(r).rgb(),f=v(n).rgb(),v(e(t,f),"rgb")}})((A=function(e){return function(n,r){var t,f,a;for(a=[],t=f=0;f<=3;t=++f)a[t]=e(n[t],r[t]);return a}})(function(e,n){return e})),p.multiply=g(A(Q)),p.screen=g(A(ye)),p.overlay=g(A(W)),p.darken=g(A(M)),p.lighten=g(A(K)),p.dodge=g(A(x)),p.burn=g(A(y)),v.blend=p,v.analyze=function(e){var n,r,t,f;for(t={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0},r=0,n=e.length;r<n;r++)null==(f=e[r])||isNaN(f)||(t.values.push(f),t.sum+=f,f<t.min&&(t.min=f),f>t.max&&(t.max=f),t.count+=1);return t.domain=[t.min,t.max],t.limits=function(e,n){return v.limits(t,e,n)},t},v.scale=function(e,n){var r,t,f,a,u,c,o,l,i,s,b,d,h,p,g,m,y,w,k,_,N;return i="rgb",s=v("#ccc"),p=0,u=[0,1],h=[],d=[0,0],r=!1,f=[],b=!1,l=0,o=1,a=!1,t={},g=!0,c=1,_=function(e){var n,r,t,a,u,c;if(null==e&&(e=["#fff","#000"]),null!=e&&"string"===_e(e)&&null!=v.brewer&&(e=v.brewer[e]||v.brewer[e.toLowerCase()]||e),"array"===_e(e)){for(n=t=0,a=(e=e.slice(0)).length-1;0<=a?t<=a:t>=a;n=0<=a?++t:--t)r=e[n],"string"===_e(r)&&(e[n]=v(r));for(h.length=0,n=c=0,u=e.length-1;0<=u?c<=u:c>=u;n=0<=u?++c:--c)h.push(n/(e.length-1))}return k(),f=e},y=function(e){var n,t;if(null!=r){for(t=r.length-1,n=0;n<t&&e>=r[n];)n++;return n-1}return 0},N=function(e){return e},w=function(e,n){var a,u,b,p,m,w,k;if(null==n&&(n=!1),isNaN(e))return s;if(n?k=e:r&&r.length>2?k=y(e)/(r.length-2):k=o!==l?(e-l)/(o-l):1,n||(k=N(k)),1!==c&&(k=ee(k,c)),k=d[0]+k*(1-d[0]-d[1]),k=Math.min(1,Math.max(0,k)),b=Math.floor(1e4*k),g&&t[b])a=t[b];else{if("array"===_e(f))for(u=p=0,w=h.length-1;0<=w?p<=w:p>=w;u=0<=w?++p:--p){if(k<=(m=h[u])){a=f[u];break}if(k>=m&&u===h.length-1){a=f[u];break}if(k>m&&k<h[u+1]){k=(k-m)/(h[u+1]-m),a=v.interpolate(f[u],f[u+1],k,i);break}}else"function"===_e(f)&&(a=f(k));g&&(t[b]=a)}return a},k=function(){return t={}},_(e),(m=function(e){var n;return n=v(w(e)),b&&n[b]?n[b]():n}).classes=function(e){var n;return null!=e?("array"===_e(e)?(r=e,u=[e[0],e[e.length-1]]):(n=v.analyze(u),r=0===e?[n.min,n.max]:v.limits(n,"e",e)),m):r},m.domain=function(e){var n,r,t,a,c,i,s;if(!arguments.length)return u;if(l=e[0],o=e[e.length-1],h=[],t=f.length,e.length===t&&l!==o)for(c=0,a=e.length;c<a;c++)r=e[c],h.push((r-l)/(o-l));else for(n=s=0,i=t-1;0<=i?s<=i:s>=i;n=0<=i?++s:--s)h.push(n/(t-1));return u=[l,o],m},m.mode=function(e){return arguments.length?(i=e,k(),m):i},m.range=function(e,n){return _(e),m},m.out=function(e){return b=e,m},m.spread=function(e){return arguments.length?(p=e,m):p},m.correctLightness=function(e){return null==e&&(e=!0),a=e,k(),N=a?function(e){var n,r,t,f,a,u,c,o,l;for(n=w(0,!0).lab()[0],r=w(1,!0).lab()[0],c=n>r,t=w(e,!0).lab()[0],f=t-(a=n+(r-n)*e),o=0,l=1,u=20;Math.abs(f)>.01&&u-- >0;)c&&(f*=-1),f<0?(o=e,e+=.5*(l-e)):(l=e,e+=.5*(o-e)),t=w(e,!0).lab()[0],f=t-a;return e}:function(e){return e},m},m.padding=function(e){return null!=e?("number"===_e(e)&&(e=[e,e]),d=e,m):d},m.colors=function(n,t){var a,c,o,l,i,s,b,d;if(arguments.length<2&&(t="hex"),i=[],0===arguments.length)i=f.slice(0);else if(1===n)i=[m(.5)];else if(n>1)c=u[0],a=u[1]-c,i=function(){s=[];for(var e=0;0<=n?e<n:e>n;0<=n?e++:e--)s.push(e);return s}.apply(this).map(function(e){return m(c+e/(n-1)*a)});else{if(e=[],b=[],r&&r.length>2)for(o=d=1,l=r.length;1<=l?d<l:d>l;o=1<=l?++d:--d)b.push(.5*(r[o-1]+r[o]));else b=u;i=b.map(function(e){return m(e)})}return v[t]&&(i=i.map(function(e){return e[t]()})),i},m.cache=function(e){return null!=e?(g=e,m):g},m.gamma=function(e){return null!=e?(c=e,m):c},m},null==v.scales&&(v.scales={}),v.scales.cool=function(){return v.scale([v.hsl(180,1,.9),v.hsl(250,.7,.4)])},v.scales.hot=function(){return v.scale(["#000","#f00","#ff0","#fff"],[0,.25,.75,1]).mode("rgb")},v.analyze=function(e,n,r){var t,f,a,u,c,o;if(c={min:Number.MAX_VALUE,max:-1*Number.MAX_VALUE,sum:0,values:[],count:0},null==r&&(r=function(){return!0}),t=function(e){null==e||isNaN(e)||(c.values.push(e),c.sum+=e,e<c.min&&(c.min=e),e>c.max&&(c.max=e),c.count+=1)},o=function(e,f){if(r(e,f))return t(null!=n&&"function"===_e(n)?n(e):null!=n&&"string"===_e(n)||"number"===_e(n)?e[n]:e)},"array"===_e(e))for(u=0,a=e.length;u<a;u++)o(e[u]);else for(f in e)o(e[f],f);return c.domain=[c.min,c.max],c.limits=function(e,n){return v.limits(c,e,n)},c},v.limits=function(e,n,r){var t,f,a,u,c,o,l,i,s,d,h,p,g,m,y,w,k,_,N,M,x,A,j,q,G,L,P,B,R,Y,E,S,X,z,U,V,C,F,I,K,Z,$,H,Q,T,W,ne,re,te,fe,ae,ue,ce,oe,le;if(null==n&&(n="equal"),null==r&&(r=7),"array"===_e(e)&&(e=v.analyze(e)),G=e.min,J=e.max,e.sum,oe=e.values.sort(function(e,n){return e-n}),1===r)return[G,J];if(j=[],"c"===n.substr(0,1)&&(j.push(G),j.push(J)),"e"===n.substr(0,1)){for(j.push(G),M=E=1,U=r-1;1<=U?E<=U:E>=U;M=1<=U?++E:--E)j.push(G+M/r*(J-G));j.push(J)}else if("l"===n.substr(0,1)){if(G<=0)throw"Logarithmic scales are only possible for values > 0";for(L=Math.LOG10E*D(G),q=Math.LOG10E*D(J),j.push(G),M=le=1,V=r-1;1<=V?le<=V:le>=V;M=1<=V?++le:--le)j.push(ee(10,L+M/r*(q-L)));j.push(J)}else if("q"===n.substr(0,1)){for(j.push(G),M=t=1,$=r-1;1<=$?t<=$:t>=$;M=1<=$?++t:--t)S=(oe.length-1)*M/r,(X=O(S))===S?j.push(oe[X]):(z=S-X,j.push(oe[X]*(1-z)+oe[X+1]*z));j.push(J)}else if("k"===n.substr(0,1)){for(B=oe.length,m=new Array(B),_=new Array(r),fe=!0,R=0,w=null,(w=[]).push(G),M=f=1,H=r-1;1<=H?f<=H:f>=H;M=1<=H?++f:--f)w.push(G+M/r*(J-G));for(w.push(J);fe;){for(x=a=0,Q=r-1;0<=Q?a<=Q:a>=Q;x=0<=Q?++a:--a)_[x]=0;for(M=u=0,T=B-1;0<=T?u<=T:u>=T;M=0<=T?++u:--u){for(ce=oe[M],P=Number.MAX_VALUE,x=c=0,W=r-1;0<=W?c<=W:c>=W;x=0<=W?++c:--c)(N=b(w[x]-ce))<P&&(P=N,y=x);_[y]++,m[M]=y}for(Y=new Array(r),x=o=0,ne=r-1;0<=ne?o<=ne:o>=ne;x=0<=ne?++o:--o)Y[x]=null;for(M=l=0,re=B-1;0<=re?l<=re:l>=re;M=0<=re?++l:--l)null===Y[k=m[M]]?Y[k]=oe[M]:Y[k]+=oe[M];for(x=i=0,te=r-1;0<=te?i<=te:i>=te;x=0<=te?++i:--i)Y[x]*=1/_[x];for(fe=!1,x=s=0,C=r-1;0<=C?s<=C:s>=C;x=0<=C?++s:--s)if(Y[x]!==w[M]){fe=!0;break}w=Y,++R>200&&(fe=!1)}for(A={},x=d=0,F=r-1;0<=F?d<=F:d>=F;x=0<=F?++d:--d)A[x]=[];for(M=h=0,I=B-1;0<=I?h<=I:h>=I;M=0<=I?++h:--h)A[k=m[M]].push(oe[M]);for(ae=[],x=p=0,K=r-1;0<=K?p<=K:p>=K;x=0<=K?++p:--p)ae.push(A[x][0]),ae.push(A[x][A[x].length-1]);for(ae=ae.sort(function(e,n){return e-n}),j.push(ae[0]),M=g=1,Z=ae.length-1;g<=Z;M=g+=2)ue=ae[M],isNaN(ue)||-1!==j.indexOf(ue)||j.push(ue)}return j},G=function(e,n,r){var t,a,c,o;return e=(t=Ne(arguments))[0],n=t[1],r=t[2],isNaN(e)&&(e=0),(e/=360)<1/3?c=1-((a=(1-n)/3)+(o=(1+n*_(u*e)/_(f-u*e))/3)):e<2/3?a=1-((o=(1-n)/3)+(c=(1+n*_(u*(e-=1/3))/_(f-u*e))/3)):o=1-((c=(1-n)/3)+(a=(1+n*_(u*(e-=2/3))/_(f-u*e))/3)),[255*(o=Z(r*o*3)),255*(c=Z(r*c*3)),255*(a=Z(r*a*3)),t.length>3?t[3]:1]},ae=function(){var e,n,r,t,f,a,c;return f=(a=Ne(arguments))[0],n=a[1],e=a[2],u=2*Math.PI,f/=255,n/=255,e/=255,0===(c=1-Math.min(f,n,e)/(t=(f+n+e)/3))?r=0:(r=(f-n+(f-e))/2,r/=Math.sqrt((f-n)*(f-n)+(f-e)*(n-e)),r=Math.acos(r),e>n&&(r=u-r),r/=u),[360*r,c,t]},v.hsi=function(){return function(e,n,r){r.prototype=e.prototype;var t=new r,f=e.apply(t,n);return Object(f)===f?f:t}(e,Oe.call(arguments).concat(["hsi"]),function(){})},i.hsi=G,e.prototype.hsi=function(){return ae(this._rgb)},Y=function(e,n,r,t){var f,a,u,c,o,l,i,s,b,d;return"hsl"===t?(b=e.hsl(),d=n.hsl()):"hsv"===t?(b=e.hsv(),d=n.hsv()):"hcg"===t?(b=e.hcg(),d=n.hcg()):"hsi"===t?(b=e.hsi(),d=n.hsi()):"lch"!==t&&"hcl"!==t||(t="hcl",b=e.hcl(),d=n.hcl()),"h"===t.substr(0,1)&&(a=b[0],i=b[1],c=b[2],u=d[0],s=d[1],o=d[2]),isNaN(a)||isNaN(u)?isNaN(a)?isNaN(u)?f=Number.NaN:(f=u,1!==c&&0!==c||"hsv"===t||(l=s)):(f=a,1!==o&&0!==o||"hsv"===t||(l=i)):f=a+r*(u>a&&u-a>180?u-(a+360):u<a&&a-u>180?u+360-a:u-a),null==l&&(l=i+r*(s-i)),v[t](f,l,c+r*(o-c))},X=function(e,n,r,t){var f,a;return f=e.num(),a=n.num(),v.num(f+(a-f)*r,"num")},(s=s.concat(function(){var e,n,r,t;for(t=[],n=0,e=(r=["hsv","hsl","hsi","hcl","lch","hcg"]).length;n<e;n++)H=r[n],t.push([H,Y]);return t}())).push(["num",X]),E=function(n,r,t,f){var a,u;return a=n.lab(),u=r.lab(),new e(a[0]+t*(u[0]-a[0]),a[1]+t*(u[1]-a[1]),a[2]+t*(u[2]-a[2]),f)},s.push(["lab",E])}).call(this);