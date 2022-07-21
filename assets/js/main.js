// Burguer Toggle
const headerToggle = document.querySelector('#toggle-burguer');

headerToggle.addEventListener('click', (e) => {
   
})

// Carousel
const slides = document.querySelectorAll('.skill-card');
const totalSlides = slides.length;

let slidePosition = 0;

document.querySelector('#carousel-button-next').addEventListener('click', (el) => {
    moveToNextSlide();
});

document.querySelector('#carousel-button-previous').addEventListener('click', (el) => {
    moveToPreviousSlide();
});

function updateSlidePosition() {
    for(let slide of slides) {
        slide.classList.remove('skill-card-visible');
        slide.classList.add('skill-card-hidden');
    }

    slides[slidePosition].classList.add('skill-card-visible');
}

function moveToNextSlide() {
    if(slidePosition == totalSlides - 1) {
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPreviousSlide() {
    if(slidePosition == 0) {
        slidePosition = totalSlides;
    }
    else {
        slidePosition--;
    }
    updateSlidePosition();
}