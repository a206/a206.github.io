function denglu() {
var name = document.getElementById("username").value;
var pass = document.getElementById("password").value;
/*判断非空*/
if((name == null || name == "") || (pass == null || pass == ""))
{
	alert("用户名或密码不能为空！！");
} 
else {
	if(name == "123" && pass == "123")
	{
		alert("登录成功！");
		/*页面跳转*/
		window.location.href = "bg2.html";
	}
	else 
	{
		alert("用户名或密码错误！！");
	}
}
}

del=function(obj){
		var parentTr=obj.parentNode.parentNode;
		var parentTable = parentTr.parentNode;
		parentTable.removeChild(parentTr);
	}

/*增加*/
var count = 0;
function add()
{
	var a = document.createElement("tr");
	var tab = document.getElementById("tab");
	var name = document.getElementById("newname").value;
	var num = document.getElementById("num").value;
	tab.innerHTML+=
	"<tr id='" + count +"'>"+
	"<td>"+name+"</td>"+
	"<td>"+num+"</td>"+
	'<td><a href="javascript:delet('+count+')">'+
	"Delete"+
	"</a></td>"+
	"</tr>";
	count++;
}
function delet(count){
    var row = document.getElementById(count);
    row.remove(count);
}