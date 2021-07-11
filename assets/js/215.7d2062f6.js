(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{566:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"变量类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量类型转换"}},[t._v("#")]),t._v(" 变量类型转换")]),t._v(" "),s("h2",{attrs:{id:"常量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[t._v("#")]),t._v(" 常量")]),t._v(" "),s("p",[t._v("字符串，双引号，包裹，“0-n”")]),t._v(" "),s("p",[t._v("定义遍历，字符串类型，数据类型")]),t._v(" "),s("p",[t._v("如："),s("code",[t._v('String s="java"')])]),t._v(" "),s("p",[t._v("注意：String 是引用类型，跟基本类型引用是一样的")]),t._v(" "),s("h2",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),s("p",[t._v("变量定义后，不赋值，不能使用")]),t._v(" "),s("p",[s("code",[t._v("int i=2")])]),t._v(" "),s("p",[t._v("变量是有自己的作用范围，变量的有效方位，定义的一对大括号上")]),t._v(" "),s("p",[t._v("变量不允许重复定义")]),t._v(" "),s("p",[t._v("如：int f=true(是不可以用的)")]),t._v(" "),s("h2",{attrs:{id:"数据类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型转换"}},[t._v("#")]),t._v(" 数据类型转换")]),t._v(" "),s("ul",[s("li",[t._v("范围小的转为范围大的")]),t._v(" "),s("li",[t._v("范围大的不可以直接转为小的")])]),t._v(" "),s("p",[t._v("转换的路线：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v("\n")])])]),s("h3",{attrs:{id:"自动转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动转换"}},[t._v("#")]),t._v(" 自动转换")]),t._v(" "),s("p",[t._v("范围小的可以自动转换到范围大的")]),t._v(" "),s("p",[t._v("如：double b=1000; //出现了类型自动转换，int 转为 double")]),t._v(" "),s("p",[t._v("因为 int 的只有 4 个字节，可以放到 8 个字节的空间上")]),t._v(" "),s("p",[t._v("注意：boolean 不能转（布尔）")]),t._v(" "),s("h3",{attrs:{id:"强制转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强制转换"}},[t._v("#")]),t._v(" 强制转换")]),t._v(" "),s("p",[t._v("表示范围大的数据类型转换成范围小的")]),t._v(" "),s("p",[t._v("如 double d=3.14; int i = d(这样是不行的)")]),t._v(" "),s("p",[t._v("被转后的数据类型 变量名=（被转换后数据类型）要被转的数据")]),t._v(" "),s("p",[t._v("如 double d=3.14; int i=(int)d;")]),t._v(" "),s("p",[t._v("8 个字节转成 4 个字节会溢出")]),t._v(" "),s("p",[t._v("如 byte b=(byte) 200; Sytem.out.printIn(b)")]),t._v(" "),s("p",[t._v("强制类型转换没有要求就不要做")])])}),[],!1,null,null,null);a.default=e.exports}}]);