webpackJsonp([13],{"/eQD":function(t,e){},"5kWq":function(t,e){},"5vwc":function(t,e){},"7UXC":function(t,e){},"Cj3+":function(t,e){},GrYt:function(t,e){},"NHd/":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("//Fk"),o=n.n(a),i=(n("nI2B"),n("qWG/")),r=(n("MY4N"),n("0zAV")),c=(n("cZ0s"),n("fIxc")),s=(n("ZuV/"),n("37Xn")),u=(n("JRZP"),n("LK01")),l=(n("RgoE"),n("0KWt")),h=(n("1E9F"),n("2Ux5")),f=(n("3AsM"),n("7ZPY")),d=(n("zP7x"),n("rD0v")),p=(n("3Lne"),n("SSsa")),m=(n("mMXg"),n("qYlo")),v=(n("9++/"),n("QhyB")),g=(n("yffH"),n("sdMh")),b=(n("FO5P"),n("woHG")),w=n("7+uW"),y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"leftMenu"}},[e("section",{staticClass:"header"},[e("img",{attrs:{src:"http://pic.qiantucdn.com/58pic/28/56/06/24v58PICI1VKpf5dcs2jU_PIC2018.jpg",alt:""}}),this._v(" "),e("span",[this._v("系统演示")])]),this._v(" "),e("ul",[e("li",[e("i",{staticClass:"iconfont icon-ren"}),this._v(" "),e("span",[this._v("个人中心")])])])])}]};var k={name:"App",data:function(){return{}},computed:{show:{get:function(){return this.$store.state.show},set:function(){}}},methods:{closePopup:function(){this.$store.commit("showLeftMenu")}},components:{myMenu:n("VU/8")({},y,!1,function(t){n("Q/rd")},null,null).exports}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t._v(" "),n("van-popup",{staticClass:"hv-popup",attrs:{position:"left",overlay:!0,"close-on-click-overlay":!0},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"left-menu"},[n("div",{staticClass:"left-menu-back",on:{click:t.closePopup}}),t._v(" "),n("div",{staticClass:"left-menu-main"},[n("myMenu")],1)])])],1)},staticRenderFns:[]};var I=n("VU/8")(k,_,!1,function(t){n("fuBd")},null,null).exports,C=n("/ocq"),j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("hheader",{attrs:{header:this.hheader}}),this._v(" "),e("div",{staticClass:"xx",staticStyle:{"background-color":"red"}})],1)},staticRenderFns:[]};n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",hheader:{title:"你好",back:"true"}}}},j,!1,function(t){n("XQYA")},null,null).exports;var x=n("NYxO"),S={updateLoading:function(t,e){t.isLoading=e},hincrement:function(t,e){t.hconfirm=e},updatePaySection:function(t,e){console.log("<<>>"+e),t.paySection=e},hexitSystem:function(t){t.tokenId="",t.userId="",t.userName="",t.userImg="",localStorage.removeItem("tokenId"),localStorage.removeItem("userId")},showLeftMenu:function(t){t.show=!t.show},editFooter:function(t,e){t.btnactive=e},loginStystem:function(t,e){console.log(">>>>>loginStystem"),t.tokenId=e.tokenId,t.userId=e.userId,t.userName="",t.userImg="",localStorage.setItem("tokenId",e.tokenId),localStorage.setItem("userId",e.userId)}};var q={showLoading:function(t){t.state,(0,t.commit)("updateLoading",!0)},hideLoading:function(t){t.state,(0,t.commit)("updateLoading",!1)},hconfirme:function(t,e){t.state,(0,t.commit)("hincrement",e)},hexitSystem:function(t){t.state,(0,t.commit)("hexitSystem")},editPaySection:function(t,e){t.state,(0,t.commit)("updatePaySection",e)}};w.a.use(x.a);var A=new x.a.Store({state:{isLoading:!1,show:!1,btnactive:0},mutations:S,actions:q,plugins:[]});w.a.use(C.a);var U=[{path:"/",name:"program",component:function(t){return n.e(0).then(function(){var e=[n("CVk8")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/program",name:"program",component:function(t){return n.e(0).then(function(){var e=[n("CVk8")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/waring",name:"waring",component:function(t){return n.e(7).then(function(){var e=[n("mWoh")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/monitoring",name:"monitoring",component:function(t){return n.e(1).then(function(){var e=[n("5ig8")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/stationDetial",name:"stationDetial",component:function(t){return n.e(4).then(function(){var e=[n("9xQt")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/my",name:"my",component:function(t){return n.e(11).then(function(){var e=[n("VnbG")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/photo",name:"photo",component:function(t){return n.e(8).then(function(){var e=[n("Qqu7")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/login",name:"login",component:function(t){return n.e(2).then(function(){var e=[n("Quw4")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!1}},{path:"/home",name:"home",component:function(t){return n.e(5).then(function(){var e=[n("26dS")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},{path:"/test",name:"test",component:function(t){return n.e(6).then(function(){var e=[n("BERp")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!0}},,{path:"/loading",name:"loading",component:function(t){return n.e(3).then(function(){var e=[n("1J5Q")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!1}},{path:"/forgetPwd",name:"forgetPwd",component:function(t){return n.e(10).then(function(){var e=[n("OdrO")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!1}},{path:"/detailList",name:"detailList",component:function(t){return n.e(9).then(function(){var e=[n("UkM6")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{requireAuth:!1}}];window.localStorage.getItem("tokenId")&&(A.state.tokenId=window.localStorage.getItem("tokenId"),A.state.userId=window.localStorage.getItem("userId"));var $=new C.a({hashbang:!0,history:!0,transitionOnLoad:!0,routes:U});$.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requireAuth})?A.state.token?n():A.state.tokenId?n():n({path:"/login"}):n()});var L=$,P=(n("eqfM"),n("/QYm")),F=n("woOf"),O=n.n(F),M=n("mtWM"),V=n.n(M);function z(t){var e="";for(var n in t)""==e?e="?"+n+"="+t[n]:e+="&"+n+"="+t[n];return e}var Q={Post:function(t,e,n,a){void 0!=a&&null!=a||(a=!0);var o=O()(e,{}),i=baseUrl+t+z(o);V.a.post(i,o).then(function(t){"success"!=t.data.flag?Object(P.a)(t.data.info):n(t.data)}).catch(function(t){console.log(t)})},Get:function(t,e,n,a){void 0!=a&&null!=a||(a=!0);var o=O()(e,{}),i=baseUrl+t+z(o);V.a.get(i).then(function(t){"success"!=t.data.flag?Object(P.a)(t.data.info):n(t.data)}).catch(function(t){console.log(t)})}},B={props:{header:{title:"",back:{default:"false"},backUrl:""}},methods:{onClickLeft:function(){console.log(this.header),this.header.backUrl||("true"==this.header.back?this.$router.back():this.$router.push("/my"))}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hheader"},[e("van-nav-bar",{attrs:{title:this.header.title},on:{"click-left":this.onClickLeft}},["true"==this.header.back?e("i",{staticClass:"iconfont icon-zuojiantou",attrs:{slot:"left"},slot:"left"}):e("div",{attrs:{slot:"left"},slot:"left"},[this._t("hleft")],2),this._v(" "),e("div",{attrs:{slot:"right"},slot:"right"},[this._t("hright")],2)])],1)},staticRenderFns:[]};var T=n("VU/8")(B,E,!1,function(t){n("lrCf")},null,null).exports,Y={data:function(){return{active:0}},computed:{btnactive:{get:function(){return this.$store.state.btnactive},set:function(){}}},methods:{editBtn:function(t){var e=HGetHashUrl("projectId");switch(t){case 0:this.$router.push("/home");break;case 1:this.$router.push("/monitoring?projectId="+e);break;case 2:this.$router.push("/waring?projectId="+e);break;case 3:this.$router.push("/photo?projectId="+e)}this.$store.commit("editFooter",t)}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("van-tabbar",{model:{value:t.btnactive,callback:function(e){t.btnactive=e},expression:"btnactive"}},[n("van-tabbar-item",{nativeOn:{click:function(e){t.editBtn(0)}}},[n("i",{staticClass:"iconfont icon-mubiao",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),n("p",[t._v("首页")])]),t._v(" "),n("van-tabbar-item",{nativeOn:{click:function(e){t.editBtn(1)}}},[n("i",{staticClass:"iconfont icon-browse",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),n("p",[t._v("监控")])]),t._v(" "),n("van-tabbar-item",{nativeOn:{click:function(e){t.editBtn(2)}}},[n("i",{staticClass:"iconfont icon-dian",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),n("p",[t._v("报警")])]),t._v(" "),n("van-tabbar-item",{nativeOn:{click:function(e){t.editBtn(3)}}},[n("i",{staticClass:"iconfont icon-xiangji",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),n("p",[t._v("相册")])])],1)],1)},staticRenderFns:[]};var H=n("VU/8")(Y,D,!1,function(t){n("5vwc")},null,null).exports;w.a.prototype.$=Q,w.a.use(b.a),w.a.use(g.a),w.a.use(v.a),w.a.use(m.a),w.a.use(p.a),w.a.use(f.a).use(d.a),w.a.use(l.a).use(h.a),w.a.use(s.a).use(u.a),w.a.use(r.a).use(c.a),w.a.use(i.a),V.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",V.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",V.a.defaults.headers.get["Content-Type"]="application/json;charset=UTF-8",V.a.defaults.withCredentials=!0,V.a.interceptors.request.use(function(t){return t.headers={"Content-Type":"application/json;charset=UTF-8"},t},function(t){return o.a.reject(t)}),w.a.component("hheader",T),w.a.component("hfooter",H),w.a.config.productionTip=!1,w.a.filter("workStatus",function(t){switch(t){case"1":return"正常";case"0":return"报警"}}),w.a.filter("dealStatus",function(t){switch(t){case"1":return"已处理";case"0":return"未处理"}}),w.a.filter("deviceType",function(t){switch(t){case"1":return"DTU";case"2":return"传感器"}}),w.a.filter("degree",function(t){switch(t){case"1":return"一级";case"2":return"二级";case"3":return"三级"}}),w.a.filter("deviceParam",function(t){switch(t){case"shid":return"湿度";case"ylz":return"压力";case"nbz":return"南北振";case"spwy":return"水平位移";case"bcwy":return"本次位移";case"wd":return"温度";case"fs":return"风速";case"sd":return"深度";case"ljwy":return"累计位移";case"fx":return"风向";case"jgcj":return"激光测距";case"ljcj":return"累计沉降";case"qxd":return"倾斜度";case"jzgd":return"建筑高度";case"temp":return"温度";case"ljyl":return"累计雨量";case"dxz":return"东西振";case"mszl":return"锚索张力";case"jdwy":return"绝对位移";case"sxwy":return"竖向位移";case"x":return"x轴";case"addup":return"累计沉降值";case"y":return"y轴";case"z":return"z轴";case"tq":return"天气（1：雪；2：雨；3：阴；4：晴）"}}),new w.a({el:"#app",router:L,store:A,components:{App:I},template:"<App/>"})},"Q/rd":function(t,e){},Sji2:function(t,e){},XQYA:function(t,e){},bD0C:function(t,e){},dSDO:function(t,e){},f4F5:function(t,e){},fuBd:function(t,e){},idDm:function(t,e){},kyYV:function(t,e){},lrCf:function(t,e){},znX2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.90ffd6a6d86f64493bc6.js.map