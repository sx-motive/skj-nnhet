import loaderImg from '/skincare-01.jpg';

const loader = {
  counter: 0,
  html: `
    <div class="loading-screen">
    <span></span>
    //  <div class="wrap-img">
    //   <img src="${loaderImg}" alt="skincare" />
    //  </div>
    </div>
  `,

  percent: () => {
    const images = document.querySelectorAll('img');
    let counter = 0;
    [...images].map((img) => {
      function loaded() {
        counter += Math.round(100 / images.length);
        document.getElementById('persent').innerHTML = counter;
      }

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener('load', loaded);
        img.addEventListener('error', function () {
          alert('error');
        });
      }
    });
    return counter;
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

export default loader;
