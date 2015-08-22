$(document).ready(function() {
  $(".simonDescription").hide()
  $(".ecodashDescription").hide()
  $(".alumnutsDescription").hide()
  $(".challengeDescription").hide()
  $(".moleskine_text").hide();
  var bigger = function(){
    $(this).css({width: '+=10%', height: '+=10%'});
  }
  var originalSize = function(){
    $(this).css({width: "", height: ""});
  }
  var ipadBigger = function(){
    $(".ipad, .contact").css({width: '+=10%', height: '+=10%'});
  }
  var ipadSmaller = function(){
    $(".ipad, .contact").css({width: "", height: ""});
  }
  var floating_notebook = function() {
    $(this).css({"z-index": "3333", "cursor":"default"});
    $(this).animate({"marginRight": "+=290px", "marginTop": "-=370px"}, 10, function(){$(this).addClass('moleskine_rotate moleskine_transition')});

    $(this).animate({
      "width": "1200px",
      "height": "700px",
      "marginTop": "-=555px",
      "marginRight": "-=170px"}, 100, function(){$(".moleskine_text").fadeIn(1600)});
    $(".moleskine, .ipad, .laptop, .contact, .browser, .coffee, .coke").off('mouseover').off('mouseout').off("click");
    $(".moleskine").css({"cursor": "pointer"})
  }

  var enableEvents = function(){
    $(".moleskine, .laptop, .coffee, .coke").mouseover(bigger).mouseout(originalSize);
    $(".ipad").mouseover(ipadBigger).mouseout(ipadSmaller)
    $(".moleskine").on("click", floating_notebook)
    $(".ipad, .contact").on("click", ipadOpen)
    $(".laptop").on("click", laptopOpen)
    $(".close_browser, #coord").off("mousedown", browserClose)
    $(".coffee").on("click", openCoffee)
    $(".coke").on("click", openCoke)
  }
  $(".moleskine").on("click", floating_notebook)
  $(".moleskine, .laptop, .coffee, .notebook, .coke").mouseover(bigger).mouseout(originalSize);
  $(".close_moleskine").on("click", function(){
    $(".moleskine_text").hide();
    $(".moleskine").css({width: "", height: ""}).animate({ "marginTop": "0", "marginRight": "0"}, 290, enableEvents).removeClass("moleskine_rotate moleskine_transition")
    $(".moleskine").css({"z-index": "0"});
})


  var laptopOpen = function(){
    console.log("hello")
    $(".window").fadeIn(800)
    $(".browser").animate({"marginLeft": "+=400px", "marginTop":"+=290px"}, 10, function(){
      $(".browser").addClass('laptop_rotate laptop_transition')
    }).animate({
      "width": "1200px",
      "height": "850px",
      "marginTop": "+=70px",
      "marginLeft": "+=70px"
    }, 100)
    $(".moleskine, .ipad, .laptop, .contact, .coffee, .coke").off('mouseover').off('mouseout').off("click");
    $(".close_browser, #coord").on("mousedown", browserClose)
  }

  var browserClose = function(){
    $(".browser").css({width:"", height:""}).animate({"marginLeft": "0", "marginTop": "0"}, 200, enableEvents).removeClass('laptop_rotate laptop_transition')
    $(".window").fadeOut(300)
  }
  var ipadOpen = function(event){
    console.log("hello")
    $(".contact").hide()
    $(".ipad").animate({"marginLeft": "-=490px", "marginTop": "+=100px"}, 10, function(){
      $(".ipad").addClass('ipad_rotate moleskine_transition')
    }).animate({
      "width": "520px",
      "height": "720px",
      "marginTop": "+=215px",
      "marginRight": "+=210px"}, 100, function(){$(".contact_info").fadeIn(1600)});
      $(".moleskine, .ipad, .laptop, .contact, .browser, .coffee, .coke").off('mouseover').off('mouseout').off("click");
  }
  var ipadClose = function(){
    $(".contact_info").hide();
    $(".ipad").css({width:"", height:""}).animate({"marginLeft": "0", "marginTop": "0"}, 200, enableEvents).removeClass('ipad_rotate moleskine_transition')
    $(".contact").fadeIn(800).css({width:"", height:""});
  }



  $(".ipad").mouseover(ipadBigger).mouseout(ipadSmaller)
  $(".laptop").on("click", laptopOpen)
  $("#coord").on("mouseover", function(){
    $(".close_browser").show()
  })
  $("#coord").on("mouseout", function(){
    if ($(".close_browser").is(":visible")) {
    $(".close_browser").hide()
  }
  })

  $(".ipad, img.ipad").on("click", ipadOpen)
  $(".ipad_close_button").on("click", ipadClose)

  $("#challenge").mouseenter(function(){

    $(".challengeDescription").fadeIn(300)
  })
  $("#ecoDash").mouseenter(function(){
    $(".ecodashDescription").fadeIn(300)
  })
  $("#alumnuts").mouseenter(function(){
    $(".alumnutsDescription").fadeIn(300)
  })
  $("#simon").mouseenter(function(){
    $(".simonDescription").fadeIn(300)
  })
  $(".challengeDescription").mouseleave( function(){
    $(".challengeDescription").fadeOut(200);
  })
  $(".ecodashDescription").mouseleave( function(){
    $(".ecodashDescription").fadeOut(200);
  })
  $(".alumnutsDescription").mouseleave( function(){
    $(".alumnutsDescription").fadeOut(200);
  })
  $(".simonDescription").mouseleave( function(){
    $(".simonDescription").fadeOut(200);
  })

  var openCoffee = function(){
    $(".cover, .coffee_facts_div").fadeIn(500)
  }
  $(".coffee").on("click", openCoffee)
  $(".close_coffee").on("click", function(){
    $(".cover, .coffee_facts_div").fadeOut(500)
  })

  var openCoke = function(){
    $(".cover, .coke_soda").fadeIn(500)
  }
  $(".coke").on("click", openCoke)
  $(".close_coke").on("click", function(){
    $(".cover, .coke_soda").fadeOut(500)
  })


})

