 $(document).ready(function(){
  
   //горизонтальное меню
  $( ".cross" ).hide();
  $( ".hamburger" ).click(function() {
  $( ".navigation li" ).slideToggle( "slow", function() {
  $( ".hamburger" ).hide();
  $( ".cross" ).show();
  });
  });

  $( ".cross" ).click(function() {
  $( ".navigation li" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".hamburger" ).show();
  });
  });
  
  
  //вертикальное меню
   $( ".cross_cat" ).hide();
  $( ".hamburger_cat" ).click(function() {
  $( ".secondary ul li" ).slideToggle( "slow", function() {
  $( ".hamburger_cat" ).hide();
  $( ".cross_cat" ).show();
  $( ".secondary" ).css("display","block");
   $( ".secondary ul li" ).css("display","block");
  });
  });

  $( ".cross_cat" ).click(function() {
  $( ".secondary ul li" ).slideToggle( "slow", function() {
  $( ".cross_cat" ).hide();
  $( ".hamburger_cat" ).show();
  $( ".secondary" ).css("display","none");
  $( ".secondary ul li" ).css("display","block");
  });
  });
     
  
});