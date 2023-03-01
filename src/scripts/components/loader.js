import loaderImg from '/photos/10.jpg';

export const loader = {
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

  percent: () => {
    const images = document.querySelectorAll('img');
    let counter = 0;

    [...images].map((img) => {
      const loaded = () => {
        const step = Math.round(100 / images.length, 2);
        counter += step;
        document.getElementById('persent').innerHTML = counter;
      };

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
      document.querySelector('body').classList.remove('loading');
      const hey = document.querySelectorAll('[data-intro]');
      [...hey].map((item) => {
        [...item.children].map((word) => {
          word.children[0].classList.toggle('transform-0');
        });
      });
    }, 1500);
  },
};
