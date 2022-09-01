(()=>{var e,t={412:(e,t,r)=>{"use strict";const o=window.wp.element,n=window.wp.primitives,l=(0,o.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(n.Path,{d:"M3 18h8V6H3v12zM14 7.5V9h7V7.5h-7zm0 5.3h7v-1.5h-7v1.5zm0 3.7h7V15h-7v1.5z"})),i=window.wp.blocks;var a=r(184),s=r.n(a);const c=window.wp.i18n,v=(0,o.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(n.Path,{d:"M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"})),p=(0,o.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(n.Path,{d:"M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"})),d=window.wp.components,h=window.wp.blockEditor,m=["everstox/column"],u=[["everstox/column",{},[["core/heading",{level:4,placeholder:"Type here.."}],["core/paragraph",{placeholder:"Type here..."}]]],["everstox/column",{},[["core/image"]]]],w=JSON.parse('{"u2":"everstox/text-media"}');(0,i.registerBlockType)(w.u2,{icon:l,edit:function(e){let{attributes:t,setAttributes:r}=e;const{verticalAlignment:n,mediaLeftSide:l,reverseOnDesktop:i}=t,a=[{icon:v,title:(0,c.__)("Media col position","everstox"),isActive:!1===l,onClick:()=>r({mediaLeftSide:!1})},{icon:p,title:(0,c.__)("Media col position","everstox"),isActive:!0===l,onClick:()=>r({mediaLeftSide:!0})}],w=s()({[`is-vertically-aligned-${n}`]:n,"has-col-reversed":l,"is-large-view-reversed":i}),f=(0,h.useBlockProps)({className:w});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(h.InspectorControls,null,(0,o.createElement)(d.PanelBody,{title:(0,c.__)("Ordering","everstox")},(0,o.createElement)(d.PanelRow,null,(0,o.createElement)(d.ToggleControl,{label:(0,c.__)("Media swap on desktop","everstox"),help:i?"Yes":"No",checked:i,onChange:()=>r({reverseOnDesktop:!i})})))),(0,o.createElement)(h.BlockControls,null,(0,o.createElement)(d.Toolbar,{controls:a}),(0,o.createElement)(h.BlockVerticalAlignmentControl,{onChange:e=>r({verticalAlignment:e}),value:n})),(0,o.createElement)("div",f,(0,o.createElement)(h.InnerBlocks,{allowedBlocks:m,template:u})))},save:function(e){let{attributes:t}=e;const{verticalAlignment:r,mediaLeftSide:n,reverseOnDesktop:l}=t,i=s()({[`is-vertically-aligned-${r}`]:r,"has-col-reversed":n,"is-large-view-reversed":l}),a=h.useBlockProps.save({className:i});return(0,o.createElement)("div",a,(0,o.createElement)(h.InnerBlocks.Content,null))}})},184:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var a in r)o.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,r,n,l)=>{if(!r){var i=1/0;for(v=0;v<e.length;v++){r=e[v][0],n=e[v][1],l=e[v][2];for(var a=!0,s=0;s<r.length;s++)(!1&l||i>=l)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(a=!1,l<i&&(i=l));if(a){e.splice(v--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var v=e.length;v>0&&e[v-1][2]>l;v--)e[v]=e[v-1];e[v]=[r,n,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={481:0,358:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,i=r[0],a=r[1],s=r[2],c=0;if(i.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(s)var v=s(o)}for(t&&t(r);c<i.length;c++)l=i[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(v)},r=self.webpackChunkeverstox_blocks=self.webpackChunkeverstox_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[358],(()=>o(412)));n=o.O(n)})();