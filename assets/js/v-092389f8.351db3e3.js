"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[31501],{13429:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-092389f8",path:"/devices/SSS401ZB.html",title:"Feibit SSS401ZB control via MQTT",lang:"en-US",frontmatter:{title:"Feibit SSS401ZB control via MQTT",description:"Integrate your Feibit SSS401ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-04-08T17:49:06.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SSS401ZB.md",git:{updatedTime:1640191596e3}}},83900:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});const o=(0,i(66252).uE)('<h1 id="feibit-sss401zb" tabindex="-1"><a class="header-anchor" href="#feibit-sss401zb" aria-hidden="true">#</a> Feibit SSS401ZB</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SSS401ZB</td></tr><tr><td>Vendor</td><td>Feibit</td></tr><tr><td>Description</td><td>Smart 4 key scene wall switch</td></tr><tr><td>Exposes</td><td>action, switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SSS401ZB.jpg" alt="Feibit SSS401ZB"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>recall_*</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),a={},d=(0,i(83744).Z)(a,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);