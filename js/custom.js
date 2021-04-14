function mycarousel4_initCallback(e){e.buttonNext.hover(function(){e.stopAuto()},function(){e.startAuto()});e.buttonPrev.hover(function(){e.stopAuto()},function(){e.startAuto()});e.clip.hover(function(){e.stopAuto()},function(){e.startAuto()})};
function checkWindowSize() {
	if (jQuery(window).width() > 750) {
		jQuery('.second-head .sf-menu').css('display', 'block').removeClass("xactive");
	} else {
		jQuery('.second-head .sf-menu').css('display', 'none');
	}

	if (jQuery(window).width() > 462) {
		jQuery('.first-head .sf-menu').css('display', 'block').removeClass("xactive");
	} else {
		jQuery('.first-head .sf-menu').css('display', 'none');
	}
}
function RoundLayout( e ) {
	var widthround = jQuery('#layout').width();
	jQuery('.roundabout').css('width', widthround + 'px');
}
function methodToFixLayout( e ) {
	var widthmodern = jQuery('#layout').width();
	jQuery('.modern-slider, .modern-slider img').css('width', widthmodern + 'px');
}

jQuery(document).ready(function ($) {
	"use strict";
	jQuery.browser={};(function(){jQuery.browser.msie=false;
	jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){
	jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});

	if ($(".tweet")[0]) {
		$('.tweet').append('<ul class="tweet_list"><li class="tweet_first tweet_odd"><span class="tweet_text"><i class="icon-twitter"></i> Professional Logo/Identity Design and Branding <a href="#">microlancer.com/explore/logo ...</a> <a href="#" class="tweet_hashtag">#microlancer</a></span> <br /><span class="tweet_time"><a href="#" title="view tweet on twitter">about 7 days ago</a></span></li><li class="tweet_even"><span class="tweet_text"><i class="icon-twitter"></i> Check out this great <a href="#" class="tweet_hashtag">#Lyonzone Technologies</a> item "Colangine - Creative Flat WordPress Theme" <a href="#">Lyonzone Technologies.net/item/colangine…</a></span> <br /><span class="tweet_time"><a href="#" title="view tweet on twitter">about 12 days ago</a></span></li></ul>');
	}
	// Superfish
	if ($(".sf-menu")[0]) {
		$('.sf-menu').superfish({
			delay: 350,
			animation: {
				opacity: 'show'
			},
			speed: 400,
			autoArrows: true
		});
	}
	if ($("#countdown")[0]){
		$("#countdown").countdown({
			date: "31 December 2014 23:59:59",
			format: "on"
		},
		function() {
			// callback function
		});
	}
	// Tabs
	var tabs = jQuery('ul.tabs');
	tabs.each(function (i) {
		// get tabs
		var tab = jQuery(this).find('> li > a');
		tab.click(function (e) {
			// get tab's location
			var contentLocation = jQuery(this).attr('href');
			// Let go if not a hashed one
			if (contentLocation.charAt(0) === "#") {
				e.preventDefault();
				// add class active
				tab.removeClass('active');
				jQuery(this).addClass('active');
				// show tab content & add active class
				jQuery(contentLocation).fadeIn(500).addClass('active').siblings().hide().removeClass('active');
			}
		});
	});
	// Accordion
	jQuery("ul.tt-accordion li").each(function () {
		jQuery(this).children(".accordion-content").css('height', function () {
			return jQuery(this).height();
		});
		if (jQuery(this).index() > 0) {
			jQuery(this).children(".accordion-content").css('display', 'none');
		} else {
			jQuery(this).addClass('active').find(".accordion-head-sign").append("<i class='icon-angle-up'></i>");
			jQuery(this).siblings("li").find(".accordion-head-sign").append("<i class='icon-angle-down'></i>");
		}
		jQuery(this).children(".accordion-head").bind("click", function () {
			jQuery(this).parent().addClass(function () {
				if (jQuery(this).hasClass("active")) {
					return;
				} {
					return "active";
				}
			});
			jQuery(this).siblings(".accordion-content").slideDown();
			jQuery(this).parent().find(".accordion-head-sign i").addClass("icon-angle-up").removeClass("icon-angle-down");
			jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
			jQuery(this).parent().siblings("li").removeClass("active");
			jQuery(this).parent().siblings("li").find(".accordion-head-sign i").removeClass("icon-angle-up").addClass("icon-angle-down");
		});
	});
	// Toggle
	jQuery("ul.tt-toggle li").each(function () {
		jQuery(this).children(".toggle-content").css('height', function () {
			return jQuery(this).height();
		});
		jQuery(this).children(".toggle-content").css('display', 'none');
		jQuery(this).find(".toggle-head-sign").html("&#43;");
		jQuery(this).children(".toggle-head").bind("click", function () {
			if (jQuery(this).parent().hasClass("active")) {
				jQuery(this).parent().removeClass("active");
			} else {
				jQuery(this).parent().addClass("active");
			}
			jQuery(this).find(".toggle-head-sign").html(function () {
				if (jQuery(this).parent().parent().hasClass("active")) {
					return "&minus;";
				} else {
					return "&#43;";
				}
			});
			jQuery(this).siblings(".toggle-content").slideToggle();
		});
	});
	jQuery("ul.tt-toggle").find(".toggle-content.active").siblings(".toggle-head").trigger('click');
	// 4Mob
	$(".second-head nav").before('<div id="mobilepro"><i class="icon-reorder icon-remove"></i></div>');
	$(".first-head nav").before('<div id="firstmobilepro"><i class="icon-reorder icon-remove"></i></div>');
	$(".second-head .sf-menu li, .first-head .sf-menu li").addClass('xpopdrop');
	$('#mobilepro').click(function () {
		$('.second-head .sf-menu').slideToggle('slow', 'easeInOutExpo').toggleClass("xactive");
		$("#mobilepro i").toggleClass("icon-reorder");
	});
	$('#firstmobilepro').click(function () {
		$('.first-head .sf-menu').slideToggle('slow', 'easeInOutExpo').toggleClass("xactive");
		$("#firstmobilepro i").toggleClass("icon-reorder");
	});
	$("body").click(function() {
		$('.second-head .xactive, .first-head .xactive').slideUp('slow', 'easeInOutExpo').removeClass("xactive");
		$("#mobilepro i, #firstmobilepro i").addClass("icon-reorder");
	});
	$('#mobilepro, .sf-menu, #firstmobilepro').click(function(e) {
		e.stopPropagation();
	});
	$(window).load(checkWindowSize);
	$(window).resize(checkWindowSize);
	// ToTop
	jQuery('#totop').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 800);
	});
	jQuery('#toTop').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 800);
	});
	jQuery("#toTop").addClass("hidett");
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() === 0) {
			jQuery("#toTop").addClass("hidett").removeClass("showtt");
		} else {
			jQuery("#toTop").removeClass("hidett").addClass("showtt");
		}
	});
	// Notification
	$(".notification-close-info").click(function () {
		$(".notification-box-info").fadeOut("slow");
		return false;
	});
	$(".notification-close-success").click(function () {
		$(".notification-box-success").fadeOut("slow");
		return false;
	});
	$(".notification-close-warning").click(function () {
		$(".notification-box-warning").fadeOut("slow");
		return false;
	});
	$(".notification-close-error").click(function () {
		$(".notification-box-error").fadeOut("slow");
		return false;
	});
	if ($(".notification-box")[0]) {
		var $thisdivf = $('.notification-box');
		$thisdivf.css('opacity', '0');
		var delay = 0;
		$thisdivf.each(function () {
			var $i = $(this);
			setTimeout(function () {
				$i.addClass('notif-anim').css('opacity', '1');
			}, delay += 300);
		});
		thisdivf_flag = true;
	}
	// FlexSlider
	if ($(".postslider")[0]) {
		jQuery('.postslider').flexslider();
	}
	if ($(".flex-slide-h")[0]) {
		jQuery('.flex-slide-h').flexslider({
			animation: "slide",
			direction: "horizontal",
			slideshowSpeed: 3000,
			animationSpeed: 1000,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			randomize: false,
			smoothHeight: true,
			keyboardNav: true,
			start: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400);
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400);
			},
			before: function(slider) {
				$('.big-slider h3').removeClass('effect').addClass('Out').fadeOut('slow');
				$('.big-slider p').removeClass('effectt').addClass('Out').fadeOut('slow');
			},
			after: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400).removeClass('Out');
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400).removeClass('Out');
			}
		});
	}
	if ($(".flex-slide-v")[0]) {
		jQuery('.flex-slide-v').flexslider({
			animation: "slide",
			direction: "vertical",
			slideshowSpeed: 3000,
			animationSpeed: 1000,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			randomize: false,
			smoothHeight: true,
			keyboardNav: true,
			start: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400);
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400);
			},
			before: function(slider) {
				$('.big-slider h3').removeClass('effect').fadeOut('slow');
				$('.big-slider p').removeClass('effectt').fadeOut('slow');
			},
			after: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400);
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400);
			}
		});
	}
	if ($(".flex-slide-fade")[0]) {
		jQuery('.flex-slide-fade').flexslider({
			animation: "fade",
			slideshowSpeed: 3000,
			animationSpeed: 1000,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			randomize: false,
			smoothHeight: false,
			keyboardNav: true,
			start: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400);
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400);
			},
			before: function(slider) {
				$('.big-slider h3').removeClass('effect').addClass('Out').fadeOut('slow');
				$('.big-slider p').removeClass('effectt').addClass('Out').fadeOut('slow');
			},
			after: function(slider) {
				$('.flex-active-slide').find('h3').delay(100).addClass('effect').fadeIn(400).removeClass('Out');
				$('.flex-active-slide').find('p').delay(100).addClass('effectt').fadeIn(400).removeClass('Out');
			}
		});
	}
	if ($(".fl")[0]) {
		jQuery('.fl').flexslider({
			animation: "slide",
			direction: "horizontal",
			slideshowSpeed: 2800,
			animationSpeed: 500,
			directionNav: false,
			controlNav: false,
			pauseOnHover: true,
			randomize: false,
			smoothHeight: false,
			keyboardNav: true
		});
	}
	if ($(".tst")[0]) {
		jQuery('.tst').flexslider({
			animation: "fade",
			direction: "horizontal",
			slideshowSpeed: 3000,
			animationSpeed: 400,
			directionNav: true,
			controlNav: false,
			pauseOnHover: true,
			initDelay: 0,
			randomize: false,
			smoothHeight: true,
			keyboardNav: false
		});
	}
	if ($("#clients")[0]) {
		jQuery('#clients.client4').jcarousel({
			visible: 4,
			scroll: 1,
			easing: 'easeInOutExpo',
			buttonPrevHTML: '<div><i class="icon-chevron-left"></i></div>',
			buttonNextHTML: '<div><i class="icon-chevron-right"></i></div>',
			animation: 800,
			auto: 1,
			wrap: 'last',
			initCallback: mycarousel4_initCallback
		});
		jQuery('#clients.client44').jcarousel({
			visible: 4,
			scroll: 1,
			rtl: true,
			easing: 'easeInOutExpo',
			buttonPrevHTML: '<div><i class="icon-chevron-left"></i></div>',
			buttonNextHTML: '<div><i class="icon-chevron-right"></i></div>',
			animation: 800,
			auto: 1,
			wrap: 'last',
			initCallback: mycarousel4_initCallback
		});
		jQuery('#clients.client3').jcarousel({
			visible: 3,
			scroll: 1,
			easing: 'easeInOutExpo',
			buttonPrevHTML: '<div><i class="icon-chevron-left"></i></div>',
			buttonNextHTML: '<div><i class="icon-chevron-right"></i></div>',
			animation: 800,
			auto: 1,
			wrap: 'last',
			initCallback: mycarousel4_initCallback
		});
		jQuery('#clients.client2').jcarousel({
			visible: 2,
			scroll: 1,
			easing: 'easeInOutExpo',
			buttonPrevHTML: '<div><i class="icon-chevron-left"></i></div>',
			buttonNextHTML: '<div><i class="icon-chevron-right"></i></div>',
			animation: 800,
			auto: 1,
			wrap: 'last',
			initCallback: mycarousel4_initCallback
		});
		jQuery('#clients.client1').jcarousel({
			visible: 1,
			scroll: 1,
			easing: 'easeInOutExpo',
			buttonPrevHTML: '<div><i class="icon-chevron-left"></i></div>',
			buttonNextHTML: '<div><i class="icon-chevron-right"></i></div>',
			animation: 800,
			auto: 1,
			wrap: 'last',
			initCallback: mycarousel4_initCallback
		});
	}
	if ($("#galleri")[0]) {
		jQuery('#galleri.galleri4').jcarousel({
			visible: 4,
			scroll: 1,
			easing: 'easeInOutExpo',
			buttonPrevHTML: '<div><i class="icon-chevron-left"></i></div>',
			buttonNextHTML: '<div><i class="icon-chevron-right"></i></div>',
			animation: 800,
			auto: 1,
			wrap: 'last',
			initCallback: mycarousel4_initCallback
		});
		jQuery('#galleri.galleri3').jcarousel({
			visible: 3,
			scroll: 1,
			easing: 'easeInOutExpo',
			buttonPrevHTML: '<div><i class="icon-chevron-left"></i></div>',
			buttonNextHTML: '<div><i class="icon-chevron-right"></i></div>',
			animation: 800,
			auto: 1,
			wrap: 'last',
			initCallback: mycarousel4_initCallback
		});
		jQuery('#galleri.galleri2').jcarousel({
			visible: 2,
			scroll: 1,
			easing: 'easeInOutExpo',
			buttonPrevHTML: '<div><i class="icon-chevron-left"></i></div>',
			buttonNextHTML: '<div><i class="icon-chevron-right"></i></div>',
			animation: 800,
			auto: 1,
			wrap: 'last',
			initCallback: mycarousel4_initCallback
		});
		jQuery('#galleri.galleri1').jcarousel({
			visible: 1,
			scroll: 1,
			easing: 'easeInOutExpo',
			buttonPrevHTML: '<div><i class="icon-chevron-left"></i></div>',
			buttonNextHTML: '<div><i class="icon-chevron-right"></i></div>',
			animation: 800,
			auto: 1,
			wrap: 'last',
			initCallback: mycarousel4_initCallback
		});
	}
	// Fullscreen Slider
	if ($("#slides")[0]) {
		$('#slides').superslides({
			slide_easing: 'easeOutExpo',
			slide_speed: 1800,
			play: true,
			pagination: true
		});
	}
	// Nivo Slider
	if ($("#nivo-slider")[0]) {
		$('#nivo-slider').nivoSlider();
	}
	// Roundabout
	if ($(".roundabout")[0]) {
		$('.roundabout ul').roundabout({
			duration: 500,
			easing: 'easeOutBack',
			enableDrag: true
		});
		$(window).bind("resize", RoundLayout);
	}
	// Modern Slider
	if ($(".modern-slider")[0]) {
		$('.modern-slider').modernSlider({
			effect: 'easeInOutElastic',
			pause: 4000,
			autoplay: true
		});
		$(window).bind("resize", methodToFixLayout);
	}
	// iView Show
	if ($("#iview")[0]) {
		jQuery('#iview').iView({
			pauseTime: 7000,
			pauseOnHover: true,
			directionNav: true,
			directionNavHide: false,
			directionNavHoverOpacity: 0,
			controlNav: true,
			nextLabel: "Next",
			previousLabel: "Prev",
			playLabel: "Play",
			pauseLabel: "Pause",
			timer: "360Bar",
			timerPadding: 3,
			timerColor: "#1ABC9C"
		});
	}
	// Parallax 2
	if ($("#da-slider")[0]) {
		$('#da-slider').cslider();
	}
	// Accordion Slider
	if ($("#ACCslider")[0]) {
		$('#ACCslider').liteAccordion({
			onTriggerSlide: function () {
				this.find('figcaption').fadeOut();
			},
			onSlideAnimComplete: function () {
				this.find('figcaption').fadeIn();
			},
			autoPlay: true,
			pauseOnHover: true,
			theme: 'light',
			easing: 'easeOutExpo',
			rounded: true,
			enumerateSlides: true
		}).find('figcaption:first').show();
	}
	if ($(".progress-bar")[0]) {
		$(".progress-bar > span").each(function () {
			$(this)
				.data("origWidth", $(this).width())
				.width(0)
				.animate({
					width: $(this).data("origWidth")
				}, 1800);
		});
	}
	// prettyPhoto
	if ($("a[data-gal^='photo']")[0]) {
		$("a[data-gal^='photo']").prettyPhoto({
			theme: 'facebook',
			autoplay_slideshow: false,
			overlay_gallery: false,
			show_title: false
		});
	}
	// quicksand
	var $portfolioClone = $(".portfolio").clone();
	$(".filter a").click(function (e) {
		$(".filter li").removeClass("current");
		var $filterClass = $(this).parent().attr("class");
		if ($filterClass === "all") {
			var $filteredPortfolio = $portfolioClone.find("li");
		} else {
			var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
		}
		// Call quicksand
		$(".portfolio").quicksand($filteredPortfolio, {
			duration: 600,
			easing: 'easeOutExpo',
			adjustHeight: 'dynamic'
		}, function () {
			$(".portfolio a[data-gal^='photo']").prettyPhoto({
				theme: 'facebook',
				autoplay_slideshow: false,
				overlay_gallery: false,
				show_title: false
			});
		});
		$(this).parent().addClass("current");
		e.preventDefault();
	});
	// Flickr, You can find your flickr id from idgettr.com
	if ($("#flickr-photos")[0]) {
		$('#flickr-photos').jflickrfeed({
			limit: 12,
			qstrings: {
				id: '52617155@N08'
			},
			itemTemplate: '<li>' + '<a href="{{image_b}}" data-gal="photo[flickr]"><img src="{{image_s}}" alt="{{title}}" /></a>' + '</li>',
			itemCallback: function (data) {
				$("a[data-gal^='photo']").prettyPhoto();
			}
		});
	}
	// Ajax Theme20
	if ($("#contactForm")[0]) {
		$('#contactForm').submit(function () {
			$('#contactForm .error').remove();
			$('.requiredField').removeClass('fielderror');
			$('.requiredField').addClass('fieldtrue');
			var hasError = false;
			$('.requiredField').each(function () {
				if (jQuery.trim($(this).val()) === '') {
					var labelText = $(this).prev('label').text();
					$(this).parent().append('<span class="error">- You forgot to enter your ' + labelText + '.</span>');
					$(this).addClass('fielderror');
					hasError = true;
				} else if ($(this).hasClass('email')) {
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					if (!emailReg.test(jQuery.trim($(this).val()))) {
						var labelText = $(this).prev('label').text();
						$(this).parent().append('<span class="error">- You entered an invalid ' + labelText + '.</span>');
						$(this).addClass('fielderror');
						hasError = true;
					}
				}
			});
			if (!hasError) {
				$('#contactForm').slideDown('normal', function () {
					$("#contactForm #sendMessage").addClass('load-color');
					$("#contactForm #sendMessage").attr("disabled", "disabled").addClass("btn-success").val('Sending message. Please wait...');
				});
				var formInput = $(this).serialize();
				$.post($(this).attr('action'), formInput, function (data) {
					$('#contactForm').slideUp("normal", function () {
						$(this).before('<div class="notification-box notification-box-success"><p><i class="icon-ok"></i>Thanks!</strong> Your email was successfully sent. We check Our email all the time, so we should be in touch soon.</p></div>');
					});
				});
			}
			return false;
		});
	}
	if ($("ul.column1")[0]) {
		var i = 0,
			settings = [{
				duration: 1200,
				easing: 'easeOutBounce'
			}, {
				duration: 1600,
				easing: 'easeOutElastic'
			}, {
				duration: 600,
				easing: 'easeOutQuad'
			}, {
				duration: 1000,
				easing: 'easeOutBack'
			}];
		$('ul.column1, ul.column3').roundabout({
			clickToFocus: false,
			minOpacity: 0,
			minScale: 0,
			minZ: 0,
			duration: 1500,
			shape: 'rollerCoaster'
		});
		$('ul.column2, ul.column4').roundabout({
			clickToFocus: false,
			minOpacity: 0,
			minScale: 0,
			minZ: 0,
			reflect: true,
			duration: 1500,
			shape: 'rollerCoaster'
		});
		$('#advance').click(function () {
			if ($('.column1').data("roundabout").animating || $('.column4').data("roundabout").animating) {
				return false;
			}
			i++;
			i = i++ % settings.length;
			// fade out link
			$(this).fadeTo(400, 0.5);
			$('.column1').roundabout('animateToNextChild', settings[i].duration, settings[i].easing);
			setTimeout(function () {
				$('.column2').roundabout('animateToNextChild', settings[i].duration + 100, settings[i].easing);
			}, 100);
			setTimeout(function () {
				$('.column3').roundabout('animateToNextChild', settings[i].duration + 200, settings[i].easing);
			}, 200);
			setTimeout(function () {
				$('.column4').roundabout('animateToNextChild', settings[i].duration + 250, settings[i].easing, function () {
					$('#advance').fadeTo(400, 1);
				});
			}, 300);
			return false;
		});
	}
	// Theme20 Custom
	jQuery('.animt').each(function () {
		var $curr = jQuery(this);
		var $currOffset = $curr.attr('data-gen-offset');
		if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
			$currOffset = 'bottom-in-view';
		}
		$curr.waypoint(function () {
			$curr.trigger('animt');
		}, {
			triggerOnce: true,
			offset: $currOffset
		});
	});
	jQuery('.animtt').each(function () {
		var $curr = jQuery(this);
		$curr.bind('animt', function () {
			$curr.css('opacity', '');
			$curr.addClass($curr.data('gen'));
		});
	});
	jQuery('.animdelay').each(function () {
		var $curr = jQuery(this);
		$curr.bind('animt', function () {
			var $delayt = $('.animdelay a');
			var $dad = $('.animdelay');
			$delayt.css('opacity', '0');
			var delay = 0;
			$delayt.each(function () {
				var $i = $(this);
				setTimeout(function () {$i.addClass($dad.data('gen')).css('opacity', '');}, delay += 300);
				setInterval(function () {$i.removeClass($dad.data('gen'))}, 4000);
			});
		});
	});
	jQuery('.animtt, .animdelay').each(function () {
		var $curr = jQuery(this);
		var $currOffset = $curr.attr('data-gen-offset');
		if ($currOffset === '' || $currOffset === 'undefined' || $currOffset === undefined) {
			$currOffset = 'bottom-in-view';
		}
		$curr.waypoint(function () {
			$curr.trigger('animt');
		}, {
			triggerOnce: true,
			offset: $currOffset
		});
	});

	if ($("#sticky")[0]){
		var divHeight = $('#sticky').height();
		var stickyNavTop = $('#sticky').offset().top;
		var stickyNav = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > stickyNavTop) {
					$('#sticky').addClass('sticky');
					$('.first-head').css('margin-bottom', divHeight + 'px');
				} else {
					$('#sticky').css('height', 'auto');
					$('.first-head').css('margin-bottom', 'auto');
					$('#sticky').removeClass('sticky');
				}
				if (scrollTop > stickyNavTop + 60) {
					$('.sticky').addClass('small');
				} else {
					$('#sticky').removeClass('small');
				}
			};
		stickyNav();
		$(window).scroll(function () {
			stickyNav();
		});
	}

	if ($(".landing")[0]){
		// Landing Page
		$('body').plusAnchor({
			easing: 'easeInOutExpo',
			speed:  800
		});
		$('.landmenu li').click(function(){
			$('.landmenu li.current').removeClass('current');
			$(this).addClass('current');
		});
	}
});

/* Waypoints */ (function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
/* Smooth */ (function(){function c(){var e=false;if(e){N("keydown",y)}if(t.keyboardSupport&&!e){T("keydown",y)}}function h(){if(!document.body)return;var e=document.body;var i=document.documentElement;var a=window.innerHeight;var f=e.scrollHeight;o=document.compatMode.indexOf("CSS")>=0?i:e;u=e;c();s=true;if(top!=self){r=true}else if(f>a&&(e.offsetHeight<=a||i.offsetHeight<=a)){i.style.height="auto";setTimeout(refresh,10);if(o.offsetHeight<=a){var l=document.createElement("div");l.style.clear="both";e.appendChild(l)}}if(!t.fixedBackground&&!n){e.style.backgroundAttachment="scroll";i.style.backgroundAttachment="scroll"}}function m(e,n,r,i){i||(i=1e3);k(n,r);if(t.accelerationMax!=1){var s=+(new Date);var o=s-v;if(o<t.accelerationDelta){var u=(1+30/o)/2;if(u>1){u=Math.min(u,t.accelerationMax);n*=u;r*=u}}v=+(new Date)}p.push({x:n,y:r,lastX:n<0?.99:-.99,lastY:r<0?.99:-.99,start:+(new Date)});if(d){return}var a=e===document.body;var f=function(s){var o=+(new Date);var u=0;var l=0;for(var c=0;c<p.length;c++){var h=p[c];var v=o-h.start;var m=v>=t.animationTime;var g=m?1:v/t.animationTime;if(t.pulseAlgorithm){g=D(g)}var y=h.x*g-h.lastX>>0;var b=h.y*g-h.lastY>>0;u+=y;l+=b;h.lastX+=y;h.lastY+=b;if(m){p.splice(c,1);c--}}if(a){window.scrollBy(u,l)}else{if(u)e.scrollLeft+=u;if(l)e.scrollTop+=l}if(!n&&!r){p=[]}if(p.length){M(f,e,i/t.frameRate+1)}else{d=false}};M(f,e,0);d=true}function g(e){if(!s){h()}var n=e.target;var r=x(n);if(!r||e.defaultPrevented||C(u,"embed")||C(n,"embed")&&/\.pdf/i.test(n.src)){return true}var i=e.wheelDeltaX||0;var o=e.wheelDeltaY||0;if(!i&&!o){o=e.wheelDelta||0}if(!t.touchpadSupport&&A(o)){return true}if(Math.abs(i)>1.2){i*=t.stepSize/120}if(Math.abs(o)>1.2){o*=t.stepSize/120}m(r,-i,-o);e.preventDefault()}function y(e){var n=e.target;var r=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==l.spacebar;if(/input|textarea|select|embed/i.test(n.nodeName)||n.isContentEditable||e.defaultPrevented||r){return true}if(C(n,"button")&&e.keyCode===l.spacebar){return true}var i,s=0,o=0;var a=x(u);var f=a.clientHeight;if(a==document.body){f=window.innerHeight}switch(e.keyCode){case l.up:o=-t.arrowScroll;break;case l.down:o=t.arrowScroll;break;case l.spacebar:i=e.shiftKey?1:-1;o=-i*f*.9;break;case l.pageup:o=-f*.9;break;case l.pagedown:o=f*.9;break;case l.home:o=-a.scrollTop;break;case l.end:var c=a.scrollHeight-a.scrollTop-f;o=c>0?c+10:0;break;case l.left:s=-t.arrowScroll;break;case l.right:s=t.arrowScroll;break;default:return true}m(a,s,o);e.preventDefault()}function b(e){u=e.target}function S(e,t){for(var n=e.length;n--;)w[E(e[n])]=t;return t}function x(e){var t=[];var n=o.scrollHeight;do{var i=w[E(e)];if(i){return S(t,i)}t.push(e);if(n===e.scrollHeight){if(!r||o.clientHeight+10<n){return S(t,document.body)}}else if(e.clientHeight+10<e.scrollHeight){overflow=getComputedStyle(e,"").getPropertyValue("overflow-y");if(overflow==="scroll"||overflow==="auto"){return S(t,e)}}}while(e=e.parentNode)}function T(e,t,n){window.addEventListener(e,t,n||false)}function N(e,t,n){window.removeEventListener(e,t,n||false)}function C(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function k(e,t){e=e>0?1:-1;t=t>0?1:-1;if(i.x!==e||i.y!==t){i.x=e;i.y=t;p=[];v=0}}function A(e){if(!e)return;e=Math.abs(e);f.push(e);f.shift();clearTimeout(L);var t=f[0]==f[1]&&f[1]==f[2];var n=O(f[0],120)&&O(f[1],120)&&O(f[2],120);return!(t||n)}function O(e,t){return Math.floor(e/t)==e/t}function _(e){var n,r,i;e=e*t.pulseScale;if(e<1){n=e-(1-Math.exp(-e))}else{r=Math.exp(-1);e-=1;i=1-Math.exp(-e);n=r+i*(1-r)}return n*t.pulseNormalize}function D(e){if(e>=1)return 1;if(e<=0)return 0;if(t.pulseNormalize==1){t.pulseNormalize/=_(1)}return _(e)}var e={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:true,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:true,arrowScroll:50,touchpadSupport:true,fixedBackground:true,excluded:""};var t=e;var n=false;var r=false;var i={x:0,y:0};var s=false;var o=document.documentElement;var u;var a;var f=[120,120,120];var l={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var t=e;var p=[];var d=false;var v=+(new Date);var w={};setInterval(function(){w={}},10*1e3);var E=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}();var L;var M=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)}}();var P=/chrome/i.test(window.navigator.userAgent);var H="onmousewheel"in document;if(H&&P){T("mousedown",b);T("mousewheel",g);T("load",h)}})();
/* Parallax */ (function(e,t,n,r){function i(t,n){this.element=t;this.options=e.extend({},o,n);this._defaults=o;this._name=s;this.init()}var s="stellar",o={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:true,verticalScrolling:true,horizontalOffset:0,verticalOffset:0,responsive:true,parallaxBackgrounds:true,parallaxElements:true,hideDistantElements:true,hideElement:function(e){e.hide()},showElement:function(e){e.show()}},u={scroll:{getLeft:function(e){return e.scrollLeft()},setLeft:function(e,t){e.scrollLeft(t)},getTop:function(e){return e.scrollTop()},setTop:function(e,t){e.scrollTop(t)}},position:{getLeft:function(e){return parseInt(e.css("left"),10)*-1},getTop:function(e){return parseInt(e.css("top"),10)*-1}},margin:{getLeft:function(e){return parseInt(e.css("margin-left"),10)*-1},getTop:function(e){return parseInt(e.css("margin-top"),10)*-1}},transform:{getLeft:function(e){var t=getComputedStyle(e[0])[l];return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[4],10)*-1:0},getTop:function(e){var t=getComputedStyle(e[0])[l];return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[5],10)*-1:0}}},a={position:{setLeft:function(e,t){e.css("left",t)},setTop:function(e,t){e.css("top",t)}},transform:{setPosition:function(e,t,n,r,i){e[0].style[l]="translate3d("+(t-n)+"px, "+(r-i)+"px, 0)"}}},f=function(){var t=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,n=e("script")[0].style,r="",i;for(i in n){if(t.test(i)){r=i.match(t)[0];break}}if("WebkitOpacity"in n){r="Webkit"}if("KhtmlOpacity"in n){r="Khtml"}return function(e){return r+(r.length>0?e.charAt(0).toUpperCase()+e.slice(1):e)}}(),l=f("transform"),c=e("<div />",{style:"background:#fff"}).css("background-position-x")!==r,h=c?function(e,t,n){e.css({"background-position-x":t,"background-position-y":n})}:function(e,t,n){e.css("background-position",t+" "+n)},p=c?function(e){return[e.css("background-position-x"),e.css("background-position-y")]}:function(e){return e.css("background-position").split(" ")},d=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};i.prototype={init:function(){this.options.name=s+"_"+Math.floor(Math.random()*1e9);this._defineElements();this._defineGetters();this._defineSetters();this._handleWindowLoadAndResize();this._detectViewport();this.refresh({firstLoad:true});if(this.options.scrollProperty==="scroll"){this._handleScrollEvent()}else{this._startAnimationLoop()}},_defineElements:function(){if(this.element===n.body)this.element=t;this.$scrollElement=e(this.element);this.$element=this.element===t?e("body"):this.$scrollElement;this.$viewportElement=this.options.viewportElement!==r?e(this.options.viewportElement):this.$scrollElement[0]===t||this.options.scrollProperty==="scroll"?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var e=this,t=u[e.options.scrollProperty];this._getScrollLeft=function(){return t.getLeft(e.$scrollElement)};this._getScrollTop=function(){return t.getTop(e.$scrollElement)}},_defineSetters:function(){var t=this,n=u[t.options.scrollProperty],r=a[t.options.positionProperty],i=n.setLeft,s=n.setTop;this._setScrollLeft=typeof i==="function"?function(e){i(t.$scrollElement,e)}:e.noop;this._setScrollTop=typeof s==="function"?function(e){s(t.$scrollElement,e)}:e.noop;this._setPosition=r.setPosition||function(e,n,i,s,o){if(t.options.horizontalScrolling){r.setLeft(e,n,i)}if(t.options.verticalScrolling){r.setTop(e,s,o)}}},_handleWindowLoadAndResize:function(){var n=this,r=e(t);if(n.options.responsive){r.bind("load."+this.name,function(){n.refresh()})}r.bind("resize."+this.name,function(){n._detectViewport();if(n.options.responsive){n.refresh()}})},refresh:function(n){var r=this,i=r._getScrollLeft(),s=r._getScrollTop();if(!n||!n.firstLoad){this._reset()}this._setScrollLeft(0);this._setScrollTop(0);this._setOffsets();this._findParticles();this._findBackgrounds();if(n&&n.firstLoad&&/WebKit/.test(navigator.userAgent)){e(t).load(function(){var e=r._getScrollLeft(),t=r._getScrollTop();r._setScrollLeft(e+1);r._setScrollTop(t+1);r._setScrollLeft(e);r._setScrollTop(t)})}this._setScrollLeft(i);this._setScrollTop(s)},_detectViewport:function(){var e=this.$viewportElement.offset(),t=e!==null&&e!==r;this.viewportWidth=this.$viewportElement.width();this.viewportHeight=this.$viewportElement.height();this.viewportOffsetTop=t?e.top:0;this.viewportOffsetLeft=t?e.left:0},_findParticles:function(){var t=this,n=this._getScrollLeft(),i=this._getScrollTop();if(this.particles!==r){for(var s=this.particles.length-1;s>=0;s--){this.particles[s].$element.data("stellar-elementIsActive",r)}}this.particles=[];if(!this.options.parallaxElements)return;this.$element.find("[data-stellar-ratio]").each(function(n){var i=e(this),s,o,u,a,f,l,c,h,p,d=0,v=0,m=0,g=0;if(!i.data("stellar-elementIsActive")){i.data("stellar-elementIsActive",this)}else if(i.data("stellar-elementIsActive")!==this){return}t.options.showElement(i);if(!i.data("stellar-startingLeft")){i.data("stellar-startingLeft",i.css("left"));i.data("stellar-startingTop",i.css("top"))}else{i.css("left",i.data("stellar-startingLeft"));i.css("top",i.data("stellar-startingTop"))}u=i.position().left;a=i.position().top;f=i.css("margin-left")==="auto"?0:parseInt(i.css("margin-left"),10);l=i.css("margin-top")==="auto"?0:parseInt(i.css("margin-top"),10);h=i.offset().left-f;p=i.offset().top-l;i.parents().each(function(){var t=e(this);if(t.data("stellar-offset-parent")===true){d=m;v=g;c=t;return false}else{m+=t.position().left;g+=t.position().top}});s=i.data("stellar-horizontal-offset")!==r?i.data("stellar-horizontal-offset"):c!==r&&c.data("stellar-horizontal-offset")!==r?c.data("stellar-horizontal-offset"):t.horizontalOffset;o=i.data("stellar-vertical-offset")!==r?i.data("stellar-vertical-offset"):c!==r&&c.data("stellar-vertical-offset")!==r?c.data("stellar-vertical-offset"):t.verticalOffset;t.particles.push({$element:i,$offsetParent:c,isFixed:i.css("position")==="fixed",horizontalOffset:s,verticalOffset:o,startingPositionLeft:u,startingPositionTop:a,startingOffsetLeft:h,startingOffsetTop:p,parentOffsetLeft:d,parentOffsetTop:v,stellarRatio:i.data("stellar-ratio")!==r?i.data("stellar-ratio"):1,width:i.outerWidth(true),height:i.outerHeight(true),isHidden:false})})},_findBackgrounds:function(){var t=this,n=this._getScrollLeft(),i=this._getScrollTop(),s;this.backgrounds=[];if(!this.options.parallaxBackgrounds)return;s=this.$element.find("[data-stellar-background-ratio]");if(this.$element.data("stellar-background-ratio")){s=s.add(this.$element)}s.each(function(){var s=e(this),o=p(s),u,a,f,l,c,d,v,m,g,y=0,b=0,w=0,E=0;if(!s.data("stellar-backgroundIsActive")){s.data("stellar-backgroundIsActive",this)}else if(s.data("stellar-backgroundIsActive")!==this){return}if(!s.data("stellar-backgroundStartingLeft")){s.data("stellar-backgroundStartingLeft",o[0]);s.data("stellar-backgroundStartingTop",o[1])}else{h(s,s.data("stellar-backgroundStartingLeft"),s.data("stellar-backgroundStartingTop"))}c=s.css("margin-left")==="auto"?0:parseInt(s.css("margin-left"),10);d=s.css("margin-top")==="auto"?0:parseInt(s.css("margin-top"),10);v=s.offset().left-c-n;m=s.offset().top-d-i;s.parents().each(function(){var t=e(this);if(t.data("stellar-offset-parent")===true){y=w;b=E;g=t;return false}else{w+=t.position().left;E+=t.position().top}});u=s.data("stellar-horizontal-offset")!==r?s.data("stellar-horizontal-offset"):g!==r&&g.data("stellar-horizontal-offset")!==r?g.data("stellar-horizontal-offset"):t.horizontalOffset;a=s.data("stellar-vertical-offset")!==r?s.data("stellar-vertical-offset"):g!==r&&g.data("stellar-vertical-offset")!==r?g.data("stellar-vertical-offset"):t.verticalOffset;t.backgrounds.push({$element:s,$offsetParent:g,isFixed:s.css("background-attachment")==="fixed",horizontalOffset:u,verticalOffset:a,startingValueLeft:o[0],startingValueTop:o[1],startingBackgroundPositionLeft:isNaN(parseInt(o[0],10))?0:parseInt(o[0],10),startingBackgroundPositionTop:isNaN(parseInt(o[1],10))?0:parseInt(o[1],10),startingPositionLeft:s.position().left,startingPositionTop:s.position().top,startingOffsetLeft:v,startingOffsetTop:m,parentOffsetLeft:y,parentOffsetTop:b,stellarRatio:s.data("stellar-background-ratio")===r?1:s.data("stellar-background-ratio")})})},_reset:function(){var e,t,n,r,i;for(i=this.particles.length-1;i>=0;i--){e=this.particles[i];t=e.$element.data("stellar-startingLeft");n=e.$element.data("stellar-startingTop");this._setPosition(e.$element,t,t,n,n);this.options.showElement(e.$element);e.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null)}for(i=this.backgrounds.length-1;i>=0;i--){r=this.backgrounds[i];r.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null);h(r.$element,r.startingValueLeft,r.startingValueTop)}},destroy:function(){this._reset();this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name);this._animationLoop=e.noop;e(t).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var n=this,r=e(t);r.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name);if(typeof this.options.horizontalOffset==="function"){this.horizontalOffset=this.options.horizontalOffset();r.bind("resize.horizontal-"+this.name,function(){n.horizontalOffset=n.options.horizontalOffset()})}else{this.horizontalOffset=this.options.horizontalOffset}if(typeof this.options.verticalOffset==="function"){this.verticalOffset=this.options.verticalOffset();r.bind("resize.vertical-"+this.name,function(){n.verticalOffset=n.options.verticalOffset()})}else{this.verticalOffset=this.options.verticalOffset}},_repositionElements:function(){var e=this._getScrollLeft(),t=this._getScrollTop(),n,r,i,s,o,u,a,f=true,l=true,c,p,d,v,m;if(this.currentScrollLeft===e&&this.currentScrollTop===t&&this.currentWidth===this.viewportWidth&&this.currentHeight===this.viewportHeight){return}else{this.currentScrollLeft=e;this.currentScrollTop=t;this.currentWidth=this.viewportWidth;this.currentHeight=this.viewportHeight}for(m=this.particles.length-1;m>=0;m--){i=this.particles[m];s=i.isFixed?1:0;if(this.options.horizontalScrolling){c=(e+i.horizontalOffset+this.viewportOffsetLeft+i.startingPositionLeft-i.startingOffsetLeft+i.parentOffsetLeft)*-(i.stellarRatio+s-1)+i.startingPositionLeft;d=c-i.startingPositionLeft+i.startingOffsetLeft}else{c=i.startingPositionLeft;d=i.startingOffsetLeft}if(this.options.verticalScrolling){p=(t+i.verticalOffset+this.viewportOffsetTop+i.startingPositionTop-i.startingOffsetTop+i.parentOffsetTop)*-(i.stellarRatio+s-1)+i.startingPositionTop;v=p-i.startingPositionTop+i.startingOffsetTop}else{p=i.startingPositionTop;v=i.startingOffsetTop}if(this.options.hideDistantElements){l=!this.options.horizontalScrolling||d+i.width>(i.isFixed?0:e)&&d<(i.isFixed?0:e)+this.viewportWidth+this.viewportOffsetLeft;f=!this.options.verticalScrolling||v+i.height>(i.isFixed?0:t)&&v<(i.isFixed?0:t)+this.viewportHeight+this.viewportOffsetTop}if(l&&f){if(i.isHidden){this.options.showElement(i.$element);i.isHidden=false}this._setPosition(i.$element,c,i.startingPositionLeft,p,i.startingPositionTop)}else{if(!i.isHidden){this.options.hideElement(i.$element);i.isHidden=true}}}for(m=this.backgrounds.length-1;m>=0;m--){o=this.backgrounds[m];s=o.isFixed?0:1;u=this.options.horizontalScrolling?(e+o.horizontalOffset-this.viewportOffsetLeft-o.startingOffsetLeft+o.parentOffsetLeft-o.startingBackgroundPositionLeft)*(s-o.stellarRatio)+"px":o.startingValueLeft;a=this.options.verticalScrolling?(t+o.verticalOffset-this.viewportOffsetTop-o.startingOffsetTop+o.parentOffsetTop-o.startingBackgroundPositionTop)*(s-o.stellarRatio)+"px":o.startingValueTop;h(o.$element,u,a)}},_handleScrollEvent:function(){var e=this,t=false;var n=function(){e._repositionElements();t=false};var r=function(){if(!t){d(n);t=true}};this.$scrollElement.bind("scroll."+this.name,r);r()},_startAnimationLoop:function(){var e=this;this._animationLoop=function(){d(e._animationLoop);e._repositionElements()};this._animationLoop()}};e.fn[s]=function(t){var n=arguments;if(t===r||typeof t==="object"){return this.each(function(){if(!e.data(this,"plugin_"+s)){e.data(this,"plugin_"+s,new i(this,t))}})}else if(typeof t==="string"&&t[0]!=="_"&&t!=="init"){return this.each(function(){var r=e.data(this,"plugin_"+s);if(r instanceof i&&typeof r[t]==="function"){r[t].apply(r,Array.prototype.slice.call(n,1))}if(t==="destroy"){e.data(this,"plugin_"+s,null)}})}};e[s]=function(n){var r=e(t);return r.stellar.apply(r,Array.prototype.slice.call(arguments,0))};e[s].scrollProperty=u;e[s].positionProperty=a;t.Stellar=i})(jQuery,this,document);
