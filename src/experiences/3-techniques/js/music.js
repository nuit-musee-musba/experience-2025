function startMusic() {
    const audio = document.getElementById('background-music');
    audio.play();

}

document.body.addEventListener('mousemove', startMusic); 
document.body.addEventListener('click', startMusic);
document.body.addEventListener('keydown', startMusic);
document.body.addEventListener('touchstart', startMusic);