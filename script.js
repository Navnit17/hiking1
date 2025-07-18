let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let flightClose =document.querySelector('.flight-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
searchBtn.classList.remove('fa-times');
searchBar.classList.remove('active');
menu.classList.remove('fa-times');
navbar.classList.remove('active');
loginForm.classList.remove('active');

}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
searchBtn.addEventListener('click', () => {
searchBtn.classList.toggle('fa-times');
searchBar.classList.toggle('active');
});
formBtn.addEventListener('click',() =>{
loginForm.classList.add('active');
});
formClose.addEventListener('click', () =>{
loginForm.classList.remove('active')
});


videoBtn.forEach(btn =>{
btn.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
});
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
    delay:2500,
    disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPreview: 1,
        },
        768: {
            slidesPreview:2
        },
        1024: {
            slidesPreview: 3,
        },
    },
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
    delay:2500,
    disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPreview: 2,
        },
        768: {
            slidesPreview: 3,
        },
        991: {
            slidesPreview: 4,
        },
        1200:{
            slidesPreview:5,
        }
    },
});
a