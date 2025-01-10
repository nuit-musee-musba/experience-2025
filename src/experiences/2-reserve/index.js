import Game from "./js/Game.js"
import ExhibitionScene from "./js/exhibitionScene.js"
import ReserveScene from "./js/reserveScene.js"
import Scene from "./js/scene.js";
import AudioManager from "./js/audioManager.js";

var welcomeScene = new Scene("scene-welcome", null)
var exhibitionScene = new ExhibitionScene();
var reserveScene = new ReserveScene();

document.getElementById("start-button").addEventListener("click", () => {
    Game.getInstance().loadScene("scene-exhibition");
    AudioManager.getInstance().playWaitingSound();
    Game.getInstance().unloadScene("scene-welcome");
});

Game.getInstance().loadScene("scene-welcome");

