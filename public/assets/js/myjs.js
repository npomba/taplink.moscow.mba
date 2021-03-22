$(document).ready(function() {

	/*Табы программ в шапке*/
	$(".header-podmenu-tabs a").mouseenter(function(){
		var $searchId = $( $(this).data("tab") );
		$(".header-podmenu-tabs a").not($(this)).removeClass("active-tab");
		$(this).addClass("active-tab");
		$(".header-podmenu-content").not($searchId).css("display", "none");
		$searchId.css("display", "flex");
	});

	/*работа подменю в десктопе*/
	$(".header-podmenu-toggle").click(function(){
		$(this).toggleClass('opened');
		$(".header-podmenu").fadeToggle(300);
	    $(".header-overlay").fadeToggle(300);
	});

	$(document).mouseup(function (e) {	
	    var container = $("header");
		if (!container.is(e.target) && container.has(e.target).length === 0){
	        $(".header-podmenu").fadeOut(300);
	        $(".header-overlay").fadeOut(300);
	        $(".header-podmenu-toggle").removeClass('opened');
	    }
	});

	$(".header-overlay").click(function(){
		$(".header-podmenu").fadeOut(300);
	    $(".header-overlay").fadeOut(300);
	    $(".header-podmenu-toggle").removeClass('opened');
	});

	// Слайдер клиентов
	if($('.clients-slider').length){
		$('.clients-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			speed: 800,
		  	arrows: false,
	      	dots: true,
	      	responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		  ]
		});
	}

	/*Табы программ*/
	$(".program-options-tabs a").click(function(e){
		e.preventDefault();
		var $searchId = $( $(this).data("tab") );
		$(".program-options-tabs a").not($(this)).removeClass("active-tab");
		$(this).addClass("active-tab");
		$(".program-options-section").find(".program-tabs-content").not($searchId).css("display", "none");
		$searchId.css("display", "block");
	});

	/*Табы программ внутренние*/
	$(".program-options-block-tabs a").click(function(e){
		e.preventDefault();
		var $searchId = $( $(this).attr("href") );
		$(this).parents(".program-options-block-tabs").find("a").not($(this)).removeClass("active");
		$(this).addClass("active");
		$(this).parents(".program-tabs-content").find(".program-options-block").not($searchId).css("display", "none");
		$searchId.css("display", "block");
	});

	// Сдвигание плейсхолдера
	$('.simple-form input, .simple-form textarea').keyup(function(){
		if( $(this).val() !== '' && $(this).val().length > 0 ){
			$(this).addClass('texted');
		}
		else{
	   		$(this).removeClass('texted');
		}
	});

	/*работа подменю в мобилке*/
	$(".header-buter").click(function(){
		$(this).toggleClass('opened');
		$("html").toggleClass('non-overflow');
		$(".header-mobile-podmenu").slideToggle(300, function(){
			$(".js-header-mobile").removeClass("opened");
		});
	});

	$(".mobile-second-toggle").click(function(e){
		e.preventDefault();
		$(".header-mobile-second").addClass("opened");
	});

	$(".menu-back-link").click(function(){
		$(this).closest(".js-header-mobile").removeClass("opened");
	});

	$(".mobile-third-toggle").click(function(e){
		e.preventDefault();
		$(this).siblings(".header-mobile-third").addClass("opened");
	});

	/*модалка*/
	if($('.popup-open').length){
		$('.popup-open').magnificPopup({
		  removalDelay: 300, 
		  fixedContentPos: true,
		  callbacks: {
		    beforeOpen: function() {
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  midClick: true 
		});	
	}

	// Видео
    if($('.popup-youtube').length){
		$('.popup-youtube').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: true,
	    });
	}

	// Круговая диаграмма
	if( $(".circle-js").length > 0 ){
		$('.circle-js').circleProgress({
		    startAngle: -Math.PI / 4 * -8,
		    size: 124,
		    thickness: 3,
		    emptyFill: '#E6E6E6',
		    fill: '#FF3535'
		});
	}

	// Круговая диаграмма большая
	if( $(".circle-js-big").length > 0 ){
		$('.circle-js-big').circleProgress({
		    startAngle: -Math.PI / 4 * -8,
		    size: 302,
		    thickness: 3,
		    emptyFill: '#333230',
	    	fill: '#FF3535'
		});
	}

	/*вопросы*/
	$('.faq-block').click(function(){
	    if ( $(window).width() > '767' ){
	     	$('.faq-block').not($(this)).removeClass('opened');
	     	$('.faq-answer').not($(this).find('.faq-answer')).slideUp(300);
	     	$(this).toggleClass('opened');
	     	$(this).find('.faq-answer').slideToggle(300);
	    }
	    else{
	     	$(this).toggleClass('opened');
     		$(this).find('.faq-answer').slideToggle(300);
	    }
	});

	/*Табы цен программ для мобилки*/
	$(".program-price-tabs a").click(function(e){
		e.preventDefault();
		var $searchId = $( $(this).attr("href") );
		$(".program-price-tabs a").not($(this)).removeClass("active");
		$(this).addClass("active");
		$(".program-price-block").not($searchId).css("display", "none");
		$searchId.css("display", "block");
	});

	/*Табы шагов для мобилки*/
	$(".process-step-tabs a").click(function(e){
		e.preventDefault();
		var $searchId = $( $(this).attr("href") );
		$(".process-step-tabs a").not($(this)).removeClass("active");
		$(this).addClass("active");
		$(".process-step-block").not($searchId).css("display", "none");
		$searchId.css("display", "block");
	});

	/*открытие модулей для мобилки*/
	$(".training-modul").click(function(){
		$(this).toggleClass('opened');
     	$(this).next('.training-content').slideToggle(300);
	});

	/*Закрыть модалку*/
	$(".close-popup").click(function(e){
		e.preventDefault();
		$(".mfp-close").click();
	});

});

var widthScreen = $(window).width();

// Слайдер програм для мобилки
if($('.mini-programs-slider').length){
	var $carousel = $('.mini-programs-slider');

	function showSlider($widthScreen) {
		if ($widthScreen <= "480") {
			if (!$carousel.hasClass('slick-initialized')) {
				$carousel.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 800,
			  		arrows: false,
			  		dots: true,
			  		rows: 5,
			  		slidesPerRow: 1,
			  		adaptiveHeight: true,
				});
			}
		} else {
			if ($carousel.hasClass('slick-initialized')) {
				$carousel.slick('unslick');
			}
		}   
	}
	
	$(window).ready(showSlider(widthScreen)).resize(
		function () {
			var widthScreen = $(window).width();
			showSlider(widthScreen);
		}
	);
}