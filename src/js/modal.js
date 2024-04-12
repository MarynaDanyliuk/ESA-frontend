import { refs } from './refs';

// __________ open, close, clear Modal__________________

const productCards = document.querySelectorAll('.portfolio-card');

if (productCards.length > 0) {
  productCards.forEach(product => {
    const overlay = product.querySelector('.portfolio-card__overlay');

    overlay.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      overlay.classList.remove('active__link'); // Змінено з active_link на active__link
    });

    product.addEventListener('click', openModal);
  });
}

export function openModal(event) {
  event.preventDefault();

  const product = event.currentTarget;

  const overlayElement = product.querySelector('p.portfolio-card__overlay');

  console.log(overlayElement);

  overlayElement.classList.add('active__link');

  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    event.preventDefault();

    console.log('тут має відкриватись overlay по тачскріну');
    const product = event.currentTarget;

    const overlayElement = product.querySelector('p.portfolio-card__overlay');

    console.log(overlayElement);

    overlayElement.classList.add('active__link');
    // overlayElement.classList.add('active__link');
  }
}

// const productCards = refs.products;

// console.log(productCards);

// if (productCards.length > 0) {
//   productCards.forEach(product => {
//     product.addEventListener('click', openModal);
//   });
// }

// export function openModal(event) {
//   event.preventDefault();
//   console.log(event.target);
//   if (event.target.nodeName !== `IMG`) {
//     return;
//   }

//   if ('ontouchstart' in window || navigator.maxTouchPoints) {
//     // Забороняємо переход за посиланням
//     event.preventDefault();

//     console.log('тут має відкриватись overlay по тачскріну');

//     const parentElement = event.target.closest('.portfolio-card');

//     // console.log(parentElement);

//     const overlayElement = parentElement.querySelector(
//       '.portfolio-card__overlay'
//     );
//     console.log(overlayElement);
//     overlayElement.classList.add('active__link');
//   }
// }

// const cardOverlays = refs.overlays;

// if (cardOverlays.length > 0) {
//   cardOverlays.forEach(overlay => {
//     overlay.addEventListener('click', () => {
//       console.log('32');
//       overlay.classList.remove('active__link');
//     });
//   });
// }

// ___________ Modal close____________

const modalCloseButtons = refs.buttonClose;
if (modalCloseButtons) {
  for (let i = 0; i < modalCloseButtons.length; i++) {
    modalCloseButtons[i].addEventListener('click', closeModal);
  }
}

const modalBackdrops = refs.modalBackdrop;
if (modalBackdrops) {
  for (let i = 0; i < modalBackdrops.length; i++) {
    modalBackdrops[i].addEventListener('click', closeModal);
  }
}

export function closeModal(event) {
  event.preventDefault();
  refs.modal.classList.remove(`open`);
  if (event.target.nodeName === `A`) {
    event.target.closest('.modal').classList.remove('open');
  } else if (event.target.nodeName === `BUTTON`) {
    event.target.closest('.modal').classList.remove('open');
  }

  refs.body.classList.remove(`lock`);
  clearModal();
}

function clearModal() {
  refs.movieImage.innerHTML = '';
  refs.movieDescr.innerHTML = '';
}

// Знайдіть елемент portfolio-card__overlay всередині батьківського елемента
// if (cardOverlays.length > 0) {
//   cardOverlays.forEach(overlay => {
//     overlay.classList.add('active__link');
//     // overlay.addEventListener('click', () => {
//     //   overlay.classList.add('active__link');
//     // });
//   });
// }

// Додайте або видаліть клас active для portfolio-card__overlay
// overlayElement.classList.toggle('active__link');

// const user = auth.currentUser;

// if (!user) {
//   refs.modalLogin.classList.add(`open`);
// } else if (user) {

// MovieActiveId = event.target.getAttribute(`id`);

// FetchApiMovies.movieId = MovieActiveId;
// await fetchMovieDetailsByIdAndRender(MovieActiveId);
// refs.modal.classList.add(`open`);
// refs.body.classList.add(`lock`);
// return MovieActiveId;
// }
// return MovieActiveId;
// _________________Modal Auth___________________

// function openModalAuth(event) {
//   event.preventDefault();

//   ModalActive = event.target.getAttribute('id');
//   const user = auth.currentUser;
//   if (ModalActive === 'library_btn' && user) {
//     window.location.assign('#/library');
//     refs.modalRegister.classList.remove(`open`);
//     return;
//   }
//   if (ModalActive === 'library_btn' && !user) {
//     refs.modalLogin.classList.add(`open`);
//   } else {
//     refs.modalRegister.classList.toggle(`open`);
//     refs.modalLogin.classList.toggle(`open`);
//   }
// }

// _________________Modal Delete___________________

// export async function openModalDelete(event) {
//   event.preventDefault();

//   window.location.assign('#/library');
//   refs.modalDelete.classList.add(`open`);

//   const wrapperEl = event.target.closest('.wrapper');
//   MovieActiveId = wrapperEl.querySelector('.movie_img').id;

//   const user = auth.currentUser;
//   const data = MovieActiveId;
//   const key = 'watched';

//   return MovieActiveId;
// }
