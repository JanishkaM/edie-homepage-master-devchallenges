const menuToggle = document.querySelector('[data-menu-toggle]')
const menuToggleClose = document.querySelector('[data-menu-toggle-close]')
const navUl = document.querySelector('[data-nav-ul]')
const nav = document.querySelector('[data-nav]')

menuToggle.addEventListener('click', () => {
    navUl.style = 'display: flex !important;'
    nav.style = 'position: fixed; width: 100%; height: 100%;'
})
menuToggleClose.addEventListener('click', () => {
    navUl.style = 'display: none !important;'
    nav.style = 'position: unset; width: auto; height: auto'
})