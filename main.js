const modal = document.querySelector('.mobile-menu-modal-box');
const burger = document.querySelector('.burger-button');
const closeBtn = document.querySelector('.mobile-menu-close-button');
const menuNavLinks = document.querySelectorAll('.mobile-menu-modal-box-link');

burger.addEventListener('click', () => {
  modal.classList.add('is-open');
});

function closeModal() {
  modal.classList.remove('is-open');
}

closeBtn.addEventListener('click', closeModal);
menuNavLinks.forEach(link => {
  link.addEventListener('click', closeModal);
});
