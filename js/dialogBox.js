/*
**弹出框
**@author cyy 2015/12/31
**example:      
**    id:"test",                                      //浮层ID，必填
**    style:"test",                                   //浮层css样式 
**    title:''										  //标题
**    target:dom,                                     //事件源，dom节点或者jq对象都可以，必填           
**    close_btn:false,                                //要不要关闭按钮
**    content:'<div class="content">123</div>',       //字符串，DOM结点或者jQ对象
**    position:"top",                                 //默认bottom位置，其它分别可选left,right,top,center,fix
**    correction:{top:10,right:10},                   //位置偏移量
**    width:400,                                      //浮层宽度
**    ifShade:true,                                       //遮罩层,默认没有
**    scroll:true,                                    //是否滚动,默认不滚动
**    disappear:true,                                 //是否消失
**    time:3000,                                      //多长时间消失	
**    stay:true,                                      //不会被点击事件隐藏                                  
**    destroy:true,                                  //是否销毁浮层,默认销毁
**    callback:function(fn){fn()}                     //浮层DOM结构渲染完成回调函数，第一个参数可以控制关闭浮层，fn()即可关闭浮层
**});
*/
if(typeof(dialogBox) === "undefined"){
   dialogBox={};
}
if(!dialogBox.tips){
    dialogBox.tips={};
}
if(!dialogBox.util){
    dialogBox.util={};
}
(function(ns){
	function Tips(cfg){
		var _ =this;
		_.cfg = {
			position:'center',
			correction:{left:10, top:10},
			width:null,
			target:"body",
			id:"hy-dialogInfo",
			skinStyle:"hy-dialogBox",
			title:"提示",
			content:"",
			hasTitle:false,
			hasCloseBtn:true,
			hasMask:true,
			scroll:false,
			stay:true,
			disappear:false,
			time:3000,
			destroy:true,
			callback:function(){}
		}
		
		_.cfg = $.extend({},_.cfg, cfg);	
		
		if(!_.cfg.id || !_.cfg.target) return;
		
		_.addTips();
		_.dragMove();
		_.setPos();
		_.bindEvent();
		_._disappear();
	}
	
	Tips.global={
		isIe6:function(){
			return typeof(document.body.style.maxHeight) === "undefined"?true:false
		}
	};
	
	Tips.prototype={
		//添加浮层
		addTips:function(){
			var tpl={
				shade:'<div class="hy-dialogShade"></div>',
				btn:'<a class="btn-close" href="javascript:void(0)" ></a>',
				title:'<div class="hd">$0</div>',
				html:'$1'+
					 '<div id="$4" class="hy-dialogInfo $5 animated zoomIn">' +
					 '	$2'+//close-button
					 '	$3'+ //title
					 '	<div class="bd">$6</div>'+ //content
					 '</div>',
				IFRAME:'<iframe frameborder="0" style="left:0px;width:100%;height:0px;top:0px;position:absolute;'+
					 'z-index:98;filter: Alpha(Opacity=0);" class="tips-iframe"></iframe>'
			};
			var _t=this,
			    selector="#"+_t.cfg.id,
				dom=jQuery(selector),
				html=tpl.html;
				
			if(!jQuery(selector)[0] || !!_t.cfg.destroy){
				try{
					jQuery( "*", dom).add([dom]).each(function(){
		        	    jQuery.event.remove(this);
		        	    jQuery.removeData(this);
		        	});
					dom.innerHTML = "";
			        dom.remove();
			        
				}catch(e){}
				
				
			    if(_t.cfg.hasMask && !jQuery(".hy-dialogShade")[0]){
				    html = html.replace("$1", tpl.shade);
				}else{
					html = html.replace("$1", "");
				}
				if(_t.cfg.hasCloseBtn){
					html=html.replace("$2", tpl.btn);
				}else{
					html=html.replace("$2", '');
				}
				if(_t.cfg.hasTitle){
					html=html.replace("$3", tpl.title).replace("$0",_t.cfg.title);
				}else{
					html=html.replace("$3", '');
				}
				html = html.replace("$4", _t.cfg.id).replace("$5", _t.cfg.style);
				
				if( typeof(_t.cfg.content) === "string" ){
				    html=html.replace("$6", _t.cfg.content);			    
				}else if( typeof(_t.cfg.content.jquery) !== "undefined"){
				    html=html.replace("$6", "");
				    var clone=_t.cfg.content.clone(true);
				    jQuery(selector+" .bd").append(clone.show().removeAttr("id"));
				    clone.find("*").removeAttr("id");
				}
				if(_t.cfg.hasMask){
					jQuery(".hy-dialogShade").show();
				}
				jQuery("body").append(html);
			}else{
			    dom.show();
			    if(_t.cfg.hasMask){
					jQuery(".hy-dialogShade").show();
				}
			}
			
			_t.dom= dom=jQuery(selector);
			if(_t.cfg.width)
			_t.dom.css("width", _t.cfg.width);
		},
		//设置图层位置
		setPos:function(){
		    var _t=this,
			    pos=_t.cfg.position,
				target=jQuery(_t.cfg.target),
				top=target.offset().top,
				left=target.offset().left,
				tw=target[0].offsetWidth,//事件源节点的宽度
				th=target[0].offsetHeight,//事件源节点的高度
				dom=_t.dom,
				w=dom[0].offsetWidth,//浮层宽度
				h=dom[0].offsetHeight,//浮层高度
			    dw=document.documentElement.clientWidth,//文档可见宽度
				dh=document.documentElement.clientHeight,//文档可见高度
				limitLeft,
				dist=_t.cfg.correction,
				dist_l=dist.left,
				dist_t=dist.top,
				ctop=0,
				timer;
			
		    if(dh-h > 0){
		    	ctop=Math.abs((dh-h)/2)+document.documentElement.scrollTop+document.body.scrollTop+dist_t;
		    }else{
		    	ctop=document.documentElement.scrollTop+document.body.scrollTop+dist_t+10;
		    }
			switch (pos){
			    case "left":
				dom.css({"left":left-w+dist_l, "top":top+dist_t, "position":"absolute"});
				if(left-w+dist_l < 0){
				    dom.css({"left":0});
				}
				break;
				case "right":
				dom.css({"left":left+tw+dist_l, "top":top+dist_t, "position":"absolute"});
				limitLeft=dw-w;
				if(left+tw+dist_l>limitLeft){
				    dom.css({"left":limitLeft});
				}
				break;
				case "top":
				dom.css({"left":(dw-w)/2+dist_l,"top":"50px", "position":"absolute"});
//				limitLeft=dw-w-dist_l;
//				if(left > limitLeft){
//					left=limitLeft;
//				}
//				dom.css({"left":left});
				break;
				case "bottom":
				dom.css({"top":top+th+dist_t, "position":"absolute"});
				limitLeft=dw-w-dist_l;
				if(left > limitLeft){
					left=limitLeft;
				}
				dom.css({"left":left+dist_l});
				break;
				case "center":
				    dom.css({"left":(dw-w)/2+dist_l, "top":ctop, "position":"absolute"});
				break
				case "fix":
				dom.css({"position":"fixed", "left":(dw-w)/2, "top":(dh-h)/2+dist_t});
				if(Tips.global.isIe6()){//if IE6
					dom.css({"position":"absolute", "left":(dw-w)/2, "top":(dh-h)/2+document.documentElement.scrollTop+dist_t});
					jQuery(window).scroll(function(){
						clearTimeout(timer);
					    timer=setTimeout(function(){
							dom.css("top", (dh-h)/2+document.documentElement.scrollTop+dist_t);
						}, 100);	
					});
				}
				break;
				default:break;
			}
			//scroll
			var _top=top-th-20;
			if(_t.scroll){
				if(_top < 0){
					$("html,body").animate({scrollTop:0}, 500);
				}
				$("html,body").animate({scrollTop:_top}, 500);
			}
		},
		//绑定事件
		bindEvent:function(){
			var _t=this,
			    _close=_t.dom.find(".btn-close");
			_close.on("click", function(e){
			    _t.dom.remove();	
				if( _t.cfg.hasMask ){
				   jQuery(".hy-dialogShade").hide(); 	
				}
				e.stopPropagation();
			});
			if( _t.cfg.hasMask ){
			    jQuery(".hy-dialogShade").click(function(e){
			    	//e.stopPropagation();
				    jQuery(this).add(_t.dom).hide();
				});	
			}
			
			if(!_t.cfg.stay){
				$(body).on("click", function(e){_close.triggerHandler("click");});
			}
			_t.dom.on("click", function(e){
				e.stopPropagation();
			});
			_t.exec(_close);//调回调函数
		},
		//浮层拖动
		dragMove:function(selector){
			var _t=this;
		    _t.dom.find(".hd").mousedown(function(e){
				var dom=jQuery(this);
				var oLeft=e.pageX;
				var oTop=e.pageY;
				var domLeft=this.getBoundingClientRect().left;
				var domTop=this.getBoundingClientRect().top;
				if(_t.cfg.position !== "fix"){
				    domTop=jQuery(this).offset().top;
				}
			    if(Tips.global.isIe6()){
			        var domLeft=dom.offset().left;
				    var domTop=dom.offset().top;
			    }
			    jQuery(document).mousemove(function(e){
					var leftD=e.pageX-oLeft;
					var topD=e.pageY-oTop;
					_t.dom.css({
					    top:parseFloat(domTop) + parseFloat(topD) + "px",
						left:parseFloat(domLeft) + parseFloat(leftD) + "px"
					});
				}).mouseup(function(){
					jQuery(document).unbind("mousemove");	
				});							
			}).mouseover(function(){
			    jQuery(this).css("cursor", "move");	
			}).mouseout(function(){
			    jQuery(this).css("cursor", "auto");	
			});
		},
		//调回调函数
		exec:function(_close){
		    var _t=this,
		        fn=shutDown(_close);
		    if(_t.cfg.callback){
				_t.cfg.callback.call(this, fn);
		    }
		},
		//
        _disappear:function(){
            var _t=this,
                timer;
            if(_t.cfg.disappear){
                clearTimeout(timer);
                timer=setTimeout(function(){
                	_t.dom.fadeOut();
                	//$(".hy-dialogShade").fadeOut();
                }, _t.cfg.time || 3000);   
            }
        },
        _hide:function(){
            var _t=this;
            _t.dom.fadeOut();
        }
	}
	
	function shutDown(_close){
	    return function(){
      	    _close.triggerHandler("click");
        }
	}
	ns.tips=Tips;
	
})(dialogBox);