export class Card {
  constructor(element) {
    this.el = element;
    this.init();
  }

  setupEvents() {
    this.el.addEventListener("click", (e) => {
      this.swipeCard(e.target.closest(".card__base"));
    });
  }

  swipeCard(card) {
    card.classList.toggle('card__base--showBack');
  }

  init() {
    this.setupEvents();
  }
}