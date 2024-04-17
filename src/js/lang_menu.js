import translations from '../js/languages';
import { refs } from '../js/refs';

import {
  saveLanguagePreference,
  getSavedLanguagePreference,
} from '../js/localStorage';

document.addEventListener('DOMContentLoaded', function () {
  const savedLanguage = getSavedLanguagePreference() || 'UA';
  console.log(savedLanguage);
  translate(savedLanguage);
});

document.querySelector('.icon-menu').addEventListener('click', () => {
  refs.langMenuList.style.display = 'block';
});

refs.langSwitcher.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const lang = this.dataset.lang;
    console.log('select language:', lang); // Отримуємо обрану мову
    saveLanguagePreference(lang);
    refs.langMenuList.style.display = 'none';

    translate(lang); // Викликаємо функцію перекладу з обраною мовою
  });
});

// Функція для перекладу
async function translate(lang) {
  try {
    refs.translateItems.forEach(item => {
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
