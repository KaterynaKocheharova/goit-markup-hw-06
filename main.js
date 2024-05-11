// ================================= OPENING AND CLOSING FNS

const html = document.querySelector('html');

function openModal(element) {
  element.classList.add('is-open');
  html.classList.add('no-scroll');
}

function closeModal(element) {
  element.classList.remove('is-open');
  html.classList.remove('no-scroll');
}

// ================================== MENU
const modal = document.querySelector('.mobile-menu-modal-box');
const burger = document.querySelector('.burger-button');
const closeBtn = document.querySelector('.mobile-menu-close-button');
const menuNavLinks = document.querySelectorAll('.mobile-menu-modal-box-link');

burger.addEventListener('click', () => openModal(modal));
closeBtn.addEventListener('click', () => closeModal(modal));

menuNavLinks.forEach(link => {
  link.addEventListener('click', () => closeModal(modal));
});

// ================================== FORM
const formModal = document.querySelector('.backdrop');
const formCloseBtn = document.querySelector('.close-button');
const heroBtn = document.querySelector('.hero-button');

heroBtn.addEventListener('click', () => openModal(formModal));
formCloseBtn.addEventListener('click', () => closeModal(formModal));
