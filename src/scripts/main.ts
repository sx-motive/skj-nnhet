import { loader } from './loader';
import { footer, header, page, menu } from './page';
import { initScroll } from './scroll';
import AnimaView from 'anima-view';

// main dom elements
const contentDOM = document.getElementById('content') as HTMLElement;
const bodyDOM = document.querySelector('body') as HTMLBodyElement;

// render
contentDOM.innerHTML += page + footer;
bodyDOM.innerHTML += loader.html + menu + header;
loader.counter();

// rendered dom elements
const menuBtnDOM = document.getElementById('menu-btn') as HTMLElement;
const menuDOM = document.getElementById('menu') as HTMLElement;
const titlesDOM = document.querySelectorAll('[data-title]');
const textDOM = document.querySelectorAll('[data-text]');

// event listener and function for mobile menu
const toggleMenu = () => {
  bodyDOM.classList.toggle('with-menu');
  const arrWords = Array.from(
    menuDOM.getElementsByClassName('word') as HTMLCollectionOf<HTMLElement>
  );
  arrWords.map((word) => {
    word.classList.toggle('show');
  });
};
menuBtnDOM.onclick = () => toggleMenu();

// init split captions with Anima
const animaTitles = new AnimaView(titlesDOM, 'random');
const animaText = new AnimaView(textDOM);

animaTitles.init();
animaText.init();

// replace initial animations
const replaeAnimation = () => {
  const arrWords = [...document.querySelectorAll('[data-intro]')].map((i) => i);
  arrWords.map((word) => {
    [...word.children].map((i) => i.classList.remove('show'));
  });
};

// onload functions
window.onload = () => {
  initScroll();
  replaeAnimation();
  loader.removeLoader();
};
