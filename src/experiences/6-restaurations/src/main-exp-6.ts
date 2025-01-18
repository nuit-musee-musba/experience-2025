import './style.scss'
import { Router } from "./Router"
import { AudioManager } from "./AudioManager"

/* const app = document.querySelector('#app-exp-6');
if (app) {
    app.innerHTML = `
      <div class="main-container" id="main-container">
      
      </div>
      <canvas id="ogl-canvas"></canvas>
    `;
    console.log(window.location.pathname)
} else {
    console.error('Element #app-exp-6 not found!');
}
 */
export const audioManager = new AudioManager();

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector('#app-exp-6');
  if (app) {
      app.innerHTML = `
        <div class="main-container" id="main-container"></div>
        <canvas id="ogl-canvas"></canvas>
      `;
      console.log(window.location.pathname)
  } else {
      console.error('Element #app-exp-6 not found!');
  }

  const mainContainer = document.querySelector("#main-container") as HTMLElement;
  new Router(mainContainer);


/* 
  const backgroundMusic = new Audio('./src/assets/audio/music-back.mp3');
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.5;

  const startMusic = () => {
    backgroundMusic.play().then(() => {
      console.log('Background music started');
      // Remove event listeners after the music starts
      window.removeEventListener('touchstart', startMusic);
      window.removeEventListener('click', startMusic);
    }).catch(err => {
      console.error('Error playing background music:', err);
    });
  };

  // Attach touchstart and click listeners
  window.addEventListener('touchstart', startMusic, { once: true });
  window.addEventListener('click', startMusic, { once: true }); */
  /* 
  const audioManager = new AudioManager();
  audioManager.playBackgroundMusic(); */
});