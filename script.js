let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.gallery2 img');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function plusSlides(n) {
    const slides = document.querySelectorAll('.gallery2 img');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

showSlides();
