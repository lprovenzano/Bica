//Author: Luca Provenzano.

$(document).ready(function(){

	//EFECTOS DE SCROLL EN NAVBAR

	$(window).scroll(function() {
    if ($(".navbar").offset().top > 960) {
        $(".nav.navbar-nav.pull-right>li>a").addClass("newnav");
        $(".navbar.navbar-default.navbar-fixed-top").addClass("no-border");
        $('#logotype').each(function() {
			var path=jQuery(this).attr('src');
			var newPath= path.replace('img/logo.png','img/logo-blue.png');
			$(this).attr('src',newPath);
		});
    } else {
        $(".nav.navbar-nav.pull-right>li>a").removeClass("newnav");
        $(".navbar.navbar-default.navbar-fixed-top").removeClass("no-border");
        $('#logotype').each(function() {
			var path=jQuery(this).attr('src');
			var newPath= path.replace('img/logo-blue.png','img/logo.png');
			$(this).attr('src',newPath);
		});
    }
    	//FUNCION DE INPUT SOLO NÚMEROS
    	$('.onlyNumber').keyup(function (){
            this.value = (this.value + '').replace(/[^0-9]/g, '');
          });	

	});

	//ANIMATE EN ICONOS

	$(window).load(function() {
			$(".row.icons-service>.col-lg-2>p>img").hover(
			  function () {
			    $(this).addClass("animated tada");
			  },
			  function () {
			    $(this).removeClass("animated tada");
			  }
			);

		});	

	//ANIMATE EN ICONOS

	$(window).load(function() {
			$(".row.icons-service-2>.col-lg-2>p>img").hover(
			  function () {
			    $(this).addClass("animated tada");
			  },
			  function () {
			    $(this).removeClass("animated tada");
			  }
			);

		});

});

//PARALLAX

$(window).stellar();
	$('section').css({
        			'height': screen.availHeight + 'px'
    });

