webpackJsonp([0],{"2uj1":function(t,s){},"54Tm":function(t,s){},Jmt5:function(t,s){},Kkzf:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("header",[a("div",{staticClass:"wel-left"},[a("div",{staticClass:"glyphicon glyphicon-home",on:{click:t.navback}}),t._v(" "),a("div",{staticClass:"glyphicon  glyphicon-chevron-left",on:{click:t.backs}}),t._v(" "),a("h3",{staticClass:"header-title"},[t._v("学生信息管理表")])]),t._v(" "),t._m(0)]),t._v(" "),a("transition",[a("router-view")],1),t._v(" "),a("div",{staticClass:"glyphicon  glyphicon-plus",on:{click:t.add}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"user-info"},[s("p",[this._v("欢迎xxx登陆")]),this._v(" "),s("a",{attrs:{href:""}},[this._v("退出")])])}]};var i=a("VU/8")({name:"App",methods:{navback:function(){this.$router.push({path:"/"})},backs:function(){this.$router.push({path:"/"})},add:function(){this.$router.push({path:"/add"})}}},n,!1,function(t){a("2uj1")},null,null).exports,r=a("/ocq"),o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"list-content"},[a("table",{staticClass:"table table-bordered"},[a("tbody",[t._m(0),t._v(" "),t._l(t.datas,function(s){return a("tr",[a("td",[t._v(t._s(s.id))]),t._v(" "),a("td",[t._v(t._s(s.name))]),t._v(" "),a("td",[t._v(t._s(s.age))]),t._v(" "),a("td",[t._v(t._s(s.class))]),t._v(" "),a("td",[t._v(t._s(s.items))]),t._v(" "),a("td",[t._v(t._s(s.scroe))]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v("删除")]),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.edit}},[t._v("编辑")])])])})],2)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("姓名")]),t._v(" "),a("th",[t._v("年龄")]),t._v(" "),a("th",[t._v("班级")]),t._v(" "),a("th",[t._v("学科")]),t._v(" "),a("th",[t._v("分数")]),t._v(" "),a("th",[t._v("操作")])])}]};var l=a("VU/8")({name:"list",data:function(){return{datas:[{id:1,name:"小辉",age:24,class:1401,items:"english",scroe:90},{id:2,name:"小",age:22,class:1401,items:"english",scroe:80},{id:3,name:"辉",age:23,class:1401,items:"english",scroe:70}]}},methods:{edit:function(){this.$router.push("/edit")}}},o,!1,function(t){a("Kkzf")},"data-v-5f3ae2fc",null).exports,c={name:"login",methods:{regs:function(){this.$router.push({path:"/reg"})},loginfor:function(){localStorage.login="yes",this.$router.push({path:"/"})}}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"login-from"},[a("h1",{staticClass:"title"},[t._v("登陆页")]),t._v(" "),a("form",[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",[t._v("\n            没有用户 "),a("a",{attrs:{href:"#"},on:{click:t.regs}},[t._v("请注册")])]),t._v(" "),a("button",{staticClass:"btn btn-default",on:{click:t.loginfor}},[t._v("登陆")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[this._v("姓名")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"email",id:"name"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"pass"}},[this._v("密码")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"password",id:"pass"}})])}]};var _=a("VU/8")(c,v,!1,function(t){a("quFV")},null,null).exports,u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"login-from"},[a("h1",{staticClass:"title"},[t._v("注册页")]),t._v(" "),a("form",[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",[t._v("\n            已有用户 "),a("a",{attrs:{href:"#"},on:{click:t.logins}},[t._v("请登陆")])]),t._v(" "),a("button",{staticClass:"btn btn-default ",on:{click:t.logins}},[t._v("注册")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[this._v("姓名")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"email",id:"name"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"pass"}},[this._v("密码")]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"password",id:"pass"}})])}]};var f=a("VU/8")({name:"reg",methods:{logins:function(){this.$router.push({path:"/login"})}}},u,!1,function(t){a("iXXV")},null,null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"edit-content"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("姓名")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"name",name:"name"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"age"}},[t._v("年龄")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"",id:"age",name:"age"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"class"}},[t._v("班级")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"",id:"class",name:"class"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"items"}},[t._v("科目")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"",id:"items",name:"items"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"scroe"}},[t._v("分数")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"",id:"scroe",name:"scroe"}})]),t._v(" "),a("button",{staticClass:"btn btn-default editCon",attrs:{type:"submit"}},[t._v("编辑")])])])}]};var d=a("VU/8")({name:"xxx"},m,!1,function(t){a("54Tm")},null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"edit-content"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("姓名")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"name",name:"name"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"age"}},[t._v("年龄")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"",id:"age",name:"age"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"class"}},[t._v("班级")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"",id:"class",name:"class"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"items"}},[t._v("科目")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"",id:"items",name:"items"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"scroe"}},[t._v("分数")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"",id:"scroe",name:"scroe"}})]),t._v(" "),a("button",{staticClass:"btn btn-default editCon",attrs:{type:"submit"}},[t._v("编辑")])])])}]};var h=a("VU/8")({},p,!1,function(t){a("eih9")},null,null).exports;e.a.use(r.a);var g=new r.a({routes:[{path:"/",name:"list",component:l},{path:"/login",name:"login",component:_},{path:"/reg",name:"reg",component:f},{path:"/edit",name:"edit",component:h},{path:"/add",name:"add",component:d}]});g.beforeEach(function(t,s,a){"yes"==localStorage.login?a():"/login"==t.path||"/reg"==t.path?a():a("/login")});var C=g;a("Jmt5"),a("llnD");e.a.config.productionTip=!1,new e.a({el:"#app",router:C,components:{App:i},template:"<App/>"})},eih9:function(t,s){},iXXV:function(t,s){},llnD:function(t,s){},quFV:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.f6376bcd98559890df68.js.map