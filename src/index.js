import menu from './menu-card.hbs';
import cards from './menu.json';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuRef = document.querySelector('.js-menu');

const cardItems = menu(cards);
menuRef.insertAdjacentHTML('beforeend', cardItems);

const themeRefs = document.querySelector('.theme-switch__toggle');

themeRefs.addEventListener('change', changeThem);

checkTheme();

function changeThem(evt) {
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);
  if (evt.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function checkTheme() {
  if (localStorage.theme === 'Theme.DARK') {
    document.body.classList.add(Theme.DARK);
    themeRefs.checked = true;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
}