$(function(){

// Баннер
	flag = 1;
	function next(){
		if(flag == 1){
			$('.control span').removeClass('on');
			$('.control span[rel=2]').addClass('on');
			$('.slider ul').animate({marginLeft: -1352}, 1000);
			$('.section ul').animate({marginLeft: -1440}, 800);
			$('#prev').css('display', 'block');
			flag++;
			return;
		}else if(flag == 2){
			$('.control span').removeClass('on');
			$('.control span[rel=3]').addClass('on');
			$('.slider ul').animate({marginLeft: -2704}, 1000);
			$('.section ul').animate({marginLeft: -2880}, 800);
			$('#next').css('display', 'none');
			return;
		}
	};
	function prev(){
		if(flag == 2){
			$('.control span').removeClass('on');
			$('.control span[rel=2]').addClass('on');
			$('.slider ul').animate({marginLeft: -1352}, 1000);
			$('.section ul').animate({marginLeft: -1440}, 800);
			$('#next').css('display', 'block');
			flag--;
			return;
		}else if(flag == 1){
			$('.control span').removeClass('on');
			$('.control span[rel=1]').addClass('on');
			$('.slider ul').animate({marginLeft: 0}, 1000);
			$('.section ul').animate({marginLeft: 0}, 800);
			$('#prev').css('display', 'none');
			return;
		}
	};

	$('#next').on('click', function(){
		next();
	});
	$('#prev').on('click', function(){
		prev();
	});

	$('.control span').on('click', function(){
		$('.control span').removeClass('on')
		$(this).addClass('on');
		var rel = $(this).attr('rel');
		switch(rel){
			case '1':
				$('.slider ul').animate({marginLeft: 0}, 1000);
				$('.section ul').animate({marginLeft: 0}, 800);
				$('#prev').css('display', 'none');
			break;
			case '2':
				$('.slider ul').animate({marginLeft: -1352}, 1000);
				$('.section ul').animate({marginLeft: -1440}, 800);
				$('#prev').css('display', 'block');
			break;
			case '3':
				$('.slider ul').animate({marginLeft: -2704}, 1000);
				$('.section ul').animate({marginLeft: -2880}, 800);
				$('#next').css('display', 'none');
			break;
		};
	});
// Баннер
	
	$('.innerCont').mouseenter(function(){
		var rel = $(this).attr('rel');
		switch(rel){
			case 'one': $('#one').fadeIn(); break;
			case 'two': $('#two').fadeIn(); break;
			case 'free': $('#free').fadeIn(); break;
			case 'four': $('#four').fadeIn(); break;
		};
	});
	$('.innerCont').mouseleave(function(){
		$('.hiddenCont').fadeOut();
	});
})
