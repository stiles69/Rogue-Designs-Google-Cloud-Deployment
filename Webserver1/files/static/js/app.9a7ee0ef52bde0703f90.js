webpackJsonp([0],[function(t,a,e){t.exports=e.p+"static/img/Logo-192x192.882879d.png"},,,,function(t,a,e){"use strict";a.a={data:function(){return{clipped:!1,drawer:!1,fixed:!1,miniVariant:!1,right:!1,rightDrawer:!1,title:"Rogue Designs",version:"148",items:[{icon:"home",title:"Home",target:"/"},{icon:"contact_phone",title:"Contact",target:"/contact"},{icon:"access_time",title:"Technical Support",target:"/technicalsupport"},{icon:"attach_money",title:"Website Design",target:"/website"},{icon:"money_off",title:"RaspberryPi Images",target:"/raspberrypi"}]}},name:"App"}},function(t,a,e){"use strict";a.a={name:"Home",data:function(){return{msg:"Home.vue"}}}},function(t,a,e){"use strict";a.a={name:"website",data:function(){return{msg:"Website.vue"}}}},function(t,a,e){"use strict";a.a={name:"raspberrypi",data:function(){return{msg:"Raspberrypi.vue"}}}},function(t,a,e){t.exports=e.p+"static/img/Logo-192x192.396936f.svg"},function(t,a,e){"use strict";a.a={name:"technicalsupport",data:function(){return{msg:"Technicalsupport.vue"}}}},function(t,a,e){"use strict";a.a={name:"contact",data:function(){return{items:[{headline:"EMail",subtitle:"admin@roguedesigns.us"}]}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(3),i=e(15),r=e(19),o=e(36),n=e.n(o);s.a.config.productionTip=!1,s.a.use(n.a,{theme:{primary:"#690303",secondary:"#ef9a9a",accent:"#ba6b6c",error:"#f44336",warning:"#ffeb3b",info:"#2196f3",success:"#4caf50"}}),new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},,,,function(t,a,e){"use strict";function s(t){e(16)}var i=e(4),r=e(18),o=e(1),n=s,c=o(i.a,r.a,!1,n,null,null);a.a=c.exports},function(t,a){},,function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list",t._l(t.items,function(a,s){return e("v-list-tile",{key:s,attrs:{value:"true"}},[e("v-list-tile-action",[e("router-link",{attrs:{to:a.target}},[e("v-icon",{domProps:{innerHTML:t._s(a.icon)}})],1)],1),t._v(" "),e("router-link",{attrs:{to:a.target}},[e("v-list-tile-title",{domProps:{textContent:t._s(a.title)}})],1)],1)}))],1),t._v(" "),e("v-toolbar",{attrs:{app:"",color:"primary"}},[e("v-toolbar-side-icon",{staticClass:"white--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e("v-toolbar-title",{staticClass:"white--text",domProps:{textContent:t._s(t.title)}}),t._v(" "),e("v-spacer")],1),t._v(" "),e("v-container",[e("router-view")],1),t._v(" "),e("v-footer",{staticClass:"white--text",attrs:{dark:"",color:"primary",fixed:t.fixed,app:"",height:"auto"}},[e("v-layout",{staticClass:"column align-center"},[e("span",{staticClass:"body2"},[t._v("Rogue Designs")]),t._v(" "),e("span",{staticClass:"body hidden-sm-and-down"},[t._v("Email "),e("a",{staticClass:"white--text",attrs:{href:"mailto://admin@roguedesigns.us"}},[t._v("admin@roguedesigns.us")])]),t._v(" "),e("span",{staticClass:"caption"},[t._v("© Copyright 2017 Rogue Designs Version "+t._s(t.version))])])],1)],1)},i=[],r={render:s,staticRenderFns:i};a.a=r},function(t,a,e){"use strict";var s=e(3),i=e(20),r=e(21),o=e(24),n=e(27),c=e(30),l=e(33);s.a.use(i.a),a.a=new i.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/website",name:"Website",component:o.a},{path:"/raspberrypi",name:"Raspberrypi",component:n.a},{path:"/contact",name:"Contact",component:l.a},{path:"/technicalsupport",name:"Technicalsupport",component:c.a}]})},,function(t,a,e){"use strict";function s(t){e(22)}var i=e(5),r=e(23),o=e(1),n=s,c=o(i.a,r.a,!1,n,null,null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{staticClass:"RogueComponent",attrs:{fluid:""}},[s("v-slide-y-transition",{attrs:{mode:"out-in"}},[s("v-layout",{attrs:{column:"","align-center":""}},[s("v-avatar",{staticClass:"hidden-sm-and-down",attrs:{size:"172px"}},[s("img",{attrs:{src:e(0),alt:"Rogue Designs"}})]),t._v(" "),s("v-avatar",{staticClass:"hidden-md-and-up",attrs:{size:"84px"}},[s("img",{attrs:{src:e(0),alt:"Rogue Designs"}})]),t._v(" "),s("p",{staticClass:"headline"},[t._v("Rogue Designs")]),t._v(" "),s("p",{staticClass:"title hidden-sm-and-down"},[t._v("Affordable Computer Services")]),t._v(" "),s("p",{staticClass:"subheading hidden-md-and-up"},[t._v("Affordable Computer Services")])],1)],1),t._v(" "),s("v-layout",{staticClass:"RogueLayout",attrs:{column:""}},[s("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg6:"",xl6:""}},[s("v-card",[s("v-toolbar",{attrs:{color:"primary"}},[s("v-toolbar-title",{staticClass:"white--text RogueToolbarTitle"},[t._v("Services")]),t._v(" "),s("v-spacer")],1),t._v(" "),s("v-card-title",{staticClass:"title"},[t._v("Technical Support")]),t._v(" "),s("v-card-text",{staticClass:"subheading RogueCardText"},[t._v("Affordable Technical Support for the Newton, Iowa area.")]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{round:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/technicalsupport")}}},[t._v("More")])],1),t._v(" "),s("v-divider"),t._v(" "),s("v-card-title",{staticClass:"title"},[t._v("Custom RaspberryPi Images")]),t._v(" "),s("v-card-text",{staticClass:"subheading RogueCardText"},[t._v("Custom RaspberryPi images. (i.e. Plex Media Server, Open VPN, Proxy Servers.)")]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{round:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/raspberrypi")}}},[t._v("More")])],1),t._v(" "),s("v-divider"),t._v(" "),s("v-card-title",{staticClass:"title"},[t._v("Website Design")]),t._v(" "),s("v-card-text",{staticClass:"subheading RogueCardText"},[t._v("Affordable website design. As low as $12 a year for hosting services, with your own domain.")]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{staticClass:"RogueBtn",attrs:{round:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/website")}}},[t._v("More")])],1),t._v(" "),s("v-divider")],1)],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};a.a=r},function(t,a,e){"use strict";function s(t){e(25)}var i=e(6),r=e(26),o=e(1),n=s,c=o(i.a,r.a,!1,n,"data-v-351e93de",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{staticClass:"RogueComponent",attrs:{fluid:""}},[s("v-slide-y-transition",{attrs:{mode:"out-in"}},[s("v-layout",{attrs:{column:"","align-center":""}},[s("v-avatar",{staticClass:"hidden-sm-and-down",attrs:{size:"172px"}},[s("img",{attrs:{src:e(0),alt:"Rogue Designs"}})]),t._v(" "),s("v-avatar",{staticClass:"hidden-md-and-up",attrs:{size:"84px"}},[s("img",{attrs:{src:e(0),alt:"Rogue Designs"}})]),t._v(" "),s("p",{staticClass:"headline"},[t._v("Rogue Designs")]),t._v(" "),s("p",{staticClass:"title"},[t._v("Affordable Computer Services")]),t._v(" "),s("p",{staticClass:"title RogueParagraph"},[t._v("Don't pay outrageous prices much for a website!  You can get a domain name for around $12 to $50 a year. If you host your site on Google Cloud Platform, you only pay for what you use and save money.")])],1)],1),t._v(" "),s("v-layout",{staticClass:"RogueLayout",attrs:{column:""}},[s("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg6:"",xl6:""}},[s("v-toolbar",{attrs:{color:"primary"}},[s("v-toolbar-title",{staticClass:"white--text RogueToolbarTitle"},[t._v("Website Design")])],1),t._v(" "),s("v-card",[s("v-card-title",{staticClass:"title"},[t._v("Muliple Frontends/Backends")]),t._v(" "),s("ul",{staticClass:"RogueUL subheading",staticStyle:{"list-style-type":"disc"}},[s("li",[t._v("NodeJS")]),t._v(" "),s("li",[t._v("Vue")]),t._v(" "),s("li",[t._v("GOLang")]),t._v(" "),s("li",[t._v("PHP")]),t._v(" "),s("li",[t._v("JSP")]),t._v(" "),s("li",[t._v("Database Integrations")]),t._v(" "),s("li",[t._v("Custom Components")])]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{round:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/contact")}}},[t._v("Contact")])],1),t._v(" "),s("v-divider"),t._v(" "),s("v-card-title",{staticClass:"title"},[t._v("Examples of Work")]),t._v(" "),s("ul",{staticClass:"RogueUL subheading",staticStyle:{"list-style-type":"disc"}},[s("li",[s("a",{staticClass:"RogueLink",attrs:{href:"https://www.hometown.cab"}},[t._v("Hometown Cab")])])]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{dark:"",round:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/contact")}}},[t._v("Contact")])],1)],1)],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};a.a=r},function(t,a,e){"use strict";function s(t){e(28)}var i=e(7),r=e(29),o=e(1),n=s,c=o(i.a,r.a,!1,n,"data-v-ee4b73da",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{staticClass:"RogueComponent",attrs:{fluid:""}},[s("v-slide-y-transition",{attrs:{mode:"out-in"}},[s("v-layout",{attrs:{column:"","align-center":""}},[s("v-avatar",{staticClass:"hidden-sm-and-down",attrs:{size:"172px"}},[s("img",{attrs:{src:e(8),alt:"Rogue Designs"}})]),t._v(" "),s("v-avatar",{staticClass:"hidden-md-and-up",attrs:{size:"84px"}},[s("img",{attrs:{src:e(8),alt:"Rogue Designs"}})]),t._v(" "),s("p",{staticClass:"headline"},[t._v("Rogue Designs")]),t._v(" "),s("p",{staticClass:"title hidden-sm-and-down"},[t._v("Affordable Computer Services")]),t._v(" "),s("p",{staticClass:"subheading hidden-md-and-up"},[t._v("Affordable Computer Services")])],1)],1),t._v(" "),s("v-layout",{staticClass:"RogueLayout",attrs:{column:""}},[s("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg6:"",xl6:""}},[s("v-toolbar",{attrs:{color:"primary"}},[s("v-toolbar-title",{staticClass:"white--text RogueToolbarTitle"},[t._v("RaspberryPi Images")])],1),t._v(" "),s("v-card",[s("v-card-title",{staticClass:"title"},[t._v("VPN")]),t._v(" "),s("ul",{staticClass:"subheading RogueUL",staticStyle:{"list-style-type":"disc"}},[s("li",[s("p",[t._v("Uses OpenVPN to establish a secure connection to any site you wish to go to. Tunnels trough with https so less of a chance of ISP discovering you are using a VPN.")])]),t._v(" "),s("li",[s("p",[t._v("No month cost, OpenVPN certificates are generated by the RaspberryPi.")])]),t._v(" "),s("li",[s("p",[t._v("With the FCC deregulating the ISP's, the only way to insure the same connection to your favorite websites is with a VPN (Virtual Private Network). VPN's protect you from being observed from your ISP or any hackers on the internet.")])])]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{round:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/contact")}}},[t._v("Contact")])],1),t._v(" "),s("v-divider"),t._v(" "),s("v-card-title",{staticClass:"title"},[t._v("Media Server")]),t._v(" "),s("ul",{staticClass:"subheading RogueUL",staticStyle:{"list-style-type":"disc"}},[s("li",[s("p",[t._v("Can be installed with Plex Media Server or Open Media Server. Automatically, catalog and watch all your media. Can be connected to any external USB Drive.")])]),t._v(" "),s("li",[s("p",[t._v("Plex and Open Media Server can use DLNA to stream your media.")])])]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{dark:"",round:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/contact")}}},[t._v("Contact")])],1),t._v(" "),s("v-divider"),t._v(" "),s("v-card-title",{staticClass:"title"},[t._v("Web Server")]),t._v(" "),s("ul",{staticClass:"RogueUL subheading",staticStyle:{"list-style-type":"disc"}},[s("li",[s("p",[t._v("Run your own Web Server and cut your monthly costs of GoDaddy!")])]),t._v(" "),s("li",[s("p",[t._v("Plex and Open Media Server can use DLNA to stream your media.")])]),t._v(" "),s("li",[s("p",[t._v("Stream your media collection anywhere you have a internet connection.")])])]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{dark:"",round:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/contact")}}},[t._v("Contact")])],1),t._v(" "),s("v-divider"),t._v(" "),s("v-card-title",{staticClass:"title"},[t._v("Proxy Server")]),t._v(" "),s("ul",{staticClass:"subheading RogueUL",staticStyle:{"list-style-type":"disc"}},[s("li",[s("p",[t._v("Setup a proxy server to block ads, track internet usage. Setup Blacklists to prevent children from seeing adult content.")])])]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{dark:"",round:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/contact")}}},[t._v("Contact")])],1)],1)],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};a.a=r},function(t,a,e){"use strict";function s(t){e(31)}var i=e(9),r=e(32),o=e(1),n=s,c=o(i.a,r.a,!1,n,"data-v-18743c8a",null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{staticClass:"RogueComponent",attrs:{fluid:""}},[s("v-slide-y-transition",{attrs:{mode:"out-in"}},[s("v-layout",{attrs:{column:"","align-center":""}},[s("v-avatar",{staticClass:"hidden-sm-and-down",attrs:{size:"172px"}},[s("img",{attrs:{src:e(0),alt:"Rogue Designs"}})]),t._v(" "),s("v-avatar",{staticClass:"hidden-md-and-up",attrs:{size:"84px"}},[s("img",{attrs:{src:e(0),alt:"Rogue Designs"}})]),t._v(" "),s("p",{staticClass:"headline"},[t._v("Rogue Designs")]),t._v(" "),s("p",{staticClass:"title"},[t._v("Affordable Computer Services")])],1)],1),t._v(" "),s("v-layout",{staticClass:"RogueLayout",attrs:{column:""}},[s("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg6:"",xl6:""}},[s("v-toolbar",{attrs:{color:"primary"}},[s("v-toolbar-title",{staticClass:"white--text RogueToolbarTitle"},[t._v("Technical Support")])],1),t._v(" "),s("v-card",[s("v-card-title",{staticClass:"title"},[t._v("Networking")]),t._v(" "),s("ul",{staticClass:"RogueUL subheading",staticStyle:{"list-style-type":"disc"}},[s("li",[t._v("Wireless")]),t._v(" "),s("li",[t._v("LAN")]),t._v(" "),s("li",[t._v("Virtual Private Networks")]),t._v(" "),s("li",[t._v("Optimize Your Internet Speed")]),t._v(" "),s("li",[t._v("Block Adult Websites From Children")])]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{round:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/contact")}}},[t._v("Contact")])],1),t._v(" "),s("v-divider"),t._v(" "),s("v-card-title",{staticClass:"title"},[t._v("Setups/Installations")]),t._v(" "),s("ul",{staticClass:"RogueUL subheading",staticStyle:{"list-style-type":"disc"}},[s("li",[t._v("Operating Systems Windows, MacOS, Linux")])]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{dark:"",round:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/contact")}}},[t._v("Contact")])],1),t._v(" "),s("v-divider"),t._v(" "),s("v-card-title",{staticClass:"title"},[t._v("Backups")]),t._v(" "),s("ul",{staticClass:"RogueUL subheading",staticStyle:{"list-style-type":"disc"}},[s("li",[t._v("Make sure your system is setup to automaticallty backup your files. You don't want to lose an important file because the power went out.")])]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{round:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/contact")}}},[t._v("Contact")])],1),t._v(" "),s("v-divider"),t._v(" "),s("v-card-title",{staticClass:"title"},[t._v("Video Editing")]),t._v(" "),s("ul",{staticClass:"RogueUL subheading",staticStyle:{"list-style-type":"disc"}},[s("li",[t._v("Are you having problems getting that video you took with your phone into the right format. Custom video editing support for all systems, and multiple software.")])]),t._v(" "),s("v-card-actions",{staticClass:"RogueCardActions"},[s("v-btn",{attrs:{round:"",dark:"",small:"",color:"primary"},on:{click:function(a){t.$router.push("/contact")}}},[t._v("Contact")])],1),t._v(" "),s("v-divider")],1)],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};a.a=r},function(t,a,e){"use strict";function s(t){e(34)}var i=e(10),r=e(35),o=e(1),n=s,c=o(i.a,r.a,!1,n,null,null);a.a=c.exports},function(t,a){},function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{staticClass:"RogueComponent",attrs:{fluid:""}},[s("v-slide-y-transition",{attrs:{mode:"out-in"}},[s("v-layout",{attrs:{column:"","align-center":""}},[s("v-avatar",{staticClass:"hidden-sm-and-down",attrs:{size:"172px"}},[s("img",{attrs:{src:e(0),alt:"Rogue Designs"}})]),t._v(" "),s("v-avatar",{staticClass:"hidden-md-and-up",attrs:{size:"84px"}},[s("img",{attrs:{src:e(0),alt:"Rogue Designs"}})]),t._v(" "),s("p",{staticClass:"headline"},[t._v("Rogue Designs")]),t._v(" "),s("p",{staticClass:"title hidden-sm-and-down"},[t._v("Affordable Computer Services")]),t._v(" "),s("p",{staticClass:"subheading hidden-md-and-up"},[t._v("Affordable Computer Services")])],1)],1),t._v(" "),s("v-layout",{staticClass:"RogueLayout",attrs:{column:""}},[s("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg6:"",xl6:""}},[s("v-card",[s("v-toolbar",{attrs:{color:"primary"}},[s("v-toolbar-title",{staticClass:"white--text RogueToolbarTitle"},[t._v("Contact")]),t._v(" "),s("v-spacer")],1),t._v(" "),s("v-card-title",{staticClass:"RogueCardText title"},[t._v("Feel free to contact me at my email address below.")]),t._v(" "),s("v-card-text",{staticClass:"title RogueCardText"},[s("a",{staticClass:"RogueLink",attrs:{href:"mailto:admin@roguedesigns.us"}},[t._v("admin@roguedesigns.us")])])],1)],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};a.a=r}],[11]);
//# sourceMappingURL=app.9a7ee0ef52bde0703f90.js.map