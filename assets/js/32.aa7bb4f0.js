(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{384:function(t,e,s){"use strict";s.r(e);var a=s(42),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"statelesswidget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statelesswidget"}},[t._v("#")]),t._v(" StatelessWidget")]),t._v(" "),s("p",[t._v("StatelessWidget 是没有 State（状态）的 Widget，当 Widget 在运行时不需要改变时，就用 StatelessWidget。")]),t._v(" "),s("h2",{attrs:{id:"statelesswidget-的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statelesswidget-的实现"}},[t._v("#")]),t._v(" StatelessWidget 的实现")]),t._v(" "),s("p",[t._v("下面一段代码是一段 StatelessWidget 的 demo 代码，将下面代码复制到 "),s("code",[t._v("main.dart")]),t._v(" 里并运行：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import 'package:flutter/material.dart';\n\nvoid main() => runApp(MyApp(\"Hello World\"));\n\nclass MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  final String content;\n\n  MyApp(this.content);\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: Scaffold(\n        body: Center(\n          child: Text(content),\n        ),\n      )\n    );\n  }\n}\n\n")])])]),s("p",[t._v("MyApp 就是一个 StatelessWidget，它继承自 StatelessWidget，Text 也是 StatelessWidget,因为 Text 也是继承自 StatelessWidget。")]),t._v(" "),s("p",[t._v("运行的效果为：\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a00007ba4f8e27?w=354&h=702&f=png&s=24883",alt:""}})]),t._v(" "),s("p",[t._v("要实现自定的 StatelessWidget，必须要继承 StatelessWidget。")]),t._v(" "),s("p",[t._v("看下面实现的代码：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class MyApp extends StatelessWidget {\n\n @override\n Widget build(BuildContext context) {\n   return ...\n   );\n }\n}\n")])])]),s("ol",[s("li",[s("p",[t._v("首先继承 StatelessWidget。")])]),t._v(" "),s("li",[s("p",[t._v("必须要实现 "),s("code",[t._v("build")]),t._v(" 函数，返回一个 Widget。")])])]),t._v(" "),s("h2",{attrs:{id:"statelesswidget-immutable-状态不可变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statelesswidget-immutable-状态不可变"}},[t._v("#")]),t._v(" StatelessWidget：immutable（状态不可变）")]),t._v(" "),s("p",[t._v("StatelessWidget 是没有 State（状态）的，而且 StatelessWidget 只能在加载/构建 Widget 时才绘制一次，这意味着无法基于任何事件或用户操作重绘 StatelessWidget，所以 StatelessWidget 是 immutable 的。")]),t._v(" "),s("p",[t._v("假设在 APP 运行过程中，将 Text 的文本改为 "),s("code",[t._v("Hello Flutter World")]),t._v("，那么 Text 的内容不会更改，APP 的 UI 也不会改变。")]),t._v(" "),s("h2",{attrs:{id:"statelesswidget-的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statelesswidget-的生命周期"}},[t._v("#")]),t._v(" StatelessWidget 的生命周期")]),t._v(" "),s("p",[t._v("StatelessWidget 的生命周期就只有一个，即 build 函数：")]),t._v(" "),s("ul",[s("li",[t._v("build （build 函数）")])]),t._v(" "),s("p",[t._v("在代码中加入如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('class MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  final String content;\n\n  MyApp(this.content);\n\n  @override\n  Widget build(BuildContext context) {\n    print("build"); //StatelessWidget -- build\n    ....\n  }\n}\n')])])]),s("p",[t._v("运行后可以看到如下的 log：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Launching lib/main.dart on iPhone XR in debug mode...\nXcode build done.                                            3.9s\nflutter: build\n")])])]),s("h2",{attrs:{id:"statelesswidget-使用注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statelesswidget-使用注意事项"}},[t._v("#")]),t._v(" StatelessWidget 使用注意事项")]),t._v(" "),s("p",[t._v("如果你想要为 StatelessWidget 赋值，只能在 StatelessWidget 初始化的时候，通过构造函数传递一些额外的参数。但是请记住，这些参数不会在以后阶段发生变化，即使发生变化，也只能按原值使用。因为 StatelessWidget 只会渲染一次。")])])}),[],!1,null,null,null);e.default=i.exports}}]);