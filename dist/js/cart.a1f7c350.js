(function(e){function t(t){for(var i,c,s=t[0],u=t[1],d=t[2],a=0,f=[];a<s.length;a++)c=s[a],o[c]&&f.push(o[c][0]),o[c]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);h&&h(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(i=!1)}i&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},o={cart:0},r=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=u;r.push([1,"chunk-vendors","chunk-common"]),n()})({"0fec":function(e,t,n){},1:function(e,t,n){e.exports=n("4634")},4634:function(e,t,n){"use strict";n.r(t);n("20d6"),n("ac6a"),n("cadf"),n("551c"),n("097d"),n("c1e8"),n("0fec"),n("bef4");var i=n("a026"),o=n("bc3a"),r=n.n(o),c=n("a474"),s=n("3d93"),u=n("589d"),d=n.n(u),h=n("d225"),a=n("b0b4"),f=n("b5f9"),l=n("b9f3"),p=function(){function e(){Object(h["a"])(this,e)}return Object(a["a"])(e,null,[{key:"add",value:function(e){return Object(f["a"])(c["a"].add,{id:e,number:1})}},{key:"reduce",value:function(e){return Object(f["a"])(c["a"].reduce,{id:e,number:1})}},{key:"getList",value:function(){return Object(l["a"])(c["a"].addressList)}}]),e}(),g=p;new i["default"]({el:".container",data:{lists:null,ischose:!1,total:0,editingShop:null,editingShopIndex:-1,removePopup:!1,removeData:null,removeMsg:""},created:function(){this.getlists()},computed:{allSelected:{get:function(){return!(!this.lists||!this.lists.length)&&this.lists.every(function(e){return e.checked})},set:function(e){this.lists.forEach(function(t){t.checked=e,t.goodsList.forEach(function(t){t.checked=e})})}},allRemveSelect:{get:function(){return!!this.editingShop&&this.editingShop.removeChecked},set:function(e){this.editingShop&&(this.editingShop.removeChecked=e,this.editingShop.goodsList.forEach(function(t){t.removeChecked=e}))}},selectList:function(){if(this.lists&&this.lists.length){var e=[],t=0;return this.lists.forEach(function(n){n.goodsList.forEach(function(n){n.checked&&(e.push(n),t+=n.price*n.number)})}),this.total=t,e}return[]},removeList:function(){if(this.editingShop){var e=[];return this.editingShop.goodsList.forEach(function(t){t.removeChecked&&e.push(t)}),e}return[]}},methods:{getlists:function(){var e=this;r.a.get(c["a"].cartlist).then(function(t){var n=t.data.cartList;n.forEach(function(e){e.checked=!0,e.removeChecked=!1,e.editing=!1,e.editingMsg="编辑",e.goodsList.forEach(function(e){e.checked=!0,e.removeChecked=!1})}),e.lists=n})},chosePick:function(e,t){var n=this.editingShop?"removeChecked":"checked";t[n]=!t[n],e[n]=e.goodsList.every(function(e){return e[n]})},choseShop:function(e){var t=this.editingShop?"removeChecked":"checked";e[t]=!e[t],e.goodsList.forEach(function(n){n[t]=e[t]})},choseAll:function(){var e=this.editingShop?"allRemveSelect":"allSelected";this[e]=!this[e]},edit:function(e,t){e.editing=!e.editing,e.editingMsg=e.editing?"完成":"编辑",this.lists.forEach(function(n,i){i!==t&&(n.editing=!1,n.editingMsg=e.editing?"":"编辑")}),this.editingShop=e.editing?e:null,this.editingShopIndex=e.editing?t:-1},reduce:function(e){1!==e.number&&g.reduce(e.id).then(function(t){e.number--})},add:function(e){g.add(e.id).then(function(t){e.number++})},remove:function(e,t,n,i){this.removePopup=!0,this.removeData={shop:e,shopIndex:t,good:n,goodIndex:i},this.removeMsg="确定要删除该商品吗？"},removeConfirm:function(){var e=this;if("确定要删除该商品吗？"===this.removeMsg){var t=this.removeData,n=t.shop,i=t.shopIndex,o=t.good,s=t.goodIndex;r.a.post(c["a"].remove,{id:o.id}).then(function(t){n.goodsList.splice(s,1),n.goodsList.length||(e.lists.splice(i,1),e.removeShop()),e.removePopup=!1})}else{var u=[];this.removeList.forEach(function(e){u.push(e.id)}),r.a.post(c["a"].meremove,{ids:u}).then(function(t){var n=[];e.editingShop.goodsList.forEach(function(t){var i=e.removeList.findIndex(function(e){return e.id===t.id});-1===i&&n.push(t)}),n.length?e.editingShop.goodsList=n:(e.lists.splice(e.editingShopIndex,1),e.removeShop()),e.removePopup=!1})}},removeShop:function(){this.editingShop=null,this.editingShopIndex=-1,this.lists.forEach(function(e){e.editing=!1,e.editingMsg="编辑"})},start:function(e,t){t.startX=e.changedTouches[0].clientX},end:function(e,t,n,i){var o=e.changedTouches[0].clientX,r="0";n.startX-o>100&&(r="-60px"),o-n.startX>100&&(r="0px"),d()(this.$refs["goods-".concat(t,"-").concat(i)],{left:r})}},mixins:[s["a"]]})},bef4:function(e,t,n){},c1e8:function(e,t,n){}});
//# sourceMappingURL=cart.a1f7c350.js.map