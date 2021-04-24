(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{411:function(t,e,i){"use strict";i.r(e);var n=i(42),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"信息流-listview-的实现"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#信息流-listview-的实现"}},[t._v("#")]),t._v(" 信息流 ListView 的实现")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/13/16a14dc2d60ec4f3?w=449&h=768&f=jpeg&s=80631",alt:""}})]),t._v(" "),i("p",[t._v("上图是显示的是正在热映的电影的信息流，本节要实现这个信息流。")]),t._v(" "),i("h2",{attrs:{id:"正在热映的信息流页面"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#正在热映的信息流页面"}},[t._v("#")]),t._v(" 正在热映的信息流页面")]),t._v(" "),i("h4",{attrs:{id:"将信息流页面在单独的类里实现"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#将信息流页面在单独的类里实现"}},[t._v("#")]),t._v(" 将信息流页面在单独的类里实现")]),t._v(" "),i("p",[t._v("因为信息流页面的实现比较复杂，所以为了使代码结构清晰，又需要对原来的代码进行重构，这次将信息流页面的代码提取出来，在单独的类里实现。")]),t._v(" "),i("p",[t._v("新建一个文件 HotMoviesListWidget.dart,代码为：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("import 'package:flutter/material.dart';\n\nclass HotMoviesListWidget extends StatefulWidget {\n  @override\n  State<StatefulWidget> createState() {\n    // TODO: implement createState\n    return HotMoviesListWidgetState();\n  }\n}\n\nclass HotMoviesListWidgetState extends State<HotMoviesListWidget> {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Center(\n      child: Text('正在热映'),\n    );\n  }\n}\n")])])]),i("p",[t._v("然后将 HotWidget.dart 里正在热映的代码从：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("children: <Widget>[\n      Center(\n        child: Text('正在热映'),\n      ),\n      Center(\n        child: Text('即将上映'),\n      )\n    ]\n")])])]),i("p",[t._v("改为:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("children: <Widget>[\n      HotMoviesListWidget(),\n      Center(\n        child: Text('即将上映'),\n      )\n    ]\n")])])]),i("h4",{attrs:{id:"使用-listview-实现信息流"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用-listview-实现信息流"}},[t._v("#")]),t._v(" 使用 ListView 实现信息流")]),t._v(" "),i("p",[t._v("很明显，要实现信息流，需要用到 ListView。")]),t._v(" "),i("h4",{attrs:{id:"hotmoviedata-上映电影的信息"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hotmoviedata-上映电影的信息"}},[t._v("#")]),t._v(" HotMovieData：上映电影的信息")]),t._v(" "),i("p",[t._v("新建一个文件 HotMovieData.dart，在这个文件里创建存储上映电影信息的类 HotMovieData：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("class HotMovieData{\n  String title;\n  double rating;\n  String directors;\n  String casts;\n  int watchedPeople;\n  String images;\n\n  HotMovieData(this.title,this.rating,this.directors,this.casts,this.watchedPeople,this.images);\n}\n")])])]),i("h4",{attrs:{id:"hotmovieitemwidget-listview-里-item-的布局"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hotmovieitemwidget-listview-里-item-的布局"}},[t._v("#")]),t._v(" HotMovieItemWidget：ListView 里 item 的布局")]),t._v(" "),i("p",[t._v("新建一个文件 HotMovieItemWidget.dart 用来实现信息流 ListView 里 item 的布局。")]),t._v(" "),i("p",[t._v("item 的布局解析之后如下：\n"),i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/13/16a154e59bd0a633?w=1018&h=334&f=jpeg&s=93914",alt:""}})]),t._v(" "),i("p",[t._v("而且 item 里要显示数据，所以要在 item 里传入 HotMovieData 的数据，加到 HotMovieItemWidget 的构造函数里：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("class HotMovieItemWidget extends StatefulWidget {\n  HotMovieData hotMovieData;\n\n  HotMovieItemWidget(this.hotMovieData);\n\n  @override\n  State<StatefulWidget> createState() {\n    // TODO: implement createState\n    return HotMovieItemWidgetState();\n  }\n}\n")])])]),i("p",[t._v("最后实现的代码为：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("import 'package:flutter/material.dart';\nimport 'package:flutter_doubanmovie/HotMovieData.dart';\n\nclass HotMovieItemWidget extends StatefulWidget {\n  HotMovieData hotMovieData;\n\n  HotMovieItemWidget(this.hotMovieData);\n\n  @override\n  State<StatefulWidget> createState() {\n    // TODO: implement createState\n    return HotMovieItemWidgetState();\n  }\n}\n\nclass HotMovieItemWidgetState extends State<HotMovieItemWidget> {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Container(\n      height: 160,\n      padding: EdgeInsets.all(20),\n      child: Row(\n        mainAxisAlignment: MainAxisAlignment.center,\n        children: <Widget>[\n          Image.network(\n            widget.hotMovieData.images,\n            width: 80,\n            height: 120,\n            fit: BoxFit.cover,\n          ),\n          Expanded(\n            flex: 1,\n            child: Padding(\n              padding: EdgeInsets.only(left: 20),\n              child: Column(\n                mainAxisAlignment: MainAxisAlignment.start,\n                crossAxisAlignment: CrossAxisAlignment.start,\n                children: <Widget>[\n                  Text(\n                    widget.hotMovieData.title,\n                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),\n                  ),\n                  Text(\n                    widget.hotMovieData.rating.toString(),\n                    style: TextStyle(fontSize: 14, color: Colors.black54),\n                  ),\n                  Text('导演: ' + widget.hotMovieData.directors,\n                      style: TextStyle(fontSize: 14, color: Colors.black54)),\n                  Text('主演: ' + widget.hotMovieData.casts,\n                      style: TextStyle(fontSize: 14, color: Colors.black54)),\n                ],\n              ),\n            ),\n          ),\n          Container(\n            width: 100,\n            child: Column(\n              mainAxisAlignment: MainAxisAlignment.center,\n              children: <Widget>[\n                Text(widget.hotMovieData.watchedPeople.toString()+'人看过',style: TextStyle(color: Colors.red,fontSize: 14),),\n                OutlineButton(\n                  child: Text('购票',style: TextStyle(fontSize: 16),),\n                  color: Colors.red,\n                  textColor: Colors.red,\n                  highlightedBorderColor: Colors.red,\n                  borderSide: BorderSide(\n                    color: Colors.red\n                  ),\n                  onPressed: () {},\n                )\n              ],\n            ),\n          )\n        ],\n      ),\n    );\n  }\n}\n")])])]),i("h4",{attrs:{id:"listview-信息流实现"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#listview-信息流实现"}},[t._v("#")]),t._v(" ListView：信息流实现")]),t._v(" "),i("p",[t._v("在 HotMoviesListWidget.dart 文件里加入 ListView 了。")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("首先加入数据")]),t._v(" "),i("p",[t._v("在 HotMoviesListWidgetState 里，增加一个变量 hotMovies：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("List<HotMovieData> hotMovies = new List<HotMovieData>();\n")])])]),i("p",[t._v("在 HotMoviesListWidgetState 的 initState() 生命周期里为 hotMovies 赋值：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("@override\n  void initState() {\n    // TODO: implement initState\n    super.initState();\n    var data = HotMovieData('反贪风暴4', 6.3, '林德禄', '古天乐/郑嘉颖/林峯', 29013,\n        'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551353482.webp');\n    setState(() {\n      hotMovies.add(data);\n      hotMovies.add(data);\n      hotMovies.add(data);\n      hotMovies.add(data);\n      hotMovies.add(data);\n      hotMovies.add(data);\n    });\n  }\n")])])])]),t._v(" "),i("li",[i("p",[t._v("ListView")]),t._v(" "),i("p",[t._v("然后使用 ListView：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return ListView.separated(\n        itemCount: hotMovies.length,\n        itemBuilder: (context, index) {\n          return HotMovieItemWidget(hotMovies[index]);\n        },\n        separatorBuilder: (context, index) {\n          return Divider(\n            height: 1,\n            color: Colors.black26,\n          );\n        },\n      );\n  }\n")])])]),i("p",[t._v("运行后的效果为：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/13/16a155bbb4d57106?w=413&h=768&f=jpeg&s=73898",alt:""}})]),t._v(" "),i("p",[t._v("然后会发现 ListView 的头部有一段空白区域，是因为当 ListView 没有和 AppBar 一起使用的时候，头部就会有一个 padding，为了去掉 padding ,可以使用 MediaQuery.removePadding:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return MediaQuery.removePadding(\n      removeTop: true,\n      context: context,\n      child: ListView.separated(\n        itemCount: hotMovies.length,\n        itemBuilder: (context, index) {\n          return HotMovieItemWidget(hotMovies[index]);\n        },\n        separatorBuilder: (context, index) {\n          return Divider(\n            height: 1,\n            color: Colors.black26,\n          );\n        },\n      ),\n    );\n  }\n")])])]),i("p",[t._v("然后，运行的效果就会正常：")]),t._v(" "),i("p",[i("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/13/16a155f0b70e2954?w=413&h=768&f=jpeg&s=76014",alt:""}})])])]),t._v(" "),i("p",[t._v("最后 HotMoviesListWidget.dart 里的代码会改成：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("import 'package:flutter/material.dart';\nimport 'package:flutter_doubanmovie/HotMovieData.dart';\nimport 'package:flutter_doubanmovie/HotMovieItemWidget.dart';\n\nclass HotMoviesListWidget extends StatefulWidget {\n  @override\n  State<StatefulWidget> createState() {\n    // TODO: implement createState\n    return HotMoviesListWidgetState();\n  }\n}\n\nclass HotMoviesListWidgetState extends State<HotMoviesListWidget> {\n  List<HotMovieData> hotMovies = new List<HotMovieData>();\n\n  @override\n  void initState() {\n    // TODO: implement initState\n    super.initState();\n    var data = HotMovieData('反贪风暴4', 6.3, '林德禄', '古天乐/郑嘉颖/林峯', 29013,\n        'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551353482.webp');\n    setState(() {\n      hotMovies.add(data);\n      hotMovies.add(data);\n      hotMovies.add(data);\n      hotMovies.add(data);\n      hotMovies.add(data);\n      hotMovies.add(data);\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return MediaQuery.removePadding(\n      removeTop: true,\n      context: context,\n      child: ListView.separated(\n        itemCount: hotMovies.length,\n        itemBuilder: (context, index) {\n          return HotMovieItemWidget(hotMovies[index]);\n        },\n        separatorBuilder: (context, index) {\n          return Divider(\n            height: 1,\n            color: Colors.black26,\n          );\n        },\n      ),\n    );\n  }\n}\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);