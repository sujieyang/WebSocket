(function(e){function t(t){for(var s,n,r=t[0],c=t[1],l=t[2],d=0,f=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);m&&m(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],s=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=o[0]))}return e}var s={},a={app:0},i=[];function n(t){if(s[t])return s[t].exports;var o=s[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=s,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var m=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var s=o("85ec"),a=o.n(s);a.a},"07a6":function(e,t){e.exports="data:image/png;base64,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"},"40d9":function(e,t,o){},"457b":function(e,t,o){"use strict";var s=o("bcde"),a=o.n(s);a.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],n={name:"app"},r=n,c=(o("034f"),o("2877")),l=Object(c["a"])(r,a,i,!1,null,null,null),m=l.exports,d=o("8c4f"),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-container",{staticClass:"home-container"},[s("el-aside",{staticStyle:{width:"90px"}},[s("div",[s("img",{attrs:{src:o("07a6"),alt:"bird"}})]),s("ul",[s("li",[s("router-link",{attrs:{to:"/home/edit"}},[s("i",{staticClass:"el-icon-edit-outline"})])],1),s("li",[s("router-link",{attrs:{to:{path:"/home/chatroom",query:{roomId:this.$store.state.roomInfo.roomId}}}},[s("i",{staticClass:"el-icon-chat-square"})])],1),s("li",[s("router-link",{attrs:{to:"/home/personal"}},[s("i",{staticClass:"el-icon-user"})])],1)]),s("i",{staticClass:"el-icon-setting"})]),s("el-main",[s("router-view")],1),s("div",{staticStyle:{display:"none"}},[s("el-button",{attrs:{plain:!0,id:"successCreate"},on:{click:e.successCreate}},[e._v("成功")]),s("el-button",{attrs:{plain:!0,id:"errorCreate"},on:{click:e.errorCreate}},[e._v("成功")])],1)],1)},u=[],p=(o("a4d3"),o("e01a"),o("b0c0"),o("b64b"),{data:function(){return{}},methods:{successCreate:function(){this.$message({showClose:!0,message:"房间创建成功，自动跳转中...",type:"success"})},errorCreate:function(){this.$message({showClose:!0,message:"房间创建失败，检查是否已创建过房间",type:"error"})}},mounted:function(){var e=this;this.$store.state.socket=io("http://47.94.81.206:80/"),this.$store.state.socket.on("connect",(function(){console.log("connect..."),setTimeout((function(){e.$store.state.socket.emit("init"),setTimeout((function(){"1"==e.$route.query.roomId||void 0==e.$route.query.roomId?e.$store.state.socket.emit("join_default",{user_id:e.$store.state.oneself.id}):e.$store.state.socket.emit("join",{user_name:e.$store.state.oneself.name,room:e.$route.query.roomId})}),500)}),100)})),this.$store.state.socket.on("join_default",(function(t){e.$store.state.socket.emit("updateChatRecord",{url:t.roomid,admin:parseInt(t.roomid)}),e.$store.state.socket.emit("updateRoom",{home_url:t.roomid,admin_id:parseInt(t.roomid)})})),this.$store.state.socket.on("join",(function(t){e.$store.state.socket.emit("updateChatRecord",{url:t.roomid,admin:parseInt(t.roomid)}),e.$store.state.socket.emit("updateRoom",{home_url:t.roomid,admin_id:parseInt(t.roomid)})})),this.$store.state.socket.on("init",(function(t){e.$store.state.oneself.id=t.id,e.$store.state.oneself.name=t.name,e.$store.state.oneself.headPortrait=t.face,e.$store.state.oneself.intro=t.info,e.$store.state.oneself.country=t.country,e.$store.state.oneself.phone=t.phone,e.$store.state.oneself.email=t.email,e.$store.state.oneself.time=t.time})),this.$store.state.socket.on("disconnect",(function(){console.log("disconnect..."),e.$store.state.socket.emit("leave",{room:e.$store.state.roomInfo.roomId,user_id:e.$store.state.oneself.id,user_name:e.$store.state.oneself.name})})),this.$store.state.socket.on("updateChatRecord",(function(t){e.$store.state.chatRecord=[];for(var o=0;o<Object.keys(t.data).length;o++)e.$store.state.chatRecord[o]=t.data[o]})),this.$store.state.socket.on("updateRoom",(function(t){e.$store.state.roomInfo.members=t.num,e.$store.state.roomInfo.roomId=t.room,e.$store.state.roomInfo.face=t.home_face,e.$store.state.roomInfo.name=t.home_name,e.$store.state.roomInfo.topic=t.home_topic,e.$store.state.roomInfo.url=t.room,e.$store.state.roomInfo.description=t.home_description})),this.$store.state.socket.on("create",(function(t){1==t.key?(document.getElementById("successCreate").click(),e.$store.state.socket.emit("leave",{room:e.$store.state.roomInfo.roomId,user_id:e.$store.state.oneself.id,user_name:e.$store.state.oneself.name}),e.$store.state.socket.emit("join",{room:e.$store.state.oneself.id,user_name:e.$store.state.oneself.name}),setTimeout((function(){e.$router.push({path:"/home/chatroom",query:{roomId:e.$store.state.roomInfo.roomId}})}),2e3)):document.getElementById("errorCreate").click()})),this.$store.state.socket.on("Num",(function(t){e.$store.state.roomInfo.members=t.num})),this.$store.state.socket.on("updateUser",(function(t){1==t.key?(e.$store.state.oneself.id=t.id,e.$store.state.oneself.name=t.name,e.$store.state.oneself.headPortrait=t.face,e.$store.state.oneself.intro=t.info,e.$store.state.oneself.country=t.country,e.$store.state.oneself.phone=t.phone,e.$store.state.oneself.email=t.email,e.$store.state.oneself.time=t.time,e.$store.state.socket.emit("updateChatRecord",{url:e.$store.state.roomInfo.roomId,admin:parseInt(e.$store.state.roomInfo.roomId)}),e.$message({message:"更新个人信息成功",type:"success"})):e.$message({message:"更新个人信息失败",type:"error"})})),this.$store.state.socket.on("changeHome",(function(t){1==t.key?(e.$store.state.socket.emit("updateRoom",{home_url:e.$store.state.roomInfo.roomId,admin_id:parseInt(e.$store.state.roomInfo.roomId)}),e.$message({message:"更新房间信息成功",type:"success"})):e.$message({message:"更新房间信息失败",type:"error"})}))}}),h=p,g=(o("5acb"),Object(c["a"])(h,f,u,!1,null,"4ce462e6",null)),v=g.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("header",[e._v("Create Group")]),o("div",{staticClass:"search"},[o("el-input",{attrs:{placeholder:"这个框没啥用..还原设计稿...","suffix-icon":"el-icon-search"}})],1),o("label",{staticClass:"photo",attrs:{for:"photoFile"}},[o("div",{staticClass:"photo-container"},[o("span",{staticClass:"tip"},[e._v("Photo")]),o("el-button",{attrs:{icon:"el-icon-picture-outline",circle:""}}),o("div",{domProps:{innerHTML:e._s(e.photoTips)}})],1)]),o("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"photoFile"},on:{change:e.checkFile}}),o("label",[o("div",{staticClass:"info"},[o("span",{staticClass:"tip"},[e._v("Name")]),o("el-input",{attrs:{placeholder:"Group Name",clearable:""},model:{value:e.GroupInfo.name,callback:function(t){e.$set(e.GroupInfo,"name",t)},expression:"GroupInfo.name"}})],1)]),o("label",[o("div",{staticClass:"info"},[o("span",{staticClass:"tip"},[e._v("Topic(optional)")]),o("el-input",{attrs:{placeholder:"Group Topic",clearable:""},model:{value:e.GroupInfo.topic,callback:function(t){e.$set(e.GroupInfo,"topic",t)},expression:"GroupInfo.topic"}})],1)]),o("label",[o("div",{staticClass:"info"},[o("span",{staticClass:"tip"},[e._v("Description")]),o("el-input",{attrs:{placeholder:"Group Description",clearable:""},model:{value:e.GroupInfo.description,callback:function(t){e.$set(e.GroupInfo,"description",t)},expression:"GroupInfo.description"}})],1)]),o("div",{staticClass:"submit"},[o("el-button",{attrs:{type:"primary"},on:{click:e.createGroup}},[e._v(e._s(e.buttonInfo))])],1)])},b=[],I=(o("baa5"),o("498a"),{data:function(){return{buttonInfo:"Create group",GroupInfo:{photo:"",name:"",topic:"",description:""},photoTips:"You can upload jpg. gif or png files.<br>Max file size 3mb."}},methods:{checkFile:function(){var e=document.getElementById("photoFile").value,t=e.substring(e.lastIndexOf(".")).toLowerCase();this.photoTips=".jpg"==t||".gif"==t||".png"==t?"Head image type meets the requirements":"Wrong head image type, need jpg. gif or png files"},createGroup:function(){if(""==this.GroupInfo.name.trim()||""==this.GroupInfo.topic.trim()||""==this.GroupInfo.description.trim()||""==document.getElementById("photoFile").value)this.buttonInfo="Infomation empty!";else{var e=document.getElementById("photoFile").files[0],t=new FileReader;t.readAsDataURL(e);var o=this,s=document.getElementById("photoFile").value,a=s.substring(s.lastIndexOf(".")).toLowerCase();a=a.substr(1),t.onload=function(){console.log(this.result),o.$store.state.socket.emit("create",{tag:a,home_face:this.result,home_name:o.GroupInfo.name,home_topic:o.GroupInfo.topic,home_info:o.GroupInfo.description,admin_id:parseInt(o.$store.state.oneself.id),url:o.$store.state.oneself.id}),o.buttonInfo="Create group"}}}},mounted:function(){}}),$=I,C=(o("dde8"),Object(c["a"])($,y,b,!1,null,"17084198",null)),_=C.exports,k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"main clearfix",style:e.mainWidth},[o("header",[o("div",{staticClass:"group-theme-info clearfix"},[o("div",{staticClass:"theme-photo"},[o("img",{attrs:{src:e.$store.state.roomInfo.face,alt:"房间头像"}})]),o("div",{staticClass:"theme-name"},[e._v(e._s(e.$store.state.roomInfo.name))]),o("br"),o("div",{staticClass:"theme-name",staticStyle:{color:"rgb(178,184,190)"}},[e._v(e._s(e.$store.state.roomInfo.members)+"members · "+e._s(e.$store.state.roomInfo.topic))])]),o("div",{staticClass:"tools"},[o("i",{staticClass:"el-icon-search",on:{click:e.toggleSearch}}),o("i",{staticClass:"el-icon-s-custom",on:{click:function(t){return e.unfold("share")}}}),o("i",{staticClass:"el-icon-s-operation",on:{click:function(t){e.submenuFlag=!e.submenuFlag}}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.submenuFlag,expression:"submenuFlag"}],staticClass:"submenu",staticStyle:{"z-index":"999"},attrs:{tabindex:"2"},on:{blur:e.disappear}},[o("div",{staticStyle:{"margin-bottom":"15px"},on:{click:function(t){return e.unfold("room")}}},[o("span",[e._v("Mute")]),o("i",{staticClass:"el-icon-set-up"})]),o("div",{on:{click:e.deleteRoom}},[o("span",[e._v("Delete")]),o("i",{staticClass:"el-icon-delete"})])])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.searchFlag,expression:"searchFlag"}],staticClass:"search-container",style:e.searchHeight},[o("el-input",{attrs:{placeholder:"Search this chat","suffix-icon":"el-icon-search"},model:{value:e.searchChatInfo,callback:function(t){e.searchChatInfo=t},expression:"searchChatInfo"}})],1),o("div",{staticClass:"msg-container",style:e.infoHeight},[o("ul",e._l(e.search(e.$store.state.chatRecord),(function(t,s){return o("li",{key:s,staticClass:"clearfix",staticStyle:{"z-index":"10"}},[o("div",{class:[t.id==e.$store.state.oneself.id?"msg-self":"msg-others"]},[o("div",{staticClass:"portrait"},[o("img",{attrs:{src:t.face,alt:"头像"}})]),o("div",{staticClass:"msg"},[o("span",{staticStyle:{color:"rgb(47,52,67)"}},[e._v(e._s(t.name))]),o("br"),e._v(e._s(t.info)),o("br"),e._v(e._s(t.time))])])])})),0)]),o("div",{staticClass:"msg-send"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputMsg,expression:"inputMsg"}],attrs:{type:"text",placeholder:e.sendMsgTip},domProps:{value:e.inputMsg},on:{input:function(t){t.target.composing||(e.inputMsg=t.target.value)}}}),o("div",{staticClass:"btns"},[o("i",{staticClass:"el-icon-picture-outline-round expression"}),o("i",{staticClass:"el-icon-paperclip share",on:{click:e.copyUrl}}),o("el-button",{attrs:{type:"primary",icon:"el-icon-s-promotion",circle:""},on:{click:e.sendMsg}})],1)])]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.rightFlag,expression:"rightFlag"}],staticClass:"right",style:e.rightWidth},[o("header",[o("i",{staticClass:"el-icon-arrow-left",on:{click:e.fold}})]),e.shareOrRoomFlag?o("div",{staticClass:"roomInfo"},[o("div",{staticClass:"container"},[o("div",[o("img",{staticStyle:{width:"100%"},attrs:{src:e.$store.state.roomInfo.face,alt:""}})]),o("div",[o("span",{staticStyle:{display:"inline-block","margin-bottom":"8px"}},[e._v(e._s(e.$store.state.roomInfo.name))]),o("br"),o("span",{staticStyle:{display:"inline-block",color:"rgb(178, 184, 190)","font-size":"13px"}},[e._v(e._s(e.$store.state.roomInfo.members)+"members · "+e._s(e.$store.state.roomInfo.topic))])])]),o("footer",[o("label",{attrs:{for:"modifyPhotoFile"}},[o("div",{staticClass:"photo-container"},[o("span",{staticClass:"tip"},[e._v("Photo")]),e._m(0),o("br"),o("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(e.modifyPhotoTips))])])]),o("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"modifyPhotoFile"},on:{change:e.checkFile}}),o("div",{staticClass:"info"},[o("span",{staticClass:"tip"},[e._v("Name")]),o("el-input",{attrs:{placeholder:this.$store.state.roomInfo.name,clearable:""},model:{value:e.modifyRoom.name,callback:function(t){e.$set(e.modifyRoom,"name",t)},expression:"modifyRoom.name"}})],1),o("div",{staticClass:"info"},[o("span",{staticClass:"tip"},[e._v("Topic(optional)")]),o("el-input",{attrs:{placeholder:this.$store.state.roomInfo.topic,clearable:""},model:{value:e.modifyRoom.topic,callback:function(t){e.$set(e.modifyRoom,"topic",t)},expression:"modifyRoom.topic"}})],1),o("div",{staticClass:"info"},[o("span",{staticClass:"tip"},[e._v("Description")]),o("el-input",{staticStyle:{"background-color":"rgb(237,238,246)"},attrs:{type:"textarea",rows:4,placeholder:this.$store.state.roomInfo.description},model:{value:e.modifyRoom.description,callback:function(t){e.$set(e.modifyRoom,"description",t)},expression:"modifyRoom.description"}})],1),o("el-button",{attrs:{type:"primary"},on:{click:e.modifyGroup}},[e._v(e._s(e.buttonInfo))])],1)]):o("div",{staticClass:"shareInfo"},[o("div",{staticClass:"container"},[o("div",{staticClass:"roomTitle"},[o("div",{staticClass:"portrait"},[o("img",{staticStyle:{width:"100%"},attrs:{src:e.$store.state.roomInfo.name,alt:""}})]),o("div",[e._v(e._s(e.$store.state.roomInfo.name))]),o("a",{staticStyle:{display:"inline-block"},attrs:{href:"javascripts:;"},on:{click:e.copyUrl}},[e._v(" link "),o("i",{staticClass:"el-icon-paperclip share"})])]),o("div",{staticStyle:{height:"2px",width:"100%","background-color":"rgb(245,246,250)"}}),o("div",{staticClass:"roomIntro",staticStyle:{color:"rgb(178,184,196)"}},[e._v(" "+e._s(e.$store.state.roomInfo.description)+" ")])]),o("footer",[o("div",{staticClass:"shareContent"},[o("ul",[o("li",{on:{click:function(t){return e.share("qq")}}},[e._v("QQ")]),o("li",{on:{click:function(t){return e.share("qzone")}}},[e._v("QQ空间")])])])])])])])},x=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",[o("i",{staticClass:"el-icon-picture-outline"})])}],w=(o("4de4"),o("caad"),o("2532"),{data:function(){return{mainWidth:{width:"100%"},rightWidth:{width:"0%"},submenuFlag:!1,rightFlag:!1,shareOrRoomFlag:!1,inputMsg:"",sendMsgTip:"Type your message...",searchFlag:!1,searchHeight:{height:"0vh"},infoHeight:{height:"76vh"},searchChatInfo:"",buttonInfo:"Modify",modifyPhotoTips:"You can upload jpg. gif or png files.Max file size 3mb.",modifyRoom:{name:"",topic:"",description:""}}},methods:{deleteRoom:function(){this.$store.state.oneself.id!=this.$store.state.roomInfo.roomId?this.$message({message:"你没有权限！",type:"error"}):this.open()},copyUrl:function(){var e=document.createElement("input");e.type="text",e.value=window.location.href,document.body.appendChild(e),e.select(),document.execCommand("Copy"),document.body.removeChild(e),this.$message({message:"复制链接成功！分享给你的好友吧！",type:"success"})},checkFile:function(){var e=document.getElementById("modifyPhotoFile").value,t=e.substring(e.lastIndexOf(".")).toLowerCase();this.modifyPhotoTips=".jpg"==t||".gif"==t||".png"==t?"Head image type meets the requirements":"Wrong head image type, need jpg. gif or png files"},modifyGroup:function(){if(this.$store.state.oneself.id==this.$store.state.roomInfo.roomId)if(""==this.modifyRoom.name.trim()||""==this.modifyRoom.topic.trim()||""==this.modifyRoom.description.trim()||""==document.getElementById("modifyPhotoFile").value)this.buttonInfo="Infomation empty!";else{console.log(this.modifyRoom.name),console.log(this.modifyRoom.topic);var e=document.getElementById("modifyPhotoFile").files[0],t=new FileReader;t.readAsDataURL(e);var o=this,s=document.getElementById("modifyPhotoFile").value,a=s.substring(s.lastIndexOf(".")).toLowerCase();a=a.substr(1),t.onload=function(){o.$store.state.socket.emit("changeHome",{tag:a,home_face:this.result,home_name:o.modifyRoom.name,home_topic:o.modifyRoom.topic,home_info:o.modifyRoom.description,admin_id:parseInt(o.$store.state.oneself.id),url:o.$store.state.oneself.id}),o.buttonInfo="Modify",o.modifyRoom.name="",o.modifyRoom.topic="",o.modifyRoom.description=""}}else this.$message({type:"error",message:"你没有权限"})},share:function(e){"qzone"==e?window.open("https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+window.location.href+"?sharesource=qzone&title=匿名聊天室&pics=图片地址&summary=一起来聊天吧"):"qq"==e&&window.open("http://connect.qq.com/widget/shareqq/index.html?url="+window.location.href+"?sharesource=qzone&title=匿名聊天室&pics=图片地址&summary=一起来聊天吧")},unfold:function(e){this.mainWidth.width="80%",this.rightWidth.width="20%",this.rightFlag=!0,this.shareOrRoomFlag="room"==e},fold:function(){this.mainWidth.width="100%",this.rightWidth.width="0%",this.rightFlag=!1},disappear:function(){this.submenuFlag=!1},sendMsg:function(){var e=this;""==this.inputMsg.trim()?this.sendMsgTip="Information cannot be empty":(this.$store.state.socket.emit("new_message",{user_id:parseInt(this.$store.state.oneself.id),user_name:this.$store.state.oneself.name,message:this.inputMsg,room:this.$store.state.roomInfo.url}),setTimeout((function(){e.$store.state.socket.emit("updateChatRecord",{url:e.$store.state.roomInfo.roomId,admin:parseInt(e.$store.state.roomInfo.roomId)})}),50),this.sendMsgTip="Type your message..."),this.inputMsg=""},toggleSearch:function(){this.searchFlag=!this.searchFlag,this.searchFlag?(this.searchHeight.height="10vh",this.infoHeight.height="66vh"):(this.searchHeight.height="0vh",this.infoHeight.height="76vh")},open:function(){var e=this;this.$confirm("此操作将永久删除该房间, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$store.state.socket.emit("DeleteRoom",{room:e.$store.state.roomInfo.roomId})})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},search:function(e){var t=this,o=e.filter((function(e){if(e.info.includes(t.searchChatInfo))return e}));return o},routeChangeRoom:function(){console.log(this.$route.query.roomId),this.$store.state.socket.emit("leave",{room:this.$store.state.roomInfo.roomId,user_id:this.$store.state.oneself.id,user_name:this.$store.state.oneself.name}),"1"==this.$route.query.roomId?this.$store.state.socket.emit("join_default",{user_id:this.$store.state.oneself.id}):this.$store.state.socket.emit("join",{user_name:this.$store.state.oneself.name,room:this.$route.query.roomId})}},watch:{"$store.state.chatRecord":function(){setTimeout((function(){var e=document.getElementsByClassName("msg-container")[0];e.scrollTop=e.scrollHeight}),10)},$route:"routeChangeRoom"},mounted:function(){var e=this;setTimeout((function(){var e=document.getElementsByClassName("msg-container")[0];e.scrollTop=e.scrollHeight}),10),this.$store.state.socket.on("DeleteRoom",(function(t){e.$message({type:"info",message:"所在房间已经被删除..前往默认房间中.."}),setTimeout((function(){e.$router.push({path:"/home/chatroom",query:{roomId:1}})}),2e3)}))}}),R=w,F=(o("457b"),Object(c["a"])(R,k,x,!1,null,"54cde7e1",null)),S=F.exports,T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"profile-container"},[o("h2",[e._v("ProFile")]),o("el-input",{attrs:{placeholder:"这个框没用..还原设计稿","suffix-icon":"el-icon-search"},model:{value:e.searchSelfInfo,callback:function(t){e.searchSelfInfo=t},expression:"searchSelfInfo"}}),o("div",{staticClass:"personalInfo"},[o("div",{staticClass:"portrait"},[o("img",{attrs:{id:"test",src:this.$store.state.oneself.headPortrait}})]),o("div",[o("div",{staticClass:"name"},[e._v(e._s(e.$store.state.oneself.name))]),o("div",{staticClass:"intro"},[e._v(e._s(e.$store.state.oneself.intro))])])]),o("div",{staticClass:"minorInfo"},[o("ul",[o("li",[o("div",[o("span",[e._v("Country")]),o("br"),e._v(e._s(e.$store.state.oneself.country))]),o("i",{staticClass:"el-icon-office-building"})]),o("li",[o("div",[o("span",[e._v("Phone")]),o("br"),e._v(e._s(e.$store.state.oneself.phone))]),o("i",{staticClass:"el-icon-phone-outline"})]),o("li",[o("div",[o("span",[e._v("Email")]),o("br"),e._v(e._s(e.$store.state.oneself.email))]),o("i",{staticClass:"el-icon-message"})]),o("li",[o("div",[o("span",[e._v("Time")]),o("br"),e._v(e._s(e.$store.state.oneself.time))]),o("i",{staticClass:"el-icon-timer"})])])])],1),o("div",{staticClass:"setting-container"},[e._m(0),o("div",{staticClass:"main"},[o("div",{staticClass:"main-container"},[e._m(1),o("ul",[o("li",[o("span",{staticStyle:{color:"rgb(143,143,155)","font-weight":"bold"}},[e._v("Avator")]),o("br"),o("label",{attrs:{for:"avatorFile"}},[o("div",{staticClass:"avator-container",staticStyle:{color:"rgb(179,184,191)"},attrs:{for:"avatorFile"}},[o("el-button",{attrs:{icon:"el-icon-picture-outline",circle:""}}),o("div",{staticStyle:{"font-size":"14px"},domProps:{innerHTML:e._s(e.avatorTip)}})],1)]),o("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"avatorFile"},on:{change:e.checkFile}})]),o("li",[o("span",{staticStyle:{color:"rgb(143,143,155)","font-weight":"bold"}},[e._v("Name")]),o("br"),o("el-input",{attrs:{placeholder:this.$store.state.oneself.name,clearable:""},model:{value:e.modifyName,callback:function(t){e.modifyName=t},expression:"modifyName"}})],1),o("li",[o("span",{staticStyle:{color:"rgb(143,143,155)","font-weight":"bold"}},[e._v("Phone")]),o("br"),o("el-input",{attrs:{placeholder:this.$store.state.oneself.phone,clearable:""},model:{value:e.modifyPhone,callback:function(t){e.modifyPhone=t},expression:"modifyPhone"}})],1),o("li",[o("span",{staticStyle:{color:"rgb(143,143,155)","font-weight":"bold"}},[e._v("Email")]),o("br"),o("el-input",{attrs:{placeholder:this.$store.state.oneself.email,clearable:""},model:{value:e.modifyEmail,callback:function(t){e.modifyEmail=t},expression:"modifyEmail"}})],1)]),o("footer",{staticClass:"modify"},[o("el-button",{attrs:{type:"primary"},on:{click:e.updatePersonInfo}},[e._v(e._s(e.buttonInfo))])],1)])])])])},E=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("div",[o("h3",[e._v("Settings")]),o("span",[e._v("Update your profile details")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("div",[o("h4",[e._v("Account")]),o("span",[e._v("Update your profile details")])])])}],P={data:function(){return{buttonInfo:"Modify",searchSelfInfo:"",modifyName:"",modifyEmail:"",modifyPhone:"",avatorTip:"You can upload jpg. gif or png files.<br>Max file size 3mb."}},methods:{checkFile:function(){var e=document.getElementById("avatorFile").value,t=e.substring(e.lastIndexOf(".")).toLowerCase();if(".jpg"==t||".gif"==t||".png"==t){this.avatorTip="Head image type meets the requirements";var o=document.getElementById("avatorFile").files[0],s=new FileReader;s.readAsDataURL(o),s.onload=function(){document.getElementById("test").src=this.result}}else this.avatorTip="Wrong head image type, need jpg. gif or png files"},updatePersonInfo:function(){if(""==this.modifyName.trim()||""==this.modifyEmail.trim()||""==this.modifyPhone.trim()||""==document.getElementById("avatorFile").value)this.buttonInfo="Infomation empty!";else{var e=document.getElementById("avatorFile").value,t=e.substring(e.lastIndexOf(".")).toLowerCase();t=t.substr(1);var o=document.getElementById("avatorFile").files[0],s=new FileReader;s.readAsDataURL(o);var a=this;s.onload=function(){console.log(t),document.getElementById("test").src=this.result,a.$store.state.socket.emit("updateUser",{tag:t,face:this.result,id:parseInt(a.$store.state.oneself.id),phone:a.modifyPhone,email:a.modifyEmail,name:a.modifyName}),a.modifyName="",a.modifyEmail="",a.modifyPhone="",a.avatorTip="You can upload jpg. gif or png files.<br>Max file size 3mb.",a.buttonInfo="Modify"}}}},mounted:function(){}},A=P,M=(o("641f"),Object(c["a"])(A,T,E,!1,null,"17392db8",null)),q=M.exports;s["default"].use(d["a"]);var j=[{path:"/",redirect:"/home"},{path:"/home",component:v,redirect:"/home/personal",children:[{path:"edit",component:_},{path:"chatroom",component:S,name:"chat"},{path:"personal",component:q}]}],O=new d["a"]({routes:j}),X=O,D=o("2f62");s["default"].use(D["a"]);var B=new D["a"].Store({state:{socket:null,oneself:{id:"123456",name:"Matthew Wiggins",headPortrait:"../assets/bird.png",intro:"Bootstrap is an open source toolkit fordeveloping web with HTML.",country:"China",phone:"136XXXXXXXX",email:"850839565@qq.com",time:"21:07"},roomInfo:{roomId:"1",face:"",name:"Bootstrap Themes",members:35,topic:"HTML,CSS,and Javascript Help",description:"感觉很烦，歪比歪比，外币八部",url:""},chatRecord:[{face:"",time:"21:28",id:"123",name:"张三",info:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子"},{face:"",time:"21:28",id:"456",name:"李四",info:"今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子"},{face:"",time:"21:28",id:"456",name:"李四",info:"123456哈哈"},{face:"",time:"21:28",id:"123456",name:"cjx",info:"今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子"},{face:"",time:"21:28",id:"123456",name:"cjx",info:"太难了太难了爷要晕了"},{face:"",time:"21:28",id:"123",name:"张三",info:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子"},{face:"",time:"21:28",id:"456",name:"李四",info:"今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子"},{face:"",time:"21:28",id:"456",name:"李四",info:"123456哈哈"},{face:"",time:"21:28",id:"123456",name:"cjx",info:"今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子今天是个好日子"},{face:"",time:"21:28",id:"123456",name:"cjx",info:"太难了太难了爷要晕了"}]},mutations:{},actions:{},modules:{}}),H=(o("9e1f"),o("450d"),o("6ed5")),N=o.n(H),G=(o("0fb7"),o("f529")),z=o.n(G),V=(o("f225"),o("89a9")),K=o.n(V),U=(o("10cb"),o("f3ad")),Y=o.n(U),W=(o("de31"),o("c69e")),L=o.n(W),Q=(o("a769"),o("5cc3")),Z=o.n(Q),J=(o("adec"),o("3d2d")),ee=o.n(J),te=(o("1951"),o("eedf")),oe=o.n(te);s["default"].use(oe.a),s["default"].use(ee.a),s["default"].use(Z.a),s["default"].use(L.a),s["default"].use(Y.a),s["default"].use(K.a),s["default"].prototype.$message=z.a,s["default"].prototype.$confirm=N.a.confirm,new s["default"]({router:X,store:B,render:function(e){return e(m)}}).$mount("#app")},"5acb":function(e,t,o){"use strict";var s=o("40d9"),a=o.n(s);a.a},"641f":function(e,t,o){"use strict";var s=o("da99"),a=o.n(s);a.a},"85ec":function(e,t,o){},b0e7:function(e,t,o){},bcde:function(e,t,o){},da99:function(e,t,o){},dde8:function(e,t,o){"use strict";var s=o("b0e7"),a=o.n(s);a.a}});
//# sourceMappingURL=app.29d5224f.js.map