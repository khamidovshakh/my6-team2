// ===== Появление блоков истории при прокрутке =====
const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // анимация только один раз
    }
  });
}, { threshold: 0.2 });

items.forEach(function (item) {
  observer.observe(item);
});

// ===== Анимация счётчиков в блоке с цифрами =====
function animateCounter(element) {
  const target = Number(element.dataset.target);
  const duration = 1500; // время анимации в миллисекундах
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    element.textContent = Math.floor(target * progress).toLocaleString('ru-RU');
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const statsSection = document.querySelector('.stats');

const statsObserver = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting) {
    document.querySelectorAll('.stat-number').forEach(animateCounter);
    statsObserver.disconnect(); // запускаем только один раз
  }
}, { threshold: 0.4 });

if (statsSection) {
  statsObserver.observe(statsSection);
}
