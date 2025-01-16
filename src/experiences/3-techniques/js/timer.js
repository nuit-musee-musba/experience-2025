let timer;
let timeLeft = 20;

export function startTimer(timerEl, onTimeout) {
    clearInterval(timer);
    timeLeft = 2000;
    document.getElementById('timer-card').style.display = 'flex';
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
    document.getElementById('timer-card').style.display = 'none';
}
