"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[43916],{43775:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-8d897cbc",path:"/devices/TS0601_thermostat_1.html",title:"TuYa TS0601_thermostat_1 control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0601_thermostat_1 control via MQTT",description:"Integrate your TuYa TS0601_thermostat_1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Max_temperature (numeric)",slug:"max-temperature-numeric",children:[]},{level:3,title:"Min_temperature (numeric)",slug:"min-temperature-numeric",children:[]},{level:3,title:"Position (numeric)",slug:"position-numeric",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Window (binary)",slug:"window-binary",children:[]},{level:3,title:"Heating (binary)",slug:"heating-binary",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Programming_mode (composite)",slug:"programming-mode-composite",children:[]},{level:3,title:"Boost_heating (binary)",slug:"boost-heating-binary",children:[]},{level:3,title:"Boost_heating_countdown (numeric)",slug:"boost-heating-countdown-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0601_thermostat_1.md",git:{updatedTime:1640191596e3}}},30044:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const i=(0,o(66252).uE)('<h1 id="tuya-ts0601-thermostat-1" tabindex="-1"><a class="header-anchor" href="#tuya-ts0601-thermostat-1" aria-hidden="true">#</a> TuYa TS0601_thermostat_1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0601_thermostat_1</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Thermostatic radiator valve</td></tr><tr><td>Exposes</td><td>battery, lock (state), max_temperature, min_temperature, position, switch (state), window, heating, climate (local_temperature, current_heating_setpoint, local_temperature_calibration, preset), programming_mode, boost_heating, boost_heating_countdown, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0601_thermostat_1.jpg" alt="TuYa TS0601_thermostat_1"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="max-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-numeric" aria-hidden="true">#</a> Max_temperature (numeric)</h3><p>Maximum temperature. Value can be found in the published state on the <code>max_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature&quot;: NEW_VALUE}</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-numeric" aria-hidden="true">#</a> Min_temperature (numeric)</h3><p>Minimum temperature. Value can be found in the published state on the <code>min_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature&quot;: NEW_VALUE}</code>. The unit of this value is <code>°C</code>.</p><h3 id="position-numeric" tabindex="-1"><a class="header-anchor" href="#position-numeric" aria-hidden="true">#</a> Position (numeric)</h3><p>Position. Value can be found in the published state on the <code>position</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="window-binary" tabindex="-1"><a class="header-anchor" href="#window-binary" aria-hidden="true">#</a> Window (binary)</h3><p>Window status closed or open . Value can be found in the published state on the <code>window</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>CLOSED</code> window is ON, if <code>OPEN</code> OFF.</p><h3 id="heating-binary" tabindex="-1"><a class="header-anchor" href="#heating-binary" aria-hidden="true">#</a> Heating (binary)</h3><p>Device valve is open or closed (heating or not). Value can be found in the published state on the <code>heating</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> heating is ON, if <code>OFF</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>current_heating_setpoint</code>, <code>local_temperature_calibration</code>, <code>preset</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: MANUAL MODE ☝ - In this mode, the device executes manual temperature setting. When the set temperature is lower than the &quot;minimum temperature&quot;, the valve is closed (forced closed). AUTO MODE ⏱ - In this mode, the device executes a preset week programming temperature time and temperature. ON - In this mode, the thermostat stays open OFF - In this mode, the thermostat stays closed. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>auto</code>, <code>manual</code>, <code>off</code>, <code>on</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>.</li></ul><h3 id="programming-mode-composite" tabindex="-1"><a class="header-anchor" href="#programming-mode-composite" aria-hidden="true">#</a> Programming_mode (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;undefined&quot;: {&quot;monday_schedule&quot;: VALUE, &quot;tuesday_schedule&quot;: VALUE, &quot;wednesday_schedule&quot;: VALUE, &quot;thursday_schedule&quot;: VALUE, &quot;friday_schedule&quot;: VALUE, &quot;saturday_schedule&quot;: VALUE, &quot;sunday_schedule&quot;: VALUE}}</code></p><ul><li><code>monday_schedule</code> (text): undefined.</li><li><code>tuesday_schedule</code> (text): undefined.</li><li><code>wednesday_schedule</code> (text): undefined.</li><li><code>thursday_schedule</code> (text): undefined.</li><li><code>friday_schedule</code> (text): undefined.</li><li><code>saturday_schedule</code> (text): undefined.</li><li><code>sunday_schedule</code> (text): undefined.</li></ul><h3 id="boost-heating-binary" tabindex="-1"><a class="header-anchor" href="#boost-heating-binary" aria-hidden="true">#</a> Boost_heating (binary)</h3><p>Boost Heating: press and hold &quot;+&quot; for 3 seconds, the device will enter the boost heating mode, and the ▷╵◁ will flash. The countdown will be displayed in the APP. Value can be found in the published state on the <code>boost_heating</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_heating&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> boost_heating is ON, if <code>OFF</code> OFF.</p><h3 id="boost-heating-countdown-numeric" tabindex="-1"><a class="header-anchor" href="#boost-heating-countdown-numeric" aria-hidden="true">#</a> Boost_heating_countdown (numeric)</h3><p>Countdown in minutes. Value can be found in the published state on the <code>boost_heating_countdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_heating_countdown&quot;: NEW_VALUE}</code>. The unit of this value is <code>min</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',31),d={},a=(0,o(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);