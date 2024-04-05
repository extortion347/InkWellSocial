// Select all navbar links
const navLinks = document.querySelectorAll('.menu a');

// Iterate over each navbar link and attach click event listener
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);

        // Check if the target section is .video-section or #about
        if (targetId === 'about' || targetId === 'video-section') {
            // Check if viewport width is less than or equal to 768px (typical mobile device width)
            if (window.innerWidth <= 320) {
                window.scrollTo({
                    top: 250,
                    behavior: 'smooth'
                });
            } else if (window.innerWidth <= 768) {
                window.scrollTo({
                    top: 250, // Adjust this scroll position for mobile view

                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 250, // Adjust this scroll position for larger screens
                    behavior: 'smooth'
                });
            }
        } else if (targetId === 'services-container') {
            // Adjust scroll positions for different sections as needed
            if (window.innerWidth <= 320) {
                window.scrollTo({
                    top: 2050,
                    left: 300,
                    behavior: 'smooth'
                });
            } else if (window.innerWidth <= 768) {
                window.scrollTo({
                    top: 2050, // Adjust this scroll position for mobile view
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 1650, // Adjust this scroll position for larger screens
                    behavior: 'smooth'
                });
            }
        } else if (targetId === 'page5') {
            // Similar adjustments for other sections
            if (window.innerWidth <= 320) {
                window.scrollTo({
                    top: 7150,
                    left: 300,
                    behavior: 'smooth'
                });
            } else if (window.innerWidth <= 768) {
                window.scrollTo({
                    top: 7150,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 4350,
                    behavior: 'smooth'
                });
            }
        } else if (targetId === 'contactUs') {
            // Similar adjustments for other sections
            if (window.innerWidth <= 320) {
                window.scrollTo({
                    top: 9050,
                    left: 300,
                    behavior: 'smooth'
                });
            } else if (window.innerWidth <= 768) {
                window.scrollTo({
                    top: 9050,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 6050,
                    behavior: 'smooth'
                });
            }
        } else {
            // Scroll to the target section smoothly
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
