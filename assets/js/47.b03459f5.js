(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{399:function(t,e,n){"use strict";n.r(e);var i=n(42),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"flutter-布局-widget-线性布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutter-布局-widget-线性布局"}},[t._v("#")]),t._v(" Flutter 布局 Widget —— 线性布局")]),t._v(" "),n("p",[t._v("线性布局 可以将 子 Widget 在同一个方向(水平和垂直)上排列.")]),t._v(" "),n("p",[t._v("Flutter 的线性布局，有两个:")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Row-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Row"),n("OutboundLink")],1),t._v("：水平方向的线性布局")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Column-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Column"),n("OutboundLink")],1),t._v("：垂直方向的线性布局")])]),t._v(" "),n("p",[t._v("Row 和 Column 都继承自弹性布局 Flex，其实就是确定了主轴方向的 Flex，其余的用法和 Flex 一致。")]),t._v(" "),n("h1",{attrs:{id:"row"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#row"}},[t._v("#")]),t._v(" Row")]),t._v(" "),n("p",[t._v("Row 可以在水平方向排列其 子 widget。")]),t._v(" "),n("h2",{attrs:{id:"代码所在位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),n("p",[t._v("flutter_widget_demo/lib/linear/RowWidget.dart")]),t._v(" "),n("h2",{attrs:{id:"row-的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#row-的使用"}},[t._v("#")]),t._v(" Row 的使用")]),t._v(" "),n("p",[t._v("Row 是水平排列，给其 children 参数添加 子 Widget 即可，例如：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('Row(\n  children: <Widget>[\n    Text("Hello Flutter"),\n    Image.asset(\n      "images/flutter.png",\n      width: 200,\n    )\n  ],\n)\n')])])]),n("p",[t._v("Row 在一个页面使用的 Demo 代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(RowWidget());\n\nclass RowWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: "Flutter Demo",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(title: Text("Flutter布局Widget -- 线性布局")),\n        body: Row(\n          children: <Widget>[\n            Text("Hello Flutter"),\n            Image.asset(\n              "images/flutter.png",\n              width: 200,\n            )\n          ],\n        ),\n      ),\n    );\n  }\n}\n')])])]),n("p",[t._v("运行效果：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/10/169658c52ff19b81?w=843&h=459&f=jpeg&s=60878",alt:""}})]),t._v(" "),n("p",[t._v("Row 的 children 有两个，分别是 Text 和 Image，这两个按照水平方向排列。")]),t._v(" "),n("h2",{attrs:{id:"row-的构造函数及参数说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#row-的构造函数及参数说明"}},[t._v("#")]),t._v(" Row 的构造函数及参数说明")]),t._v(" "),n("p",[t._v("Row 的构造函数为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Row extends Flex {\n  Row({\n    Key key,\n    MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,\n    MainAxisSize mainAxisSize = MainAxisSize.max,\n    CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,\n    TextDirection textDirection,\n    VerticalDirection verticalDirection = VerticalDirection.down,\n    TextBaseline textBaseline,\n    List<Widget> children = const <Widget>[],\n  }) : super(\n    children: children,\n    key: key,\n    direction: Axis.horizontal,\n    mainAxisAlignment: mainAxisAlignment,\n    mainAxisSize: mainAxisSize,\n    crossAxisAlignment: crossAxisAlignment,\n    textDirection: textDirection,\n    verticalDirection: verticalDirection,\n    textBaseline: textBaseline,\n  );\n}\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名字")]),t._v(" "),n("th",[t._v("参数类型")]),t._v(" "),n("th",[t._v("意义")]),t._v(" "),n("th",[t._v("必选 or 可选")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[t._v("Key")]),t._v(" "),n("td",[t._v("Widget 的标识")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("mainAxisAlignment")]),t._v(" "),n("td",[t._v("MainAxisAlignment")]),t._v(" "),n("td",[t._v("表示 子 Widget 在主轴的对齐方式")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("mainAxisSize")]),t._v(" "),n("td",[t._v("MainAxisSize")]),t._v(" "),n("td",[t._v("表示主轴应该占用多大的空间")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("crossAxisAlignment")]),t._v(" "),n("td",[t._v("CrossAxisAlignment")]),t._v(" "),n("td",[t._v("表示 子 Widget 在交叉轴的对齐方式")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("textDirection")]),t._v(" "),n("td",[t._v("TextDirection")]),t._v(" "),n("td",[t._v("表示 子 Widget 在主轴方向上的布局顺序")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("verticalDirection")]),t._v(" "),n("td",[t._v("VerticalDirection")]),t._v(" "),n("td",[t._v("表示 子 Widget 在交叉轴方向上的布局顺序")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("textBaseline")]),t._v(" "),n("td",[t._v("TextBaseline")]),t._v(" "),n("td",[t._v("排列 子 Widget 时使用哪个基线")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("children")]),t._v(" "),n("td",[t._v("List< Widget>")]),t._v(" "),n("td",[t._v("Flex 布局 里排列的内容")]),t._v(" "),n("td",[t._v("可选")])])])]),t._v(" "),n("h1",{attrs:{id:"column"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#column"}},[t._v("#")]),t._v(" Column")]),t._v(" "),n("p",[t._v("Column 可以在垂直方向上排列其 子 widget。")]),t._v(" "),n("h2",{attrs:{id:"代码所在位置-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-2"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),n("p",[t._v("flutter_widget_demo/lib/linear/ColumnWidget.dart")]),t._v(" "),n("h2",{attrs:{id:"column-的快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#column-的快速上手"}},[t._v("#")]),t._v(" Column 的快速上手")]),t._v(" "),n("p",[t._v("Column 是垂直方向上排列，给其 children 参数添加 子 Widget 即可，例如：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('Column(\n  children: <Widget>[\n    Text("Hello Flutter"),\n    Image.asset(\n      "images/flutter.png",\n      width: 200,\n    )\n  ],\n)\n')])])]),n("p",[t._v("Column 在一个页面使用的 Demo 代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(ColumnWidget());\n\nclass ColumnWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: "Flutter Demo",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(title: Text("Flutter布局Widget -- 线性布局")),\n        body: Column(\n          children: <Widget>[\n            Text("Hello Flutter"),\n            Image.asset(\n              "images/flutter.png",\n              width: 200,\n            )\n          ],\n        ),\n      ),\n    );\n  }\n}\n')])])]),n("p",[t._v("运行结果：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/10/16965b9308a95917?w=840&h=450&f=jpeg&s=61031",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"column-的构造函数及参数说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#column-的构造函数及参数说明"}},[t._v("#")]),t._v(" Column 的构造函数及参数说明")]),t._v(" "),n("p",[t._v("Column 的构造函数为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Column extends Flex {\n  Column({\n    Key key,\n    MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,\n    MainAxisSize mainAxisSize = MainAxisSize.max,\n    CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,\n    TextDirection textDirection,\n    VerticalDirection verticalDirection = VerticalDirection.down,\n    TextBaseline textBaseline,\n    List<Widget> children = const <Widget>[],\n  }) : super(\n    children: children,\n    key: key,\n    direction: Axis.vertical,\n    mainAxisAlignment: mainAxisAlignment,\n    mainAxisSize: mainAxisSize,\n    crossAxisAlignment: crossAxisAlignment,\n    textDirection: textDirection,\n    verticalDirection: verticalDirection,\n    textBaseline: textBaseline,\n  );\n}\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名字")]),t._v(" "),n("th",[t._v("参数类型")]),t._v(" "),n("th",[t._v("意义")]),t._v(" "),n("th",[t._v("必选 or 可选")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[t._v("Key")]),t._v(" "),n("td",[t._v("Widget 的标识")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("mainAxisAlignment")]),t._v(" "),n("td",[t._v("MainAxisAlignment")]),t._v(" "),n("td",[t._v("表示 子 Widget 在主轴的对齐方式")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("mainAxisSize")]),t._v(" "),n("td",[t._v("MainAxisSize")]),t._v(" "),n("td",[t._v("表示主轴应该占用多大的空间")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("crossAxisAlignment")]),t._v(" "),n("td",[t._v("CrossAxisAlignment")]),t._v(" "),n("td",[t._v("表示 子 Widget 在交叉轴的对齐方式")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("textDirection")]),t._v(" "),n("td",[t._v("TextDirection")]),t._v(" "),n("td",[t._v("表示 子 Widget 在主轴方向上的布局顺序")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("verticalDirection")]),t._v(" "),n("td",[t._v("VerticalDirection")]),t._v(" "),n("td",[t._v("表示 子 Widget 在交叉轴方向上的布局顺序")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("textBaseline")]),t._v(" "),n("td",[t._v("TextBaseline")]),t._v(" "),n("td",[t._v("排列 子 Widget 时使用哪个基线")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("children")]),t._v(" "),n("td",[t._v("List< Widget>")]),t._v(" "),n("td",[t._v("Flex 布局 里排列的内容")]),t._v(" "),n("td",[t._v("可选")])])])]),t._v(" "),n("h1",{attrs:{id:"特殊情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特殊情况"}},[t._v("#")]),t._v(" 特殊情况")]),t._v(" "),n("p",[t._v("如果 Row 里面嵌套 Row，或者 Column 里面再嵌套 Column，那么只有最外面的 Row 或 Column 会占用尽可能大的空间，里面 Row 或 Column 所占用的空间为实际大小。")])])}),[],!1,null,null,null);e.default=r.exports}}]);