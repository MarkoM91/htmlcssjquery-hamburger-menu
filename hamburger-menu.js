var spanham = $('span i.fa-bars');
var spancross = $('span i.fa-times');
var container = $('.container');
var li = $('.container ul li');
var body = $('body');
var a = $('a');



spanham.click(function() {

  spanham.hide();
  spancross.css("display" , "block")
  body.css("background" , "rgb(43, 63, 88)")
  li.removeClass("iscriviti");
  container.show(function() {
    li.css("display" , "block").css("width" , 400).css("height" , 100).css("font-size" , 26).css("position" , "relative").css("right" , "470px").css("padding" , " 80px 0px")
    a.css("text-decoration" , "underline").css("color" , "white")

  });


});
