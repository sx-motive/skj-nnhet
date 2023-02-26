// import '../styles/main.scss';

import loader from './loader';
import { header } from './header';
import { initScroll } from './scroll';
import { followImg } from './animations';

const body = document.querySelector('body');
body.innerHTML += header;
loader.percent();

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const replaceCaptions = () => {
  const captions = [...document.querySelectorAll('[data-caption]')];
  captions.forEach((caption) => {
    const tag = caption.tagName;
    const arrWords = caption.innerHTML.split(' ');
    const newArrWords = arrWords.map((word) => {
      let num = 0;

      if (tag == 'P' && word !== '') {
        return `<span class="wrap-word"><span class="word" style="transform: translate(0, 100%)">${word}</span></span>`;
      }

      switch (getRandomInt(4)) {
        case 0:
          num = '0 ,-110%';
          break;
        case 1:
          num = '0, 110%';
          break;
        case 2:
          num = '110%, 0';
          break;
        case 3:
          num = '-110%, 0';
      }
      if (word !== '') {
        return `<span class="wrap-word"><span class="word" style="transform: translate(${num})">${word}</span></span>`;
      }
    });
    caption.innerHTML = newArrWords.join(' ');
  });
};

const toggleMenu = () => {
  const content = document.getElementsByClassName('content')[0];
  const header = document.querySelector('header');
  const menu = document.getElementById('menu');
  const arrWords = [...menu.getElementsByClassName('word')];

  arrWords.map((word) => {
    word.classList.toggle('translate-menu');
  });
  content.classList.toggle('with-menu');
  header.classList.toggle('with-menu');
};

replaceCaptions();

window.onload = () => {
  loader.removeLoader();
  initScroll();

  const menuButton = document.getElementsByClassName('menu-btn')[0];
  menuButton.addEventListener('click', toggleMenu);
};
