(()=>{"use strict";var e,t={86:()=>{const e=window.wp.blocks,t=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor),o=window.wp.components,a=window.wp.data,l=[["core/paragraph"]],n=JSON.parse('{"u2":"everstox/tab"}');(0,e.registerBlockType)(n.u2,{edit:function(e){const{attributes:{tabLabel:n,blockIndex:c},setAttributes:s}=e,i=wp.data.select("core/block-editor").getBlockParentsByBlockName(e.clientId,["everstox/tabs"]);let d=c;const p=wp.data.select("core/block-editor").getBlockOrder(i).indexOf(e.clientId),b=(0,a.subscribe)((()=>{let t=wp.data.select("core/block-editor").getBlockOrder(i).indexOf(e.clientId);t!==d&&(b(),s({blockIndex:t}),wp.data.dispatch("core/block-editor").updateBlockAttributes(i,{updateChild:!0}))})),u=(0,r.useBlockProps)();return(0,t.createElement)("div",u,(0,t.createElement)("h4",null,"Tab Label"),(0,t.createElement)(o.TextControl,{className:"tab-label_input",value:n,onChange:e=>{s({tabLabel:e}),s({blockIndex:p}),wp.data.dispatch("core/block-editor").updateBlockAttributes(i,{updateChild:!0})},placeholder:"Add Tab Label",type:"text"}),(0,t.createElement)("h4",null,"Tab Content"),(0,t.createElement)(r.InnerBlocks,{template:l}))},save:function(){const e=r.useBlockProps.save({className:"tab-panel",role:"tabpanel",tabIndex:0});return(0,t.createElement)("div",e,(0,t.createElement)(r.InnerBlocks.Content,null))}})}},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,r,a,l)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],l=e[d][2];for(var c=!0,s=0;s<r.length;s++)(!1&l||n>=l)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(c=!1,l<n&&(n=l));if(c){e.splice(d--,1);var i=a();void 0!==i&&(t=i)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[r,a,l]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={767:0,163:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var a,l,n=r[0],c=r[1],s=r[2],i=0;if(n.some((t=>0!==e[t]))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(s)var d=s(o)}for(t&&t(r);i<n.length;i++)l=n[i],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(d)},r=self.webpackChunkeverstox_blocks=self.webpackChunkeverstox_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=o.O(void 0,[163],(()=>o(86)));a=o.O(a)})();