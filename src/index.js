//  tutorial : https://codepen.io/ebinabo/pen/WNwjEaL

/*
https://gsap.com/
*/
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
  
  const body = document.body;
  const footer = document.querySelector('footer');
  const isDark = body.classList.toggle('dark-mode');
  
  gsap.to(body, {
    backgroundColor: isDark ? '#2f2f2f' : '#fbfbf0',
    color: isDark ? '#f6f6dc' : '#2f2f2f',
    duration: 0.25
  });

  gsap.to(footer, {
    borderColor:isDark ? '#f6f6dc' : '#2f2f2f',
    duration: 0.15});
});

/* 
https://swiperjs.com
*/
const swiper = new Swiper(".swiper-slider", {
  centeredSlides: true,
  speed:800,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  touchRatio: 1.5,
  spaceBetween: 0.0,
  mousewheel: false,
  keyboard: {
    enabled: true
  },
  autoplay:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  }
});

/* 
https://github.com/locomotivemtl/locomotive-scroll 
*/
const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

// Navigation
document.querySelectorAll('.nav-bar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    scroller.scrollTo(targetSection);
  });
});

// go top
document.querySelector('.go').addEventListener('click', function (e) {
  e.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  scroller.scrollTo(targetSection);
});

// -----Background--------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
          move();
      });
  }

  window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
  });

  move();
});