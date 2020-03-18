$(document).ready(function(){
  $('.box').fadeOut();
  $('.input-js').fadeOut();
  $('.label-js').fadeOut();
  $('.button-js').fadeOut();
  var waypoints = $('#gallery').waypoint(function(direction) {
    $('.js-1').addClass('animated heartBeat')
  }, {

  offset: '50%'
})

var waypoint = $('#features').waypoint(function(direction){
  $('.box').fadeIn().addClass('animated bounceInUp')
}, {
  offset:'50%'
})
var waypoint = $('#form').waypoint(function(direction){
  $('.label-js').fadeIn().addClass('animated bounceInLeft');
  $('.input-js').fadeIn().addClass('animated bounceInRight');
  $('.button-js').fadeIn().addClass('animated bounceInUp');

}, {
  offset:'52%'
})
 $('#features').waypoint(function(direction){
  if(direction == "down"){
    $('nav').removeClass('container');
    $('nav').addClass('sticky-nav');
  }
  else{
    $('nav').removeClass('sticky-nav');
    $('nav').addClass('container');
  }
},{
  offset: "60px;"
});


})
var app = document.getElementById("title");
var typewriter = new Typewriter(app, {
  loop:false
});
typewriter.typeString('Amazing Pizza')
 .start();
