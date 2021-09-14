import "./navigation.scss";

const navigationStructure = () => {
  class Navigation {
    constructor(element) {
      this.element = element;
      this.init();
    }

    setupDOMReferences() {
      this.body = document.querySelector('#body');
      this.mobileToggle = document.querySelector(
        ".navigation__base .navigation__toggle"
      );
    }

    setupEvents() {
      this.mobileToggle.addEventListener("click", () => this.navToggle());
    }

    navToggle() {
      this.body.classList.toggle('is-navigation-visible');
    }

    init() {
      this.setupDOMReferences();
      this.setupEvents();
    }
  }

  document
    .querySelectorAll('[data-js-cmp="navigation"]')
    .forEach((el) => {
      new Navigation(el);
    });
};

export default navigationStructure;