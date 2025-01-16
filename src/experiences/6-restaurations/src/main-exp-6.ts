import './style.scss'
import { Router } from "./Router"

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
});