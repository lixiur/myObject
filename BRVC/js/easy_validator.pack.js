/*
	Copyright (C) 2009 - 2012
	WebSite:	Http://wangking717.javaeye.com/
	Author:		wangking
*/
$(function(){
	var xOffset = -20; // x distance from mouse
    var yOffset = 20; // y distance from mouse  
	/*源码修改位置puxinwen*/
	$("#btn_submit").click(function(){
		var isSubmit = true;
		var isce = 2;//表示提交的是正式的
		$("#data_form").find("[reg],[url]:not([reg])").each(function(){
			if($(this).attr("reg") == undefined){
				if(!ajax_validate($(this))){
					isSubmit = false;
				}
			}else{
				if(!validate($(this))){
					isSubmit = false;
				}
			}
		});
		if(typeof(isExtendsValidate) != "undefined"){
   			if(isSubmit && isExtendsValidate){
				return extendsValidate();
			}
   		}
		if(isSubmit){
			if(isCoun== true){
				submitDataForm(isce);
			}else{
				submitDataForm();
			}
		}else{
			var btnarr=["确定"];  
		    mui.confirm("请完善表单信息后再提交!","操作提示",btnarr,function(e){  
		        if(e.index == 0){  
		        }
		    });
//			showDialog("warning","表单信息有误","请完善表单信息后再发布!");
		}
	});
	$("#btn_storage").click(function(){
		var isSubmit = true;
		var isce = 1;//表示提交的是存储
		$("#data_form").find("[reg],[url]:not([reg])").each(function(){
			if($(this).attr("reg") == undefined){
				if(!ajax_validate($(this))){
					isSubmit = false;
				}
			}else{
				if(!validate($(this))){
					isSubmit = false;
				}
			}
		});
		if(typeof(isExtendsValidate) != "undefined"){
   			if(isSubmit && isExtendsValidate){
				return extendsValidate();
			}
   		}
		if(isSubmit){
			if(isCoun== true){
				submitDataForm(isce);
			}else{
				submitDataForm();
			}
			
		}else{
//			showDialog("warning","表单信息有误","请完善表单信息后再发布!");
			/*$("body").dialog({
				type:"warning",
				title:"警告",
				discription:"请完善表单信息后在发布!",
				maskBg:"rgba(88,11,22,0.5)"
			});*/
		}
	});
	$("form").submit(function(){
		var isSubmit = true;
		$(this).find("[reg],[url]:not([reg])").each(function(){
			if($(this).attr("reg") == undefined){
				if(!ajax_validate($(this))){
					isSubmit = false;
				}
			}else{
				if(!validate($(this))){
					isSubmit = false;
				}
			}
		});
		if(typeof(isExtendsValidate) != "undefined"){
   			if(isSubmit && isExtendsValidate){
				return extendsValidate();
			}
   		}
		if(isSubmit){
			alert();
		}
		return isSubmit;
	});
	
});


//验证正则表达式
function validate(obj){
	//取得正则表达式
	var reg = new RegExp(obj.attr("reg"));
	//取得输入值
//	var objValue = obj.attr("value");
	var objValue = obj[0].value;
	if(objValue == undefined){
		objValue = ""
	}
	//判断是否匹配
	var iscode = reg.test(objValue);
	if(!reg.test(objValue)){
		//不匹配操作
		// alert("不匹配操作");
		change_error_style(obj,"add");
		change_tip(obj,null,"remove");
		return false;
	}else{
		//匹配操作
		var wew =obj.attr("url");
		if(obj.attr("url") == undefined){
			//操作正则表达式
			change_error_style(obj,"remove");
			change_tip(obj,null,"remove");
			return true;
		}else{
			return ajax_validate(obj);
		}
	}
}
//验证URL
function ajax_validate(obj){
	
	var url_str = obj.attr("url");
	if(url_str.indexOf("?") != -1){
		url_str = url_str+"&"+obj.attr("name")+"="+obj.attr("value");
	}else{
		url_str = url_str+"?"+obj.attr("name")+"="+obj.attr("value");
	}
	var feed_back = $.ajax({url: url_str,cache: false,async: false}).responseText;
	feed_back = feed_back.replace(/(^\s*)|(\s*$)/g, "");
	if(feed_back == 'success'){
		change_error_style(obj,"remove");
		change_tip(obj,null,"remove");
		return true;
	}else{
		change_error_style(obj,"add");
		change_tip(obj,feed_back,"add");
		return false;
	}
}
//改变样式
function change_tip(obj,msg,action_type){
	
	if(obj.attr("tip") == undefined){//初始化判断TIP是否为空
		obj.attr("is_tip_null","yes");
	}
	if(action_type == "add"){
		if(obj.attr("is_tip_null") == "yes"){
			obj.attr("tip",msg);
		}else{
			if(msg != null){
				if(obj.attr("tip_bak") == undefined){
					obj.attr("tip_bak",obj.attr("tip"));
				}
				obj.attr("tip",msg);
			}
		}
	}else{
		if(obj.attr("is_tip_null") == "yes"){
			obj.removeAttr("tip");
			obj.removeAttr("tip_bak");
		}else{
			obj.attr("tip",obj.attr("tip_bak"));
			obj.removeAttr("tip_bak");
		}
	}
}
//出现错误时，添加错误的样式
function change_error_style(obj,action_type){
	var qid=obj[0].id;
	if(action_type == "add"){
		$("#"+qid).css("border","1px solid red");
//		obj.addClass("input_validation-failed");
		
		//obj.next().removeClass("corect");
		//obj.next().addClass("error");
	}else{
		$("#"+qid).css("border","1px solid #E6E6E6");
//		obj.removeClass("input_validation-failed");
		//obj.next().removeClass("error");
		//obj.next().addClass("corect");
	}
}

$.fn.validate_callback = function(msg,action_type,options){
	this.each(function(){
		if(action_type == "failed"){
			change_error_style($(this),"add");
			change_tip($(this),msg,"add");
		}else{
			change_error_style($(this),"remove");
			change_tip($(this),null,"remove");
		}
	});
};
