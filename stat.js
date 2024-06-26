//statistics cards js////////////////

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target.querySelector('.number');
                const finalNumber = parseInt(numberElement.dataset.finalNumber);
                animateNumber(numberElement, finalNumber);
                observer.unobserve(entry.target);  // Stop observing once animated
            }
        });
    }, {
        threshold: 0.5  // Trigger when 50% of the element is visible
    });

    const stats = document.querySelectorAll('.statistic-block');
    stats.forEach(stat => observer.observe(stat));
});

function animateNumber(element, finalNumber) {
    let currentNumber = 0;
    const increment = finalNumber / 100;  // Determine increment step
    const isPercentage = element.textContent.trim().endsWith('%'); // Check if initial text ends with %

    const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= finalNumber) {
            currentNumber = finalNumber;
            clearInterval(interval);
        }
        element.textContent = Math.floor(currentNumber);
        if (isPercentage) { // Append '%' if initial text contained it
            element.textContent += '%';
        }
    }, 20);  // Adjust time to control speed
}









