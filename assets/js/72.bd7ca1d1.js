(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{422:function(e,t,i){"use strict";i.r(t);var a=i(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"使用-inheritedwidget-对豆瓣电影-app-进行重构"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用-inheritedwidget-对豆瓣电影-app-进行重构"}},[e._v("#")]),e._v(" 使用 InheritedWidget 对豆瓣电影 App 进行重构")]),e._v(" "),i("p",[e._v("InheritedWidget 是 Flutter 中非常重要的一个功能型 Widget，它可以高效的将数据在 Widget 树中向下传递、共享，因此 InheritedWidget 可以对全局状态进行管理。")]),e._v(" "),i("p",[e._v("本节就使用 InheritedWidget 对豆瓣电影 App 进行重构。InheritedWidget 管理全局状态，本地状态还是使用 StatefulWidget 和 setState()。")]),e._v(" "),i("h2",{attrs:{id:"重构后的工程路径"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#重构后的工程路径"}},[e._v("#")]),e._v(" 重构后的工程路径")]),e._v(" "),i("p",[e._v("StateManager/flutter_doubanmovie_inheritedwidget")]),e._v(" "),i("h2",{attrs:{id:"使用-inheritedwidget-重构"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用-inheritedwidget-重构"}},[e._v("#")]),e._v(" 使用 InheritedWidget 重构")]),e._v(" "),i("p",[e._v("InheritedWidget 的使用方法：")]),e._v(" "),i("ol",[i("li",[e._v("定义 InheritedWidget，InheritedWidget 里存储全局的数据。")]),e._v(" "),i("li",[e._v("InheritedWidget 必须是父 Widget。")]),e._v(" "),i("li",[e._v("InheritedWidget 的子 Widget 通过特定的方法取到 InheritedWidget 的实例，然后就可以访问 InheritedWidget 的数据。")]),e._v(" "),i("li",[e._v("当全局数据发生变化时，需要重新创建 InheritedWidget，重建的同时会根据条件通知 InheritedWidget 的子 Widget。")])]),e._v(" "),i("p",[e._v("在豆瓣电影 App 里的 "),i("code",[e._v("curCity")]),e._v(" 是全局状态，所以首先定义一个 ShareDataInheritedWidget：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("class ShareDataInheritedWidget extends InheritedWidget{\n  String curCity ;\n\n  ShareDataInheritedWidget(this.curCity,{Widget child}):super(child:child);\n\n  @override\n  bool updateShouldNotify(InheritedWidget oldWidget) {\n    // TODO: implement updateShouldNotify\n    return (oldWidget as ShareDataInheritedWidget).curCity != curCity;\n  }\n\n}\n")])])]),i("p",[i("code",[e._v("curCity")]),e._v(" 就是要存储的全局数据，而且要通过构造函数传入。")]),e._v(" "),i("p",[e._v("updateShouldNotify() 方法是，当全局数据发生变化，InheritedWidget 发生重建，判断需不需要通知依赖 InheritedWidget 数据的子 Widget，返回 true 是通知，返回 false 是不通知，这里写的是：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("return (oldWidget as ShareDataInheritedWidget).curCity != curCity;\n")])])]),i("p",[e._v("意思是当旧的数据和新的数据不一致时，就返回 true，否则返回 false。")]),e._v(" "),i("p",[e._v("因为 HotWidget、HotMoviesListWidget、CitysWidget 都需要 "),i("code",[e._v("curCity")]),e._v("，所以要让 ShareDataInheritedWidget 是这几个 Widget 的父 Widget。如下：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("class _MyHomePageState extends State<MyHomePage> {\n  ...\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: ShareDataInheritedWidget(\n        '深圳',\n        child: _widgetItems[_selectedIndex],\n      ), //选中不同的选项显示不同的界面,\n      ...\n    );\n  }\n\n  ...\n}\n")])])]),i("p",[e._v("写完之后，HotWidget、HotMoviesListWidget、CitysWidget 就可以通过特定的方法访问到 ShareDataInheritedWidget 里的 "),i("code",[e._v("curCity")]),e._v("，这个特定的方法是：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("context.inheritFromWidgetOfExactType(Type targetType)\n")])])]),i("p",[e._v("context 就是子 Widget 的 context，Type 是类型，就是要访问的 ShareDataInheritedWidget，所以要得到 ShareDataInheritedWidget 的实例就是：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("context.inheritFromWidgetOfExactType(ShareDataInheritedWidget);\n")])])]),i("p",[e._v("因为子 Widget 中要经常获取 ShareDataInheritedWidget 的实例，所以可以把这个方法写在 ShareDataInheritedWidget 里：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("class ShareDataInheritedWidget extends InheritedWidget {\n  ...\n  //定义一个便捷方法，方便子树中的 Widget 获取 ShareDataInheritedWidget 实例\n  static ShareDataInheritedWidget of(BuildContext context) {\n    return context.inheritFromWidgetOfExactType(ShareDataInheritedWidget);\n  }\n  ...\n}\n")])])]),i("p",[e._v("这样在子 Widget 中获取 ShareDataInheritedWidget 的实例就是：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("ShareDataInheritedWidget.of(context);\n")])])]),i("p",[e._v("获取 "),i("code",[e._v("curCity")]),e._v(" 就是：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("hareDataInheritedWidget.of(context).curCity;\n")])])]),i("p",[e._v("现在对 HotWidget 进行重构，因为 "),i("code",[e._v("curCity")]),e._v(" 现在是存储在 ShareDataInheritedWidget 里，所以把 HotWidget 里的 "),i("code",[e._v("curCity")]),e._v(" 变量删掉，用到 "),i("code",[e._v("curCity")]),e._v(" 的地方，用 "),i("code",[e._v("ShareDataInheritedWidget.of(context).curCity")]),e._v(" 代替，同时把 curCity 读取的逻辑从 HotWidget 放到 _MyHomePageState 里。")]),e._v(" "),i("p",[e._v("_MyHomePageState 的代码就变为：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("class _MyHomePageState extends State<MyHomePage> {\n  ...\n  String _curCity;\n\n  @override\n  void initState() {\n    // TODO: implement initState\n    super.initState();\n    initData();\n  }\n\n  void initData() async {\n    final prefs = await SharedPreferences.getInstance(); //获取 prefs\n\n    String city = prefs.getString('curCity'); //获取 key 为 curCity 的值\n\n    if (city != null && city.isNotEmpty) {\n      //如果有值\n      setState(() {\n        _curCity = city;\n      });\n    } else {\n      //如果没有值，则使用默认值\n      setState(() {\n        _curCity = '深圳';\n      });\n    }\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      body: ShareDataInheritedWidget(\n        _curCity, //默认值\n        child: _widgetItems[_selectedIndex],\n      ), //选中不同的选项显示不同的界面,\n      ...\n    );\n  }\n  ...\n}\n")])])]),i("p",[e._v("接下来对 HotMoviesListWidget 进行重构，之前 HotMoviesListWidget 的构造函数里需要传入 "),i("code",[e._v("curCity")]),e._v("，现在就不需要了，HotMoviesListWidget 里的 "),i("code",[e._v("curCity")]),e._v(" 变量全都用 "),i("code",[e._v("ShareDataInheritedWidget.of(context).curCity")]),e._v(" 代替。")]),e._v(" "),i("p",[e._v("这里还有一个问题要解决，HotMoviesListWidget 的代码：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("@override\n  void initState() {\n    // TODO: implement initState\n    super.initState();\n    _getData();\n  }\n\n  void _getData() async {\n    List<HotMovieData> serverDataList = new List();\n    var response = await http.get(\n        'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=' +\n            ShareDataInheritedWidget.of(context).curCity +\n            '&start=0&count=10');\n    //成功获取数据\n    if (response.statusCode == 200) {\n      var responseJson = json.decode(response.body);\n      for (dynamic data in responseJson['subjects']) {\n        HotMovieData hotMovieData = HotMovieData.fromJson(data);\n        serverDataList.add(hotMovieData);\n      }\n      setState(() {\n        hotMovies = serverDataList;\n      });\n    }\n  }\n")])])]),i("p",[e._v("因为 _getData() 里的 "),i("code",[e._v("ShareDataInheritedWidget.of(context).curCity")]),e._v(" 用到了 context，所以 _getData() 不能放在 initState() 里调用，因为在  initState() 里 context 还不能使用，所以要重构成：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("  @override\n  void initState() {\n    // TODO: implement initState\n    super.initState();\n  }\n\n  @override\n  void didChangeDependencies() {\n    // TODO: implement didChangeDependencies\n    super.didChangeDependencies();\n    _getData();\n  }\n\n  void _getData() async {\n    ...\n  }\n")])])]),i("p",[e._v("didChangeDependencies() 方法会在它依赖的数据发生变化的时候调用，而这里 HotMoviesListWidget 依赖的数据就是其父 Widget ShareDataInheritedWidget 的数据，didChangeDependencies() 调用的条件就是 ShareDataInheritedWidget 的 updateShouldNotify() 方法返回 true。")]),e._v(" "),i("p",[e._v("最后对 CitysWidget 进行重构，涉及到 CitysWidget 的代码是：从 HotWidget 里点击，携带当前城市的数据跳转到 CitysWidget，在 CitysWidget 里选完数据后返回 HotWidget，并刷新 HotWidget：")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("  void _jumpToCitysWidget() async {\n    var selectCity =\n        await Navigator.pushNamed(context, '/Citys', arguments: ShareDataInheritedWidget.of(context).curCity);\n    if (selectCity == null) return;\n\n    final prefs = await SharedPreferences.getInstance(); \n    prefs.setString('curCity', selectCity); //存取数据\n\n    setState(() {\n      ShareDataInheritedWidget.of(context).curCity = selectCity;\n    });\n  }\n")])])]),i("p",[e._v("这里去实际操作，你会发现，HotWidget 里所选城市的数据没有变化，数据也没有重新刷新，因为 "),i("code",[e._v("ShareDataInheritedWidget.of(context).curCity = selectCity;")]),e._v(" 用法是错误的，虽然你改了 ShareDataInheritedWidget 里的数据，但是 ShareDataInheritedWidget 没有重建，所以子 Widget 也不会收到 didChangeDependencies()，那如何让 ShareDataInheritedWidget 重建呢？")]),e._v(" "),i("p",[e._v("使用 InheritedWidget 是无法做到的，因为 InheritedWidget 只能把数据在 Widget 树中向下传递，下面的数据是无法向上传递，所以下面 "),i("code",[e._v("curCity")]),e._v(" 的变化，无法通知到 InheritedWidget。")]),e._v(" "),i("h2",{attrs:{id:"总结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),i("p",[e._v("通过 InheritedWidget 对豆瓣电影 App 的重构，我们可以发现 InheritedWidget 的优点：")]),e._v(" "),i("ul",[i("li",[e._v("可以对全局状态进行管理")])]),e._v(" "),i("p",[e._v("但是，也有很多的缺点：")]),e._v(" "),i("ul",[i("li",[e._v("UI 逻辑和业务逻辑没有分开")]),e._v(" "),i("li",[e._v("无法管理本地状态")]),e._v(" "),i("li",[e._v("数据只能从上到下传递，无法从下到上传递")]),e._v(" "),i("li",[e._v("随着 App 变大，代码维护也会变得越来越难。")])]),e._v(" "),i("p",[e._v("所以，不要使用 InheritedWidget 对状态进行管理。")])])}),[],!1,null,null,null);t.default=n.exports}}]);