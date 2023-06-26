$(document).ready(function() {
	$("#title").html("jQuery - School of Net");
	$("#desc").html("Starting with jQuery Framework");

	$('h1').css('color','red');

	//EVENTO BOTAO
	$("button").click(function(){
		$(this).css('padding','1rem');
	})

	//SELETORES
	//Pegando o conteúdo e adicionando mais texto
	let bird = $("#bird").html();
	$("#bird").html(bird + " in the sky");
	$(".class-bird").css("color", "orange");
	$(".class-bird:first").css("color", "blue");
	$(".class-bird:last").css("color", "red");

	//EVENTOS NO MOUSE
	$("#click").click(function() {
		$(this).html("OK");
	});

	$("#double-click").dblclick(function() {
		$(this).html("OK");
	});

	$("#mouse-enter").mouseenter(function() {
		$(this).html("OK");
	});

	$("#mouse-leave").mouseleave(function() {
		$(this).html("OK");
	});

	//EVENTOS NO TECLADO
	$("#keypress").keypress(function() {
		$("#eventKey").html("keypress - " + $(this).val())
	});

	$("#keydown").keydown(function() {
		$("#eventKey").html("keydown - " + $(this).val())
	});

	$("#keyup").keyup(function() {
		$("#eventKey").html("keyup - " + $(this).val())
	});

	// MANIPULANDO CSS - ADICIONANDO CLASSE
	$("#header").addClass("header");
	$("#header").css("height", "100px");
	$("#title").css("margin", "0px");
	$("#title").css("padding-top", "20px");

	// ACRESCENTAR ELEMENTOS NO HTML
	$("main").append("<h4>Test Append</h4>");
	$("main").prepend("<h4>Test Prepend</h4>");
	$("main").append("<p id=test>test show, hide and toggle</p>");

	$("main").append("<button id='showbtn'>Show</button>");
	$("main").append("<button id='hidebtn'>Hide</button>");
	$("main").append("<button id='togglebtn'>Toggle</button>");

	$("#showbtn").click(function() {
		$("#test").show();
	});

	$("#hidebtn").click(function() {
		$("#test").hide();
	});

	$("#togglebtn").click(function() {
		$("#test").toggle();
	});

	// ANIMAÇÃO
	$("main").append("<p id=test-animate>Animate Test!</p>");
	$("main").append("<button id='animatebtn'>Animate</button>");
	$("#test-animate").css("border", "1px solid red");
	$("#animatebtn").click(function() {
		$("#test-animate").animate({
			"font-size": "3em",
			borderWidth: "50px"
		}, 2000, function() {
			$(this).css("border-color", "red");
		});
	});

	//Slide
	$("main").append("<p id=test-slide>Test slideDown(), slideUp(), slideToggle()</p>");
	$("main").append("<button id='downbtn'>slideDown</button>");
	$("main").append("<button id='upbtn'>slideUp</button>");
	$("main").append("<button id='slidetogglebtn'>slideToggle</button>");
	$("#test-slide").css("border", "1px solid red");

	$("#downbtn").click(function() {
		$("#test-slide").slideDown();
	});

	$("#upbtn").click(function() {
		$("#test-slide").slideUp();
	});

	$("#slidetogglebtn").click(function() {
		$("#test-slide").slideToggle();
	});

	$("form").submit(function(){
		
	})
});