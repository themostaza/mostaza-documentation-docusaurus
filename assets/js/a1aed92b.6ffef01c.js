"use strict";(self.webpackChunkmostaza_documentation=self.webpackChunkmostaza_documentation||[]).push([[1418],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return m}});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=a.createContext({}),c=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},l=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,i=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(g,s(s({ref:e},l),{},{components:r})):a.createElement(g,s({ref:e},l))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,s=new Array(n);s[0]=d;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:o,s[1]=u;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},238:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),s=["components"],u={sidebar_position:3},i="Create a Blog Post",c={unversionedId:"docusaurus-tutorial/tutorial-basics/create-a-blog-post",id:"docusaurus-tutorial/tutorial-basics/create-a-blog-post",title:"Create a Blog Post",description:"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...",source:"@site/docs/docusaurus-tutorial/tutorial-basics/create-a-blog-post.md",sourceDirName:"docusaurus-tutorial/tutorial-basics",slug:"/docusaurus-tutorial/tutorial-basics/create-a-blog-post",permalink:"/mostaza-documentation-docusaurus/docs/docusaurus-tutorial/tutorial-basics/create-a-blog-post",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docusaurus-tutorial/tutorial-basics/create-a-blog-post.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Create a Document",permalink:"/mostaza-documentation-docusaurus/docs/docusaurus-tutorial/tutorial-basics/create-a-document"},next:{title:"Markdown Features",permalink:"/mostaza-documentation-docusaurus/docs/docusaurus-tutorial/tutorial-basics/markdown-features"}},l={},p=[{value:"Create your first Post",id:"create-your-first-post",level:2}],d={toc:p};function m(t){var e=t.components,r=(0,o.Z)(t,s);return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-blog-post"},"Create a Blog Post"),(0,n.kt)("p",null,"Docusaurus creates a ",(0,n.kt)("strong",{parentName:"p"},"page for each blog post"),", but also a ",(0,n.kt)("strong",{parentName:"p"},"blog index page"),", a ",(0,n.kt)("strong",{parentName:"p"},"tag system"),", an ",(0,n.kt)("strong",{parentName:"p"},"RSS")," feed..."),(0,n.kt)("h2",{id:"create-your-first-post"},"Create your first Post"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\nslug: greetings\ntitle: Greetings!\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),(0,n.kt)("p",null,"A new blog post is now available at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/blog/greetings"),"."))}m.isMDXComponent=!0}}]);