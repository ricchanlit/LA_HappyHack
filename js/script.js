$(function () {
  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position }, 300, "swing");
    return false;
  });

  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 5,
    infinite: true,
  });

  $("#mv").bgSwitcher({
    images: [
      "img/background1.jpg",
      "img/background2.jpg",
      "img/background3.jpg",
      "img/background4.jpg",
      "img/background5.jpg",
    ],
    interval: 5000,
    loop: true,
    effect: "fade",
    duration: 500,
    easing: "swing",
  });

  $(window).scroll(function () {
    var targetElement = $(".section").offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200) {
      $(".section").css("opacity", "1");
      $(".section").css("transform", "translateY(0)");
    }
  });

  $("#cources").particleground({
    dotColor: "#ccc",
    lineColor: "#ddd",
    particleRadius: 4,
  });
});
