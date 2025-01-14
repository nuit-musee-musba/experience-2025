export let score1 = 0;
export let score2 = 0;
const difficultyPoints = {
    easy: 1,
    medium: 2,
    hard: 3
};

export function updateScores(score1El, score2El) {
    score1El.textContent = score1;
    score2El.textContent = score2;
}

export function incrementScore(player, difficulty) {
    const points = difficultyPoints[difficulty] || 1;
    if (player === 1) score1 += points;
    else score2 += points;
}

