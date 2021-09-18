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
    this.navigationBase.addEventListener("click", e => {
      if(e.target === this.navigationBase) {
        this.navToggle();
      }
    })
  }

  navToggle() {
    this.body.classList.toggle("is-navigation-visible");
  }

  init() {
    this.setupDOMReferences();
    this.setupEvents();
  }
}
