"use strict";(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[8923],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,g=m["".concat(i,".").concat(u)]||m[u]||s[u]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},643:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],d={id:"modes",title:"Modes"},i=void 0,p={unversionedId:"advanced/modes",id:"advanced/modes",title:"Modes",description:"Modes display selected items.",source:"@site/docs/advanced/modes.md",sourceDirName:"advanced",slug:"/advanced/modes",permalink:"/react-native-dropdown-picker-website/docs/next/advanced/modes",editUrl:"https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/advanced/modes.md",tags:[],version:"current",frontMatter:{id:"modes",title:"Modes"},sidebar:"someSidebar",previous:{title:"Category",permalink:"/react-native-dropdown-picker-website/docs/next/advanced/category"},next:{title:"Dropdown Box",permalink:"/react-native-dropdown-picker-website/docs/next/advanced/dropdown-box"}},c=[{value:"Change the default mode",id:"change-the-default-mode",children:[],level:2},{value:"Badge Mode Props",id:"badge-mode-props",children:[{value:"<code>showBadgeDot</code>",id:"showbadgedot",children:[],level:3},{value:"<code>renderBadgeItem</code>",id:"renderbadgeitem",children:[],level:3}],level:2},{value:"Styling",id:"styling",children:[{value:"<code>badgeStyle</code>",id:"badgestyle",children:[],level:3},{value:"<code>badgeTextStyle</code>",id:"badgetextstyle",children:[],level:3},{value:"<code>badgeDotStyle</code>",id:"badgedotstyle",children:[],level:3},{value:"<code>badgeSeparatorStyle</code>",id:"badgeseparatorstyle",children:[],level:3},{value:"<code>badgeColors</code>",id:"badgecolors",children:[],level:3},{value:"<code>badgeDotColors</code>",id:"badgedotcolors",children:[],level:3}],level:2}],s={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Modes display selected items."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DEFAULT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SIMPLE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BADGE"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'mode="SIMPLE"\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SIMPLE"))))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Single item pickers won't be affected by the ",(0,l.kt)("inlineCode",{parentName:"p"},"mode")," property."))),(0,l.kt)("h2",{id:"change-the-default-mode"},"Change the default mode"),(0,l.kt)("p",null,"You can change the default mode of the package globally."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'DropDownPicker.setMode("BADGE");\n')),(0,l.kt)("h2",{id:"badge-mode-props"},"Badge Mode Props"),(0,l.kt)("h3",{id:"showbadgedot"},(0,l.kt)("inlineCode",{parentName:"h3"},"showBadgeDot")),(0,l.kt)("p",null,"Shows dots in the badges."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"showBadgeDot={true}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h3",{id:"renderbadgeitem"},(0,l.kt)("inlineCode",{parentName:"h3"},"renderBadgeItem")),(0,l.kt)("p",null,"Renders the selected items."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"renderBadgeItem={(props) => <Badge {...props} />}\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You need to move it to an independent component otherwise the items will be re-rendered."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"See: ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/hossein-zare/react-native-dropdown-picker/blob/5.x/src/components/RenderBadgeItem.js"},"RenderBadgeItem.js")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"function")))),(0,l.kt)("h2",{id:"styling"},"Styling"),(0,l.kt)("h3",{id:"badgestyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"badgeStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"badgeStyle={{\n  padding: 5\n}}\n")),(0,l.kt)("h3",{id:"badgetextstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"badgeTextStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'badgeTextStyle={{\n  fontStyle: "italic"\n}}\n')),(0,l.kt)("h3",{id:"badgedotstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"badgeDotStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"badgeDotStyle={{\n  borderRadius: 2\n}}\n")),(0,l.kt)("h3",{id:"badgeseparatorstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"badgeSeparatorStyle")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"badgeSeparatorStyle={{\n  width: 30\n}}\n")),(0,l.kt)("h3",{id:"badgecolors"},(0,l.kt)("inlineCode",{parentName:"h3"},"badgeColors")),(0,l.kt)("p",null,"Gives background colors to badges based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'badgeColors={["red", "blue", "orange"]}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object, string")))),(0,l.kt)("h3",{id:"badgedotcolors"},(0,l.kt)("inlineCode",{parentName:"h3"},"badgeDotColors")),(0,l.kt)("p",null,"Gives background colors to badge dots based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'badgeDotColors={["red", "blue", "orange"]}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object, string")))))}m.isMDXComponent=!0}}]);