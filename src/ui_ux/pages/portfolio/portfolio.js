	import './portfolio.scss';
  
  // Play initial animations on page load.
  window.addEventListener('load', () => {
    window.setTimeout(() => {
      document.querySelector('body').classList.remove('is-preload');
    }, 100)
  });