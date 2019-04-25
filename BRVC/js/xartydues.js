		(function($, doc) {
				$.init();
				$.ready(function() {
					var showUserPickerButton = doc.getElementById('showUserPicker');
					var userResult = doc.getElementById('wag-yaer');
					var showCityPickerButton2 = doc.getElementById('showCityPicker');
					var cityResult2 = doc.getElementById('wag-month');
					var showCityPickerButton3 = doc.getElementById('showCityPicker3');
					var cityResult3 = doc.getElementById('wag-type');
//					var tim = 0;
//					var now= new Date();
//					var years=now.getFullYear();
//					var months=String(now.getMonth()+1).padStart(2,0);
//					tim = years+"-"+months;
					/**
					 * 获取对象属性的值
					 * 主要用于过滤三级联动中，可能出现的最低级的数据不存在的情况，实际开发中需要注意这一点；
					 * @param {Object} obj 对象
					 * @param {String} param 属性名
					 */
					var _getParam = function(obj, param) {
						return obj[param] || '';
					};
					var userPicker = new $.PopPicker();
					userPicker.setData([{
						value: '0',
					text: '2018'
					}, {
						value: '1',
					text: '2019'
					}, {
						value: '2',
					text: '2020'
					}, {
						value: '3',
					text: '2021'
					}, {
						value: '4',
					text: '2022'
					}, {
						value: '5',
					text: '2023'
					}, {
						value: '6',
					text: '2024'
					}, {
						value: '7',
					text: '2025'
					}, {
						value: '8',
					text: '2026'
					}, {
						value: '9', 
					text: '2027'
					},{
						value: '10', 
					text: '2028'
					},{
						value: '11', 
					text: '2029'
					},{
						value: '12', 
					text: '2030'
					}]);
//					userResult.innerText =years;
//					if(years!=null&&years!=undefined){
//						year=years;
//						loadDate(year,month,typeSum);
//					}
//					var tiles = doc.getElementsByClassName('mui-table-view');
					showUserPickerButton.addEventListener('tap', function(event) {
						userPicker.show(function(items) {
							userResult.innerText = items[0].text;
							//返回 false 可以阻止选择框的关闭
							//return false;
							year = items[0].text;
							month = cityResult2.innerText;
							if(month == "全年"){
								month = '';
							}else{
								month = parseInt(month);
							}
							delet();
							loadDate(year,month,typeSum);
						});
					}, false);
					//-----------------------------------------
////					//级联示例
//					var cityPicker = new $.PopPicker({
//						layer: 2
//					});
//					cityPicker.setData(cityData);
					var userPicker1 = new $.PopPicker();
					userPicker1.setData([{
						value: '0',
						text: '全年'
					}, {
						value: '1',
						text: '01月'
					}, {
						value: '2',
						text: '02月'
					}, {
						value: '3',
						text: '03月'
					}, {
						value: '4',
						text: '04月'
					}, {
						value: '5',
						text: '05月'
					}, {
						value: '6',
						text: '06月'
					}, {
						value: '7',
						text: '07月'
					}, {
						value: '8',
						text: '08月'
					}, {
						value: '9', 
						text: '09月'
					},{
						value: '10', 
						text: '10月'
					},{
						value: '11', 
						text: '11月'
					},{
						value: '12', 
						text: '12月'
					}]);
					showCityPickerButton2.addEventListener('tap', function(event) {
						userPicker1.show(function(items) {
//							userResult.innerText = JSON.stringify(items[0]);
							//返回 false 可以阻止选择框的关闭
							//return false;
							year = userResult.innerText;
							cityResult2.innerText = items[0].text;
							month = items[0].value;
							if(month == "0"){
								month = '';
							}
							delet();
							loadDate(year,month,typeSum);
						});
					}, false);
					//-----------------------------------------
					//					//级联示例
				var _getParam = function(obj, param) {
						return obj[param] || '';
				};
//					showCityPickerButton3.addEventListener('tap', function(event) {
//						var userPicker3 = new $.PopPicker();
//						if(list.length > 0) {
//							year = userResult.innerText;
//							month = cityResult2.innerText;
//							if(month == "全年"){
//								month = '';
//							}else{
//								month = parseInt(month);
//							}
//							userPicker3.setData(list);
//							userPicker3.show(function(items) {
//								cityResult3.innerText = items[0].text;
//								typeSum = items[0].text;
//	//							userResult.innerText = JSON.stringify(items[0]);
//								//返回 false 可以阻止选择框的关闭
//								//return false;
//								delet();
//								loadDate(year,month,typeSum);
//							});
//						}
//					}, false);
				});
			})(mui, document);	//普通示例
