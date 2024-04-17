// Зберігаємо обрану мову у localStorage
export function saveLanguagePreference(language) {
  localStorage.setItem('language', language);
}

// Отримуємо збережену мову з localStorage
export function getSavedLanguagePreference() {
  return localStorage.getItem('language');
}

// Встановлюємо обрану мову після завантаження сторінки
document.addEventListener('DOMContentLoaded', function () {
  const savedLanguage = getSavedLanguagePreference();
  if (savedLanguage) {
    // Встановлюємо мову на збережену
    setLanguage(savedLanguage);
  }
});

// При зміні мови встановлюємо її та зберігаємо у localStorage
export function setLanguage(language) {
  // Код для встановлення мови на сторінці (наприклад, вибірка перекладів)
  saveLanguagePreference(language);
}
