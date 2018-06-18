$(document).ready(function()
{
  $(".alertpopup").show();
  $("#sign-up-container").hide();
  $("#sign-in-container-pt2").hide();

  $(document).resize(function() {
    $(".log-bg").css({'height':$(document).height()+'px'});
  });

  $("#sign-in-container #toPass").click(function()
  {
    if($("#login-email").val() == '')
    {
      $("#login-email").css('border', '2px solid red');

      $("#login-email").delay(1000).queue(function (next)
      {
        $(this).css('border', '2px solid #ddd');
        next();
      });

      $('.noemail, .pointer').slideDown(200).delay(1000).slideUp(200);
    }
    else
    {
      $("#sign-in-container").fadeOut(200);
      $("#sign-in-container-pt2").delay(300).fadeIn(200);
    }

    if($(window).width() <= 320)
    {
      $(".log-footer").css({'bottom':'-45px'})
    }
  });

  $("#sign-in-container .signup, #sign-in-container-pt2 .signup").click(function()
  {
    $(".signup").addClass('current');
    $(".signin").removeClass('current');

    $("#sign-in-container").hide();
    $("#sign-in-container-pt2").hide();
    $("#sign-up-container").show();

    if($(window).width() > 768)
    {
      $(".alertpopup").fadeOut(200);
    }
    else
    {
      if($(window).width() > 320)
      {
        $(".alertpopup-mob").animate({marginTop: '-60px'}, 200);
      }
      else
      {
        $(".alertpopup-mob").animate({marginTop: '-60px'}, 200);
        $(".log-wrapper img").animate({marginTop: '50px'}, 200);
        $(".log-footer").animate({bottom: '-180px'}, 200);
      }
    }
  });

  $("#sign-up-container .signin").click(function()
  {
    $(".signin").addClass('current');
    $(".signup").removeClass('current');

    $("#sign-up-container").hide();
    $("#sign-in-container").show();

    if($(window).width() > 990)
    {
      $(".alertpopup").fadeIn(200);
    }
    else
    {
      if($(window).width() > 320)
      {
        $(".alertpopup-mob").animate({marginTop: 0}, 200);
      }
      else
      {
        $(".alertpopup-mob").animate({marginTop: 0}, 200);
        $(".log-wrapper img").animate({marginTop: '60px'}, 200);
        $(".log-footer").animate({bottom: '0px'}, 200);
      }
    }
  });

  $("#gobackemail").click(function()
  {
    $("#sign-in-container-pt2").fadeOut(200);
    $("#sign-in-container").delay(300).fadeIn(200);
  });

  if($(window).width() > 1600)
  {
    $(".log-footer div").css({'width':'600px','margin-left':'calc(50% - 300px)'});
    $(".log-wrapper img").css({'width':'350px','margin-top':'200px'});
    $(".log-footer div").css({'width':'400px','margin-left':'calc(50% - 200px)'});

    $(".log-panel").css({
      'width':'600px',
      'margin-left':'calc(50% - 300px)'
    });
  }
  else if($(window).width() > 1366 && $(window).width() <= 1600)
  {
    $(".log-footer div").css({'width':'500px','margin-left':'calc(50% - 250px)'});
    $(".log-wrapper img").css({'width':'300px','margin-top':'150px'});

    $(".log-panel").css({
      'width':'500px',
      'margin-left':'calc(50% - 250px)'
    });
  }
  else if($(window).width() > 540 && $(window).width() <= 1366)
  {
    $(".log-wrapper img").css({'width':'250px','margin-top':'40px'});
    $(".modal").css({'top':'25px','width':'450px','margin-left':'calc(50% - 225px)'});
    $(".log-footer a, .log-footer p").css({'font-size':'14px'});
    $(".signup, .signin").css({'font-size':'1.4em', 'height':'50px'});
    $(".log-footer div").css({'width':'400px','margin-left': 'calc(50% - 200px)'});
    $(".log-footer").css({'bottom':'0px'});

    $(".log-panel").css({
      'width':'400px',
      'margin-left':'calc(50% - 200px)'
    });
  }
  else if($(window).width() > 320 && $(window).width() <= 540)
  {
    $(".alertpopup").hide();
    $(".alertpopup-mob").show();
    $(".log-panel").css({'margin-top':'30px'});
    $(".log-wrapper img").css({'width':'225px', 'margin-top':'30px'});
    $(".modal").css({'top':'25px','width':'340px','margin-left':'calc(50% - 170px)'});
    $(".signup, .signin").css({'font-size':'16px', 'height':'40px'});
    $(".log-footer a, .log-footer p").css({'font-size':'12px'});
    $(".log-footer div").css({'width':'100%'});
    $(".log-footer").css({'bottom':'0px'});
    $(".log-container").css({'margin-top':'20px'});
    $("a.frgtpsswrd, a#gobackemail").css({'font-size':'14px'});

    $(".log-panel").css({
      'width':'80%',
      'margin-left':'10%'
    });
  }
  else
  {
    $(".alertpopup").hide();
    $(".alertpopup-mob").show();
    $(".signup, .signin").css({'font-size':'16px', 'height':'40px'});
    $(".log-wrapper img").css({'width':'225px','margin-top':'60px'});;
    $(".modal").css({'top':'100px','width':'calc(100% - 30px)','margin-left':'15px'});
    $(".forgotpassword input.textareas").css({'width':'100%'});
    $(".log-footer a, .log-footer p").css({'font-size':'12px'});
    $(".log-footer").css({'bottom':'0px'});
    $(".log-footer div").css({'width':'100%'});
    $("a.frgtpsswrd, a#gobackemail").css({'font-size':'14px'});

    $(".log-panel").css({
      'width':'80%',
      'margin-left':'10%'
    });
  }

  $(window).resize(function()
  {
    if($(window).width() >= 1600)
    {
      $(".log-wrapper img").css({'width':'350px'});
      $(".log-footer div").css({'width':'600px','margin-left':'calc(50% - 300px)'});

      $(".log-panel").css({
        'width':'600px',
        'margin-left':'calc(50% - 300px)'
      });
    }
    else if($(window).width() > 1366 && $(window).width() <= 1600)
    {
      $(".log-wrapper img").css({'width':'300px'});
      $(".log-footer div").css({'width':'500px','margin-left':'calc(50% - 250px)'});

      $(".log-panel").css({
        'width':'500px',
        'margin-left':'calc(50% - 250px)'
      });
    }
    else if($(window).width() > 540 && $(window).width() <= 1366)
    {
      $(".log-wrapper img").css({'width':'250px'});
      $(".signup, .signin").css({'font-size':'1.4em', 'height':'50px'});
      $(".modal").css({'top':'25px','width':'450px','margin-left':'calc(50% - 225px)'});
      $(".log-footer a, .log-footer p").css({'font-size':'14px'});
      $(".log-footer div").css({'width':'400px','margin-left': 'calc(50% - 200px)'});
      $(".log-footer").css({'bottom':'0px'});

      $(".log-panel").css({
        'width':'400px',
        'margin-left':'calc(50% - 200px)'
      });
    }
    else if($(window).width() > 320 && $(window).width() <= 540)
    {
      $(".alertpopup").hide();
      $(".alertpopup-mob").show();
      $(".log-panel").css({'margin-top':'30px'});
      $(".log-wrapper img").css({'width':'225px','margin-top':'30px'});
      $(".modal").css({'top':'25px','width':'340px','margin-left':'calc(50% - 170px)'});
      $(".signup, .signin").css({'font-size':'16px', 'height':'40px'});
      $(".log-footer").css({'bottom':'0px'});
      $(".log-footer a, .log-footer p").css({'font-size':'12px'});
      $(".log-footer div").css({'width':'100%'});
      $(".log-container").css({'margin-top':'20px'});
      $("a.frgtpsswrd, a#gobackemail").css({'font-size':'14px'});

      $(".log-panel").css({
        'width':'80%',
        'margin-left':'10%'
      });
    }
    else
    {
      $(".alertpopup").hide();
      $(".alertpopup-mob").show();
      $(".log-panel").css({'margin-top':'30px'});
      $(".signup, .signin").css({'font-size':'16px', 'height':'40px'});
      $(".log-wrapper img").css({'width':'225px','margin-top':'60px'});;
      $(".modal").css({'top':'100px','width':'calc(100% - 30px)','margin-left':'15px'});
      $(".forgotpassword input.textareas").css({'width':'100%'});
      $(".log-footer a, .log-footer p").css({'font-size':'12px'});
      $(".log-footer").css({'bottom':'0px'});
      $(".log-footer div").css({'width':'100%'});
      $("a.frgtpsswrd, a#gobackemail").css({'font-size':'14px'});

      $(".log-panel").css({
        'width':'80%',
        'margin-left':'10%'
      });
    }
  });

  var clicked = true;

  $(".alertpopup-mob span:first-child i:last-child").click(function()
  {
    if(clicked)
    {
      $(this).css({'transform':'rotate(180deg)','transition':'0.3s ease all'});
      $(".alertpopup-mob span:last-child").slideDown(200);
      clicked = false;
    }
    else
    {
      $(this).css({'transform':'rotate(0deg)','transition':'0.3s ease all'});
      $(".alertpopup-mob span:last-child").slideUp(200);
      clicked = true;
    }
  });

  var signupempty = 0;

  $("#sign-up-container #submit").click(function() {

    $('#signup-email, #signup-psswrd, #signup-psswrd-again').each(function()
    {
      if ($(this).val() == '')
      {
        signupempty++;
      }
    });

    console.log(signupempty);

    if(signupempty > 0)
    {
      alert("Not all field are filled");
      $("form").submit(function(e)
      {
          e.preventDefault();
      });
    }
    else
    {
      $("form").submit(function(){
          alert("Submitted");
      });
    }

    signupempty = 0;

  });

  var loginempty = 0;

  $("#sign-in-container #submit").click(function() {

    $('#login-email, #login-psswrd').each(function()
    {
      if ($(this).val() == '')
      {
        loginempty++;
      }
    });

    console.log(loginempty);

    if(loginempty > 0)
    {
      alert("Not all field are filled");
      $("form").submit(function(e)
      {
          e.preventDefault();
      });
    }
    else
    {
      $("form").submit(function(){
          alert("Submitted");
      });
    }

    loginempty = 0;
  });

});
