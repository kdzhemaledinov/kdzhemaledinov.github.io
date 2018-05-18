$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        navText: ["<img src='../img/arrow-left-mobile.png'>", "<img src='../img/arrow-right-mobile.png'>"],
      },
      768: {
        items: 3,
        navText: ["<img src='../img/arrow-left.svg'>", "<img src='../img/arrow-right.svg'>"],
      }
    }
  });

  $("a[rel='m_PageScroll2id']").mPageScroll2id({ scrollSpeed: 200 });

  $(".hamburger, .mobile-row").click(function () {
    $('.hamburger').toggleClass("active");
    $(document.body).toggleClass("no-scroll");
    $('.mobile-row').toggleClass("show");
  });
});

