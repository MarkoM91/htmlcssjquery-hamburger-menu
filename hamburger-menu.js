var span = $('span i.fa-bars');
var container = $('.container');
var li = $('.container ul li');
var body = $('body');
var a = $('a');


span.click(function() {

  span.hide();
  body.css("background" , "rgb(43, 63, 88)").css("text-align" , "left")
  li.removeClass("iscriviti");
  container.show(function() {
    li.css("display" , "block").css("width" , 400).css("height" , 200).css("font-size" , 36)
    a.css("text-decoration" , "underline").css("color" , "white")

  });
  container.height(800)
});
