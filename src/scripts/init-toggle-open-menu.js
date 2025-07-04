export const initToggleOpenMenu = () => {
  const toggle = document.querySelector('[data-toggle]')
  const header = document.querySelector('[data-header]')
  const overlay = document.querySelector('[data-overlay]')

  if (!toggle || !header || !overlay) {
    return
  }

  toggle.addEventListener('click', () => {
    header.classList.toggle('is-open')
    overlay.classList.toggle('is-active')
  })
}
