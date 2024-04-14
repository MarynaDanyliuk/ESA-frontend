// document.addEventListener('DOMContentLoaded', function () {
//   // Отримуємо всі посилання мов
//   const langLinks = document.querySelectorAll('.sub-menu__list a');

//   // Перебираємо кожне посилання
//   langLinks.forEach(function (link) {
//     // Додаємо обробник подій для кожного посилання
//     link.addEventListener('click', function (event) {
//       // Передаємо клікане посилання
//       event.preventDefault();
//       // Отримуємо текст посилання
//       const lang = this.textContent;
//       // Встановлюємо мову, наприклад, якщо ви використовуєте фреймворк, ви можете встановити активну мову за допомогою свого інтернаціоналізаційного механізму.
//       // Тут буде ваш код, який встановлює мову.
//       console.log('Ви вибрали мову:', lang);
//     });
//   });
// });

// let isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };
// let body = document.querySelector('body');
// if (isMobile.any()) {
//   body.classList.add('touch');
//   let arrow = document.querySelectorAll('.arrow');
//   for (i = 0; i < arrow.length; i++) {
//     let thisLink = arrow[i].previousElementSibling;
//     let subMenu = arrow[i].nextElementSibling;
//     let thisArrow = arrow[i];

//     thisLink.classList.add('parent');
//     arrow[i].addEventListener('click', function () {
//       subMenu.classList.toggle('open');
//       thisArrow.classList.toggle('active');
//     });
//   }
// } else {
//   body.classList.add('mouse');
// }

// Функція для зміни мови та перекладу тексту
function changeLanguage(lang) {
  // Зміна значення атрибута lang для всіх елементів, що потребують перекладу
  document.querySelectorAll('.translate').forEach(item => {
    // Отримання текству, що міститься у data-original
    const originalText = item.getAttribute('data-original');
    // Зміна текству на переклад
    item.textContent = translations[lang][originalText];
  });
}

// // Обробник подій для кліку на перемикач мови
// document.querySelectorAll('.language-switcher').forEach(item => {
//   item.addEventListener('click', function (event) {
//     event.preventDefault();
//     // Отримання значення мови з атрибута data-lang
//     const lang = this.getAttribute('data-lang');
//     // Виклик функції зміни мови
//     changeLanguage(lang);
//   });
// });

// Переклади текстів
const translations = {
  en: {
    Продукція: 'Products',
    'Підхід до праці': 'Approach to work',
    'Форма запиту': 'Order form',
  },
  ua: {
    Products: 'Продукція',
    'Approach to work': 'Підхід до праці',
    'Order form': 'Форма запиту',
  },
};

// Обробник подій для кліку на перемикач мови

document.querySelectorAll('.lang-switcher').forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();

    const lang = this.getAttribute('data-lang');

    changeLanguage(lang);
  });
});

function changeLanguage(lang) {
  if (lang === 'en') {
    translateToEnglish();
    console.log('Тут має бути переклад на англійську');
  } else if (lang === 'ua') {
    translateToUkrainian();

    console.log('Тут має бути переклад на українську');
  }
}

function translateToEnglish() {
  // Зміна текству на англійську мову
  document.querySelector('.nav_item').textContent = 'Language';
  // document.querySelectorAll('.sub-menu__list li a')[0].textContent = 'EN';
  // document.querySelectorAll('.sub-menu__list li a')[1].textContent = 'UA';
}

// Функція для перекладу текству на українську мову
function translateToUkrainian() {
  // Зміна текству на українську мову
  document.querySelector('.nav_item').textContent = 'Мова';
  // document.querySelectorAll('.sub-menu__list li a')[0].textContent = 'EN';
  // document.querySelectorAll('.sub-menu__list li a')[1].textContent = 'UA';
}
