function openMobileMagicPanel(contentHTML, fromElement) {
  const panel = document.getElementById('mobilemagicpanel');
  const inner = panel.querySelector('.magic-content');

  // Add close button + content
  inner.innerHTML = `
    <button class="close-button" aria-label="Close panel">×</button>
    ${contentHTML}
  `;

  // Animate origin (optional)
  const rect = fromElement.getBoundingClientRect();
  panel.style.setProperty('--origin-x', `${rect.left + rect.width / 2}px`);
  panel.style.setProperty('--origin-y', `${rect.top + rect.height / 2}px`);

  // Show the panel
  panel.classList.add('visible');

  // Add close functionality
  const closeBtn = panel.querySelector('.close-button');
  if (closeBtn) {
    closeBtn.onclick = () => {
      panel.classList.remove('visible');
    };
  }
}