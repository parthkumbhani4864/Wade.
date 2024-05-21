// --Slider Start-----------------------------------------------------------------
$('#s1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    items:1,
    navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    animateIn:'fadeIn',
    animateOut:'fadeOut',
});

$(document).ready(function (){
  $("#s2").owlCarousel({
      items:4,
      margin:100,
      dots:false,
      loop: true,
      autoplay:true,
      autoplayTimeout:2000,
  });
});
// --Slider End-----------------------------------------------------------------




// --Counter start-----------------------------------------------------------------

function inVisible(element) {
  //Checking if the element is visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is visible in the viewport
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
  animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      //duration 5 seconds
      duration: 1000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }
  
}
//When the document is ready
$(function() {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function() {
    //Checking if each items to animate are 
    //visible in the viewport
    $("p[data-max]").each(function() {
      inVisible($(this));
    });
  })
});

// --Counter end-----------------------------------------------------------------


// --Header scroll Start-----------------------------------------------------------------

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 400) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
// --Header scroll End-----------------------------------------------------------------

  
// --Upwrw start-----------------------------------------------------------------
var btn = $('.uparw');
btn.hide();
$(window).scroll(function () {
  if($(window).scrollTop()>500)
  {
    btn.fadeIn();
  }
  else
  {
    btn.fadeOut();
  }
});

btn.on('click',function(e){
  e.preventDefault();
  $('html,body').animate({scrollTop:0},'300');
});

// --Upwrw End-----------------------------------------------------------------


// --Animation Start-----------------------------------------------------------------
AOS.init();
// --Animation End-----------------------------------------------------------------


// --Wow Start-----------------------------------------------------------------

$(document).ready(function () {

  var owl = $('#s1');
  owl.owlCarousel();
  owl.on('changed.owl.carousel', function(event) {
    new WOW().init();
  })
  
  wow = new WOW(
    {
      boxClass:     'wow',     
      animateClass: 'animated',
      offset:       0,         
      mobile:       true,      
      live:         true       
    }
    )
    wow.init();
})

new WOW().init();
// --Wow Start-----------------------------------------------------------------


// --Preloader Start-----------------------------------------------------------------
$(document).ready(function(){
  setTimeout (function(){
    $('.preloader').fadeOut();
  },4000)
})
// --Preloader End-----------------------------------------------------------------