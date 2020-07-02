$("body").ready(function(){
  $(".name").addClass("first");
  $(".subname").addClass("second");
});

$(window).scroll( function(){

    /* Check the location of each desired element */
    $(".hideme").each( function(){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

           
              $(".subname").css("height", "125");
                $(".about").addClass("about1");

        }

    }); 

});

$(".col-left").mouseenter(function(){
  $(".act-left").addClass("act-left-opacity");
    $(".iot").mouseenter(function(){
  $(".image").attr("src","download.jpeg");});
$(".createweb").mouseenter(function(){
  $(".image").attr("src","createweb.jpeg");});
    $(".ae").mouseenter(function(){
  $(".image").attr("src","ae.png");});
    
});
$(".col-left").mouseleave(function(){
  $(".act-left").removeClass("act-left-opacity");
});
$(".col-left").mouseenter(function(){
  $(".col-left").addClass("col-left25");
});
$(".col-left").mouseleave(function(){
  $(".col-left").removeClass("col-left25");
});



$(".col-right").mouseenter(function(){
  $(".act-right").addClass("act-right-opacity");
    
    $(".car").mouseenter(function(){
  $(".image2").attr("src","car.png");});
$(".smart").mouseenter(function(){
  $(".image2").attr("src","smart.jpeg");});
    $(".rail").mouseenter(function(){
  $(".image2").attr("src","rail.jpeg");});
    
});
$(".col-right").mouseleave(function(){
  $(".act-right").removeClass("act-right-opacity");
});
$(".col-right").mouseenter(function(){
  $(".col-right").addClass("col-right25");
});
$(".col-right").mouseleave(function(){
  $(".col-right").removeClass("col-right25");
});


$(".round").mouseenter(function(){
  $(".play").attr("src","play-button-white.svg");
});
$(".round").mouseleave(function(){
  $(".play").attr("src","play-button-white.svg");
});