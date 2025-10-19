
  const carousel = document.querySelector('#carouselExampleCaptions');
  const videoFrames = carousel.querySelectorAll('iframe');
  const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: false, // Slide auto change disable
    ride: false
  });

  // Jab koi video play kare to slide na badle
  videoFrames.forEach(frame => {
    frame.addEventListener('mouseenter', () => {
      bsCarousel.pause();
    });
    frame.addEventListener('mouseleave', () => {
      bsCarousel.cycle();
    });
  });

