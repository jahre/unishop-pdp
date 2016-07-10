$(document).ready(function(){

	//Intro Slider

	var slideWidth = $('.intro-slide.gentlemen').width();
	var slideAmount = $('.introslide-container').children();
	var totalWidth = slideWidth * slideAmount.length;
	var leftShift = slideWidth;

	for(var i = 1; i < slideAmount.length; i++){
		$(slideAmount[i]).css('left', leftShift);
		
		leftShift += leftShift;
	};

	$('.intro').on('click', '.right', function(){
		var slideControl = parseInt($(slideAmount[slideAmount.length - 1]).css('left'), 10);
		if(slideControl > 0){
			$('.intro-slide').animate({
			    left: "-="+slideWidth
			});
		}
	});

	$('.intro').on('click', '.left', function(){
		var slideControl = parseInt($(slideAmount[0]).css('left'), 10);
		if(slideControl < 0){
			$('.intro-slide').animate({
			    left: "+="+slideWidth
			});
		}
	});

	//Product sliders (Slick)
	$('#slider1 .slider-fov').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		appendArrows: $('#slider1'),
  		prevArrow: '<div class="intro-move left"></div>',
  		nextArrow: '<div class="intro-move right"></div>'
	});
	$('#slider2 .slider-fov').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		appendArrows: $('#slider2'),
  		prevArrow: '<div class="intro-move left"></div>',
  		nextArrow: '<div class="intro-move right"></div>'
	});

	$(window).on('resize', function(){
      var win = $(this); //this = window

	if (win.width() > 480) { 
		$('#slider1 .slider-fov').slick({
	  		infinite: true,
	  		slidesToShow: 4,
	  		slidesToScroll: 1,
	  		appendArrows: $('#slider1'),
	  		prevArrow: '<div class="intro-move left"></div>',
	  		nextArrow: '<div class="intro-move right"></div>'
		});
		$('#slider2 .slider-fov').slick({
	  		infinite: true,
	  		slidesToShow: 4,
	  		slidesToScroll: 1,
	  		appendArrows: $('#slider2'),
	  		prevArrow: '<div class="intro-move left"></div>',
	  		nextArrow: '<div class="intro-move right"></div>'
		});

      } else if (win.width() <= 480) { 
      	$('#slider1 .slider-fov').slick('unslick');
      	$('#slider2 .slider-fov').slick('unslick');
      }
	});	
});
