(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{375:function(t,e,n){},380:function(t,e,n){"use strict";var o=n(375);n.n(o).a},381:function(t,e,n){},382:function(t,e,n){"use strict";n(206);var o=n(383),r={name:"VoiceBtn",props:{emoji:{default:"🌟",type:String},link:{default:!1,type:Boolean}},data:function(){return{twe_para:{base:"https://emoji.lonelyion.com",folder:"/svg",ext:".svg"},transition:"",width:"0",timer:null,progress:0,playing:!1}},computed:{v_btn_classes:function(){return{"grey--text text--lighten-2 vo-btn-bg-dark":!this.link&&this.$vuetify.theme.dark,"vo-btn-bg-light":!this.link&&!this.$vuetify.theme.dark,playing:this.playing}},emoji_url:function(){var t=o.a.parse(this.emoji,this.twe_para);return/<img[^>]+src="?([^"\s]+)"?\s*\/>/g.exec(t)[1]}}},l=(n(380),n(50)),c=n(95),d=n.n(c),v=n(204),h=n(395),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[n("v-btn",{staticClass:"ma-1 pa-2 vo-btn",class:[t.v_btn_classes],style:{"--hover-content":"url('"+t.emoji_url+"')","--progress":t.progress+"%","--start-percent":t.progress-5+"%"},attrs:{elevation:o?6:2,rounded:"",height:"max-content","min-height":"36px"}},[n("div",{staticStyle:{"z-index":"2"}},[t._t("default")],2)])]}}],null,!0)})}),[],!1,null,"487b5110",null);e.a=component.exports;d()(component,{VBtn:v.a,VHover:h.a})},387:function(t){t.exports=JSON.parse('{"groups":[{"group_name":"daily","group_description":{"zh":"日常","en":"~","ja":"~"},"voice_list":[{"name":"sio-001","path":"sio-001.aac","description":{"zh":"（打招呼）OK，嘿嘿嘿!","en":"OK, heyheyhey!","ja":"OK、へへへ！"}},{"name":"sio-008","path":"sio-008.mp3","description":{"zh":"恭汐发财!","en":"~","ja":"~"}},{"name":"sio-009","path":"sio-009.mp3","description":{"zh":"新年快乐!","en":"~","ja":"~"}},{"name":"sio-010","path":"sio-010.mp3","description":{"zh":"百~年~好~合~","en":"~","ja":"~"}}]},{"group_name":"actmoe","group_description":{"zh":"名场景","en":"~","ja":"~"},"voice_list":[{"name":"sio-002","path":"sio-002.mp3","description":{"zh":"啊，我女朋友回来啦","en":"AH, my girlfriend is back","ja":"あ、彼女が帰ってきた"}},{"name":"sio-003","path":"sio-003.mp3","description":{"zh":"mei酱!欢迎回家","en":"Mei-chan! Welcome back!","ja":"めっちゃん！お帰り！"}},{"name":"sio-004","path":"sio-004.mp3","description":{"zh":"嗯~~mei酱","en":"EH~~Mei-chan","ja":"ん～～めっちゃん"}},{"name":"sio-005","path":"sio-005.mp3","description":{"zh":"她回来了，没什么事","en":"She is back. Nothing happened","ja":"彼女が帰ってきた。何も起こらなかった"}}]},{"group_name":"learnchinese","group_description":{"zh":"学中文","en":"Learning Chinese","ja":"~"},"voice_list":[{"name":"sio-006","path":"sio-006.mp3","description":{"zh":"（顺口溜）吃葡萄不吐葡。。。","en":"~","ja":"~"}},{"name":"sio-007","path":"sio-007.mp3","description":{"zh":"（顺口溜）四四四，十四十。。。","en":"~","ja":"~"}}]},{"group_name":"mei_chan","group_description":{"zh":"mei酱","en":"mei chan","ja":"めいちゃん"},"voice_list":[]}]}')},388:function(t,e,n){},389:function(t,e,n){},390:function(t,e,n){"use strict";var o=n(381);n.n(o).a},391:function(t,e,n){},397:function(t,e,n){"use strict";n.r(e);n(13),n(24),n(60);var o=n(17),r=(n(97),n(7),n(4),n(42),n(359),n(387)),l=(n(51),{name:"DevWarning",data:function(){return{dialog:!1}},mounted:function(){window.location.host.startsWith("dev")&&(this.dialog=!0)},methods:{return_to_official:function(){window.location.href="https://hosimiyas.io"}}}),c=n(50),d=n(95),v=n.n(d),h=n(204),f=n(376),m=n(374),_=(n(11),n(8),n(9),n(40)),y=(n(68),n(30),n(31),n(2)),O=(n(388),n(372)),j=n(67),k=n(72),w=n(113),x=n(197),S=n(178),$=n(177),C=n(28),P=n(109),B=n(5),A=n(6),E=n(0);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var V=Object(B.a)(j.a,k.a,w.a,x.a,S.a,$.a,C.a).extend({name:"v-dialog",directives:{ClickOutside:P.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(y.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(y.a)(t,"v-dialog--active",this.isActive),Object(y.a)(t,"v-dialog--persistent",this.persistent),Object(y.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(y.a)(t,"v-dialog--scrollable",this.scrollable),Object(y.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(A.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):x.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===E.n.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(_.a)(n).find((function(t){return!t.hasAttribute("disabled")}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(O.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:L({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=L(L({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(E.f)(this.maxWidth),width:"auto"===this.width?void 0:Object(E.f)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),T=n(373),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"406px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.$t("dev.title"))+"\n    ")]),t._v(" "),n("v-card-text",[t._v("\n      "+t._s(t.$t("dev.desc"))+"\n    ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.return_to_official()}}},[t._v("\n        "+t._s(t.$t("dev.to_stable"))+"\n      ")]),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        OK\n      ")])],1)],1)],1)}),[],!1,null,null,null),z=component.exports;v()(component,{VBtn:h.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VDialog:V,VSpacer:T.a});var I=n(382),M={props:{loading:{required:!0,type:Boolean}},data:function(){return{type:"list-item-three-line"}}},N=(n(47),n(43),n(44),n(16)),H=(n(389),n(174)),W=n(71),F=n(15);function K(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function Z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?K(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):K(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R=Object(B.a)(H.a,W.a,F.a).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Z({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Z(Z({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Z({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(text,t){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(text," v-skeleton-loader__bone")},t)},genBones:function(t){var e=this,n=t.split("@"),o=Object(N.a)(n,2),r=o[0],l=o[1];return Array.from({length:l}).map((function(){return e.genStructure(r)}))},genStructure:function(t){var e=[];t=t||this.type||"";var n=this.rootTypes[t]||"";if(t===n);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);n.indexOf(",")>-1?e=this.mapBones(n):n.indexOf("@")>-1?e=this.genBones(n):n&&e.push(this.genStructure(n))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(E.k)(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),Y=Object(c.a)(M,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.loading?e("v-skeleton-loader",{attrs:{type:this.type}}):this._t("default")],2)}),[],!1,null,null,null),J=Y.exports;v()(Y,{VSkeletonLoader:R});var G=n(46),U={components:{VoiceBtn:I.a,DevWarning:z,SkeletonLoading:J},data:function(){return{data:{live:{video_link:"",title:"Undefined",img:""},timetable:{img:""},upcoming:""},icons:{close:G.e,play:G.j,stop:G.o,selection_ellipse_arrow_inside:G.m,view_parallel:G.q,repeat:G.l,shuffle:G.n,clock_outline:G.d},overlap:!1,random:!1,repeat:!1,fab:!1,groups:r.groups,now_playing:new Set,lives_loading:!0,loading:!0}},computed:{voice_host:function(){return"https://cdn.jsdelivr.net/gh/npofsi/siobutton@master/static/voices/"},dark_text:function(){return{"grey--text text--lighten-2":this.$vuetify.theme.dark}},voice_button_color:function(){return{"light-blue darken-4":this.$vuetify.theme.dark,"blue darken-1 white--text":!this.$vuetify.theme.dark}},fab_icon:function(){return[this.$vuetify.theme.dark?"white--text":"light-blue--text"]},fab_color:function(){return[this.$vuetify.theme.dark?"indigo darken-1":"white"]},speed_dial_color:function(){return[this.$vuetify.theme.dark?"lime darken-1":"lime accent-2"]},current_locale:function(){return this.$i18n.locale},overlap_text:function(){return this.$t("control.overlap")+" "+(this.overlap?this.$t("control.enabled"):this.$t("control.disabled"))},random_text:function(){return this.$t("control.random")+" "+(this.random?this.$t("control.enabled"):this.$t("control.disabled"))},repeat_text:function(){return this.$t("control.repeat")+" "+(this.repeat?this.$t("control.enabled"):this.$t("control.disabled"))}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$vuetify.theme.dark="true"===t.$store.state.dark,e.next=3,t.fetch_live_data();case 3:"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("nexttrack",(function(){t.play_random_voice()})),navigator.mediaSession.setActionHandler("previoustrack",(function(){t.play_random_voice()})),navigator.mediaSession.setActionHandler("pause",(function(){t.stop_all(),navigator.mediaSession.playbackState="paused"})));case 4:case"end":return e.stop()}}),e)})))()},methods:{fetch_live_data:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://hosimiyasio.com/api/live.php",t.$axios.get("https://hosimiyasio.com/api/live.php",{params:{}}).then((function(e){t.data.live=e.data.live,t.data.timetable=e.data.timetable})).catch((function(t){console.log(t)})).finally((function(){return t.lives_loading=!1}));case 2:case"end":return e.stop()}}),e)})))()},format_time:function(t){return n(208)(t).format("YYYY/M/DD HH:mm")},send_google_event:function(t){ga("send",{hitType:"event",eventCategory:"Audios",eventAction:"play",eventLabel:t.name+" "+t.description.zh})},play:function(t){var e=this,n=null,o=null;this.$refs.voice_btn.forEach((function(i){i.$vnode.data.key===t.name&&(n=i)})),this.overlap||this.now_playing.forEach((function(i){i.pause(),e.now_playing.delete(i),console.log(t.name,"paused before new playing")}));var r=function(){null!==o&&c(),o=setInterval((function(){var t=Number((audio.currentTime/audio.duration*100).toFixed(2));t===1/0||isNaN(t)?n.progress=0:n.progress=t}),50)},l=function(){var t=setInterval((function(){n.progress-=5,n.progress<=0&&(clearInterval(t),t=null)}),50);n.playing=!1},c=function(){clearInterval(o),o=null},audio=new Audio(this.voice_host+t.path);if(audio.load(),"mediaSession"in navigator){var d={title:this.overlap?this.$t("control.overlap_title"):t.description[this.current_locale],artist:this.$t("control.full_name"),album:this.$t("site.title")+"",artwork:[{src:"/img/media-cover.jpg",sizes:"128x128",type:"image/jpeg"}]};navigator.mediaSession.metadata=new window.MediaMetadata(d),navigator.mediaSession.playbackState="playing"}audio.addEventListener("canplay",(function(){audio.volume=1,audio.play(),e.now_playing.add(audio),e.send_google_event(t),n.playing=!0,r()})),audio.addEventListener("ended",(function(){e.repeat?(audio.play(),e.now_playing.add(audio),e.send_google_event(t),n.playing=!0,r()):e.random?e.play_random_voice():(l(),c(),e.now_playing.delete(audio))})),audio.addEventListener("pause",(function(){l(),c(),e.now_playing.delete(audio),"mediaSession"in navigator&&(navigator.mediaSession.playbackState="paused")})),this.$bus.$on("abort_play",(function(){audio.pause(),l(),c(),e.now_playing.delete(audio),delete e.audio}))},get_random_int:function(t){return Math.floor(Math.random()*Math.floor(t))},play_random_voice:function(){var t=this.groups[this.get_random_int(this.groups.length)];this.play(t.voice_list[this.get_random_int(t.voice_list.length)])},stop_all:function(){console.log("stop-all"),this.$bus.$emit("abort_play")}},head:function(){return{title:this.$t("site.title")+"🌟🐧",link:[{rel:"canonical",href:"https://hosimiyas.io"}]}}},Q=(n(390),n(357),n(207),n(1)),X=n(65);function tt(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function et(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?tt(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):tt(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var nt=["sm","md","lg","xl"],it=nt.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),at=nt.reduce((function(t,e){return t["offset"+Object(E.s)(e)]={type:[String,Number],default:null},t}),{}),ot=nt.reduce((function(t,e){return t["order"+Object(E.s)(e)]={type:[String,Number],default:null},t}),{}),st={col:Object.keys(it),offset:Object.keys(at),order:Object.keys(ot)};function lt(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var ct=new Map,ut=Q.a.extend({name:"v-col",functional:!0,props:et(et(et(et({cols:{type:[Boolean,String,Number],default:!1}},it),{},{offset:{type:[String,Number],default:null}},at),{},{order:{type:[String,Number],default:null}},ot),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,r=(e.parent,"");for(var l in n)r+=String(n[l]);var c=ct.get(r);return c||function(){var t,e;for(e in c=[],st)st[e].forEach((function(t){var o=n[t],r=lt(e,t,o);r&&c.push(r)}));var o=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!o||!n.cols},Object(y.a)(t,"col-".concat(n.cols),n.cols),Object(y.a)(t,"offset-".concat(n.offset),n.offset),Object(y.a)(t,"order-".concat(n.order),n.order),Object(y.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),ct.set(r,c)}(),t(n.tag,Object(X.a)(data,{class:c}),o)}}),pt=n(371),vt=n(396),ht=n(141),ft=n(386);function gt(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function mt(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?gt(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):gt(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var bt=["sm","md","lg","xl"],_t=["start","end","center"];function yt(t,e){return bt.reduce((function(n,o){return n[t+Object(E.s)(o)]=e(),n}),{})}var Ot=function(t){return[].concat(_t,["baseline","stretch"]).includes(t)},jt=yt("align",(function(){return{type:String,default:null,validator:Ot}})),kt=function(t){return[].concat(_t,["space-between","space-around"]).includes(t)},wt=yt("justify",(function(){return{type:String,default:null,validator:kt}})),xt=function(t){return[].concat(_t,["space-between","space-around","stretch"]).includes(t)},St=yt("alignContent",(function(){return{type:String,default:null,validator:xt}})),$t={align:Object.keys(jt),justify:Object.keys(wt),alignContent:Object.keys(St)},Ct={align:"align",justify:"justify",alignContent:"align-content"};function Pt(t,e,n){var o=Ct[t];if(null!=n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return(o+="-".concat(n)).toLowerCase()}}var Bt=new Map,At=Q.a.extend({name:"v-row",functional:!0,props:mt(mt(mt({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ot}},jt),{},{justify:{type:String,default:null,validator:kt}},wt),{},{alignContent:{type:String,default:null,validator:xt}},St),render:function(t,e){var n=e.props,data=e.data,o=e.children,r="";for(var l in n)r+=String(n[l]);var c=Bt.get(r);return c||function(){var t,e;for(e in c=[],$t)$t[e].forEach((function(t){var o=n[t],r=Pt(e,t,o);r&&c.push(r)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(y.a)(t,"align-".concat(n.align),n.align),Object(y.a)(t,"justify-".concat(n.justify),n.justify),Object(y.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),Bt.set(r,c)}(),t(n.tag,Object(X.a)(data,{staticClass:"row",class:c}),o)}}),Et=(n(96),n(391),n(70)),Dt=Q.a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),Lt=Object(B.a)(Et.a,C.a,Dt).extend({name:"v-speed-dial",directives:{ClickOutside:P.a},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(y.a)(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(y.a)(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,n=[],data={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(data.on.mouseenter=function(){return e.isActive=!0},data.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var o=0;n=(this.$slots.default||[]).map((function(b,i){return!b.tag||void 0===b.componentOptions||"v-btn"!==b.componentOptions.Ctor.options.name&&"v-tooltip"!==b.componentOptions.Ctor.options.name?(b.key=i,b):(o++,t("div",{style:{transitionDelay:.05*o+"s"},key:i},[b]))}))}var r=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},n);return t("div",data,[this.$slots.activator,r])}}),Vt=Object(c.a)(U,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":"",app:""}},[n("dev-warning"),t._v(" "),n("v-speed-dial",{attrs:{fixed:"",bottom:"",right:"",direction:"top","open-on-click":"",transition:"slide-y-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{class:t.speed_dial_color,attrs:{slot:"activator",dark:"",fab:"",hover:""},slot:"activator",model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?n("v-icon",[t._v("\n          "+t._s(t.icons.close)+"\n        ")]):n("v-icon",{attrs:{large:""}},[t._v("\n          "+t._s(t.icons.play)+"\n        ")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._v(" "),n("v-btn",{class:t.fab_color,attrs:{fab:"",small:""},on:{click:function(e){return e.stopPropagation(),t.stop_all()}}},[n("span",{staticClass:"fab-tip"},[t._v(t._s(t.$t("control.stop")))]),t._v(" "),n("v-icon",{class:t.fab_icon},[t._v("\n        "+t._s(t.icons.stop)+"\n      ")])],1),t._v(" "),n("v-btn",{class:t.fab_color,attrs:{fab:"",small:""},on:{click:function(e){return e.stopPropagation(),t.play_random_voice()}}},[n("span",{staticClass:"fab-tip"},[t._v(t._s(t.$t("control.pick_one")))]),t._v(" "),n("v-icon",{class:t.fab_icon},[t._v("\n        "+t._s(t.icons.selection_ellipse_arrow_inside)+"\n      ")])],1),t._v(" "),n("v-btn",{class:t.fab_color,attrs:{fab:"",small:"",disabled:t.random},on:{click:function(e){e.stopPropagation(),t.overlap=!t.overlap}}},[n("span",{staticClass:"fab-tip"},[t._v("\n        "+t._s(t.overlap_text)+"\n      ")]),t._v(" "),n("v-icon",{class:t.fab_icon},[t._v("\n        "+t._s(t.icons.view_parallel)+"\n      ")])],1),t._v(" "),n("v-btn",{class:t.fab_color,attrs:{fab:"",small:"",disabled:t.random},on:{click:function(e){e.stopPropagation(),t.repeat=!t.repeat}}},[n("span",{staticClass:"fab-tip"},[t._v("\n        "+t._s(t.repeat_text)+"\n      ")]),t._v(" "),n("v-icon",{class:t.fab_icon},[t._v("\n        "+t._s(t.icons.repeat)+"\n      ")])],1),t._v(" "),n("v-btn",{class:t.fab_color,attrs:{fab:"",small:"",disabled:t.overlap||t.repeat},on:{click:function(e){e.stopPropagation(),t.random=!t.random}}},[n("span",{staticClass:"fab-tip"},[t._v("\n        "+t._s(t.random_text)+"\n      ")]),t._v(" "),n("v-icon",{class:t.fab_icon},[t._v("\n        "+t._s(t.icons.shuffle)+"\n      ")])],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("v-card",{attrs:{loading:t.lives_loading}},[n("v-card-title",[n("v-icon",{staticClass:"primary--text",class:t.dark_text,staticStyle:{"margin-right":"8px"}},[t._v("\n          "+t._s(t.icons.clock_outline)+"\n        ")]),t._v("\n        "+t._s(t.$t("live.activity"))+"\n      ")],1),t._v(" "),n("SkeletonLoading",{attrs:{loading:t.lives_loading}},[n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{xs:"12",md:"6"}},[n("div",[n("div",{class:t.dark_text},[n("span",[t._v(t._s(t.$t("live.schedule")))]),t._v(" "),n("br"),t._v(" "),n("img",{attrs:{src:t.data.timetable.img,width:"100%"}})])])]),t._v(" "),n("v-col",{attrs:{xs:"12",md:"6"}},[n("div",[0!=t.data.live.code?n("div",{class:t.dark_text},[n("span",{staticClass:"warning--text"},[t._v(t._s(t.$t("live.on_air")))]),t._v(" "),n("a",{attrs:{href:t.data.live.link,content:t.data.live.title}},[t._v(t._s(t.data.live.title))]),t._v(" "),n("br"),t._v(" "),n("img",{attrs:{referrerpolicy:"noreferrer",src:t.data.live.img,width:"100%"}})]):t._e()])])],1)],1),t._v(" "),n("div",{staticClass:"notification-board",domProps:{innerHTML:t._s(t.$md.render(t.$t("live.notification")))}})],1)],1)],1),t._v(" "),t._l(t.groups,(function(e){return n("v-card",{key:e.name},[n("v-card-title",{staticClass:"headline",class:t.dark_text},[t._v("\n        "+t._s(e.group_description[t.current_locale])+"\n      ")]),t._v(" "),n("v-card-text",t._l(e.voice_list,(function(e){return n("voice-btn",{key:e.name,ref:"voice_btn",refInFor:!0,class:t.voice_button_color,nativeOn:{click:function(n){return t.play(e)}}},[t._v("\n          "+t._s(e.description[t.current_locale])+"\n        ")])})),1)],1)}))],2)],1)}),[],!1,null,"d45b9136",null);e.default=Vt.exports;v()(Vt,{VBtn:h.a,VCard:f.a,VCardText:m.b,VCardTitle:m.c,VCol:ut,VContainer:pt.a,VFlex:vt.a,VIcon:ht.a,VLayout:ft.a,VRow:At,VSpeedDial:Lt})}}]);