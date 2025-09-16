document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carousel-lancamentos');
  const slidesContainer = carousel.querySelector('.slides');
  const slideElements = carousel.querySelectorAll('.slide');

  let index = 0;
  const total = slideElements.length;
  const delay = 2000;
  let intervalId;

  function show(n) {
    index = (n + total) % total;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  function next() { show(index + 1); }

  function startAuto() { intervalId = setInterval(next, delay); }
  function stopAuto() { clearInterval(intervalId); }

  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  show(0);
  startAuto();
});
