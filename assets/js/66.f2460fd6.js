(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{419:function(t,e,a){"use strict";a.r(e);var n=a(42),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"实现买票的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现买票的功能"}},[t._v("#")]),t._v(" 实现买票的功能")]),t._v(" "),a("p",[t._v("本章实现买票的功能，假设买票的功能只能在 Native 端实现，这时 在电影列表页面，点击购买按钮，Flutter 就会调用 Native 的代码来实现买票，所以这节的主要内容就是 Flutter 调用 Native 的能力。")]),t._v(" "),a("p",[t._v("注意，在这里买票的功能用弹窗来模拟的。")]),t._v(" "),a("h2",{attrs:{id:"首先在-native-端实现买票功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先在-native-端实现买票功能"}},[t._v("#")]),t._v(" 首先在 Native 端实现买票功能")]),t._v(" "),a("p",[t._v("假设这里 Native 端是 Android，因为要在 Native 端实现，所以要用 Android Studio。")]),t._v(" "),a("h4",{attrs:{id:"在-android-studio-里打开工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-android-studio-里打开工程"}},[t._v("#")]),t._v(" 在 Android Studio 里打开工程")]),t._v(" "),a("p",[t._v("在 Android Studio 里打开 Flutter 里 Android 部分的工程：")]),t._v(" "),a("ol",[a("li",[t._v("打开 Android Studio")]),t._v(" "),a("li",[t._v("选择 "),a("code",[t._v("Open an existing Android Studio project")]),t._v(",或者 "),a("code",[t._v("File")]),t._v(" -> "),a("code",[t._v("Open")])]),t._v(" "),a("li",[t._v("选择文件夹： "),a("code",[t._v("The-Guide-to-the-Flutter/flutter_doubanmovie/android")]),t._v("，然后点击 "),a("code",[t._v("Open")])])]),t._v(" "),a("p",[t._v("这样就打开了 Flutter 里 Android 部分的工程,然后在 "),a("code",[t._v("app/java/com.exammple.flutter_doubanmovie")]),t._v(" 里找到 "),a("code",[t._v("MainActivity.java")])]),t._v(" "),a("h4",{attrs:{id:"实现功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现功能"}},[t._v("#")]),t._v(" 实现功能")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("MainActivity.java")]),t._v(" 里实现功能：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('package com.example.flutter_doubanmovie;\n\nimport android.app.AlertDialog;\nimport android.os.Bundle;\nimport android.widget.Toast;\n\nimport io.flutter.app.FlutterActivity;\nimport io.flutter.plugin.common.MethodCall;\nimport io.flutter.plugin.common.MethodChannel;\nimport io.flutter.plugin.common.MethodCodec;\nimport io.flutter.plugins.GeneratedPluginRegistrant;\n\npublic class MainActivity extends FlutterActivity {\n  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    GeneratedPluginRegistrant.registerWith(this);\n\n    new MethodChannel(getFlutterView(), "flutter.doubanmovie/buy").setMethodCallHandler(new MethodChannel.MethodCallHandler() {\n      @Override\n      public void onMethodCall(MethodCall methodCall, MethodChannel.Result result) {\n        switch (methodCall.method){\n          case "buyTicket":\n            //显示dialog\n            new AlertDialog.Builder(MainActivity.this)\n                    .setTitle("买票")\n                    .setMessage((String)methodCall.arguments)\n                    .create().show();\n            //返回消息\n            result.success(0);\n            return;\n          default:\n            result.notImplemented();\n            return;\n        }\n      }\n    });\n  }\n}\n')])])]),a("p",[t._v("用到了 "),a("code",[t._v("MethodChannel")]),t._v(" 来监听来自 Flutter 的调用，其中 "),a("code",[t._v("flutter.doubanmovie/buy")]),t._v(" 是用来区别不同的 MethodChannel，这个在 Dart 里也需要用到。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("onMethodCall")]),t._v(" 里，"),a("code",[t._v("methodCall.method")]),t._v(" 是方法名，"),a("code",[t._v("methodCall.arguments")]),t._v(" 是参数，"),a("code",[t._v("result")]),t._v(" 是将执行结果返回给 Flutter。")]),t._v(" "),a("h2",{attrs:{id:"在-flutter-端调用-native-的买票功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-flutter-端调用-native-的买票功能"}},[t._v("#")]),t._v(" 在 Flutter 端调用 Native 的买票功能")]),t._v(" "),a("p",[t._v("然后打开 VS Code ，在 "),a("code",[t._v("HotMovieItemWidget.dart")]),t._v(" 里实现调用 Native 买票的功能。")]),t._v(" "),a("h4",{attrs:{id:"先给买票按钮添加点击事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先给买票按钮添加点击事件"}},[t._v("#")]),t._v(" 先给买票按钮添加点击事件")]),t._v(" "),a("p",[t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("OutlineButton(\n  child: Text(\n    '购票',\n    style: TextStyle(fontSize: 16),\n  ),\n  color: Colors.red,\n  textColor: Colors.red,\n  highlightedBorderColor: Colors.red,\n  borderSide: BorderSide(color: Colors.red),\n  onPressed: () {\n\n  },\n)\n")])])]),a("h4",{attrs:{id:"添加-methodchannel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-methodchannel"}},[t._v("#")]),t._v(" 添加 MethodChannel")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class HotMovieItemWidgetState extends State<HotMovieItemWidget> {\n  static const methodChannel = const MethodChannel('flutter.doubanmovie/buy');\n\n  ...\n}\n")])])]),a("p",[t._v("这里 "),a("code",[t._v("flutter.doubanmovie/buy")]),t._v(" 要和 Native 的保持一致。")]),t._v(" "),a("h4",{attrs:{id:"调用-native-的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用-native-的功能"}},[t._v("#")]),t._v(" 调用 Native 的功能")]),t._v(" "),a("p",[t._v("在买票按钮的 "),a("code",[t._v("onPressed")]),t._v(" 里添加：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("onPressed: () {\n    methodChannel.invokeMethod('buyTicket',\n    '购买 ' + widget.hotMovieData.title + ' 电影票一张');\n},\n")])])]),a("p",[t._v("运行效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/4/29/16a686393bff6504?w=384&h=768&f=png&s=140213",alt:""}})]),t._v(" "),a("p",[t._v("注意：这里功能是在 Android 上实现的，请使用 Android 的模拟器。")])])}),[],!1,null,null,null);e.default=o.exports}}]);