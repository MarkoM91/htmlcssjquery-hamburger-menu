var icon = $('img');
var container = $('.container');
var item = $('#item');
var img= $('span img');

icon.click(function() {
  container.slideToggle()
  icon.hide();
  img.show();
});

container.click(function(){
  container.hide();
  icon.show();

})
