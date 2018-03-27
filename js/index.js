jQuery.event.add(window, "load", function () {

var eading = "easeOutSine";

$(".value").delay(1600).animate({
  opacity: 1,
}, 400, eading);

$(".loader").delay(2000).animate({
  opacity: 1,
}, 1400, eading);

$(".circle_move").delay(2400).animate({
  opacity: 1,
}, 1400, eading);

$(".btm_txt").delay(2800).animate({
  opacity: 1,
}, 1800 );

$(".scroll_wrap").delay(1200).animate({
  opacity: 1,
}, 2000);

$("#header").delay(2800).animate({
  opacity: 1,
}, 1800);

$(".nav-trigger ").delay(2800).animate({
  opacity: 1,
}, 1800);



   
});