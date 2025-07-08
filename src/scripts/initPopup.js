export const initPopup = () => {
  const buttons = document.querySelectorAll('[data-button-open-popup]')
  const popup = document.querySelector('[data-popup]')
  const closeButton = document.querySelector('[data-button-close-popup]')

  if (buttons.length === 0 || !popup || !closeButton) return

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      closePopup()
    }
  }

  const openPopup = () => {
    popup.classList.add('is-active')

    document.addEventListener('keydown', handleEscape)

    document.body.style.overflow = 'hidden'
  }

  const closePopup = () => {
    popup.classList.remove('is-active')

    document.removeEventListener('keydown', handleEscape)

    document.body.style.overflow = ''
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      openPopup()
    })
  })

  closeButton.addEventListener('click', () => {
    closePopup()
  })

  popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      closePopup()
    }
  })
}
