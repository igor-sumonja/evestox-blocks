(()=>{var e,t={618:(e,t,n)=>{"use strict";const r=window.wp.element,l=window.wp.primitives,o=(0,r.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(l.Path,{d:"M3 18h8V6H3v12zM14 7.5V9h7V7.5h-7zm0 5.3h7v-1.5h-7v1.5zm0 3.7h7V15h-7v1.5z"})),s=window.wp.blocks,a=window.lodash;var c=n.n(a),i=n(184),u=n.n(i);const v=window.wp.i18n,p=window.wp.components,m=window.wp.blockEditor,{times:d}=c(),{createBlock:h}=wp.blocks,{useSelect:f,useDispatch:g}=wp.data,w=["everstox/column"],k=[["everstox/column"],["everstox/column"]],b=JSON.parse('{"u2":"everstox/columns"}');(0,s.registerBlockType)(b.u2,{icon:o,edit:function(e){let{attributes:t,setAttributes:n,clientId:l}=e;const o=f((e=>e("core/block-editor").getBlock(l).innerBlocks)),{replaceInnerBlocks:s}=g("core/block-editor"),{verticalAlignment:a,columns:c}=t,i=u()({[`is-vertically-aligned-${a}`]:a,[`has-${c}-columns`]:c}),b=(0,m.useBlockProps)({className:i});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(m.InspectorControls,null,(0,r.createElement)(p.PanelBody,{title:(0,v.__)("Column settings","everstox")},(0,r.createElement)(p.PanelRow,null,(0,r.createElement)(p.RangeControl,{label:"Columns",value:o.length,min:2,max:3,onChange:e=>{let t=o;o.length<e?t=[...t,...d(e-o.length,(()=>h("everstox/column")))]:o.length>e&&(t=t.slice(0,e)),s(l,t,!1)}})))),(0,r.createElement)(m.BlockControls,null,(0,r.createElement)(m.BlockVerticalAlignmentControl,{onChange:e=>n({verticalAlignment:e}),value:a})),(0,r.createElement)("div",b,(0,r.createElement)(m.InnerBlocks,{allowedBlocks:w,template:k,renderAppender:()=>(console.log(o.length),o.length<3?(0,r.createElement)(m.InnerBlocks.DefaultBlockAppender,null):null)})))},save:function(e){let{attributes:t}=e;const{verticalAlignment:n,mediaLeftSide:l,reverseOnDesktop:o}=t,s=u()({[`is-vertically-aligned-${n}`]:n,"has-col-reversed":l,"is-large-view-reversed":o}),a=m.useBlockProps.save({className:s});return(0,r.createElement)("div",a,(0,r.createElement)(m.InnerBlocks.Content,null))}})},184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=l.apply(null,n);s&&e.push(s)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,l,o)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],o=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(u--,1);var i=l();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,l,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={454:0,829:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var l,o,s=n[0],a=n[1],c=n[2],i=0;if(s.some((t=>0!==e[t]))){for(l in a)r.o(a,l)&&(r.m[l]=a[l]);if(c)var u=c(r)}for(t&&t(n);i<s.length;i++)o=s[i],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self.webpackChunkeverstox_blocks=self.webpackChunkeverstox_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=r.O(void 0,[829],(()=>r(618)));l=r.O(l)})();