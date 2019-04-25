var immersed = 0;
(function(w) {

	document.addEventListener('plusready', function() {
//		console.log("Immersed-UserAgent: " + navigator.userAgent);
	}, false);

	var ms = (/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
	if(ms && ms.length >= 3) {
		immersed = parseFloat(ms[2]);
	}
	w.immersed = immersed;

	if(!immersed) {
		return;
	}
	var t = $('header');
	//t&&(t.style.paddingTop=immersed+'px',t.style.background='-webkit-linear-gradient(top,rgba(215,75,40,1),rgba(215,75,40,0.8))',t.style.color='#FFF');
//	修改标题栏的高度和paddingTop
	t && (t.css({
		'height':t.height()+immersed,
		'paddingTop':immersed,
		'background-color':'#1ba2c0',
		'color':'#FFF'
	}));
//	修改mui-content的paddingTop
	t = $('.mui-content');
	t && (t.css('padding-top',t.innerHeight()-t.height()+immersed));
})(window);