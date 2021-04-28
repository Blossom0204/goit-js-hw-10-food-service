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

const themeRefs = document.querySelector('#theme-switch-toggle');

themeRefs.addEventListener('change', changeThem);

function changeThem(evt) {
  if (themeRefs.checked) {
    darkTheme();
    localStorage.setItem('theme', Theme.DARK);
  } else {
    lightTheme();
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function lightTheme(evt) {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
}

function darkTheme(evt) {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
}

function currentThem() {
  const localTheme  = localStorage.getItem('theme'); 
  if (localTheme  === Theme.DARK) {
   document.body.classList.add(Theme.DARK);
   themeRefs.checked = true;
  }
}
currentThem();