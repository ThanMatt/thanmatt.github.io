(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{195:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=(a(194),function(t){var e="https://instagram.com/p/"+t.photo.id;return r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"card",id:"ig-card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:t.photo.original,id:"img",alt:t.photo.caption})),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-5"},t.photo.caption?t.photo.caption:"Untitled"),r.a.createElement("p",{className:"subtitle is-6"},"@",t.photo.username))))))))}),o=a(204),c=a(203),s=a(200);a.d(e,"photosQuery",function(){return m});var l=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.blogTitle,a=t.allInstaNode.edges;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(c.a,{location:this.props.location,title:e},r.a.createElement(s.a,{title:"Photos",description:"Thanmatt's instagram photos!"}),r.a.createElement("div",{className:"columns is-centered is-multiline"},a.map(function(t,e){var a=t.node;return r.a.createElement("div",{className:"column is-6",key:e},r.a.createElement(i,{photo:a}))}))))},n}(r.a.Component),m=(e.default=l,"4173583786")},197:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return l});var n=a(211),r=a.n(n),i=a(212),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var s=c.rhythm,l=c.scale},198:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(58),o=a.n(i);a.d(e,"a",function(){return o.a});a(199),a(7),r.a.createContext({})},199:function(t,e,a){var n;t.exports=(n=a(202))&&n.default||n},200:function(t,e,a){"use strict";var n=a(201),r=a(0),i=a.n(r),o=a(209),c=a.n(o);function s(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,s=n.data.site,l=e||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"google-site-verification",content:"FGf45Wkc5SHRLq5Kd-xMAspCKAMrhpIa2LwRb-d1mTo"},{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},e.a=s},201:function(t){t.exports={data:{site:{siteMetadata:{title:"Aethan Ilagan",description:"Welcome to my website!",author:"Aethan Ilagan"}}}}},202:function(t,e,a){"use strict";a.r(e);a(17);var n=a(0),r=a.n(n),i=a(84);e.default=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null}},203:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(197);var o=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props.children;return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(24),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},r.a.createElement("main",{className:"animated fadeIn faster"},t))},n}(r.a.Component);e.a=o},204:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(198),o=a(213),c=a.n(o),s=a(214);a(182),a(183);e.a=function(){var t=Object(s.a)(c.a).withConfig({displayName:"NavBar__StyledScrollTop",componentId:"bl7r5v-0"})(["border-color:#707070;border-radius:15px;border-width:1px;:hover{background:#dbdbdb;color:black;transition:0.1s;}"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(t,{distance:500,className:"has-text-weight-light is-5 animated slideInUp faster"}),r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("label",{className:"title navbar-item has-text-weight-light"},"AethanIlagan"))),r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(i.a,{to:"/",activeStyle:{color:"blue"},className:"subtitle navbar-item is-right has-text-weight-light"},"Home"),r.a.createElement(i.a,{to:"/blog",activeStyle:{color:"blue"},partiallyActive:!0,className:"subtitle navbar-item is-right has-text-weight-light"},"Blog"),r.a.createElement(i.a,{to:"/photos",activeStyle:{color:"blue"},className:"subtitle navbar-item is-right has-text-weight-light"},"Photos"))))}}}]);
//# sourceMappingURL=component---src-pages-photos-js-138ba5e2388bbc943b44.js.map