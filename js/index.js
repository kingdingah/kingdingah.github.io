$(document).ready(function() {
  var doch = $(window).height();
  var docw = $(window).width();

  var menuh = $(".menu").height();

  $(".menu").css({
    'top':'calc(50% - ' + (menuh/2) + 'px)'
  });

  $("#about").click(function(event) {
    $(".hobbies, .contact, .work, .main").hide();
    $(".about").show();
  });

  $("#hobbies").click(function(event) {
    $(".about, .contact, .work, .main").hide();
    $(".hobbies").show();
  });

  $("#contact").click(function(event) {
    $(".hobbies, .about, .work, .main").hide();
    $(".contact").css({'opacity':'1'});
    $(".contact").show();
  });

  $("#work").click(function(event) {
    $(".hobbies, .contact, .about, .main").hide();
    $(".work").show();
  });

  $(".goback").click(function(event) {
    $(".hobbies, .contact, .about, .work").hide();
    $(".main").show();
  });

  var inputtext = "";

  $("#discord").click(function(event) {
    inputtext = "kingo#1215";
    $(".popup input").css({'font-size':'40px'})
    $(".popup input").val(inputtext);
    $(".popup").show();
  })

  $("#email").click(function(event) {
    inputtext = "kingdingah@outlook.com";
    if(docw < 900)
    {
      $(".popup input").css({'font-size':'21px'})
    }
    $(".popup input").val(inputtext);
    $(".popup").show();
  })

  $(".popup img").click(function(event) {
    $(".popup").hide();
  });

  $("#twitter").hover(function() {
    $(".linkimg").attr('src', 'img/twitter.png');
  });

  $("#steam").hover(function() {
    $(".linkimg").attr('src', 'img/steam.png');
  });

  $("#discord").hover(function() {
    $(".linkimg").attr('src', 'img/discord.png');
  });

  $("#tg").hover(function() {
    $(".linkimg").attr('src', 'img/tg.png');
  });

  $("#cc").hover(function() {
    $(".linkimg").attr('src', 'img/cc.png');
  });

  $("#email").hover(function() {
    $(".linkimg").attr('src', 'img/email.png');
  });

  $(".popup button").click(function() {
    $(".toast").show(0).delay(1500).hide(0);
  });
});

function copythis()
{
    $("input").prop('disabled', false);
    var copyText = document.getElementById("tocopy");
    copyText.select();
    document.execCommand("copy");
    $("input").prop('disabled', true);
}
