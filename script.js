document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      const toolCards = document.querySelectorAll('#all-tools .tool-card');
      toolCards.forEach(card => {
        const nameEl = card.querySelector('h3');
        const descEl = card.querySelector('p');
        const toolName = nameEl ? nameEl.textContent.toLowerCase() : '';
        const toolDesc = descEl ? descEl.textContent.toLowerCase() : '';
        card.style.display = (toolName.includes(filter) || toolDesc.includes(filter)) ? 'flex' : 'none';
      });
    });
  }

  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.remove('hidden');
      } else {
        backToTopBtn.classList.add('hidden');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});