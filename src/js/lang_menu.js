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
