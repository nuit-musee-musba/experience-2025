export let score1 = 0;
export let score2 = 0;

const difficultyPoints = {
    easy: 2,
    medium: 3,
    hard: 4
};

function formatScore(score) {
    return score.toString().padStart(2, "0") + " pts";
}

export function updateScores(score1El, score2El) {
    score1El.textContent = formatScore(score1);
    score2El.textContent = formatScore(score2);
}

export function incrementScore(player, difficulty) {
    const points = difficultyPoints[difficulty] || 1;
    if (player === 1) score1 += points;
    else score2 += points;
}
