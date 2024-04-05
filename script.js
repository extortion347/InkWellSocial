gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play none none reverse"
})


gsap.to('.img-container', {
  scale: 52,
  ease: "ease",
  scrollTrigger: {
    trigger: '.video-section',
    scrub: 1,
    start: "top top",
    end: "bottom",
    pin: true
  }
})


gsap.to('.right', {
  autoAlpha: 0,
  x: 500,
  duration: 1.5,
  scrollTrigger: {
    start: 1
  }
})
gsap.to('.left', {
  autoAlpha: 0,
  x: -500,
  duration: 1.5,
  scrollTrigger: {
    start: 1
  }
})


gsap.to('.txt-bottom', {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 2,
  scrollTrigger: {
    start: 2
  }
})


const tl = gsap.timeline();

tl.from('.left-side div', {
  y: 150,
  opacity: 0,
  stagger: {
    amount: .4
  },
  delay: .5
}).from('.right-side', { opacity: 0, duration: 2 }, .5)
  .to('.wrapper', { x: -window.innerWidth })



ScrollTrigger.create({
  animation: tl,
  trigger: '.wrapper',
  start: "top top",
  end: "+=600",
  scrub: 1,
  pin: true,
  ease: "ease"
})



gsap.utils.toArray('.col').forEach(image => {
  gsap.fromTo(image, {
    opacity: .3,
    x: 0
  }, {
    opacity: 1,
    x: -50,
    scrollTrigger: {
      trigger: image,
      start: "10%",
      stagger: {
        amount: .4
      }
    }
  })
})

const timeline = gsap.timeline();

timeline.from('.title span', {
  y: 150,
  skewY: 7,
  duration: 3
}).from('.txt-bottom', {
  letterSpacing: -10,
  opacity: 0,
  duration: 3
})


window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var vContainer = document.querySelector('.v_container');

  if (scrollPosition > 100) {
    vContainer.classList.add('show-bottom-icons');
  } else {
    vContainer.classList.remove('show-bottom-icons');
  }
});


gsap.to('.fa-arrow-right-long', {
  x: 20, // Move 20 pixels to the right
  repeat: -1, // Repeat infinitely
  yoyo: true, // Reverse animation
  duration: 5, // Duration of the animation (5 seconds)
  ease: 'slow(0.7, 0.7, false)' // Custom ease for slow movement
});



// Navbar js////////////
// JavaScript code for handling click event to set active class
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".menu li a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      links.forEach(function (otherLink) {
        otherLink.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
});


// & icon movement

gsap.to(".sm2", {
  scale: 1.2, // Increase size to 1.2 times
  duration: 4, // Animation duration
  ease: "power1.inOut", // Easing function
  yoyo: true, // Yoyo effect (reverses animation)
  repeat: -1 // Repeat indefinitely
});

//statistics cards js////////////////

// Detect when the statistics div comes into view
document.addEventListener("scroll", function () {
  var statisticsDiv = document.getElementById("statistics");
  var statisticsPosition = statisticsDiv.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  console.log("Statistics Position:", statisticsPosition);

  // If statistics div is in view
  if (statisticsPosition < screenPosition) {
    // Animate numbers with different end values
    animateNumbers([40, 85, 97]); // Example end values
    // Remove event listener to prevent repeated animations
    document.removeEventListener("scroll", this);
  }
});

function animateNumbers(endValues) {
  var numbers = document.querySelectorAll(".number");

  // Animate each number
  numbers.forEach(function (number, index) {
    var endValue = endValues[index]; // Get the end value for this number

    var animation = gsap.to(number, {
      duration: 2,
      innerText: endValue,
      ease: "power2.out",
      onUpdate: function () {
        // Update the displayed number during the animation
        number.innerText = Math.ceil(animation.progress() * endValue);
      }
    });
  });
}





// SERVICES DIV FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.service-card');

  gsap.registerPlugin(ScrollTrigger);

  cards.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        autoAlpha: 0,
        scale: 0.5, // Initial scale
        z: -200, // Move card behind the screen
      },
      {
        autoAlpha: 1,
        scale: 1, // Final scale
        z: 0,
        duration: 1, // Duration of the animation
        scrollTrigger: {
          trigger: card,
          scrub: true, // Enables "scrubbing" behavior, making the animation follow the scroll position smoothly
          toggleActions: 'play none none reverse', // Play the animation when the card enters the viewport, and reverse it when it exits
          start: 'top 1%',
          // markers: true, 
        },
      }
    );
  });
});


// GSAP timeline for the animation
const servtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    start: "top center", // Change this as needed
    scrub: true, // Enable scrubbing
  }
});

// Animation sequence for each service element
servtl.from(".elem", {
  x: "-100%", // Start from left
  opacity: 0,
  stagger: 0.2 // Stagger the animation
});

