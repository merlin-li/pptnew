var navTrigger = document.getElementsByClassName("nav-trigger")[0];
var body = document.getElementsByTagName("body")[0];

navTrigger.addEventListener("click", toggleNavigation);

function toggleNavigation(event){
  event.preventDefault();
  body.classList.toggle("nav-open");
}

var navTrigger = document.getElementsByClassName("nav-trigger")[0];
var body = document.getElementsByTagName("body")[0];

navTrigger.addEventListener("click", toggleNavigation);

function toggleNavigation(event){
  event.preventDefault();
  body.classList.toggle("nav-open");
}



$(function (){
  $(".nav-container a").click(
    function(){
      $("body").removeClass("nav-open");
    }
  );
});



