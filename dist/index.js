'use strict';

const toggleActive = document.querySelector('.header__toggle');
const toggleClose = document.querySelector('.header__close');
const navMenu = document.querySelector('.header__nav');

const roomListContainer = document.querySelector('.rooms-grid');
const roomsList = document.querySelectorAll('.room');
const toogleRoom = document.querySelector('.toogleRoom');

const toggleMenu = (type) => {
  if (type === 'open') {
    navMenu.classList.add('header__nav--active');
  }
  if (type === 'close') return navMenu.classList.remove('header__nav--active');
};

toogleRoom.addEventListener('click', () => {
  roomListContainer.classList.remove('rooms-grid');
  roomListContainer.classList.add('rooms-grid--list');

  roomsList.forEach((room) => {
    room.classList.add('room--list');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  toggleActive.addEventListener('click', () => toggleMenu('open'));
  toggleClose.addEventListener('click', () => toggleMenu('close'));
});
