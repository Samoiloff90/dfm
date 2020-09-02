window.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slider__img'),
    next = document.querySelector('.slider-content__button');
  let slideIndex = 1;

  
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');


    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  next.addEventListener('click', () => {
    plusSlides(+1);
  });
});