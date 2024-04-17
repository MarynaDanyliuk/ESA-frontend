import { refs } from './refs';

refs.openBurgerBtn.addEventListener(`click`, toggleBurgerMenu);
refs.closeBurgerBtn.addEventListener(`click`, toggleBurgerMenu);

function toggleBurgerMenu(event) {
  event.preventDefault();
  refs.mobileMenu.classList.toggle(`open`);
}

document.querySelectorAll('.menu__link').forEach(item => {
  item.addEventListener('click', function () {
    // Закриття випадаючого меню
    refs.mobileMenu.classList.remove('open');

    console.log('123');

    // Здійснення плавного переходу до розділу лендінгу
    const targetSectionId = this.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
