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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG5cblx0JCgnLm5hdi1ob3Rkb2cnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0XHRjb25zb2xlLmxvZygnaGV5Jyk7XG5cblx0XHRpZiAoJCgnLmhvdGRvZy1tZW51JykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG5cdFx0XHQkKCcuaG90ZG9nLW1lbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRUd2Vlbk1heC50bygnLmxpbmUtMScsIDAuMiwge3JvdGF0aW9uOiAwfSk7XG5cdFx0XHRUd2Vlbk1heC50bygnLmxpbmUtMicsIDAuMiwge3JvdGF0aW9uOiAwLCB0b3A6ICcwJ30pO1xuXHRcdFx0VHdlZW5NYXgudG8oJy5ob3Rkb2ctbWVudScsIDAuMiwge2hlaWdodDogJzAlJ30pO1xuXHRcdFx0VHdlZW5NYXgudG8oJy5ob3Rkb2ctbWVudV9fdWwnLCAwLjIsIHtvcGFjaXR5OiAnMCd9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnLmhvdGRvZy1tZW51JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0VHdlZW5NYXgudG8oJy5saW5lLTEnLCAwLjIsIHtyb3RhdGlvbjogNDV9KTtcblx0XHRcdFR3ZWVuTWF4LnRvKCcubGluZS0yJywgMC4yLCB7cm90YXRpb246IC00NSwgdG9wOiAnLTdweCd9KTtcblx0XHRcdFR3ZWVuTWF4LnRvKCcuaG90ZG9nLW1lbnUnLCAwLjIsIHtoZWlnaHQ6ICcxMDB2aCcsIGJhY2tncm91bmQ6ICd3aGl0ZSd9KTtcblx0XHRcdFR3ZWVuTWF4LnRvKCcuaG90ZG9nLW1lbnVfX3VsJywgMC4yLCB7b3BhY2l0eTogJzEnfSk7XG5cdFx0fVxuXHR9KTtcblxuXG52YXIga2lsbERvZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjQwKSB7XG5cdFx0JCgnLmhvdGRvZy1tZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFR3ZWVuTWF4LnRvKCcuaG90ZG9nLW1lbnUnLCAwLjIsIHtoZWlnaHQ6IDB9ICk7XG5cdH1cbn0sIDEpO1xuXG59KCkpOyJdfQ==
