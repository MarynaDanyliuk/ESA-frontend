import translations from '../js/languages';

document.addEventListener('DOMContentLoaded', function () {
  const savedLanguage = localStorage.getItem('language') || 'UA';
  console.log(savedLanguage);

  translate(savedLanguage);
});

document.querySelectorAll('.lang-switcher').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const lang = this.dataset.lang;
    console.log('select language:', lang); // Отримуємо обрану мову
    localStorage.setItem('language', lang);

    translate(lang); // Викликаємо функцію перекладу з обраною мовою
  });
});

// Функція для перекладу
async function translate(lang) {
  try {
    document.querySelectorAll('.translate').forEach(item => {
      const originalText = item.textContent.trim(); // Отримуємо оригінальний текст елемента

      const translatedText = translations[lang][originalText];

      if (translatedText) {
        item.textContent = translatedText; // Встановлюємо переклад як вміст елемента
      }
    });
  } catch (error) {
    console.error('Error translating:', error);
  }
}

const subMenus = document.querySelectorAll('.sub-menu__list');

// Додати обробник подій click до кожного елемента підменю
subMenus.forEach(subMenu => {
  subMenu.addEventListener('click', () => {
    // Змінити стиль display на none при кліці
    subMenu.style.display = 'none';
  });
});

// import data from '../languages.json';
// console.log(data);
// Завантаження JSON з перекладами
// async function loadTranslations(lang) {
//   try {
//     const response = await fetch(
//       '/Users/marynadanyliuk/JavaScript/ESA-frontend/src/languages.json'
//     );
//     const data = await response.json();
//     console.log(data); // Додано для перевірки даних
//     return data[lang];
//   } catch (error) {
//     console.error('Error loading translations:', error);
//     throw error; // Пропагуємо помилку для обробки виклику функції
//   }
// }

// Зміна текству згідно вибраної мови
// document.querySelector('.nav_item').textContent =
//   lang === 'en' ? 'Language' : 'Мова';

// const translations = {
//   en: {
//     Продукція: 'Products',
//     'Підхід до праці': 'Approach to work',
//     'Форма запиту': 'Order form',
//     Мова: 'Language',
//     'Будуємо мости Довіри': 'Building bridges of trust',
//     'З дня в день': 'From day to day',
//     'Експорт швидко розвиваєш -': 'You develop exports quickly - ',
//     'популярність в світі маєш': 'you are popular in the world',
//     Швидкiсть: 'Speed',
//     Якість: 'Quality',
//     Надійність: 'Reliability',
//   },
//   ua: {
//     Products: 'Продукція',
//     'Approach to work': 'Підхід до праці',
//     'Order form': 'Форма запиту',
//     Language: 'Мова',
//     'Building bridges of trust': 'Будуємо мости Довіри',
//     'From day to day': 'З дня в день',
//     'You develop exports quickly - ': 'Експорт швидко розвиваєш -',
//     'you are popular in the world': 'популярність в світі маєш',
//     Speed: 'Швидкiсть',
//     Quality: 'Якість',
//     Reliability: 'Надійність',
//   },
// };

// const translations = await loadTranslations(lang);

// function changeLanguage(lang) {
//   if (lang === 'en') {
//     translate('en');
//     console.log('Тут має бути переклад на англійську');
//   } else if (lang === 'ua') {
//     translate('ua');
//     console.log('Тут має бути переклад на українську');
//   }
// }

// // Функція для перекладу
// function translate(lang) {
//   // Ваша логіка перекладу тут
//   console.log('Переклад на мову:', lang);
// }

// Обробник подій для посилань в меню
// document.querySelectorAll('.lang-switcher').forEach(link => {
//   link.addEventListener('click', function (event) {
//     event.preventDefault(); // Зупиняємо перехід за посиланням
//     const lang = this.getAttribute('data-lang'); // Отримуємо обрану мову
//     translate(lang); // Викликаємо функцію перекладу з обраною мовою
//   });
// });

// // Завантаження JSON з перекладами
// async function loadTranslations(lang) {
//   try {
//     const response = await fetch('src/languages.json');
//     const data = await response.json();
//     return data[lang];
//   } catch (error) {
//     return console.error('Error loading translations:', error);
//   }
// }

// // Функція для перекладу
// function translate(lang) {
//   // Зміна текству згідно вибраної мови
//   document.querySelector('.nav_item').textContent =
//     lang === 'en' ? 'Language' : 'Мова';

//   // Завантажуємо переклади для обраної мови
//   loadTranslations(lang).then(translations => {
//     // Перекладаємо тексти з класом 'translate'
//     document.querySelectorAll('.translate').forEach(item => {
//       const originalText = item.getAttribute('data-original');
//       item.textContent = translations[originalText] || originalText;
//     });

//     // Додатково перекладаємо заголовки та описи
//     const benefitTitles = document.querySelectorAll('.benefit-list__title');
//     const benefitDescriptions = document.querySelectorAll(
//       '.benefit-list__description'
//     );

//     benefitTitles.forEach(title => {
//       const originalText = title.textContent.trim();
//       title.textContent = translations[originalText] || originalText;
//     });

//     benefitDescriptions.forEach(description => {
//       const originalText = description.textContent.trim();
//       description.textContent = translations[originalText] || originalText;
//     });
//   });
// }

// translate(lang);

// document.querySelectorAll('.lang-switcher').forEach(item => {
//   item.addEventListener('click', function (event) {
//     event.preventDefault();
//     const lang = this.getAttribute('data-lang');
//     changeLanguage(lang);
//   });
// });

// function translate(lang) {
//   // Зміна текству згідно вибраної мови
//   document.querySelector('.nav_item').textContent =
//     lang === 'en' ? 'Language' : 'Мова';
//   const translations = lang === 'en' ? translations.en : translations.ua;
//   document.querySelectorAll('.translate').forEach(item => {
//     const originalText = item.getAttribute('data-original');
//     item.textContent = translations[originalText];
//   });

//   // Додатково перекладаємо заголовки та описи
//   const benefitTitles = document.querySelectorAll('.benefit-list__title');
//   const benefitDescriptions = document.querySelectorAll(
//     '.benefit-list__description'
//   );

//   benefitTitles.forEach(title => {
//     const originalText = title.textContent.trim();
//     title.textContent = translations[originalText];
//   });

//   benefitDescriptions.forEach(description => {
//     const originalText = description.textContent.trim();
//     description.textContent = translations[originalText];
//   });
// }

// function translate(lang) {
//   // Зміна текству згідно вибраної мови
//   document.querySelector('.nav_item').textContent =
//     lang === 'en' ? 'Language' : 'Мова';
//   const translations = lang === 'en' ? translations.en : translations.ua;
//   document.querySelectorAll('.translate').forEach(item => {
//     const originalText = item.getAttribute('data-original');
//     item.textContent = translations[originalText];
//   });
// }

// Переклади текстів
// const translations = {
//   en: {
//     Продукція: 'Products',
//     'Підхід до праці': 'Approach to work',
//     'Форма запиту': 'Order form',
//   },
//   ua: {
//     Products: 'Продукція',
//     'Approach to work': 'Підхід до праці',
//     'Order form': 'Форма запиту',
//   },
// };

// Обробник подій для кліку на перемикач мови

// document.querySelectorAll('.lang-switcher').forEach(item => {
//   item.addEventListener('click', function (event) {
//     event.preventDefault();

//     const lang = this.getAttribute('data-lang');

//     changeLanguage(lang);
//   });
// });

// Переклади текстів
// const translations = {
//   en: {
//     Продукція: 'Products',
//     'Підхід до праці': 'Approach to work',
//     'Форма запиту': 'Order form',
//     Швидкiсть: 'Speed',
//     Якість: 'Quality',
//     Надійність: 'Reliability',
//   },
//   ua: {
//     Products: 'Продукція',
//     'Approach to work': 'Підхід до праці',
//     'Order form': 'Форма запиту',
//     Speed: 'Швидкiсть',
//     Quality: 'Якість',
//     Reliability: 'Надійність',
//   },
// };

// Виклик функції перекладу з потрібною мовою
// translate('en'); // або 'ua' для української мови

// function translateToEnglish() {
//   // Зміна текству на англійську мову
//   document.querySelector('.nav_item').textContent = 'Language';
//   // document.querySelectorAll('.sub-menu__list li a')[0].textContent = 'EN';
//   // document.querySelectorAll('.sub-menu__list li a')[1].textContent = 'UA';
// }

// // Функція для перекладу текству на українську мову
// function translateToUkrainian() {
//   // Зміна текству на українську мову
//   document.querySelector('.nav_item').textContent = 'Мова';
//   // document.querySelectorAll('.sub-menu__list li a')[0].textContent = 'EN';
//   // document.querySelectorAll('.sub-menu__list li a')[1].textContent = 'UA';
// }

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
// Функція для зміни мови та перекладу тексту
// function changeLanguage(lang) {
//   // Зміна значення атрибута lang для всіх елементів, що потребують перекладу
//   document.querySelectorAll('.translate').forEach(item => {
//     // Отримання текству, що міститься у data-original
//     const originalText = item.getAttribute('data-original');
//     // Зміна текству на переклад
//     item.textContent = translations[lang][originalText];
//   });
// }
