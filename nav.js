document.addEventListener('DOMContentLoaded', function () {
    const iconWrapper = document.querySelector('.icon-wrapper');
    const iconBars = document.querySelector('.fa-bars');
    const iconTimes = document.querySelector('.fa-times');
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    iconWrapper.addEventListener('click', function () {
        const isExpanded = iconBars.style.display === 'none';

        if (!isExpanded) {
            iconBars.style.display = 'none';
            iconBars.style.opacity = '0';
            iconBars.style.visibility = 'hidden';
            iconTimes.style.display = 'block';
            iconTimes.style.opacity = '1';
            iconTimes.style.visibility = 'visible';
            navbarCollapse.classList.toggle('show');  // Toggles the show class
        } else {
            iconBars.style.display = 'block';
            iconBars.style.opacity = '1';
            iconBars.style.visibility = 'visible';
            iconTimes.style.display = 'none';
            iconTimes.style.opacity = '0';
            iconTimes.style.visibility = 'hidden';
            navbarCollapse.classList.toggle('show');  // Toggles the show class
        }
    });
});
