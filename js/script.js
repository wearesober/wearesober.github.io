$(document).ready(function(){
	event.preventDefault();
	
 $('[data-toggle="popover"]').popover(); 
});

//When user submits form, have alert pop up. 

  $("form").submit(function(){
  	event.preventDefault();
    alert("Thanks for Playing!");
 });
