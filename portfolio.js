



const boxes = document.querySelectorAll('.box');
const portfolio = document.getElementById('portfolio');

boxes.forEach(box => {
    box.addEventListener('mouseenter', function () {
        const imageUrl = this.getAttribute('data-image');
        portfolio.style.backgroundImage = `url(${imageUrl})`;
    });

    box.addEventListener('mouseleave', function () {
        portfolio.style.backgroundImage = '';
    });
});