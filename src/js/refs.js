export const refs = {
  // _______________Request form_____________
  form: document.querySelector(`.js-submit-form`),
  button: document.querySelector(`.search-button`),
  navItemMenu: document.querySelectorAll('.nav_item_menu'),

  // ________________Burger menu_______________________
  mobileMenu: document.querySelector('.menu__container'),
  openBurgerBtn: document.getElementById('open_burger_btn'),
  closeBurgerBtn: document.getElementById('close_burger_btn'),
  libraryBtnMenu: document.getElementById('library_btn_menu'),

  // _______________Modal___________
  // modal: document.querySelector(`.modal`),
  // modalContent: document.querySelector(`.modal-data`),
  // movieImage: document.querySelector('.image-wrap'),
  // movieDescr: document.querySelector('.movie-descr'),
  // buttonClose: document.querySelectorAll(`.modal-close`),
  // modalBackdrop: document.querySelectorAll(`.modal-body`),

  // ______________Header__________________________
  headerNavLinks: document.querySelectorAll('.nav_item'),
  headerNavButtons: document.querySelector('.nav_list_button'),
  buttonWatched: document.getElementById('watched'),
  buttonQueue: document.getElementById('queue'),
  butttonsLibrary: document.querySelector('.modal-nav'),
  buttonHeaderNav: document.querySelector('.nav_list_button'),
  logo: document.querySelector('.logo'),
  homeBtn: document.getElementById(`home_btn`),
  libraryBtn: document.getElementById(`library_btn`),
  signOut: document.getElementById('auth_btn'),
  user: document.querySelector('.user'),

  // _____________Products_______________________
  products: document.querySelectorAll('.portfolio-card'),
  overlays: document.querySelectorAll('.portfolio-card__overlay'),

  // _______________Utils___________________
  body: document.querySelector(`body`),
  scrollToTopBtn: document.getElementById('scrollToTopBtn'),
};
