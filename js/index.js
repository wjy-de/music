$(function(){
	/*列表页导航效果*/
	var nav1_lis=$("#nav1 div");
	nav1_lis.on("touchend",function(){
		nav1_lis.css({"color":"#fff","border-bottom-color":"transparent"});
		$(this).css({"color":"#e7ca06","border-bottom-color":"#e7ca06"});	
	})
	
	/*列表页导航效果*/
	function format(v){
		v=Math.floor(v);
		var s=v%60;
		s=(s<10)?('0'+s):s;
		var m=Math.floor(v/60);
		return m+':'+s;
	}
	var play=$(".play");
	var current=$(".currentTime");
	var duration=$(".duration");
	var progress=$(".progress");
	var progress1=$(".progress1");
	var btn1=$(".btn1");
	var btn2=$(".btn2");
	var r1=btn1.width()/2;//进度条圆点半径
	var audio=$("#audio").get(0);
	var width1=progress.width();//进度条宽
	var width1_1=progress1.width();//进度条宽
	current.html(format(audio.currentTime));
	$(audio).on("loadstart",function(){
		
	});
	$(audio).on("canplay",function(){
		duration.html(format(audio.duration));
	});
	
	$(audio).on("progress",function(){
		
	});
	$(audio).on("play",function(){
		
	});
	$(audio).on("timeupdate",function(){
		current.html(format(audio.currentTime));
		var	left=width1*audio.currentTime/audio.duration;
		var left1=width1_1*audio.currentTime/audio.duration;
		btn1.css("left",left-r1);
		btn2.css("width",left-r1);
		$(".width").css("width",left1-r1);
	});
	$(audio).on("pause",function(){
		
	});
	$(audio).on("seek",function(){
		
	});
	$(audio).on("ended",function(){
		
	});
	/*播放暂停*/
	play.on("touchend",function(){
		if(audio.paused){
			play.html("&#xe608;");
			audio.play();
		}else{
			play.html("&#xf0013;");
			audio.pause();
		}
	});
	/*播放暂停*/
	
	/*进度条*/
	btn1.on("touchend",false);
	progress.on("touchend",function(e){
		var offsetX=e.originalEvent.changedTouches[0].clientX-
					progress.position().left;
		audio.currentTime=offsetX/width1*audio.duration;
	})
	btn1.on("touchstart",function(e){
		var offsetX=e.originalEvent.changedTouches[0].clientX-btn1.position().left;
		var start=r1-offsetX;
		$(document).on("touchmove",function(e){
			var left=e.originalEvent.changedTouches[0].clientX+start;
			var c=left/width1*audio.duration;
			if(c>=width1||c<=0){
				return;
			}
			audio.currentTime=c;
		});
		return false;
	});
	btn1.on("touchend",function(){
		$(document).off("touchmove");
	})
	/*进度条*/
	
	/*音量键*/
	var volume=$(".volume");
	var btn3=$(".btn3");//静音键
	var btn4=$(".btn4");//音量按钮
	var btn5_w=$(".btn5-w");//音量条
	var r2=btn4.width()/2;
	btn3.on("touchend",false);
	
	volume.on("touchend",function(e){
		var offsetX=e.originalEvent.changedTouches[0].clientX-volume.offset().left;
		audio.volume=offsetX/$(this).width();
		btn3.removeAttr("data-v");
	});
	/*音量拖拽*/
	btn4.on('touchstart',function(e){
		var offsetX=e.originalEvent.changedTouches[0].clientX-volume.offset().left;
		var start=r2-offsetX;
		$(document).on('touchmove',function(e){
			var left=(e.originalEvent.changedTouches[0].clientX+start)/audio.duration;
			if(left>=1||left<=0){
				return;
			}
			audio.volume=left;
		});
		return false;
	});
	$(document).on('touchend',function(e){
		$(document).off('touchmove');
	});
	/*音量拖拽*/
	
	/*静音*/
	btn3.on("touchend",function(){
		if($(this).attr("data-v")){
			audio.volume=$(this).attr("data-v");
			$(this).removeAttr("data-v");
			$(this).html("&#xe658;");
		}else{
			$(this).attr("data-v",audio.volume);
			audio.volume=0;
			$(this).html("&#xe6bc;");
		}
	});
	/*静音*/
	$(audio).on('volumechange',function(){
		btn4.css('left',volume.width()*audio.volume-r2);
		btn5_w.css("width",volume.width()*audio.volume-r2)
		});
		
	$(".tab5").on("touchend",function(e){
		$(".vol").css("display","block");
		return false;
	});
	$(".close1").on("touchend",function(e){
		$(".vol").css("display","none");
		$(".add-del").css("display","none");
		return false;
	})
	/*音量键*/
	
	/*页面切换*/
	var body1=$("#body1");
	var hb1=body1.height();
	var body2=$("#body2");
	var hb2=body2.height();
	body1.css({"display":"block","top":0});
	var y1=$(".l");
	y1.on("touchend",function(e){
//		body1.css({"display":"block","top":0});
//		body2.css({"display":"none","top":hb2});
		body1.animate({top:0},200,function(){$(this).css("display","block")})
		body2.animate({top:hb2},200,function(){$(this).css("display","none")})
		return false;
	})
	var y2=$(".fh");
	y2.on("touchend",function(e){
		body2.animate({top:0},200,function(){$(this).css("display","block")})
		body1.animate({top:hb1},200,function(){$(this).css("display","none")})
		return false;
	})
	//--------------------------------------列表页-------------------------------
	/*歌曲列表*/
	var currentIndex;//表示当前歌曲
	var musics=[
		{name:"演员-薛之谦",author:"薛之谦",state:"0",src:"music/演员-薛之谦.aac",
		 sx:'{name:"演员-薛之谦",author:"薛之谦",state:"0",src:"music/演员-薛之谦.aac"}'
		},
		{name:"太坦白-李荣浩",author:"李荣浩",state:"0",src:"music/太坦白-李荣浩.aac",
		 sx:'{name:"太坦白-李荣浩",author:"李荣浩",state:"0",src:"music/太坦白-李荣浩.aac"}'
		},
		{name:"还魂门",author:"(电视剧《老九门》主题曲)-胡彦斌",state:"0",src:"music/还魂门-(电视剧《老九门》主题曲)-胡彦斌.aac",
		 sx:'{name:"还魂门",author:"(电视剧《老九门》主题曲)-胡彦斌",state:"0",src:"music/还魂门-(电视剧《老九门》主题曲)-胡彦斌.aac}'
		},
		{name:"断桥残雪",author:"许嵩",state:"0",src:"music/断桥残雪-许嵩.aac",
		 sx:'{name:"断桥残雪",author:"许嵩",state:"0",src:"music/断桥残雪-许嵩.aac"}'
		},
		{name:"刚刚好",author:"薛之谦",state:"0",src:"music/刚刚好-薛之谦.aac",
		 sx:'{name:"刚刚好",author:"薛之谦",state:"0",src:"music/刚刚好-薛之谦.aac"}'
		},
		{name:"南山南",author:"马頔",state:"0",src:"music/南山南-马頔.aac",
		 sx:'{name:"南山南",author:"马頔",state:"0",src:"music/南山南-马頔.aac"}'
		},
		{name:"诺言",author:"鹿晗",state:"0",src:"music/诺言-鹿晗.aac",
		 sx:'{name:"诺言",author:"鹿晗",state:"0",src:"music/诺言-鹿晗.aac"}'
		}
	];
	var ul1=$("#center ul");
	var t=$(".t");//下面歌词名
	var b=$(".b");//下面作者名
	function render(){
		ul1.empty();
		$.each(musics,function(i,v){
			if(i==currentIndex){
				s="active";
			}else{
				s="";
			}
			$('<li data-rol="'+v.sx+'" class='+s+'><div class="he"></div><div class="li-l"><h2>'+v.name+'</h2><h3><span class="span1">&#xe62e;</sapn><span class="span2">'+v.author+'</span></h3></div><div class="li-r">&#xe62d;</div></li>').appendTo(ul1);
		});
	}
	render();
	ul1.on("touchend","li",function(e){
		play.html("&#xe608;");
		currentIndex=$(this).index();
		t.html(musics[currentIndex].name);
		b.html(musics[currentIndex].author);
		audio.src=musics[currentIndex].src;
		audio.play();
		render();
		return false;
	})
	
	/*切换歌曲*/
	$(".pre").on("touchend",function(){
		play.html("&#xe608;");
		if(currentIndex==undefined){
			currentIndex=musics.length-1;
		}else{
			currentIndex--;
			if(currentIndex<0){
				currentIndex=musics.length-1;
			}
		}
		t.html(musics[currentIndex].name);
		b.html(musics[currentIndex].author);
		audio.src=musics[currentIndex].src;
		audio.play();
		render();
	});
	$(".next").on("touchend",function(){
		play.html("&#xe608;");
		if(currentIndex==undefined){
			currentIndex=0;
		}else{
			currentIndex++;
			if(currentIndex>=musics.length){
				currentIndex=0;
			}
		}
		t.html(musics[currentIndex].name);
		b.html(musics[currentIndex].author);
		audio.src=musics[currentIndex].src;
		audio.play();
		render();
	});	
	/*切换歌曲*/
	
	/*删除*/
	var add_del=$(".add-del");
	var delete1=$("li .li-r");
	function block1(obj){
		var height=obj.height();
		obj.animate({"bottom":0},200,"linear",function(){
			obj.css("display","block");
		});
	}
	
	/*删除函数*/
	if(!localStorage.musics){
		localStorage.musics=JSON.stringify(musics);
	}
	musics=JSON.parse(localStorage.musics);
	var now;//表示列表中的歌曲的下标
	function deleteS(){
		if(now==currentIndex){
			musics.splice(now,1);
			localStorage.musics=JSON.stringify(musics);
		}
		if(now<currentIndex){
			currentIndex--;
			musics.splice(now,1);
			localStorage.musics=JSON.stringify(musics);
		}
		if(now>currentIndex){
			musics.splice(now,1);
			localStorage.musics=JSON.stringify(musics);
		}
		render()
	}
	ul1.on("touchend",".li-r",function(e){
		block1(add_del);
		var lis=$(this).closest("li");
		now=lis.index();
		return false;
	})
	var delete2=$(".delete");//删除键
	delete2.on("touchend",function(){
		render();
		deleteS();
		return false;
	});
	
	/*添加歌曲*/
//	var add1=$(".ico");
//	add1.on("touchend",function(e){
//		console.log(ul1.children("li").attr("data-rol"));
////		var music=JSON.parse(ul1.children("li").attr("data-rol"));
////		musics.push(music);
////		localStorage.musics=JSON.stringify(musics);
////		render();
//		return false;
//	})
	/*添加歌曲*/
	
	/*歌曲列表*/
	
})
