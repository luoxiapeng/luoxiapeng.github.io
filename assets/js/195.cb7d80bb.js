(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{547:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[t._v("#")]),t._v(" 运算符")]),t._v(" "),a("p",[t._v("运算符用来计算数据的符号，数据可以是常量，也可以是变量")]),t._v(" "),a("ul",[a("li",[t._v("算数运算符\n"),a("blockquote",[a("p",[t._v("+,-,*,/,%,++,--")])])])]),t._v(" "),a("p",[t._v("+有连接作用，将一个字符串和其他数据连接起来")]),t._v(" "),a("p",[t._v("+遇到字符串，变成连接符号")]),t._v(" "),a("p",[t._v("+任何类型只要和字符串+，所有的数据都会变成字符串 1+“”")]),t._v(" "),a("p",[t._v("例如："),a("code",[t._v('System.out.println("5+5="+5+5) //“5+5=55”')])]),t._v(" "),a("p",[t._v("在 java 中整数用除法运算怎么算都算不到小数")]),t._v(" "),a("p",[t._v("如： "),a("code",[t._v("int i=100")]),t._v(" "),a("code",[t._v("int j=9")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" `System.out.println(i/j)` 得到的是11\n")])])]),a("p",[t._v("++前后差别：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("a\n\n 符号写在前面，还是后面，在变量自己独立计算的时候，没有区别\n\n 但是，要是参与了其他运算，有区别：\n\n 放在后面就后算，再将i赋值\n 放在前面就是先算自己，再赋值\n\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//6")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("赋值运算符")]),t._v(" "),a("p",[t._v("=，+=，-=，*=，/=，%=")])]),t._v(" "),a("li",[a("p",[t._v("比较运算符")])])]),t._v(" "),a("p",[t._v("==,!=, <,>,>=,<=")]),t._v(" "),a("p",[t._v("比较结果只有两种，boolean 类")]),t._v(" "),a("ul",[a("li",[t._v("逻辑运算符")])]),t._v(" "),a("p",[t._v("&(与),|(或) , ^(异或) ,!(非) ,&&(短路与),||(短路或)")]),t._v(" "),a("blockquote",[a("p",[t._v("& 一边是 false，运算结果就是 false")])]),t._v(" "),a("blockquote",[a("p",[t._v("|:一边是 true，运算结果就是 true")])]),t._v(" "),a("blockquote",[a("p",[t._v("^:两边得一样就是 true，否者就是 false")])]),t._v(" "),a("blockquote",[a("p",[t._v("!：!true=false !false=true")])]),t._v(" "),a("blockquote",[a("p",[t._v("&&:短路与，一边是 false，另外一遍就不运行")])]),t._v(" "),a("blockquote",[a("p",[t._v("||：短路或，一边是 true，另外一边不运行")])]),t._v(" "),a("ul",[a("li",[t._v("三元运算符")])]),t._v(" "),a("p",[t._v("布尔表达式?结果 1：结果")])])}),[],!1,null,null,null);s.default=e.exports}}]);