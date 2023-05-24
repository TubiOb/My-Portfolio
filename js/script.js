const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close');


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


// REMOVE MOBILE MENU
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {

    const navMenu = document.querySelector('#nav-menu');

    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));


// DARK THEME/MODE
let themeButton = document.querySelector('#theme-button');

themeButton.onclick = () => {
    if (themeButton.classList.contains('ri-moon-line')) {
        themeButton.classList.replace('ri-moon-line', 'ri-sun-line');
        document.body.classList.add('active');
    } else {
        themeButton.classList.replace('ri-sun-line', 'ri-moon-line');
        document.body.classList.remove('active');
    }
}

// EMAIL JS
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');

        contactMessage.textContent = 'Fill all the input fields 📩'
    } else {
        emailjs.sendForm('service_3dug13i', 'template_28m574a', '#contact-form', 'VwKYIVP7CIQb-d5S7')
            .then(() => {
                contactMessage.classList.add('color-blue');
                contactMessage.textContent = 'Message sent ✅'

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 2000)
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED...', error);

            })
        contactName.value = '';
        contactEmail.value = '';
        contactProject.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail)


// ACTIVE SCROLL SECTION
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// SHOW SCROLL UP
const scrollUp = () => {
    const scrollUp = document.querySelector('#scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// CHANGE BACKGROUND HEADER
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)


// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true
})

sr.reveal(`.Home, .projects__content, .footer__container`)
sr.reveal(`.Home div`, { delay: 200, origin: 'bottom', interval: 50 })
sr.reveal(`.About div, .Skills div`, { delay: 50, origin: 'bottom', interval: 20 })
sr.reveal(`.about-me :nth-child(1), .skills-container:nth-child(1), .contact__content:nth-child(1)`, { origin: 'left' })
sr.reveal(`.about-me :nth-child(2), .skills-container:nth-child(2), .contact__content:nth-child(2)`, { origin: 'right' })


// SHUFFLING BETWEEN SKILLS AND PROJECTS
const tabs = document.querySelectorAll('.tab_btn'),
    all_content = document.querySelectorAll('.content');


tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        var line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        all_content.forEach(content => {
            content.classList.remove('active');
        })
        all_content[index].classList.add('active');
    });
});


// SWIPER FUNCTIONALITY
new Swiper('.mySwiper', {
    slidesPerView: 4,

    spaceBetween: 20,

    freeMode: true,

    loop: false,

    speed: 2000,

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    breakpoints: {
        // when window width is >= 200px (for mobile screens)
        200: {
            slidesPerView: 1.1,
            spaceBetween: 20
        },
        // when window width is >= 340px (for mobile screens)
        300: {
            slidesPerView: 1.15,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        350: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 200px (for mobile screens)
        450: {
            slidesPerView: 1.55,
            spaceBetween: 20
        },
        // when window width is >= 576px (for mobile screens)
        570: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 200px (for mobile screens)
        700: {
            slidesPerView: 2.2,
            spaceBetween: 20
        },
        // when window width is >= 992px (for large screens)
        992: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
        1023: {
            slidesPerView: 3.6,
            spaceBetween: 30
        }
    },
});