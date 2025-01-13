export let totalQuestions;

export function setTotalQuestions(questionsCount) {
    totalQuestions = questionsCount;
}

export function initializeProgressBar(containerId) {
    const progressBarContainer = document.getElementById(containerId);
    progressBarContainer.innerHTML = '';

    for (let i = 0; i < totalQuestions; i++) {
        const block = document.createElement('div');
        block.classList.add('progress-block');
        block.textContent = i + 1;
        progressBarContainer.appendChild(block);
    }
}

export function updateProgressBar(containerId, currentQuestionIndex) {
    const progressBlocks = document.querySelectorAll(`#${containerId} .progress-block`);

    progressBlocks.forEach((block, index) => {
        if (index <= currentQuestionIndex) {
            block.classList.add('passed');
        }
    });
}



