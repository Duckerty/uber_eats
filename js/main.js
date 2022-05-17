$(function () {

  $('.menu__current-tab').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });

});