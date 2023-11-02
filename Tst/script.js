


    const countdownElement = document.getElementById("countdown");
    const independenceDayElement = document.getElementById("independenceDay");

    function displayCountdown(count) {
        if (count === 0) {
            independenceDayElement.style.display = "block";
        } else {
            countdownElement.textContent = count;
            setTimeout(() => {
                displayCountdown(count - 1);
            }, 1000);
        }
    }

    // Start the countdown
    displayCountdown(10);
