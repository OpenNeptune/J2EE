//��ȡ��һ��formԪ�ص�action����
$("form").attr("action");

//����src����
$("#icon").attr("src","icon.gif");

//һ��������4������
$("#banner").attr(					
	{
		src:"banner.gif",
		alt:"Advertisement",
		width:720,
		height:64
	}
);
//�������������´��ڴ�
$("a").attr("target","_blank");

//վ�����ӱ����ڴ�,վ�������´��ڴ�
$("a").attr("target",function(){	
	if(this.host == location.host)
		return "_self";
	else
		return "_blank";
});

//��ȡ��һ��h1����������
$("h1").css("font-weight");
//��ȡ��һ��h1����������
$("h1").css("fontWeight");
//����:���ɻ�ȡ������ʽ
$("h1").css("font");
//����ʽ���õ�����h1Ԫ����
$("h1").css("font-variant","smallcaps");

$("h1").addClass("hilite");		//������h1Ԫ�����һ����
$("h1+p").addClass("hilite first"); //��h1�����pԪ�����2����
$("p").removeClass("hilite");	//������pԪ����ɾ��һ����
$("p").removeClass("hilite first");//һ��ɾ�������


//getValue from form-element
//��ȡԪ�ص�ֵ
$("#username").val();
//��ȡ��ѡ�еĵ�ѡ��ť��ֵ
$("input:radio[name=ship]:checked").val();

//��ȡҳ�����
$("head title").text();
//��ȡ��һ��h1Ԫ�ص�html����
$("h1").html();
//����һ����ֵ
$("h1").text(function(n,current){
	return "$"+n+"."+current;
});

//��ȡԪ�صĵ�ǰλ��
var position = $("#people").offset();
position.top += 100;
//��������Ԫ�ص�λ��
$("people").offset(position);


var Ele_body = $("body");
var content_width = Ele_body.width();
var padding_width = Ele_body.innerWidth();
var dadding_witdh = Ele_body.outerWidth();
console.log(content_width +"="+padding_width +"="+dadding_witdh );


var w= $(window);
var page_size = w.height();
var scroll_pos = w.scrollTop();
w.scrollTop(scroll_pos + page_size);


$("div").data("x",1);
var x=$("div").data("x");
$("div").removeData();


window.onload=function(){
	//���ĵ���β���һ������linklist id����div
	$("document.body").append("<div id='linklist'><h1>all link</h1></div>");
	//���ĵ��е��������Ӹ��Ʋ��������div��
	$("a").clone().appendTo("#linklist");
	//ÿ����ǩ����ʾһ������
	$("#linklist > a").after("<br/>"); 
};


window.onload=function(){
	//��<i>Ԫ�ذ�װ����h1Ԫ��
	//���� <i><h1>..</h1></i>
	$("h1").wrap(document.createElement("i"));
	//��װ����h1Ԫ�ص�����,�����ַ�����������
	//����<h1><i>....</i></h1>
	$("h1").wrapInner("<i/>");
	//����һ�������װ��һ��ê���div��
	$("body>p:first").wrap("<a name='lead'><div class='first'></div></a>");
	//���������������װ����һ��div��
	$("body>p:not(:first)").warpAll("<div class='rest'></div>");
};