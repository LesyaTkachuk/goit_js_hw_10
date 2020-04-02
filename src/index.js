import menuItems from './menu.json';
import menuTemplate from './templates/menu.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('.js-switch-input'),
  list: document.querySelector('.js-menu'),
};

const markup = menuTemplate(menuItems);
refs.list.insertAdjacentHTML('beforeend', markup);

const persistentTheme = localStorage.getItem('theme');
const classType = persistentTheme ? persistentTheme : 'light-theme';
refs.body.classList.add(classType);
refs.input.checked = persistentTheme === Theme.DARK ? true : false;

const inputHandler = e => {
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);
  const kind = refs.body.classList.contains(Theme.LIGHT)
    ? Theme.LIGHT
    : Theme.DARK;
  localStorage.setItem('theme', kind);
};

refs.input.addEventListener('change', inputHandler);
