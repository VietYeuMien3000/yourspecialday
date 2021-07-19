$(document).ready(function(){

  //js for loading screen
  setTimeout(function(){
    $(".loading-screen-first-text").addClass("animate__fadeOutDown");
    
    setTimeout(function(){
      $(".loading-screen-first-text").removeClass("animate__fadeOutDown animate__fadeInDown animate__delay-0.5s");
      $(".loading-screen-first-text").empty();
      $(".loading-screen-first-text").append("<h3>À Không</h3>")
      $(".loading-screen-first-text").addClass("animate__fadeInDown");
    }, 1000); 
  }, 1500); 

  setTimeout(function(){
    $(".loading-screen-first-text").removeClass("animate__fadeOutDown animate__fadeInDown");
    $(".loading-screen-first-text").addClass("animate__fadeOutDown");
    setTimeout(function(){
      $(".loading-screen-first-text").removeClass("animate__fadeOutDown animate__fadeInDown");
      $(".loading-screen-first-text").empty();
      $(".loading-screen-first-text").append("<h3>TinAnhViet chứ &#9996;</h3>")
      $(".loading-screen-first-text").addClass("animate__fadeInDown");
      setTimeout(function(){
        $(".loading-screen").addClass("animate__animated animate__fadeOut")
        $(".container").addClass("animate__animated animate__fadeIn")
        setTimeout(function(){$(".loading-screen").remove();
        $(".first-info").addClass("animate__animated animate__bounce");
      },500)
      },2000)
    }, 1000); 
  }, 3500); 
  
  //js for card swiping
  $(".buddy").on("swiperight",function(){
    $(".budy-text").show();
    $(".info-hidden").hide();
    $(this).addClass('rotate-left').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();

    $(this).append('<div class="status like">Like!</div>');      
    if ( $(this).is(':last-child') ) {
      $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
     }
  });  

  $(".heart").click("swiperight",function(){
    $(".budy-text").show();
    $(".info-hidden").hide();
    $(this).parent().parent().addClass('rotate-left').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();

    $(this).parent().append('<div class="status like">Like!</div>');      
    if ( $(this).parent().parent().is(':last-child') ) {
      $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     } else {
        $(this).parent().parent().next().removeClass('rotate-left rotate-right').fadeIn(400);
     }
  })


  $(".superlike").click("swiperight",function(){
    $(".budy-text").show();
    $(".info-hidden").hide();
    $(this).parent().parent().addClass('rotate-left').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();

    $(this).parent().append('<div class="status like">Like!</div>');      
    if ( $(this).parent().parent().is(':last-child') ) {
      $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     } else {
        $(this).parent().parent().next().removeClass('rotate-left rotate-right').fadeIn(400);
     }
  })

 $(".buddy").on("swipeleft",function(){
  $(".budy-text").show();
  $(".info-hidden").hide();
  $(this).addClass('rotate-right').delay(700).fadeOut(1);
  $('.buddy').find('.status').remove();
  $(this).append('<div class="status dislike">Dislike!</div>');

  if ( $(this).is(':last-child') ) {
   $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
   } else {
      $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
  } 
  });

  $(".times").click("swipeleft",function(){
    $(".budy-text").show();
    $(".info-hidden").hide();
    $(this).parent().parent().addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).parent().parent().append('<div class="status dislike">Dislike!</div>');
  
    if ( $(this).parent().parent().is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     } else {
        $(this).parent().parent().next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
    });

  //info on click

  $(".info-hidden").hide();

  $(document).mouseup(function(e) 
  { 
    var container = $(".info-click");
    container.parent().parent().hide();
    container.parent().parent().next().show();
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      container.parent().parent().show();
      container.parent().parent().next().hide();
    }
  } );

});