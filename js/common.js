$(function(){
	"use strict";
	$("a.anchorScroll").anchorScroll();
	
	$('.spor ul').on('click','li',function(){
		$('html,body').animate({scrollTop:0 },100);
		$('.floor_list,.increment').hide();
		$('.newsdetails,.goback').show();
	})
	
	$('.goback').on('click',function(){
		$('.floor_list').show();
		$('.newsdetails,.goback,.increment').hide();
		$('html, body').scrollTop($('#sec05').offset().top-54);
	})
	$('.addServer').on('click',function(){
		$('.floor_list,.newsdetails').hide();
		$('.increment,.goback').show();
		$('html,body').animate({scrollTop:0 },100);
	})
	
	$('.c_r5,.logo').on('click',function(){
		$('html,body').animate({scrollTop:0 },100);
	})
	
    var pptArray = [
        {
            title: '杭州御风环保科技有限公司PPT制作',
            description: '专注于至关重要的环境空气治理领域，研发首创应用的异味净除技术——天然竹萃液，以卓越人才和领先科技，致力解决“更好呼吸”的挑战，提供各领域空间所需要的“天然、无害、高效”、绿色自然的空气异味净除解决方案。',
            video: 'images/code1.mp4'
        }, {
            title: 'MXD，因你而来主题PPT制作',
            description: 'MXD PPT 主要对UI UE先时间偏平化 细节设计 优化的阐述，好的UI不仅是让软件变得有个性有品味，还要让软件的操作变得舒适、简单、自由，充分体现软件的定位和特点。',
            video: 'images/code2.mp4'
        }, {
            title: '芝麻信用业务介绍PPT制作',
            description: '芝麻信用，是蚂蚁金服旗下独立的第三方征信机构，通过云计算、机器学习等技术客观呈现个人的信用状况，已经在信用卡、消费金融、融资租赁、酒店、租房、学生服务、公共事业服务等上百个场景为用户、商户提供信用服务。',
            video: 'images/code3.mp4'
        }, {
            title: '新浪舆情通产品介绍PPT制作',
            description: '新浪微博旗下公司，与新浪网、新浪微博深度合作，3000+政府客户，5000+企业客户丰富的产品功能 拥有：舆情监测、舆情预警、全网事件分析、微博事件分析、微博传播分析、舆情报告制作、竞品分析、自动舆情日周月报 等丰富的功能。',
            video: 'images/code4.mp4'
        }
    ];
	$('.sec02main').on('click','li',function(){
        console.log($(this).data('index'));
        var i = $(this).data('index');
		var cont='<div class="demand">'
					+'<div class="video"><video src="'+pptArray[i].video+'" controls="controls" autoplay width="100%" height="600"></video></div>'
					+'<div class="advertisement flex">'
						+'<div class="proimg"><img src="images/xmmc_21.jpg" /></div>'
						+'<div class="flexbox"><h4>'+pptArray[i].title+'</h4>'
						+'<p>'+pptArray[i].description+'</p>'
						+'</div>'
						+'<div class="baojia" onclick="openQQ()">索要制作报价</div>'
					+'</div>'
					+'<div class="btn-close"></div>'
				+'</div>';
		new dialogBox.tips({
			position:"center",
			id:"updatedemand",
			style:"updatedemand",
			hasTitle:true,
			title:"",
			content:cont,
			callback:function(fn){}
		});
	})
	
	 var swiper = new Swiper('.swiper-container', {
	 	loop : true,
	 	autoplay: {
		    delay: 5000,
	    },
	    slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
	        el: '.swiper-pagination',
	        clickable: true
	    },
    });
	
	function changeFloor(){
		var floorObj = $(".floor_list"),
			navbar = $(".navbar");
        if(floorObj.length < 1){
            return;
        }
		var scrollTop =$(document).scrollTop();//滚动高度  

        floorObj.each(function(idx,e){
		   var ypos = $(this).offset().top-100;
		   var h = $(this).height();
		   var list=$('.serverpro li');
		   var hblist=$('.hb ul li');
		    if(scrollTop > ypos && scrollTop<ypos+h){
		        navbar.find("li").eq(idx).find('a').addClass("href").parent().siblings().find('a').removeClass('href');	
		        if(idx==3){
		        	list.addClass('animated flipInY').animate({opacity:"1"});
		        }else{
		        	list.removeClass('animated flipInY');
		        }
		        if(idx==4){
		        	hblist.addClass('animated flipInX').animate({opacity:"1"});
		        }else{
		        	hblist.removeClass('animated flipInX');
		        }
		    }
		});
	}
	//滚动	
	var flag = true;
	$(window).scroll(function(){
		if(flag){ 
			setTimeout(changeFloor,800); 
			flag = false;
		}else{ 
			flag = true;
		}			
	});
	
	

var wrapTop = $(".digital").offset().top;
var istrue = true;
$(window).on("scroll",
function() {
    var s = $(window).scrollTop();
    if (s > wrapTop && istrue) {
        $(".timer").each(count);
        function count(a) {
            var b = $(this);
            a = $.extend({},
            a || {},
            b.data("countToOptions") || {});
            b.countTo(a)
        };
        istrue = false;
    };
})
//设置计数
$.fn.countTo = function (options) {
	options = options || {};
	return $(this).each(function () {
		//当前元素的选项
		var settings = $.extend({}, $.fn.countTo.defaults, {
			from:            $(this).data('from'),
			to:              $(this).data('to'),
			speed:           $(this).data('speed'),
			refreshInterval: $(this).data('refresh-interval'),
			decimals:        $(this).data('decimals')
		}, options);
		//更新值
		var loops = Math.ceil(settings.speed / settings.refreshInterval),
		    increment = (settings.to - settings.from) / loops;
		//更改应用和变量
		var self = this,
		$self = $(this),
		loopCount = 0,
		value = settings.from,
		data = $self.data('countTo') || {};
		$self.data('countTo', data);
		//如果有间断，找到并清除
		if (data.interval) {
			clearInterval(data.interval);
		};
		data.interval = setInterval(updateTimer, settings.refreshInterval);
		//初始化起始值
		render(value);
		function updateTimer() {
			value += increment;
			loopCount++;
			render(value);
			if (typeof(settings.onUpdate) == 'function') {
				settings.onUpdate.call(self, value);
			}
			if (loopCount >= loops) {
				//移出间隔
				$self.removeData('countTo');
				clearInterval(data.interval);
				value = settings.to;
				if (typeof(settings.onComplete) == 'function') {
					settings.onComplete.call(self, value);
				}
			}
		}
		function render(value) {
			var formattedValue = settings.formatter.call(self, value, settings);
			$self.html(formattedValue);
		}
		});
    };
    $.fn.countTo.defaults={
    	from:0,               //数字开始的值
    	to:0,                 //数字结束的值
    	speed:1000,           //设置步长的时间
    	refreshInterval:100,  //隔间值
    	decimals:0,           //显示小位数
    	formatter: formatter, //渲染之前格式化
    	onUpdate:null,        //每次更新前的回调方法
    	onComplete:null       //完成更新的回调方法
    };
    function formatter(value, settings){
    	return value.toFixed(settings.decimals);
    }
    //自定义格式
    $('#count-number').data('countToOptions',{
    	formmatter:function(value, options){
    		return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    	}
    });
    //定时器
    $('.timer').each(count);
    function count(options){
    	var $this=$(this);
    	options=$.extend({}, options||{}, $this.data('countToOptions')||{});
    	$this.countTo(options);
    }
	
});

function autoScroll(obj){ 
	$(obj).find("table").animate({
		marginTop : "-61px"  
	},500,function(){  
		$(this).css({marginTop : "0px"}).find("tr:first").appendTo(this); 
	})  
}  

function openQQ() {
    window.open('http://wpa.qq.com/msgrd?v=3&uin=563703943&site=qq&menu=yes','_brank');
}

$(function(){
    $.sublime_slideshow({
        src:[
        {url:"images/kv_bg_02.jpg"},
        {url:"images/kv_bg_01.jpg"}
        ],
        duration:   10,
        fade:       2,
        scaling:    1.4,
        rotating:   false
    });
});



$(document).ready(function(){
    $(".fakeloader").fakeLoader({
        timeToHide:1200,
        bgColor:"#010101",
        spinner:"spinner5"
    });
});



$(function(){
    $('.bxslider').bxSlider({
        touchEnabled:true,
    });
});