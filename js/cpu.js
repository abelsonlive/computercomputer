$(document).ready(function(){

	var videoResize = function(){
		var width = $(window).innerWidth() * 0.8;
		var height =  ( $(window).innerHeight() - ( $(".menu").height() + $(".logo").height() ) ) - 220;
		$(".youTube").attr({"width": width, "height": height});
	};
	$(".logo, iframe").load(videoResize);
	
	// Fade in artwork on prompt
	var menu = function(){
		var width = $(window).innerWidth();
		if (width > 960) {
			$(".artworkPrompt").off().on("click", function(){
				$(".cover, .artwork").fadeIn();
			})
			$(".infoPrompt").off().on("click", function(){
				$(".cover, .info").fadeIn();
			})
			$(".cover, .artwork, .info").click(function(){
				$(".cover, .artwork, .info").fadeOut();
			});
			videoResize();
		} else {
			$(".artwork, .info, .cover").hide();
			$(".artworkPrompt").off().on("click", function(){
				$(".artwork").slideToggle();
			})
			$(".infoPrompt").off().on("click", function(){
				$(".info").slideToggle();
			})
		}
	}
	menu();

	$(window).resize(function(){
		menu();
	});

})