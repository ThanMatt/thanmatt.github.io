(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(16);var n=a(0),r=a.n(n),A=a(193),i=a(203),o=a(199),c=a(197),l=a(195),s=a(200);var m=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,m=a.next;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement(o.a,{location:this.props.location,title:t},r.a.createElement(c.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),r.a.createElement("h1",{style:{marginTop:Object(l.a)(1),marginBottom:0}},e.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(l.b)(-.2),{display:"block",marginBottom:Object(l.a)(1)})},e.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),r.a.createElement("hr",{style:{marginBottom:Object(l.a)(1)}}),r.a.createElement(i.a,null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,n&&r.a.createElement(A.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.a.createElement("li",null,m&&r.a.createElement(A.a,{to:m.fields.slug,rel:"next"},m.frontmatter.title," →")))))},n}(r.a.Component);t.default=m;var p="2761936148"},193:function(e,t,a){"use strict";var n=a(0),r=a.n(n),A=a(58),i=a.n(A);a.d(t,"a",function(){return i.a});a(194),a(7),r.a.createContext({})},194:function(e,t,a){var n;e.exports=(n=a(196))&&n.default||n},195:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var n=a(206),r=a.n(n),A=a(207),i=a.n(A);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var o=new r.a(i.a);var c=o.rhythm,l=o.scale},196:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),A=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(A.a,Object.assign({location:t,pageResources:a},a.json)):null}},197:function(e,t,a){"use strict";var n=a(198),r=a(0),A=a.n(r),i=a(201),o=a.n(i);function c(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,l=t||c.siteMetadata.description;return A.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},198:function(e){e.exports={data:{site:{siteMetadata:{title:"ThanMatt",description:"Just my blog",author:"Aethan Matthew"}}}}},199:function(e,t,a){"use strict";a(16);var n=a(0),r=a.n(n),A=a(193),i=a(195);var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,o=t.children;return e="/"!==a.pathname?r.a.createElement("h1",{style:Object.assign({},Object(i.b)(.5),{marginBottom:Object(i.a)(1.5),marginTop:0})},r.a.createElement(A.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/blog"},n)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(A.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(24),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},r.a.createElement("header",{className:"animated fadeIn faster"},e),r.a.createElement("main",{className:"animated fadeIn faster"},o))},n}(r.a.Component);t.a=o},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),A=a(202),i=a.n(A),o=a(193);a(182),a(183);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("label",{className:"title navbar-item has-text-weight-light"},"ThanMatt"))),r.a.createElement(i.a,null,r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(o.a,{to:"/",activeStyle:{color:"blue"},className:"navbar-item is-right has-text-weight-light"},"Home"),r.a.createElement(o.a,{to:"/blog",activeStyle:{color:"blue"},className:"navbar-item is-right has-text-weight-light"},"Blog"),r.a.createElement("a",{className:"navbar-item is-right has-text-weight-light"},"Photos"),r.a.createElement("a",{className:"navbar-item is-right has-text-weight-light"},"Archive")))))}},203:function(e,t,a){"use strict";a(204);var n=a(205),r=a(0),A=a.n(r),i=a(213),o=a.n(i),c=a(195);t.a=function(){var e=n.data,t=e.site.siteMetadata,a=t.author;t.social;return A.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},A.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),A.a.createElement("p",null,"Written by ",A.a.createElement("strong",null,a)," who lives in the Philippines."," ",A.a.createElement("div",null,A.a.createElement("span",{className:"icon is-large"},A.a.createElement("a",{href:"https://www.instagram.com/8tanilagan",title:"Instagram",className:"button is-white hvr-grow",target:"_blank",rel:"noopener noreferrer"},A.a.createElement("i",{className:"fab fa-instagram fa-2x"}))),A.a.createElement("span",{className:"icon is-large"},A.a.createElement("a",{href:"https://github.com/ThanMatt",className:"button is-white hvr-grow",title:"Github",target:"_blank",rel:"noopener noreferrer"},A.a.createElement("i",{className:"fab fa-github fa-2x"}))))))}},205:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMFBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABhzbsA81dHf5xUBZ//8QAHxAAAgAFBQAAAAAAAAAAAAAAAgMAAQQSExARISIy/9oACAEBAAEFAnXkVjFaEvcSXknimMHLpTeajhn/xAAWEQEBAQAAAAAAAAAAAAAAAAAQQRH/2gAIAQMBAT8BmkP/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAgEBPwEp/8QAHxAAAgECBwAAAAAAAAAAAAAAAAERAiIQITFRUmGB/9oACAEBAAY/AlRQ2XaThx7RbU/SGyCTLY//xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMUFRYf/aAAgBAQABPyG6IK2S4O2jAxqEdrSFoteuMd4pzAvoeQZJVe55F2n/2gAMAwEAAgADAAAAEEP/AEH/xAAYEQEBAAMAAAAAAAAAAAAAAAABABARMf/aAAgBAwEBPxABjcdY/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhEP/aAAgBAgEBPxCqYwz/xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhMUFRccHR/9oACAEBAAE/EE49GZHWr2H7g7tTdQzkMWscTTlYRvjFBfHcBO55xkJzgOSbgA4TJqH2+2NOtBe6nzP/2Q==",width:50,height:50,src:"/static/c9cce62e2b5d88f068aa9eb7af33d499/9b664/profile-pic.jpg",srcSet:"/static/c9cce62e2b5d88f068aa9eb7af33d499/9b664/profile-pic.jpg 1x,\n/static/c9cce62e2b5d88f068aa9eb7af33d499/06a10/profile-pic.jpg 1.5x,\n/static/c9cce62e2b5d88f068aa9eb7af33d499/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Aethan Matthew",social:{twitter:"kylemathews"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ae456a407b26393ec7de.js.map