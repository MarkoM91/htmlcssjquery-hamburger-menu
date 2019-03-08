function Exercise(){
  var menu = $('i.fa-bars');
  var hiddennav = $('.hidden-nav');
  var hiddenmenù = $('i.fa-times');


  $(document).ready(function() {

   menu.click(function() {
      hiddennav.addClass("active");

   });
   hiddenmenù.click(function() {
     hiddennav.removeClass('active');
   });
  });
}
Exercise();
