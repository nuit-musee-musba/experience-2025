import Game from "./js/Game.js"
import ExhibitionScene from "./js/exhibitionScene.js"
import ReserveScene from "./js/reserveScene.js"
import WelcomeScene from "./js/welcomeScene.js"
import Scene from "./js/scene.js";
import AudioManager from "./js/audioManager.js";
import Dialogue from "./js/dialogue.js";
import   "./js/paintingChoice.js";

let game = new Game();
const welcomeScene = new WelcomeScene();
const exhibitionScene = new ExhibitionScene();
const reserveScene = new ReserveScene();

// document.getElementById("end-exhibition-scene").addEventListener("click", () => {
//     AudioManager.getInstance().canPlaySound = true;
//     Game.getInstance().unloadScene("scene-exhibition");
//     Game.getInstance().loadScene("scene-reserve");
//     AudioManager.getInstance().canPlaySound = false;
// });

Game.getInstance().loadScene("scene-welcome");


