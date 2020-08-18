$(function(){
	
	$("header .head_1>.con>ul>li").hover(function(){
		$(this).children("ul").stop().slideDown(100);
	},function(){
		$(this).children("ul").stop().slideUp(100);
	})
	
	$("header .head_1>.con>ul>li>ul>li").hover(function(){
		$(this).children("ul").stop().slideDown(100);
	},function(){
		$(this).children("ul").stop().slideUp(100);
	})
	
	var ite = [0,1212,2424,3636,4848,6060,-4848,-3636,-2424,-1212];
	function a (){
		var ttt = ite[ite.length-1];
		ite.splice(9,1);
		ite.splice(0,0,ttt);
	}
	function d(){
		var ttt = ite[0];
		ite.splice(0,1);
		ite.splice(9,0,ttt);
	}
	function f(){
		for(var i = 0; i < ite.length; i++){
			var j = i+1
			if(ite[i] == "0"){
				$("header .head_2 .banner ul li:nth-child("+j+")").css({"z-index":"9"}).siblings().css({"z-index":"0"});
				$("header .head_2 .banner ul li:nth-child("+ (j+1) +")").css({"z-index":"9"});
				$("header .head_2 .banner ul li:nth-child("+i+")").css({"z-index":"9"});
			}
			$("header .head_2 .banner ul li:nth-child("+j+")").css({"left":ite[i]});
		}
	}
	var tim = setInterval(function(){
		a();
		f();
	},5000);
	
	$(".head_2").hover(function(){
		clearInterval(tim);
	},function(){
		tim = setInterval(function(){
			a();
			f();
		},5000);
	})
	
	$("header .head_2 .banner .left_ div,header .head_2 .banner .left_ p").click(function(){
		d();
		f();
	})
	$("header .head_2 .banner .right_ div,header .head_2 .banner .right_ p").click(function(){
		a();
		f();
	})
	
	$("header .head_2 .banner .left_ p").hover(function(){
		$("header .head_2 .banner .left_ div").css({right:0,"border-radius":"50px 0 0 50px"});
		$(this).parent().css({"background-color":"rgba(0,0,0,0.2)"});
	},function(){
		$("header .head_2 .banner .left_ div").css({right:-50,"border-radius":"0px 50px 50px 0"});
		$(this).parent().css({"background-color":""});
	})
	$("header .head_2 .banner .right_ p").hover(function(){
		$("header .head_2 .banner .right_ div").css({left:0,"border-radius":"0 50px 50px 0"});
		$(this).parent().css({"background-color":"rgba(0,0,0,0.2)"});
	},function(){
		$("header .head_2 .banner .right_ div").css({left:-50,"border-radius":"50px 0 0 50px"});
		$(this).parent().css({"background-color":""});
	})
	
	$(".b").click(function(){
		var va = $(".t").val();
		if(va.length == 0){
			alert("请输入你要检索的内容！");
		}else{
			window.open("https://www.baidu.com/s?wd="+va);
		}
	})
	
	
	// 悬浮	
	var add_x = 1,
		add_y = 1;
		
	var su=document.getElementById("suspension");
	var timl = null;
	timl = setInterval(function(){
		var top_ =  su.offsetTop + add_y,
			left_ = su.offsetLeft + add_x;
			
		var su_w = $("#suspension").width(),
			su_h = $("#suspension").height();
			
		var win_x = document.documentElement.clientWidth - su_w,
			win_y = document.documentElement.clientHeight - su_h;
		
		if(left_ >= win_x){
			add_x *= -1;
			left_ = win_x;
		}else if(left_ <= 0){
			add_x *= -1;
			left_ = 0
		}
		
		if(top_ >= win_y){
			add_y *= -1;
			top_ = win_y;
		}else if(top_ <= 0){
			add_y *= -1;
			top_ = 0
		}
		$("#suspension").css({top: top_ + "px", left: left_ + "px"});
	},10)
	
	$("#suspension").hover(function(){
		clearInterval(timl);
	},function(){
		timl = setInterval(function(){
			var top_ =  su.offsetTop + add_y,
				left_ = su.offsetLeft + add_x;
				
			var su_w = $("#suspension").width(),
				su_h = $("#suspension").height();
				
			var win_x = document.documentElement.clientWidth - su_w,
				win_y = document.documentElement.clientHeight - su_h;
			
			if(left_ >= win_x){
				add_x *= -1;
				left_ = win_x;
			}else if(left_ <= 0){
				add_x *= -1;
				left_ = 0
			}
			
			if(top_ >= win_y){
				add_y *= -1;
				top_ = win_y;
			}else if(top_ <= 0){
				add_y *= -1;
				top_ = 0
			}
			$("#suspension").css({top: top_ + "px", left: left_ + "px"});
		},10);
	})
	
	$("#suspension span").click(function(){
		$(this).parent().fadeOut();
	})
	
	
	
	
	
	
	
	
})
