(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{566:function(a,t,e){"use strict";e.r(t);var s=e(42),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"常用的构造方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的构造方法"}},[a._v("#")]),a._v(" 常用的构造方法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" Date date=new Date()\n")])])]),e("h2",{attrs:{id:"日期带参数的构造方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日期带参数的构造方法"}},[a._v("#")]),a._v(" 日期带参数的构造方法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" Date date=new Date(0l)//可以将毫秒值转换为日期\n")])])]),e("ul",[e("li",[a._v("getTime() 把日期转换为毫秒")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" Date date=new Date()\n long time=date.getTime()\n\n")])])]),e("ul",[e("li",[a._v("DateForman 类日期格式化")])]),a._v(" "),e("p",[a._v("作用：格式化，日期->文本")]),a._v(" "),e("p",[a._v("成员方法：")]),a._v(" "),e("ul",[e("li",[a._v("String format(Date date)按照指定的模式，把 Date 日期，格式化为符合模式的字符串")]),a._v(" "),e("li",[a._v("Date parse(String source) 把符合模式的字符串，解析为 Date 日期")]),a._v(" "),e("li",[a._v("DateFormat 类是一个抽象类，无法直接船舰对象使用，可以用 DateFormat 的子类")]),a._v(" "),e("li",[a._v("java.text.SimpleDateFormat extends DateFormat")])]),a._v(" "),e("p",[a._v("构造方法：")]),a._v(" "),e("ul",[e("li",[a._v("SimpleDateFormat(String pattern) 用给定的模式和默认的语言环境日期格式符号构造 SimpleDateFormat")]),a._v(" "),e("li",[a._v("模式：区分大小写")]),a._v(" "),e("li",[a._v("y 年 M 月 d 日 H 时 m 分 s 秒")]),a._v(" "),e("li",[a._v("对应的格式：yyyy-MM-dd HH:mm:ss")])]),a._v(" "),e("p",[a._v("注意：\n模式中的字母不能更改，连接模式的符号可以改变")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(' SimpleDateFormat sdf =new SimpleDateFormat("yyyy年MM月dd日 HH时mm分ss秒");\n Date date=new Date()\n String d=sdf.format(date) //2088年10月1日 10：00：06\n\n')])])]),e("p",[a._v("Date parse(String source) 把符合模式的字符串，解析为 Date 日期")]),a._v(" "),e("p",[a._v("注意：")]),a._v(" "),e("ul",[e("li",[a._v("parse 方法声明一个异常叫做 parseException")]),a._v(" "),e("li",[a._v("如果字符串和构造方法的模式一样，那么程序就会抛出异常")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(' SimpleDateFormat sdf =new SimpleDateFormat("yyyy年MM月dd日 HH时mm分ss秒");\n\n Date date=sdf.parse("2088年08月08日 15时51秒54分")\n\n 程序会抛出异常，需要Alt+enter解决这个异常即可(throws ParseException)\n\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('public class DateFomatDemo {\n    public static void main(String[] args) throws ParseException {\n        DateDemo();\n    }\n\n    private static void DateDemo() throws ParseException {\n\n        SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH时mm分ss秒");\n        Date date = new Date();\n        String s = sdf.format(date);\n        System.out.println(s);\n\n\n        System.out.println("====================");\n\n        Date d=sdf.parse("2020年08月08日 15时15分54秒");\n    }\n}\n')])])]),e("h2",{attrs:{id:"calendar-类日历类-抽象类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#calendar-类日历类-抽象类"}},[a._v("#")]),a._v(" Calendar 类日历类(抽象类)")]),a._v(" "),e("ul",[e("li",[a._v("GregorianCalendar 子类对象")])]),a._v(" "),e("p",[a._v("注意：")]),a._v(" "),e("ul",[e("li",[a._v("java.util.Calendar 类：日历类")]),a._v(" "),e("li",[a._v("Calendar 类是一个抽象类，里面提供了很多操作方法（YEAR....）")]),a._v(" "),e("li",[a._v("Calendar 类无法直接创建对象使用。里面有一个静态方法叫 getInstance(),改方法返回 CalenDar 类的子类对象")]),a._v(" "),e("li",[a._v("static Calendar getInstance()使用默认时区和语言环境获得一个日历")]),a._v(" "),e("li",[a._v("可以获取年月日和时区等")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("import java.util.Calendar;\n\npublic class CalendarClass {\n    public static void main(String[] args) {\n        Calendar c=Calendar.getInstance();//多态\n        System.out.println(c);\n    }\n}\n")])])]),e("p",[a._v("常用的成员方法：")]),a._v(" "),e("ul",[e("li",[a._v("public int get(int field)")]),a._v(" "),e("li",[a._v("public void set(int field,int value)：将给定的日历字段设置为定值")]),a._v(" "),e("li",[a._v("public abstract void add(int field ,int amount):根据日历规则，为给定的日历字段添加或减去指定的时间量")]),a._v(" "),e("li",[a._v("public Date getTime():返回一个表示词 Calendar 时间值的 Date 对象")])]),a._v(" "),e("p",[a._v("参数：")]),a._v(" "),e("ul",[e("li",[a._v("int field 日历类的字段（）")]),a._v(" "),e("li",[a._v("int amount:增加/减少指定值 正数：增加 负数：减少")])]),a._v(" "),e("p",[a._v("返回日历的年月日的字段值")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" private static void demo01() {\n        Calendar c =Calendar.getInstance();\n        int year=c.get(Calendar.YEAR);\n        System.out.println(year);\n        int moth =c.get(Calendar.MONTH);\n        System.out.println(moth);\n        int day=c.get(Calendar.DATE);\n        System.out.println(day);\n\n\n    }\n")])])]),e("h2",{attrs:{id:"set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[a._v("#")]),a._v(" set")]),a._v(" "),e("p",[a._v("手动设置年月日")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Calendar c =Calendar.getInstance();\nc.set(Calendar.YEAR,99999);\nint year=c.get(Calendar.YEAR);\n\n连续设：\n\n   c.set(8888,8,8);\n")])])]),e("h2",{attrs:{id:"add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[a._v("#")]),a._v(" add")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("c.add(Calendar.YEAR,2);\n")])])]),e("h2",{attrs:{id:"gettime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gettime"}},[a._v("#")]),a._v(" getTime()")]),a._v(" "),e("ul",[e("li",[a._v("获取日期对象")])]),a._v(" "),e("h2",{attrs:{id:"linkedlist-集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist-集合"}},[a._v("#")]),a._v(" LinkedList 集合")]),a._v(" "),e("p",[a._v("特点：")]),a._v(" "),e("ul",[e("li",[a._v("底层是一个链表结构：查询慢，增删快")]),a._v(" "),e("li",[a._v("里面包含大量操作首尾元素的方法")])]),a._v(" "),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[a._v("#")]),a._v(" api")]),a._v(" "),e("ul",[e("li",[a._v("addFirst 在指定的元素插入（插入在此列表的头部）")]),a._v(" "),e("li",[a._v("addLast 在集合的末尾添加")]),a._v(" "),e("li",[a._v("push 在集合的末尾添加，与 addLast 一样")]),a._v(" "),e("li",[a._v("getFist 获取第一个")]),a._v(" "),e("li",[a._v("getLast 获取集合的最后一个")]),a._v(" "),e("li",[a._v("isEmpty 判断是否为空")]),a._v(" "),e("li",[a._v("removeFirst 移除第一个元素")]),a._v(" "),e("li",[a._v("removeLst 移除最后一个元素")]),a._v(" "),e("li",[a._v("pop 移除第一个元素")])]),a._v(" "),e("h2",{attrs:{id:"vertor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vertor"}},[a._v("#")]),a._v(" Vertor")]),a._v(" "),e("h2",{attrs:{id:"set-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-2"}},[a._v("#")]),a._v(" Set")]),a._v(" "),e("p",[a._v("extent Collection 接口")]),a._v(" "),e("p",[a._v("特点")]),a._v(" "),e("ul",[e("li",[a._v("不允许存储重复的元素")]),a._v(" "),e("li",[a._v("没有索引，没有带索引的方法，也不能使用普通的 for 循环")])]),a._v(" "),e("p",[a._v("原理")]),a._v(" "),e("ul",[e("li",[a._v("Set 集合在调用 add 方法的时候，add 方法调用元素的 hashCode 方法和 equals 方法,判断元素是否重复")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(' HashSet<String> set= new HashSet<>();\n String s1= new String("abc")\n String s2= new String("abc")\n set.add(s1)\n set.add(s2)\n set.add("哈哈")\n')])])]),e("h2",{attrs:{id:"hashset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashset"}},[a._v("#")]),a._v(" HashSet")]),a._v(" "),e("p",[a._v("特点")]),a._v(" "),e("ul",[e("li",[a._v("不允许存储重复的元素")]),a._v(" "),e("li",[a._v("没有索引，没有索引的方法，也不能使用普通的 for 循环遍历")]),a._v(" "),e("li",[a._v("是一个无序的集合，存储元素和取出元素的顺序有可能不一致")]),a._v(" "),e("li",[a._v("底层是一个哈希表结构（查询速度非常快）")])]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" set "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HashSet")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\\\n\n set"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);