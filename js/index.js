$(function(){
	
	/*变量*/
	var body1=$("#body1");	//列表页
	var wb1=body1.width(); //列表页宽度
	var body2=$("#body2");  //播放页
	var wb2=body2.width();  //播放页宽度
	var y1=$(".l");  //播放页返回键
	var play=$(".play"); //播放键
	var current=$(".currentTime");  //当前时间
	var duration=$(".duration");	//总时间
	var progress=$(".progress");	//进度条
	var progress1=$(".progress1");  //列表页进度条
	var btn1=$(".btn1");  //进度条圆点
	var btn2=$(".btn2");  //进度条颜色
	var r1=btn1.width()/2;//进度条圆点半径
	var audio=$("#audio").get(0);  //音频
	var width1=progress.width();//进度条宽
	var width1_1=progress1.width();//列表页进度条宽
	var img1 = $('#tab .img');
	var img2 = $('#body2');
	var flag1= true;
	/*变量*/
	
		
	/*时间处理函数*/
	function format(v){
		v=Math.floor(v);
		var s=v%60;
		s=(s<10)?('0'+s):s;
		var m=Math.floor(v/60);
		return m+':'+s;
	}
	/*时间处理函数*/
	
	/*歌曲列表*/
	var currentIndex = 0;//表示当前歌曲
	var songs=[
		{name:"演员-薛之谦",
		author:"薛之谦",
		state:"0",
		src:"music/演员-薛之谦.aac",
		src1:"url(imgs/1.png)",
		src2:"url(imgs/tu1.jpg)",
		content:"[00:00.31] 演员 - 薛之谦[00:08.61] 词曲：薛之谦[00:21.12]简单点说话的方式简单点[00:30.20] 递进的情绪请省略[00:33.64] 你又不是个演员[00:36.38] 别设计那些情节[00:41.93] 没意见我只想看看你怎么圆[00:51.54] 你难过的太表面 像没天赋的演员[00:57.15] 观众一眼能看见[01:02.22] 该配合你演出的我演视而不见[01:07.68] 在逼一个最爱你的人即兴表演[01:12.90] 什么时候我们开始收起了底线[01:18.02] 顺应时代的改变看那些拙劣的表演[01:23.42] 可你曾经那么爱我干嘛演出细节[01:28.63] 我该变成什么样子才能延缓厌倦[01:33.87] 原来当爱放下防备后的这些那些[01:39.37] 才是考验[01:44.60] 没意见你想怎样我都随便[01:54.53] 你演技也有限[01:57.58] 又不用说感言[02:00.15] 分开就平淡些[02:05.16] 该配合你演出的我演视而不见[02:10.53] 别逼一个最爱你的人即兴表演[02:15.81] 什么时候我们开始没有了底线[02:21.00] 顺着别人的谎言被动就不显得可怜[02:26.42] 可你曾经那么爱我干嘛演出细节[02:31.52] 我该变成什么样子才能配合出演[02:36.72] 原来当爱放下防备后的这些那些[02:41.86] 都有个期限[02:47.56] 其实台下的观众就我一个[02:53.04] 其实我也看出你有点不舍[02:58.34] 场景也习惯我们来回拉扯[03:02.93] 还计较着什么[03:08.71] 其实说分不开的也不见得[03:14.03] 其实感情最怕的就是拖着[03:19.21] 越演到重场戏越哭不出了[03:24.07] 是否还值得[03:29.07] 该配合你演出的我尽力在表演[03:34.39] 像情感节目里的嘉宾任人挑选[03:39.68] 如果还能看出我有爱你的那面[03:44.82] 请剪掉那些情节让我看上去体面[03:50.04] 可你曾经那么爱我干嘛演出细节[03:55.31] 不在意的样子是我最后的表演[04:01.05] 是因为爱你我才选择表演这种成全[04:21.00]"
		},
		{name:"太坦白-李荣浩",
		author:"李荣浩",
		state:"0",
		src:"music/太坦白-李荣浩.aac",
		src1:"url(imgs/2.png)",
		src2:"url(imgs/tu2.png)",
		content:"[00:01.62]太坦白 - 李荣浩[00:06.69]词：李荣浩[00:10.68]曲：李荣浩[00:14.68] [00:16.69]歌词编辑：薰风习习[00:26.56] [00:29.85]再过一下天空就要变成红色[00:39.66]看着太阳一点点还剩下半个[00:45.99][00:47.62]那种感觉还在不在[00:52.37]我也快颠倒了黑白[00:57.35]面向左边已看不到 你在[01:05.67] [01:08.80]喝啤酒不是因为争吵了过后[01:18.73]切蛋糕不是因为你的生日刚过[01:25.46] [01:26.64]只是记忆空了一块[01:31.57]你怎么还不来涂改[01:36.66]我以为你能把这变 更精彩[01:44.82][01:46.50]你不要说话太坦白[01:51.25]搞的我心里好悲哀[01:56.28]再不怎么样 好歹也是一场爱[02:04.28] [02:06.03]你不要说话太坦白[02:10.89]没有谁真的离不开[02:15.75]现在我就要把自己 找回来[02:24.72] [02:27.41]喝啤酒不是因为争吵了过后[02:37.19]切蛋糕不是因为你的生日刚过[02:44.11] [02:45.13]只是记忆空了一块[02:50.06]你怎么还不来涂改[02:55.03]我以为你能把这变 更精彩[03:03.40] [03:04.90]你不要说话太坦白[03:09.57]搞的我心里好悲哀[03:14.58]再不怎么样 好歹也是一场爱[03:23.16] [03:24.22]你不要说话太坦白[03:29.29]没有谁真的离不开[03:34.22]现在我就要把自己 找回来[03:42.66][03:45.85]你的好 我知道[03:50.71]我喜欢 你微笑[03:55.36]别再流泪让我看到 让我看到[04:03.66]你不要说话太坦白[04:08.41]搞的我心里好悲哀[04:13.28]再不怎么样 好歹也是一场爱[04:21.76] [04:23.01]你不要说话太坦白[04:28.02]没有谁真的离不开[04:32.87]现在我就要把自己 找回来"
		
		},
		{name:"还魂门",
		author:"(电视剧《老九门》主题曲)-胡彦斌",
		state:"0",
		src:"music/还魂门-(电视剧《老九门》主题曲)-胡彦斌.aac",
		src1:"url(imgs/3.png)",
		src2:"url(imgs/tu3.png)",
		content:"[00:00.00] 还魂门[00:03.00] (电视剧《老九门》主题曲)[00:06.00] 作词：林文炫[00:09.00] 作曲：胡彦斌[00:12.00] 演唱：胡彦斌[00:15.00] 歌词编辑：果果[00:18.00] QQ:765708831[00:21.00] 中文歌词库 www.cnLyric.com[00:29.44] 打开地狱的 大门[00:36.60] 不请自来 贪欲念[00:43.69] 无常路上 买命钱[00:50.74] 是生是畜 黄泉见[00:58.09] 还魂门前 许个愿[01:03.90] 不要相约 来世见[01:12.34] 盗不到的 叫永远[01:18.35] 解不开的 是心门[01:30.42] 最美的是 遗言[01:33.98] 最丑的是 誓言[01:37.47] 那些无法 的改变[01:41.09] 就在放下 举起间[01:44.86] 最假的是 眼泪[01:48.26] 最真的看 不见[01:51.91] 那些无法 的改变[01:55.11] 就在放下 举起间[02:14.46] 还魂门前 许个愿[02:20.08] 不要相约 来世见[02:28.38] 盗不到的 叫永远[02:34.33] 解不开的 是心门[02:43.01] 最美的是 遗言[02:46.41] 最丑的是 誓言[02:50.06] 那些无法 的改变[02:53.61] 就在放下 举起间[02:57.39] 最假的是 眼泪[03:00.78] 最真的看 不见[03:04.36] 那些无法 的改变[03:07.51] 就在放下 举起间[03:22.40] 最美的是 遗言[03:25.90] 最丑的是 誓言[03:29.39] 那些无法 的改变[03:32.84] 就在放下 举起间[03:36.63] 最假的是 眼泪[03:40.41] 最真的看 不见[03:43.66] 那些无法 的改变[03:46.91] 就在放下 举起间"
		},
		{name:"断桥残雪",
		author:"许嵩",
		state:"0",
		src:"music/断桥残雪-许嵩.aac",
		src1:"url(imgs/4.png)",
		src2:"url(imgs/tu4.png)",
		content:"[00:00.00]歌名:断桥残雪[00:00.02]歌手:Vae[00:00.03]专辑:断桥残雪[00:00.04][00:02.42]断桥残雪[00:05.45]词、曲 编曲：许嵩(Vae)[00:08.51]制作人:龙腾四夕 QQ:81410236[00:11.50]宁静，走后的思绪；孤寂，紊乱的回忆；为何转身离去？[00:14.66][00:22.34] 静萍,我很想你[00:24.78]寻不到花的折翼枯叶蝶[00:30.16]永远也看不见凋谢[00:36.84]江南夜色下的小桥屋檐[00:42.10]读不懂塞北的荒野[00:48.50][00:48.93]梅开时节因寂寞而缠绵[00:54.12]春归后又很快湮灭[01:00.86]独留我赏烟花飞满天[01:06.14]摇曳后就随风飘远[01:12.25][01:13.01]断桥是否下过雪[01:15.85]我望着湖面[01:18.81]水中寒月如雪[01:21.81]指尖轻点融解[01:24.56][01:24.82]断桥是否下过雪[01:27.77]又想起你的脸[01:30.76]若是无缘再见[01:33.72]白堤柳帘垂泪好几遍[02:02.54][02:04.00]寻不到花的折翼枯叶蝶[02:09.13]永远也看不见凋谢[02:15.77]江南夜色下的小桥屋檐[02:21.03]读不懂塞北的荒野[02:27.08][02:27.85]梅开时节因寂寞而缠绵[02:33.09]春归后又很快湮灭[02:39.78]独留我赏烟花飞满天[02:45.07]摇曳后就随风飘远[02:51.18]"
		},
		{name:"南山南",
		author:"马頔",
		state:"0",
		src:"music/南山南-马頔.aac",
		src1:"url(imgs/5.png)",
		src2:"url(imgs/tu5.png)",
		content:"[00:00.00] 张磊 - 南山南[00:07.62] 词曲：马頔[00:15.58] 你在南方的艳阳里大雪纷飞[00:23.38] 我在北方的寒夜里四季如春[00:30.01] 如果天黑之前来得及[00:33.82] 我要忘了你的眼睛[00:37.39] 穷极一生 做不完一场梦[00:44.95] 他不再和谁谈论相逢的孤岛[00:52.04] 因为心里早已荒无人烟[00:59.22] 他的心里再装不下一个家[01:07.09] 做一个只对自己说谎的哑巴[01:14.12] 他说你任何为人称道的美丽[01:17.93] 不及他第一次遇见你[01:22.51] 时光苟延残喘 无可奈何[01:29.05] 如果所有土地连在一起[01:32.71] 走上一生 只为拥抱你[01:37.21] 喝醉了他的梦 晚安[01:58.79] 你在南方的艳阳里大雪纷飞[02:06.97] 我在北方的寒夜里四季如春[02:13.02] 如果天黑之前来得及[02:17.02] 我要忘了你的眼睛[02:20.88] 穷极一生 做不完一场梦[02:28.09] 大梦初醒 荒唐了一生[02:36.06] 南山南 北秋悲[02:43.38] 南山有谷堆[02:50.85] 南风喃 北海北[02:58.31] 北海有墓碑[03:05.06] 南山南 北秋悲[03:12.61] 南山有谷堆[03:20.36] 南风喃 北秋悲[03:27.63] 北海有墓碑[03:35.09] 北海有墓碑"
		}
	];
	
	var ul1=$("#center ul");
	var t=$(".t");//下面歌词名
	var b=$(".b");//下面作者名
	
	
	if(!localStorage.songs){
		localStorage.songs=JSON.stringify(songs);
	}
	songs=JSON.parse(localStorage.songs);
	
	function render(obj1,obj2) { //obj1:歌曲  obj2:添加的容器
		obj2.empty();
		$.each(obj1,function(i,v){
			if(i==currentIndex){
				audio.src =obj1[i].src;
				img1.css('background-image',obj1[i].src1);
				img2.css('background-image',obj1[i].src2);
				audio.play();
				s="active";
			}else{
				s="";
			}
			$('<li class='+s+'><div class="he"></div><div class="li-l"><h2>'+v.name+'</h2><h3><span class="span1">&#xe62e;</sapn><span class="span2">'+v.author+'</span></h3></div><div class="li-r">&#xe62d;</div></li>').appendTo(obj2);
		});
		setTimeout(function(){
			play.html("&#xe608;");
		},2000)
		play.html("&#xf0013;");
	}
	
	/*上一首*/
	function prev(){
		currentIndex-=1;
		if(currentIndex<0){
			currentIndex=songs.length-1;
		}
		render(songs,ul1);	
        return false;
	}
	/*上一首*/
	
	/*下一首*/
	function next(){
		currentIndex+=1;
		if(currentIndex>songs.length-1){
			currentIndex=0;
		}
		render(songs,ul1);
        return false;
       
	}
	
	/*下一首*/
	$(".pre").on('touchend',prev);
	$(".next").on('touchend',next);
	ul1.on("touchend","li",function(e){
		var index=$(this).index();
		if(index==currentIndex){
			if(audio.paused){
				audio.play();	
			}
			else{
				audio.pause()
			}
			return;
		}
		currentIndex = index;
		
		render(songs,ul1);
		return false;
	})
	render(songs,ul1);
	
	/*添加歌词*/
	var gc = $('.gc-box');
	function  lyrics (){
		var geci = songs[currentIndex].content;
		var temp=geci.split("[");
		var html1="";
		for(var i=0;i<temp.length;i++)
		{
			var arrs=temp[i].split("]");
			var text=(arrs[1]);
			var time=arrs[0].split(",");
			var temp2=time[0].split(".");
			var ms=temp2[1];
			var temp3=temp2[0].split(":");			
			var s=temp3[1];
			var m=temp3[0];
			var s_sum=parseInt(m*60)+parseInt(s);
			if(text){
				html1+="<p id='lyric"+s_sum+"'>"+text+"</p>";
			}	
		}
		gc.html(html1);
	}
	
	function playLyrics1 () {
		var lyrict1="lyric"+(Math.floor(audio.currentTime)+2);
		var p1=$(".gc-box p");
		for(var i=0;i<p1.length;i++){
			if(lyrict1==p1.eq(i).attr("id")){
				p1.css("color","#fff")
				p1.eq(i).css("color","#e7ca06");
				gc.animate({"top":-i*1.2+3.4+"rem"},1000)
			}
		}
	}
	
	function playLyrics2 () {
		var lyrict1="lyric"+(Math.floor(audio.currentTime)+2);
		var p1=$(".gc-box p");
		for(var i=0;i<p1.length;i++){
			if(lyrict1==p1.eq(i).attr("id")){
				p1.css("color","#fff")
				p1.eq(i).css("color","#e7ca06");
				gc.css("top",-i*1.2+3.4+"rem");
			}
		}
	}

	var gcBox = $('.gc');
	gcBox.on('touchend',function(){
		gcBox.toggleClass('pad');
		console.log(0);
	})
	/*添加歌词*/
	
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
	var now;//表示列表中的歌曲的下标
	function deleteS(){
		if(now==currentIndex){
			songs.splice(now,1);
			localStorage.songs=JSON.stringify(songs);
		}
		if(now<currentIndex){
			currentIndex--;
			songs.splice(now,1);
			localStorage.songs=JSON.stringify(songs);
		}
		if(now>currentIndex){
			songs.splice(now,1);
			localStorage.songs=JSON.stringify(songs);
		}
		render(songs,ul1);
	}
	ul1.on("touchend",".li-r",function(e){
		block1(add_del);
		var lis=$(this).closest("li");
		now=lis.index();
		return false;
	})
	var delete2=$(".delete");//删除键
	delete2.on("touchend",function(){
		render(songs,ul1);
		deleteS();
		return false;
	});
	
	//添加
	var addSongs = $('.add-s');
	addSongs.on("touchend",function(){				  /////播放列表添加
		var arr = [
			{name:"青春你好",author:"颖儿",state:"0",src:"music/青春你好（电视剧《冰与火的青春》主题曲）-颖儿.aac",
			src1:"url(imgs/6.png)",
			src2:"url(imgs/tu6.png)",
			content:"[00:00.00] 青春你好[00:03.00] 电视剧《冰与火的青春》主题曲 [00:06.00] 演 唱：颖儿[00:09.00] 词：梁振华 曲：何沐阳[00:12.00] 歌词编辑：果果[00:15.00] QQ:765708831 [00:18.00] 中文歌词库 www.cnLyric.com[00:23.57] 曾映着霞光一圈圈跑过的清早[00:28.74] 曾伴着野花一片片开放的微笑[00:34.13] 舞蹈吧 陶醉吧[00:35.70] 少年手中有金色的日子[00:39.64] 在风里雨里梦里[00:41.74] 唱起出发的歌谣[00:44.56] 看那春光曼妙[00:46.85] 我们曾对天空说你好[00:50.87] 年轻的分秒和着节拍[00:53.94] 放肆的燃烧[00:58.79] 青春你好[01:02.21] 谢谢你给的拥抱[01:05.09] 再来多少风暴[01:07.46] 我只为你心跳[01:09.81] 青春你好[01:13.44] 站在最高的山峰翔翱[01:18.22] wu……ou……[01:44.34] 失眠的夜里那悸动[01:46.78] 轻轻把门敲[01:49.79] 醉过的豪言是真假[01:52.34] 谁又能猜到[01:55.04] 这世界太小[01:56.67] 仿佛不够用心去奔跑[02:00.48] 这时光太短[02:02.39] 感觉不够尽情去燃[02:05.64] 看那世事纷扰[02:07.74] 我们要对未来说你好[02:11.64] 成长的滋味[02:13.10] 只有通过才能领悟到[02:19.76] 青春你好[02:23.11] 谢谢你给的拥抱[02:26.02] 再来多少风暴[02:28.64] 我只为你心跳[02:30.83] 青春你好[02:34.32] 站在最高的山峰翔翱[02:39.14] wu……ou……[02:44.84] 青春你好[02:48.18] 谢谢你给的拥抱[02:51.08] 再来多少风暴[02:53.64] 我只为你心跳[02:55.96] 青春你好[02:59.45] 站在最高的山峰翔翱[03:04.06] wu……ou……[03:08.24] 锁在旗杆下的誓言[03:10.38] 如今到哪儿去了[03:13.60] 冷酷的生活一次次[03:16.17] 将我在路击倒[03:19.07] 冰裂火烧 伴我纵横[03:21.61] 壮志未曾消[03:24.38] 自由的梦想还在岁月[03:27.40] 纵情的呼啸"
			},
			{name:"诺言",author:"鹿晗",state:"0",src:"music/诺言-鹿晗.aac",
			src1:"url(imgs/7.png)",
			src2:"url(imgs/tu7.png)",
			content:"[00:00.00] 毛阿敏 诺言[00:00.20][00:00.50]为一句无声的诺言[00:04.49]默默地跟着你这么多年[00:08.86]当你累了倦了或是寂寞难言[00:17.03]总是全心全意地出现在你面前[00:26.78]爱是一个长久的诺言[00:35.31]平淡的故事要用一生讲完[00:43.78]光阴的眼中你我只是一段插曲[00:51.97]当明天成为昨天[00:56.50]昨天成为记忆的片段[01:00.81]泪水与笑脸都不是永远[01:11.79][02:01.85]向天空大声地呼喊[02:06.24]用心地试过了这么多年[02:10.75]当你热情奔放或是痛苦难言[02:18.54]谁的诺言会真的实现在你身边[02:28.31]爱是一个浪漫的诺言[02:36.61]快乐的内容每天都在变幻[02:45.01]人心在飞转谁能让你为我停留[02:53.35]当相逢成为再见[02:57.23]再见成为遥远的思念[03:11.00][03:02.28]内心的平安那才是永远"
			},
			{name:"时光恋人(电影《时光恋人》主题曲)",author:"金志文_周子琰",state:"0",src:"music/时光恋人(电影《时光恋人》主题曲)-金志文_周子琰.aac",
			src1:"url(imgs/8.png)",
			src2:"url(imgs/tu8.png)",
			content:"[00:00.71]时光恋人（feat.金志文） - 周子琰[00:05.15]（电影《时光恋人》主题曲）[00:08.53]词：胡云龙[00:11.34]曲：裴东峰[00:14.03][00:20.72]这段旅途 终点有多远[00:28.22]一路寻找 相识的那天[00:35.78]若是偶然 错乱了时间[00:43.34]情愿当作 前生的姻缘[00:51.22]你悄悄地出现 教会我如何思念[00:58.59]就怕是一场梦 如此真实的难分辨[01:07.22]与你相见 无论多遥远[01:14.09]用我坚定双眼 回应你内心的呼喊[01:25.28]两个世界被爱相连[01:29.09]带着你承诺的一切[01:32.84]遥望着最不舍的离别[01:40.47]当我走出你的世界[01:43.84]一切都未改变[01:47.15]还在等待爱情应该收获那个季节[01:55.72]两个世界被爱相连[01:58.97]带着你承诺的一切[02:03.34]遥望着最不舍的离别[02:11.03]当我走出你的世界[02:14.51]一切都未改变[02:17.57]我们还是回到原点[02:25.63][02:47.24]若是偶然 错乱了时间[02:54.74]情愿当作 前生的姻缘[03:02.43]你悄悄地出现 教会我如何思念[03:09.99]就怕是一场梦 如此真实的难分辨[03:18.66]与你相见 无论多遥远[03:25.47]用我坚定双眼 回应你内心的呼喊[03:36.66]两个世界被爱相连[03:40.41]带着你承诺的一切[03:44.29]遥望着最不舍的离别[03:51.91]当我走出你的世界[03:55.57]一切都未改变[03:58.57]还在等待爱情应该收获那个季节[04:07.14]两个世界被爱相连[04:10.88]带着你承诺的一切[04:14.76]遥望着最不舍的离别[04:22.38]当我走出你的世界[04:25.76]一切都未改变[04:29.13]我们还是回到原点[04:37.45]我们还是回到原点[04:46.07]"
			},
			{name:"刚刚好",author:"薛之谦",state:"0",src:"music/刚刚好-薛之谦.aac",
			src1:"url(imgs/1.png)",
			src2:"url(imgs/tu1.jpg)",
			content:"[00:00.00] 薛之谦 - 刚刚好[00:04.00] 词曲：薛之谦[00:12.00] 歌词编辑：果果[00:16.00] QQ:765708831[00:20.00] 中文歌词库 www.cnLyric.com[00:37.67] 如果有人在灯塔[00:40.01] 拨弄她的头发[00:42.09] 思念刻在墙和瓦[00:46.29] 如果感情会挣扎[00:48.75] 没有说的儒雅[00:50.95] 把挽回的手放下[00:54.70] 镜子里的人说假话[00:58.65] 违心的样子你决定了吗[01:03.79] 装聋或者作哑 要不我先说话[01:15.98] 我们的爱情 到这刚刚好[01:20.06] 剩不多也不少 还能忘掉[01:25.31] 我应该可以 把自己照顾好[01:33.36] 我们的距离 到这刚刚好[01:37.29] 不够我们拥抱 就挽回不了[01:42.55] 用力爱过的人 不该计较[01:59.12] 是否要逼人弃了甲[02:01.56] 亮出一条伤疤[02:03.63] 不堪的根源在哪[02:07.60] 可是感情会挣扎[02:09.96] 没有别的办法[02:12.28] 它劝你不如退下[02:16.04] 如果分手太复杂[02:19.56] 流浪的歌手会放下吉他[02:24.51] 故事要美必须藏着真话[02:32.57] 我们的爱情 到这刚刚好[02:36.29] 剩不多也不少 还能忘掉[02:41.63] 我应该可以 把自己照顾好[02:49.35] 我们的距离 到这刚刚好[02:53.12] 不够我们拥抱 就挽回不了[02:58.41] 用力爱过的人 不该计较[03:06.28] 我们的爱情到这刚刚好[03:10.03] 再不争也不吵 不必再煎熬[03:15.24] 你可以不用 记得我的好[03:22.93] 我们的流浪到这刚刚好[03:26.85] 趁我们还没到 天涯海角[03:31.76] 我也不是非要去那座城堡[03:39.74] 天空有些暗了暗的刚刚好[03:43.73] 我难过的样子就没人看到[03:48.84] 你别太在意我身上的记号"
			}
		];
		$.each(arr, function(index,val) {
			songs.push(arr[index]);
		});
		localStorage.songs=JSON.stringify(songs);
		render(songs,ul1);
		return false;
	})	
	/*歌曲列表*/
	
	/*页面切换*/
	body1.css({"display":"block","left":0});
	y1.on("touchend",function(e){
		body1.animate({left:0},200,function(){$(this).css("display","block")})
		body2.animate({left:-wb2},200,function(){$(this).css("display","none")})
		return false;
	})
	var y2=$(".fh");  //列表页返回键
	var imgBtn=$(".img");
	y2.on("touchend",function(e){
		body2.animate({left:0},200,function(){$(this).css("display","block")})
		body1.animate({left:-wb1},200,function(){$(this).css("display","none")})
		return false;
	})
	imgBtn.on("touchend",function(e){
		body2.animate({left:0},200,function(){$(this).css("display","block")})
		body1.animate({left:-wb1},200,function(){$(this).css("display","none")})
		return false;
	})
	/*页面切换*/
	
	/*列表页导航效果*/
	var nav1_lis=$("#nav1 div");
	nav1_lis.on("touchend",function(){
		nav1_lis.css({"color":"#fff","border-bottom-color":"transparent"});
		$(this).css({"color":"#e7ca06","border-bottom-color":"#e7ca06"});	
	})
	/*列表页导航效果*/
	
	/*播放页*/
	$(audio).on("loadstart",function(){
		current.html(format(audio.currentTime));
		t.html(songs[currentIndex].name);
		b.html(songs[currentIndex].author);
		gc.empty();
		lyrics();
	});
	
	$(audio).on("canplay",function(){
		duration.html(format(audio.duration));
	});
	
	$(audio).on("progress",function(){
		
	});
	
	$(audio).on("play",function(){
		play.html("&#xe608;");
	});
	
	$(audio).on("timeupdate",function(){
		current.html(format(audio.currentTime));
		var	left=width1*audio.currentTime/audio.duration;
		var left1=width1_1*audio.currentTime/audio.duration;
		var left2=$('.progress1').width()*audio.currentTime/audio.duration;
		btn1.css("left",left-r1);
		btn2.css("width",left-r1);
		$(".width").css("width",left2);
		if(flag1){
			playLyrics1();
		}else{
			playLyrics2();
		}
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
	//进度条跳转
	btn1.on("touchend",false);
	progress.on("touchend",function(e){
		var offsetX=e.originalEvent.changedTouches[0].clientX-
					progress.offset().left;
		audio.currentTime=offsetX/width1*audio.duration;
	})
	
	//进度条拖拽
	btn1.on("touchstart",function(e){
		flag1 = true;
		var offsetX=e.originalEvent.changedTouches[0].clientX-btn1.position().left;
		var start=r1-offsetX;
		$(document).on("touchmove",function(e){
			var left=e.originalEvent.changedTouches[0].clientX+start;
			if(left>=width1||left<=0){
				return;
			}
			audio.currentTime=left/width1*audio.duration;
		});
		return false;
	});
	btn1.on("touchend",function(){
		flag1 = false;
		$(document).off("touchmove");
		return false;
	})
	/*进度条*/
	
	/*音量键*/
	var volume=$(".volume");
	var btn3=$(".btn3");//静音键
	var btn4=$(".btn4");//音量按钮
	var btn5_w=$(".btn5-w");//音量条
	var r2=btn4.width()/2;
	var width2=volume.width();
	btn3.on("touchend",false);
	
	volume.on("touchend",function(e){
		var offsetX=e.originalEvent.changedTouches[0].clientX-volume.offset().left;
		if(offsetX<0||offsetX>width2){
			return;
		}
		btn3.removeAttr("data-v");
		audio.volume=offsetX/width2;
		return false;
	});
	/*音量拖拽*/
	btn4.on('touchstart',function(e){
		var offsetX=e.originalEvent.changedTouches[0].clientX-btn4.offset().left;
		var start=r2-offsetX;
		$(document).on('touchmove',function(e){
			var left=e.originalEvent.changedTouches[0].clientX-volume.offset().left+start;
			if(left>=width2||left<=0){
				return;
			}
			audio.volume=left/width2;
		});
		return false;
	});
	$(document).on('touchend',function(e){
		$(document).off('touchmove');
		return false;
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
	
	/*播放页*/
	
})
