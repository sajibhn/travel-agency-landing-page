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