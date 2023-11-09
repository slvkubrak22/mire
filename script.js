'use strict'

const header = document.querySelector('.header--wrapper');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu')

window.addEventListener('scroll', function() {
  if (this.window.scrollY > 50) {
    header.style.backgroundColor  = '#151515'
  } else {
    header.style.backgroundColor = 'transparent'
  }
});

burgerMenu.addEventListener('click', function() {
    document.querySelector('.burger-menu__line--top').classList.toggle('burger-menu__line--top-active');
    document.querySelector('.burger-menu__line--bottom').classList.toggle('burger-menu__line--bottom-active');
    document.querySelector('.burger-menu__line--mid').classList.toggle('burger-menu__line--mid-active');
    mobileMenu.classList.toggle('mobile-menu-active');
    document.querySelector('.header__main-logo').classList.toggle('main-logo-none');
});