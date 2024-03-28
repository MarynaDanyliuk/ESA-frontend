import { refs } from './refs';
// import { auth } from '../firebase/fb_config';

refs.openBurgerBtn.addEventListener(`click`, toggleBurgerMenu);
refs.closeBurgerBtn.addEventListener(`click`, toggleBurgerMenu);

function toggleBurgerMenu(event) {
  event.preventDefault();
  refs.mobileMenu.classList.toggle(`open`);
}

// document.addEventListener('DOMContentLoaded', function () {
//   const burgerMenu = document.querySelector('.menu-container');
//   const closeButton = burgerMenu.querySelector('#close_burger_btn');
//   const menuItems = burgerMenu.querySelectorAll('.mobile-menu__item a');

//   closeButton.addEventListener('click', function () {
//     burgerMenu.classList.remove('menu-active');
//   });

//   menuItems.forEach(function (item) {
//     item.addEventListener('click', function (e) {
//       e.preventDefault();
//       const target = this.getAttribute('href').substring(1);
//       const section = document.getElementById(target);
//       if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//         burgerMenu.classList.remove('menu-active');
//       }
//     });
//   });
// });

// function toggleBurgerMenu(event) {
//   event.preventDefault();
//   const user = auth.currentUser;
//   if (!user) {
//     refs.modalLogin.classList.add(`open`);
//   } else if (user) {
//     refs.mobileMenu.classList.toggle(`open`);
//   }
// }
