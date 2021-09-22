export class Gallery {
  constructor(element) {
    this.el = element;
    this.init();
  }

  setupDOMReferences() {
    this.cardItems = this.el.querySelectorAll(".gallery__list-item");
  }

  setupEvents() {
    this.cardItems.forEach((card) => {
      card.addEventListener("click", (e) =>
        this.swipeCard(e.target.closest(".gallery__list-item"))
      );
    });
  }

  swipeCard(card) {
    console.log(card);
    card.classList.toggle('gallery__list-item--showBack');
  }

  init() {
    this.setupDOMReferences();
    this.setupEvents();
  }
}
