/*********************************************************************************
jQuery Plugins
	- jquery.easing.js
	- jquery.mousewheel.js
	- jquery.imgUtils.js
	- jquery.anchorUtils.js
*********************************************************************************/
 
 
/*******************************************************************************
 *
 * jquery.easing.js
 *
*******************************************************************************/

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright c 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright c 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

 
/*******************************************************************************
 *
 * jquery.mousewheel.js
 *
*******************************************************************************/

/* Copyright (c) 2009 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 *
 * Version: 3.0.2
 * 
 * Requires: 1.2.2+
 */
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(f){var d=[].slice.call(arguments,1),g=0,e=true;f=c.event.fix(f||window.event);f.type="mousewheel";if(f.wheelDelta){g=f.wheelDelta/120}if(f.detail){g=-f.detail/3}d.unshift(f,g);return c.event.handle.apply(this,d)}})(jQuery);


/*******************************************************************************
 * jquery.imgUtils.js
 *
 * @author
 *    satoshi manaka (spfdesign Inc.)
 * @version
 *    1.1.0
 * @howto
 *    jQuery('selectors').imgHover({ type : 'swap', suffix : '_on' });
*******************************************************************************/

//==============================================================================
// HELPER
//==============================================================================
/**
 * image path Helper
 */
(function($) {
$.extend({
	combineSuffix: function(imgpath, suffix) {
		var dot = imgpath.lastIndexOf('.');
		var suffixDot = imgpath.search(new RegExp(suffix+'¥¥.'));
		if(suffixDot != -1) {
			return imgpath.substr(0, suffixDot) + suffix + imgpath.substr(dot);
		} else {
			return imgpath.substr(0, dot) + suffix + imgpath.substr(dot);
		}
	}
});
})(jQuery);

(function($) {
$.fn.extend({

	imgHover : function() {
		var defaults = {
			type             : 'swap',
			suffix           : '_on',
			rolloverDuration : 500,
			rolloutDuration  : 500
		}
		var config = $.extend(defaults, $.makeArray(arguments).shift());
		var $window = $(window);
		
		this.each(function() {
			
			var $this     = $(this),
				imgsrc    = $this.attr('src'),
				imgsrc_on = jQuery.combineSuffix(imgsrc, config.suffix);
			
			$this.data('src', imgsrc);
			
			switch(config.type) {
				case "swap":
					new Image().src = imgsrc_on;
					$this
						.hover (
							function() { this.src = imgsrc_on; },
							function() { this.src = imgsrc; }
						);
				break;
				
				case "alpha":
					$this
						.hover (
							function() { $this.stop().fadeTo(config.rolloverDuration, 0.8); },
							function() { $this.stop().fadeTo(config.rolloutDuration, 1.0); }
						);
				break;
				
				case "crossFade":
					var onObj = $('<span />')
						.css({
							position        : "absolute",
							width           : $this.width(),
							height          : $this.height(),
							backgroundImage : "url(" + imgsrc_on + ")"
						})
						.fadeTo(0, 0);
					$this
						.css("position", "absolute")
						.parent().prepend(onObj)
						.hover (
							function() {
								$this.stop().fadeTo(config.rolloverDuration, 0);
								onObj.stop().fadeTo(config.rolloverDuration, 1);
							},
							function() {
								$this.stop().fadeTo(config.rolloutDuration, 1);
								onObj.stop().fadeTo(config.rolloutDuration, 0);
							}
						);	
				break;
			}
			$window.unload(function(e) {
				$this.attr('src', $this.data('src'));
			});
		});
		
		// method chain
		return this;
	}
});
})(jQuery);


/*******************************************************************************
 * jquery.anchorUtils.js
 *
 * @author
 *    satoshi manaka(spfdesign Inc.)
 * @howto
 *    jQuery('selectors').anchorScroll('targetElement');
 *    jQuery('selectors').anchorScroll('targetElement', {duration:500, transition:'easeInOutQuart'});
*******************************************************************************/

/**
 * Anchor Scroll
 */
(function($) {
$.fn.extend({
	anchorScroll : function(targetElement, settings) {
		var defaults = {
			duration   : 500,
			transition : 'easeInOutQuart'
		};
		//
		var config = $.extend(defaults, settings);
		//
		var onClickAction = function(e) {
			$('.newsdetails,.increment,.goback').hide();
			$('.floor_list').show();
			if(!targetElement || targetElement!='') {
				targetElement = $(this).attr("href");
				var hash = targetElement.lastIndexOf('#');
				$(this).addClass("href").parent().siblings().find('a').removeClass('href');
				targetElement = targetElement.substr(hash);
			}
			$('html, body').animate({ scrollTop:$(targetElement).offset().top-54 }, config.duration, config.transition);
			e.preventDefault();
		};
		//
		this.each(function() {
			$(this)
				.click(onClickAction);
		});
		//
		return this;
	}
});
})(jQuery);




var currentX;
var currentY;
var targetY = 0;
var scrollY = 0;
var scrollHeight;
var timeoutId;

//////////////////////////////////////////////////

function wheel(event){
	var delta = 0;
	
	if (!event) {
		event = window.event;
	}
	
	if (event.wheelDelta) {
		delta = -event.wheelDelta / 120; 
	} else if (event.detail) {
		delta = event.detail / 3;
	}
	
	if (delta) {
		handle(delta);
	}
	
	if (event.preventDefault) {
		event.preventDefault();
	} else {
		event.returnValue = false;
	}
}

function handle(_delta) {
	clearTimeout(timeoutId);
	
	currentX = document.documentElement.scrollLeft || document.body.scrollLeft;
	currentY = document.documentElement.scrollTop || document.body.scrollTop;
	scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
	scrollY = currentY;
	targetY = currentY + _delta * 200;
	if(targetY < 0) {
		targetY = 0;
	}
	if(targetY > scrollHeight) {
		targetY = scrollHeight;
	}
	
	engine = function() {
		if(Math.abs(scrollY - targetY) <= 1){
			scrollY = Math.round(targetY);
			window.scroll(currentX, scrollY);
			clearTimeout(timeoutId);
		} else {
			scrollY -= (scrollY - targetY) / 5;
			window.scroll(currentX, scrollY);
			timeoutId = setTimeout(engine, 25);
		}
	}
	
	engine();
}

//////////////////////////////////////////////////

if (navigator.appVersion.indexOf("Win") != -1 && navigator.userAgent.indexOf("MSIE") == -1) {
	if (window.addEventListener) {
		window.addEventListener('DOMMouseScroll', wheel, false);
		window.onmousewheel = document.onmousewheel = wheel;
	}
}