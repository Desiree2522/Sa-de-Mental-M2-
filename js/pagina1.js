// Efeito de entrada no começo
const myObserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add('show');
      } else {
         entry.target.classList.remove('show');
      }
   });
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element));

// Swiper Configuração
const swiper = new Swiper('.slider-wrapper', {
   loop: true,
   grabCursor: true,
   spaceBetween: 30,

   // Paginação
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },

   // Botões de navegação
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // Breakpoints corretos
   breakpoints: {
      0: {
         slidesPerView: 1, // Tela pequena (mobile)
      },
      620: {
         slidesPerView: 2, // Tela média (tablets)
      },
      1024: {
         slidesPerView: 3, // Tela grande (desktops)
      },
   },
});
