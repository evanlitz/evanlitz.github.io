(() => {
  const header = document.querySelector('header');
  const revealThreshold = 80; // px scrolled before hide/reveal kicks in
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < revealThreshold) {
      header.classList.remove('header-hidden');
    } else if (currentScrollY > lastScrollY) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
})();
