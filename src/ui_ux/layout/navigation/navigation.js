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
        ".navigation__base--top .navigation__toggle"
      );
      this.menuIcon = this.mobileToggle.children;
      this.menu = document.querySelectorAll(".navigation__link");
    }

    setupEvents() {
      this.mobileToggle.addEventListener("click", () => this.navToggle());
    }

    navToggle() {
      this.body.classList.toggle("active-burger-navigation");
      this.element.classList.toggle("active");

      for (let i = 0; i < this.menuIcon.length; i++) {
        this.menuIcon[i].classList.toggle("active");
      }
    }

    init() {
      this.setupDOMReferences();
      this.setupEvents();
    }
  }

  document
    .querySelectorAll('[data-js-cmp="navigation header"]')
    .forEach((el) => {
      new Navigation(el);
    });
};

export default navigationStructure;