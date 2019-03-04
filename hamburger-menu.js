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

  container.hide(function() {

   container2.addClass("active")
   spancross.show()



  })

});

spancross.click(function() {

  container2.addClass("active")
  container.show()

  liorange.addClass("iscriviti")

});
