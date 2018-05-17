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
              items:6
          },
          1200:{
              items:6
          },
          1440:{
              items:6
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
      $("#name1").hide();
  });

  $("#num2").hover(function() {
      $("#name2").css({'display':'inline-block'});
    }, function() {
      $("#name2").hide();
  });

  $("#num3").hover(function() {
      $("#name3").css({'display':'inline-block'});
    }, function() {
      $("#name3").hide();
  });

  $("#num4").hover(function() {
      $("#name4").css({'display':'inline-block'});
    }, function() {
      $("#name4").hide();
  });

  $("#num5").hover(function() {
      $("#name5").css({'display':'inline-block'});
    }, function() {
      $("#name5").hide();
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
    $('#abt1c').show();
    $('#abt2c').hide();
    $('#abt3c').hide();
  });

  $('#abt2').click(function() {
    $('.area-about .linktitle').html('Education');
    $('#abt1c').hide();
    $('#abt2c').show();
    $('#abt3c').hide();
  });

  $('#abt3').click(function() {
    $('.area-about .linktitle').html('Interests');
    $('#abt1c').hide();
    $('#abt2c').hide();
    $('#abt3c').show();
  });

  $('#lg').click(function() {
    $('.area-logo').show();
    $('.area-album').hide();
    $('.area-display').hide();
    $('.area-album .linktitle').html('2018');
    $('.area-album .goto').attr('href', 'logo.html');
    $('.area-album .goto').html('View All Logos');
  });

  $('#lbm').click(function() {
    $('.area-logo').hide();
    $('.area-album').show();
    $('.area-display').hide();
    $('.area-album .linktitle').html('2018');
    $('.area-album .goto').attr('href', 'album.html');
    $('.area-album .goto').html('View All Albums');
    $('#lbm1c').css({'display':'block'});
  });

  $('#dsply').click(function() {
    $('.area-logo').hide();
    $('.area-album').hide();
    $('.area-display').show();
    $('.area-album .linktitle').html('2018');
    $('.area-album .goto').attr('href', 'display.html');
    $('.area-album .goto').html('View All Displays');
  });

  $('#prjcts').click(function() {
    $('.area-projects').show();
    $('.area-work').hide();
    $('.area-skills').hide();
  });

  $('#wrk').click(function() {
    $('.area-projects').hide();
    $('.area-work').show();
    $('.area-skills').hide();
  });

  $('#sklls').click(function() {
    $('.area-projects').hide();
    $('.area-work').hide();
    $('.area-skills').show();
  });

  $('#twttr').click(function() {
    $('.area-twitter').show();
    $('.area-discord').hide();
    $('.area-other').hide();
    $('.area-twitter .goto').html('Go To @kingdingah');
    $('.area-twitter .linktitle').html('@kingdingah');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingdingah");
    $('#twttrc .subttl').html('My main account where I ramble about everything<br />Mainly music<br />I talk about music a lot<br />Also contains various other opinions<br /><br />Enjoy');
  });

  $("#twttr1").click(function() {
    $('.area-twitter .goto').html('Go To @kingdingah');
    $('.area-twitter .linktitle').html('@kingdingah');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingdingah");
    $('#twttrc .subttl').html('My main account where I ramble about everything<br />Mainly music<br />I talk about music a lot<br />Also contains various other opinions<br /><br />Enjoy');
  });

  $("#twttr2").click(function() {
    $('.area-twitter .goto').html('Go To @kingodes');
    $('.area-twitter .linktitle').html('@kingodes');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingodes");
    $('#twttrc .subttl').html('Where I sometimes post my designs<br/>Emphasis on sometimes<br/>You can still pm there about commissions and design queries<br/><br/>My Ello page is better though');
  });

  $("#twttr3").click(function() {
    $('.area-twitter .goto').html('Go To @kingosplace');
    $('.area-twitter .linktitle').html('@kingosplace');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingosplace");
    $('#twttrc .subttl').html('Where I come to scream<br/>Things get dark here</br></br>Only request if I know you well');
  });

  $('#dscrd').click(function() {
    $('.area-twitter').hide();
    $('.area-discord').show();
    $('.area-other').hide();
    $('.area-discord .goto').html('Add Me on Discord');
    $('.area-discord .linktitle').html('kingo#1215');
    $('.area-discord .goto').attr("href", "#");
    $('#dscrdc .subttl').html('Where I am arguably most active.<br/>Whenever I\'m awake I\'ll definitely get your message.<br/><br/>Just please do not add me for small talk only');
  });

  $("#dscrd1").click(function() {
    $('.area-discord .goto').html('Add Me on Discord');
    $('.area-discord .linktitle').html('kingo#1215');
    $('.area-discord .goto').attr("href", "#");
    $('#dscrdc .subttl').html('Where I am arguably most active.<br/>Whenever I\'m awake I\'ll definitely get your message.<br/><br/>Just please don\'t do add me for small talk only');
  });

  $("#dscrd2").click(function() {
    $('.area-discord .goto').html('Join My Server');
    $('.area-discord .linktitle').html('Kingo\'s Boy Club');
    $('.area-discord .goto').attr("href", "https://discord.gg/zuRzRBs");
    $('#dscrdc .subttl').html('My server for boys, by boys<br/>Channels for art, shitposts, music and games<br/>Dedicated voice and text channels for Cards Against Humanity</br>Lots of channels for NSFW lovers, though restricted to a role<br/><br/>Please read the rules before you join');
  });

  $('#other').click(function() {
    $('.area-twitter').hide();
    $('.area-discord').hide();
    $('.area-other').show();
    $('.area-other .goto').html('Send Request to dingah');
    $('.area-other .linktitle').html('dingah');
    $('.area-other .goto').attr("href", "https://www.steamcommunity.com/id/dingah");
    $('#otherc .subttl').html('Where I be shooting boys.<br/>Really only playing Team Fortress 2 on there<br/> Doesn\'t mean I just play TF2.<br/>If we share a game, we can definitely play it together<br/><br/>Don\'t add me for no reason');
  });

  $('#other1').click(function() {
    $('.area-other .goto').html('Send Request to dingah');
    $('.area-other .linktitle').html('dingah');
    $('.area-other .goto').attr("href", "https://www.steamcommunity.com/id/dingah");
    $('#otherc .subttl').html('Where I be shooting boys.<br/>Really only playing Team Fortress 2 on there<br/> Doesn\'t mean I just play TF2.<br/>If we share a game, we can definitely play it together<br/><br/>Don\'t add me for no reason');
  });

  $('#other2').click(function() {
    $('.area-other .goto').html('Add dingah on Telegram');
    $('.area-other .linktitle').html('dingah');
    $('.area-other .goto').attr("href", "https://t.me/dingah");
    $('#otherc .subttl').html('Not as active on here, than Twitter or Discord<br/>More of a back up if you somehow don\'t use the latter two.<br/><br/>Sorry if I read your message and don\'t reply :( <br/>I\'m probably busy working');
  });

  $('#other3').click(function() {
    $('.area-other .goto').html('Follow dingah');
    $('.area-other .linktitle').html('dingah');
    $('.area-other .goto').attr("href", "https://www.ello.co/dingah");
    $('#otherc .subttl').html('Where I post all my concept art and commissioned album artwork<br/><br/>Not much else to say other than that');
  });

  $('#other4').click(function() {
    $('.area-other .goto').html('Follow kingdingah');
    $('.area-other .linktitle').html('kingdingah');
    $('.area-other .goto').attr("href", "https://kingdingah.tumblr.com/");
    $('#otherc .subttl').html('My main tumblr, where I reblog stupid shit everyday<br/>Or insightful content that resonates with me<br/><br/>Been on this shit since 2010, damn..');
  });

  $('#other5').click(function() {
    $('.area-other .goto').html('View My Listography');
    $('.area-other .linktitle').html('kingdingah');
    $('.area-other .goto').attr("href", "https://www.listography.com/kingdingah");
    $('#otherc .subttl').html('Where you can find some personal lists and more personal info<br/>And my bucket list of bad dreams<br/<br/>Contains other stuff too, but I forget what');
  });

  $('#other6').click(function() {
    $('.area-other .goto').html('View My LastFM');
    $('.area-other .linktitle').html('kingdingah');
    $('.area-other .goto').attr("href", "https://www.last.fm/user/kingdingah");
    $('#otherc .subttl').html('Where you can find out what I have been listening too recently<br/>And how much I listen to Tim Hecker over any other artist<br/><br/>Some of my listens are YT vids so, sorry about those');
  });

  $('#other7').click(function() {
    $('.area-other .goto').html('View My Discogs');
    $('.area-other .linktitle').html('kingdingah');
    $('.area-other .goto').attr("href", "https://www.discogs.com/user/kingdingah");
    $('#otherc .subttl').html('All my owned music, both digital and physical<br/>Updated every couple months or so<br/>Not a big collector but I hope to be in future<br>/<br/>Still need every available version of Harmony In Ultraviolet on this site');
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
    $('#lbm1c').show();
    $('#lbm2c').hide();
    $('#lbm3c').hide();
  });

  $('#lbm2').click(function() {
    $('.area-album .linktitle').html('2017');
    $('#lbm1c').hide();
    $('#lbm2c').show();
    $('#lbm3c').hide();
  });

  $('#lbm3').click(function() {
    $('.area-album .linktitle').html('2016');
    $('#lbm1c').hide();
    $('#lbm2c').hide();
    $('#lbm3c').show();
  });

  $(".container-three .item").hover(function() {
    $(this).find('.overlay').show();
    $(this).find('img').css({'-webkit-filter':'grayscale(100%)','filter':'grayscale(100%)'});
  }, function() {
    $(this).find('.overlay').hide();
    $(this).find('img').css({'-webkit-filter':'grayscale(0%)','filter':'grayscale(0%)'})
  });

  $(".overlay").css({
    'width':$(".container-three .section-box div.item img").width(),
    'height':$(".container-three .section-box div.item img").height()
  })

  $(".overlay a").click(function() {
    $("body").css("overflow","hidden");
    $(".lightbox").show();
    $(".lightbox img").attr("src", $(this).parent().siblings('img').attr("src"));
  });

  if($(document).find("title").text() == "Albums")
  {
    $(".chains").css({
      'left':'155px',
      'height':$(".container-three").height()
    })
  }
  else if($(document).find("title").text() == "Home")
  {
    $(".chains").css({
      'left':'180px',
      'height':($("html").height()*5)
    })
  }

});
