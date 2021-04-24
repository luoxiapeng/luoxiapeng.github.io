(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{390:function(t,e,n){"use strict";n.r(e);var r=n(42),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"flutter-基础-widget-输入框和表单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutter-基础-widget-输入框和表单"}},[t._v("#")]),t._v(" Flutter 基础 Widget —— 输入框和表单")]),t._v(" "),n("p",[t._v("本节讲 Flutter 输入框及表单的使用。")]),t._v(" "),n("h1",{attrs:{id:"输入框"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#输入框"}},[t._v("#")]),t._v(" 输入框")]),t._v(" "),n("p",[t._v("在 Flutter 中，输入框的 Widget 为：")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://docs.flutter.io/flutter/material/TextField-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TextField"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"textfield"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#textfield"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://docs.flutter.io/flutter/material/TextField-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TextField"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("TextField 是文本输入框。")]),t._v(" "),n("h3",{attrs:{id:"代码所在位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),n("p",[t._v("flutter_widget_demo/lib/textfield/TextFieldWidget.dart")]),t._v(" "),n("h3",{attrs:{id:"textfiled-的快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#textfiled-的快速上手"}},[t._v("#")]),t._v(" TextFiled 的快速上手")]),t._v(" "),n("p",[t._v("TextFile 的最简单使用方式就是使用无参构造函数写一个 TextFiled 对象：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("TextField();\n")])])]),n("p",[t._v("TextField 写到一个页面的完整 Demo 代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(TextFieldWidget());\n\nclass TextFieldWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: "Flutter Demo",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n          appBar: AppBar(title: Text("Flutter UI基础Widget -- 文本")),\n          body: TextField()),\n    );\n  }\n}\n')])])]),n("p",[t._v("运行效果为：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/9/16961758744cb5c0?w=842&h=334&f=jpeg&s=43546",alt:""}})]),t._v(" "),n("p",[t._v("可以在文本框里输入文字。")]),t._v(" "),n("h4",{attrs:{id:"获取-textfield-的内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取-textfield-的内容"}},[t._v("#")]),t._v(" 获取 TextField 的内容")]),t._v(" "),n("p",[t._v("因为是输入框，所以需要获取输入的内容，TextField 获取输入内容有两种方式：")]),t._v(" "),n("ol",[n("li",[t._v("onChanged")]),t._v(" "),n("li",[t._v("TextEditingController")])]),t._v(" "),n("h4",{attrs:{id:"onchanged"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#onchanged"}},[t._v("#")]),t._v(" onChanged")]),t._v(" "),n("p",[t._v("当用户输入，TextField 的内容发生变化，TextField 就会调用它的 onChanged 回调。 因此 onChanged 可以实时查看 TextField 的内容变化。")]),t._v(" "),n("p",[t._v("使用代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("TextField(\n    onChanged: (String data) {\n      //实时获取\n      print(data);\n    },\n  )\n")])])]),n("h4",{attrs:{id:"texteditingcontroller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#texteditingcontroller"}},[t._v("#")]),t._v(" TextEditingController")]),t._v(" "),n("p",[t._v("TextEditingController 是 TextField 的控制类，可以控制 TextField 的编辑，是 TextField 的 controller 属性，我们可以为 TextField 赋值自己创建的 TextEditingController 对象来控制 TextField。\n使用代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\nclass TextFieldWidget extends StatelessWidget {\n  final TextEditingController _controller = TextEditingController();\n\n  @override\n  Widget build(BuildContext context) {\n    return\n        ...\n        TextField(\n            controller: _controller,\n        ),\n        ...\n    );\n  }\n}\n")])])]),n("p",[t._v("然后使用 "),n("code",[t._v("_controller.text")]),t._v(" 来访问 TextField 里的内容。")]),t._v(" "),n("h3",{attrs:{id:"textfield-的构造函数及参数说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#textfield-的构造函数及参数说明"}},[t._v("#")]),t._v(" TextField 的构造函数及参数说明")]),t._v(" "),n("p",[t._v("TextField 的构造函数为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class TextField extends StatefulWidget {\n\n  const TextField({\n    Key key,\n    this.controller,\n    this.focusNode,\n    this.decoration = const InputDecoration(),\n    TextInputType keyboardType,\n    this.textInputAction,\n    this.textCapitalization = TextCapitalization.none,\n    this.style,\n    this.textAlign = TextAlign.start,\n    this.textDirection,\n    this.autofocus = false,\n    this.obscureText = false,\n    this.autocorrect = true,\n    this.maxLines = 1,\n    this.maxLength,\n    this.maxLengthEnforced = true,\n    this.onChanged,\n    this.onEditingComplete,\n    this.onSubmitted,\n    this.inputFormatters,\n    this.enabled,\n    this.cursorWidth = 2.0,\n    this.cursorRadius,\n    this.cursorColor,\n    this.keyboardAppearance,\n    this.scrollPadding = const EdgeInsets.all(20.0),\n    this.dragStartBehavior = DragStartBehavior.down,\n    this.enableInteractiveSelection,\n    this.onTap,\n    this.buildCounter,\n  }) : assert(textAlign != null),\n       assert(autofocus != null),\n       assert(obscureText != null),\n       assert(autocorrect != null),\n       assert(maxLengthEnforced != null),\n       assert(scrollPadding != null),\n       assert(dragStartBehavior != null),\n       assert(maxLines == null || maxLines > 0),\n       assert(maxLength == null || maxLength == TextField.noMaxLength || maxLength > 0),\n       keyboardType = keyboardType ?? (maxLines == 1 ? TextInputType.text : TextInputType.multiline),\n       super(key: key);\n\n}\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名字")]),t._v(" "),n("th",[t._v("参数类型")]),t._v(" "),n("th",[t._v("意义")]),t._v(" "),n("th",[t._v("必选 or 可选")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[t._v("Key")]),t._v(" "),n("td",[t._v("Widget 的标识")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("controller")]),t._v(" "),n("td",[t._v("TextEditingController")]),t._v(" "),n("td",[t._v("控制 TextField 的编辑，如果没有设置，会有默认值")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("focusNode")]),t._v(" "),n("td",[t._v("FocusNode")]),t._v(" "),n("td",[t._v("用于控制 TextField 是否占有当前键盘的输入焦点"),n("br"),t._v("它是我们和键盘交互的一个 handle")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("decoration")]),t._v(" "),n("td",[t._v("InputDecoration")]),t._v(" "),n("td",[t._v("用于控制 TextField 的外观显示，如提示文本、背景颜色、边框等")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("textAlign")]),t._v(" "),n("td",[t._v("TextAlign")]),t._v(" "),n("td",[t._v("文本的对齐方式")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("textDirection")]),t._v(" "),n("td",[t._v("TextDirection")]),t._v(" "),n("td",[t._v("文字方向")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("keyboardType")]),t._v(" "),n("td",[t._v("TextInputType")]),t._v(" "),n("td",[t._v("用于设置该输入框默认的键盘输入类型")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("textInputAction")]),t._v(" "),n("td",[t._v("TextInputAction")]),t._v(" "),n("td",[t._v("键盘动作按钮图标(即回车键位图标)")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("textCapitalization")]),t._v(" "),n("td",[t._v("TextCapitalization")]),t._v(" "),n("td",[t._v("定义文本的大写格式")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("style")]),t._v(" "),n("td",[t._v("TextStyle")]),t._v(" "),n("td",[t._v("文本样式")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("textAlign")]),t._v(" "),n("td",[t._v("TextAlign")]),t._v(" "),n("td",[t._v("文本的对齐方式")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("textDirection")]),t._v(" "),n("td",[t._v("TextDirection")]),t._v(" "),n("td",[t._v("文字方向")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("autofocus")]),t._v(" "),n("td",[t._v("bool")]),t._v(" "),n("td",[t._v("是否自动获取焦点"),n("br"),t._v("默认为 false")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("obscureText")]),t._v(" "),n("td",[t._v("bool")]),t._v(" "),n("td",[t._v("是否隐藏正在编辑的文本，如用于输入密码的场景等，文本内容会用“•”替换"),n("br"),t._v("默认为 false")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("autocorrect")]),t._v(" "),n("td",[t._v("bool")]),t._v(" "),n("td",[n("br"),t._v("默认为 true")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("maxLines")]),t._v(" "),n("td",[t._v("int")]),t._v(" "),n("td",[t._v("显示的最大行数")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("maxLength")]),t._v(" "),n("td",[t._v("int")]),t._v(" "),n("td",[t._v("输入框中允许的最大字符数")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("maxLengthEnforced")]),t._v(" "),n("td",[t._v("bool")]),t._v(" "),n("td",[t._v("是否强制限制最大字符数，默认为 true"),n("br"),t._v("true：强制限制最大字符数"),n("br"),t._v("false：不限制最大字符数，即使设置了 maxLength 也不生效")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("onChange")]),t._v(" "),n("td",[t._v("ValueChanged"),n("String")],1),t._v(" "),n("td",[t._v("输入框内容改变时的回调函数；注：内容改变事件也可以通过 controller 来监听")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("onEditingComplete")]),t._v(" "),n("td",[t._v("VoidCallback")]),t._v(" "),n("td",[t._v("输入框输入完成时触发，但是 onEditingComplete 没有参数，不会返回内容")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("onSubmitted")]),t._v(" "),n("td",[t._v("ValueChanged"),n("String")],1),t._v(" "),n("td",[t._v("输入框输入完成时触发，但是 onSubmitted 有参数，会返回内容")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("inputFormatters")]),t._v(" "),n("td",[t._v("List< TextInputFormatter>")]),t._v(" "),n("td",[t._v("用于指定输入格式；当用户输入内容改变时，会根据指定的格式来校验。")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("enabled")]),t._v(" "),n("td",[t._v("bool")]),t._v(" "),n("td",[t._v("输入框是否禁用"),n("br"),t._v(" 如果为 false，则输入框会被禁用，禁用状态不接收输入和事件，同时显示禁用态样式（在其 decoration 中定义）。")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("cursorWidth")]),t._v(" "),n("td",[t._v("double")]),t._v(" "),n("td",[t._v("自定义输入框光标宽度")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("cursorRadius")]),t._v(" "),n("td",[t._v("Radius")]),t._v(" "),n("td",[t._v("自定义输入框光标圆角")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("cursorColor")]),t._v(" "),n("td",[t._v("Color")]),t._v(" "),n("td",[t._v("自定义输入框光标颜色")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("keyboardAppearance")]),t._v(" "),n("td",[t._v("Brightness")]),t._v(" "),n("td",[t._v("设置键盘的亮度模式"),n("br"),t._v(" 只能在 iOS 上使用，有两种：Brightness.dart 和 Brightness.light")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("scrollPadding")]),t._v(" "),n("td",[t._v("EdgeInsets")]),t._v(" "),n("td",[t._v("文本框滑动时的间距")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("dragStartBehavior")]),t._v(" "),n("td",[t._v("DragStartBehavior")]),t._v(" "),n("td",[t._v("设置确定当用户启动拖动时拖动正式开始的时间")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("enableInteractiveSelection")]),t._v(" "),n("td",[t._v("bool")]),t._v(" "),n("td",[t._v("是否启用交互式选择"),n("br"),t._v("true：长按将会选中文字，并且弹出 cut/copy/paste 的菜单")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("onTap")]),t._v(" "),n("td",[t._v("GestureTapCallback")]),t._v(" "),n("td",[t._v("TextField 的点击事件")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("buildCounter")]),t._v(" "),n("td",[t._v("InputCounterWidgetBuilder")]),t._v(" "),n("td",[t._v("生成自定义 InputDecorator.counter 小部件的回调")]),t._v(" "),n("td",[t._v("可选")])])])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("keyboardType：类型为 TextInputType，用于设置该输入框默认的键盘输入类型。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("TextInputType 的值")]),t._v(" "),n("th",[t._v("含义")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("TextInputType.text")]),t._v(" "),n("td",[t._v("文本输入键盘")])]),t._v(" "),n("tr",[n("td",[t._v("TextInputType.multiline")]),t._v(" "),n("td",[t._v("多行文本，需和 maxLines 配合使用(设为 null 或大于 1)")])]),t._v(" "),n("tr",[n("td",[t._v("TextInputType.number")]),t._v(" "),n("td",[t._v("数字；会弹出数字键盘")])]),t._v(" "),n("tr",[n("td",[t._v("TextInputType.phone")]),t._v(" "),n("td",[t._v('优化后的电话号码输入键盘；会弹出数字键盘并显示"* #"')])]),t._v(" "),n("tr",[n("td",[t._v("TextInputType.datetime")]),t._v(" "),n("td",[t._v("优化后的日期输入键盘；Android 上会显示“: -”")])]),t._v(" "),n("tr",[n("td",[t._v("TextInputType.emailAddress")]),t._v(" "),n("td",[t._v("优化后的电子邮件地址；会显示“@ .”")])]),t._v(" "),n("tr",[n("td",[t._v("TextInputType.url")]),t._v(" "),n("td",[t._v("优化后的 url 输入键盘； 会显示“/ .”")])])])])]),t._v(" "),n("li",[n("p",[t._v("textInputAction：类型为 TextInputAction，键盘动作按钮图标(即回车键位图标)。")]),t._v(" "),n("p",[t._v("就是键盘右下角的那一个块图标。\n"),n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/9/1696212b0d8fe836?w=1016&h=1740&f=jpeg&s=171489",alt:""}})])]),t._v(" "),n("li",[n("p",[t._v("textCapitalization：类型为 TextCapitalization，定义文本的大写格式。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("TextCapitalization 的值")]),t._v(" "),n("th",[t._v("含义")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("TextCapitalization.none")]),t._v(" "),n("td",[t._v("全部小写")])]),t._v(" "),n("tr",[n("td",[t._v("TextCapitalization.words")]),t._v(" "),n("td",[t._v("每个单词的首字母大写")])]),t._v(" "),n("tr",[n("td",[t._v("TextCapitalization.sentences")]),t._v(" "),n("td",[t._v("每个句子的首字母大写")])]),t._v(" "),n("tr",[n("td",[t._v("TextCapitalization.characters")]),t._v(" "),n("td",[t._v("每个字每大写")])])])])])]),t._v(" "),n("h1",{attrs:{id:"表单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表单"}},[t._v("#")]),t._v(" 表单")]),t._v(" "),n("p",[t._v("表单是用来对输入的信息进行校验的，在 Flutter 中，表单的 Widget 为：")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Form-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Form"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"form"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#form"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Form-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Form"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("Form 是将多个表单元素组合起来的一个容器，可以将多个表单元素合并起来一起校验。")]),t._v(" "),n("p",[t._v("表单元素的 Widget 是 FormField 及其子类，最常用的是以下两个：")]),t._v(" "),n("ul",[n("li",[t._v("DropdownButtonFormField")]),t._v(" "),n("li",[t._v("TextFormField")])]),t._v(" "),n("p",[t._v("使用方法就是：")]),t._v(" "),n("ol",[n("li",[t._v("创建 Form，并为其添加 GlobalKey。")]),t._v(" "),n("li",[t._v("在 Form 里添加表单元素，并给表单元素添加校验逻辑。")]),t._v(" "),n("li",[t._v("添加一个按钮去提交并验证表单，提交并验证表单需要用到 Form 的 FormState 方法，Form 是 StatefulWidget，FormState 是 Form 的状态。")])]),t._v(" "),n("h3",{attrs:{id:"代码所在位置-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码所在位置-2"}},[t._v("#")]),t._v(" 代码所在位置")]),t._v(" "),n("p",[t._v("flutter_widget_demo/lib/textfield/FormWidget.dart")]),t._v(" "),n("h3",{attrs:{id:"表单的快速使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表单的快速使用"}},[t._v("#")]),t._v(" 表单的快速使用")]),t._v(" "),n("p",[t._v("这里举一个用户注册的例子，在表单里选择性别，填入用户名和密码，用户名要大于 5 个字符，密码要大于 8 个字符，才能注册成功。")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("创建 Form，并为其添加 GlobalKey：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import \'package:flutter/material.dart\';\n\nvoid main() => runApp(FormWidget());\n\nclass FormWidget extends StatefulWidget {\n  @override\n  State<StatefulWidget> createState() {\n    // TODO: implement createState\n    return FormWidgetState();\n  }\n}\n\nclass FormWidgetState extends State<FormWidget> {\n  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: "Flutter Demo",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n          appBar: AppBar(title: Text("Flutter UI基础Widget -- Form")),\n          body: Form(\n            key: _formKey,\n            child: ...\n          )),\n    );\n  }\n}\n\n')])])])]),t._v(" "),n("li",[n("p",[t._v("在 Form 里添加表单元素，并给表单元素添加校验逻辑。\n这里添加的表单元素，我使用到了 DropdownButtonFormField 和 TextFormField：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Form(\n    key: _formKey,\n    child: Column(\n      children: <Widget>[\n        DropdownButtonFormField<String>(\n          value: _userGender,\n          items: ['男', '女']\n              .map((label) => DropdownMenuItem(\n                    child: Text(label),\n                    value: label,\n                  ))\n              .toList(),\n          onChanged: (value){\n            setState(() {\n              _userGender = value;\n            });\n          },\n          onSaved: (value){\n            _userGender = value;\n          },\n        ),\n        TextFormField(\n          decoration: InputDecoration(hintText: '用户名'),\n          validator: (value) { // 校验\n            if (value?.length <= 5) {\n              return '用户名必须大于 5 个字符';\n            }\n          },\n          onSaved: (value) {\n            _userName = value;\n          },\n        ),\n        TextFormField(\n          decoration: InputDecoration(hintText: '密码'),\n          obscureText: true,\n          validator: (value) {\n            if (value?.length <= 8) {// 校验\n              return '密码必须大于 8 个字符';\n            }\n          },\n          onSaved: (value) {\n            _userPassword = value;\n          },\n        )\n      ],\n    ),\n  )),\n")])])])])]),t._v(" "),n("ul",[n("li",[t._v("validator")])]),t._v(" "),n("p",[t._v("表单元素的验证逻辑是 validator 函数：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("validator: (value) { // 校验\n    if (value?.length <= 8) {\n      return '用户名必须大于 5 个字符';\n    }\n  }\n")])])]),n("p",[t._v("validator 的使用方法是，当表单元素的 value 值，当校验不符合时，就返回一个 String ，这个 String 是错误提示，如果校验成功，就什么也不做。")]),t._v(" "),n("ul",[n("li",[t._v("obscureText\nobscureText 设为 Ture，会隐藏当前输入的文字，用 "),n("code",[t._v("*")]),t._v(" 代理。")])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[t._v("添加一个按钮去提交并验证表单")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Form(\n    child: Column(\n        ...\n        RaisedButton(\n          child: Text('注册'),\n          onPressed: () {\n            if (_formKey.currentState.validate()) {\n              _formKey.currentState.save();\n              print(_userGender);\n              print(_userName);\n              print(_userPassword);\n            }\n          },\n        )\n)),\n")])])]),n("p",[t._v("提交并验证表单需要用到 Form 的 FormState 方法，Form 是 StatefulWidget，FormState 是 Form 的状态。")]),t._v(" "),n("p",[t._v("FormState 为 Form 的 State 类，可以通过 Form.of() 或 GlobalKey 获得。我们可以通过它来对 Form 的子孙 FormField 进行统一操作。我们看看其常用的三个方法：")]),t._v(" "),n("ul",[n("li",[t._v("FormState.validate()：调用此方法后，会调用 Form 子孙 FormField 的 validate 回调，如果有一个校验失败，则返回 false，所有校验失败项都会返回用户返回的错误提示。")]),t._v(" "),n("li",[t._v("FormState.save()：调用此方法后，会调用 Form 子孙 FormField 的 save 回调，用于保存表单内容")]),t._v(" "),n("li",[t._v("FormState.reset()：调用此方法后，会将 子孙 FormField 的内容清空。")])])])]),t._v(" "),n("p",[t._v("完整代码为：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import 'package:flutter/material.dart';\n\nvoid main() => runApp(FormWidget());\n\nclass FormWidget extends StatefulWidget {\n  @override\n  State<StatefulWidget> createState() {\n    // TODO: implement createState\n    return FormWidgetState();\n  }\n}\n\nclass FormWidgetState extends State<FormWidget> {\n  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();\n\n  String _userGender = '男';\n  String _userName;\n  String _userPassword;\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \"Flutter Demo\",\n      theme: ThemeData(\n        primaryColor: Colors.blue,\n      ),\n      home: Scaffold(\n          appBar: AppBar(title: Text(\"Flutter UI基础Widget -- Form\")),\n          body: Form(\n            key: _formKey,\n            child: Column(\n              children: <Widget>[\n                DropdownButtonFormField<String>(\n                  value: _userGender,\n                  items: ['男', '女']\n                      .map((label) => DropdownMenuItem(\n                            child: Text(label),\n                            value: label,\n                          ))\n                      .toList(),\n                  onChanged: (value){\n                    setState(() {\n                      _userGender = value;\n                    });\n                  },\n                  onSaved: (value){\n                    _userGender = value;\n                  },\n                ),\n                TextFormField(\n                  decoration: InputDecoration(hintText: '用户名'),\n                  validator: (value) { //\n                    if (value?.length <= 5) {\n                      return '用户名必须大于 5 个字符';\n                    }\n                  },\n                  onSaved: (value) {\n                    _userName = value;\n                  },\n                ),\n                TextFormField(\n                  decoration: InputDecoration(hintText: '密码'),\n                  obscureText: true,\n                  validator: (value) {\n                    if (value?.length <= 8) {\n                      return '密码必须大于 8 个字符';\n                    }\n                  },\n                  onSaved: (value) {\n                    _userPassword = value;\n                  },\n                ),\n                RaisedButton(\n                  child: Text('注册'),\n                  onPressed: () {\n                    if (_formKey.currentState.validate()) {\n                      _formKey.currentState.save();\n                      print(_userGender);\n                      print(_userName);\n                      print(_userPassword);\n                    }\n                  },\n                )\n              ],\n            ),\n          )),\n    );\n  }\n}\n")])])]),n("h3",{attrs:{id:"form-的构造函数及参数说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#form-的构造函数及参数说明"}},[t._v("#")]),t._v(" Form 的构造函数及参数说明")]),t._v(" "),n("p",[t._v("在看一下 Form 的构造函数：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Form extends StatefulWidget {\n\n  const Form({\n    Key key,\n    @required this.child,\n    this.autovalidate = false,\n    this.onWillPop,\n    this.onChanged,\n  }) : assert(child != null),\n       super(key: key);\n    ...\n}\n")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名字")]),t._v(" "),n("th",[t._v("参数类型")]),t._v(" "),n("th",[t._v("意义")]),t._v(" "),n("th",[t._v("必选 or 可选")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("key")]),t._v(" "),n("td",[t._v("Key")]),t._v(" "),n("td",[t._v("Widget 的标识")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("child")]),t._v(" "),n("td",[t._v("Widget")]),t._v(" "),n("td",[t._v("Form 的子 Widget")]),t._v(" "),n("td",[t._v("必选")])]),t._v(" "),n("tr",[n("td",[t._v("autovalidate")]),t._v(" "),n("td",[t._v("bool")]),t._v(" "),n("td",[t._v("是否自动验证，默认为 false"),n("br"),t._v("true：每次输入有变动都会验证"),n("br"),t._v("false：只有调用 FormFieldState.validate 才会验证")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("onWillPop")]),t._v(" "),n("td",[t._v("WillPopCallback")]),t._v(" "),n("td",[t._v("决定 Form 所在的路由是否可以直接返回（如点击返回按钮），这个回调会返回一个 Future 对象，如果 Future 的最终结果是 false，则当前路由不会返回；如果为 true，则会返回到上一个路由。此属性通常用于拦截返回按钮。")]),t._v(" "),n("td",[t._v("可选")])]),t._v(" "),n("tr",[n("td",[t._v("onChanged")]),t._v(" "),n("td",[t._v("VoidCallback")]),t._v(" "),n("td",[t._v("Form 的任意一个 子 FormField 内容发生变化时会触发此回调")]),t._v(" "),n("td",[t._v("必选")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);