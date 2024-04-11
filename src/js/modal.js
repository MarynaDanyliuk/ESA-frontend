import { refs } from './refs';
// import fetchApiMovies from './apiService';

// const FetchApiMovies = new fetchApiMovies();

// export let MovieActiveId = null;
// let ModalActive = '';

// refs.products.addEventListener(`click`, openModal);

// refs.libraryBtn.addEventListener(`click`, openModalAuth);
// refs.registerLink.addEventListener('click', openModalAuth);
// refs.loginLink.addEventListener('click', openModalAuth);

// import { fetchMovieDetailsByIdAndRender } from './fetchAndRender';

// import { auth } from '../firebase/fb_config';

// __________ open, close, clear Modal__________________

export function openModal(event) {
  event.preventDefault();
  console.log(event.target);
  if (event.target.nodeName !== `LI`) {
    return;
  }
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    // Забороняємо переход за посиланням
    event.preventDefault();

    // Отримуємо посилання на модальне вікно
    const modal = document.getElementById('modal');

    // Показуємо модальне вікно
    modal.style.display = 'block';
  }
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
}

const modalProducts = refs.products;
if (modalProducts) {
  for (let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', openModal);
  }
}

console.log(modalProducts);

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
