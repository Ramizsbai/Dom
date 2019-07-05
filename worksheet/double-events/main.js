$(document).ready(function(){
    $("#btn").mouseenter(function(){
     $(this).html("WELCOME! Stay here!")
    });
  });

  $(document).ready(function(){
    $("#btn").mouseleave(function(){
     $(this).html("Do not go please!")
    });
  });