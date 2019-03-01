var icon = $('img');
var container = $('.container');
var item = $('#item');

icon.click(function() {
  container.slideToggle()
  icon.hide();
});

container.click(function(){
  container.hide();
  icon.show();
})
