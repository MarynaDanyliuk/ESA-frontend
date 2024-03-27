import { refs } from './refs';

// import { BASE_URL_BACK } from '';
// const { BASE_URL_BACK } = process.env;

// console.log(BASE_URL_BACK)

(() => {
  refs.form.addEventListener('submit', e => {
    e.preventDefault();

    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const info = document.getElementById('info').value;
    const name = document.getElementById('name').value;
    const tel = document.getElementById('tel').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    const mailing = document.getElementById('mailing').checked;

    let categories = [];
    const categoryInputs = document.querySelectorAll(
      ".category input[type='checkbox']:checked"
    );
    categoryInputs.forEach(function (input) {
      categories.push(input.parentElement.textContent.trim());
    });

    let statuses = [];
    const statusInputs = document.querySelectorAll(
      ".status input[type='checkbox']:checked"
    );
    statusInputs.forEach(function (input) {
      statuses.push(input.parentElement.textContent.trim());
    });

    const formData = {
      country: country,
      city: city,
      info: info,
      name: name,
      tel: tel,
      email: email,
      comment: comment,
      mailing: mailing,
      categories: categories,
      statuses: statuses,
    };

    console.log(formData);
    try {
      const response = fetch('https://esa-backend.vercel.app/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // console.log(response);

      // if (response.ok) {
      //   console.log('Лист успішно відправлено');
      //   clearForm();
      // } else {
      //   console.error('Помилка відправки листа', response.statusText);
      // }

      clearForm();
    } catch (error) {
      console.error('Помилка відправки листа:', error);
    }
  });
})();

function clearForm() {
  // Отримуємо доступ до полів форми
  const form = document.querySelector('.js-submit-form');
  const formInputs = form.querySelectorAll('.form__input');
  const checkboxes = form.querySelectorAll('.checkbox__input');

  // Очищуємо значення полів вводу
  formInputs.forEach(function (input) {
    input.value = '';
  });

  // Знімаємо прапорці у всіх чекбоксів
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}

// console.log('Країна:', country);
// console.log('Місто:', city);
// console.log('Інформація:', info);
// console.log("Ім'я:", name);
// console.log('Телефон:', tel);
// console.log('Email:', email);
// console.log('Коментар:', comment);
// console.log('Підписка на розсилку:', mailing);
// console.log('Вибрані категорії:', categories);
// console.log('Вибрані статуси:', statuses);
// clearForm();
