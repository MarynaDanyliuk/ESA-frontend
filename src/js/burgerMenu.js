import { refs } from './refs';

refs.openBurgerBtn.addEventListener(`click`, toggleBurgerMenu);
refs.closeBurgerBtn.addEventListener(`click`, toggleBurgerMenu);

function toggleBurgerMenu(event) {
  event.preventDefault();
  refs.mobileMenu.classList.toggle(`open`);
}
