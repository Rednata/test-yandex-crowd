const plane = document.querySelector('.stages__img');

const isTransform = () => plane.style.transform === 'scale(0.3)';

window.addEventListener('resize', () => {
  if (plane.getBoundingClientRect().x + plane.offsetWidth * 0.3 >
    document.body.offsetWidth) {
    plane.style.left = 0;
  }
});


const planeMovie = (e) => {
  if (!(e.target === plane)) {
    if (isTransform()) {
      const planeWidth = plane.offsetWidth * 0.3;
      const planeHeight = plane.offsetHeight * 0.3;

      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const left = e.pageX - planeWidth - 17;
      const top = e.pageY - planeHeight - 10;

      let planeLeft = left;
      let planeTop = top;

      console.log(windowWidth);
      console.log(e.pageX);
      console.log(Math.round(planeWidth));
      console.log('===========');
      if (e.pageX + planeWidth + 17 >= windowWidth) {
        planeLeft = windowWidth - 2.5 * planeWidth;
      }
      if (e.pageY + planeHeight >= window.scrollY + windowHeight) {
        planeTop = window.scrollY + windowHeight - 2.5 * planeHeight;
      }
      plane.style.left = `${planeLeft}px`;
      plane.style.top = `${planeTop}px`;
    }
  }
};

const transformScalePlane = () => {
  plane.addEventListener('click', (e) => {
    if (isTransform()) {
      document.body.removeEventListener('click', planeMovie);
      plane.style.transform = 'scale(0.31)';
      plane.title = 'Click me for movement';
    } else {
      plane.style.transform = 'scale(0.3)';
      document.body.addEventListener('click', planeMovie);
      plane.title = 'Click me for stop';
    }
  });
};

export const animationPlane = () => {
  transformScalePlane();
  document.body.addEventListener('click', planeMovie);
};
