mui.ready(function() {
	
	getUsersList();
})
var teamData;
	var url=window.location.href;
	if(url.indexOf('mydemeList')>0){
		teamData=fuPinTeam1;
		imgUrl="../../../img/dpohe2.png"
	}
	else if(url.indexOf('interestTeam')>0){
		teamData=interTeam1;
		imgUrl="../../../../img/dpohe2.png"
	}
	else{
		imgUrl="../../../img/dpohe2.png"
		teamData=zhiYuanTeam1;
	}
function getUsersList() {

	var uul = teamData;
	iUrl=imgUrl;
	console.log(uul)
	getTeamTitle(uul)
//	loadUsersList(uul);
}
function getTeamTitle(datas){
	var titleDiv=$(".team-title");
	var item=$(".mui-slider-item");
	var titHtml="";
	var baseMes="";
	var personList=[];
	var personTitle='<div class="mes-block" style="margin-top: 20px;"><div class="mui-row person_block_t">'+
									'<div class="mui-col-sm-4 mui-col-xs-4">'+
										'<span class="font25" style="margin-left: 10px;">姓名</span>'+
									'</div>'+
									'<div class="mui-col-sm-4  mui-col-xs-4">'+
										'<span class="font25" style="margin-left: 10px;">电话号码</span>'+
									'</div>'+
									'<div class="mui-col-sm-4  mui-col-xs-4">'+
										'<span class="font25" style="margin-left: 10px;">拨打电话</span>'+
									'</div>'+
								'</div>'

	for(var i=0;i<datas.length;i++){
		//团队名称
		
		titHtml += '<a class="mui-control-item" data-index="' + datas[i].id + '" style="width: 33%;">团队'+(i+1)+'</a>';
		baseMes='<div class="mes-block"><div class="div-content2">'+
									'<label class="label_blk">团队名称</label>'+
									'<label class="fr" id="proposerName">' + datas[i].name + '</label>'+
								'</div>'+
								'<div class="div-content2">'+
									'<label class="label_blk">负责人</label>'+
									'<label class="fr" id="duty">' + datas[i].person + '</label>'+
								'</div>'+
								'<div class="div-content2">'+
									'<label class="label_blk">团队人数</label>'+
									'<label class="fr" id="subhead">' + datas[i].team.length + '</label>'+
								'</div>'+
								'<div class="div-content2">'+
									'<label class="label_blk">团队简介</label>'+
									'<label class="fr" id="startTime">' + datas[i].mes + '</label>'+
								'</div></div>';
		var teamList=[];
		teamList[i]=datas[i].team;
		console.log(teamList[i].length)
		var li="";
		for (var j = 0; j<teamList[i].length; j++) {
			li+= '<li class="mui-input-row" onclick="smPhone('+ teamList[i][j].phone + ')">'+
										'<div class="mui-row">'+
											'<div class="mui-col-sm-4 mui-col-xs-4">'+
												'<span class="font14">' + teamList[i][j].name + '</span>'+
											'</div>'+
											'<div class="mui-col-sm-5  mui-col-xs-5">'+
												'<span class="font14">' + teamList[i][j].phone + '</span>'+
											'</div>'+
											'<div class="mui-col-sm-3  mui-col-xs-3 callPhone">'+
												'<img src="'+iUrl+'" style="width:20px">'+
											'</div>'+
										'</div>'+
									'</li>'
			personList[i]=li;
	}
		personList[i]=li;
						
		item[i].innerHTML=baseMes+personTitle+'<ul class="mui-table-view person_block_ul">'+personList[i]+'</ul></div>'
	}
	titleDiv[0].innerHTML=titHtml;
	$(".team-title a:first").addClass("mui-active")
	$("mui-slider-group .mui-slider-item:first").addClass("mui-active")
}

	function smPhone(phone) {
		var ophe = phone;
		plus.device.dial(ophe, true);
	}