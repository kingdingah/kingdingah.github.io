var ROOT_WC = "http://localhost:4006/generators/api/white-cards";
var ROOT_BC = "http://localhost:4006/generators/api/black-cards";

$(document).ready(function()
{
	findAllWhiteCards();
	findAllBlackCards();

  $("#txt-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".card-cont").filter(function()
		{
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

	$("#open").click(function() {
		$("#cardBox-toggles-mobile").slideToggle(200);
	});

	$(".all").click(function(){
		$('.card-cont').css({
			'display':'block'
		});
	});

	$(".exonly").click(function(){
		$('.n').css({
			'display':'none'
		});
		$('.y').css({
			'display':'block'
		});
	});

	$(".nonexonly").click(function(){
		$('.y').css({
			'display':'none'
		});
		$('.n').css({
			'display':'block'
		});
	});

	$(".park-one").click(function(){
		$('.pack1').css({
			'display':'block',
		});
		$('.pack2').css({
			'display':'none'
		});
		$('.pack3').css({
			'display':'none'
		});
	});

	$("#one-card").click(function(){
		$(this).css({
			'backgroundColor':'#43e829',
			'color':'#f7f7f7',
			'box-shadow':'0px 4px 0px #37c920'
		});
		$("#two-card").css({
			'backgroundColor':'#f7f7f7',
			'color':'#ddd',
			'box-shadow':'0px 4px 0px #ddd'
		});
		$("#three-card").css({
			'backgroundColor':'#f7f7f7',
			'color':'#ddd',
			'box-shadow':'0px 4px 0px #ddd'
		});
	});

	$("#two-card").click(function(){
		$(this).css({
			'backgroundColor':'#43e829',
			'color':'#f7f7f7',
			'box-shadow':'0px 4px 0px #37c920'
		});
		$("#one-card").css({
			'backgroundColor':'#f7f7f7',
			'color':'#ddd',
			'box-shadow':'0px 4px 0px #ddd'
		});
		$("#three-card").css({
			'backgroundColor':'#f7f7f7',
			'color':'#ddd',
			'box-shadow':'0px 4px 0px #ddd'
		});
	});

	$("#three-card").click(function(){
		$(this).css({
			'backgroundColor':'#43e829',
			'color':'#f7f7f7',
			'box-shadow':'0px 4px 0px #37c920'
		});
		$("#one-card").css({
			'backgroundColor':'#f7f7f7',
			'color':'#ddd',
			'box-shadow':'0px 4px 0px #ddd'
		});
		$("#two-card").css({
			'backgroundColor':'#f7f7f7',
			'color':'#ddd',
			'box-shadow':'0px 4px 0px #ddd'
		});
	});

	$("#addacard").click(function(){
		$(".addCardBox").animate({
			'right':'0'
		});
		$("#blackoverlay").fadeIn();
		$("a.closeCardBox").fadeIn();
		$(".card-preview").fadeIn();
	});

	$("a.closeCardBox").click(function(){
		$(".addCardBox").animate({
			'right':'-400px'
		});
		$("#blackoverlay").fadeOut();
		$("a.closeCardBox").fadeOut();
		$(".card-preview").fadeOut();
	});

	$("#add-card-input").keyup(function(){
      $(".preview-card").html($("#add-card-input").val());
    });

	var on = true;

	$(".add-ex").click(function(){
		if(on)
		{
			$(this).css({
				'backgroundColor':'#ff3a3a',
				'color':'#f7f7f7',
				'boxShadow':'0px 4px 0px #e02f2f'
			});

			on = false;
		}
		else
		{
			$(this).css({
				'backgroundColor':'#333',
				'color':'#555',
				'boxShadow':'0px 4px 0px #222'
			});

			on = true;
		}
	});

	$("#wc").click(function(){
		$(".add-title").fadeOut();
		$(".add-card").fadeOut();
		$(".preview-card").css({
			'backgroundColor':'#f7f7f7',
			'color':'#333',
		});
	});

	$("#bc").click(function(){
		$(".add-title").fadeIn();
		$(".add-card").fadeIn();
		$(".preview-card").css({
			'backgroundColor':'#222',
			'color':'#f7f7f7',
		});
	});
});

var findAllWhiteCards = function()
{
    console.log('findAllWhiteCards');
    $.ajax({
        type: 'GET',
        url: ROOT_WC,
        dataType: "json",
        success: renderWhiteCards
    });
};

var findAllBlackCards = function()
{
    console.log('findAllBlackCards');
    $.ajax({
        type: 'GET',
        url: ROOT_BC,
        dataType: "json",
        success: renderBlackCards
    });
};

function renderWhiteCards(data)
{
    list = data.white_cards;
    $.each(list, function(index, white_cards)
    {
        $('#cardBox').append('<div class="card-cont col-sm-6 col-md-4 col-lg-3 ' + white_cards.explicit + ' ' + white_cards.pack + '"><div class="' + white_cards.type + '"><div class="rating-icon">' + white_cards.rating + '</div><span class="card-text">' + white_cards.text + '</span></div></div>');
    });
}

function renderBlackCards(data)
{
    list = data.black_cards;
    $.each(list, function(index, black_cards)
    {
        $('#cardBox').append('<div class="card-cont col-sm-6 col-md-4 col-lg-3 ' + black_cards.explicit + ' ' + black_cards.pack + '"><div class="' + black_cards.type + '"><div class="full"><div class="rating-icon">' + black_cards.rating + '</div><div class="copy-text"><img src="' + black_cards.num + '"/></div><span class="card-text">' + black_cards.text + '</span></div></div></div>');
    });
}

function copyToClipboard(element)
{
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
