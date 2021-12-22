"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64579],{36278:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n={key:"v-46274610",path:"/devices/S1.html",title:"Ubisys S1 control via MQTT",lang:"en-US",frontmatter:{title:"Ubisys S1 control via MQTT",description:"Integrate your Ubisys S1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-09-08T21:16:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Configuring Inputs",slug:"configuring-inputs",children:[]},{level:3,title:"(Re-)Binding and/or Decoupling",slug:"re-binding-and-or-decoupling",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric, meter endpoint)",slug:"power-numeric-meter-endpoint",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/S1.md",git:{updatedTime:1640191596e3}}},96591:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var n=i(66252);const o=(0,n.uE)('<h1 id="ubisys-s1" tabindex="-1"><a class="header-anchor" href="#ubisys-s1" aria-hidden="true">#</a> Ubisys S1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>S1</td></tr><tr><td>Vendor</td><td>Ubisys</td></tr><tr><td>Description</td><td>Power switch S1</td></tr><tr><td>Exposes</td><td>switch (state), power, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/S1.jpg" alt="Ubisys S1"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="configuring-inputs" tabindex="-1"><a class="header-anchor" href="#configuring-inputs" aria-hidden="true">#</a> Configuring Inputs</h3>',4),s=(0,n.Uk)("In case the input(s) need to be reconfigured (e.g. to use stationary switches instead of momentary ones or vice versa) this can be done in the same way as "),a=(0,n.Uk)("it is being done for the ubisys C4"),d=(0,n.Uk)("."),r=(0,n._)("h3",{id:"re-binding-and-or-decoupling",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#re-binding-and-or-decoupling","aria-hidden":"true"},"#"),(0,n.Uk)(" (Re-)Binding and/or Decoupling")],-1),l=(0,n.Uk)("Also see "),c=(0,n.Uk)("the ubisys C4 documentation"),u=(0,n.Uk)(", example use cases:"),h=(0,n._)("ul",null,[(0,n._)("li",null,"Use the second input to control a different Zigbee device (S1-R only, S1 only has one input)"),(0,n._)("li",null,"Completely decouple the input(s) from the local load")],-1),p=(0,n._)("p",null,"When decoupled, 'action' will be published when pressing the attached switch button.",-1),g=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),m=(0,n.Uk)("This device supports OTA updates, for more information see "),b=(0,n.Uk)("OTA updates"),v=(0,n.Uk)("."),f=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),w=(0,n.Uk)("How to use device type specific configuration"),y=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric-meter-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-meter-endpoint" aria-hidden="true">#</a> Power (numeric, meter endpoint)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle</code>, <code>on</code>, <code>off</code>, <code>recall_*</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),k={},_=(0,i(83744).Z)(k,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n._)("p",null,[s,(0,n.Wm)(i,{to:"/devices/C4.html#configuring-inputs"},{default:(0,n.w5)((()=>[a])),_:1}),d]),r,(0,n._)("p",null,[l,(0,n.Wm)(i,{to:"/devices/C4.html#binding"},{default:(0,n.w5)((()=>[c])),_:1}),u]),h,p,g,(0,n._)("p",null,[m,(0,n.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[b])),_:1}),v]),f,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[w])),_:1})])]),y],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,n]of t)e[i]=n;return e}}}]);