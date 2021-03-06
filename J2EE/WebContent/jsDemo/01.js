
///////////////////////////////////////////////////////////
// 窗口打开和关闭
///////////////////////////////////////////////////////////
 	/* 打开窗口
 	 * function: window.open([sURL] [, sName] [, sFeatures] [, bReplace])
 	 *		params:
 	 *			sURL:指定要打开的URL
 	 *			sName:指定新窗口的名字
 	 *			sFeatures:以逗号分隔的列表,包含大小和各种属性,用以表明如何打开窗口
 	 *			bReplace:只有第二参数命名的窗口存在时起作用.表示是否替换历史的当前条目
 	 *		return:
 	 *			返回的值是代表命名或新创建窗口的Window对象.可以在Js中使用这个值来引用window对象操作新窗口
 	 */
	var w = window.open("test.html","small","width=400,height=350,status=yes,resizable=yes");
	alert(w.location.href);
 	/* 关闭窗口
 	 * function: window.close()
 	 */
 	window.close;
 	w.close();					//w是使用window.open()打开新窗口时的返回值

 	/* 窗体之间的关系
 	 *		当调用window对象的open()返回一个代表新窗口的window对象的对象,该对象有个属性opener则代表了打开
 	 *		窗口的window对象.因此可以通过这个对象俩个窗口就可以相互引用,彼此都可以读取对方的属性和方法.
 	 *
 	 *		任何窗口窗体都可以将自己的窗口和窗体引用为window或self.窗体可以用parent属性引用它的父窗口对象.
 	 *		
 	 *		通过iframe创建的窗体,可以通过获取iframe的元素对象.然后通过对象的contentWindow属性.引用该窗体的
 	 *		的window对象.
 	 *
 	 *		但通常不需要使用getElementById()方法和contentWindow属性来获取窗口中子窗口的引用.每个Window对象
 	 *		都有一个frames属性,它引用自身包含的窗口或窗体的子窗体.frames属性引用的是累数组对象,并可以通过数
 	 *		字或窗体名进行索引.例如引用窗口的第一个子窗体可以用frames[0].窗体里的代码可以用parent.frames[1]
 	 *		引用兄弟窗体.
 	 *		注意frames[]数组里的元素是window对象,而不是<iframe>元素
 	 *
 	 *		如果指定iframe元素的name或id属性,那么除了用数字进行索引外,还可以用名字来进行索引
 	 *		例如:名字为f1的帧应该用frames["f1"]或frames.f1
 	 *
 	 *		iframe以及其他元素的name和id都可以自动通过window对象的属性来引用,而iframe元素和其他的元素有所不通
 	 *		对于窗体来说,通过window对象的属性引用的iframe是指窗体的window对象,而不是元素对象
 	 *
 	 *		html5规范指出frames属性是一个自引用的属性,就像window和self一样,而这个看window对象看起来像一个由窗体
 	 *		组成的数组.
 	 *
 	 */
 	var iframeWindow = document.getElementById("f1").contentWindow;


 	/*
 	 *脚本化文档
 	 *		文档对象模型DOM是表示和操作HTML和XML文档内容的基础API. HTML文档树状结构包含表示HTML标签或元素和文本字串
 	 *		的节点.它也可能包含表示HTML注释的节点.
 	 *		DOM树的根节点是Document节点,它代表整个文档,代表HTML元素的节点是Element节点,代表文本的节点是Text节点
 	 *		Document,element和text是Node的子类.
 	 *
 	 *选取文档元素
 	 *		为了操作文档中的元素,必须通过某种方式获取这些文档元素的Element对象,Dom定义了如下几种方式用于选取
 	 *		查询一个或多个文档元素
 	 *
 	 *		@ 用指定的id属性
 	 *		@ 用指定的name属性
 	 *		@ 用指定的标签名字
 	 *		@ 用指定的css类
 	 *		@ 匹配指定的CSS选择器
 	 */

 	/*@通过ID选取元素
 	 *	任何HTML元素可以有一个id属性,在文档中该值必须唯一.即同一个文档中的俩个元素的id不能相同.可以用Document对象的
 	 * getElementById()方法选取一个基于唯一ID的元素获取
 	 */
 	var section1 = document.getElementById("section1");

 	/*@通过名字选取元素
 	 *	HTML的name属性最初打算为表单元素分配名字,在表单数据提交到服务器时使用该属性的值.类似于ID,但name的值不是必须唯一
 	 *	多个元素可能有相同的名字,和id不一样name属性只能在少数HTML元素中有效,包括表单,表单元素,ifarme和img元素
 	 *
 	 *	基于name属性的值选取HTML元素,可以使用Document对象的getElementsByName()方法,该方法定义在HTMLDocument类中,而不是在
 	 *	Document类中,所以该方法只能用于HTML而不能用于XML
 	 *
 	 *	该方法返回一个NodeList对象(类似于Element对象的只读数组)
 	 *
 	 *	注意在IE中getElementsByName()也返回id属性匹配指定值的元素.使用时要注意
 	 *
 	 *	某写HTML元素设置name属性将自动为Window对象中创建对应的属性,对于Document对象也类似.为form,img,iframe,applet,embed
 	 *	object元素设置name属性值,即在Document对象中创建以此name属性值为名字的属性
 	 */
 	var radiobuttons = document.getElmentsByName("favorite_color");

 	//针对<form name="address">元素
 	var form = document.address;

 	/*@通过标签名选取元素
 	 *	Document对象的getElementsByTagName()方法可用来选取指定类型(标签名)的所有HTML或XML元素
 	 *	该方法返回一个NodeList对象.在NodeList中返回的元素按照在文档中的顺序排序.
 	 *  Element类也定义了getElementsByTagName()方法,它值返回该元素的后代元素
 	 */

 	//获取整个文档的span标签列表
 	var Elm_span = document.getElementsByTagName("span");

 	//获取第一个p标签下的span标签列表
 	var Elm_p = document.getElementsByTagName("p");
 	var Elm_span = Elmp[0].getElementsByTagName("span");

 	/*@通过CSS类选取元素
 	 *	HTML元素的class属性值是一个以空格隔开的列表,可以为空或包含多个标识符它描述一种方法来定义多组相关的文档元素.
 	 *	在它们的class属性中有相同标识符的任何元素属于该组的一部分.在JavaScript中class是保留字,所以客户端JavaScript
 	 *	使用calssName属性来保存HTML的calss属性值.class属性通常与css样式表一起 使用.对某组内的所有元素应用相同的样式.
 	 *	HTML定义了getElementsByClassName()方法.它基于其class属性值中的标识符来选取组成的文档元素.
 	 *
 	 *	在HTML元素上可以用getElementsByClass()它返回值是一个实时的NodeList对象,包含文档活元素所匹配的后代节点.
 	 *	该函数只需一个字符串参数,该字符串可以由多个空格隔开的标识符组成.只有当元素的class属性值包含所有指定的标识符
 	 *  时才匹配.但是标识符的顺序无关紧要.
 	 */

 	//查找class属性值中包含warning的所有元素
 	var warnings = document.getElementsByClassName("warning");
 	//查找以log类下的error节点
 	var error = document.getElementsByClassName("log").getElementsByClassName("error");


 	/*@通过CSS类选取元素
 	 *	CSS是一门强大的语言,定义css的语法总遵循如下各式:
 	 *		selector{ property1:value1;property2:value2}
 	 *		selector:选择器,决定该样式定义对那些元素起作用
 	 *		{}:属性定义
 	 *	与CSS3选择器的标准化一起的另一个承做 选择器API的W3C标准化定义了获取匹配一个给定选择器的元素的JavaScript方法
 	 *	该API的关键是Document方法querySelectorAll().它接受包含一个CSS选择器的字符串参数,返回一个表示文档匹配选择器
 	 *  的所有元素的NodeList对象.querySelectorAll()返回的NodeList对象并不是实时的,包含在调用时刻选择器所匹配的元素.
 	 *  但它并不是更新后续文档的变化.如果没有匹配的元素,querySelectorAll()奖返回一个空的NodeList对象.
 	 *	除了querySelectorAll()文档对象还定义了querySelector()方法,后者值返回第一个匹配的元素(文档顺序)
 	 */


 	/*@document.all[]
 	 *  在IE4中引入了document.all[]集合来表示所有文档中的元素(除了Text节点),现已北标准的方法getElementxx取代.但还
 	 *  看到下面的代码
 	 */
 	document.all[0] 			//文档中第一个元素
 	document.all["navbar"]		//id或name为navbar的元素(或多个元素)
 	document.all.navbar			//同上
 	document.all.tags("div")	//获取文档中的所有div

 	/*@文档树
 	 *	parentNode	该节点的父节点,或者针对类似Document对象应该是null
	 *	childNodes	只读的类数组对象(NodeList对象)它是该节点的子节点的实时表示
	 *	firstChild lastChild	该节点的子节点中的第一个和最后一个,如果给节点没有子节点则为null
	 *	nextSibling previoursSibling	该节点的兄弟节点中的前一个和下一个.(具有相同父节点的俩个节点为兄弟节点)
	 *	nodeType	该节点的类型
	 *	nodeValue	text节点或comment节点的文本内容
	 *	nodeName	元素的标签名,以大写形式表示
 	 */


 	/*@属性
 	 *	HTML元素由一个标签和一组称为attribute的名/值对组成.例如a元素定义了一个超连接,它的href属性值作为连接的
 	 *	目的地.HTML元素的属性之在代表这些元素的HTMLElement对象的属性property中是可用的,DOM还定义了另外的API来
 	 *	获取或设置XML属性和非标准的HTML属性.
 	 */

 	/*@HTML属性作为HTMLElement的属性
 	 *	表示HTML文档元素的HTMLElement对象定义了读/写属性,它们映射了元素的HTML属性
	 *	HTMLElement定义了通用的HTTP属性的属性,以及事件处理程序属性.特定的Element子类型为其元素定义了特定的属性.
 	 */
 	/*
 	 *	HTML属性名不区分大小写,但是JavaScript属性名则大小写敏感.从HTML属性名转换到JavaScript属性名应该采用小写.
 	 *	但是如果属性名包含不止一个单词,则见第一个单词以外的单词的首字母大写.例如:defaultChecked和tabIndex.
 	 *	有些HTML属性在JavaScript中是保留字,对于这些属性一般的规则是加前缀html.
 	 *	例如在lable元素的for属性在Javascript中变为htmlFor属性.Class在javaScript是className.
	 *	表示HTML属性的值通常是字符串.当属性为布尔值或数字,属性也是布尔值或数字,而不字符串.
	 *	时间程序总是为Function对象或null.HTML5定了一个新的属性为input相关的form属性用于将元素id转换
	 *	为实际的Element对象.任何HTML元素的style属性值是CSSStypleDeclaration对象,而是字符串.
 	 */
 	//例如获取一个图片的地址
 	var image = document.getElementById("myImage");
 	var image_url = image.scr;
 	//修改form的提交地址
 	var forms = document.forms[0];
 	forms.action="http://xxx.com/xx.php";
 	forms.method="POST";

 	/*
 	 *	HTMLElement和其子类型定义了一些属性,它们对应于元素的标准HTML属性.Element类型还定义了
 	 *	getAttribute()和setAttribute()方法来查询和设置非标准的HTML属性,也可用来查询和设置XML
 	 *	文档中元素上的属性.同时还定义了hasAttribute()和removeAttribute()用来检测命名属性是否
 	 *	存在和完全删除属性.
 	 */
 	var image = document.image[0];
 	var width = parseInt(image.getAttribute("WIDTH"));
 	image.setAttribute("class","thumbnail");

 	/*@数据集属性
 	 *
 	 *	有时候在HTML元素上绑定一些额外的信息一是有帮助的,当JavaScript选取这些元素并以某种方式操
 	 *	作文档是很典型的.有时可以通过给class属性添加特殊的标识符来完成.
 	 *	其他时候针对更复杂的数据,客户端程序员会借助使用非标准的属性,使用getAttribute()
 	 *	和setAttribute()来读和写非标准的值.但这样做文档不在是合法的html文件.
	 *	HTML5提供了一个解决方案,在HTML5文档中,任意以data-为前缀的小写的属性名都是合法的.
	 *	这些数据集属性将不会对元素的表现产生影响.它们定义了一种标准的,附加数据的额外方法.
	 *	HTML5还在Element对象上定义了dataset属性,该属性指代一个对象它的各个属性对应去掉前缀
	 *	的data-属性.因此dataset.x应该保存data-x属性的值.待连字符的属性对应于驼峰名:
	 *	data-jquery-test属性就编程了dataset.jqueryTest属性
	 */
	//例如解析如下的HTML
	//<span class="splitline" data-ymin="0" data-ymax="10">1 12 122 333 444</span>
	var ele = document.getElementsByClassName("splitline")[0];
	var dataset = ele.dataset;
	var ymin=dataset.ymin;
	var ymax=dataset.ymax;

	/*@作为attr节点的属性
	 *	还有一种使用Element的属性的方法,Node类型定义了attributes属性.
	 *	针对非Element对象的任何节点,该属性为null,对于Element对象attributes
	 *	属性是只读的类数组的对象.它代表元素的所有属性.类似NodeLists,attributes
	 *	对象也是实时的.它们可以用数字索引访问.这就意味着可以枚举所有的属性,
	 *	并且它也可以用属性名索引.
	 */
	document.body.attributes[0];
	document.body.attributes.bgcolor;
	document.body.attributes["ONLOAD"];

	/*@元素内容
	 *有时候需要查询纯文本形式的元素内容,或者在文档中插入纯文本
	 *(不必转移HTML标记和&符号),标准的方法是用Node的textContent属性来实现:
	 */
	var para = document.getElementsByTagName("p")[0];
	var text = para.textContent;
	para.textContent="hello world";

	
	/*@获取表单元素
	 *
	 */
	var fields = document.getElementById("adress").getElementsByTagName("input");
	//@用querySelectorAll()从一个表单中选取所有的单选按钮火所有的同名的元素
	//id为shipping的表单中所有的单选按钮
	document.querySelectorAll("#shipping input[type='radio'");
	//id为shipping的表单中所有名字为method的单选按钮
	document.querySelectorAll("#shipping input[type='radio'][name='method']");
	//<form name="address" ...></form>的表单可以用下面的任何方式来选取
	window.address;				//不可靠
	document.address;			//仅当表单有name属性时可用
	document.forms.address;		//显示访问有name或id的表单
	document.forms[0]			//不可靠,n是表单的序号
	//获取<form name="address" ...></form>表单的元素内容
	document.forms.address[0];
	document.forms.address.street;
	document.address.street;


