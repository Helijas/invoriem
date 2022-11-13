$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        responsive : {
            0 : {
                items: 2,
                margin: 32,
                loop: true,
                dots: false,
            },
            601 : {
                items: 2,
                loop: true,
                dots: false,
            },
            1001 : {
                items: 3,
                margin: 48,
                loop: true,
                dots: false,
            },
        }
    });
});

/* ----  VIDEO  ---- */

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video__items');
const video = document.querySelector('.video__object');

videoWrapper.addEventListener('click', function() {
    videoPicture.classList.add('none');
    videoWrapper.classList.remove('video__items-overlay');
    videoBtn.classList.add('none');
    
    });

/* Mobile Nav */

const openNavbtn = document.querySelector('#openMobileNav');
const closeNavbtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavbtn.onclick = function () {
    mobileNav.classList.remove('none');
    document.body.classList.add('no-scroll');
}

closeNavbtn.onclick = function () {
    mobileNav.classList.add('none');
    document.body.classList.remove('no-scroll');
}

