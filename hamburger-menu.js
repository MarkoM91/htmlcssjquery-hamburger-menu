function Exercise(){
  var menu = $('i.fa-bars');
  var hiddennav = $('.hidden-nav');
  var hiddenmenù = $('i.fa-times');
  var iscriviti = $('#iscriviti');

  $(document).ready(function() {

    menu.click(function() {

        hiddennav.addClass("active");
        iscriviti.removeClass("iscriviti");
      });
      hiddenmenù.click(function() {
        
        hiddennav.removeClass('active');
      });
    });
}
Exercise();
