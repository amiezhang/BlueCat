//******************
//*****立即执行*****
//******************
//再次打开没有欢迎页面
if(getQueryString("opened")){
	var wdiv=document.body.querySelector(".welcome-div");
	wdiv.style.display="none";
	document.body.querySelector(".articles").style["animation"]="show 1.3s ease-in";
	document.body.querySelector("#sidebarLists").style["animation"]="show2 1.3s ease-in";
}

//js保存rem单位
var fontsize = window.getComputedStyle(document.documentElement)["fontSize"].replace("px","");
window.onload=function(){
	fontsize=window.getComputedStyle(document.documentElement)["fontSize"].replace("px","");
}


//******************
//*****全局函数*****
//******************
//查询url参数函数
function getQueryString(name){
	var reg = new RegExp("[\?\&]"+name+"=([^&]*)(&|$)","i");
	var r = location.search.match(reg);
	if(r!=null){
		return r[1];
	}
	else{
		return null;
	}
}
Date.prototype.Format = function (fmt) { //author: meizz
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
function themeTimeNow(dom){
	dom.innerHTML=new Date().Format("yyyy-MM-dd hh:mm:ss");
	setTimeout(function () {themeTimeNow(document.getElementById("theme-time-now"));},1000);
}
themeTimeNow(document.getElementById("theme-time-now"));
function article_link(url){
	location.href=location.origin + url;
}
function demo_link(url){
	window.open(url);
}
//纯js滚动到顶部
var currentPosition,timer;
function GoTop(){
	timer=setInterval("runToTop()",20);
}
function runToTop(){
	currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
	currentPosition-=50;
	if(currentPosition>0)
	{
		window.scrollTo(0,currentPosition);
	}
	else
	{
		window.scrollTo(0,0);
		clearInterval(timer);
	}
}
//******************
//*****事件绑定*****
//******************


//欢迎页面按钮
if(document.body.querySelector(".enter")!=null&&getQueryString("opened")==null){
	document.body.querySelector(".articles").style["display"]="none";
	document.body.querySelector("#sidebarLists").style["display"]="none";
	document.body.querySelector(".enter").addEventListener("click",function(){
		var wdiv=document.body.querySelector(".welcome-div");
		wdiv.className = wdiv.className + " clicked";
		document.body.querySelector(".nav .animation-div").style["animation"]="taoqi 1.3s linear";
		document.body.querySelector(".articles").style["display"]="block";
		document.body.querySelector("#sidebarLists").style["display"]="block";
  	},true);
}
document.getElementById("gotoTop").addEventListener("click",function () {
	GoTop();
},true);
document.getElementById("list-btn").addEventListener("click",function () {
	var sbar=document.getElementById("sidebarLists"),st=parseInt(document.documentElement.scrollTop || document.body.scrollTop)+20;
	sbar.className="show";
	sbar.style.top=st +"px";
	document.getElementById("sidebarLists-bg").className="show";
},true);
document.getElementById("sidebarLists-bg").addEventListener("click",function () {
	document.getElementById("sidebarLists").className="";
	document.getElementById("sidebarLists-bg").className="";
},true);
document.getElementById("sidebar-close").addEventListener("click",function () {
	document.getElementById("sidebarLists").className="";
	document.getElementById("sidebarLists-bg").className="";
},true);
function getCurPosts(sortedPosts, config, page) {
	return sortedPosts.slice((page.current - 1) * config.per_page, page.current * config.per_page);
}