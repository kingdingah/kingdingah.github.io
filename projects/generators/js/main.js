$(document).ready(function()
{
	var flag = true;

	$("#floatup-activate").click(function()
	{
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});

	$("#footer-activate").click(function()
	{
		if(flag)
		{
			$('#footer-activate').css({
				'color':'#f7f7f7',
				'background-color':'rgba(0,0,0,0.1)'
			});
			$('#footer-activate').animate({},
				{
					step: function(now,fx)
					{
					  $(this).css('-webkit-transform','rotate('+now+'deg)');
					  $(this).css('-moz-transform','rotate('+now+'deg)');
					  $(this).css('transform','rotate('+now+'deg)');
					},
					duration:'slow'
				},'linear');

			$('#floatup-activate').css({
				'color':'#f7f7f7',
				'background-color':'rgba(0,0,0,0.1)'
			});
			$('#footer-toggle').removeClass('fa-angle-up');
			$('#footer-toggle').addClass('fa-angle-down');
			$('#blackoverlay').fadeIn(200);

			flag = false;
		}
		else
		{
			$('#footer-activate').css({
				'color':'#333',
				'background-color':'rgba(0,0,0,0.1)'
			});
			$('#floatup-activate').css({
				'color':'#333',
				'background-color':'rgba(0,0,0,0.1)'
			});
			$('#footer-toggle').removeClass('fa-angle-down');
			$('#footer-toggle').addClass('fa-angle-up');
			$('#blackoverlay').fadeOut(200);
			$('#footer-container').animate({
				'height':'0px'
			}, 200);
			$('#contact-section').animate({
				'left':'0',
				'opacity':'1'
			});
			$('#about-section').animate({
				'left':'0',
				'opacity':'1'
			});

			flag = true;
		}

		$('.main-footer').slideToggle(200);
		$('#footer-container').animate({
				'height':'75px'
		}, 200);
	});

	//CONTACT SWITCH
	$("#contact-section").click(function()
	{
		$('#footer-container').animate({
			'height':'175px'
		});
		$('#contact-section').animate({
			'opacity':'1'
		});
		$('#other-section').animate({
			'opacity':'0.35'
		});
		$('#about-section').animate({
			'opacity':'0.35'
		});
		$('#other-content').hide(200);
		$('#about-content').hide(200);
		$('#contact-content').show(200);
	});

	//ABOUT SWITCH
	$("#about-section").click(function()
	{
		$('#footer-container').animate({
			'height':'175px'
		});
		$('#about-section').animate({
			'opacity':'1'
		});
		$('#other-section').animate({
			'opacity':'0.35'
		});
		$('#contact-section').animate({
			'opacity':'0.35'
		});
		$('#other-content').hide(200);
		$('#contact-content').hide(200);
		$('#about-content').show(200);
	});

	//OTHER SWITCH
	$("#other-section").click(function()
	{
		$('#footer-container').animate({
			'height':'175px'
		});
		$('#about-section').animate({
			'opacity':'0.35'
		});
		$('#other-section').animate({
			'opacity':'1'
		});
		$('#contact-section').animate({
			'opacity':'0.35'
		});
		$('#about-content').hide(200);
		$('#contact-content').hide(200);
		$('#other-content').show(200);
	});


	$(".alert a.close").click(function()
	{
		$(".alert").animate({
			'bottom': '-100px'
		});
		$("div.footer-btn").animate({
			'bottom': '10px'
		});
	})
});

function openBurger()
{
    var x = document.getElementById("myBurger");

	$(".burger-menu").fadeIn(200);

	$('html').css({
		'overflow':'hidden'
	});

    if (x.className === "burger-menu")
	{
        x.className += " view-burger";
    }
	else
	{
        x.className = "burger-menu";
    }
}

function closeBurger()
{
    var x = document.getElementById("myBurger");

	$(".burger-menu").fadeOut(200);

	$('html').css({
		'overflow':'scroll'
	});

    if (x.className === "burger-menu")
	{
        x.className += " responsive";
    }
	else
	{
        x.className = "burger-menu";
  }
}
