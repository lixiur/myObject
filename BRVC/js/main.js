mui.plusReady(function() {
	//*************防止屏幕底部内容被输入法的软键盘顶起start**********************
	//获取原始窗口的高度
	var originalHeight = document.documentElement.clientHeight || document.body.clientHeight;
	window.onresize = function() {
		//软键盘弹起与隐藏  都会引起窗口的高度发生变化
		var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
		if(resizeHeight * 1 < originalHeight * 1) { //resizeHeight<originalHeight证明窗口被挤压了
			plus.webview.currentWebview().setStyle({
				height: originalHeight
			});
		}
	}
	//*************防止屏幕底部内容被输入法的软键盘顶起end**********************
	//获取主webview
	var parentWebView = plus.webview.currentWebview();
	//声明4个子webview的数组
	var pageList = [{
		url: "tabmain.html",
		id: "home"
	}, {
		url: "../mail/maillist.html",
		id: "market"
	}, 
	{
		url: "setting.html",
		id: "setting"
	}, 
	{
		url: "personal.html",
		id: "mine"
	}];
	//依次创建4个子webview
	for(var i = 0; i < pageList.length; i++) {
		var url = pageList[i].url;
		var id = pageList[i].id;
		//如果该webview已经被创建，那么跳过
		var sd = plus.webview.getWebviewById(id)
		if(sd) {
			continue;
		}
		//开始创建webview
		var newWebView = plus.webview.create(url, id, {
			top:(36+immersed)+ 'px',
			bottom: '50px',
			popGesture: 'none'
		});
		//显示第一个webview，隐藏其他的webview
		i === 0 ? newWebView.show() : newWebView.hide();
		//将子webview追加到父webview上面
		parentWebView.append(newWebView);
	}
	//关闭等待框
	plus.nativeUI.closeWaiting();
    //显示当前页面
    mui.currentWebview.show();
	// 获取应用首页窗口对象
	var h=plus.webview.getLaunchWebview();
	h&&h.close();
	//声明默认显示的子webview的id
	var currentViewId = 'home';
	mui('.mui-bar').on('tap', '.mui-tab-item', function(e) {
		//mui.alert(this.dataset.id);
		//如果当前显示的webview和用户点击即将显示的webview为同一个，那么什么也不做，直接跳过
		var showViewId = this.dataset.id;
		console.log("showViewId= " + showViewId);
		if(currentViewId === showViewId)
			return;
		//隐藏当前正显示的webview
		plus.webview.getWebviewById(currentViewId).hide();
		if(showViewId == "home"){
			$('#biaoti').text("天府晚霞");
			$('#t_one').attr('src','../../img/t1_1.png');
			$('#t_two').attr('src','../../img/t2_2.png');
			$('#t_three').attr('src','../../img/t3_2.png');
			$('#t_four').attr('src','../../img/t4_2.png');
		}else if(showViewId == "market"){
			$('#biaoti').text("通讯录");
			$('#t_two').attr('src','../../img/t2_1.png');
			$('#t_four').attr('src','../../img/t4_2.png');
			$('#t_one').attr('src','../../img/t1_2.png');
			$('#t_three').attr('src','../../img/t3_2.png');
		}
		else if(showViewId == "setting"){
			$('#biaoti').text("消息");
			$('#t_three').attr('src','../../img/t3_1.png');
			$('#t_four').attr('src','../../img/t4_2.png');
			$('#t_two').attr('src','../../img/t2_2.png');
			$('#t_one').attr('src','../../img/t1_2.png');
		}
		else if(showViewId == "mine"){
			$('#biaoti').text("个人中心");
			$('#t_four').attr('src','../../img/t4_1.png');
			$('#t_one').attr('src','../../img/t1_2.png');
			$('#t_two').attr('src','../../img/t2_2.png');
			$('#t_three').attr('src','../../img/t3_2.png');
		}
		
		//显示用户点击的webview
		var willShowView = plus.webview.getWebviewById(showViewId);
		willShowView.show("none", 0, function() {
			//触发这个webview中定义的showPage事件
			mui.fire(willShowView, "showPage");
		});
		//更新当前显示的子webview的id
		currentViewId = showViewId;
	});
})
  