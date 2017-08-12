// JavaScript Document
$(function(){
		//初始化效果banner
		$("#banner img:gt(0)").hide();
		var num=$("#banner img").size();
		var i;
		for(i=1;i<=num;i++){
			$("#banner p").append("<span></span>");	
		}	
		$("#banner p span").eq(0).addClass("current");
		//经过页码进行切换
		$("#banner p span").mouseover(function(){
			$(this).addClass("current").siblings().removeClass("current");
			var index=$(this).index();
			$("#banner img").eq(index).stop().fadeIn().siblings("img").hide();	
		});
		//自动切换
		auto=setInterval(function(){
			var next;
			var now=$(".current").index();
			if((now+1)<num){
				next=now+1;
			}else{
				next=0;
			}
			$("#banner p span").eq(next).trigger("mouseover");
		},3000);
		//鼠标经过图片停止切换
		$("#banner img").mouseover(function(){
			clearInterval(auto);
		}).mouseout(function(){
			auto=setInterval(function(){
			var next;
			var now=$(".current").index();
			if((now+1)<num){
				next=now+1;
			}else{
				next=0;
			}
			$("#banner p span").eq(next).trigger("mouseover");
		},3000);	
		});
		
		
		
		$("h2 p.call:first").css("background","url(images/gap.png) no-repeat right");
		$("h2 p.call:last").css("margin-left","10px");
		
		
		
		//初始化效果smallBanner
		$("#events img:gt(0)").hide();
		var nums=$("#events img").size();
		var j;
		for(j=1;j<=nums;j++){
			$("#events p").append("<span>"+j+"</span>");	
		}	
		$("#events p span").eq(0).addClass("curr");
		//经过页码进行切换
		$("#events p span").mouseover(function(){
			$(this).addClass("curr").siblings().removeClass("curr");
			var index=$(this).index();
			$("#events img").eq(index).fadeIn().siblings("img").hide();	
		});
		//自动切换
		anim=setInterval(function(){
			var nexts;
			var nows=$(".curr").index();
			if((nows+1)<nums){
				nexts=nows+1;
			}else{
				nexts=0;
			}
			$("#events p span").eq(nexts).trigger("mouseover");
		},2500);
		//鼠标经过图片停止切换
		$("#events img").mouseover(function(){
			clearInterval(anim);
		}).mouseout(function(){
			anim=setInterval(function(){
			var nexts;
			var nows=$(".curr").index();
			if((nows+1)<nums){
				nexts=nows+1;
			}else{
				nexts=0;
			}
			$("#events p span").eq(nexts).trigger("mouseover");
		},2500);	
		});
		
		
		//红背景透明白字
		$("p.caseShow").hide();
		$(".interior").mouseover(function(){
			$(this).find("dt img").css("opacity",0.7);
			$(this).find("dd.weal").addClass("wealOver");
			$(this).find("p.moreAdd").addClass("moreOver");	
			$(this).find("p.moreAdd span").addClass("yellow");
			$(this).find("p.caseShow").show();
		}).mouseout(function(){
			$(this).find("dt img").css("opacity",1);
			$(this).find("dd.weal").removeClass("wealOver");
			$(this).find("p.moreAdd").removeClass("moreOver");
			$(this).find("p.moreAdd span").removeClass("yellow");
			$(this).find("p.caseShow").hide();	
		});
		
		
		//客照鉴赏模块红边框
		$("dl.show:first,dl.show:eq(7)").css("margin-left","14px");
		$("dl.show").css("padding-top","10px");
		$(".show").mouseover(function(){
			$(this).find("img").css("opacity",0.7);	
			$(this).find("img").css("border","10px #AB0008 solid");
			$(this).find("p.caseShow").show();
			$(this).css("background-color","#F1F1F1");
		}).mouseout(function(){
			$(this).find("img").css("opacity",1);
			$(this).find("img").css("border","10px #FBFBFD solid");
			$(this).find("p.caseShow").hide();
			$(this).css("background-color","#fff");	
		});
		
		
		//热门套系
		$(".guest").next(".inter").find("h3 p,h3 span").css("width","185px");
		$(".guest").next(".inter").css("padding-bottom","2px");
		$(".price").mouseover(function(){
			$(this).find("p.favorable").addClass("favOver");
			$(this).find("dd a,dd span").addClass("red");	
		}).mouseout(function(){
			$(this).find("p.favorable").removeClass("favOver");
			$(this).find("dd a,dd span").removeClass("red");	
		});
		
		
		//作品欣赏
		$(".showList li:first").find("a").addClass("select");
		$(".showList li").mouseover(function(){
			$(this).find("a").addClass("select");
		}).mouseout(function(){
			$(".showList li:not(:first)").find("a").removeClass("select");	
		});
		$(".showList li:last").css("margin-bottom","10px");
		$(".wraMid:last").css({"border-bottom":"none","box-shadow":"none"});
		//图片自动切换
		//点击右边箭头
		var page=1;
		var pageMax=5;
		$(".imgRight").click(function(){
			if(!$("#lists").is(":animated")){
				if(page==pageMax){
					$("#lists").stop().animate({left:"0"},500);
					page=1;
				}else{
					$("#lists").stop().animate({left:"-=173px"},500);
					page++;
				}
			}
		});
		$(".imgLeft").click(function(){
			if(!$("#lists").is(":animated")){
				if(page==1){
					var move=-173*(pageMax-1)+"px";
					$("#lists").stop().animate({left:move},500);
					page=pageMax;
					
				}else{
					$("#lists").stop().animate({left:"+=173px"},500);
					page--;
				}
			}
		});
		film=setInterval(function(){
			$(".imgRight").click();
		},2000);
		$("#lists img").hover(function(){
			clearInterval(film);
		},function(){
			film=setInterval(function(){
				$(".imgRight").click();
			},2000);	
		});
		//韩国婚纱摄影
		$(".veil:gt(2)").css("margin-top","20px");
		$(".veil").mouseover(function(){
			$(this).find("img").css("opacity",0.7);
			$(this).find("a").css("color","#B8000A");	
		}).mouseout(function(){
			$(this).find("img").css("opacity",1);
			$(this).find("a").css("color","#323433");	
		});
		$(".veil:eq(2),.veil:eq(5),.veil:eq(8),.veil:eq(11)").css("margin-right",0);
		//作品详情
		$("img.initia,img.initi").hover(function(){
			$(this).css("border","8px #D20009 solid");
		},function(){
			$(this).css("border","8px #eee solid");
		});
		$("h5.great").next("div").css("margin-bottom","10px")
		
		//新闻动态
		$("img.new").hover(function(){
			$(this).css("border","5px #D20009 solid");
		},function(){
			$(this).css("border","5px #eee solid");
		});
		$(".flexible").hover(function(){
			$(this).find("dd:lt(3) a").addClass("redd");
			$(this).find("dd.minute a").css("color","#ff0");
		},function(){
			$(this).find("dd:lt(3) a").removeClass("redd");
			$(this).find("dd.minute a").css("color","#fff");
		});
		
		//新闻动态详情
		$(".sun p:lt(4):not(:first)").css("font-family","宋体");
		$(".sun p:eq(2),.sun p:eq(3)").css("line-height","30px");
		$("a.pre,a.next").hover(function(){
			$(this).addClass("pass");
		},function(){
			$(this).removeClass("pass");
		});
		
		
		//服务报价
		$("a.queenHid,a.spotHid").hide();
		$(".service").hover(function(){
			$(this).find("dt img").css("opacity",0.2);
			$(this).find("a.queenHid,a.spotHid").fadeIn(200);
			$(this).find("p.queenL,dd.spot").hide();
			$(this).find("p.queenR").stop().animate({"left":"-265px"},200);	
		},function(){
			$(this).find("dt img").css("opacity",1);
			$(this).find("a.queenHid,a.spotHid").hide();
			$(this).find("p.queenL,dd.spot").fadeIn(300);
			$(this).find("p.queenR").stop().animate({"left":"0"},300);
		});
		
		
		
		
		
		
		
		
		
	});