import '../styles/main.scss';
import LocomotiveScroll from 'locomotive-scroll';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const initScroll = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.03,
    smoothMobile: true,
    resetNativeScroll: true,
  });
  scroll.on('call', (func, args, obj) => {
    [...obj.el.children].map((item) => {
      item.children[0].style.transform = 'translate(0, 0)';
    });
  });
};

const removeLoader = () => {
  document.querySelector('body').classList.add('loaded');

  setTimeout(() => {
    document.querySelector('body').classList.remove('loading');
    const hey = document.querySelectorAll('[data-intro]');
    [...hey].map((item) => {
      const children = [...item.children];
      children.map((word) => {
        word.children[0].style.transform = 'translate(0, 0)';
      });
    });
  }, 2500);
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

window.onload = () => {
  removeLoader();
  initScroll();
  replaceCaptions();
};
