webpackJsonp([5],{101:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"container"}},[_h("main",{attrs:{id:"main"}},[_h("el-row",{attrs:{gutter:20,id:"container"}},[_h("el-col",{staticClass:"cv cv-100",attrs:{span:18,id:"content",offset:3}},[_h("div",{staticClass:"grid-content bg-purple"},[_h("el-card",{staticClass:"box-card index"},[_h("div",{slot:"header",staticClass:"clearfix index-nav"},[_h("el-menu",{staticClass:"el-menu-demo",attrs:{id:"navbar",theme:"light","default-active":curTab,mode:"horizontal",router:""}},[_h("el-menu-item",{attrs:{index:"all",route:{name:"index",query:{tab:"all"}}}},["全部"])," ",_h("el-menu-item",{attrs:{index:"good",route:{name:"index",query:{tab:"good"}}}},["精华"])," ",_h("el-menu-item",{attrs:{index:"share",route:{name:"index",query:{tab:"share"}}}},["分享"])," ",_h("el-menu-item",{attrs:{index:"ask",route:{name:"index",query:{tab:"ask"}}}},["问答"])," ",_h("el-menu-item",{attrs:{index:"job",route:{name:"index",query:{tab:"job"}}}},["招聘"])])])," ",_h("transition",{attrs:{name:transition}},[_h("div",{key:curTab,staticClass:"articles-lists"},[_h("cvList",{attrs:{topics:topics}})])])])])])])])])},staticRenderFns:[]}},110:function(t,e,n){var o=n(87);"string"==typeof o&&(o=[[t.i,o,""]]);n(4)(o,{});o.locals&&(t.exports=o.locals)},45:function(t,e,n){var o,i;n(110),o=n(72);var s=n(101);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.name=i.name||"index",i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},61:function(t,e,n){"use strict";e["default"]={props:["topics","hideCount"]}},62:function(t,e,n){e=t.exports=n(2)(),e.push([t.i,"\n.topic {\n  border-top: 1px solid #f0f0f0;\n  padding: 10px 0;\n}\n.topic:nth-of-type(1) {\n    border-top: none;\n    padding-top: 0;\n}\n.topic .creater-avatar {\n    display: inline-block;\n}\n.topic .creater-avatar img {\n      width: 30px;\n      height: 30px;\n}\n.topic .count {\n    font-size: 10px;\n    width: 70px;\n    display: inline-block;\n    text-align: center;\n}\n.topic .count .reply {\n      font-size: 14px;\n      color: #9e78c0;\n}\n.topic .count .seperator {\n      margin: 0 -3px;\n}\n.topic .type {\n    padding: 2px 4px;\n    border-radius: 3px;\n    font-size: 12px;\n}\n.topic .type.hasColor {\n      background: #80bd01;\n      color: #fff;\n}\n.topic .type.noColor {\n      background-color: #e5e5e5;\n      color: #999;\n}\n.topic .title {\n    max-width: 70%;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 16px;\n    line-height: 30px;\n    margin-left: 10px;\n}\n.topic .last-reply-time {\n    float: right;\n    text-align: right;\n    min-width: 50px;\n    display: inline-block;\n    white-space: nowrap;\n    color: #778087;\n    font-size: 11px;\n}\n",""])},64:function(t,e,n){var o,i;n(66),o=n(61);var s=n(65);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.name=i.name||"list",i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=o},65:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"articles"},[_h("section",{staticClass:"article-list"},[_l(topics,function(t,e){return topics?_h("article",{key:e,staticClass:"topic"},[_h("router-link",{staticClass:"creater-avatar avatar",attrs:{to:{name:"user",params:{name:t.author.loginname}}}},[_h("img",{attrs:{src:t.author.avatar_url,alt:""}})])," ",hideCount?_e():_h("span",{staticClass:"count"},[_h("span",{staticClass:"reply",domProps:{textContent:_s(t.reply_count||0)}})," ",_m(0,!0)," ",_h("span",{staticClass:"visit",domProps:{textContent:_s(t.visit_count||0)}})])," ",t.typeClass?_h("el-tag",{"class":t.typeClass,attrs:{type:t.typeClass,hit:!1}},[_s(_f("getArticleType")(t.top,t.good,t.tab))]):_e()," ",_h("router-link",{staticClass:"title",attrs:{to:{name:"topic",params:{id:t.id}}},domProps:{textContent:_s(t.title)}})," ",t.create_at?_h("span",{staticClass:"last-reply-time"},["发布于 "+_s(_f("getDateFromNow")(t.create_at))]):_e()]):_e()})])])},staticRenderFns:[function(){with(this)return _h("span",{staticClass:"seperator"},["/"])}]}},66:function(t,e,n){var o=n(62);"string"==typeof o&&(o=[[t.i,o,""]]);n(4)(o,{});o.locals&&(t.exports=o.locals)},72:function(t,e,n){"use strict";(function(t){var o=n(14),i=n.n(o),s=n(64),a=n.n(s);e["default"]={data:function(){return{topics:[],activeTopics:[],curTab:this.$route.query.tab||"all",queryData:{page:1,tab:"all",limit:20,mdrender:!0},scrollLock:!1,transition:"slide-left"}},computed:{tab:function(){return this.$route.query.tab||"all"}},watch:{tab:function(t,e){this.fetchTopics(),this.transition=this.checkDirecition(t,e)>0?"slide-left":"slide-right"}},mounted:function(){var e=this;sessionStorage.queryData&&sessionStorage.curTab===this.curTab?!function(){e.topics=JSON.parse(sessionStorage.topics||"[]"),e.queryData=JSON.parse(sessionStorage.queryData||e.queryData);var n=sessionStorage.scrollTop||0;e.$nextTick(function(){t(window).scrollTop(n)})}():this.fetchTopics(),t(window).on("scroll",function(t){e.scrollLoad()}),sessionStorage.removeItem("curTab"),sessionStorage.removeItem("topics"),sessionStorage.removeItem("queryData"),sessionStorage.removeItem("scrollTop")},beforeRouteLeave:function(e,n,o){"user"!==e.name&&"topic"!==e.name||(sessionStorage.curTab=n.query.tab||"all",sessionStorage.topics=JSON.stringify(this.topics),sessionStorage.queryData=JSON.stringify(this.queryData),sessionStorage.scrollTop=t(window).scrollTop()),t(window).scrollTop(0),t(window).off("scroll"),o()},methods:{fetchTopics:function(){var e=this;this.setLoading(!0),this.scrollLock=!0;var n=this.$route.query.tab||"all",o=n===this.queryData.tab;this.queryData.tab=n,t.ajax({url:"https://cnodejs.org/api/v1/topics",type:"GET",data:this.queryData}).done(function(t){return e.setLoading(!1),e.scrollLock=!1,t&&t.success?(t.data.forEach(function(t,n){t.typeClass=e.getTypeClass(t.top,t.good,t.tab)}),o||(e.topics=[]),e.curTab=e.$route.query.tab,void(e.topics=e.topics.concat(t.data))):void e.$message({showClose:!0,message:"数据加载错误！",type:"warning"})}).fail(function(t){e.setLoading(!1),e.$message({showClose:!0,message:"数据加载错误！",type:"warning"})})},getTypeClass:function(t,e,n){return t?"success":e?"danger":"ask"==n?"primary":"job"==n?"warning":"share"==n?"gray":(t||e||n)&&this.$route.query.tab!==n?"":"hidden"},scrollLoad:function(){if(!this.scrollLock){var t=document.body,e=t.clientHeight+t.scrollTop,n=t.scrollHeight;e>n-10&&(this.scrollLock=!1,this.queryData.page++,this.fetchTopics())}},checkDirecition:function(t,e){var n=["all","good","share","ask","job"];return n.indexOf(t)-n.indexOf(e)>0?1:-1},setLoading:function(t){this.$store.commit("setLoading",t)}},components:{cvHead:i.a,cvList:a.a}}}).call(e,n(3))},87:function(t,e,n){e=t.exports=n(2)(),e.push([t.i,"\n#content .index .el-card__header {\n  padding: 0;\n  background-color: #eff2f7;\n}\n.grid-content {\n  position: relative;\n}\n.el-card {\n  border: none;\n  border-radius: 0;\n}\n.index .el-card__body {\n  padding: 0;\n}\n.articles-lists {\n  position: absolute;\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #fff;\n  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);\n}\n",""])}});