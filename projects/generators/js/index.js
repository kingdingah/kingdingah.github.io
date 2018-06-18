$(document).ready(function()
{
	$('#right1').hide();
	$('#right2').hide();
	$('#right3').hide();
	$('#right4').hide();
	$('#right5').hide();
	$('#right6').hide();

	$("#option3").click(function(){
		$("#generate-btn").focus();
	})

	$('[data-toggle="popover"]').popover();

	$('#card_button1').click(function()
	{
		$('div.main-two .cah-title').animate({
			'marginTop':'185px'
		});
		$("#generate-btn").addClass('gen-card1');
		$("#generate-btn").removeClass('generate-btn');
		$("#generate-btn").removeClass('gen-card2');
		$("#generate-btn").removeClass('gen-card3');

		$('.txt-input1').show();
		$('#white-card1').fadeIn();
		$('#white-card2').fadeOut();
		$('#white-card3').fadeOut();
		$('.txt-input2').hide();
		$('.txt-input3').hide();
		$('div.close-gen').animate({
			'bottom':'40px'
		});

		$('black-card-text1').show();
		$('black-card-text2').hide();
		$('black-card-text3').hide();
	});

	$('#card_button2').click(function()
	{
		$('div.main-two .cah-title').animate({
			'marginTop':'145px'
		});
		$("#generate-btn").addClass('gen-card2');
		$("#generate-btn").removeClass('generate-btn');
		$("#generate-btn").removeClass('gen-card1');
		$("#generate-btn").removeClass('gen-card3');

		$('.txt-input2').show();
		$('#white-card2').fadeIn();
		$('#white-card1').fadeIn();
		$('#white-card3').fadeOut();
		$('.txt-input3').hide();
		$('.txt-input1').show();
		$('div.close-gen').animate({
			'bottom':'20px'
		});

		$('black-card-text2').show();
		$('black-card-text1').hide();
		$('black-card-text3').hide();
	});

	$('#card_button3').click(function()
	{
		$('div.main-two .cah-title').animate({
			'marginTop':'105px'
		});
		$("#generate-btn").addClass('gen-card3');
		$("#generate-btn").removeClass('generate-btn');
		$("#generate-btn").removeClass('gen-card2');
		$("#generate-btn").removeClass('gen-card1');

		$('.txt-input3').show();
		$('#white-card3').fadeIn();
		$('#white-card2').fadeIn();
		$('#white-card1').fadeIn();
		$('.txt-input2').show();
		$('.txt-input1').show();
		$('div.close-gen').animate({
			'bottom':'0'
		});

		$('black-card-text3').show();
		$('black-card-text2').hide();
		$('black-card-text1').hide();
	});

	var windowWidth = $(window).width();
	if(windowWidth > 990)
	{
		$('#leftside').addClass('leftside-desktop');
		$('.leftside-desktop').css({
			'left':'25%'
		});
		$('#leftside').removeClass('leftside-mobile');
	}
	if(windowWidth < 990)
	{
		$('#leftside').removeClass('leftside-desktop');
		$('.leftside-mobile').css({
			'left':'0'
		});
		$('#leftside').addClass('leftside-mobile');
	}

	$(window).resize(function() {
		var windowWidth = $(window).width();
		if(windowWidth > 990)
		{
			$('#leftside').addClass('leftside-desktop');
			$('.leftside-desktop').css({
				'left':'25%'
			});
			$('#leftside').removeClass('leftside-mobile');
		}
		if(windowWidth < 990)
		{
			$('#leftside').removeClass('leftside-desktop');
			$('.leftside-mobile').css({
				'left':'0'
			});
			$('#leftside').addClass('leftside-mobile');
		}
	});

	//GENERATOR BUTTONS
	$('#option1').click(function(){
		var viewportHeight = $(window).height();
		$("#underside1").show(200, function(){
				window.scroll({
				top: viewportHeight * 2,
				left: 0,
				behavior: 'smooth'
			});
		});
		$("#underside2").hide(200);
	});

	$('#option2').click(function(){
		var viewportHeight = $(window).height();
		$("#underside2").show(200, function(){
				window.scroll({
				top: viewportHeight * 2,
				left: 0,
				behavior: 'smooth'
			});
		});
		$("#underside1").hide(200);
	});

	//KEY UP
	$('.txt-input1').keyup(function(event)
	{
		newText = event.target.value;
		$('#white-card-text1').text(newText);

	});

	$('.txt-input2').keyup(function(event)
	{
		newText = event.target.value;
		$('#white-card-text2').text(newText);

	});

	$('.txt-input3').keyup(function(event)
	{
		newText = event.target.value;
		$('#white-card-text3').text(newText);

	});

	$('#generate-btn').click(function()
	{
		console.log("step 1");

		if($('#generate-btn').hasClass('gen-card1'))
		{
			var wordsArray1 =
							["First thing I like to do on a Sunday morning is <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"The one thing I would bring to a fight would be <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"Turns out the Krabby Patty's secret ingredient is: <span class='choice1'>" + $('.txt-input1').val() + "</span>!",
							"I summon my <span class='choice1'>" + $('.txt-input1').val() + "</span> in attack mode!",
							"This year the national lottery had to replace the cash sum of one million dollas with <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"Times are hard, and dad could only gives us <span class='choice1'>" + $('.txt-input1').val() + "</span> for breakfast this morning",
							"Getting my penis stuck in <span class='choice1'>" + $('.txt-input1').val() + "</span> is one of the worst experiences of my life, yes I came.",
							"I broke six ribs while <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"I'd suck a dick for <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"Nothing says 'true love' quite like <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"I invested in the new crypto-currency: <span class='choice1'>" + $('.txt-input1').val() + "</span> coin.",
							"Genius is 10% inspiration and 90% <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"<span class='choice1'>" + $('.txt-input1').val() + "</span>: America's Number 1 Comedy.",
							"At my father's funeral, I put <span class='choice1'>" + $('.txt-input1').val() + "</span> in the casket with him.",
							"If Kirby swallowed me, he would get the power of <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"Today's soup is Cream of <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"What's inside my white, windowless van?<br><span class='choice1'>" + $('.txt-input1').val() + "</span>." ,
							"Hey, let's start a kickstarter for <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"This week, the Teletubbies teach us about <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"You. Me. <span class='choice1'>" + $('.txt-input1').val() + "</span>. Now.",
							"My new favorite sexual position is <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"I can’t help but to think about <span class='choice1'>" + $('.txt-input1').val() + "</span> when I cum.",
							"Tonight's Final Jeopardy category will be <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"Indiana Jones and the Temple of <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"That moment, when <span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"Hey man, what is on McDonald's newest sandwich?<br><span class='choice1'>" + $('.txt-input1').val() + "</span>.",
							"Sir, you have the right to remain <span class='choice1'>" + $('.txt-input1').val() + "</span> ",
							"Last night when I was driving home, I swear I heard the sound of <span class='choice1'>" + $('.txt-input1').val() + "</span> coming from my trunk."
							];

			var rand1 = wordsArray1[Math.floor(Math.random() * wordsArray1.length)];

			console.log("step 2");

			if($('.txt-input1').val().length < 1)
			{
				console.log("step 3");
				$("#alert-text").html("You are missing some text dummy.")
				$(".alert").animate({
					'bottom':'0'
				}, 300);
				$("div.footer-btn").animate({
					'bottom':'75px',
				}, 300);
			}
			else
			{
				var windowWidth = $(window).width();

				if(windowWidth < 990)
				{
					$(".rightover").fadeIn();
					$("#black-card-over").css({
						"top":"100%"
					});
					$('#black-card-over').animate({
						'top':'0',
						'opacity':'1'
					}, 300);

					$("#black-card-text").html(rand1);
					$("#black-card-over").css(
					{
						"width":"75%"
					});

					var viewportHeight = $(window).height();
					window.scroll
					({
						top: viewportHeight * 3,
						left: 0,
						behavior: 'smooth'
					});
				}
				else
				{
					$("#black-card-text-under").html(rand1);
					$(".leftside-desktop").animate({
						'left':'0',
					}, 300);
					$(".rightunder").animate({
						'left':'0',
					}, 300);
				}
			}
		}
		else
		{
			$('div.footer-btn').animate({
				'bottom':'75px'
			}, 300);
			$("#alert-text").html("No Card Selected");
			$(".alert").animate({
				'bottom':'0',
			}, 300);
		}
	});

	$('.gen-card2').click(function()
	{
		var wordsArray2 =
						["<span class='choice1'>" + $('.txt-input1').val() + "</span> fucking <span class='choice2'>" + $('.txt-input2').val() + "</span>? I should not be turned on by this.",
						"Nothing stimulates my <span class='choice1'>" + $('.txt-input1').val() + "</span> like <span class='choice2'>" + $('.txt-input2').val() + "</span>.",
						"Experts agree that <span class='choice1'>" + $('.txt-input1').val() + "</span> was responsible for the destruction of <span class='choice2'>" + $('.txt-input2').val() + "</span>.",
						"There's a whole community dedicated to erotic fan fiction involving <span class='choice1'>" + $('.txt-input1').val() + "</span> and <span class='choice2'>" + $('.txt-input2').val() + "</span>.",
						"Legend of Zelda: The <span class='choice1'>" + $('.txt-input1').val() + "</span> of <span class='choice2'>" + $('.txt-input2').val() + "</span>.",
						"The first rule of <span class='choice1'>" + $('.txt-input1').val() + "</span>: You do not talk about <span class='choice2'>" + $('.txt-input2').val() + "</span>.",
						"Name: <span class='choice1'>" + $('.txt-input1').val() + "</span>. Cause of death: <span class='choice2'>" + $('.txt-input2').val() + "</span>."
						];

		var rand2 = wordsArray2[Math.floor(Math.random() * wordsArray2.length)];

		if($('.txt-input1').val().length < 1 || $('.txt-input2').val().length < 1)
		{
			$(".modal-text").html("You are missing some text dummy.")
			$("#alertBox").modal("show");
		}
		else
		{
			$(".rightunder").show();
			$("#black-card-text").html(rand2);

			var viewportHeight = $(window).height();
			window.scroll
			({
				top: viewportHeight * 3,
				left: 0,
				behavior: 'smooth'
			});
		}
	});

	$('.gen-card3').click(function()
	{
		var wordsArray3 =
						["Side effects include:_____, ______, and _______.",
						"You guys, I saw this crazy movie last night. It opens on __________, and then there's some stuff about __________, and then it ends with __________.",
						"I went from __________ to __________, all thanks to __________.",
						"Make a haiku."
						];

		var rand3 = wordsArray3[Math.floor(Math.random() * wordsArray3.length)];

		if($('.txt-input1').val().length < 1 || $('.txt-input2').val().length < 1 || $('.txt-input3').val().length < 1)
		{
			$(".modal-text").html("You are missing some text dummy.")
			$("#alertBox").modal("show");
		}
		else
		{
			$(".rightunder").show();
			$("#black-card-text").html(rand3);

			var viewportHeight = $(window).height();
			window.scroll
			({
				top: viewportHeight * 3,
				left: 0,
				behavior: 'smooth'
			});
		}
	});

	$('.clear-btn').click(function()
	{
		$(".txt-input1").val("");
		$(".txt-input2").val("");
		$(".txt-input3").val("");
		$(".txt-input1").fadeOut();
		$(".txt-input2").fadeOut();
		$(".txt-input3").fadeOut();
		$(".txt-input1").attr("placeholder", "Card #1").blur();
		$(".txt-input2").attr("placeholder", "Card #2").blur();
		$(".txt-input3").attr("placeholder", "Card #3").blur();
		$('div.main-two .cah-title').animate({
			'marginTop':'200px'
		});
		$('div.close-gen').animate({
			'bottom':'50px'
		});

		$(".rightunder").animate({
			'left':'100%',
		}, 300);

		$(".leftside-desktop").animate({
			'left':'25%',
		}, 300);

		$(".leftside-mobile").animate({
			'left':'25%',
		}, 300);
	});

	$(".rightover a.cross").click(function()
	{;
		$(".rightover").fadeOut(200);
	})

	$('.close-btn').click(function()
	{
		$(".underside").hide(300, function(){
				window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		});
		$(".txt-input1").val("");
		$(".txt-input2").val("");
		$(".txt-input3").val("");
		$(".txt-input1").fadeOut();
		$(".txt-input2").fadeOut();
		$(".txt-input3").fadeOut();
		$('div.main-two .cah-title').animate({
			'marginTop':'175px'
		});
		$('div.close-gen').animate({
			'bottom':'50px'
		});
		$('#black-card').animate({
			'marginTop':'100px'
		});
	});

	/* ScrollSpy */
	var targetOffset = $("#underside1").offset().top;

	var $w = $(window).scroll(function(){
	    if ( $w.scrollTop() > targetOffset )
			{

	    }
			else
			{

	    }
	});

	$("#txt-input").keyup(function(event)
	{
	  if (event.keyCode === 13)
		{
	      $("#generate-btn").click();
	  }
	});
});

var windowWidth = $(window).width();
if(windowWidth < 990)
{
	$(".leftside").animate({
		'left':'0%',
	}, 300);
}
if(windowWidth > 990)
{
	$(".leftside").animate({
		'left':'25%',
	}, 300);
}
