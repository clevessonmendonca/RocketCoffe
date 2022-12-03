let hamburguerButton = document.querySelector('.mobile-menu-button')
let hamburguerIcon = document.querySelector('.mobile-menu-icon')
let menuMobile = document.querySelector('.mobile-menu')

function detectDisplay() {
    if (menuMobile.style.display == 'block') return 'none'

    return 'block'
}

function detectMenuIcon() {
    if (hamburguerIcon.src == `${window.document.location.href}src/assets/images/menu-buguer-close.svg`) return "src/assets/images/menu-buguer-open.svg"

    return 'src/assets/images/menu-buguer-close.svg'
}

hamburguerButton.addEventListener('click', () => {
    menuMobile.style = `display: ${detectDisplay()}`
    hamburguerIcon.src = `${detectMenuIcon()}`;
})