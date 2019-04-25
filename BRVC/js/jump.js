/*@author:蒲鑫文*/
/*管理跳转页面的js**/
encryptionPara = "Ajrn9MeGChnqzjgIHbiN3WeTbAmQaZmx";
var httpUrl = [
	{urle:"html/tab/homePageOptions.html",urid:"homePageOptions"},				//0选项卡首页
	{urle:"../mybranch/branch.html",urid:"nonConDont"},							//1我的支部
	{urle:"../sunsetOnline/wxOnline.html",urid:"wxOnline"},						//2晚霞在线管理
	{urle:"../sunsetDemeanor/demeanor.html",urid:"demeanor"},					//3晚霞风采管理
	{urle:"../sunsetYear/sunsetYear.html",urid:"sunsetYear"},					//4晚霞颐年管理
	{urle:"../sunsetGarden/garden.html",urid:"garden"},							//5晚霞园地管理
	{urle:"../myWork/work.html",urid:"work"},									//6我的工作管理
	{urle:"../mybranch/branchdetails.html",urid:"branchdetails"},				//7我的支部信息
	{urle:"../mybranch/scactivity.html",urid:"scactivity"},						//8支部活动
	{urle:"scactivity-list.html",urid:"cactivity"},								//9支部活动评论
	{urle:"../mybranch/partydues.html",urid:"partydues"},						//10党费统计
	{urle:"../mybranch/vanguard.html",urid:"vanguard"},							//11先锋之星
	{urle:"../sunsetOnline/linksonal.html",urid:"linksonal"},					//12链接内容
	{urle:"../sunsetOnline/perialReort.html",urid:"perialReort"},				//13其它期刊
	{urle:"../sunsetOnline/propvoices.html",urid:"propvoices"},					//14宣传之声
	{urle:"sunset-list.html",urid:"sunset"},									//15宣传之星
	{urle:"../sunsetOnline/xartydues.html",urid:"xartydues"},					//16宣传之星
	{urle:"../sunsetDemeanor/consunet/column.html",urid:"column"},				//17我为脱贫出分力
	{urle:"sunetcvity.html",urid:"sunetcvity"},									//18栏目
	{urle:"sunetcvity-list.html",urid:"sunetcv"},								//19栏目详情
	{urle:"sentvguard.html",urid:"sentvguard"},									//20统计
	{urle:"mydemeList.html",urid:"mydemeList"},									//21我的团队
	{urle:"sunetdetails.html",urid:"sunetdetails"},								//22团队活动详情
	{urle:"sunetXdetails.html",urid:"sunetXdetails"},							//23个人活动详情
	{urle:"myPower.html",urid:"myPower"},										//24我的力量
	{urle:"../../sunsetDemeanor/consunet/sunetpvoices.html",urid:"sunetpvoices"},	//25力量之声
	{urle:"sunset-list.html",urid:"sunset-list"},								//26力量之声详情
	{urle:"../../sunsetDemeanor/consunet/sunetxartydues.html",urid:"sunsettydues"},	//27力量之星
	{urle:"../sunsetDemeanor/myvolunteer/volunteer.html",urid:"volunteer"},	//28志愿管理
	{urle:"myVPower.html",urid:"myVPower"},									//29我的志愿
	{urle:"sunetVdetails.html",urid:"sunetVde"},							//30志愿详情
	{urle:"myVemeList.html",urid:"myVemeList"},								//31志愿我的团队
	{urle:"sunetdVetails.html",urid:"sunetVdswe"},							//32志愿详情
	{urle:"teamLikst.html",urid:"teamLikst"},								//33志愿之我的团队列表,暂时没有使用
	{urle:"teamDateils.html",urid:"teamDateils"},							//34志愿之团队详情
	{urle:"sunetpVoices.html",urid:"sunetpVoices"},							//35志愿之声
	{urle:"sunsetV-list.html",urid:"sunsevt"},								//36志愿之声详情
	{urle:"sunetVtydues.html",urid:"sunetVtydues"},							//37志愿之星
	{urle:"../sunsetDemeanor/advancedList.html",urid:"advancedList"},		//38先进事迹
	{urle:"../advandetails.html",urid:"advandetails"},		//39先进事迹详情
	{urle:"../sunsetDemeanor/fiveAtcvity.html",urid:"fiveAtcvity"},			//40五个一专题
	{urle:"../sunsetDemeanor/fiveAtcvity-list.html",urid:"fiveAt"},			//41专题详情详情
	{urle:"../sunsetDemeanor/myElegant.html",urid:"myElegant"},				//42我的风采
	{urle:"sendcircle.html",urid:"sendcircle"},								//43上传我的风采
	{urle:"../sunsetDemeanor/suneactivity.html",urid:"sunetivity"},			//44晚霞风采活动之星
	{urle:"../sunsetYear/activity/activityList.html",urid:"activity"},		//45晚霞颐年之我的活动管理界面
	{urle:"positionList.html",urid:"positionList"},							//46我的阵地列表
	{urle:"posiDatelis.html",urid:"posiDatelis"},							//47阵地详情
	{urle:"myPosition/myPosition.html",urid:"myPosition"},					//48我的阵地列表
	{urle:"squadDatelis.html",urid:"squadDatelis"},							//49班级详情
	{urle:"universityList.html",urid:"universityList"},						//50老年大学列表
	{urle:"univeDatelis.html",urid:"univeDatelis"},							//51老年大学详情
	{urle:"schoolList.html",urid:"schoolList"},								//52老干部党校列表
	{urle:"schoolDatelis.html",urid:"schoolDatelis"},						//53党校详情
	{urle:"siteReservationList.html",urid:"siteReservationList"},			//54场地预约列表
	{urle:"siteReservationDetails.html",urid:"siteReservationDetails"},		//55场地预约预约详情
	{urle:"university/activitdues.html",urid:"activitdues"},				//56活动之星
	{urle:"../sunsetYear/helpList/helpList.html",urid:"helpList"},			//57特困帮扶管理
	{urle:"newHelp.html",urid:"newHelp"},									//58特困帮扶申请
	{urle:"myList.html",urid:"myList"},										//59我的申请列表
	{urle:"helpDetails.html",urid:"helpDetails"},							//60我的申请详情
	{urle:"../sunsetYear/culture/cultureList.html",urid:"cultuListX"},		//61健康休养管理
	{urle:"cultuListX.html",urid:"cultuLixs"},								//62健康休养活动列表
	{urle:"cultuDetails.html",urid:"cultuDetails"},							//63健康休养活动详情
	{urle:"scheduleList.html",urid:"scheduleList"},							//64健康休养日程列表
	{urle:"scheduleDetails.html",urid:"scheduleDetails"},					//65健康休养日程详情
	{urle:"opinionList.html",urid:"scheduleList"},							//66健康休养评论的活动列表
	{urle:"opinnPldetaiks.html",urid:"scheduleDetails"},					//67健康休养活动评论详情
	{urle:"../sunsetYear/elsewhere/elsewhList.html",urid:"elsewhList"},		//68 易地安置管理
	{urle:"preseYuan.html",urid:"preseYuan"},								//69住院报告
	{urle:"newReim.html",urid:"newReim"},									//70医疗报销申请
	{urle:"spirations.html",urid:"spirations"},								//71易地心声
	{urle:"../sunsetYear/elsewhere/spirations.html",urid:"spirations"},		//72易地心声
	{urle:"news.html",urid:"news"},											//73时政新闻
	{urle:"../mail/mail_list.html",urid:"mail_list"},						//74查看部门下人员
	{urle:"workpDetails.html",urid:"workpDeta"},							//75人员信息
	{urle:"changePassword.html",urid:"Passwor"},							//76改密码
	{urle:"../sunsetDemeanor/demeanor2.html",urid:"demeanor2"},				//77晚霞风采管理
	{urle:"../sunsetYear/sunsetYear2.html",urid:"sunsetYear2"},				//78晚霞颐年管理
	{urle:"../sunsetGarden/garden2.html",urid:"garden2"},					//79晚霞园地管理
	{urle:"../myWork/work2.html",urid:"work2"},								//80我的工作管理
	{urle:"../sunsetOnline/dynamic.html",urid:"dynamic"},					//81动态新闻
	{urle:"../sunsetOnline/news.html",urid:"news2"},						//82新闻详情
	{urle:"information/personalInformation.html",urid:"personalInformation"},//83个人信息
	{urle:"information/departmentalPersonnelInformation.html",urid:"departmentalPersonnelInformation"},//84人员信息
	{urle:"information/departmentalInformation.html",urid:"departmentalInformation"},//85单位信息
	{urle:"staffStatus.html",urid:"staffStatus"},//86我的单位
	{urle:"voiceOfWork.html",urid:"voiceOfWork"},//87工作之声
	{urle:"workDisplay.html",urid:"workDisplay"},//88工作风采
	{urle:"visitingCondolences.html",urid:"visitingCondolences"},//89看望慰问
	{urle:"consolation/dailyCondolences.html",urid:"dailyCondolences"},//90日常慰问
	{urle:"consolation/differentPlacesCondolences.html",urid:"differentPlacesCondolences"},//91易地慰问
	{urle:"hospitalizationCondolences.html",urid:"hospitalizationCondolences"},//92住院慰问
	{urle:"birthdayGreetings.html",urid:"birthdayGreetings"},//93生日慰问
	{urle:"holidayCondolences.html",urid:"holidayCondolences"},//94节日慰问
	{urle:"workDeeds.html",urid:"workDeeds"},//95工作事迹
	{urle:"course/detailsOfPoliticalCourse.html",urid:"detailsOfPoliticalCourse"},//96政治理论课程详情页
	{urle:"course/detailsOfLiteratureAndArtHistoryCourse.html",urid:"detailsOfLiteratureAndArtHistoryCourse"},//97文艺历史课程详情页
	{urle:"personnelDetails.html",urid:"personnelDetails"},//98工作人员信息
	{urle:"careDetails.html",urid:"careDetails"},//99保健详情
	{urle:"preservingDetails.html",urid:"preservingDetails"},//100养生详情
	{urle:"noticeDetails.html",urid:"noticeDeta"},			//101详情
	{urle:"../sunsetDemeanor/advancedDeeds/mien.html",urid:"mien"},			//102我的风采
	{urle:"../sunsetDemeanor/advancedDeeds/advancedDetail.html",urid:"advancedDetail"},			//103先进典型
	{urle:"newMien.html",urid:"newMien"},				//104上传风采
	{urle:"mieDaitls.html",urid:"mieDaitls"},			//105 文章详情
	{urle:"miedDailts.html",urid:"miedDailts"},			//106 书画详情
	{urle:"miedFDailts.html",urid:"miedFDailts"},		//107摄影详情
	{urle:"../sunsetYear/lettesvisits/Lettersvisits.html",urid:"lettrSvisits"},	//108特困帮扶管理
	{urle:"newlett.html",urid:"lettnewHelp"},									//109特困帮扶申请
	{urle:"lettmyList.html",urid:"lettmyList"},										//110我的申请列表
	{urle:"lettDetails.html",urid:"lettDetails"},								//111我的申请详情
	{urle:"univeManage.html",urid:"univeManage"},								//112我的大学管理
	{urle:"university/enterList.html",urid:"enterList"},								//113报名课程列表
	{urle:"university/signList.html",urid:"signList"},								//114签到课程列表
	{urle:"enterDetail.html",urid:"enterDetail"},								//115报名课程详情
	{urle:"signDetail.html",urid:"signDetail"},								//116签到课程详情
	{urle:"examinList.html",urid:"examinList"},									//117我的信访审核列表
	{urle:"examinDetails.html",urid:"examinDetails"},							//118我的审核详情
	{urle:"consolationList.html",urid:"consolationList"},							//119走访慰问
	{urle:"consoDetails.html",urid:"consoDetails"},							//120慰问详情
	{urle:"unJoinDetails.html",urid:"unJoinDetails"},							//121未参加的兴趣详情
	{urle:"joinDetail.html",urid:"joinDetail.html"},						//122已参加的兴趣详情
	{urle:"interest.html",urid:"interest"}							,//123兴趣列表
	{urle:"consolationDetails.html",urid:"consolationDetails"}		,//124 日常/异地慰问详情
	{urle:"../mybranch/branch.html",urid:"branch"}		,//125 我的支部（工作）详情
	{urle:"workArticDetails.html",urid:"workArticDetails"},			//126 工作风采文章详情
	{urle:"workPainDetails.html",urid:"workPainDetails"},			//127工作风采书画详情
	{urle:"workPhotoDetails.html",urid:"workPhotoDetails"},		//128工作风采摄影详情
	{urle:"university/courseList.html",urid:"courseList"},		//129我的大学模块我的课程列表
	{urle:"courseDetails.html",urid:"courseDetails"},			//130我的大学模块我的课程详情
	{urle:"interest/interestTeam.html",urid:"interestTeam"},	//131我的兴趣团队
	{urle:"interest/interActive.html",urid:"interActive"},		//132我的兴趣活动
	{urle:"squadList.html",urid:"squadList"},					//133我的班队（我的阵地）
	{urle:"myActivities.html",urid:"myActivities"},		//134我的活动（我的阵地）
	{urle:"signIn.html",urid:"signIn"},		//135活动签到（我的阵地）
	{urle:"../sunsetOnline/linkList.html",urid:"linkList"},		//136链接内容列表页面
	{urle:"details/newExperience.html",urid:"newExperience"},		//137提交工作心得页面
	{urle:"details/newRecommendation.html",urid:"newRecommendation"},		//138提交工作建议页面
	{urle:"details/experienceDetails.html",urid:"experienceDetails"},		//139工作心得详情页面
	{urle:"details/recommendationDetails.html",urid:"recommendationDetails"},		//140工作建议详情页面
	{urle:"spirationsDetails.html",urid:"spirationsDetails"},		//141心声详情页面
	{urle:"newVoice.html",urid:"newVoice"},		//142上传学习之声页面
	{urle:"detail/newVoice.html",urid:"newVoice"},		//143上传学习之声页面
	{urle:"detail/voiceDetails.html",urid:"voiceDetails"},		//144上传学习之声页面
	{urle:"myAppointment.html",urid:"myAppointment"},		//145我的场地预约列表页面
	{urle:"mySiteDetail.html",urid:"mySiteDetail"},		//146我的预约详情页面
]




/**不传值的跳转页面的方法*/
function jump(jid){
	var urlid = httpUrl[jid].urid;
	var indexUrl = httpUrl[jid].urle;
	mui.openWindow({
		url: indexUrl ,//+ getUtils().setUrlParams("isNewVersion=" + isNewVersion),
		id: urlid,
//		createNew:true,
		show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			aniShow: 'fade-in',
			duration: 300
		},
		waiting: {
			autoShow: true,
			title: '正在加载...',
			options: {
				style: 'black'
				}
			}
		});
}
/**需要传值的跳转页面的方法*/
function jumpValue(jid,real){
	var urlid = httpUrl[jid].urid;
	var indexUrl = httpUrl[jid].urle;
	var positio = getUtils().setUrlParams(real);
	var urlp= indexUrl+'?';
	mui.openWindow({
		url: urlp+'position='+ positio,
		id: urlid,
		createNew:true,
		show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			aniShow: 'fade-in',
			duration: 300
		},
		waiting: {
			autoShow: true,
			title: '正在加载...',
			options: {
				style: 'black'
			}
		}
	});
}
/**获取前一个页面传过来的值*/
function obtain(){
	var res = getUtils().getUrlParam('position');
	return res;
}
function getCheckBoxRes4(className){
	    var rdsObj   = document.getElementsByClassName(className);
//	    var rdsObj=document.getElementsByName(className);
	    var checkVal = new Array();//部门下员工名字
	    var checkId = new Array();//部门下员工id
	    var checkFVal = new Array();//部门名字
	    var checkFId = new Array();//部门id
	    var checkRum = new Array();//会议室楼号
	    var checkName = new Array();//会议室房间号
	    var checkdriverId = new Array();//司机id
	    var checkdriverName= new Array();//司机
	    var checkdriverLeave = new Array();//司机状态	    
	    var k  = 0;
	    for(i = 0; i < rdsObj.length; i++){
	    	var iscode = rdsObj[i].childNodes[0].checked;
	        if(iscode){
	        	var cheFck = rdsObj[i].parentNode.parentNode;
				checkVal[k] = rdsObj[i].innerText;
				checkId[k]  = rdsObj[i].value;
				checkFVal[k] = cheFck.childNodes[0].text;
				checkRum[k] = rdsObj[i].childNodes[2].innerText;
				checkName[k] = rdsObj[i].childNodes[3].innerText;
				checkdriverId[k] = rdsObj[i].childNodes[4].innerText;
	    		checkdriverName[k] = rdsObj[i].childNodes[5].innerText;
	    		checkdriverLeave[k] = rdsObj[i].childNodes[6].innerText;
	    		checkFId[k] = cheFck.value;
	            k++;
	        }
	    }
	    var res = new Array();
	    res[0]= checkVal;
	    res[1]= checkId;
	    res[2]= checkFId;
	    res[3]= checkFVal;
	    res[4]= checkRum;
	    res[5]= checkName;
	    res[6]= checkdriverId;
	    res[7]= checkdriverName;
	    res[8]= checkdriverLeave;
	    $(".met-son").val( res[0]);
	    return res;
	}




/**获取选择的多个公文接收的部门或者部门下人员**/
	function getCheckBoxRes(className){
	    var rdsObj   = document.getElementsByClassName(className);
//	    var rdsObj=document.getElementsByName(className);
	    var checkVal = new Array();//部门下员工名字
	    var checkId = new Array();//部门下员工id
	    var checkFVal = new Array();//部门名字
	    var checkFId = new Array();//部门id
	    var checkPh = new Array();//部门下员工电话
	    var k  = 0;
	    for(i = 0; i < rdsObj.length; i++){
	    	var iscode = rdsObj[i].childNodes[0].checked;
	        if(iscode){
	        	var cheFck = rdsObj[i].parentNode.parentNode;
				checkVal[k] = rdsObj[i].innerText;
				checkId[k]  = rdsObj[i].value;
				checkPh[k]  = rdsObj[i].childNodes[0].className;
				checkFVal[k] = cheFck.childNodes[0].text;
	    		checkFId[k] = cheFck.value;
	            k++;
	        }
	    }
	    var res = new Array();
	    res[0]= checkVal;
	    res[1]= checkId;
	    res[2]= checkFId;
	    res[3]= checkFVal;
	    res[4]= checkPh;
//	    $(".met-son").val( res[0]);
	    return res;
	}
/**获取选择的多个公文接收的部门或者部门下人员**/
	function getCheckBoxRes3(className){
	    var rdsObj   = document.getElementsByClassName(className);
//	    var rdsObj=document.getElementsByName(className);
	    var checkVal = new Array();
	    var checkId = new Array();
	    var metStart = new Array();
	    var metEnd = new Array();
	    var roomNum = new Array();
	    var leader = new Array();
	    var metContent = new Array();
	    var k  = 0;
	    for(i = 0; i < rdsObj.length; i++){
	    	var asfd = rdsObj[i];
	    	var iscode = asfd.childNodes[0].checked;
	        if(iscode){
//	            checkVal[k] = rdsObj[i].value;
				checkVal[k] = rdsObj[i].innerText;
				checkId[k]  = rdsObj[i].value;
//				metStart[k] = asfd.ChildNodes[2].value;
//				alert($(asfd).find("input[id='metStart']").val());
				metStart[k] = $(asfd).find("input[id='metStart']").val();
				metEnd[k] 	= $(asfd).find("input[id='metEnd']").val();
				roomNum[k] 	= $(asfd).find("input[id='roomNum']").val();
				leader[k] 	= $(asfd).find("input[id='leader']").val();
				console.log(rdsObj[i]);
	            k++;
	        }
	    }
	    var res = new Array();
	    res[0]= checkVal;
	    res[1]= checkId;
	    res[2]= metStart;
	    res[3]= metEnd;
	    res[4]= metContent;
	    res[5]= roomNum;
	    res[6]= leader[0];
	    return res;
	}
	/*
	 * （车辆）获取多层选中数据
	 */
	function getCheckBoxRes2(className){
		    var rdsObj   = document.getElementsByClassName(className);
	//	    var rdsObj=document.getElementsByName(className);
		    var checkVal = new Array();
		    var k        = 0;
		    for(i = 0; i < rdsObj.length; i++){
		    	var asfd = rdsObj[i];
		    	 var netxt = asfd.childNodes[1].childNodes[0];
		    	var iscode = asfd.childNodes[0].childNodes[1].checked;
		        if(iscode){
	//	            checkVal[k] = rdsObj[i].value;
					checkVal[k] = netxt.innerText;
		            k++;
		        }
		    }
		return checkVal;
	}

function getCheckBoxRes5(className){
	    var rdsObj   = document.getElementsByClassName(className);
//	    var rdsObj=document.getElementsByName(className);
	    var checkVal = new Array();//部门下员工名字
	    var checkId = new Array();//部门下员工id
	    var checkFVal = new Array();//部门名字
	    var checkFId = new Array();//部门id
	    var checkRum = new Array();//会议室楼号
	    var checkName = new Array();//会议室房间号
	       
	    var k  = 0;
	    for(i = 0; i < rdsObj.length; i++){
	    	var iscode = rdsObj[i].childNodes[0].checked;
	        if(iscode){
	        	var cheFck = rdsObj[i].parentNode.parentNode;
				checkVal[k] = rdsObj[i].innerText;
				checkId[k]  = rdsObj[i].value;
				checkFVal[k] = cheFck.childNodes[0].text;
				checkRum[k] = rdsObj[i].childNodes[2].innerText;
				checkName[k] = rdsObj[i].childNodes[3].innerText;
	    		checkFId[k] = cheFck.value;
	            k++;
	        }
	    }
	    var res = new Array();
	    res[0]= checkVal;
	    res[1]= checkId;
	    res[2]= checkFId;
	    res[3]= checkFVal;
	    res[4]= checkRum;
	    res[5]= checkName;
	    $(".met-son").val( res[0]);
	    return res;
	}



//界面提示弹出层方法调用函数，无回调
function showDialog(type, title, tips) {
	var buttons = type == "success" ? ['确认'] : type == "warning" ? ['确认'] : ['确认', '取消'];
	$("body").dialog({
		type: type,
		title: title,
		discription: tips,
		buttons: buttons,
		maskBg: "rgba(176, 174, 174,0.5)"
	});
}
//界面提示弹出层方法调用函数，有回调,界面需指定重写函数function dialog_CallBack(ret)
function showDialog_CallBack(type, title, tips) {
	var buttons = type == "success" ? ['确认'] : type == "warning" ? ['确认'] : ['确认', '取消'];
	$("body").dialog({
		type: type,
		title: title,
		discription: tips,
		buttons: buttons,
		maskBg: "rgba(176, 174, 174,0.5)"
	}, function(ret) {
		// alert('你点击的是第'+ret.index+'个按钮,状态:'+ret.input.value);
		dialog_CallBack(ret);
	});
}
//界面提示弹出层方法调用函数，有回调,界面需指定重写函数function dialog_CallBack(ret,index)
//图片上传使用
function showDialog_CallBack_0(type, title, tips, index) {
	var buttons = type == "success" ? ['确认'] : type == "warning" ? ['确认'] : ['确认', '取消'];
	$("body").dialog({
		type: type,
		title: title,
		discription: tips,
		buttions: buttons,
		maskBg: "rgba(176, 174, 174,0.5)"
	}, function(ret) {
		// alert('你点击的是第'+ret.index+'个按钮,状态:'+ret.input.value);
		dialog_CallBack_Img(ret, index);
	});
}
//僧侣选择弹出层方法调用函数，有回调,界面需指定重写函数function getCheckedNodes(ret)
function showDialog_checkGelong(type, title,count) {
	var buttons = type == "success" ? ['确认'] : type == "warning" ? ['确认'] : ['确认', '取消'];
	$("body").dialog({
		type: type,
		title: title,
		custom: true,
		coun:count,
		buttons: buttons,
		maskBg: "rgba(176, 174, 174,0.5)"
//		maskBg: "rgba(176, 174, 174,0.5)"
	}, function(ret) {
		if(ret.index === 0) {
			if(count == 1){
				getCheckedNodes();
			}else if(count == 2){
				getChecked();
			}else if(count == 3){
				getRedio();
			}else if(count == 4){
				getCar();
			}else if(count == 5){
				getTravel();
			}else if(count == 6){
				getQust();
			}else if(count == 7){
				getRedio();
			}else if(count == 8){
				getNewst();
			}else if(count == 9){
				 getMetName();
			}else if(count == 10){
				 getPerd();
			}else if(count == 11){
				 getCarnum();
			}else if(count == 12){
				 getCarpeople();
			}else if(count == 13){
				 getVenueType();
			}else if(count == 14){
				 getKnowType();
			}else if(count == 15){
				 getrepairType();
			}else if(count == 16){
				 getAssetsType();
			}else if(count == 17){
				 getplaceDeparture();
			}else if(count == 18){
				 getVenueNum();
			}else if(count == 19){
				 getLogType();
			}else if(count == 20){
				 getPersionNum();
			}else if(count == 21){
				 gettyform();
			}
			
		}else if(ret.index === 1){
//			alert('as')
		}
	});
}
/*
 * 调用获取数据方法
 */
/**
 * ajax操作(有转圈动画)
 * @param {Object} urlAction 接口地址
 * @param {Object} params 参数
 * @param {Object} callFun 接口调用成功后的回调函数
 */
function myAjax (urlAction,params,callFun) {
	//显示loading等待框
//	layer.load(2);
	params.encryptionPara = encryptionPara;
	$.ajax({
		dataType:'json',//服务器返回json格式数据
		type:"post",
		url:urlAction,
		data:params,
//		async:true,
		success:function (data) {
//			layer.closeAll('loading');//关闭loading等待框
			if(typeof callFun == "function") callFun(data);
		},
		error:function () {
			plus.nativeUI.closeWaiting();
			if (plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE) {
			mui.toast("网络异常，请检查网络设置！");
			 
			} else {
//			 mui.alert("服务器出错！");
			}
		}
	});
}
/*
 * 表单提交
 * 
 * url 地址
 * @param {Object} callFun 接口调用成功后的回调函数
 */
	function submitDataForm(urlAction,callFun){
//		var enUrl = 'http://192.168.1.117:8080/DIOA/saveFilesInfo';
		$("#data_form").ajaxSubmit({
			url: urlAction,
			type: 'post',
			dataType: 'json',
			boforeSubmit: function() {},
			success:function (data) {
//			layer.closeAll('loading');//关闭loading等待框
			if(typeof callFun == "function") callFun(data);
			},
			error:function () {
	//			layer.closeAll('loading');//关闭loading等待框
				alert('服务器错误！')
			}
		});
	}

	function getCheckBquery(className){
	    var rdsObj   = document.getElementsByClassName(className);
	    var checkVal = new Array();//部门下员工名字
	    var checkId = new Array();//部门下员工id
	    var checkFVal = new Array();//部门名字
	    var checkFId = new Array();//部门id
	    var check = new Array();//对象
	    var k  = 0;
	    for(i = 0; i < rdsObj.length; i++){
	    	var asfd = rdsObj[i];
	    	var iscode = asfd.childNodes[2].checked;
	        if(iscode){
	        	var roomNum2 = $(asfd).find("input[id='roomNum']")[0].attributes[2].textContent;
				var zUser =  JSON.parse(roomNum2);
				checkVal[k] = zUser.username;
				checkId[k]  = zUser.id;
				checkFVal[k] = zUser.orgName;
	    		checkFId[k] = zUser.orgId;
	    		check[k] = zUser;
	            k++;
	        }
	    }
	    var res = new Array();
	    res[0]= checkVal;
	    res[1]= checkId;
	    res[2]= checkFId;
	    res[3]= checkFVal;
	    res[4]= check;
	    return res;
	}
	/*会议室选择人员*/
	function getCheckPersion(className){
	    var rdsObj   = document.getElementsByClassName(className);
	    var checkVal = new Array();//部门下员工名字
	    var checkId = new Array();//部门下员工id
	    var checkFVal = new Array();//部门名字
	    var checkFId = new Array();//部门id
	    var check = new Array();//电话
	    var k  = 0;
	    for(i = 0; i < rdsObj.length; i++){
	    	var asfd = rdsObj[i];
	    	var iscode = asfd.childNodes[2].checked;
	        if(iscode){
	        	var roomNum2 = $(asfd).find("input[id='roomNum']")[0].attributes[2].textContent;
				var zUser =  JSON.parse(roomNum2);
				checkVal[k] = zUser.username;
				checkId[k]  = zUser.id;
				checkFVal[k] = zUser.orgName;
	    		checkFId[k] = zUser.orgId;
	    		check[k] = zUser.phone;
	            k++;
	        }
	    }
	    var res = new Array();
	    res[0]= checkVal;
	    res[1]= checkId;
	    res[2]= checkFId;
	    res[3]= checkFVal;
	    res[4]= check;
	    
	    return res;
	}
/**向div模块装载选中的人员数据,
 * nodes 是选中人员名字的数组
 * di_name 是加载人员的div的id名字
 * nuwi 显示数据的div的宽度
 * */
function loadPeople(nodes,di_name,nuwi){
	$('#'+di_name).html("");
	for(var k=0;k<nodes.length;k++){
		var d = 9;//这个是标识符，删除方法你用.split("9")可以获得装载数据的id
		var wr = di_name+d+k;
		$('#'+di_name).append('<div id="dv'+wr+'" style="width: '+nuwi+'px;height: 30px;border: 1px #D0D6D6 solid; float: left;margin-left: 4px;margin-top: 2px;"></div>');
		$('#dv'+wr).append('<label style="float: left;margin-left: 0px;margin-top: 5px;font-size: 0.48rem;color: #8F8F94;">'+nodes[k]+'</label>');
		$('#dv'+wr).append('<img src="../../images/zk_del.png" style="float: right;margin-top: 8px;margin-right: 5px;" onclick=delpeople("'+wr+'","'+nodes[k]+'") />');
	}
}
/**将div中人员数据删除的方法，该方法根据需要重写
 * qisd 是需要删除人员名字的div
 * 的id也是总的人员id与名字数组的下标
 * nema是数组将要删除的值
 * */
 function delpeople(qisd,nema){};
/**向div模块装载选中的人员或者电话数据,
 * nodes 是选中数组
 * di_name 是加载数据的div的id名字
 * nuwi 显示数据的div的宽度
 * */
function loadPhone(nodes,di_name,nuwi){
	$('#'+di_name).html("");
	for(var k=0;k<nodes.length;k++){
		var d = 9;//这个是标识符，删除方法你用.split("9")可以获得装载数据的id
		var wr = di_name+d+k;
		$('#'+di_name).append('<div id="dv'+wr+'" style="width: '+nuwi+'px;height: 30px;border: 1px #D0D6D6 solid; float: left;margin-left: 4px;margin-top: 2px;"></div>');
		$('#dv'+wr).append('<label style="margin-left: 0px;margin-top: 5px;font-size: 0.48rem;color: #8F8F94;">'+nodes[k]+'</label>');
//		$('#dv'+wr).append('<img src="../../images/zk_del.png" style="float: right;margin-top: 8px;margin-right: 5px;" />');
	}
}
/* 
*比较对象是否相同 
*/ 
function o2o(o1,o2){ 
	if(!($.isPlainObject(o1) && $.isPlainObject(o2))){ 
		return false; 
	} 
	var k1k2=[],k1 =[],k2=[]; 
	$.each(o1,function(k,v){ 
		k1.push(k); 
	}); 
	$.each(o2,function(k,v){ 
		k2.push(k); 
	}); 
	if(k1.length != k2.length){ 
		return false; 
	} 
	k1k2 = k1; 
	k1k2 = k1k2.concat(k2); 
//			k1k2.distinct(); 
	if(k1.length != k1k2.length || k2.length != k1k2.length){ 
		return false; 
	} 
	
	var flag=true; 
	$.each(k1k2,function(i,v){ 
		var v1= o1[v]; 
		var v2 =o2[v]; 
		if(typeof v1 != typeof v2){ 
			flag= false; 
		}else{ 
			if($.isPlainObject(v1) && $.isPlainObject(v2)){//recursion 
				flag = o2o(v1,v2); 
				if(!flag){ 
					return false; 
				} 
		}else if($.isArray(v1) && $.isArray(v2)){ 
			flag = a2a(v1,v2); 
			if(!flag){ 
				return false; 
			} 
		}else{ 
			if(v1 !== v2){ 
				flag= false; 
			} 
		} 
	} 
	}); 
	return flag; 
} 
/* 
*比较数组是否相同 
*/
function qliCode(a1,a2){ 
	if(!($.isArray(a1) && $.isArray(a2))){ 
		return false; 
	} 
	if(a1.length != a2.length){ 
		return false; 
	} 
	
	a1.sort(); 
	a2.sort(); 
	for(var i=0;i<a1.length;i++){ 
	if(typeof a1[i] != typeof a2[i]){ 
	return false; 
	} 
	if($.isPlainObject(a1[i]) && $.isPlainObject(a2[i])){ 
	var retVal = o2o(a1[i],a2[i]); 
	if(!retVal){ 
	return false; 
	} 
	}else if($.isArray(a1[i]) && $.isArray(a2[i]) ){//recursion 
	if(!a2a(a1[i],a2[i])){ 
	return false; 
	} 
	}else if(a1[i] !== a2[i]){ 
	return false; 
	} 
	} 
	return true; 
}
/*详情选项卡**/
(function($) {
		$('#scroll').scroll({
			indicators: true //是否显示滚动条
		});
		var segmentedControl = document.getElementById('segmentedControl');
		$('.mui-input-group').on('change', 'input', function() {
			if (this.checked) {
				var styleEl = document.querySelector('input[name="style"]:checked');
				var colorEl = document.querySelector('input[name="color"]:checked');
				if (styleEl && colorEl) {
					var style = styleEl.value;
					var color = colorEl.value;
					segmentedControl.className = 'mui-segmented-control' + (style ? (' mui-segmented-control-' + style) : '') + ' mui-segmented-control-' + color;
				}
			}
		});
	})(mui);
	
/**格式化时间字符串可以将“2010-1-2 2:13:6” 转换为 “2010-1-2 2:13”或者“2010-01-02 02:13:06” */
function formatDate(date, format) {   
	if (!date) return;   
	if (!format) format = "yyyy-MM-dd";   
	switch(typeof date) {   
	    case "string":   
	        date = new Date(date.replace(/-/, "/"));   
	        break;   
	    case "number":   
	        date = new Date(date);   
	        break;   
	}    
	if (!date instanceof Date) return;   
	var dict = {   
	    "yyyy": date.getFullYear(),   
	    "M": date.getMonth() + 1,   
	    "d": date.getDate(),   
	    "H": date.getHours(),   
	    "m": date.getMinutes(),   
	    "s": date.getSeconds(),   
	    "MM": ("" + (date.getMonth() + 101)).substr(1),   
	    "dd": ("" + (date.getDate() + 100)).substr(1),   
	    "HH": ("" + (date.getHours() + 100)).substr(1),   
	    "mm": ("" + (date.getMinutes() + 100)).substr(1),   
	    "ss": ("" + (date.getSeconds() + 100)).substr(1)   
	};       
	return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function() {   
	        return dict[arguments[0]];   
	    });                   
}	
	
/*外出报备进度展示**/
function sched(slist){
	var html='';
	var usecou;
	var usetml='';
	var zusecou,xusecou;
	var code;//1是处理中2是处理完,没有处理完是看不见处理意见的
	var zusetml='';
	var hyml;
	var fist = slist;
	if(fist.length == 1){
		var flist = fist[0];
		var type = flist.type;
		var tyctx;
		if(type != null){
			if(type == 1){
				hyml = '<div align="center" class="pross_img">--------------------<img src="../../../img/forward1.png" class="imgs_jt">--------------------'+
				'</div>'
				tyctx='<label class="font28 labe_sqh">(转发)</label>';
			}else if(type == 2){
				hyml = '<div align="center" class="pross_img">--------------------<img src="../../../img/over1.png" class="imgs_jt">--------------------'+
				'</div>'
				tyctx='<label class="font28 labe_sqh">(完成)</label>';
			}
		}else{
			tyctx=' ';
		}
		var fcoun = flist.flow_status;
		xusecou = flist.forward_name;
		if(xusecou != null){
			zusecou = xusecou;
		}else{
			zusecou = flist.two_forward_name;
		}
		if(fcoun == 2){
			var zusetim = flist.processing_time;
			if(zusetim == null ){
				zusetim=' ';
			}
			code = flist.flow_status;
			zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-12 mui-col-xs-12 div-schedule2" style="margin-top: 10px;">'+
			    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-12 mui-col-xs-12 div-schedule3" >'+
	        	'<label>处理时间:'+zusetim+'</label></div></div></div>';
        }else if(fcoun == 1){
        	zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-12 mui-col-xs-12 " style="margin-top: 10px;">'+
			    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-12 mui-col-xs-12 div-schedule3" >'+
	        	'<label>处理中</label></br></div></div></div>';
        }
	}else{
		for (var k = 0; k < fist.length;k++) {
			var flist = fist[k];
			var type = flist.type;
			var tyctx;
			if(type != null){
				if(type == 1){
					hyml = '<div align="center" class="pross_img">--------------------<img src="../../../img/forward1.png" class="imgs_jt">--------------------'+
				'</div>'
					tyctx='<label class="font20 labe_sqh">(转发)</label>';
				}else if(type == 2){
					hyml = '<div align="center" class="pross_img">--------------------<img src="../../../img/over1.png" class="imgs_jt">--------------------'+
				'</div>'
					tyctx='<label class="font20 labe_sqh">(完成)</label>';
				}
			}else{
				tyctx=' ';
			}
			var fcoun = flist.flow_status;
			xusecou = flist.forward_name;
			if(xusecou != null){
				zusecou = xusecou;
			}else{
				zusecou = flist.two_forward_name;
			}
			if(fcoun == 2){
				var zusetim = flist.processing_time;
				if(zusetim == null ){
					zusetim=' ';
				}
				code = flist.flow_status;
				var count= fist.length-1;
				if(k == count){
					zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-12 mui-col-xs-12 div-schedule2" style="margin-top: 10px;">'+
				    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-12 mui-col-xs-12 div-schedule3" >'+
		        	'<label>处理时间:'+zusetim+'</label></div></div></div>';
				}else{
					zusetml+=hyml+'<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-12 mui-col-xs-12 div-schedule2" style="margin-top: 10px;">'+
				    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-12 mui-col-xs-12 div-schedule3" >'+
		        	'<label>处理时间:'+zusetim+'</label></div></div></div>';
				}
			}else if(fcoun == 1){
				var count= fist.length-1;
				if(k == count){
					hyml = '<div align="center" class="pross_img">--------------------<img src="../../../img/examine.png" class="imgs_jt">--------------------'+
				'</div>'
					zusetml+=hyml+'<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-12 mui-col-xs-12 " style="margin-top: 10px;">'+
				    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-12 mui-col-xs-12 div-schedule3" >'+
		        	'<label>处理中</label></br></div></div></div>';
				}else{
					hyml = '<div align="center" class="pross_img">--------------------<img src="../../../img/examine.png" class="imgs_jt">--------------------'+
				'</div>'
					zusetml+=hyml+'<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-12 mui-col-xs-12 " style="margin-top: 10px;">'+
				    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-12 mui-col-xs-12 div-schedule3" >'+
		        	'<label>处理中</label></br></div></div></div>';
				}
	        }
		}
	}
	html=zusetml;
	$('#schedule').append(html);
}
/*
 * 请假的审批意见
 */
function schleave(slist){
	var html='';
	var usecou;
	var usetml='';
	var zusecou,xusecou;
	var code;//1是处理中2是处理完,没有处理完是看不见处理意见的
	var zusetml='';
	var hyml = '<div align="center"><img src="../../images/xx_jt.png"  class="imgs_jt" /></div>'
	var fist = slist;
	if(fist.length == 1){
		var flist = fist[0];
		var type = flist.type;
		var tyctx;
		if(type != null){
			if(type == 1){
				tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(转发)</label>';
			}else if(type == 2){
				tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(完成)</label>';
			}
		}else{
			tyctx=' ';
		}
		var fcoun = flist.flow_status;
		xusecou = flist.forward_name;
		if(xusecou != null){
			zusecou = xusecou;
		}else{
			zusecou = flist.two_forward_name;
		}
		if(fcoun == 2){
			var zusetim = flist.processing_time;
			if(zusetim == null ){
				zusetim=' ';
			}
			var hand = flist.forward_opinion;
			var hemi ='';
			code = flist.flow_status;
			if(hand == null || code == 1){
				hand=' ';
				hemi = '<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" style="margin-top: 10px;">';
			}else{
				hemi = '<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" >';
			}
			zusetml+=hemi+
			    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
	        	'<label>审批时间:'+zusetim+'</label></br><label>处理意见:</label></br>'+
	        	'<label class="labe_sch">'+hand+'</label></div></div></div>';
        }else if(fcoun == 1){
        	zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 " style="margin-top: 10px;">'+
			    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
	        	'<label>处理中</label></br></div></div></div>';
        }
	}else{
		for (var k = 0; k < fist.length;k++) {
			var flist = fist[k];
			var type = flist.type;
			var tyctx;
			if(type != null){
				if(type == 1){
					tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(转发)</label>';
				}else if(type == 2){
					tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(完成)</label>';
				}
			}else{
				tyctx=' ';
			}
			var fcoun = flist.flow_status;
			xusecou = flist.forward_name;
			if(xusecou != null){
				zusecou = xusecou;
			}else{
				zusecou = flist.two_forward_name;
			}
			if(fcoun == 2){
				var zusetim = flist.processing_time;
				if(zusetim == null ){
					zusetim=' ';
				}
				var hand = flist.forward_opinion;
				var hemi =''
				code = flist.flow_status;
				if(hand == null || code == 1 || hand == "null"){
					hand=' ';
					hemi = '<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" style="margin-top: 10px;">';
				}else{
					hemi = '<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" >';
				}
				var count= fist.length-1;
				if(k == count){
					zusetml+=hemi+
				    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>审批时间:'+zusetim+'</label></br><label>处理意见:</label></br>'+
		        	'<label class="labe_sch">'+hand+'</label></div></div></div>';
				}else{
					zusetml+=hemi+
				    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>审批时间:'+zusetim+'</label></br><label>处理意见:</label></br>'+
		        	'<label class="labe_sch">'+hand+'</label></div></div></div>'+hyml;
				}
			}else if(fcoun == 1){
				var count= fist.length-1;
				if(k == count){
					zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 " style="margin-top: 10px;">'+
				    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>处理中</label></br></div></div></div>';
				}else{
					zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 " style="margin-top: 10px;">'+
				    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>处理中</label></br></div></div></div>'+hyml;
				}
	        }
		}
	}
	html=zusetml;
	$('#schedule').append(html);
}
/*公文进度展示**/
function sedLod(slist,scoe){//scoe 1是签批单 2是审批笺
	//这是放置公文各个模块的进度的div的字符串，id。名字、审批环节编号
	//办文单位、offiting、0,相关单位、Relanits、1,秘书处、secariat、2,领导签发、leaDessue、3
	var ghtm='';
	if(scoe == 1){
		ghtm='<div class="div-con" align="center"><label class="">办文单位</label></div>'+
				'<div class="div-shule" id="offiting" ></div>'+
				'<div class="div-con" align="center"><label class="">领导审批</label></div>'+
				'<div class="div-shule" id="leaDessue" ></div>';
	}else if(scoe == 2){
		ghtm='<div class="div-con" align="center"><label class="">办文单位</label></div>'+
				'<div class="div-shule" id="offiting" ></div>'+
				'<div class="div-con" align="center"><label class="">相关单位</label></div>'+
				'<div class="div-shule" id="Relanits" ></div>'+
				'<div class="div-con" align="center"><label class="">秘书处</label></div>'+
				'<div class="div-shule" id="secariat" ></div>'+
				'<div class="div-con" align="center"><label class="">领导签发</label></div>'+
				'<div class="div-shule" id="leaDessue" ></div>';  
	}
	$('#item2').append(ghtm);//先将模块加入选项卡div中
	var zusecou,xusecou;//处理人的名字
	//各个模块具体数据的字符串办文单位、offitml,相关单位、Relantml,秘书处、secartml,领导签发、leaDetml
	var offitml='',Relantml='',secartml='',leaDetml='';
	var code;//1是处理中2是处理完,没有处理完是看不见处理意见的
	var zusetml='';
	var hyml = '<div align="center"><img src="../../images/xx_jt.png"  class="imgs_jt" /></div>'
	var fist = slist;
	if(fist.length == 1){
		var flist = fist[0];
		var type = flist.type;
		var apode = flist.node;;//办文单位0，相关单位1，秘书处2，领导签发3
		var tyctx;
		var fcoun = flist.flow_status;
		xusecou = flist.forward_name;
		if(type != null){
			if(type == 1){
				tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(转发)</label>';
			}else if(type == 2){
				tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(完成)</label>';
			}
		}else{
			tyctx=' ';
		}
		if(xusecou != null){
			zusecou = xusecou;
		}else{
			zusecou = flist.two_forward_name;
		}
		if(fcoun == 2){
			var zusetim = flist.processing_time;
			if(zusetim == null ){
				zusetim=' ';
			}
			var hand = flist.forward_opinion;
			code = flist.flow_status;
			if(hand == null || code == 1){
				hand=' ';
			}
			zusetml+='<div class="div-schedule" style="margin-top: 5px;"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" >'+
			    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
	        	'<label>审批时间:'+zusetim+'</label></br><label>处理意见:</label></br>'+
	        	'<label class="labe_sch">'+hand+'</label></div></div></div>';
        }else if(fcoun == 1){
        	zusetml+='<div class="div-schedule" style="margin-top: 5px;"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 " style="margin-top: 10px;">'+
			    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
	        	'<label>处理中</label></br></div></div></div>';
        }
        if(apode == 0){//办文单位0
        	offitml=zusetml;
			$('#offiting').append(offitml);
        }else if(apode == 1){//相关单位1
        	Relantml=zusetml;
        	$('#Relanits').append(Relantml);
        }else if(apode == 2){//秘书处2
        	secartml=zusetml;
        	$('#secariat').append(secartml);
        }else if(apode == 3){//领导签发3
        	leaDetml=zusetml;
        	$('#leaDessue').append(leaDetml);
        }
	}else{
		for (var k = 0; k < fist.length;k++) {
			zusetml='';
			var flist = fist[k];
			var type = flist.type;
			var tyctx;
			var fcoun = flist.flow_status;
			xusecou = flist.forward_name;
			var aspode = flist.node;;//办文单位0，相关单位1，秘书处2，领导签发3
			if(type != null){
				if(type == 1){
					tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(转发)</label>';
				}else if(type == 2){
					tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(完成)</label>';
				}
			}else{
				tyctx=' ';
			}
			if(xusecou != null){
				zusecou = xusecou;
			}else{
				zusecou = flist.two_forward_name;
			}
			if(fcoun == 2){
				var zusetim = flist.processing_time;
				if(zusetim == null ){
					zusetim=' ';
				}
				var hand = flist.forward_opinion;
				code = flist.flow_status;
				if(hand == null || code == 1 || hand == "null"){
					hand=' ';
				}
				var count= fist.length-1;
					zusetml ='<div class="div-schedule" style="margin-top: 5px;"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" >'+
				    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>审批时间:'+zusetim+'</label></br><label>处理意见:</label></br>'+
		        	'<label class="labe_sch">'+hand+'</label></div></div></div>';
				if(aspode == 0){//办文单位0
		        	offitml+=zusetml;
		        }else if(aspode == 1){//相关单位1
		        	Relantml+=zusetml;
		        }else if(aspode == 2){//秘书处2
		        	secartml+=zusetml;
		        }else if(aspode == 3){//领导签发3
		        	leaDetml+=zusetml;
		        }
			}else if(fcoun == 1){
				var count= fist.length-1;
					zusetml='<div class="div-schedule" style="margin-top: 5px;"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 " style="margin-top: 10px;">'+
				    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>处理中</label></br></div></div></div>';
				if(aspode == 0){//办文单位0
		        	offitml+=zusetml;
		        }else if(aspode == 1){//相关单位1
		        	Relantml+=zusetml;
		        }else if(aspode == 2){//秘书处2
		        	secartml+=zusetml;
		        }else if(aspode == 3){//领导签发3
		        	leaDetml+=zusetml;
		        }
	        }
		}
		if(offitml != ''){//办文单位0
        	$('#offiting').append(offitml);
        }
        if(Relantml != ''){//相关单位1
        	$('#Relanits').append(Relantml);
        }
        if(secartml != ''){//秘书处2
        	$('#secariat').append(secartml);
        }
        if(leaDetml != ''){//领导签发3
        	$('#leaDessue').append(leaDetml);
        }
	}
}
/*档案查询进度展示**/
function dached(slist){
	var html='';
	var usecou;
	var usetml='';
	var zusecou,xusecou;
	var code;//1是处理中2是处理完,没有处理完是看不见处理意见的
	var zusetml='';
	var hyml = '<div align="center"><img src="../../images/xx_jt.png"  class="imgs_jt" /></div>'
	var fist = slist;
	if(fist.length == 1){
		var flist = fist[0];
		var type = flist.type;
		var tyctx;
		if(type != null){
			if(type == 1){
				tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(转发)</label>';
			}else if(type == 2){
				tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(完成)</label>';
			}
		}else{
			tyctx=' ';
		}
		var fcoun = flist.flow_status;
		xusecou = flist.forward_name;
		if(xusecou != null){
			zusecou = xusecou;
		}else{
			zusecou = flist.two_forward_name;
		}
		if(fcoun == 2){
			var zusetim = flist.processing_time;
			if(zusetim == null ){
				zusetim=' ';
			}
			var hand = flist.forward_opinion;
			code = flist.flow_status;
			if(hand == null || code == 1){
				hand=' ';
			}
			zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" >'+
			    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
	        	'<label>回复时间:'+zusetim+'</label></br><label>回复意见:</label></br>'+
	        	'<label class="labe_sch">'+hand+'</label></div></div></div>';
        }else if(fcoun == 1){
        	zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 " style="margin-top: 10px;">'+
			    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
	        	'<label>处理中</label></br></div></div></div>';
        }
	}else{
		for (var k = 0; k < fist.length;k++) {
			var flist = fist[k];
			var type = flist.type;
			var tyctx;
			if(type != null){
				if(type == 1){
					tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(转发)</label>';
				}else if(type == 2){
					tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(完成)</label>';
				}
			}else{
				tyctx=' ';
			}
			var fcoun = flist.flow_status;
			xusecou = flist.forward_name;
			if(xusecou != null){
				zusecou = xusecou;
			}else{
				zusecou = flist.two_forward_name;
			}
			if(fcoun == 2){
				var zusetim = flist.processing_time;
				if(zusetim == null ){
					zusetim=' ';
				}
				var hand = flist.forward_opinion;
				code = flist.flow_status;
				if(hand == null || code == 1){
					hand=' ';
				}
				var count= fist.length-1;
				if(k == count){
					zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" >'+
				    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>回复时间:'+zusetim+'</label></br><label>回复意见:</label></br>'+
		        	'<label class="labe_sch">'+hand+'</label></div></div></div>';
				}else{
					zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" >'+
				    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>回复时间:'+zusetim+'</label></br><label>回复意见:</label></br>'+
		        	'<label class="labe_sch">'+hand+'</label></div></div></div>'+hyml;
				}
			}else if(fcoun == 1){
	        	zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 " style="margin-top: 10px;">'+
				    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>处理中</label></br></div></div></div>'+hyml;
	        }
		}
	}
	html=zusetml;
	$('#schedule').append(html);
}

/*后勤物资申请处理*/
function roval(slist){
	var html='';
	var usecou;
	var usetml='';
	var zusecou,xusecou;
	var code;//1是处理中2是处理完,没有处理完是看不见处理意见的
	var zusetml='';
	var hyml = '<div align="center"><img src="../../../images/xx_jt.png"  class="imgs_jt" /></div>'
	var fist = slist;
	if(fist.length == 1){
		var flist = fist[0];
		var type = flist.type;
		var tyctx;
		if(type != null){
			if(type == 1){
				tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(转发)</label>';
			}else if(type == 2){
				tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(完成)</label>';
			}
		}else{
			tyctx=' ';
		}
		var fcoun = flist.flow_status;
		xusecou = flist.forward_name;
		if(xusecou != null){
			zusecou = xusecou;
		}else{
			zusecou = flist.two_forward_name;
		}
		if(fcoun == 2){
			var zusetim = flist.processing_time;
			if(zusetim == null ){
				zusetim=' ';
			}
			var hand = flist.forward_opinion;
			code = flist.flow_status;
			if(hand == null || code == 1){
				hand=' ';
			}
			zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" >'+
			    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
	        	'<label>审核时间:'+zusetim+'</label></br><label>审核意见:</label></br>'+
	        	'<label class="labe_sch">'+hand+'</label></div></div></div>';
        }else if(fcoun == 1){
        	zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 " style="margin-top: 10px;">'+
			    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
	        	'<label>处理中</label></br></div></div></div>';
        }
	}else{
		for (var k = 0; k < fist.length;k++) {
			var flist = fist[k];
			var type = flist.type;
			var tyctx;
			if(type != null){
				if(type == 1){
					tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(转发)</label>';
				}else if(type == 2){
					tyctx='</br><label class="font28 labe_sqh" style="color: #1E90FF;">(完成)</label>';
				}
			}else{
				tyctx=' ';
			}
			var fcoun = flist.flow_status;
			xusecou = flist.forward_name;
			if(xusecou != null){
				zusecou = xusecou;
			}else{
				zusecou = flist.two_forward_name;
			}
			if(fcoun == 2){
				var zusetim = flist.processing_time;
				if(zusetim == null ){
					zusetim=' ';
				}
				var hand = flist.forward_opinion;
				code = flist.flow_status;
				if(hand == null || code == 1){
					hand=' ';
				}
				var count= fist.length-1;
				if(k == count){
					zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" >'+
				    '<label class="labe_sqh">'+zusecou+tyctx+'</label>'+tyctx+'</div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>审核时间:'+zusetim+'</label></br><label>审核意见:</label></br>'+
		        	'<label class="labe_sch">'+hand+'</label></div></div></div>';
				}else{
					zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 div-schedule2" >'+
				    '<label class="labe_sqh">'+zusecou+'</label>'+tyctx+'</div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>审核时间:'+zusetim+'</label></br><label>审核意见:</label></br>'+
		        	'<label class="labe_sch">'+hand+'</label></div></div></div>'+hyml;
				}
			}else if(fcoun == 1){
	        	zusetml+='<div class="div-schedule"><div class="mui-row"><div class="mui-col-sm-3 mui-col-xs-3 " style="margin-top: 10px;">'+
				    '<label class="labe_sqh">'+zusecou+'</label></div><div class="mui-col-sm-9 mui-col-xs-9 div-schedule3" >'+
		        	'<label>处理中</label></br></div></div></div>'+hyml;
	        }
		}
	}
	html=zusetml;
	$('#schedule').append(html);
}
/**返回上一页并刷新它*/
function backa(){
    var old_back2 = mui.back();  
    mui.back = function() {  
        var wobj = plus.webview.currentWebview().opener();
        wobj.reload(true);  
        old_back2();  
    } 
	 mui.back();
}
function dialog_mc(){
	var btnarr=["确定"];  
    mui.confirm("数据提交成功","操作提示",btnarr,function(e){  
        if(e.index == 0){  
//        	backa();
			mui.back();
        }
    }); 
}
function dialog_x(){
	var btnarr=["确定"];  
    mui.confirm("数据提交失败!","操作提示",btnarr,function(e){  
        if(e.index == 0){  
        }
    }); 
}
//function dialog_c(){
//	var btnarr=["确定"];  
//  mui.confirm("请完善表单信息后再提交!","操作提示",btnarr,function(e){  
//      if(e.index == 0){
//      	
//      }
//  }); 
//}
function dialkog_mc(){
	var btnarr=["确定"];  
    mui.confirm("公文撤回成功","操作提示",btnarr,function(e){  
        if(e.index == 0){  
          	backa();
        }
    }); 
}
//检查网络要用 mui.plusReady(function(){});方法
function network(){
	if (plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE) {
		mui.toast("网络异常，请检查网络设置！");
	 
	} else {
		mui.alert("服务器出错！");
	}
}
/**
 * 获取本地推送标识信息
 */
	function queinfo(){
	var sysNmae = plus.os.name;//判断手机系统
	var infoq;
		infoq = plus.push.getClientInfo().clientid;
		return infoq;
	}
	function squeinfog(){
		var timer=setInterval(function(){
	         if(info!=0 &&info!=null && info!="null" && info!=undefined){
	         	 window.clearInterval(timer);
	            return;
	         }
	         info=plus.push.getClientInfo().clientid;
	         console.log("获取本地推送标识信息:"+info);
	      },50);
	}
   
/**获取当前日期*/
function twime(){
	var tim = 0;
	var now= new Date();
	var year=now.getFullYear();
	var month=now.getMonth();
	var date=now.getDate();
	var hou=now.getHours();
	var datse=now.getMonth();
//			  var tima = year+"年"+(month+1)+"月"+date+"日"
	tim= year+"-"+(month+1)+"-"+date+"-"+hou;
	return tim;
}
function tabime(date1,date2){//比较两个的时间大小
	var tisCode = false;
    var oDate1 = new Date(date1).getTime();
    var oDate2 = new Date(date2).getTime();
    if(oDate1 > oDate2){
        tisCode = 0;
    } else if(oDate1 == oDate2){
    	tisCode = 1;
    }else if(oDate1 < oDate2){
        tisCode = 2;
    }
    return tisCode;
}
/*获取外部参会人员*/
function getPersion(className){
	 var rdsObj   = document.getElementsByClassName(className);
//	    var rdsObj=document.getElementsByName(className);
	    var checkVal = new Array();//名字
	    var checkId = new Array();//电话
	       
	    var k  = 0;
	    for(i = 0; i < rdsObj.length; i++){
			checkVal[k] = rdsObj[i].childNodes[0].value;
			checkId[k]  = rdsObj[i].childNodes[1].value;
            k++;
	    }
	    var res = new Array();
	    res[0]= checkVal;
	    res[1]= checkId;
	    return res;
}
//获取对象数组中的手机号码并返回一个新的数组
function saLqur(qlist){
	var checkPh = new Array();//部门下员工电话
	var k  = 0;
	    for(i = 0; i < qlist.length; i++){
	    	var kPh = qlist[i].phone;
	    	checkPh[k]  = kPh;
	    	k++;
	    }
	    return checkPh;
}
function delNete(uid,sNum){//删除某个模块的角标
	myAjax(httpAction[115],{userId:uid,type:sNum},function (res) {
	var code = res.status;
	if (code == 1) {
		
	} else{
		mui.toast("服务器错误");
		}
	});
}
/*
清除角标并且跳页
codq是删除角标的ID，
num是需要跳转页面的编号*/
function delSpa(codq,num){
	if(num == 2 || num == 5){
		mui.toast('功能正在开发中');
	}else{
		jump(num)       
// 		$(codq).find($('.metnum')).remove();
	}
	
   	// 	$("#met_num3").find($('.metnum')).remove();
}
function AutoSize(Img, maxWidth, maxHeight) {
     var image = new Image();
    //原图片原始地址（用于获取原图片的真实宽高，当<img>标签指定了宽、高时不受影响）
    image.src = Img.src;  
    // 当图片比图片框小时不做任何改变 
    if (image.width < maxWidth&& image.height < maxHeight) {
        Img.width = image.width;
        Img.height = image.height;
    }
    else //原图片宽高比例 大于 图片框宽高比例,则以框的宽为标准缩放，反之以框的高为标准缩放
    {
        if (maxWidth/ maxHeight  <= image.width / image.height) //原图片宽高比例 大于 图片框宽高比例
        {
            Img.width = maxWidth;   //以框的宽度为标准
            Img.height = maxWidth* (image.height / image.width);
        } 
        else {   //原图片宽高比例 小于 图片框宽高比例
            Img.width = maxHeight  * (image.width / image.height);
            Img.height = maxHeight  ;   //以框的高度为标准
        }
    }
}