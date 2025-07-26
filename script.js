document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const filter = searchInput.value.toLowerCase();
            const toolCards = document.querySelectorAll('#tools .tool-card');
            toolCards.forEach(card => {
                const toolName = card.querySelector('h3').textContent.toLowerCase();
                const toolDesc = card.querySelector('p').textContent.toLowerCase();
                if (toolName.includes(filter) || toolDesc.includes(filter)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
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

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function updateThemeIcon(isDark) {
      themeToggle.innerHTML = isDark 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
    }

    function toggleTheme() {
      const isDark = document.body.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcon(isDark);
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme === 'dark');

    if(themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    const viralFeatures = {
      trackShares() {
        document.querySelectorAll('.social-share-button').forEach(btn => {
          btn.addEventListener('click', () => {
            fbq('track', 'Share');
            gtag('event', 'social_share', {
              platform: btn.dataset.platform,
              content_type: 'tool'
            });
          });
        });
      },

      initReferralSystem() {
        if (localStorage.referralCode) {
          this.displayUnlockedFeatures();
        }
      },

      async checkMilestones() {
        const response = await fetch('/api/virality-metrics');
        this.updateCounters(await response.json());
      }
    };

    setInterval(() => viralFeatures.checkMilestones(), 60000);
});