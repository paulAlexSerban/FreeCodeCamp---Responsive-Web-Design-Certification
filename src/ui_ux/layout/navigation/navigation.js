import { debounce } from '../../abstracts/utils/debounce';

export class Navigation {
  constructor(element) {
    this.init();
  }

  setupDOMReferences() {
    this.body = document.querySelector("#body");
    this.navigationBase = document.querySelector('.navigation__base');
    this.navigationContainer = document.querySelector('.navigation__container');
    this.mobileToggle = document.querySelector(".navigation__base .navigation__toggle");
  }

  setupEvents() {
    this.mobileToggle.addEventListener("click", () => this.navToggle());
    document.addEventListener('scroll', debounce(this.storeScroll), { passive: true});
  }

  navToggle() {
    this.body.classList.toggle("is-navigation-visible");
  }

  storeScroll() {
    document.documentElement.dataset.scroll = window.scrollY;
  }

  init() {
    this.setupDOMReferences();
    this.setupEvents();
    this.storeScroll();
  }
}
