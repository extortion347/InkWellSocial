document.addEventListener("DOMContentLoaded", function () {
    const loadingText = document.getElementById("loadingPercentage");
    let percentage = 0;
    let interval = setInterval(() => {
        percentage += 1;
        loadingText.innerText = percentage + "%";
        if (percentage >= 100) clearInterval(interval);
    }, 7); // Adjust the speed of the counter here
});
