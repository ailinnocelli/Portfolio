$(document).on("ready", function(){

	$("#menu ul li a").on("click", function(){
		var seccion = $(this).attr("name");
		var posicion = $("#"+seccion).position().top;

		$("body").animate({
			scrollTop:posicion,
		},1500, "easeInOutCubic");
	})

	$(window).scroll(function(){
		var barra = $("body").scrollTop();
		console.log(barra);
		if(barra>=50){
			$("nav").addClass("nav-dos");
		}
		if(barra<50){
			$("nav").removeClass("nav-dos");

		}

	})

})

/* Hacer un logo minimalista, y un logo mas completo, 
o con una imagen para que cuando haga scroll se cambie 
el grande por el chiquito con opacidad se le puede dar
un estilo, uno va a tener opacidad 0 y el otro opacidad 1 
y al hacer scroll se va a ver uno o el otro.
Los botones van a cambiar de color al pasar el mouseover
y al hacer click tambien.
el formulario va a cambiar de color cuando se haga click 
para completarlo.
Al hacer click en cada menu tiene que ir directamente a esa 
parte de la pagina.
Cuando este apretado portfolio x ejemplo que quede marcado con
algun color y un estilo que lo destaque

*/