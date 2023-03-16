import loaderImg from '/content/10.webp';

interface Loader {
  html: string;
  counter: () => void;
  removeLoader: () => void;
}

export const loader: Loader = {
  html: `
  <div class="loader">
    <div class="persent-wrap">
      <span class="anim-wrap-persent"> 
        <span id="persent">0</span>%
      </span>
    </div>
    <div class="wrap-img">
      <img src="${loaderImg}" alt="skincare" />
    </div>
  </div>
  `,
  counter: () => {
    const images = document.querySelectorAll(
      'img'
    ) as NodeListOf<HTMLImageElement>;
    const domPersent = document.getElementById('persent') as HTMLElement;
    const step = 100 / images.length;
    let counter: number = 0;

    const loaded = () => {
      counter += step;
      domPersent.innerHTML = Math.round(counter).toString();
    };

    Array.from(images).map((img: HTMLImageElement) => {
      if (img.complete) {
        loaded();
      } else {
        img.addEventListener('load', loaded);
        img.addEventListener('error', function () {
          alert('error');
        });
      }
    });
  },
  removeLoader: () => {
    document
      .getElementsByClassName('anim-wrap-persent')[0]
      .classList.add('transform-100');

    setTimeout(() => {
      const body = document.querySelector('body') as HTMLBodyElement;
      body.classList.remove('loading');

      const intro = document.querySelectorAll('[data-intro-element]');
      Array.from(intro).map((item) => {
        Array.from(item.children).map((word) => {
          word.classList.toggle('show');
        });
      });
    }, 1500);
  },
};
