"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[7153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,g=p["".concat(d,".").concat(c)]||p[c]||m[c]||l;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},i="Changelog - Finally Catching Up",o={permalink:"/blog/2023/11/22/changelog",editUrl:"https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/tree/main/blog/2023-11-22-changelog.md",source:"@site/blog/2023-11-22-changelog.md",title:"Changelog - Finally Catching Up",description:"General",date:"2023-11-22T00:00:00.000Z",formattedDate:"November 22, 2023",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"changelog",permalink:"/blog/2024/1/13/changelog"},nextItem:{title:"Changelog - July 2023",permalink:"/blog/2023/07/01/changelog"}},d={authorsImageUrls:[]},u=[{value:"General",id:"general",level:3},{value:"User Interface &amp; HUD",id:"user-interface--hud",level:3},{value:"Gameplay",id:"gameplay",level:3},{value:"Content",id:"content",level:3},{value:"Overhauls",id:"overhauls",level:3},{value:"Visuals",id:"visuals",level:3}],s={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"general"},"General"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated loadorder.txt"),(0,r.kt)("li",{parentName:"ul"},"Made the page pink"),(0,r.kt)("li",{parentName:"ul"},"Re-did footer"),(0,r.kt)("li",{parentName:"ul"},"Redirected a majority of the appendix pages to ModdingLinked's variants of those pages"),(0,r.kt)("li",{parentName:"ul"},"Fixed many broken links"),(0,r.kt)("li",{parentName:"ul"},"Updated links across the whole guide"),(0,r.kt)("li",{parentName:"ul"},"Fixed a lot of wording across the whole guide"),(0,r.kt)("li",{parentName:"ul"},"Upheld consistency across the whole guide"),(0,r.kt)("li",{parentName:"ul"},"Fixed English across the whole guide"),(0,r.kt)("li",{parentName:"ul"},"Reorganized almost every page of the guide"),(0,r.kt)("li",{parentName:"ul"},"Updated the contributors page"),(0,r.kt)("li",{parentName:"ul"},"Updated the sidebars to reflect guide changes"),(0,r.kt)("li",{parentName:"ul"},"Removed unused pages"),(0,r.kt)("li",{parentName:"ul"},"Updated FAQ to mirror ModdingLinked's information about the same things"),(0,r.kt)("li",{parentName:"ul"},"Updated pre-order pack placement information"),(0,r.kt)("li",{parentName:"ul"},"Changed images to .webp format"),(0,r.kt)("li",{parentName:"ul"},"Removed DarnUI support")),(0,r.kt)("h3",{id:"user-interface--hud"},"User Interface & HUD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed all of v5 CPI, added a note as to why."),(0,r.kt)("li",{parentName:"ul"},"Added Colorful Inventory Ycons"),(0,r.kt)("li",{parentName:"ul"},"Removed Vault Door Loading Wheel"),(0,r.kt)("li",{parentName:"ul"},"Removed AidUI, feature creep.")),(0,r.kt)("h3",{id:"gameplay"},"Gameplay"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added Clean JAM"),(0,r.kt)("li",{parentName:"ul"},"Removed S6S Perks, performance issues as said by Sweet herself."),(0,r.kt)("li",{parentName:"ul"},"Added notice about MOD:PUB"),(0,r.kt)("li",{parentName:"ul"},"Added Delay DLC Redux's Pre-Order Pack Placement as a replacement for SawyerBatty's similar feature.")),(0,r.kt)("h3",{id:"content"},"Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added MMTV's Mobile Truck Base Sorting Add On"),(0,r.kt)("li",{parentName:"ul"},"Added RTC's A Trail of Crumbs Patch"),(0,r.kt)("li",{parentName:"ul"},"Removed Washington's Malevolence"),(0,r.kt)("li",{parentName:"ul"},"Added Dynamic Weapon Displays and MMTV Sink Redux Patch")),(0,r.kt)("h3",{id:"overhauls"},"Overhauls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed SawyerBatty, and all mention of it within the guide. SawyerBatty was replaced by New Blood, Aid Addon and Sweets Consumables for a more consistent and complete overhaul of the games difficulty."),(0,r.kt)("li",{parentName:"ul"},"Removed Cyberware 2281. Cyberware 2281 was removed because of my intent to include EDGE (which I haven't got around to fully patching yet) in the guide. Cyberware 2281 is still fine for use, the mod isn't broken or anything. Just not particularly compatible with EDGE's changing of the implant system."),(0,r.kt)("li",{parentName:"ul"},"Removed CyberJAM"),(0,r.kt)("li",{parentName:"ul"},"Removed Save Restrictions, feature creep."),(0,r.kt)("li",{parentName:"ul"},"Added JIP Localized Damage Fix"),(0,r.kt)("li",{parentName:"ul"},"Removed Three Perk Bounty, some UI glitches I noticed in testing, and saw some stuff about incompatibility with added perks."),(0,r.kt)("li",{parentName:"ul"},"Added New Blood"),(0,r.kt)("li",{parentName:"ul"},"Added Aid Addon"),(0,r.kt)("li",{parentName:"ul"},"Added Sweet Consumables")),(0,r.kt)("h3",{id:"visuals"},"Visuals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed wording of the notice about Salamand3r's texture guide"),(0,r.kt)("li",{parentName:"ul"},"Removed Anniversary Anim General Bugfix, integrated into Anniversary Anim Pack proper.")))}m.isMDXComponent=!0}}]);