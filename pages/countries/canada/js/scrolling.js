// scrolling.js – Refactored Scroll Stacking Animation
// Uses requestAnimationFrame for smooth updates and sets z-index layering.

console.log('scrolling.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const scrollSection = document.getElementById('scroll-stacking');
  const cards = document.querySelectorAll('.scroll-card');
  if (!scrollSection || cards.length === 0) return;

  console.log('Found', cards.length, 'cards');

  // Detect mobile view – disable animation for <=992px
  const isMobile = () => window.matchMedia('(max-width: 992px)').matches;

  const handleScroll = () => {
    if (isMobile()) {
      cards.forEach(card => {
        card.style.transform = 'none';
        card.style.filter = 'none';
      });
      return;
    }

    cards.forEach((card, i) => {
      // If there is a next card, we calculate dimming progress based on how far it has scrolled up
      if (i < cards.length - 1) {
        const nextCard = cards[i + 1];
        const nextRect = nextCard.getBoundingClientRect();
        
        // Get the sticky top threshold of the next card
        const nextStickyTopStr = window.getComputedStyle(nextCard).top;
        const nextStickyTop = nextStickyTopStr.includes('px') ? parseFloat(nextStickyTopStr) : window.innerHeight * 0.17;

        // Calculate distance from the next card's current top to its final sticky top
        const distanceToStick = nextRect.top - nextStickyTop;
        
        // We start dimming the current card when the next card is 400px away from sticking
        const maxDimDistance = 400; 

        if (distanceToStick < maxDimDistance) {
          // Progress goes from 0 (400px away) to 1 (at sticky top)
          let progress = 1 - (distanceToStick / maxDimDistance);
          progress = Math.max(0, Math.min(1, progress));
          
          // Max dim: 35% (brightness down to 0.65)
          const brightness = 1 - progress * 0.35;
          card.style.filter = `brightness(${brightness})`;
        } else {
          card.style.filter = 'brightness(1)';
        }
      } else {
        card.style.filter = 'brightness(1)';
      }
    });
  };

  // Throttle scroll using requestAnimationFrame
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Recalculate on resize (mobile/desktop switch)
  window.addEventListener('resize', handleScroll);

  // Initial run
  handleScroll();
});

