$(document).ready(function() {
  var swiper1 = new Swiper(".productinformation_slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });

  var swiper2 = new Swiper(".recommend_slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $('.open_btn').on('click', function(){
      $('.nav_wrap').animate({
        'right':'0%'
      },500)
      $('.modal').show()
    })//click
    $('.close_btn').on('click', function(){
      $('.nav_wrap').animate({
        'right':'-80%'
      },500)
      $('.modal').hide()
    })//click

  $('.footer_btn a').not(':last-child').after(' | ');

  $('.footer_btn a:first-child').prev('span').remove();
  $('.footer_btn a:last-child').next('span').remove();
});
