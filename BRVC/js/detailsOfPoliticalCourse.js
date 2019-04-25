mui.ready(function() {
	
	accessToCourseContent();

})

//获取课程内容
function accessToCourseContent(){
	var courseId = obtain();
	
	var atcc = test11[(courseId-1)];
	
	loadPoliticalCourse(atcc);
}

//加载课程内容
function loadPoliticalCourse(datas) {
	var div = mui(".mui-content")[0];
	
	div.innerHTML += '<div>'+
						'<center>'+
							'<img src="'+datas.imgPath1+'" />'+
							'<img src="'+datas.imgPath2+'" />'+
							'<img src="'+datas.imgPath3+'" />'+
							'<img src="'+datas.imgPath4+'" />'+
							'<img src="'+datas.imgPath5+'" />'+
						'</center>'+
					'</div>'
}
