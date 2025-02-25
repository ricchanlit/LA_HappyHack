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
    slidesToShow: 4,
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

  $("#cources-js").particleground({
    dotColor: "#fff",
    lineColor: "#fff",
    particleRadius: 4,
    parallax: false,
    minSpeedX: 0.8,
    maxSpeedX: 1.6,
    minSpeedY: 0.8,
    maxSpeedY: 1.6,
    particleRadius: 3,
    lineWidth: 0.5,
  });
});
