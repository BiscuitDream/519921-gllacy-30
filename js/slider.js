const sliders = document.querySelectorAll('.slider-item');
const sliderToggles = document.querySelectorAll('.slider-toggle');

const disableCurrentSlide = () => {
  const currentSlide = Array.from(sliders).find((slide) => slide.classList.contains('slider-current'));
  const currentToggle = Array.from(sliderToggles).find((toggle) => toggle.classList.contains('slider-toggle-current'));
  currentSlide.classList.remove('slider-current');
  currentToggle.classList.remove('slider-toggle-current');
};

const activateNewSlide = (btn) => {
  const indexOfBtn = Array.from(sliderToggles).indexOf(btn);
  sliders[indexOfBtn].classList.add('slider-current');
  sliderToggles[indexOfBtn].classList.add('slider-toggle-current');
}

sliderToggles.forEach((toggle) => {
  toggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    disableCurrentSlide();
    const currentBtn = evt.target;
    activateNewSlide(currentBtn);
  })
});
