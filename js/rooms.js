// ===== Появление карточек номеров при прокрутке =====
const cards = document.querySelectorAll('.room-card');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // анимация только один раз
    }
  });
}, { threshold: 0.2 });

cards.forEach(function (card) {
  observer.observe(card);
});

// ===== Кнопка «Забронировать» =====
document.querySelectorAll('.book-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const roomName = btn.closest('.room-card').querySelector('h2').textContent;
    alert('Спасибо! Заявка на номер «' + roomName + '» принята.\nМы свяжемся с вами по телефону.');
  });
});
