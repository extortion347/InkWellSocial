gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline(
        {
            delay: 1
        }
    );

    tl.to(".preloader", {
        opacity: 0,
        ease: "power3.out",
        duration: 1,
    });

    tl.to(".preloader",
        {
            display: "none",
            duration: 0
        });

    tl.from("h1",
        {
            y: 100,
            opacity: 0
        })

    tl.from(".mouse-scroll", {
        y: 50,
        opacity: 0
    });
});


// Banner parallax animation
gsap.to(".bg-image", {
    y: 200,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        scrub: true,
    }
})

// Image parallax animations

const images = gsap.utils.toArray(".image img");
images.forEach(image => {
    gsap.to(image,
        {
            y: 200,
            scrollTrigger: {
                trigger: image.parentElement,
                scrub: true,
            }
        });
});


// Title fadeup animations
const titles = gsap.utils.toArray("h2");
titles.forEach(title => {
    gsap.from(title,
        {
            y: 100,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: title,
            }
        });
});


// Initialize Lenis Smooth Scroll
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// Mouse Tracker

const tracker = documnet.querySelector(".tracker");

let scrollAmount = 0;

let yPos = 0;
let xPos = 0;


function mouseTracker() {
    scrollAmount = window.scrollY + yPos;


    tracker.style.top = `${scrollAmount}px`;
    tracker.style.left = `${xPos}px`;
}

window.addEventListener("mousemove", e => {
    setTimeout(() => {
        yPos = e.clientY - tracker.offsetHeight / 2;
        xPos = e.clientX - tracker.offsetWidth / 2;

        mouseTracker();

    }, 100);
});

window.addEventListener("scroll", () => {
    mouseTracker();
})

// Select all links on the page
const links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        tracker.style.display = "none";
    });

    link.addEventListener("mouseleave", () => {
        tracker.style.display = "block";
    });
});

// To disable mouse tracker on touchscreen device
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    tracker.style.display = "none";
}


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


// Navbar js////////////
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        toggle.classList.toggle("hide");
    });

    const links = document.querySelectorAll(".menu li a");
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            links.forEach(otherLink => otherLink.classList.remove("active"));
            link.classList.add("active");
            menu.classList.remove("active"); // Close the menu on link click
        });
    });
});






// Why Choose Us

document.querySelectorAll('.letter-card').forEach(card => {
    card.addEventListener('mouseover', function () {
        document.getElementById('letter-detail').textContent = this.getAttribute('data-detail');
    });
    card.addEventListener('mouseout', function () {
        document.getElementById('letter-detail').textContent = '';
    });
});





