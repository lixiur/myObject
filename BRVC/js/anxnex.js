/*@author:蒲鑫文*/
/**给附件上传列表的删除事件，只有新建上传附件的界面有用*/
function deleteFj(lId,fis){
	var btnArray = ['确认', '取消'];
	mui.confirm('确认删除该条附件的记录？', '操作提示', btnArray, function(e) {
		if (e.index == 0) {
			var frdiv = document.getElementById('fj_la');
			var fla_f = document.getElementById(fis);
			var fj_li = document.getElementById(lId);
			var fjUl = document.getElementById("fj_ul");
    		$("#"+fis).css('display','block');
			frdiv.removeChild(fla_f);
			fjUl.removeChild(fj_li);
		} else {
			
		}
	});
}
/**给附件上传列表的删除事件，只有新建修改上传附件的界面有用*/
function deleteFj_w(lId){
	var btnArray = ['确认', '取消'];
	mui.confirm('确认删除该条附件的记录？', '操作提示', btnArray, function(e) {
		if (e.index == 0) {
			var fj_li = document.getElementById(lId);
			var fjUl = document.getElementById("fj_ul");
			fjUl.removeChild(fj_li);
		} else {
			
		}
	});
}
/*检查附件是否存在，存在就打开，反之就下载并将路径缓存,这个是新的*/
var Utils = getUtils();
var filenex = new Map(); ;
//sure 是下载的附件的数组
////annex 是保存下载的附件路径的map集合的的名字但不是字符串
function hanEnclosure (sure) {
	var nexPath = sure;
	var Path = null;
	Path = Utils.getDataStorageJsonNode('local',nexPath.FILE_NAME,nexPath.FILE_NAME);
	if(Path == "" || Path == "null" ){ 
		Path = null;
//		var fnema = nexPath.FILE_NAME+'.'+nexPath.SUFFIX
//		Path = anqueName(fnema)
	}else{
		
	}
	if(Path != null && Path != 0 ){ 
		plus.runtime.openFile(Path); 
	}else{
		var btnArray = ['否', '是'];
		mui.confirm('下载附件【'+nexPath.FILE_NAME + '】？', '下载附件', btnArray, function(e) {
			if (e.index == 1) {
				downlaodAttachment (nexPath)
			}
		});
		
	}
}

/*
 * 会议室附件下载查看
 */

function hanEnclosure1 (sure) {
	var nexPath = sure;
	var Path = null;
	Path = Utils.getDataStorageJsonNode('local',nexPath.originalFileName,nexPath.fileUrl);
	if(Path == "" || Path == "null" ){ 
		anqueName(name);
		Path = null; 
	}
	if(Path != null){ 
		plus.runtime.openFile(Path); 
	}else{
		var btnArray = ['否', '是'];
		mui.confirm('下载附件【'+nexPath.originalFileName + '】？', '', btnArray, function(e) {
			if (e.index == 1) {
				downlaodAttachment1 (nexPath)
			}
		});
		
	}
}
/*
 * 会议室附件下载
 */
function downlaodAttachment1 (enclo) {
	var xful ='http://'+urlHeader+ enclo.fileUrl;
	console.log("下载附：" + xful);
	downloader = plus.downloader.createDownload(xful, {
//			filename: "_doc/attachment/"
	}, function(d, status) {
		console.log("下载附：" + status);
		if(status == 200) { 
			console.log("下载附件成功：" + d.filename);
			var netPath = d.filename;
			filenex.setItem(enclo.originalFileName, d.filename);
			Utils.addDataStorageJsonNode('local', filenex, enclo.originalFileName);
			//隐藏进度条
			plus.nativeUI.closeWaiting();
			plus.runtime.openFile(d.filename); // 打开附件
		} else {
			plus.nativeUI.alert("下载附件失败！");
		}
		plus.nativeUI.closeWaiting();
	});
	var waiting = plus.nativeUI.showWaiting("附件下载中……")
	//下载任务状态变化时回调
	downloader.addEventListener("statechanged", onStateChanged, false);
	//开始下载任务
	downloader.start(); 
	//下载状态变化时回调的函数，用于显示下载进度
	function onStateChanged() {
		if(downloader.downloadedSize <= downloader.totalSize) {
			var progressValue = downloader.downloadedSize/downloader.totalSize;
			if(downloader.totalSize>0)
				waiting.setTitle("进度："+Math.floor(progressValue*100) + "%");
		}
	}
}
/*
 * //app下载
 */
function downApp (enclo) {
//	var xful ='http://'+urlHeader+ enclo.fileUrl;
//	console.log("下载附：" + xful);
	downloader = plus.downloader.createDownload(enclo, {
//			filename: "_doc/attachment/"
	}, function(d, status) {
		console.log("下载附：" + status);
		if(status == 200) { 
//			console.log("下载附件成功：" + d.filename);
//			var netPath = d.filename;
//			filenex.setItem(enclo.originalFileName, d.filename);
//			Utils.addDataStorageJsonNode('local', filenex, enclo.originalFileName);
			//隐藏进度条
			plus.nativeUI.closeWaiting();
			plus.runtime.openFile(d.filename); // 打开附件
		} else {
			plus.nativeUI.alert("下载附件失败！");
		}
		plus.nativeUI.closeWaiting();
	});
	var waiting = plus.nativeUI.showWaiting("获取下载资源中……")
	//下载任务状态变化时回调
	downloader.addEventListener("statechanged", onStateChanged, false);
	//开始下载任务
	downloader.start(); 
	//下载状态变化时回调的函数，用于显示下载进度
	function onStateChanged() {
		if(downloader.downloadedSize <= downloader.totalSize) {
			var progressValue = downloader.downloadedSize/downloader.totalSize;
			if(downloader.totalSize>0)
				waiting.setTitle("进度："+Math.floor(progressValue*100) + "%");
		}
	}
}
/*附件下载缓存并打开*/
//enclo 是下载的附件的数组
//annex 是保存下载的附件路径的map集合的的名字但不是字符串
function downlaodAttachment (enclo) {  
	var xful ='http://'+urlHeader+ enclo.FILE_PATH+enclo.FILE_UUID_NAME+'.'+enclo.SUFFIX;
	console.log("下载附：" + xful);
	downloader = plus.downloader.createDownload(xful, {
//			filename: "_doc/attachment/"
	}, function(d, status) {
		console.log("下载附：" + status);
		if(status == 200) { 
			console.log("下载附件成功：" + d.filename);
			var netPath = d.filename;
			filenex.setItem(enclo.FILE_NAME, d.filename);
			Utils.addDataStorageJsonNode('local', filenex, enclo.FILE_NAME);
			//隐藏进度条
			plus.nativeUI.closeWaiting();
			plus.runtime.openFile(d.filename); // 打开附件
		} else {
			plus.nativeUI.alert("下载附件失败！");
		}
		plus.nativeUI.closeWaiting();
	});
	var waiting = plus.nativeUI.showWaiting("附件下载中……")
	//下载任务状态变化时回调
	downloader.addEventListener("statechanged", onStateChanged, false);
	//开始下载任务
	downloader.start(); 
	//下载状态变化时回调的函数，用于显示下载进度
	function onStateChanged() {
		if(downloader.downloadedSize <= downloader.totalSize) {
			var progressValue = downloader.downloadedSize/downloader.totalSize;
			if(downloader.totalSize>0)
				waiting.setTitle("进度："+Math.floor(progressValue*100) + "%");
		}
	}
}
//根据传入的附件类型判定加载图片
function fileType(current_file_type_str) {
		// 文件类型呈现的图片
		var src_img = '../../../img/fujian_img.png';
		var src_pdf = '../../../images/fujian_pdf.png';
		var src_word = '../../../images/fujian_word.png';
		var src_txt = '../../../images/fujian_txt.png';
		var src_excel = '../../../images/fujian_excel.png';
		var src_rar = '../../../images/fujian_rar.png';
		var src_others = '../../../images/fujian_others.png';
		var src_music = '../../images/fujian_music.png';//还没做图
		var src_video ='../../../images/fujian_video.png';
		if(current_file_type_str == 'png' || current_file_type_str == 'jpg' || current_file_type_str == 'jpeg') {
			return src_img;
		} else if(current_file_type_str == 'pdf') {
			return src_pdf;
		} else if(current_file_type_str == 'doc' || current_file_type_str == 'docx') {
			return src_word;
		} else if(current_file_type_str == 'txt') {
			return src_txt;
		} else if(current_file_type_str == 'excel') {
			return src_excel;
		} else if(current_file_type_str == 'rar' || current_file_type_str == 'zip') {
			return src_rar;
		}else if(current_file_type_str == 'mp4' || current_file_type_str == 'mp5') {
			return src_video;
		} else if(current_file_type_str == 'mp3' ) {
			return src_music;
		} else {
			return src_others;
		}
	}
/**新建公文附件列表数据装载*/
var coun = 0;
var cfid = 0;
var fis = 'file'+cfid;
var fisd = 'fj_la'+cfid;
function imageChoice (){
 	var file = document.getElementById(fis);
 	var fileList = file.files; 
    /*文件上传*/
    var html2='';
    for (var i = 0; i < fileList.length; i++){
    	coun++;
    	var qid = 'acf'+coun;
    	var file2 = fileList[i];
    	var sizer = (file2.size)/1000000;
    	var qw = file2.type.split("/");
    	var typeUr2= qw[1]; 
    	var typeUr = fileType(typeUr2);
    	var fn = file2.name.split(".");
    	var lisr = file2.name;
		html2 += '<li class="mui-table-view-cell fujian_li" id="'+qid+'" style="padding-top: 0px;" >'+
//				'<div class=" mui-slider-right mui-disabled" style="">'+
//					'<a class="font28 mui-btn mui-btn-red" style="" onclick=queryFiename("'+lisr+'")>查看</a>'+
//					'<a class="font28 mui-btn mui-btn-yellow qs" onclick=deleteFj("'+qid+'","'+fisd+'") style="">删除</a></div>'+
					'<input id="accessory'+coun+'" name="accessory'+coun+'" type="hidden" value="'+file2+'" />'+
					'<div class="mui-row mui-slider-handle">'+
					'<div class="mui-col-sm-2 mui-col-xs-2">'+
					'<img src="'+typeUr+'" class="fujian_img" style="margin-top:5px;"/> </div>'+
					'<div class="mui-col-sm-5  mui-col-xs-5"><label style="word-wrap: break-word" class="fujian_title">'+fn[0]+'</label></div>'+
					'<div class="mui-col-sm-5  mui-col-xs-5" >'+
					'<a class="font25 mui-btn mui-btn-red" style="" onclick=queryFiename("'+lisr+'")>查看</a>'+
					'<a class="font25 mui-btn mui-btn-yellow qs" style="margin-left:6px;" onclick=deleteFj("'+qid+'","'+fisd+'")>删除</a>'+
					'</div>'+
					'</div>'+   
				'</li>';
    } 
    $("#fj_ul").append(html2);
    $("#fj_ul").css('display','block');
    $("#"+fisd).css('display','none');
    addFeila()
}
function addFeila(){
	
	 mui.plusReady(function() { 
	 	var htfli='';
		cfid++
		fisd = 'fj_la'+cfid;
		fis = 'file'+cfid;
		var syosNmae = plus.os.name;//判断手机系统
		if(syosNmae == 'Android'){
			var sysNcode = plus.os.version;//判断手机系统
			if(sysNcode >= '6.0.1'){ 
				htfli = '<label class="fr mui-btn fujian_btn" style="padding: 0px;" id="fj_la'+cfid+'"><input type="file" name="file'+cfid+'" id="file'+cfid+'" class="file" multiple="multiple" onchange="imageChoice()" accept="*" /></label>';
			}else{
				htfli = '<label class="fr mui-btn fujian_btn" style="padding: 0px;" id="fj_la'+cfid+'"><input type="file" name="file'+cfid+'" id="file'+cfid+'" class="file" multiple="multiple" onchange="imageChoice()" accept="application/*,audio/*,video/*,image/*" /></label>'
			}
		}else{
			htfli = '<label class="fr mui-btn fujian_btn" style="padding: 0px;" id="fj_la'+cfid+'"><input type="file" name="file'+cfid+'" id="file'+cfid+'" class="file" multiple="multiple" onchange="imageChoice()" accept="application/*,audio/*,video/*,image/*" /></label>'
		}
		$("#fj_la").append(htfli);
    });
	
}




/**公文查看附件的动态添加数据和点击事件**/
function hanEn(fjli){
	var inAnnex;//附件缓存的map的名字
	var fragment = document.createDocumentFragment(); //新建一个装节点的碎片
	fjli.forEach(function(list) {
//		  "FILE_PATH": "virtual/PLAN/Android开发时可能会忘记的东西.txt",
//      "FILE_NAME": "Android开发时可能会忘记的东西.txt",
//      "SUFFIX": "txt"
		var tp =  list.SUFFIX;
		var typeUr = fileType(tp);
		var department_li = document.createElement('li'); //新建一个节点
		department_li.className = 'mui-table-view-cell fujian_li'; 
		var lisr = JSON.stringify(list);
		department_li.innerHTML = '<div class="mui-row" style="" onclick=hanEnclosure('+lisr+') >'+
		'<div class="mui-col-sm-2 mui-col-xs-2" style="width: 15%;">'+
		'<img src="'+typeUr+'" class="fujian_img" /> </div>'+
		'<div class="mui-col-sm-8  mui-col-xs-8" style="width: 72%;"><label style="word-wrap: break-word" class="fujian_title">'+ list.FILE_NAME+'</label></div>'+
		'<div class="mui-col-sm-2  mui-col-xs-2" style="width: 13%;">'+
		'<label class="fujian_title " style="color: red;"> 查看</label></div>'+ 
		'</div>'; 
		fragment.appendChild(department_li); //将节点装入碎片
	});
	$("#fj_ul").css('display','block');
	$("#fj_ul").append(fragment);
}
/**公文修改附件的动态添加数据和点击事件**/
function xhanEn(fjli){
	var inAnnex;//附件缓存的map的名字
	var fragment = document.createDocumentFragment(); //新建一个装节点的碎片
	    var html='';
	    for (var i = 0; i < fjli.length; i++){
	    	var list = fjli[i];
	    	var qid = 'acf'+i;
//		  "FILE_PATH": "virtual/PLAN/Android开发时可能会忘记的东西.txt",
//      "FILE_NAME": "Android开发时可能会忘记的东西.txt",
//      "SUFFIX": "txt"
		var tp =  list.SUFFIX;
		var fName = list.FILE_NAME+'.'+tp;
		var typeUr = fileType(tp);
		html += '<li class="mui-table-view-cell fujian_li" id="'+qid+'" style="padding: 0px;margin-top:0px;">'+
//		'<div class=" mui-slider-right mui-disabled" style="">'+
//			'<a class="font28 mui-btn mui-btn-red" style="" onclick=queryFiename("'+fName+'")>查看</a>'+
//			'<a class="font28 mui-btn mui-btn-yellow qs" onclick=deleteFj_w("'+qid+'") style="">删除</a></div>'+
			'<input id="accessory'+i+'" name="accessory'+i+'" type="hidden" value="'+list+'" />'+
			'<div class="mui-row mui-slider-handle">'+
			'<div class="mui-col-sm-2 mui-col-xs-2">'+
			'<img src="'+typeUr+'" class="fujian_img" style="margin-top:5px;"/> </div>'+
			'<div class="mui-col-sm-5  mui-col-xs-5"><label style="word-wrap: break-word" class="fujian_title">'+list.FILE_NAME+'</label></div>'+
			'<div class="mui-col-sm-5  mui-col-xs-5" style="overflow: hidden;" >'+
			'<a class="font28 mui-btn mui-btn-red" style="" onclick=queryFiename("'+fName+'")>查看</a>'+
			'<a class="font28 mui-btn mui-btn-yellow qs" style="margin-left:6px;" onclick=deleteFj_w("'+qid+'")>删除</a>'+'</div>'+
			'</div>'+   
		'</li>';
	}
	$("#fj_ul").css('display','block');
	$("#fj_ul").append(html);
}
/**公告会议查看附件的动态添加数据和点击事件**/
function methanEn(fjli){   
	var inAnnex;//附件缓存的map的名字
	var fragment = document.createDocumentFragment(); //新建一个装节点的碎片
	fjli.forEach(function(list) {
//		  "FILE_PATH": "virtual/PLAN/Android开发时可能会忘记的东西.txt",
//      "FILE_NAME": "Android开发时可能会忘记的东西.txt",
//      "SUFFIX": "txt"
		var tp =  list.fileExt;
		var typeUr = fileType(tp);
		var department_li = document.createElement('li'); //新建一个节点
		department_li.className = 'mui-table-view-cell fujian_li'; 
		var lisr = JSON.stringify(list);
		department_li.innerHTML = '<div class="mui-row" onclick=hanEnclosure1('+lisr+') >'+
		'<div class="mui-col-sm-2 mui-col-xs-2">'+
		'<img src="'+typeUr+'" class="fujian_img" /> </div>'+
		'<div class="mui-col-sm-8  mui-col-xs-8"><label style="word-wrap: break-word" class="fujian_title">'+ list.originalFileName+'</label></div>'+
		'<div class="mui-col-sm-2  mui-col-xs-2" >'+
		'<label class="fujian_title " style="color: red;"> 查看</label></div>'+ 
		'</div>'; 
		fragment.appendChild(department_li); //将节点装入碎片
	});
	$("#fj_ul").css('display','block');
	$("#fj_ul").append(fragment);
}
/*根据文件名来查找文件并且预览*/
function queryFiename(filename){ 
	plus.nativeUI.showWaiting("文件打开中……");
	var sysNmae = plus.os.name;//判断手机系统
	var fame =filename ;
	var path= 0;
	if(sysNmae == 'Android'){
		path = anqueName(fame);
	}else{
		
	}
	if(path != 0 ){
		plus.nativeUI.closeWaiting();
		plus.runtime.openFile(path);
	}
	
}  

/**android系统根据传的文件名找出文件的全路径*/
function anqueName(name){
	var anFname = name;
	var anPath = 0;
	var File = plus.android.importClass("java.io.File");
	var sdRoot = getSDRoot();
	var files = plus.android.invoke(sdRoot,"listFiles");
	var len = files.length;
	for(var i=0;i<len;i++){
		var file = files[i];
		if(!plus.android.invoke(file,"isHidden")){
		    if(plus.android.invoke(file,"isDirectory")){
		    	var name = plus.android.invoke(file,"getName");
		    	var filepath = sdRoot + '/' + name;
		    	var subRooat = new File(filepath);
		    	var files2 = plus.android.invoke(subRooat,"listFiles");
		    	var len2 = files2.length;
		    	for(var k=0;k<len2;k++){
					var file2 = files2[k];
					if(!plus.android.invoke(file2,"isHidden")){
					    if(plus.android.invoke(file2,"isDirectory")){
					    	var name2 = plus.android.invoke(file2,"getName");
					    	var filepath2 = subRooat + '/' + name2;
					    	var subRooat2 = new File(filepath2);
					    	var files3 = plus.android.invoke(subRooat2,"listFiles");
					    	var len3 = files3.length;
					    	for(var g=0;g<len3;g++){
					    		var file3 = files3[g];
					    		if(!plus.android.invoke(file3,"isHidden")){
								    if(plus.android.invoke(file3,"isDirectory")){
								  		var name3 = plus.android.invoke(file3,"getName");
								    	var filepath3 = subRooat2 + '/' + name3;
								    	var subRooat3 = new File(filepath3);
								    	var files4 = plus.android.invoke(subRooat3,"listFiles");
								    	var len4 = files4.length;
								    	for(var s=0;s<len4;s++){
								    		var file4 = files4[s];
								    		if(!plus.android.invoke(file4,"isHidden")){
											    if(plus.android.invoke(file4,"isDirectory")){
											    	var name4 = plus.android.invoke(file4,"getName");
											    	var filepath4 = subRooat3 + '/' + name3;
											    	var subRooat4 = new File(filepath4);
											    	var files5 = plus.android.invoke(subRooat4,"listFiles");
											    	if(files5 != null && files5.length > 0 ){
											    		var len5 = files5.length;
											    		for(var r=0;r<len5;r++){
												    		var file5 = files5[r];
												    		if(!plus.android.invoke(file5,"isHidden")){
															    if(plus.android.invoke(file5,"isDirectory")){/**如果需要更深一层即第六层就打开继续写*/
	//														    	var name5 = plus.android.invoke(file5,"getName");
	//														    	var filepath5 = subRooat4 + '/' + name5;
	//														    	var subRooat5 = new File(filepath5);
	//														    	var files6 = plus.android.invoke(subRooat5,"listFiles");
	//														    	var len6 = files6.length;
															    	
															    }else{
															    	var name5_2 = plus.android.invoke(file5,"getName");
															  		if(anFname==name5_2){
															  			anPath = plus.android.invoke(file5,"getPath");
																		return anPath;
															  		}
															    }
												    		}
												    	}
											    	}
											    }else{
											    	var name4_2 = plus.android.invoke(file4,"getName");
											  		if(anFname==name4_2){
											  			anPath = plus.android.invoke(file4,"getPath");
														return anPath;
											  		}
											    }
								    		}
								    	}
								    }else{
								    	var name3_2 = plus.android.invoke(file3,"getName");
								  		if(anFname==name3_2){
								  			anPath = plus.android.invoke(file3,"getPath");
											return anPath;
								  		}
								    }
								}
					    	}
						}else{
							var name2_2 = plus.android.invoke(file2,"getName");
					    	if(name2_2 == anFname){
					        	anPath = plus.android.invoke(file2,"getPath");
					        	return anPath;
					        }
						}
					}
				}
//		        // 文件夹
		    }else{
		    	// 文件名
		    	var name1_2 = plus.android.invoke(file,"getName");
		    	if(name1_2 == anFname){
		        	anPath = plus.android.invoke(file,"getPath");
		        	return anPath;
		        }
		    	
		    }
		}
	}
}
