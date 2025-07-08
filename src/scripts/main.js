import '../styles/style.scss'
import { initPhoneMask } from './init-phone-mask'
import { initToggleOpenMenu } from './init-toggle-open-menu'
import { initPopup } from './initPopup'

document.addEventListener('DOMContentLoaded', () => {
  initToggleOpenMenu()
  initPopup()
  initPhoneMask()
})
