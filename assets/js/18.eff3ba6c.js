(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{504:function(e,t,r){"use strict";r.r(t);var v=r(4),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"一次请求过程中nuxt的生命周期顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一次请求过程中nuxt的生命周期顺序"}},[e._v("#")]),e._v(" 一次请求过程中nuxt的生命周期顺序")]),e._v(" "),r("blockquote",[r("p",[e._v("为什么要写这个wiki"),r("br"),e._v("\n由于项目的客户是一个面向消费者的网站，所以技术选型上我们采用了VUE的SSR框架 NUXT来进行服务端渲染（方便SEO）。"),r("br"),e._v("\n但是服务端渲染和单纯的客户端渲染SPA的前端应用不太一样，涉及到服务端的生命周期，鉴权机制需要做一定的特殊处理。"),r("br"),e._v(" "),r("em",[e._v("我遇到的问题")]),r("br"),e._v("\n页面刷新后，vue生命周期执行时，无论是cookies里还是Vuex的store里，都会读取不到token，导致页面会被重定向到login页面（"),r("strong",[e._v("./middleware/authorities.js中的鉴权逻辑")]),e._v("）,为了解决刷新后状态丢失的问题，我经过调查后，觉得问题的关键在于服务端鉴权之前，找到方法把cookie读取到，重新放入客户端的vuex和cookies中，为后续的鉴权判断和页面逻辑准备好数据。"),r("br"),e._v("\n经过调查，决定在store的nuxtServerInit方法中进行token的获取和放置是比较合适的解决方案")])]),e._v(" "),r("h3",{attrs:{id:"服务端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[e._v("#")]),e._v(" 服务端")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/6856648700081799182",target:"_blank",rel:"noopener noreferrer"}},[e._v("NUXT生命周期"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("1.首先执行自定义插件【./plugins/】(所有在nuxt.config.js中写入的可以在服务端运行插件，不管是否在当前页面)")]),e._v(" "),r("p",[e._v("2.执行nuxtServerInit"),r("code",[e._v("在这个方法中进行cookie读取，和赋值给store的操作")])]),e._v(" "),r("p",[e._v("3.执行middleware"),r("code",[e._v("在这个方法中进行鉴权的操作")]),e._v("：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("a. middleware会先后执行nuxt.config.js中配置的middleware；")])]),e._v(" "),r("li",[r("p",[e._v("b. layouts中配置的middleware；")])]),e._v(" "),r("li",[r("p",[e._v("c. pages中的middleware。")])])]),e._v(" "),r("p",[e._v("4.执行validate方法，校验页面参数是否正确")]),e._v(" "),r("p",[e._v("5.执行页面中的asyncData以及fetch方法")]),e._v(" "),r("p",[e._v("6.真正进入vue的生命周期中，按先后顺序,beforecreated,created")]),e._v(" "),r("h3",{attrs:{id:"客户端（浏览器端）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#客户端（浏览器端）"}},[e._v("#")]),e._v(" 客户端（浏览器端）")]),e._v(" "),r("p",[e._v("7.执行插件(所有在nuxt.config.js中写入可以在浏览器端执行的插件)")]),e._v(" "),r("p",[e._v("8.进入vue的生命周期中，再在浏览器端运行beforecreated和created一遍。")]),e._v(" "),r("p",[e._v("附：")]),e._v(" "),r("blockquote",[r("p",[e._v("1.plugin和nuxtServerInit仅在首次刷新页面时会执行，后续点击页面内跳转不会再执行plugin和nuxtServerInit中的方法。如果打开新页面会再次触发plugin和nuxtServerInit方法。")])]),e._v(" "),r("h4",{attrs:{id:"理解："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#理解："}},[e._v("#")]),e._v(" 理解：")]),e._v(" "),r("p",[e._v("1.插件会在所有模块运行之前运行，而且每次请求都会运行，所以如果项目较大，访问量大的情况下，仅将必要的方法写到插件中，优化性能。")]),e._v(" "),r("p",[e._v("2.同构渲染框架提供的额外生命周期以及方法都是在真正的vue生命周期之前的，原因是vue的生命周期是不可以异步的，所以，为了满足开发的需求，所有生命周期和方法都应该是在vue生命周期之前去执行的，理解好这一点，会方便入手nuxt开发。")]),e._v(" "),r("p",[e._v("3.beforeCreated和created生命周期其实是同时在服务端和浏览器端执行的，“同构”渲染的来源之一。")]),e._v(" "),r("p",[e._v("4.插件，nuxtServerInit,middleware,validate,asyncData，根据执行顺序和具体需求，选择好适合的生命周期和方法去处理开发需求是很有必要的")])])}),[],!1,null,null,null);t.default=a.exports}}]);