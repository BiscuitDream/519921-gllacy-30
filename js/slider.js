const sliders = document.querySelectorAll('.slider-item');
const sliderToggles = document.querySelectorAll('.slider-toggle');

const bgClasses = {
  0: 'page-index-background1',
  1: 'page-index-background2',
  2: 'page-index-background3',
}

const bgClass = new RegExp('page-index-background\\d');

const changeSlide = (btn) => {
  const currentSlide = Array.from(sliders).find((slide) => slide.classList.contains('slider-current'));
  const currentToggle = Array.from(sliderToggles).find((toggle) => toggle.classList.contains('slider-toggle-current'));
  const indexOfBtn = Array.from(sliderToggles).indexOf(btn);

  currentSlide.classList.remove('slider-current');
  currentToggle.classList.remove('slider-toggle-current');

  sliders[indexOfBtn].classList.add('slider-current');
  sliderToggles[indexOfBtn].classList.add('slider-toggle-current');

  const currentBgClass = document.body.className.match(bgClass)[0];
  const nextBgClass = bgClasses[indexOfBtn];
  document.body.classList.replace(currentBgClass, nextBgClass);
};

sliderToggles.forEach((toggle) => {
  toggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    const activatedBtn = evt.target;
    changeSlide(activatedBtn);
  })
});
