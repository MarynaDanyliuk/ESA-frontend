export function saveLanguagePreference(language) {
  localStorage.setItem('language', language);
}

export function getSavedLanguagePreference() {
  return localStorage.getItem('language');
}

document.addEventListener('DOMContentLoaded', function () {
  const savedLanguage = getSavedLanguagePreference();
  if (savedLanguage) {
    setLanguage(savedLanguage);
  }
});

export function setLanguage(language) {
  saveLanguagePreference(language);
}
