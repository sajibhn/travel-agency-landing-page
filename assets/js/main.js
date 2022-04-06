/* =============== scroll menu =============== */
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('active__nav');
    } else {
        header.classList.remove('active__nav');
    }
})

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