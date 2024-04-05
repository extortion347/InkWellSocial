let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.section__card');
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

// Auto slide
setInterval(() => {
    slideIndex++;
    showSlides();
}, 5000);

showSlides();