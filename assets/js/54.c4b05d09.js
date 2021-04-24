(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{406:function(t,e,r){"use strict";r.r(e);var l=r(42),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"flutter-可滚动-widget-customscrollview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flutter-可滚动-widget-customscrollview"}},[t._v("#")]),t._v(" Flutter 可滚动 Widget -- CustomScrollView")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/CustomScrollView-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CustomScrollView"),r("OutboundLink")],1),t._v(" 是可以使用 slivers 来自定义滑动效果的可滚动 Widget。")]),t._v(" "),r("h2",{attrs:{id:"代码所在位置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),r("p",[t._v("flutter_widget_demo/lib/customccrollview/CustomScrollViewWidget.dart")]),t._v(" "),r("h2",{attrs:{id:"customscrollview-的使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#customscrollview-的使用"}},[t._v("#")]),t._v(" CustomScrollView 的使用")]),t._v(" "),r("p",[t._v("CustomScrollView 里面可以添加多个 Widget，而且可以为 Widget 提供复杂的滑动效果，需要为其 slivers 参数赋值，而且 slivers 参数只能接受特定的 Widget，例如：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("CustomScrollView(\n  slivers: <Widget>[\n    const SliverAppBar(\n      pinned: true,\n      expandedHeight: 250.0,\n      flexibleSpace: FlexibleSpaceBar(\n        title: Text('Demo'),\n      ),\n    ),\n    SliverGrid(\n      gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(\n        maxCrossAxisExtent: 200.0,\n        mainAxisSpacing: 10.0,\n        crossAxisSpacing: 10.0,\n        childAspectRatio: 4.0,\n      ),\n      delegate: SliverChildBuilderDelegate(\n        (BuildContext context, int index) {\n          return Container(\n            alignment: Alignment.center,\n            color: Colors.teal[100 * (index % 9)],\n            child: Text('grid item $index'),\n          );\n        },\n        childCount: 20,\n      ),\n    ),\n    SliverFixedExtentList(\n      itemExtent: 50.0,\n      delegate: SliverChildBuilderDelegate(\n        (BuildContext context, int index) {\n          return Container(\n            alignment: Alignment.center,\n            color: Colors.lightBlue[100 * (index % 9)],\n            child: Text('list item $index'),\n          );\n        },\n      ),\n    ),\n  ],\n)\n")])])]),r("p",[t._v("CustomScrollView 在一个页面使用的 Demo 为：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("import 'package:flutter/material.dart';\n\nvoid main() => runApp(CustomScrollViewWidget());\n\nclass CustomScrollViewWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Test',\n      home: Scaffold(\n        appBar:\n            AppBar(title: new Text('Flutter 可滚动Widget -- CustomScrollView')),\n        body: CustomScrollView(\n          slivers: <Widget>[\n            const SliverAppBar(\n              pinned: true,\n              expandedHeight: 250.0,\n              flexibleSpace: FlexibleSpaceBar(\n                title: Text('Demo'),\n              ),\n            ),\n            SliverGrid(\n              gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(\n                maxCrossAxisExtent: 200.0,\n                mainAxisSpacing: 10.0,\n                crossAxisSpacing: 10.0,\n                childAspectRatio: 4.0,\n              ),\n              delegate: SliverChildBuilderDelegate(\n                (BuildContext context, int index) {\n                  return Container(\n                    alignment: Alignment.center,\n                    color: Colors.teal[100 * (index % 9)],\n                    child: Text('grid item $index'),\n                  );\n                },\n                childCount: 20,\n              ),\n            ),\n            SliverFixedExtentList(\n              itemExtent: 50.0,\n              delegate: SliverChildBuilderDelegate(\n                (BuildContext context, int index) {\n                  return Container(\n                    alignment: Alignment.center,\n                    color: Colors.lightBlue[100 * (index % 9)],\n                    child: Text('list item $index'),\n                  );\n                },\n              ),\n            ),\n          ],\n        ),\n      ),\n    );\n  }\n}\n")])])]),r("p",[t._v("运行后的效果为：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/9/16a0032d73000327?w=428&h=768&f=png&s=80748",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"customscrollview-的构造函数及参数说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#customscrollview-的构造函数及参数说明"}},[t._v("#")]),t._v(" CustomScrollView 的构造函数及参数说明")]),t._v(" "),r("p",[t._v("CustomScrollView 的构造函数为：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("class CustomScrollView extends ScrollView {\n  const CustomScrollView({\n    Key key,\n    Axis scrollDirection = Axis.vertical,\n    bool reverse = false,\n    ScrollController controller,\n    bool primary,\n    ScrollPhysics physics,\n    bool shrinkWrap = false,\n    Key center,\n    double anchor = 0.0,\n    double cacheExtent,\n    this.slivers = const <Widget>[],\n    int semanticChildCount,\n    DragStartBehavior dragStartBehavior = DragStartBehavior.down,\n  })\n  ...\n}\n")])])]),r("table",[r("thead",[r("tr",[r("th",[t._v("参数名字")]),t._v(" "),r("th",[t._v("参数类型")]),t._v(" "),r("th",[t._v("意义")]),t._v(" "),r("th",[t._v("必选 or 可选")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("key")]),t._v(" "),r("td",[t._v("Key")]),t._v(" "),r("td",[t._v("Widget 的标识")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("scrollDirection")]),t._v(" "),r("td",[t._v("Axis")]),t._v(" "),r("td",[t._v("滑动的方向"),r("br"),t._v("默认为 Axis.vertical，垂直方向可滑动")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("reverse")]),t._v(" "),r("td",[t._v("bool")]),t._v(" "),r("td",[t._v("控制 CustomScrollView 里列表项的排列顺序，是按照插入顺序排，还是按照插入顺序相反的方向排序。"),r("br"),t._v("默认为 false，就是按照插入顺序排序，第一个插入的在头部"),r("br"),t._v("，当 reverse 为 true 时，第一个插入的会在底部")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("controller")]),t._v(" "),r("td",[t._v("ScrollController")]),t._v(" "),r("td",[t._v("可以控制 CustomScrollView 滚动的位置"),r("br"),t._v("ScrollController 提供以下的几个功能："),r("br"),t._v("1.设置 CustomScrollView 滑动的初始位置"),r("br"),t._v("2.可以控制 CustomScrollView 是否存储和恢复滑动的位置"),r("br"),t._v("3.可以读取、设置当前滑动的位置"),r("br"),t._v("可以继承 ScrollController 实现自定义的功能"),r("br"),t._v("当 primary 为 true 时，controller 必须为 null")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("primary")]),t._v(" "),r("td",[t._v("bool")]),t._v(" "),r("td",[t._v("是否是与父级关联的主滚动视图"),r("br"),t._v("当为 true 时，即使 CustomScrollView 里没有足够的内容也能滑动")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("physics")]),t._v(" "),r("td",[t._v("ScrollPhysics")]),t._v(" "),r("td",[t._v("设置 CustomScrollView 的滚动效果"),r("br"),t._v("值必须为 ScrollPhysics 的子类，比如有如下的值："),r("br"),t._v("AlwaysScrollableScrollPhysics():可以让 CustomScrollView 里没有足够的内容也能滑动"),r("br"),t._v("ScrollPhysics():CustomScrollView 在没有足够的内容的时候不能滑动")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("shrinkWrap")]),t._v(" "),r("td",[t._v("bool")]),t._v(" "),r("td",[t._v("是否根据列表项的总长度来设置 CustomScrollView 的长度，默认值为 false。"),r("br"),t._v("当 shrinkWrap 为 false 时，CustomScrollView 会在滚动方向扩展到可占用的最大空间"),r("br"),t._v("当 shrinkWrap 为 true 时，CustomScrollView 在滚动方向占用的空间就是其列表项的总长度，但是这样会很耗性能，因为当其列表项发生变化时，CustomScrollView 的大小会重新计算")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("center")]),t._v(" "),r("td",[t._v("Key")]),t._v(" "),r("td",[t._v("放在 CustomScrollView 中间的 子 Widget 的 key")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("anchor")]),t._v(" "),r("td",[t._v("double")]),t._v(" "),r("td",[t._v("CustomScrollView 开始滑动的偏移量"),r("br"),t._v("如果 anchor 为 0.0，则 CustomScrollView 的 子 Widget 从头开始排列"),r("br"),t._v("如果 anchor 为 0.5，则 CustomScrollView 的 子 Widget 从中间开始排列"),r("br"),t._v("如果 anchor 为 1.0，则 CustomScrollView 的 子 Widget 从底部开始排列")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("cacheExtent")]),t._v(" "),r("td",[t._v("double")]),t._v(" "),r("td",[t._v("CustomScrollView 可见部分的前面和后面的区域可以用来缓存列表项，"),r("br"),t._v("这部分区域的 item 即使不可见，也会加载出来，所以当滑动到这个区域的时候，缓存的区域就会变的可见，"),r("br"),t._v("cacheExtent 就表示缓存区域在可见部分的前面和后面有多少像素")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("slivers")]),t._v(" "),r("td",[t._v("List<Widget>")]),t._v(" "),r("td",[t._v("CustomScrollView 的列表项")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("semanticChildCount")]),t._v(" "),r("td",[t._v("int")]),t._v(" "),r("td",[t._v("提供语义信息的列表项的数量"),r("br"),t._v("默认为 CustomScrollView 的 item 的数量")]),t._v(" "),r("td",[t._v("可选")])]),t._v(" "),r("tr",[r("td",[t._v("dragStartBehavior")]),t._v(" "),r("td",[t._v("DragStartBehavior")]),t._v(" "),r("td",[t._v("确定处理拖动开始行为的方式。"),r("br"),t._v("如果设置为[DragStartBehavior.start]，则在检测到拖动手势时将开始滚动拖动行为"),r("br"),t._v("如果设置为[DragStartBehavior.down]，它将在首次检测到向下事件时开始")]),t._v(" "),r("td",[t._v("可选")])])])]),t._v(" "),r("p",[t._v("CustomScrollView 的 slivers 属性的值，只能是以 Sliver 开头的一系列 Widget：")]),t._v(" "),r("ul",[r("li",[t._v("SliverList")]),t._v(" "),r("li",[t._v("SliverFixedExtentList")]),t._v(" "),r("li",[t._v("SliverGrid")]),t._v(" "),r("li",[t._v("SliverPadding")]),t._v(" "),r("li",[t._v("SliverAppBar")])])])}),[],!1,null,null,null);e.default=i.exports}}]);