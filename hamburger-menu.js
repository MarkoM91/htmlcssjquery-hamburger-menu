var spanham = $('span i.fa-bars');
var spancross = $('span i.fa-times');
var container = $('.container');
var li = $('.container ul li');
var body = $('body');
var a = $('a');
var container2 = $('.hamburger-menù2');



spanham.click(function() {

  spanham.hide()
  body.css("background" , "rgb(43, 63, 88)")
  li.removeClass("iscriviti")
  container.hide(function() {

   container2.show(function() {

     container.hide()
   })

  })




});
