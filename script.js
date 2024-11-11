window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav-transparent');
    } else {
        nav.classList.remove('nav-transparent');
    }
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 50,
      pagination: {
      
        type: "fraction",
      },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

