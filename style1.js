
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        loop: true,
        autowidth: true,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });