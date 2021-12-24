"use strict";(self.webpackChunkturkish_virtual=self.webpackChunkturkish_virtual||[]).push([[297],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),f=n,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4731:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return C},default:function(){return N},frontMatter:function(){return x},metadata:function(){return _},toc:function(){return S}});var r=a(7462),n=a(3366),i=a(7294),o=a(3905),s=a(6010),l={staffCards:"staffCards_tJ10",staffCard:"staffCard_aDBG",staffCardImage:"staffCardImage_CE82"};function u(e){return"https://community.infiniteflight.com/u/"+e}function c(e){var t=e.name,a=e.position,r=(e.started,e.bio),n=e.ifcUsername,o=e.imageSrc,c=e.avatarSize;return i.createElement("div",{className:(0,s.Z)(l.staffCard,"shadow--md")},i.createElement("div",{className:"avatar"},i.createElement("a",{className:(0,s.Z)("avatar__photo-link avatar__photo",c),href:u(n)},i.createElement("img",{alt:t,src:o})),i.createElement("div",{className:"avatar__intro"},i.createElement("div",{className:"avatar__name"},t),i.createElement("small",{className:"avatar__subtitle"},i.createElement("i",null,a),i.createElement("br",null),r))))}function m(e,t){return void 0===t&&(t="col col--4"),i.createElement("section",{className:l.partnerCards},i.createElement("div",{className:"row"},e.map((function(e){return i.createElement("div",{className:t},i.createElement(c,{name:e.name,position:e.position,started:e.started,bio:e.bio,ifcUsername:e.ifcUsername,imageSrc:e.imageSrc,avatarSize:e.avatarSize,key:e.ifcUsername}))}))))}var p="avatar__photo--xl",f={name:"Ran",position:"Chief Executive Officer",started:"Sometember 2020",bio:i.createElement(i.Fragment,null,"Ran is cool, cool, cool. Yep. Filler text."),ifcUsername:"ran",imageSrc:"/img/about-us/ran.png",avatarSize:p},d={name:"Bosnia",position:"Chief Operating Officer",started:"Sometember 2020",bio:i.createElement(i.Fragment,null,"Bosnia is cool, cool, cool. Yep. Filler text."),ifcUsername:"Cpt_Bosnia",imageSrc:"/img/about-us/ran.png",avatarSize:p},v=[f,d,f,d];function g(){return m(v,"col col--6")}var b="avatar__photo--lg",h={name:"Ran",position:"Chief Executive Officer",started:"Sometember 2020",bio:i.createElement(i.Fragment,null,"Ran is cool, cool, cool. Yep. Filler text."),ifcUsername:"ran",imageSrc:"/img/about-us/ran.png",avatarSize:b},y={name:"Bosnia",position:"Chief Operating Officer",started:"Sometember 2020",bio:i.createElement(i.Fragment,null,"Bosnia is cool, cool, cool. Yep. Filler text."),ifcUsername:"Cpt_Bosnia",imageSrc:"/img/about-us/ran.png",avatarSize:b},k=[h,y,h,y];function E(){return m(k,"col col--4")}var O=["components"],x={},C=void 0,_={type:"mdx",permalink:"/about-us",source:"@site/src/pages/about-us.mdx"},S=[{value:"Meminisse et latus",id:"meminisse-et-latus",children:[],level:2},{value:"Executive Team",id:"executive-team",children:[],level:2},{value:"Management Team",id:"management-team",children:[],level:2}],w={toc:S};function N(e){var t=e.components,a=(0,n.Z)(e,O);return(0,o.kt)("wrapper",(0,r.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"hero shadow--lw"},(0,o.kt)("div",{class:"container"},(0,o.kt)("h1",{class:"hero__title"},"About us"),(0,o.kt)("p",{class:"hero__subtitle"},"Flying or somethin"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"meminisse-et-latus"},"Meminisse et latus"),(0,o.kt)("p",null,"Rubra asperitas solisque: retro aras virgine rore. Ecce sic ubi Autonoeius\noculos obortas di ludit portant: unda sol iaces, sine quid, ovis. Adulterium\npatitur dolor vidit crede Iovis nutricis in omnes puer molitur auroque, plurima\noscula, sinit mihi est! ",(0,o.kt)("em",{parentName:"p"},"Velocior ferus rapax")," loqui pressa: ira uno ferox ",(0,o.kt)("strong",{parentName:"p"},"ut\nquoque arida")," incustoditae, herbas, sive! Eas ministri Iovis contegat sanguine\narbor profectura sed artus dissuaserat cederet sit aut, omnes, erit."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Persea manifesta accipe"),(0,o.kt)("li",{parentName:"ul"},"Tamen diligitur haustus suaque"),(0,o.kt)("li",{parentName:"ul"},"Cum curru")),(0,o.kt)("p",null,"Rapi lingua! Deam viam spectari, et nymphae, tantoque meo nati respice caeli\npraestans effuge; munera flamma."),(0,o.kt)("p",null,"Reducto dum tauri proelia utinam gemebundus pietas iaculo, imitetur oneri\npopulis. Procnen diversa urbibus solque frater! Undae nocens aures, nostri ictae\ngravitate flammae exierant\n",(0,o.kt)("a",{parentName:"p",href:"http://suis-fugientibus.net/interdumimoque"},"moribundum")," terras ",(0,o.kt)("strong",{parentName:"p"},"tacta"),",\nleonis vulnere."),(0,o.kt)("h2",{id:"executive-team"},"Executive Team"),(0,o.kt)("p",null,"Cool peeps"),(0,o.kt)(g,{mdxType:"ExecutiveTeamCards"}),(0,o.kt)("h2",{id:"management-team"},"Management Team"),(0,o.kt)("p",null,"Also cool peeps"),(0,o.kt)(E,{mdxType:"ManagementTeamCards"}))}N.isMDXComponent=!0}}]);