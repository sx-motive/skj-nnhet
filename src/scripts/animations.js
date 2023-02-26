const setLinks = (links, images) => {
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
};

const follow = (e, q) => {
  const mousePos = {
    X: e.clientX,
    Y: e.clientY,
    hor: () => (e.clientX > window.innerWidth / 2 ? true : false),
  };
  q.style.transform = `
    translate(${mousePos.X - 200}px, ${mousePos.Y - 300}px) 
    rotate(${mousePos.hor() ? '-7deg' : '7deg'})
    `;
};

export { follow, setLinks };
