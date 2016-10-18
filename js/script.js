$(document).ready(function(){
  // $('#about').on('click',function(){
  //   var hajin = $('#aboutSection').offsetTop;
  //   $(document).scrollTop(hajin);
  // })

  $(window).scroll(function(event){

    var spacing = $('#skillsSection').offset().top - $('.navbar').outerHeight();
    var currentSpacing = $(document).scrollTop();
    var diff = currentSpacing/spacing > 1 ? 1:currentSpacing/spacing;
    var diff2 = 1 - diff;
    var textColor = Math.floor(255-(255*diff));

    $('.navbar').css("background-color","rgba(255,255,255,"+diff+")");
    $('.navbar').css("color","rgb("+textColor+","+textColor+","+textColor+")");


  });

  $('#skills').on('click',function(){
    var spacing = $('#skillsSection').offset().top - $('.navbar').outerHeight();
    $('html,body').animate({scrollTop:spacing});
  });

});
