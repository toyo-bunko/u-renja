(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{12881:function(e,t,r){"use strict";r.r(t);var n=r(412),c=(r(58),r(13)),o=r(16),l=r(17),f=r(32),d=r(29),h=r(20),v=r(7),m=(r(52),r(12),r(61)),y=r(416);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var c=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var j=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},x=function(e){Object(f.a)(n,e);var t,r=O(n);function n(){var e;return Object(o.a)(this,n),(e=r.apply(this,arguments)).baseUrl="https://static.toyobunko-lab.jp/u-renja",e}return Object(l.a)(n,[{key:"asyncData",value:(t=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.$content,c=t.params,"ja"===(o=r.i18n.locale)?o="":o+="/",e.prev=3,e.next=6,n(o+"page/"+c.slug).fetch();case 6:return l=e.sent,e.abrupt("return",{page:l});case 10:return e.prev=10,e.t0=e.catch(3),e.next=14,n("page/"+c.slug).fetch();case 14:return f=e.sent,e.abrupt("return",{page:f});case 16:case"end":return e.stop()}}),e,null,[[3,10]])}))),function(e){return t.apply(this,arguments)})},{key:"title",get:function(){return this.page.title}},{key:"head",value:function(){return{title:this.title}}},{key:"bh",get:function(){var e=this,t=[];t.push({text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0});var r=this.page;return r&&r.bh&&r.bh.forEach((function(r){t.push({text:e.$t(r.label),disabled:!1,to:e.localePath(r.to),exact:!0})})),t.push({text:this.title}),t}}]),n}(m.Vue),_=x=j([Object(m.Component)({components:{Content:y.a}})],x),P=(r(481),r(51)),component=Object(P.a)(_,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("Content",{attrs:{items:e.bh}},[t(n.a,{staticClass:"my-5"},[t("h1",{staticClass:"my-5"},[e._v(e._s(e.title))]),e._v(" "),t("nuxt-content",{attrs:{document:e.page}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},415:function(e,t,r){"use strict";var n=r(421),c=r(412),o=r(176),l=r(49),f=(r(58),r(17)),d=r(16),h=r(32),v=r(29),m=r(20),y=r(7),O=(r(12),r(61));function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(m.a)(e);if(t){var c=Object(m.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(v.a)(this,r)}}var x=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},_=function(e){Object(h.a)(r,e);var t=j(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(f.a)(r)}(O.Vue);x([Object(O.Prop)({required:!0})],_.prototype,"items",void 0);var P=_=x([O.Component],_),R=r(51),component=Object(R.a)(P,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t(l.a,{attrs:{color:"grey lighten-2"}},[t(c.a,{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[t(n.a,{staticClass:"py-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[t(o.a,[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.a=component.exports},416:function(e,t,r){"use strict";r(58);var n=r(17),c=r(16),o=r(32),l=r(29),f=r(20),d=r(7),h=(r(12),r(61)),v=r(415);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},O=function(e){Object(o.a)(r,e);var t=m(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r)}(h.Vue);y([Object(h.Prop)({required:!0})],O.prototype,"items",void 0);var j=O=y([Object(h.Component)({components:{Breadcrumbs:v.a}})],O),x=r(51),component=Object(x.a)(j,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("Breadcrumbs",{attrs:{items:e.items}}),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},417:function(e,t,r){var content=r(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("b1bed018",content,!0,{sourceMap:!1})},418:function(e,t,r){var n=r(18)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},421:function(e,t,r){"use strict";r(6),r(5),r(8),r(12),r(14);var n=r(2),c=(r(417),r(80)),o=r(9);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,f(f({},data),{},{attrs:f(f({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),h=r(1),v=Object(h.i)("v-breadcrumbs__divider","li"),m=r(30);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(o.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(d,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},448:function(e,t,r){var content=r(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("2c2e5647",content,!0,{sourceMap:!1})},481:function(e,t,r){"use strict";r(448)},482:function(e,t,r){var n=r(18)(!1);n.push([e.i,".nuxt-content h2,.nuxt-content h3,.nuxt-content h4{margin-top:12px;margin-bottom:8px}.nuxt-content p{text-indent:1em}",""]),e.exports=n}}]);