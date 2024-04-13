// FAQ section js
// Select all elements with the class "new-faq"
const faqs = document.querySelectorAll(".new-faq");

// Add click event listeners to each FAQ element
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
});


gsap.registerPlugin(ScrollTrigger);

