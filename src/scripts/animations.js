const followImg = (e) => {
  const wrap = document.querySelector('[data-img-follow]');
  const viewportWidth = window.innerWidth;

  const mousePos = {
    X: e.clientX,
    Y: e.clientY,
    hor: () => (e.clientX > viewportWidth / 2 ? true : false),
  };

  wrap.style.transform = `
    translate(${mousePos.X - 200}px, ${mousePos.Y - 300}px) 
    rotate(${mousePos.hor() ? '-7deg' : '7deg'})
    `;
};

export { followImg };

const links = document.querySelectorAll('[data-link]');
const images = document.querySelectorAll('[data-img]');

document
  .getElementsByClassName('essentials')[0]
  .addEventListener('mousemove', followImg);

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
