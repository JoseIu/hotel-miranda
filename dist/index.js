'use strict';
const toggleActive = document.querySelector('.header__toggle');
const toggleClose = document.querySelector('.header__close');
const navMenu = document.querySelector('.header__nav');

const roomListContainer = document.querySelector('.rooms-grid');
const roomsList = document.querySelectorAll('.room');
const toogleRoomList = document.querySelector('.toogle-list');
const toogleRoomGrid = document.querySelector('.toogle-grid');

const toggleMenu = (type) => {
  if (type === 'open') {
    toggleClose.classList.remove('header__toggle--hidden');
    toggleActive.classList.add('header__toggle--hidden');

    navMenu.classList.add('header__nav--active');
  }
  if (type === 'close') {
    toggleActive.classList.remove('header__toggle--hidden');
    toggleClose.classList.add('header__toggle--hidden');
    return navMenu.classList.remove('header__nav--active');
  }
};

if (toogleRoomList) {
  toogleRoomList.addEventListener('click', () => {
    toogleRoomList.classList.add('rooms__action--active');
    toogleRoomGrid.classList.remove('rooms__action--active');

    roomListContainer.classList.add('rooms-grid--list');

    roomsList.forEach((room) => {
      room.classList.add('room--list');
      //div-content
      room.children[1].classList.add('room__content--list');
    });
  });
}
if (toogleRoomGrid) {
  toogleRoomGrid.addEventListener('click', () => {
    toogleRoomList.classList.remove('rooms__action--active');

    toogleRoomGrid.classList.add('rooms__action--active');

    roomListContainer.classList.remove('rooms-grid--list');

    roomsList.forEach((room) => {
      room.classList.remove('room--list');
    });
  });
}
if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // Optional parameters
    direction: 'horizontal',

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
      },
    },
  });
}
document.addEventListener('DOMContentLoaded', () => {
  toggleActive.addEventListener('click', () => toggleMenu('open'));
  toggleClose.addEventListener('click', () => toggleMenu('close'));
});
