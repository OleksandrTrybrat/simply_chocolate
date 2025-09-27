'use strict'

export class ClickRotateCard {
  constructor(cardSelector, maxWidth = 1104.98) {
    this.cardsClick = document.querySelectorAll(cardSelector)
    this.maxWidth = maxWidth
    this.init()
  }

  init() {
    if (!this.cardsClick) {
      return
    }

    this.cardsClick.forEach((card) => {
      card.addEventListener('click', () => {
        if (window.innerWidth <= this.maxWidth) {
          card.classList.toggle('rotate')
        }
      })
    })
  }
}

// new ClickRotateCardMobile('.product__card')

// if (window.matchMedia('(max-width: 768px)').matches) {
//   this.cardClick.classList.toggle('rotate')
// }
