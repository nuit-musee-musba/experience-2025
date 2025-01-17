import Game from "./js/Game.js"
import ExhibitionScene from "./js/exhibitionScene.js"
import ReserveScene from "./js/reserveScene.js"
import WelcomeScene from "./js/welcomeScene.js"
import Scene from "./js/scene.js";
import AudioManager from "./js/audioManager.js";
import Dialogue from "./js/dialogue.js";
import   "./js/paintingChoice.js";
import EndScene from "./js/endScene.js";

let game = new Game();
const welcomeScene = new WelcomeScene();
const exhibitionScene = new ExhibitionScene();
const reserveScene = new ReserveScene();
const endScene = new EndScene();

Game.getInstance().loadScene("scene-welcome");


