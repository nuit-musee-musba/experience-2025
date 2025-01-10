let timer;
let timeLeft = 20;

export function startTimer(timerEl, onTimeout) {
    clearInterval(timer);
    timeLeft = 20;

    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            onTimeout();
        }
    }, 1000);
}

export function stopTimer() {
    clearInterval(timer);
}
