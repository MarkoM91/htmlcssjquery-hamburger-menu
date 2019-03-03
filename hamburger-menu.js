var spanham = $('span i.fa-bars');
var spancross = $('span i.fa-times');
var container = $('.container');
var li = $('.container ul li');
var body = $('body');
var a = $('a');
var container2 = $('.hamburger-menù2');
var liorange = $('li.iscriviti');



spanham.click(function() {

  spanham.hide()
  body.css("background" , "rgb(43, 63, 88)")
  container.hide(function() {

   container2.show(function() {

     container.hide()
   })

  })

});

spancross.click(function() {

  container2.hide()
  container.show()
  body.css("background" , "white")
  liorange.addClass("iscriviti")

});
