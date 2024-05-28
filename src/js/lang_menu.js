import translations from '../js/languages';
import { refs } from '../js/refs';

import {
  saveLanguagePreference,
  getSavedLanguagePreference,
} from '../js/localStorage';

const htmlElement = document.querySelector('html');

// Функція для зміни мови
function switchToLang(lang) {
  htmlElement.setAttribute('lang', lang);
}

document.addEventListener('DOMContentLoaded', function () {
  const savedLanguage = getSavedLanguagePreference() || 'en';
  console.log(savedLanguage);
  translate(savedLanguage);
  setPlaceholderTranslation(savedLanguage);
  switchToLang(savedLanguage);
});

document.querySelector('.icon-menu').addEventListener('click', () => {
  if (refs.langMenuList.style.display === 'block') {
    refs.langMenuList.style.display = 'none';
  } else {
    refs.langMenuList.style.display = 'block';
  }
});

refs.langSwitcher.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const lang = this.dataset.lang;
    console.log('select language:', lang); // Отримуємо обрану мову
    saveLanguagePreference(lang);
    refs.langMenuList.style.display = 'none';

    translate(lang); // Викликаємо функцію перекладу з обраною мовою
    setPlaceholderTranslation(lang);
  });
});

// Функція для перекладу
async function translate(lang) {
  try {
    console.log(lang);

    refs.translateItems.forEach(item => {
      const key = item.getAttribute('data-translate-key');
      // console.log(key);
      const originalText = item.textContent.trim();

      const translatedText =
        translations[lang][originalText] || translations[lang][key];

      if (translatedText) {
        item.textContent = translatedText; // Встановлюємо переклад як вміст елемента
        switchToLang(lang);
      }
    });
  } catch (error) {
    console.error('Error translating:', error);
  }
}

// Функція для встановлення плейсхолдерів з відповідними перекладами
function setPlaceholderTranslation(language) {
  refs.translateItems.forEach(input => {
    const placeholderKey = input.getAttribute('name');
    const translatedPlaceholder = translations[language][placeholderKey];
    if (translatedPlaceholder) {
      input.setAttribute('placeholder', translatedPlaceholder);
    }
  });
}

// function setTranslationTextByKey(language) {
//   refs.translateItems.forEach(item => {
//     // Отримати ключ для перекладу з data-translate-key атрибута
//     const key = item.getAttribute('data-translate-key');
//     console.log(key);
//     const translatedText = translations[language][key];
//     console.log(translatedText);
//     // Якщо переклад для цього ключа існує, замінити текст в елементі
//     if (translatedText) {
//       item.textContent = translatedText;
//     }
//   });
//   // refs.translateItems.forEach(input => {
//   //   const placeholderKey = input.getAttribute('name');
//   //   const translatedPlaceholder = translations[language][placeholderKey];
//   //   if (translatedPlaceholder) {
//   //     input.setAttribute('placeholder', translatedPlaceholder);
//   //   }
//   // });
// }

// // Ініціалізуємо i18next
// i18next
//   .use(i18nextBrowserLanguageDetector) // Для автоматичного визначення мови користувача
//   .init({
//     resources: {
//       en: {
//         translation: {
//           hello: 'Hello, World!',
//         },
//       },
//       fr: {
//         translation: {
//           hello: 'Bonjour le monde!',
//         },
//       },
//     },
//     fallbackLng: 'en', // Мова за замовчуванням
//   });

// // Функція для зміни мови
// function changeLanguage(lang) {
//   i18next.changeLanguage(lang);
//   updateContent();
// }

// // Функція для оновлення вмісту сторінки
// function updateContent() {
//   document.getElementById('heading').textContent = i18next.t('hello');
// }

// // Початкове оновлення вмісту сторінки
// updateContent();
