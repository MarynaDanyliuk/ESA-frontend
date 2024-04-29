import { refs } from './refs';

if (refs.products.length > 0) {
  refs.products.forEach(product => {
    const overlay = product.querySelector('.portfolio-card__overlay');

    overlay.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      overlay.classList.remove('active__link');
    });

    product.addEventListener('click', showOverlay);
  });
}

export function showOverlay(event) {
  event.preventDefault();

  const product = event.currentTarget;

  const overlayElement = product.querySelector('p.portfolio-card__overlay');

  overlayElement.classList.add('active__link');

  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    event.preventDefault();
    overlayElement.classList.add('active__link');
  }
}
