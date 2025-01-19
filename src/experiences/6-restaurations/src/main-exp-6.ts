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
        <a href="../../index.html" class="button-retour-menu"><img src="/6-restaurations/assets/img//backHouse.svg" alt=""></a>
        <canvas id="ogl-canvas"></canvas>
      `;
      console.log(window.location.pathname)
  } else {
      console.error('Element #app-exp-6 not found!');
  }

  const mainContainer = document.querySelector("#main-container") as HTMLElement;
  //const homeElement = document.querySelector(".button-retour-menu")
  new Router(mainContainer);

  startMusic()
  
  function startMusic(){
      const start = () => {
        audioManager.playBackgroundMusic().then(() => {
            console.log('Background music started');
            window.removeEventListener('touchstart', start);
            window.removeEventListener('click', start);
        }).catch(err => {
            console.error('Error playing background music:', err);
        });
      };

      window.addEventListener('touchstart', start, { once: true });
      window.addEventListener('click', start, { once: true });

      console.log('Interaction listeners attached for background music');
  }

  //homeElement?.addEventListener('touchstar', audioManager.playClickSound);
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