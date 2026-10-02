import { loader } from './loader';
import { footer, header, page, menu } from './page';
import { initScroll } from './scroll';
import AnimaView from './animaview';

const contentDOM = document.getElementById('content') as HTMLElement;
const bodyDOM = document.body;

contentDOM.insertAdjacentHTML('beforeend', page + footer);
bodyDOM.insertAdjacentHTML('beforeend', loader.html + menu + header);
loader.counter();

const menuBtnDOM = document.getElementById('menu-btn') as HTMLElement;
const menuDOM = document.getElementById('menu') as HTMLElement;
const followWrapDOM = document.querySelector(
  '[data-follow-wrap]'
) as HTMLElement;
const followImgDOM = document.querySelector('[data-follow-img]') as HTMLElement;
const linksDOM = document.querySelectorAll<HTMLElement>('[data-link]');
const imagesDOM = document.querySelectorAll<HTMLElement>('[data-img]');

const toggleMenu = () => {
  bodyDOM.classList.toggle('with-menu');
  for (const word of menuDOM.getElementsByClassName('word')) {
    word.classList.toggle('show');
  }
};
menuBtnDOM.addEventListener('click', toggleMenu);

new AnimaView(document.querySelectorAll('[data-title]'), 'random').init();
new AnimaView(document.querySelectorAll('[data-text]')).init();

const resetIntroAnimation = () => {
  document.querySelectorAll('[data-intro] > .word').forEach((word) => {
    word.classList.remove('show');
  });
};

const followMouse = (e: MouseEvent) => {
  const rect = followWrapDOM.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const tilt = e.clientX > window.innerWidth / 2 ? 7 : -7;
  followImgDOM.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${tilt}deg)`;
};

const bindProductLinks = () => {
  linksDOM.forEach((link) => {
    const images = [...imagesDOM].filter(
      (image) => image.dataset.img === link.dataset.link
    );
    link.addEventListener('mouseenter', () => {
      images.forEach((image) => image.classList.add('active'));
    });
    link.addEventListener('mouseleave', () => {
      images.forEach((image) => image.classList.remove('active'));
    });
  });
};

window.addEventListener('load', () => {
  initScroll();
  resetIntroAnimation();
  loader.removeLoader();
  bindProductLinks();
  followWrapDOM.addEventListener('mousemove', followMouse);
});
