(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{507:function(s,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"npm-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-registry"}},[s._v("#")]),s._v(" npm registry")]),s._v(" "),a("h2",{attrs:{id:"搭建-verdaccio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建-verdaccio"}},[s._v("#")]),s._v(" 搭建 verdaccio")]),s._v(" "),a("blockquote",[a("p",[s._v("verdaccio 是一个开源轻量的 npm 私服")])]),s._v(" "),a("p",[s._v("全局安装：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install verdaccio -g\n")])])]),a("p",[s._v("配置 ~/.config/verdaccio/config.yaml uplinks:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("...\n# a list of other known repositories we can talk to\nuplinks:\n  npmjs:\n    url: https://registry.npmjs.org/\n  taobao:\n    url: https://registry.npm.taobao.org/\n  tuya:\n    url: https://registry-npm.tuya-inc.top/\n...\n\n")])])]),a("h2",{attrs:{id:"设置开机自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置开机自启动"}},[s._v("#")]),s._v(" 设置开机自启动")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("0、run sudo npm i -g pm2\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1、run pm2 start verdaccio & pm2 startup\n")])])]),a("p",[s._v("outputs:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[PM2] Init System found: launchd\n[PM2] To setup the Startup Script, copy/paste the following command:\nsudo env PATH=$PATH:/usr/local/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup launchd -u luozhu --hp /Users/luozhu\n\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("2、run sudo env PATH=$PATH:/usr/local/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup launchd -u luozhu --hp /Users/luozhu\n")])])]),a("p",[s._v("outputs:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PM2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Freeze a process list on reboot via"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n$ pm2 save\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PM2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Remove init script via"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n$ pm2 unstartup launchd\n\n")])])]),a("h2",{attrs:{id:"修改-lerna-publishconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-lerna-publishconfig"}},[s._v("#")]),s._v(" 修改 lerna publishConfig")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// lerna.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"publish"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ignoreChanges"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ignored-file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/__tests__/**"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.md"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/tsconfig.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chore(release): publish"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:4873"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);