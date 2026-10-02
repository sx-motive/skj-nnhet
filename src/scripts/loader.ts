const INTRO_DELAY_MS = 1500;

export const loader = {
  html: `
  <div class="loader">
    <div class="percent-wrap">
      <span class="anim-wrap-percent">
        <span id="percent">0</span>%
      </span>
    </div>
    <div class="wrap-img">
      <img src="/content/10.webp" alt="skincare" />
    </div>
  </div>
  `,
  counter: () => {
    const images = document.querySelectorAll('img');
    const percentDOM = document.getElementById('percent') as HTMLElement;
    let loaded = 0;

    const onImageDone = () => {
      loaded += 1;
      percentDOM.textContent = Math.round(
        (loaded / images.length) * 100
      ).toString();
    };

    images.forEach((img) => {
      if (img.complete) {
        onImageDone();
        return;
      }
      img.addEventListener('load', onImageDone, { once: true });
      img.addEventListener('error', onImageDone, { once: true });
    });
  },
  removeLoader: () => {
    document.querySelector('.anim-wrap-percent')?.classList.add('transform-100');

    setTimeout(() => {
      document.body.classList.remove('loading');
      document
        .querySelectorAll('[data-intro-element] > .word')
        .forEach((word) => word.classList.add('show'));
    }, INTRO_DELAY_MS);
  },
};
