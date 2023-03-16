import { loader } from './loader';
import { footer, header, page, menu } from './page';
import { initScroll } from './scroll';
import AnimaView from './animaview';

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
const wrapFollowDOM = document.querySelector(
  '[data-follow-wrap]'
) as HTMLElement;
const elementFollowDOM = document.querySelector(
  '[data-follow-img]'
) as HTMLElement;
const linksDOM = document.querySelectorAll(
  '[data-link]'
) as NodeListOf<HTMLElement>;
const imagesDOM = document.querySelectorAll(
  '[data-img]'
) as NodeListOf<HTMLElement>;

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

// follow mouse animation

const follow = (e: MouseEvent) => {
  const mousePos = {
    x: e.clientX,
    y: e.clientY,
    hor: () => (e.clientX > window.innerWidth / 2 ? true : false),
  };

  console.log('oi?');

  elementFollowDOM.style.left = `${mousePos.x - 200}px`;
  elementFollowDOM.style.top = `${mousePos.y - 200}px`;
  elementFollowDOM.style.transform = `rotate(${
    mousePos.hor() ? '7deg' : '-7deg'
  })`;
};

const setLinks = (
  links: NodeListOf<HTMLElement>,
  images: NodeListOf<HTMLElement>
) => {
  [...links].map((link) => {
    const num = link.dataset.link;
    link.addEventListener('mouseenter', () => {
      [...images].forEach((image) => {
        image.dataset.img == num ? image.classList.add('active') : '';
      });
    });
    link.addEventListener('mouseleave', () => {
      [...images].forEach((image) => {
        image.dataset.img == num ? image.classList.remove('active') : '';
      });
    });
  });
};

// onload functions
window.onload = () => {
  initScroll();
  replaeAnimation();
  loader.removeLoader();
  setLinks(linksDOM, imagesDOM);
  wrapFollowDOM.onmousemove = (e) => follow(e);
};
