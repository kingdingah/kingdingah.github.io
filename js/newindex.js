$(document).ready(function() {
    $('.container-one .owl-carousel').owlCarousel({
      autoplay:true,
      loop: true,
      margin: 0,
      dots: false,
      navigation: false,
      autoplaySpeed: 1000,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:1
          },
          650:{
              items:2
          },
          1000:{
              items:3
          },
          1300:{
              items:4
          },
          1600:{
              items:5
          },
          1700:{
              items:6
          }
      }
  });

  $("span.cls").click(function()
  {
    if($("div.notready").is(":visible"))
    {
      $("div.notready").hide();
      $("body").css("overflow","auto");
    }

    if($("div.lightbox").is(":visible"))
    {
      $("div.lightbox").hide();
      $("body").css("overflow","auto");
    }
  });

  $('.container-three .owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    dots: false,
    pagination:false,
    nav: true,
    nav: true,
    navText: ["<span class='prev'>Previous</span>","<span class='next'>Next</span>"],
    autoplaySpeed: 1000,
    autoplayTimeout: 3000
});

  $(".mylogo").hover(function() {
    $(this).css({
      'transform':'rotate(-60deg)',
      'transition':'0.3s ease all'
    });

    $(".secret").animate({top: 152, left: 123}, 300);
  }, function() {
    $(this).css({
      'transform':'rotate(0deg)',
      'transition':'0.3s ease all'
    });

    $(".secret").animate({top: 110, left: 100}, 300);
  });

  $("#num1").hover(function() {
      $("#name1").css({'display':'inline-block'});
    }, function() {
      $("#name1").css({'display':'none'});
  });

  $("#num2").hover(function() {
      $("#name2").css({'display':'inline-block'});
    }, function() {
      $("#name2").css({'display':'none'});
  });

  $("#num3").hover(function() {
      $("#name3").css({'display':'inline-block'});
    }, function() {
      $("#name3").css({'display':'none'});
  });

  $("#num4").hover(function() {
      $("#name4").css({'display':'inline-block'});
    }, function() {
      $("#name4").css({'display':'none'});
  });

  $("#num5").hover(function() {
      $("#name5").css({'display':'inline-block'});
    }, function() {
      $("#name5").css({'display':'none'});
  });


  $('#num1').click(function(){$("html, body").animate({scrollTop:0}, 600);});
  $('#abt, #num2').click(function(){$("html, body").animate({scrollTop:$(".container-two").height()}, 600);});
  $('#dsgn, #num3').click(function(){$("html, body").animate({scrollTop:$(".container-two").height()*2}, 800);});
  $('#wb, #num4').click(function(){$("html, body").animate({scrollTop:$(".container-two").height()*3}, 1000);});
  $('#cntct, #num5').click(function(){$("html, body").animate({scrollTop:$(".container-two").height()*4}, 1200);});
  $('.container-two .back-up').click(function(){$("html, body").animate({scrollTop:0}, 800);});
  $('.container-three .back-up').click(function(){$("html, body").animate({scrollTop:0}, 800);});
  $('.container-four .back-up').click(function(){$("html, body").animate({scrollTop:0}, 800);});
  $('.container-five .back-up').click(function(){$("html, body").animate({scrollTop:0}, 800);});

  $('#abt1').click(function() {
    $('.area-about .linktitle').html('General');
    $('#abt1c').css({'display':'block'});
    $('#abt2c').css({'display':'none'});
    $('#abt3c').css({'display':'none'});
  });

  $('#abt2').click(function() {
    $('.area-about .linktitle').html('Education');
    $('#abt1c').css({'display':'none'});
    $('#abt2c').css({'display':'block'});
    $('#abt3c').css({'display':'none'});
  });

  $('#abt3').click(function() {
    $('.area-about .linktitle').html('Interests');
    $('#abt1c').css({'display':'none'});
    $('#abt2c').css({'display':'none'});
    $('#abt3c').css({'display':'block'});
  });

  $('#lg').click(function() {
    $('.area-logo').css({'display':'block'});
    $('.area-album').css({'display':'none'});
    $('.area-display').css({'display':'none'});
    $('.area-album .linktitle').html('2018');
    $('.area-album .goto').attr('href', 'logo.html');
    $('.area-album .goto').html('View All Logos');
  });

  $('#lbm').click(function() {
    $('.area-logo').css({'display':'none'});
    $('.area-album').css({'display':'block'});
    $('.area-display').css({'display':'none'});
    $('.area-album .linktitle').html('2018');
    $('.area-album .goto').attr('href', 'album.html');
    $('.area-album .goto').html('View All Albums');
    $('#lbm1c').css({'display':'block'});
  });

  $('#dsply').click(function() {
    $('.area-logo').css({'display':'none'});
    $('.area-album').css({'display':'none'});
    $('.area-display').css({'display':'block'});
    $('.area-album .linktitle').html('2018');
    $('.area-album .goto').attr('href', 'display.html');
    $('.area-album .goto').html('View All Displays');
  });

  $('#prjcts').click(function() {
    $('.area-projects').css({'display':'block'});
    $('.area-work').css({'display':'none'});
    $('.area-skills').css({'display':'none'});
  });

  $('#wrk').click(function() {
    $('.area-projects').css({'display':'none'});
    $('.area-work').css({'display':'block'});
    $('.area-skills').css({'display':'none'});
  });

  $('#sklls').click(function() {
    $('.area-projects').css({'display':'none'})
    $('.area-work').css({'display':'none'})
    $('.area-skills').css({'display':'block'})
  });

  $('#twttr').click(function() {
    $('.area-twitter').css({'display':'block'});
    $('.area-discord').css({'display':'none'});
    $('.area-other').css({'display':'none'});
    $('.area-twitter .goto').html('Go To @kingdingah');
    $('.area-twitter .linktitle').html('@kingdingah');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingdingah");
  });

  $("#twttr1").click(function() {
    $('.area-twitter .goto').html('Go To @kingdingah');
    $('.area-twitter .linktitle').html('@kingdingah');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingdingah");
  });

  $("#twttr2").click(function() {
    $('.area-twitter .goto').html('Go To @kingodes');
    $('.area-twitter .linktitle').html('@kingodes');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingodes");
  });

  $("#twttr3").click(function() {
    $('.area-twitter .goto').html('Go To @kingosplace');
    $('.area-twitter .linktitle').html('@kingosplace');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingosplace");
  });

  $('#dscrd').click(function() {
    $('.area-twitter').css({'display':'none'});
    $('.area-discord').css({'display':'block'});
    $('.area-other').css({'display':'none'});
    $('.area-discord .goto').html('Add Me on Discord');
    $('.area-discord .linktitle').html('kingo#1215');
    $('.area-discord .goto').attr("href", "#");
  });

  $("#dscrd1").click(function() {
    $('.area-discord .goto').html('Add Me on Discord');
    $('.area-discord .linktitle').html('kingo#1215');
    $('.area-discord .goto').attr("href", "#");
  });

  $("#dscrd2").click(function() {
    $('.area-discord .goto').html('Join My Server');
    $('.area-discord .linktitle').html('Kingo\'s Boy Club');
    $('.area-discord .goto').attr("href", "https://discord.gg/zuRzRBs");
  });

  $('#other').click(function() {
    $('.area-twitter').css({'display':'none'});
    $('.area-discord').css({'display':'none'});
    $('.area-other').css({'display':'block'});
    $('.area-other .goto').html('Send Request to dingah');
    $('.area-other .linktitle').html('dingah');
    $('.area-other .goto').attr("href", "https://www.steamcommunity.com/id/dingah");
  });

  $('#other1').click(function() {
    $('.area-other .goto').html('Send Request to dingah');
    $('.area-other .linktitle').html('dingah');
    $('.area-other .goto').attr("href", "https://www.steamcommunity.com/id/dingah");
  });

  $('#other2').click(function() {
    $('.area-other .goto').html('Add dingah on Telegram');
    $('.area-other .linktitle').html('dingah');
    $('.area-other .goto').attr("href", "https://t.me/dingah");
  });

  $('#other3').click(function() {
    $('.area-other .goto').html('Follow dingah');
    $('.area-other .linktitle').html('dingah');
    $('.area-other .goto').attr("href", "https://www.ello.co/dingah");
  });

  $('#other4').click(function() {
    $('.area-other .goto').html('Follow kingdingah');
    $('.area-other .linktitle').html('kingdingah');
    $('.area-other .goto').attr("href", "https://kingdingah.tumblr.com/");
  });

  $('#other5').click(function() {
    $('.area-other .goto').html('View My Listography');
    $('.area-other .linktitle').html('kingdingah');
    $('.area-other .goto').attr("href", "https://www.listography.com/kingdingah");
  });

  $('#other6').click(function() {
    $('.area-other .goto').html('View My Discogs');
    $('.area-other .linktitle').html('kingdingah');
    $('.area-other .goto').attr("href", "https://www.discogs.com/user/kingdingah");
  });

  $("#num1").hover(function() {
    $(this).attr('src', "img/svg/num/num1b.svg");
  }, function() {
    $(this).attr('src', "img/svg/num/num1.svg");
  });

  $("#num2").hover(function() {
    $(this).attr('src', "img/svg/num/num2b.svg");
  }, function() {
    $(this).attr('src', "img/svg/num/num2.svg");
  });

  $("#num3").hover(function() {
    $(this).attr('src', "img/svg/num/num3b.svg");
  }, function() {
    $(this).attr('src', "img/svg/num/num3.svg");
  });

  $("#num4").hover(function() {
    $(this).attr('src', "img/svg/num/num4b.svg");
  }, function() {
    $(this).attr('src', "img/svg/num/num4.svg");
  });

  $("#num5").hover(function() {
    $(this).attr('src', "img/svg/num/num5b.svg");
  }, function() {
    $(this).attr('src', "img/svg/num/num5.svg");
  });

  /* WEB */

  $('#lbm1').click(function() {
    $('.area-album .linktitle').html('2018');
    $('#lbm1c').css({'display':'block'});
    $('#lbm2c').css({'display':'none'});
    $('#lbm3c').css({'display':'none'});
  });

  $('#lbm2').click(function() {
    $('.area-album .linktitle').html('2017');
    $('#lbm1c').css({'display':'none'});
    $('#lbm2c').css({'display':'block'});
    $('#lbm3c').css({'display':'none'});
  });

  $('#lbm3').click(function() {
    $('.area-album .linktitle').html('2016');
    $('#lbm1c').css({'display':'none'});
    $('#lbm2c').css({'display':'none'});
    $('#lbm3c').css({'display':'block'});
  });

  $(".container-three .item").hover(function() {
    $(this).find('.overlay').show();
    $(this).find('img').css({'-webkit-filter':'grayscale(100%)','filter':'grayscale(100%)'});
  }, function() {
    $(this).find('.overlay').hide();
    $(this).find('img').css({'-webkit-filter':'grayscale(0%)','filter':'grayscale(0%)'})
  });

  $(".overlay a").click(function() {
    $("body").css("overflow","hidden");
    $(".lightbox").show();
    $(".lightbox img").attr("src", $(this).parent().siblings('img').attr("src"));
  });

  if($("title").text() == "Albums")
  {
    $(".chains").css({
      'height':$("div.album-container").height()
    })
  }
  else if($("title").text() == "Home")
  {
    $(".chains").css({
      'height':($("html").height()*5)
    })
  }

});
