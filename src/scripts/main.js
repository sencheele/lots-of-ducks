import '../styles/style.scss'
import { initToggleOpenMenu } from './init-toggle-open-menu'
import { initPopup } from './initPopup'

document.addEventListener('DOMContentLoaded', () => {
  initToggleOpenMenu()
  initPopup()
})
