$(document).ready(function(){
  $('.myslider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true
  });
});

$(document).ready(function() {
$('.box-item').on("click", function() {
    if ($(this).next().hasClass('show')) {
        $(this).next().removeClass('show');
        $(this).next().slideUp(200);
    } else {
        $(this).parent().find('.box-content').removeClass('show');
        $(this).parent().find('.box-content').slideUp(200);
        $(this).next().toggleClass('show');
        $(this).next().slideToggle(200);
    }
});});(jQuery);



