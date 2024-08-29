import './assets/scss/all.scss';
import "bootstrap";

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

// swiper
var swiper = new Swiper(".bannerSwiper", {});

var swiper = new Swiper(".bannerSwiper-md", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 48,
});

var swiper = new Swiper(".swiperCardWhite", {});

var swiper = new Swiper(".swiperCardImg-sm", {});

var swiper = new Swiper(".swiperCardImg-md", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 24,
});

var swiper = new Swiper(".swiperCardBgPrimary", {});

// AOS
  AOS.init();

console.log("Hello world!");