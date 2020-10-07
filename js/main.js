

window.onload = function() {

	const mediaQuery = window.matchMedia('(max-width: 500px)')
		
		// Check if the media query is true
		if (mediaQuery.matches) {
		  // Then trigger an alert
		  activar();
		}

	var conteiner = $(".conteiner");
	var profile = $(".conteiner");
	var resume = $(".resume");
	var portfolio = $(".portfolio");
	var contact = $(".contact");
	var activo = profile;
	var activo_id=$("#profile");

	var activo_dark= false;

	
	resume.hide();
	portfolio.hide();
	contact.hide();

	
	$("#profile").click(function(event) {
		if(activo!=profile){
			activo_id=$("#profile");
			profile.slideDown();
			activo.slideDown();
			activo.hide();
			activo=profile;
			$("nav a").removeClass("clasehover clasehover_dark");
			if(activo_dark==true){
				$(this).addClass("clasehover_dark");
			}else{
				$(this).addClass("clasehover");
			};
			

		}
	});

	$("#resume").click(function(event) {
		if(activo!=resume){
			activo_id=$("#resume");
			activo.slideUp("slow");
			activo.hide("slow");
			resume.slideUp("slow");
			resume.show("slow");
			activo=resume;
			$("nav a").removeClass("clasehover clasehover_dark");
			if(activo_dark==true){
				$(this).addClass("clasehover_dark");
			}else{
				$(this).addClass("clasehover");
			};
		}
	});

	$("#portfolio").click(function(event) {
		if(activo!=portfolio){
			activo_id=$("#portfolio");
			activo.slideDown("slow");
			activo.hide("slow");
			portfolio.slideDown("slow");
			portfolio.show("slow");
			activo=portfolio;
			$("nav a").removeClass("clasehover clasehover_dark");
			if(activo_dark==true){
				$(this).addClass("clasehover_dark");
			}else{
				$(this).addClass("clasehover");
			};
		}
	});

	$("#contact").click(function(event) {
		if(activo!=contact){
			activo_id=$("#contact");
			activo.hide("slow");
			contact.show("slow");
			activo=contact;
			$("nav a").removeClass("clasehover clasehover_dark");
			if(activo_dark==true){
				$(this).addClass("clasehover_dark");
			}else{
				$(this).addClass("clasehover");
			};
		}
	});

	$("#buton_dark").click(function(event){
		if(activo_dark!=true){
			activar();
		}
		else{
			desactivar();
		}
	});

	function activar(){
			activo_dark=true;
			$("#back").addClass("back_dark");
			$("#contenedor-info").addClass("contenedor-info-dark");
			$("h1").addClass("h1_dark");
			$("i").addClass("i_dark");	
			$("header a").addClass("navdark");
			activo_id.removeClass("clasehover");
			activo_id.addClass("clasehover_dark");
			FbotonOn();
		};

	function desactivar(){
			activo_dark=false;
			$("#back").removeClass("back_dark");
			$("#contenedor-info").removeClass("contenedor-info-dark");
			$("h1").removeClass("h1_dark");
			$("i").removeClass("i_dark");	
			$("header a").removeClass("navdark");
			activo_id.addClass("clasehover");
			activo_id.removeClass("clasehover_dark");
			FbotonOn();
	}

	function FbotonOn() {
	  var uno = document.getElementById('botonOn');
      if (uno.innerHTML == 'Dark theme:off'){
      	  uno.value="";
	      uno.innerHTML = 'Dark theme:on';
	      uno.style.color="black";
	      
      }
	  else {
	  	uno.value="";
	  	uno.innerHTML = 'Dark theme:off';
	  	uno.style.color="white";

	  }; 
	}

	$(".menu-movil").click(function(event){
		$("nav").toggle("slow");
	});

};


