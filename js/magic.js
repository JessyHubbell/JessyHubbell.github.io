document.addEventListener('DOMContentLoaded', function () {
  const panel = document.querySelector('#magic-panel');
  const inner = panel.querySelector('.panel-inner');

  window.openMagicPanel = function (contentHTML, fromElement) {
    inner.innerHTML = contentHTML;

    const rect = fromElement.getBoundingClientRect();
    panel.style.setProperty('--origin-x', `${rect.left + rect.width / 2}px`);
    panel.style.setProperty('--origin-y', `${rect.top + rect.height / 2}px`);

    panel.classList.remove('hidden');
    panel.classList.add('visible');

    const sound = new Audio('sfx/magic-chime.mp3');
    sound.play();
  };

  window.closeMagicPanel = function () {
    panel.classList.remove('visible');
    panel.classList.add('hidden');
  };
});
