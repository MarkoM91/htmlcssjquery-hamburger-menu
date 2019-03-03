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
    li.css("display" , "block").css("width" , 400).css("height" , 200).css("font-size" , 36)
    a.css("text-decoration" , "underline").css("color" , "white")

  });

});
