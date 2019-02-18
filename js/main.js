
$(document).ready(function(){

  // From mobile show menu when click on burger icon
  $("#mobile-menu").click( function() {
    $("#menu").toggle('');
  })

  $("#menu").click(function(){
	$("#nav").toggle();
});


  AOS.init(); // initialize animations effect https://michalsnik.github.io/aos/ 


}) // end of ready function