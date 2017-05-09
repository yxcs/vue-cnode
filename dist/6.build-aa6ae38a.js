webpackJsonp([6],{104:function(t,e,s){var a=s(81);"string"==typeof a&&(a=[[t.i,a,""]]);s(4)(a,{});a.locals&&(t.exports=a.locals)},47:function(t,e,s){var a,n;s(104),a=s(74);var o=s(95);n=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(n=a=a["default"]),"function"==typeof n&&(n=n.options),n.name=n.name||"message",n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},56:function(t,e,s){"use strict";(function(t){function s(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}e["default"]={data:function(){var t;return{author:{},bodyStyle:(t={display:"-webkit-flex"},s(t,"display","ms-flex"),s(t,"display","flex"),s(t,"padding",0),s(t,"flexDirection","column"),s(t,"position","relative"),t)}},props:["authorName","topicId","hasRecent"],computed:{recentLength:function(){var t=this.author.recent_topics.length;return t>10&&10||t}},created:function(){this.authorName&&this.fetchUserInfo()},mounted:function(){},watch:{authorName:function(){this.authorName&&this.fetchUserInfo()}},methods:{fetchUserInfo:function(){var e=this,s=this;t.ajax({url:"https://cnodejs.org/api/v1/user/"+s.authorName,type:"GET"}).done(function(t){t&&t.success&&(e.author=t.data)}).fail(function(t){})},goToTopic:function(t){t&&this.$router.push({name:"topic",params:{id:t}})}}}}).call(e,s(3))},57:function(t,e,s){e=t.exports=s(2)(),e.push([t.i,"\n.author-avatar {\n  max-width: 100%;\n  display: block;\n  padding: 20px;\n  text-align: center;\n  border-bottom: 1px solid rgba(160, 160, 160, 0.2);\n}\n.author-avatar img {\n    width: auto;\n    max-width: 100%;\n    max-height: 100px;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n}\n.author-info {\n  padding: 20px;\n  border-bottom: 1px solid rgba(160, 160, 160, 0.2);\n}\n.author-info .author-name {\n    line-height: 48px;\n    font-size: 24px;\n    font-weight: 300;\n    color: #212121;\n}\n.author-info .author-name:hover {\n      text-decoration: underline;\n}\n.author-info .author-detail .author-score {\n    color: #838383;\n}\n.author-recent-topic .title {\n  padding: 18px 20px;\n  border-bottom: 1px solid rgba(160, 160, 160, 0.2);\n}\n.author-recent-topic .topic-list ul {\n  list-style: none;\n}\n.author-recent-topic .topic-list ul li {\n    line-height: 1.5;\n    border-bottom: 1px solid rgba(160, 160, 160, 0.2);\n    padding: 10px;\n}\n.author-recent-topic .topic-list ul li a {\n      color: #838383;\n}\n",""])},58:function(t,e,s){var a,n;s(60),a=s(56);var o=s(59);n=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(n=a=a["default"]),"function"==typeof n&&(n=n.options),n.name=n.name||"aside",n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},59:function(module,exports){module.exports={render:function(){with(this)return author.loginname?_h("el-card",{attrs:{"body-style":bodyStyle}},[_h("div",{slot:"header",staticClass:"clearfix"},[hasRecent?_h("span",["作者信息"]):_h("span",["个人信息"])," "])," ",_h("div",{staticClass:"text"},[_h("router-link",{staticClass:"author-avatar",attrs:{to:{name:"user",params:{name:author.loginname}}}},[_h("img",{staticClass:"img",attrs:{src:author.avatar_url,alt:""}})])," ",_h("section",{staticClass:"author-info"},[_h("router-link",{staticClass:"author-name",attrs:{to:{name:"user",params:{name:author.loginname}}}},[_h("span",{domProps:{textContent:_s(author.loginname)}})])," ",_h("p",{staticClass:"author-detail"},[_h("span",{staticClass:"author-score"},["积分："+_s(author.score)])])])," ",hasRecent?_h("section",{staticClass:"author-recent-topic"},[_m(0)," ",_h("main",{staticClass:"topic-list"},[_h("ul",[_l(recentLength,function(t){return author.recent_topics[t-1].id!==topicId?_h("li",[_h("a",{attrs:{href:"javascript:"},on:{click:function(e){e.preventDefault(),goToTopic(author.recent_topics[t-1].id)}}},[_s(author.recent_topics[t-1].title)])]):_e()})," ",author.recent_topics.length?_h("li",["..."]):_h("li",["暂无"])," "])])]):_e()])]):_e()},staticRenderFns:[function(){with(this)return _h("header",{staticClass:"title"},[_h("span",["最近其他文章"])])}]}},60:function(t,e,s){var a=s(57);"string"==typeof a&&(a=[[t.i,a,""]]);s(4)(a,{});a.locals&&(t.exports=a.locals)},74:function(t,e,s){"use strict";(function(t){var a=s(14),n=s.n(a),o=s(58),i=s.n(o),r=s(1);s.n(r);e["default"]={data:function(){return{messages:{has_read_messages:[],hasnot_read_messages:[]}}},computed:s.i(r.mapGetters)({user:"getUserInfo"}),created:function(){this.user.accesstoken&&this.fetchMessages()},mounted:function(){},methods:{fetchMessages:function(){var e=this;this.setLoading(!0);var s=this;t.ajax({url:"https://cnodejs.org/api/v1/messages",type:"GET",data:{accesstoken:s.user.accesstoken}}).done(function(t){return s.setLoading(!1),t&&t.success?void(s.messages=t.data||s.messages):void s.$message({showClose:!0,message:"数据获取失败，请稍后再试！",type:"warning"})}).fail(function(t){e.setLoading(!1),s.$message({showClose:!0,message:"数据获取失败，请稍后再试！",type:"warning"})})},markAll:function(){var e=this;if(this.user.accesstoken){if(this.messages.hasnot_read_messages.length<1)return void this.$message({showClose:!0,message:"暂无未读消息",type:"info"});this.setLoading(!0);var s=this;t.ajax({url:"https://cnodejs.org/api/v1/message/mark_all",type:"POST",dataType:"json",data:{accesstoken:s.user.accesstoken}}).done(function(t){return e.setLoading(!1),t&&t.success?(s.messages.has_read_messages=s.messages.hasnot_read_messages.concat(s.messages.has_read_messages),s.messages.hasnot_read_messages=[],s.$message({showClose:!0,message:"消息全部设置已读！",type:"success"}),s.$store.commit("setValue",{key:"message",value:0}),void(localStorage.message=0)):void s.$message({showClose:!0,message:"操作失败",type:"warning"})}).fail(function(t){e.setLoading(!1),s.$message({showClose:!0,message:"操作失败",type:"warning"})})}},setLoading:function(t){this.$store.commit("setLoading",t)}},components:{cvHead:n.a,cvAside:i.a}}}).call(e,s(3))},81:function(t,e,s){e=t.exports=s(2)(),e.push([t.i,"\n.messages .message-item {\n  border-top: 1px solid #f0f0f0;\n  padding: 10px 0;\n}\n.messages .message-item:nth-of-type(1) {\n    border-top: none;\n    padding-top: 0;\n}\n.messages .message-item .messager-avatar {\n    display: inline-block;\n}\n.messages .message-item .messager-avatar img {\n      width: 30px;\n      height: 30px;\n}\n.messages .message-item .link {\n    color: #20a0ff;\n}\n.messages .message-item .message-content {\n    display: inline-block;\n}\n.messages .message-item .message-time {\n    float: right;\n    text-align: right;\n    min-width: 50px;\n    display: inline-block;\n    white-space: nowrap;\n    color: #778087;\n    font-size: 11px;\n}\n",""])},95:function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"container"}},[_h("main",{attrs:{id:"main"}},[_h("el-row",{attrs:{gutter:20}},[_h("el-col",{attrs:{span:18}},[_h("el-row",[_h("el-col",{attrs:{span:24}},[_h("div",{staticClass:"grid-content bg-purple"},[_h("el-card",{staticClass:"box-card"},[_h("div",{slot:"header",staticClass:"clearfix"},[_h("div",[_m(0)," ",_h("el-badge",{staticClass:"mark",attrs:{max:99},domProps:{value:messages.hasnot_read_messages.length}})," ",_h("el-button",{attrs:{style:"float:right;"},nativeOn:{click:function(t){markAll(t)}}},["全部已读"])])])," ",_h("main",{staticClass:"hasnot-read-messages messages"},[messages.hasnot_read_messages.length?_h("ul",{staticClass:"hasnot-read-list"},[_l(messages.hasnot_read_messages,function(t){return _h("li",{staticClass:"message-item hasnot-read-item"},[_h("router-link",{staticClass:"messager-avatar",attrs:{to:{name:"user",params:{name:t.author.loginname}}}},[_h("img",{attrs:{src:t.author.avatar_url,alt:""}})])," ",_h("router-link",{staticClass:"messager-name link",attrs:{to:{name:"user",params:{name:t.author.loginname}}}},["\n                                              "+_s(t.author.loginname)+"\n                                          "])," ",_h("p",{staticClass:"message-content"},["at"==t.type?_h("span",["在话题"]):_e()," ","reply"==t.type?_h("span",["回复了您的话题"]):_e()," ",_h("router-link",{staticClass:"message-topic link",attrs:{to:{name:"topic",params:{id:t.topic.id}}}},["\n                                                  "+_s(t.topic.title)+"\n                                              "])," ","at"==t.type?_h("span",["@了您"]):_e()])," ",_h("span",{staticClass:"message-time"},[_s(_f("getDateFromNow")(t.create_at))])])})]):_h("span",{staticClass:"noData"},["暂无消息"])," "])])])])])," ",_h("el-row",{staticClass:"cv-panel"},[_h("el-col",{attrs:{span:24}},[_h("div",{staticClass:"grid-content bg-purple"},[_h("el-card",{staticClass:"box-card"},[_h("div",{slot:"header",staticClass:"clearfix"},[_h("div",[_m(1)," ",_h("el-badge",{staticClass:"mark",attrs:{max:99},domProps:{value:messages.has_read_messages.length}})])])," ",_h("main",{staticClass:"has-read-messages messages"},[messages.has_read_messages.length?_h("ul",{staticClass:"has-read-list"},[_l(messages.has_read_messages,function(t){return _h("li",{staticClass:"message-item has-read-item"},[_h("router-link",{staticClass:"messager-avatar",attrs:{to:{name:"user",params:{name:t.author.loginname}}}},[_h("img",{attrs:{src:t.author.avatar_url,alt:""}})])," ",_h("router-link",{staticClass:"messager-name link",attrs:{to:{name:"user",params:{name:t.author.loginname}}}},["\n                                              "+_s(t.author.loginname)+"\n                                          "])," ",_h("p",{staticClass:"message-content"},["at"==t.type?_h("span",["在话题"]):_e()," ","reply"==t.type?_h("span",["回复了您的话题"]):_e()," ",_h("router-link",{staticClass:"message-topic link",attrs:{to:{name:"topic",params:{id:t.topic.id}}}},["\n                                                  "+_s(t.topic.title)+"\n                                              "])," ","at"==t.type?_h("span",["@了您"]):_e()])," ",_h("span",{staticClass:"message-time"},[_s(_f("getDateFromNow")(t.create_at))])])})]):_h("span",{staticClass:"noData"},["暂无消息"])," "])])])])])])," ",_h("el-col",{attrs:{span:6}},[_h("div",{staticClass:"grid-content bg-purple"},[user.loginname?_h("cvAside",{attrs:{"author-name":user.loginname,hasRecent:!1}}):_e()])])])])])},staticRenderFns:[function(){with(this)return _h("span",["新消息"])},function(){with(this)return _h("span",["已读消息"])}]}}});