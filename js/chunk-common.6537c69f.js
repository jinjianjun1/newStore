(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"3d93":function(e,t,n){"use strict";n("c5f6");var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom-nav"},[n("ul",e._l(e.hrefmsg,function(t,a){return n("li",{key:a,class:{active:a===e.curIndex},on:{click:function(n){e.changActive(t,a)}}},[n("a",[n("i",{class:t.icon}),n("div",[e._v(e._s(t.name))])])])}),0)])},s=[],c=n("e814"),i=n.n(c),r=(n("386d"),n("cadf"),n("551c"),n("097d"),n("4328")),o=n.n(r),d=o.a.parse(location.search.substr(1)),u=d.index,l=[{href:"/index.html",icon:"icon-home",name:"有赞"},{href:"/category.html",icon:"icon-category",name:"分类"},{href:"/cart.html",icon:"icon-cart",name:"购物车"},{href:"/member.html",icon:"icon-user",name:"我"}],f={data:function(){return{hrefmsg:l,curIndex:i()(u)||0}},methods:{changActive:function(e,t){location.href="".concat(e.href,"?index=").concat(t)}}},p=f,m=(n("7108"),n("2877")),h=Object(m["a"])(p,a,s,!1,null,"5d372bed",null);h.options.__file="foot.vue";var v=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},e._l(e.lists,function(e){return n("div",{key:e.id,staticClass:"swp-page swiper-slide"},[n("a",{staticClass:"js-no-follow",attrs:{href:e.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:e.img}})])])}),0),n("div",{staticClass:"swiper-pagination"})])},w=[],g=n("41d6"),y=(n("dfa4"),{name:"swiper",props:{lists:{type:Array,required:!0},name:{}},created:function(){console.log(this.lists)},mounted:function(){new g["a"](".swiper-container",{pagination:{el:".swiper-pagination"},loop:!0,autoplay:{delay:3e3}})}}),_=y,k=(n("6eb2"),Object(m["a"])(_,b,w,!1,null,"49cd7d03",null));k.options.__file="swip.vue";var x=k.exports,C={filters:{setPrice:function(e){return e=Number(e),e.toFixed(2)}},components:{foot:v,swiper:x}};t["a"]=C},"4dcb":function(e,t,n){},"5ee0":function(e,t,n){},"6eb2":function(e,t,n){"use strict";var a=n("5ee0"),s=n.n(a);s.a},7108:function(e,t,n){"use strict";var a=n("7319"),s=n.n(a);s.a},7319:function(e,t,n){},a474:function(e,t,n){"use strict";var a={hotLists:"/index/hotLists",banner:"/index/banner",toplist:"/category/topList",ranklist:"/category/rank",sublist:"/category/subList",searchlist:"/search/list",details:"/goods/details",deal:"/goods/deal",add:"/cart/add",cartlist:"/cart/list",reduce:"/cart/reduce",remove:"/cart/remove",meremove:"/cart/mrremove",addressList:"/address/list",addressAdd:"/address/add",addressUpdate:"/address/update",addressRemove:"/address/remove",addressSetDefault:"/address/setDefault"},s="https://easy-mock.com/mock/5c34c54490862b0b0cf503d9/goodlists";for(var c in a)a.hasOwnProperty(c)&&(a[c]=s+a[c]);t["a"]=a},b5f9:function(e,t,n){"use strict";var a=n("795b"),s=n.n(a),c=(n("cadf"),n("551c"),n("097d"),n("bc3a")),i=n.n(c);function r(e,t){return new s.a(function(n,a){i.a.post(e,t).then(function(e){n(e)}).catch(function(e){a(res)})})}t["a"]=r},b9f3:function(e,t,n){"use strict";var a=n("795b"),s=n.n(a),c=(n("cadf"),n("551c"),n("097d"),n("bc3a")),i=n.n(c);function r(e,t){return new s.a(function(n,a){i.a.get(e,{params:{data:t}}).then(function(e){n(e)}).catch(function(e){a(res)})})}t["a"]=r}}]);
//# sourceMappingURL=chunk-common.6537c69f.js.map