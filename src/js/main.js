$(function(){

	$('.nav-hotdog').on('click', function(e){
		console.log('hey');

		if ($('.hotdog-menu').hasClass('active')) {
			$('.hotdog-menu').removeClass('active');
			TweenMax.to('.line-1', 0.2, {rotation: 0});
			TweenMax.to('.line-2', 0.2, {rotation: 0, top: '0'});
			TweenMax.to('.hotdog-menu', 0.2, {height: '0%'});
			TweenMax.to('.hotdog-menu__ul', 0.2, {opacity: '0'});
		} else {
			$('.hotdog-menu').addClass('active');
			TweenMax.to('.line-1', 0.2, {rotation: 45});
			TweenMax.to('.line-2', 0.2, {rotation: -45, top: '-7px'});
			TweenMax.to('.hotdog-menu', 0.2, {height: '100vh', background: 'white'});
			TweenMax.to('.hotdog-menu__ul', 0.2, {opacity: '1'});
		}
	});


var killDog = setInterval(function(){
    if (window.innerWidth > 640) {
		$('.hotdog-menu').removeClass('active');
		TweenMax.to('.hotdog-menu', 0.2, {height: 0} );
	}
}, 1);

}());