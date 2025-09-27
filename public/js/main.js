'use strict'

import { BurgerMenu } from './burgerMenu.js'
import { ClickRotateCard } from './clickRotateCard.js'
import { PlayVideo } from './playVideo.js'

// Ініціалізація після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu('#burger', 'header')
  new ClickRotateCard('.product__card')
  new PlayVideo('madeVideo', 'playBtn')
})
