import LocomotiveScroll from 'locomotive-scroll';

const round2 = (value: number) => Math.round(value * 100) / 100;

export const initScroll = () => {
  const container = document.querySelector(
    '[data-scroll-container]'
  ) as HTMLElement;
  const galleryImages = document.querySelectorAll<HTMLElement>(
    '[data-image-left]'
  );
  const preFooter = document.querySelector('[data-prefooter]') as HTMLElement;
  const welcomeImg = document.querySelector(
    '[data-img-welcome]'
  ) as HTMLElement;

  const scroll = new LocomotiveScroll({
    el: container,
    smooth: true,
    lerp: 0.06,
    resetNativeScroll: true,
  });

  scroll.on('scroll', ({ currentElements }) => {
    const gallery = currentElements['gallery'];
    if (gallery) {
      const angle = gallery.progress * 5;
      galleryImages.forEach((image) => {
        const sign = image.classList.contains('right-one') ? -1 : 1;
        image.style.transform = `rotate(${sign * angle}deg)`;
      });
    }

    const footer = currentElements['footer'];
    if (footer) {
      preFooter.style.width = `${100 - round2(footer.progress) * 20}%`;
    }

    const postWelcome = currentElements['postwelcome'];
    if (postWelcome) {
      welcomeImg.style.transform = `scale(${1 + round2(postWelcome.progress)})`;
    }
  });
};
