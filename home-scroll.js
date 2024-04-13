document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const entry = document.querySelector('.gateway .entry-image');
        const depth = window.pageYOffset;
        entry.style.transform = `translateY(${depth * 0.3}px)`; // Adjust the multiplier for desired speed
    });
});