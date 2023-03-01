import LocomotiveScroll from 'locomotive-scroll';

export const initScroll = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.06,
    smoothMobile: true,
    resetNativeScroll: true,
  });

  scroll.on('call', (func, args, obj) => {
    if (func == 'caption') {
      [...obj.el.children].map((item) => {
        item.children[0].classList.toggle('transform-0');
      });
    }

    if (func == 'image') {
      obj.el.classList.toggle('transform-rotate');
    }
    if (func == 'image-rev') {
      obj.el.classList.toggle('transform-rotate-rev');
    }
  });

  scroll.on('scroll', (args) => {
    var rounded = function (number) {
      return +number.toFixed(2);
    };
    if (typeof args.currentElements['footer'] === 'object') {
      let progress = args.currentElements['footer'].progress;
      const preFooter = document.querySelector('[data-prefooter]');
      preFooter.style.width = `${100 - rounded(progress) * 20}%`;
    }
    if (typeof args.currentElements['postwelcome'] === 'object') {
      let progress = args.currentElements['postwelcome'].progress;

      const welcomeImg = document.querySelector('[data-img-welcome]');

      welcomeImg.style.transform = `scale(${1 + rounded(progress)})`;
    }
  });
};
