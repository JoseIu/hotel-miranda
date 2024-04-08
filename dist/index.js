'use strict';

const toggleActive = document.querySelector('.header__toggle');
const toggleClose = document.querySelector('.header__close');
const navMenu = document.querySelector('.header__nav');

const toggleMenu = (type) => {
  if (type === 'open') {
    navMenu.classList.add('header__nav--active');
  }
  if (type === 'close') return navMenu.classList.remove('header__nav--active');
};

document.addEventListener('DOMContentLoaded', () => {
  toggleActive.addEventListener('click', () => toggleMenu('open'));
  toggleClose.addEventListener('click', () => toggleMenu('close'));
});
