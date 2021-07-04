(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{419:function(t,e,a){"use strict";a.r(e);var n=a(42),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flutter-路由-route"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-路由-route"}},[t._v("#")]),t._v(" Flutter 路由：Route")]),t._v(" "),a("p",[t._v("本节具体讲一下 Flutter 路由 Route 的使用，包括两个部分：")]),t._v(" "),a("ul",[a("li",[t._v("使用 Route 进行页面跳转")]),t._v(" "),a("li",[t._v("使用 Route 在页面间传递参数")])]),t._v(" "),a("h2",{attrs:{id:"route-flutter-页面跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route-flutter-页面跳转"}},[t._v("#")]),t._v(" Route -- Flutter 页面跳转")]),t._v(" "),a("p",[t._v("App 中经常有多个页面，所以需要在多个页面中跳转，例如在 Android 中是有很多页面：Activity，然后使用 startActivity() 来跳转页面;在 iOS 中也有很多页面：ViewController，然后使用 pushViewController 来跳转页面。")]),t._v(" "),a("p",[t._v("在 Android 和 iOS 中，这种全屏的页面叫 Activity 或 ViewController，在 Flutter 中，这种全屏的页面就是 "),a("code",[t._v("Route")]),t._v("，"),a("code",[t._v("Navigator")]),t._v(" 通过堆管理 Route 对象，从而实现页面跳转。")]),t._v(" "),a("p",[t._v("在 Flutter 中跳转页面有两种方式，一种是 Simple Route(简单路由)，一种是 Named Route(命名路由)。")]),t._v(" "),a("h3",{attrs:{id:"简单路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单路由"}},[t._v("#")]),t._v(" 简单路由")]),t._v(" "),a("h4",{attrs:{id:"_1-创建两个-scaffold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建两个-scaffold"}},[t._v("#")]),t._v(" 1.创建两个 Scaffold")]),t._v(" "),a("p",[t._v("首先创建两个页面：FirstPage 和 SecondPage，点击 FirstPage 里的按钮跳转到 SecondPage，点击 SecondPage 里的按钮，在返回到 FirstPage。")]),t._v(" "),a("p",[t._v("下面的代码分别创建了 FirstPage 和 SecondPage：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return MaterialApp(\n        title: "Flutter Demo",\n        theme: ThemeData(\n          primaryColor: Colors.blue,\n        ),\n        home: FirstPage());\n  }\n}\n\nclass FirstPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Scaffold(\n      appBar: AppBar(\n        title: Text("Route -- FirstPage"),\n      ),\n      body: RaisedButton(\n        child: Text("JUMP SecondRoute"),\n        onPressed: () {\n\n        },\n      ),\n    );\n  }\n}\n\nclass SecondPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Scaffold(\n      appBar: AppBar(\n        title: Text("Route -- SecondPage"),\n      ),\n      body: RaisedButton(\n        child: Text("Go back!"),\n        onPressed: () {\n\n        },\n      ),\n    );\n  }\n}\n')])])]),a("h4",{attrs:{id:"_2-从-firstpage-跳转到-secondpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-从-firstpage-跳转到-secondpage"}},[t._v("#")]),t._v(" 2.从 FirstPage 跳转到 SecondPage")]),t._v(" "),a("p",[t._v("跳转页面，使用 "),a("code",[t._v("Navigator.push()")]),t._v("，push() 方法将新的 Route 添加到由 Navigator 管理的 Route 对象的堆顶。那么新的 Route 对象从哪里来呢？可以直接使用 "),a("code",[t._v("MaterialPageRoute")]),t._v("，或者你也可以创建自定义的 Route。建议使用 MaterialPageRoute，因为 MaterialPageRoute 已经封装好了，使用方便，而且自带页面切换动画，并且适配了 Android 和 iOS，如果是 Android 的话，页面进入动画是向上滑动并淡出，退出是相反的，如果是 iOS 的话，页面进入动画是从右侧滑入，退出是相反的。")]),t._v(" "),a("p",[t._v("那么 FirstPage 的 onPressed 事件应该这么写：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Navigator.push(\n  context, MaterialPageRoute(builder: (context) => SecondPage()));\n")])])]),a("p",[a("code",[t._v("MaterialPageRoute")]),t._v("有四个参数：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必填参数")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("builder")]),t._v(" "),a("td",[t._v("WidgetBuilder")]),t._v(" "),a("td",[t._v("必填")]),t._v(" "),a("td",[t._v("创建 Route 里要显示的页面")])]),t._v(" "),a("tr",[a("td",[t._v("settings")]),t._v(" "),a("td",[t._v("RouteSettings")]),t._v(" "),a("td",[t._v("选填")]),t._v(" "),a("td",[t._v("Route 的一些配置参数")])]),t._v(" "),a("tr",[a("td",[t._v("maintainState")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("选填")]),t._v(" "),a("td",[t._v("是否保留之前的 Route，如果是 true，前面的 Route 会保留在内存里，如果是 false，前面的 Route 在不需要的时候就会被回收掉（不是立即回收），默认是 true")])]),t._v(" "),a("tr",[a("td",[t._v("fullscreenDialog")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("选填")]),t._v(" "),a("td",[t._v("用来标识新的页面是不是 dialog，默认是 false")])])])]),t._v(" "),a("p",[t._v("可以看到上面的代码实现了 builder，返回了 SecondPage.")]),t._v(" "),a("h4",{attrs:{id:"_3-从-secondpage-返回到-firstpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-从-secondpage-返回到-firstpage"}},[t._v("#")]),t._v(" 3.从 SecondPage 返回到 FirstPage")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("Navigator.pop()")]),t._v(" 关闭当前页面，返回上一个页面。pop() 方法将当前的 Route 对象从 Navigator 管理 Route 对象的堆中移除。")]),t._v(" "),a("p",[t._v("所以 SecondPage 的 onPressed 事件应该这么写：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Navigator.pop(context);\n")])])]),a("h4",{attrs:{id:"_4-完整代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-完整代码"}},[t._v("#")]),t._v(" 4.完整代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return MaterialApp(\n        title: "Flutter Demo",\n        theme: ThemeData(\n          primaryColor: Colors.blue,\n        ),\n        home: FirstPage());\n  }\n}\n\nclass FirstPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Scaffold(\n      appBar: AppBar(\n        title: Text("Route -- FirstPage"),\n      ),\n      body: RaisedButton(\n        child: Text("JUMP SecondRoute"),\n        onPressed: () {\n          Navigator.push(\n              context, MaterialPageRoute(builder: (context) => SecondPage(),maintainState: false));\n        },\n      ),\n    );\n  }\n}\n\nclass SecondPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Scaffold(\n      appBar: AppBar(\n        title: Text("Route -- SecondPage"),\n      ),\n      body: RaisedButton(\n        child: Text("Go back!"),\n        onPressed: () {\n          Navigator.pop(context);\n        },\n      ),\n    );\n  }\n}\n')])])]),a("h3",{attrs:{id:"命名路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名路由"}},[t._v("#")]),t._v(" 命名路由")]),t._v(" "),a("p",[t._v("如果 App 里有很多地方都要跳转到相同的页面，那么以前面简单路由的方式跳转的话，就得重复写很多代码，这种情况下，为 Route 命名，使用命令路由就会很方便。")]),t._v(" "),a("p",[t._v("命令路由使用这个方法 "),a("code",[t._v("Navigator.pushNamed")])]),t._v(" "),a("h4",{attrs:{id:"_1-创建两个-scaffold-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建两个-scaffold-2"}},[t._v("#")]),t._v(" 1.创建两个 Scaffold")]),t._v(" "),a("p",[t._v("这里和简单路由一样")]),t._v(" "),a("h4",{attrs:{id:"_2-定义路由表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-定义路由表"}},[t._v("#")]),t._v(" 2.定义路由表")]),t._v(" "),a("p",[t._v("路由表就是将所有 Route 集合起来，需要使用 MaterialAPP 的 "),a("code",[t._v("routes")]),t._v(" 属性和 "),a("code",[t._v("initialRoute")]),t._v(" 属性。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    return MaterialApp(\n        title: \"Flutter Demo\",\n        theme: ThemeData(\n          primaryColor: Colors.blue,\n        ),\n        initialRoute: '/First',\n        routes: {\n          '/First': (context) => FirstPage(),\n          \"/Second\": (context) => SecondPage()\n        },\n        home: FirstPage());\n  }\n")])])]),a("div",{staticClass:"language-! extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("注意：命名的路由不能使用 '/'，因为 '/' 相当于是根节点，不要用根节点去命名路由。\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("routes")]),t._v(" "),a("td",[t._v("Map<String, WidgetBuilder>")]),t._v(" "),a("td",[t._v("路由表")])]),t._v(" "),a("tr",[a("td",[t._v("initialRoute")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Flutter APP 的初始路由")])])])]),t._v(" "),a("h4",{attrs:{id:"_3-从-firstpage-跳转到-secondpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-从-firstpage-跳转到-secondpage"}},[t._v("#")]),t._v(" 3.从 FirstPage 跳转到 SecondPage")]),t._v(" "),a("p",[t._v("命令路由的跳转使用 "),a("code",[t._v("Navigator.pushNamed")])]),t._v(" "),a("p",[t._v("那么 FirstPage 的 onPressed 事件应该改写为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Navigator.pushNamed(context, '/Second');\n")])])]),a("h4",{attrs:{id:"_4-从-secondpage-返回到-firstpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-从-secondpage-返回到-firstpage"}},[t._v("#")]),t._v(" 4.从 SecondPage 返回到 FirstPage")]),t._v(" "),a("p",[t._v("命令路由返回上一个页面的使用方法和简单路由一样")]),t._v(" "),a("h4",{attrs:{id:"_5-完整代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-完整代码"}},[t._v("#")]),t._v(" 5.完整代码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return MaterialApp(\n        title: "Flutter Demo",\n        theme: ThemeData(\n          primaryColor: Colors.blue,\n        ),\n        initialRoute: \'/First\',\n        routes: {\n          \'/First\': (context) => FirstPage(),\n          "/Second": (context) => SecondPage()\n        },\n        home: FirstPage());\n  }\n}\n\nclass FirstPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Scaffold(\n      appBar: AppBar(\n        title: Text("Route -- FirstPage"),\n      ),\n      body: RaisedButton(\n        child: Text("JUMP SecondRoute"),\n        onPressed: () {\n          Navigator.pushNamed(context, \'/Second\');\n        },\n      ),\n    );\n  }\n}\n\nclass SecondPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Scaffold(\n      appBar: AppBar(\n        title: Text("Route -- SecondPage"),\n      ),\n      body: RaisedButton(\n        child: Text("Go back!"),\n        onPressed: () {\n          Navigator.pop(context);\n        },\n      ),\n    );\n  }\n}\n\n')])])]),a("h2",{attrs:{id:"route-页面间的参数传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route-页面间的参数传递"}},[t._v("#")]),t._v(" Route -- 页面间的参数传递")]),t._v(" "),a("p",[t._v("前面讲了页面跳转，那么页面跳转的时候，想将数据传递给新页面，或者新页面关闭，要将数据传递给上一个页面，该如何实现呢？")]),t._v(" "),a("p",[t._v("本节就讲一下 Route 间的参数传递。")]),t._v(" "),a("p",[t._v("假设要传递如下的参数：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class PassArgumnets{\n  String content;\n\n  PassArgumnets(this.content);\n}\n")])])]),a("h3",{attrs:{id:"跳转页面时传递参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳转页面时传递参数"}},[t._v("#")]),t._v(" 跳转页面时传递参数")]),t._v(" "),a("p",[t._v("从一个页面跳转到新的页面，有两种方法传递参数：")]),t._v(" "),a("ul",[a("li",[t._v("通过 Navigator.push() 或者 Navigator.pushNamed() 方法传递参数")]),t._v(" "),a("li",[t._v("通过 Widget 的构造函数传递参数")])]),t._v(" "),a("h4",{attrs:{id:"通过-navigator-push-或-者-navigator-pushnamed-方法传递参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-navigator-push-或-者-navigator-pushnamed-方法传递参数"}},[t._v("#")]),t._v(" 通过 Navigator.push() 或 者 Navigator.pushNamed() 方法传递参数")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Navigator.push()")]),t._v(" "),a("p",[t._v("前面讲了 MaterialPageRoute 的属性里有 settings，使用 RouteSettings 里的 arguments 来传递参数，arguments 是一个 Object 类型，可以传递 简单类型，如：String、List 等，也可以自定义一个类，用来传递复杂类型，例如下面的例子，自定义了 PassArgumnets 类型用来传递参数：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Navigator.push(\n   context,\n   MaterialPageRoute(\n    builder: (context) => SecondPage(),\n    settings: RouteSettings(\n        arguments:\n            PassArgumnets('Data from FirstPage Navigator.push()'))),\n);\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Navigator.pushNamed()")]),t._v(" "),a("p",[t._v("Navigator.pushNamed() 有一个可选参数 arguments，arguments 是一个 Object 类型，可以传递 简单类型，如：String、List 等，也可以自定义一个类，用来传递复杂类型，例如下面的例子，自定义了 PassArgumnets 类型用来传递参数：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Navigator.pushNamed(context, '/Second',arguments: PassArgumnets('Data from FirstPage Navigator.pushNamed()'));\n\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在新页面接受参数")]),t._v(" "),a("p",[t._v("接受参数使用 "),a("code",[t._v("ModalRoute.of")]),t._v(" 方法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("final PassArgumnets passArgumnets =ModalRoute.of(context).settings.arguments;\n\n")])])])])]),t._v(" "),a("p",[t._v("完整代码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import 'package:flutter/material.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return MaterialApp(\n        title: \"Flutter Demo\",\n        theme: ThemeData(\n          primaryColor: Colors.blue,\n        ),\n        initialRoute: '/First',\n        routes: {\n          '/First': (context) => FirstPage(),\n          \"/Second\": (context) => SecondPage()\n        },\n        home: FirstPage());\n  }\n}\n\nclass FirstPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"Route -- FirstPage\"),\n      ),\n      body: RaisedButton(\n        child: Text(\"JUMP SecondRoute\"),\n        onPressed: () {\n          // Navigator.push(\n          //   context,\n          //   MaterialPageRoute(\n          //       builder: (context) => SecondPage(),\n          //       settings: RouteSettings(\n          //           arguments:\n          //               PassArgumnets('Data from FirstPage Navigator.push()'))),\n          // );\n          Navigator.pushNamed(context, '/Second',arguments: PassArgumnets('Data from FirstPage Navigator.pushNamed()'));\n        },\n      ),\n    );\n  }\n}\n\nclass SecondPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n\n    final PassArgumnets passArgumnets =ModalRoute.of(context).settings.arguments;\n\n    print(passArgumnets.content);\n    // TODO: implement build\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"Route -- SecondPage\"),\n      ),\n      body: RaisedButton(\n        child: Text(\"Go back!\"),\n        onPressed: () {\n          Navigator.pop(context);\n        },\n      ),\n    );\n  }\n}\n\nclass PassArgumnets {\n  String content;\n\n  PassArgumnets(this.content);\n}\n")])])]),a("h4",{attrs:{id:"通过-widget-的构造函数传递参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-widget-的构造函数传递参数"}},[t._v("#")]),t._v(" 通过 Widget 的构造函数传递参数")]),t._v(" "),a("p",[t._v("这个很好理解，直接看代码：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class SecondPage extends StatelessWidget {\n  PassArgumnets passArgumnets;\n\n  SecondPage(this.passArgumnets);\n\n  ....\n }\n")])])]),a("p",[t._v("SecondPage 的构造函数里有所需要的参数，那么在跳转的时候就可以这么写：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Navigator.push(\n    context,\n    MaterialPageRoute(\n        builder: (context) => SecondPage(PassArgumnets('Data from FirstPage Navigator.push()'))),\n")])])]),a("p",[t._v("不建议使用这种方式。")]),t._v(" "),a("h3",{attrs:{id:"页面关闭时返回数据给上一个页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面关闭时返回数据给上一个页面"}},[t._v("#")]),t._v(" 页面关闭时返回数据给上一个页面")]),t._v(" "),a("p",[t._v("页面关闭时返回数据给上一个页面,需要用到 "),a("code",[t._v("Navigator.pop()")]),t._v("，因为 pop() 方法里有一个 result 的可选参数，只要给这个 result 赋值，就会把数据返回给上一个页面")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("返回数据")]),t._v(" "),a("p",[t._v("将 SecondPage 里改造如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Navigator.pop(context,PassArgumnets('Return Data from SecondPage'));\n\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在上一个页面接受数据：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("_jumpToSecondPage(BuildContext context) async {\n    var passArgumnets = await Navigator.pushNamed(context, '/Second',\n        arguments: PassArgumnets('Data from FirstPage Navigator.pushNamed()'));\n    print(passArgumnets.content);\n}\n")])])]),a("p",[t._v("接受的数据就是 Navigator.pushNamed() 返回的结果，为了不阻塞 UI，这里用了 async。")])])]),t._v(" "),a("p",[t._v("完整代码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import 'package:flutter/material.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return MaterialApp(\n        title: \"Flutter Demo\",\n        theme: ThemeData(\n          primaryColor: Colors.blue,\n        ),\n        initialRoute: '/First',\n        routes: {\n          '/First': (context) => FirstPage(),\n          \"/Second\": (context) => SecondPage()\n        },\n        home: FirstPage());\n  }\n}\n\nclass FirstPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // TODO: implement build\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"Route -- FirstPage\"),\n      ),\n      body: RaisedButton(\n        child: Text(\"JUMP SecondRoute\"),\n        onPressed: () {\n          _jumpToSecondPage(context);\n        },\n      ),\n    );\n  }\n\n  _jumpToSecondPage(BuildContext context) async {\n    var passArgumnets = await Navigator.pushNamed(context, '/Second',\n        arguments: PassArgumnets('Data from FirstPage Navigator.pushNamed()'));\n    print(passArgumnets.content);\n  }\n}\n\nclass SecondPage extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    final PassArgumnets passArgumnets =\n        ModalRoute.of(context).settings.arguments;\n\n    print(passArgumnets.content);\n    // TODO: implement build\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(\"Route -- SecondPage\"),\n      ),\n      body: RaisedButton(\n        child: Text(\"Go back!\"),\n        onPressed: () {\n          Navigator.pop(context, PassArgumnets('Return Data from SecondPage'));\n        },\n      ),\n    );\n  }\n}\n\nclass PassArgumnets {\n  String content;\n\n  PassArgumnets(this.content);\n}\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);