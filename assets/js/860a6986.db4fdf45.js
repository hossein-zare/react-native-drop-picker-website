(self.webpackChunkreact_native_dropdown_picker_docs=self.webpackChunkreact_native_dropdown_picker_docs||[]).push([[5788],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8484:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"item-schema",title:"Item Schema"},c={unversionedId:"item-schema",id:"version-5.1/item-schema",isDocsHomePage:!1,title:"Item Schema",description:"Default schema",source:"@site/versioned_docs/version-5.1/item-schema.md",sourceDirName:".",slug:"/item-schema",permalink:"/react-native-dropdown-picker-website/docs/item-schema",editUrl:"https://github.com/hossein-zare/react-native-dropdown-picker-website/edit/main/versioned_docs/version-5.1/item-schema.md",version:"5.1",frontMatter:{id:"item-schema",title:"Item Schema"},sidebar:"version-5.1/someSidebar",previous:{title:"Usage",permalink:"/react-native-dropdown-picker-website/docs/usage"},next:{title:"Placeholder",permalink:"/react-native-dropdown-picker-website/docs/advanced/placeholder"}},s=[{value:"Default schema",id:"default-schema",children:[]},{value:"Customize the schema",id:"customize-the-schema",children:[]}],l={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"default-schema"},"Default schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"schema={{\n  label: 'label', // required\n  value: 'value', // required\n  icon: 'icon',\n  parent: 'parent',\n  selectable: 'selectable',\n  disabled: 'disabled'\n}}\n")),(0,o.kt)("h2",{id:"customize-the-schema"},"Customize the schema"),(0,o.kt)("p",null,"You can customize the item keys, therefore you won't need modification."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const remoteItems = [\n  {id: 1, title: 'Item 1', val: 'item-1'},\n  {id: 2, title: 'Item 2', val: 'item-2'},\n];\n\n<DropDownPicker\n  schema={{\n    label: 'title',\n    value: 'val'\n  }}\n  ...\n/>\n")))}u.isMDXComponent=!0}}]);