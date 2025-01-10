export let score1 = 0;
export let score2 = 0;

export function updateScores(score1El, score2El) {
    score1El.textContent = score1;
    score2El.textContent = score2;
}

export function incrementScore(player) {
    if (player === 1) score1++;
    else score2++;
}
