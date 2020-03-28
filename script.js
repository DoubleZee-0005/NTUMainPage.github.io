$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("fixed-top");
    $(".navbar-brand").css('visibility','visible');
    $(".navbar-brand").css('margin-left','5%')
    $("nav").css('border-bottom','2px solid rgb(231,231,231')
  }
  else {
    $("nav").removeClass("fixed-top");
    $(".navbar-brand").css('visibility','hidden');
  }
});
