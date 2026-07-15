// ===== Появление карточек преимуществ при прокрутке =====
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // анимация только один раз
    }
  });
}, { threshold: 0.2 });

cards.forEach(function (card, index) {
  // небольшая задержка, чтобы карточки появлялись по очереди
  card.style.transitionDelay = (index * 0.15) + 's';
  observer.observe(card);
});
