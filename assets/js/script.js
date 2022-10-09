console.log('Website hecho a mano por Pablo Moreno (www.aazzzuuppp.com)');

/*//////////// MENU DISPLAY ////////////*/
$header = document.querySelector('#menu')

function clickShowMenu() {
    $header.classList.toggle("show")
}

function clickHideMenu() {
    $header.classList.remove("show")
}

var $emailEN = document.querySelector(".emailEN");
var $copyemailEN = document.querySelector(".copymailEN");
var $emailcopiedEN = document.querySelector(".emailcopiedEN");

function hoverToMailEN() {
  $emailEN.classList.add("hide");
  $emailEN.classList.remove("show");
  $copyemailEN.classList.add("show");
}
$emailEN.addEventListener('mouseenter', hoverToMailEN)

function hoverOutEN() {
  if ($emailcopiedEN.classList.contains("show")){
    }
  else {
    $emailEN.classList.remove("hide");
    $emailEN.classList.add("show");
    $copyemailEN.classList.remove("show");
    }
}
$copyemailEN.addEventListener('mouseleave', hoverOutEN)

function copyMailEN() {
  navigator.clipboard
    .writeText('piedihoz@gmail.com');
    $emailEN.classList.add("hide");
    $copyemailEN.classList.remove("show");
    $emailcopiedEN.classList.add("show");
  setTimeout(function(){
    $emailcopiedEN.classList.remove("show");
    $emailEN.classList.remove("hide");
    $emailEN.classList.add("show");
  }, 2000);
}
$copyemailEN.addEventListener("click", copyMailEN);
$emailEN.addEventListener("touchstart", copyMailEN);


/* -----------------------------------
PM footer
-------------------------------------- */
var $pmlogo = document.querySelector('.pmlogo');
var $pmtext = document.querySelector('.pmtext');

function pmTurn() {
      $pmlogo.classList.add("pmlogoturn");
   setTimeout(function(){
      $pmlogo.classList.remove("pmlogoturn");
  }, 1000);
}
$pmlogo.addEventListener('mouseenter', pmTurn, false);


function pmShow() {
   $pmtext.classList.add("pmshow");
   $pmlogo.classList.add("pmhide");
      setTimeout(function(){
         $pmtext.classList.remove("pmshow");
         $pmlogo.classList.remove("pmhide");
  }, 5000);
}
$pmlogo.addEventListener("click", pmShow, false);