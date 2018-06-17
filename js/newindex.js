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
              items:2
          },
          540:{
              items:3
          },
          630:{
              items:4
          },
          768:{
              items:5
          },
          990:{
              items:6
          }
      }
  });

  $("div.notready").hide();

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

  $('.container-three .area-album .owl-carousel, .container-three .area-logo .owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    dots: false,
    pagination:false,
    nav: true,
    nav: true,
    navText: ["<span class='prev'>Previous</span>","<span class='next'>Next</span>"]
  });

  $('.container-three .area-display .owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    dots: false,
    pagination:false,
    nav: true,
    nav: true,
    navText: ["<span class='prev'>Previous</span>","<span class='next'>Next</span>"],
    responsive:{
        0:{
            items:1
        },
        1700:{
            items:1
        }
    }
  });

  if($("html,body").width() > 768)
  {
    $(".mylogo").hover(function() {
        $(this).css({'transform':'rotate(-60deg)','transition':'0.3s ease all'});
        $(".secret").stop().animate({top: 152, left: 123}, 250);
      }, function() {
        $(this).css({'transform':'rotate(0deg)','transition':'0.3s ease all'});
        $(".secret").stop().animate({top: 110, left: 100}, 250);
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
  }

  $("#num1, #num1m").hover(function() {
    $(this).attr('src', "img/svg/num/num1b.svg");
  }, function() {
    $(this).attr('src', "img/svg/num/num1.svg");
  });

  $("#num2, #num2m").hover(function() {
    $(this).attr('src', "img/svg/num/num2b.svg");
  }, function() {
    $(this).attr('src', "img/svg/num/num2.svg");
  });

  $("#num3, #num3m").hover(function() {
    $(this).attr('src', "img/svg/num/num3b.svg");
  }, function() {
    $(this).attr('src', "img/svg/num/num3.svg");
  });

  $("#num4, #num4m").hover(function() {
    $(this).attr('src', "img/svg/num/num4b.svg");
  }, function() {
    $(this).attr('src', "img/svg/num/num4.svg");
  });

  $("#num5, #num5m").hover(function() {
    $(this).attr('src', "img/svg/num/num5b.svg");
  }, function() {
    $(this).attr('src', "img/svg/num/num5.svg");
  });

  $('#num1, #num1m').click(function(){$("html, body").stop().animate({scrollTop:0}, 450);});
  $('#abt, #num2, #num2m').click(function(){$("html, body").stop().animate({scrollTop:$(".container-two").height()}, 450);});
  $('#dsgn, #num3, #num3m').click(function(){$("html, body").stop().animate({scrollTop:$(".container-two").height()*2}, 450);});
  $('#wb, #num4, #num4m').click(function(){$("html, body").stop().animate({scrollTop:$(".container-two").height()*3}, 450);});
  $('#cntct, #num5, #num5m').click(function(){$("html, body").stop().animate({scrollTop:$(".container-two").height()*4}, 450);});
  $('.container-two .back-up').click(function(){$("html, body").animate({scrollTop:0}, 800);});
  $('.container-three .back-up').click(function(){$("html, body").animate({scrollTop:0}, 800);});
  $('.container-four .back-up').click(function(){$("html, body").animate({scrollTop:0}, 800);});
  $('.container-five .back-up').click(function(){$("html, body").animate({scrollTop:0}, 800);});

  $('#abt1').click(function() {
    $('.area-about .linktitle').html('General');
    $('.area-about .goto').hide();
    $('#abt1c').show();
    $('#abt2c').hide();
    $('#abt3c').hide();
  });

  $('#abt2').click(function() {
    $('.area-about .linktitle').html('Education');
    $('#abt1c').hide();
    $('#abt2c').show();
    $('#abt3c').hide();
    $('.area-about .goto').html('View Course Modules');
    $("#abt2c .tabular").hide();
    $("#abt2c img").show();
    $('.area-about .linktitle').html('Education');
    $("#abt2c .textarea").show();
    $('.area-about .goto').show();
    $('.area-about .toEdu').hide();
  });

  $('.area-about .goto').click(function() {
    $("#abt2c .tabular").show();
    $("#abt2c img").hide();
    $('.area-about .linktitle').html('<span class="ghost">Modules</span> / Education');
    $("#abt2c .textarea").hide();
    $('.area-about .goto').hide();
    $('.area-about .toEdu').show();
  });

  $('.area-about .toEdu, .ghost').click(function() {
    $("#abt2c .tabular").hide();
    $("#abt2c img").show();
    $('.area-about .linktitle').html('Education');
    $("#abt2c .textarea").show();
    $('.area-about .goto').show();
    $('.area-about .toEdu').hide();
  });

  $('#abt3').click(function() {
    $('.area-about .linktitle').html('Interests');
    $('#abt1c').hide();
    $('#abt2c').hide();
    $('#abt3c').show();
    $('.area-about .goto').hide();
    $('#abt3c .tabular').show();
  });

  $('#lg').click(function() {
    $('.area-logo').show();
    $('.area-album').hide();
    $('.area-display').hide();
    $('.area-logo .linktitle').html('<span class="ghost">2018</span> / Logo');
    $('#lg1c').show();
    $('#lg2c').hide();
    $('#lg3c').hide();
    $('#lg4c').hide();
  });

  $('#lbm').click(function() {
    $('.area-logo').hide();
    $('.area-album').show();
    $('.area-display').hide();
    $('.area-album .linktitle').html('<span class="ghost">2018</span> / Album');
    $('.area-album .goto').html('View All Albums');
    $('#lbm1c').show();
    $('#lbm2c').hide();
    $('#lbm3c').hide();
    $('#lbm4c').hide();
  });

  $('#dsply').click(function() {
    $('.area-logo').hide();
    $('.area-album').hide();
    $('.area-display').show();
    $('.area-display .linktitle').html('<span class="ghost">2018</span> / Display');
  });

  $('#prjcts').click(function() {
    $('.area-projects').show();
    $('.area-work').hide();
    $('.area-skills').hide();
    $('.area-projects .linktitle').html('<span class="ghost">Personal</span> / Projects / Web');
  });

  $('#wrk').click(function() {
    $('.area-projects').hide();
    $('.area-work').show();
    $('.area-skills').hide();
    $('.area-work .linktitle').html('<span class="ghost">2018</span> / Work / Web');
  });

  $('#sklls').click(function() {
    $('.area-projects').hide();
    $('.area-work').hide();
    $('.area-skills').show();
    $('#sklls1c').show();
    $('.area-skills .linktitle').html('<span class="ghost">Software</span> / Skills / Web');
  });

  $("#sklls1").click(function() {
    $('.area-skills .linktitle').html('<span class="ghost">Software</span> / Skills / Web');
    $('#sklls1c').show();
    $('#sklls2c').hide();
    $('#sklls3c').hide();
  });

  $("#sklls2").click(function() {
    $('.area-skills .linktitle').html('<span class="ghost">Languages</span> / Skills / Web');
    $('#sklls1c').hide();
    $('#sklls2c').show();
    $('#sklls3c').hide();
  });

  $("#sklls3").click(function() {
    $('.area-skills .linktitle').html('<span class="ghost">Packages</span> / Skills / Web');
    $('#sklls1c').hide();
    $('#sklls2c').hide();
    $('#sklls3c').show();
  });

  $('#twttr').click(function() {
    $('.area-twitter').show();
    $('.area-discord').hide();
    $('.area-other').hide();
    $('.area-twitter .goto').html('Go To @kingdingah');
    $('.area-twitter .linktitle').html('<span class="ghost">Twitter</span> / @kingdingah');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingdingah");
    $('#twttrc .subttl').html('My main account where I ramble about everything<br />Mainly music<br />I talk about music a lot<br />Also contains various other opinions<br /><br />Eight years of nonsense');
  });

  $("#twttr1").click(function() {
    $('.area-twitter .goto').html('Go To @kingdingah');
    $('.area-twitter .linktitle').html('<span class="ghost">Twitter</span> / @kingdingah');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingdingah");
    $('#twttrc .subttl').html('My main account where I ramble about everything<br />Mainly music<br />I talk about music a lot<br />Also contains various other opinions<br /><br />Eight years of nonsense');
  });

  $("#twttr2").click(function() {
    $('.area-twitter .goto').html('Go To @kingodes');
    $('.area-twitter .linktitle').html('<span class="ghost">Twitter</span> / @kingodes');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingodes");
    $('#twttrc .subttl').html('Where I sometimes post my designs<br/>Emphasis on sometimes<br/>You can still pm there about commissions and design queries<br/><br/>My Ello page is better though');
  });

  $("#twttr3").click(function() {
    $('.area-twitter .goto').html('Go To @kingosplace');
    $('.area-twitter .linktitle').html('<span class="ghost">Twitter</span> / @kingosplace');
    $('.area-twitter .goto').attr("href", "https://www.twitter.com/kingosplace");
    $('#twttrc .subttl').html('Where I come to scream<br/>Things get dark here</br></br>Only request if I know you well');
  });

  $('#dscrd').click(function() {
    $('.area-twitter').hide();
    $('.area-discord').show();
    $('.area-other').hide();
    $('.area-discord .goto').html('Add Me on Discord');
    $('.area-discord .linktitle').html('<span class="ghost">Discord</span> / kingo#1215');
    $('.area-discord .goto').hide();
    $('#dscrdc .subttl').html('Where I am arguably most active<br/>Whenever I\'m awake I\'ll definitely get your message<br/><br/>Just please do not add me for small talk only');
  });

  $("#dscrd1").click(function() {
    $('.area-discord .goto').html('Add Me on Discord');
    $('.area-discord .linktitle').html('<span class="ghost">Discord</span> / kingo#1215');
    $('.area-discord .goto').hide();
    $('#dscrdc .subttl').html('Where I am arguably most active<br/>Whenever I\'m awake I\'ll definitely get your message<br/><br/>Just please do not add me for small talk only');
  });

  $("#dscrd2").click(function() {
    $('.area-discord .goto').html('Join My Server');
    $('.area-discord .linktitle').html('<span class="ghost">Discord</span> / Kingo\'s Boy Club');
    $('.area-discord .goto').show();
    $('.area-discord .goto').attr("href", "https://discord.gg/zuRzRBs");
    $('#dscrdc .subttl').html('My server for boys, by boys<br/>Channels for art, shitposts, music and games<br/>Dedicated voice and text channels for Cards Against Humanity</br>Lots of channels for NSFW lovers, though restricted to a role<br/><br/>Please read the rules before you join');
  });

  $('#other').click(function() {
    $('.area-twitter').hide();
    $('.area-discord').hide();
    $('.area-other').show();
    $('.area-other .goto').html('Send Request to dingah');
    $('.area-other .linktitle').html('<span class="ghost">Steam</span> / dingah');
    $('.area-other .goto').attr("href", "https://www.steamcommunity.com/id/dingah");
    $('#otherc .subttl').html('Where I be shooting boys<br/>Really only playing Team Fortress 2 on there<br/> Doesn\'t mean I just play TF2<br/>If we share a game, we can definitely play it together<br/><br/>Don\'t add me for no reason');
  });

  $('#other1').click(function() {
    $('.area-other .goto').html('Send Request to dingah');
    $('.area-other .linktitle').html('<span class="ghost">Discord</span> / dingah');
    $('.area-other .goto').attr("href", "https://www.steamcommunity.com/id/dingah");
    $('#otherc .subttl').html('Where I be shooting boys<br/>Really only playing Team Fortress 2 on there<br/> Doesn\'t mean I just play TF2<br/>If we share a game, we can definitely play it together<br/><br/>Don\'t add me for no reason');
  });

  $('#other2').click(function() {
    $('.area-other .goto').html('Add dingah on Telegram');
    $('.area-other .linktitle').html('<span class="ghost">Telegram</span> / dingah');
    $('.area-other .goto').attr("href", "https://t.me/dingah");
    $('#otherc .subttl').html('Not as active on here, than Twitter or Discord<br/>More of a back up if you somehow don\'t use the latter two<br/><br/>Sorry if I read your message and don\'t reply :( <br/>I\'m probably busy working');
  });

  $('#other3').click(function() {
    $('.area-other .goto').html('Follow dingah');
    $('.area-other .linktitle').html('<span class="ghost">Ello</span> / dingah');
    $('.area-other .goto').attr("href", "https://www.ello.co/dingah");
    $('#otherc .subttl').html('Where I post all my concept art and commissioned album artwork<br/><br/>Not much else to say other than that');
  });

  $('#other4').click(function() {
    $('.area-other .goto').html('Follow kingdingah');
    $('.area-other .linktitle').html('<span class="ghost">Tumblr</span> / kingdingah');
    $('.area-other .goto').attr("href", "https://kingdingah.tumblr.com/");
    $('#otherc .subttl').html('My main tumblr, where I reblog stupid shit everyday<br/>Or insightful content that resonates with me<br/><br/>Been on this shit since 2010, damn..');
  });

  $('#other5').click(function() {
    $('.area-other .goto').html('View My Listography');
    $('.area-other .linktitle').html('<span class="ghost">Listography</span> / kingdingah');
    $('.area-other .goto').attr("href", "https://www.listography.com/kingdingah");
    $('#otherc .subttl').html('Where you can find some personal lists and more personal info<br/>And my bucket list of bad dreams<br/<br/>Contains other stuff too, but I forget what');
  });

  $('#other6').click(function() {
    $('.area-other .goto').html('View My LastFM');
    $('.area-other .linktitle').html('<span class="ghost">LastFM</span> / kingdingah');
    $('.area-other .goto').attr("href", "https://www.last.fm/user/kingdingah");
    $('#otherc .subttl').html('Where you can find out what I have been listening too recently<br/>And how much I listen to Tim Hecker over any other artist<br/><br/>Some of my listens are YT vids so, sorry about those');
  });

  $('#other7').click(function() {
    $('.area-other .goto').html('View My Discogs');
    $('.area-other .linktitle').html('<span class="ghost">Discogs</span> / kingdingah');
    $('.area-other .goto').attr("href", "https://www.discogs.com/user/kingdingah");
    $('#otherc .subttl').html('All my owned music, both digital and physical<br/>Updated every couple months or so<br/>Not a big collector but I hope to be in future<br/><br/>Still need every available version of Harmony In Ultraviolet');
  });

  /* WEB */

  $('#lbm1').click(function() {
    $('.area-album .linktitle').html('<span class="ghost">2018</span> / Album');
    $('#lbm1c').show();
    $('#lbm2c').hide();
    $('#lbm3c').hide();
    $('#lbm4c').hide();
  });

  $('#lbm2').click(function() {
    $('.area-album .linktitle').html('<span class="ghost">2017</span> / Album');
    $('#lbm1c').hide();
    $('#lbm2c').show();
    $('#lbm3c').hide();
    $('#lbm4c').hide();
  });

  $('#lbm3').click(function() {
    $('.area-album .linktitle').html('<span class="ghost">2016</span> / Album');
    $('#lbm1c').hide();
    $('#lbm2c').hide();
    $('#lbm3c').show();
    $('#lbm4c').hide();
  });

  $('#lbm4').click(function() {
    $('.area-album .linktitle').html('<span class="ghost">Prices</span> / Album');
    $('#lbm1c').hide();
    $('#lbm2c').hide();
    $('#lbm3c').hide();
    $('#lbm4c').show();
  });

  $('#dsply1').click(function() {
    $('.area-display .linktitle').html('<span class="ghost">2018</span> / Display');
    $('#dsply1c').show();
    $('#dsply2c').hide();
    $('#dsply3c').hide();
    $('#dsply4c').hide();
  });

  $('#dsply2').click(function() {
    $('.area-display .linktitle').html('<span class="ghost">2017</span> / Display');
    $('#dsply1c').hide();
    $('#dsply2c').show();
    $('#dsply3c').hide();
    $('#dsply4c').hide();
  });

  $('#dsply3').click(function() {
    $('.area-display .linktitle').html('<span class="ghost">2016</span> / Display');
    $('#dsply1c').hide();
    $('#dsply2c').hide();
    $('#dsply3c').show();
    $('#dsply4c').hide();
  });

  $('#dsply4').click(function() {
    $('.area-display .linktitle').html('<span class="ghost">Prices</span> / Display');
    $('#dsply1c').hide();
    $('#dsply2c').hide();
    $('#dsply3c').hide();
    $('#dsply4c').show();
  });

  $('#dsply4c img').css({
    'margin-top':($("#dsply4c img").height())
  })

  $('#lg1').click(function() {
    $('.area-logo .linktitle').html('<span class="ghost">2018</span> / Logo');
    $('#lg1c').show();
    $('#lg2c').hide();
    $('#lg3c').hide();
    $('#lg4c').hide();
  });

  $('#lg2').click(function() {
    $('.area-logo .linktitle').html('<span class="ghost">2017</span> / Logo');
    $('#lg1c').hide();
    $('#lg2c').show();
    $('#lg3c').hide();
    $('#lg4c').hide();
  });

  $('#lg3').click(function() {
    $('.area-logo .linktitle').html('<span class="ghost">2016</span> / Logo');
    $('#lg1c').hide();
    $('#lg2c').hide();
    $('#lg3c').show();
    $('#lg4c').hide();
  });

  $('#lg4').click(function() {
    $('.area-logo .linktitle').html('<span class="ghost">Prices</span> / Logo');
    $('#lg1c').hide();
    $('#lg2c').hide();
    $('#lg3c').hide();
    $('#lg4c').show();
  });

  $(".overlay").css({
    'width':$(".container-three .section-box div.item img").width(),
    'height':$(".container-three .section-box div.item img").height()
  });

  $(window).resize(function() {
      $(".overlay").css({
        'width':$(".container-three .section-box div.item img").width(),
        'height':$(".container-three .section-box div.item img").height()
      });
  });

  $(".overlay a").click(function() {
    $("body").css("overflow","hidden");
    $(".lightbox").show();
    $(".lightbox img").attr("src", $(this).parent().siblings('img').attr("src"));
  });

  if($(window).width() < 990)
  {
    $(".chains").css({
      'left':'40px',
      'height':($("div.container-one").height()*5)
    })
  }
  else
  {
    $(".chains").css({
      'left':'180px',
      'height':($("html").height()*5)
    });
  }

  if($("div.notready").is(":visible"))
  {
    $("body").css("overflow","hidden");
  }

  var click = true;

  $(".mobburger").click(function()
  {
    if(click)
    {
      $(this).css({'transform':'rotate(90deg)'});
      click = false;
      $(".sidemenu").show().stop().animate({right: '10px'}, 200);
    }
    else
    {
      $(this).css({'transform':'rotate(0deg)'});
      click = true;
      $(".sidemenu").show().stop().animate({right: '-80px'}, 200);
    }
  });

  var click1 = true;
  var click2 = true;
  var click3 = true;

  $("#mobtwitter span").click(function()
  {
    if(click1)
    {
      $("#mobdiscord, #mobother").hide();
      $("#mobtwitter").css({'top':'100px'});
      $("#mobdiscord .contactlist, #mobother .contactlist").hide();
      $("#mobtwitter .contactlist").show();
      click1 = false;
    }
    else
    {
      $("#mobtwitter .contactlist").hide();
      $("#mobdiscord .contactlist, #mobother .contactlist").hide();
      $("#mobdiscord, #mobother").show();
      click1 = true;
    }
  });

  $("#mobdiscord span").click(function()
  {
    if(click2)
    {
      $("#mobtwitter, #mobother").hide();
      $("#mobdiscord").css({'top':'100px'});
      $("#mobtwitter .contactlist, #mobother .contactlist").hide();
      $("#mobdiscord .contactlist").show();
      click2 = false;
    }
    else
    {
      $("#mobdiscord .contactlist").hide();
      $("#mobdiscord").css({'top':'170px'});
      $("#mobtwitter .contactlist, #mobother .contactlist").hide();
      $("#mobtwitter, #mobother").show();
      click2 = true;
    }
  });

  $("#mobother span").click(function()
  {
    if(click3)
    {
      $("#mobdiscord, #mobtwitter").hide();
      $("#mobother").css({'top':'100px'});
      $("#mobdiscord .contactlist, #mobtwitter .contactlist").hide();
      $("#mobother .contactlist").show();
      click3 = false;
    }
    else
    {
      $("#mobother .contactlist").hide();
      $("#mobother").css({'top':'240px'});
      $("#mobdiscord .contactlist, #mobtwitter .contactlist").hide();
      $("#mobdiscord, #mobtwitter").show();
      click3 = true;
    }
  });

});
