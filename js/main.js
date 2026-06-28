const form = document.querySelector('.search-panel');
const placeButtons = document.querySelectorAll('.place-list button');
const revealItems = document.querySelectorAll('.section, .stats-strip, .wave-section');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  const oldText = button.textContent;
  button.textContent = 'Нашли 128 вариантов';
  button.style.background = 'linear-gradient(135deg, #ff6d63, #ffb72b)';
  setTimeout(() => {
    button.textContent = oldText;
    button.style.background = '';
  }, 2200);
});

placeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    placeButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => {
  item.classList.add('reveal');
  observer.observe(item);
});
