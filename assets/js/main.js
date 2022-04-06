/* =============== scroll menu =============== */
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('active__nav');
    } else {
        header.classList.remove('active__nav');
    }
})

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/* =============== Swiper =============== */
const swiper = new Swiper(".testimonial__container", {
    spaceBetween: 16,
    loop: !0,
    grabCursor: !0,
    pagination: {
        el: ".swiper-pagination",
        clickable: !0
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        968: {
            slidesPerView: 1,
            spaceBetween: 40
        }
    }
});