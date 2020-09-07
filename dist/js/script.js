window.addEventListener('DOMContentLoaded', function () {
  const next = document.querySelector('.slider-content__button'),
        slides = document.querySelectorAll('.slider__slides'),
        dots = document.querySelectorAll('.slider-points__point');
  let index = 0;

  const activeSlide = n => {
    for(slide of slides) {
      slide.classList.remove('slider__slides_active');
    }
    slides[n].classList.add('slider__slides_active');
  };

  const activeDot = n => {
    for (dot of dots) {
      dot.classList.remove('slider-points__point_active');
    }
    dots[n].classList.add('slider-points__point_active');
  };

  const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
  };

  const nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  };

  dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  next.addEventListener('click', nextSlide);
});