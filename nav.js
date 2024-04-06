

//NAV 

gsap.from(".nav-item", {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.2, // Stagger the animation for each navbar item
    ease: "power2.out", // Use ease-out animation
    delay: 0.9 // Delay the animation
});


gsap.from(".logo", {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.2, // Stagger the animation for each navbar item
    ease: "power2.out", // Use ease-out animation
    delay: 0.5 // Delay the animation
});

gsap.from(".fa-whatsapp", {
    duration: 1,
    z: -50,
    opacity: 0,

    ease: "power2.out", // Use ease-out animation
    delay: 0.9 // Delay the animation
});


// function toggleMenu() {
//   var menu = document.getElementById("menu");
//   if (menu.style.display === "block") {
//     menu.style.display = "none";
//   } else {
//     menu.style.display = "block";
//   }
// }

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});
