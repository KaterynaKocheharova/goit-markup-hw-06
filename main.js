const modal = document.querySelector('.mobile-menu-modal-box');
const burger = document.querySelector('.burger-button');

burger.addEventListener('click', () => {
  modal.classList.add('is-open');
});
