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
  const savedLanguage = getSavedLanguagePreference() || 'ua';
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
      const originalText = item.textContent.trim();

      const translatedText = translations[lang][originalText];

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
