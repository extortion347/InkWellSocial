

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
    const barsIcon = document.querySelector('.fa-bars');
    const cancelIcon = document.querySelector('.fa-times');

    // Initially, hide the cancel icon
    cancelIcon.style.display = 'none';

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');

        // Toggle the visibility of icons
        if (menu.classList.contains('active')) {
            barsIcon.style.display = 'none';
            cancelIcon.style.display = 'inline-block'; // Make cancel icon visible
        } else {
            cancelIcon.style.display = 'none';
            barsIcon.style.display = 'inline-block'; // Make bars icon visible
        }
    });
});

