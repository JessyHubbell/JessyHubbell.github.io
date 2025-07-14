function openMagicPanel(contentHTML, fromElement) {
  const panel = document.getElementById('magic-panel');
  const inner = panel.querySelector('.panel-inner');
  inner.innerHTML = contentHTML;

  const rect = fromElement.getBoundingClientRect();
  panel.style.setProperty('--origin-x', `${rect.left + rect.width / 2}px`);
  panel.style.setProperty('--origin-y', `${rect.top + rect.height / 2}px`);

  panel.classList.remove('hidden');
  panel.classList.add('visible');

  const sound = new Audio('sfx/magic-chime.mp3'); // make sure this path is correct
  sound.play();
}

function closeMagicPanel() {
  const panel = document.getElementById('magic-panel');
  panel.classList.remove('visible');
  panel.classList.add('hidden');
}