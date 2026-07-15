// ===== Плавное появление блоков на странице =====
const blocks = document.querySelectorAll('.map-container, .address-block');

blocks.forEach(function (block, index) {
  block.style.opacity = '0';
  block.style.transform = 'translateY(40px)';
  block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

  // появляются по очереди
  setTimeout(function () {
    block.style.opacity = '1';
    block.style.transform = 'translateY(0)';
  }, 200 + index * 250);
});
