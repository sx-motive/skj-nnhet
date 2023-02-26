// import '../styles/main.scss';

// components
import { loader } from './components/loader';
import { header } from './components/header';
import { menu } from './components/menu';

// animations
import { initScroll } from './scroll';
import { follow, setLinks } from './animations';
import { replaceCaptions, toggleMenu } from './utils';

// dom el
const body = document.querySelector('body');

// render
body.innerHTML += header;
body.innerHTML += loader.html;
body.innerHTML += menu;
loader.percent();

// onmount
window.onload = () => {
  loader.removeLoader();
  initScroll();
  replaceCaptions();

  const wrap = document.querySelector('[data-follow-wrap]');
  const followEl = document.querySelector('[data-follow-img]');
  const links = document.querySelectorAll('[data-link]');
  const images = document.querySelectorAll('[data-img]');
  const menuButton = document.getElementsByClassName('menu-btn')[0];
  wrap.onmousemove = (e) => follow(e, followEl);
  setLinks(links, images);
  menuButton.onclick = () => toggleMenu();
};
