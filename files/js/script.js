let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')

}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top  >= offset && top < offset + height) {
            // active navbar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id+ ']').classList.add('active');
            });
            //active sections for animation on scroll
            sec.classList.add('show-animate');

        }
        //if want to use animation that repeats on srcoll use this

        else {
                 sec.classList.remove('show-animate');
        }
    })

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 40);

    //remove toggle icon and navbar when click links (scroll)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}



//Slide card// Initialize Swiper for promotions section
var promotionsSwiper = new Swiper(".promotions .slide-content", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".promotions .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".promotions .swiper-button-next",
        prevEl: ".promotions .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        1149: {
            slidesPerView: 3,
        },
    },
});

//Slide card// Initialize Swiper for promotions section
var promotionsSwiper = new Swiper(".mass .slide-content", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".mass .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".mass .swiper-button-next",
        prevEl: ".mass .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        1149: {
            slidesPerView: 3,
        },
    },
});
