let percentElement = document.getElementById('percent');
let progressBar = document.getElementById('progress-bar');
let statusText = document.getElementById('status-text');

let percent = 0;

let loading = setInterval(() => {
    if (percent >= 100) {
        clearInterval(loading);
        statusText.textContent = "Completed!";
        statusText.style.opacity = 1;  // Make it visible
        percentElement.style.transform = "scale(1)";
        window.location.href="index.html"; 
    } else {
        percent++;
        percentElement.textContent = percent + "%";
        progressBar.style.width = percent + "%";

        // Small animation on number scaling
        percentElement.style.transform = "scale(1.1)";
        setTimeout(() => {
            percentElement.style.transform = "scale(1)";
        }, 150);

        
    }
}, 50);
