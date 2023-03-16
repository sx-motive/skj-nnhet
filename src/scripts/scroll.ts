import LS from 'locomotive-scroll';

export const initScroll = () => {
  const contentDOM = document.querySelector(
    '[data-scroll-container]'
  ) as HTMLElement;
  const scroll = new LS({
    el: contentDOM,
    smooth: true,
    lerp: 0.06,
    resetNativeScroll: true,
  });
  // @types/locomotive-scroll has only one parametr for options, this costs typecheck issue. FIX YOUR TYPES GUYS!
  // @ts-ignore
  // scroll.on('call', (call, enter, data) => {
  //   if (call == 'image') {
  //     console.log(data.progress);
  //     // data.el.classList.toggle('transform-rotate');
  //     data.el.transform = `rotate(${data.progress}deg)`;
  //   }
  //   if (call == 'image-rev') {
  //     data.el.classList.toggle('transform-rotate-rev');
  //   }
  // });

  scroll.on('scroll', (args) => {
    let rounded = function (number: number) {
      return +number.toFixed(2);
    };

    if (typeof args.currentElements['gallery'] === 'object') {
      let progress = args.currentElements['gallery'].progress;
      const arrOfImages = [
        ...(document.querySelectorAll(
          '[data-image-left]'
        ) as NodeListOf<HTMLElement>),
      ];
      arrOfImages.map((image) => {
        if (image.classList.contains('right-one')) {
          image.style.transform = `rotate(-${progress * 5}deg)`;
        } else {
          image.style.transform = `rotate(${progress * 5}deg)`;
        }
      });
    }

    if (typeof args.currentElements['footer'] === 'object') {
      let progress = args.currentElements['footer'].progress;
      const preFooter = document.querySelector(
        '[data-prefooter]'
      ) as HTMLElement;
      preFooter.style.width = `${100 - rounded(progress) * 20}%`;
    }
    if (typeof args.currentElements['postwelcome'] === 'object') {
      let progress = args.currentElements['postwelcome'].progress;

      const welcomeImg = document.querySelector(
        '[data-img-welcome]'
      ) as HTMLElement;

      welcomeImg.style.transform = `scale(${1 + rounded(progress)})`;
    }
  });
};
