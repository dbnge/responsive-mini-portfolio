/* ==================== DISPLAY CONTACT FORM ==================== */

const contactButton = document.querySelector(".profile__contact .profile__contact-hello .hello");
const closeButton = document.querySelector(".form .form__close .close__link");
const overlay = document.querySelector(".overlay");
const contactForm = document.querySelector(".profile__form");

// Contact Form opens and overlay is applied if user clicks on "Say Hello" button
contactButton.addEventListener("click", () => {
    contactForm.classList.remove("hide");
    overlay.classList.add("show");
})

// Contact Form closes if user clicks on the close button
closeButton.addEventListener("click", () => {
    contactForm.classList.add("hide");
    overlay.classList.remove("show");
})

// Contact Form closes if user clicks anywhere on the overlay 
overlay.addEventListener("click", () => {
    contactForm.classList.add("hide");
    overlay.classList.remove("show");
})


/* ==================== VISIBILITY PROJECTS/SKILLS TAB ==================== */

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => { // tc = tab content 
            tc.classList.remove('filter__active')
        })
        target.classList.add('filter__active')

        tabs.forEach(t => { // t = tab
            t.classList.remove('filter__tab__active')
        })
        tab.classList.add('filter__tab__active')
    })
})

/* ==================== SCROLL REVEAL ANIMATION ==================== */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
})

sr.reveal(`.profile__image`)
sr.reveal(`.profile__title`, {delay: 300})
sr.reveal(`.profile__subtitle`, {delay: 400})
sr.reveal(`.profile__social`, {delay: 500})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 600})
sr.reveal(`.profile__contact`, {delay: 700})
sr.reveal(`.filter`, {delay: 800})




