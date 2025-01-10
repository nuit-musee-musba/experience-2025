import Game from "./js/Game.js"
import ExhibitionScene from "./js/exhibitionScene.js"
import ReserveScene from "./js/reserveScene.js"
import Scene from "./js/scene.js";
import AudioManager from "./js/audioManager.js";

const welcomeScene = new Scene("scene-welcome", null)
const exhibitionScene = new ExhibitionScene();
const reserveScene = new ReserveScene();

document.getElementById("start-button").addEventListener("click", () => {
    AudioManager.getInstance().canPlaySound = true;
    Game.getInstance().unloadScene("scene-welcome");
    Game.getInstance().loadScene("scene-exhibition");
    AudioManager.getInstance().canPlaySound = false;
});

document.getElementById("change-scene").addEventListener("click", () => {
    AudioManager.getInstance().canPlaySound = true;
    Game.getInstance().unloadScene("scene-exhibition");
    Game.getInstance().loadScene("scene-reserve");
    AudioManager.getInstance().canPlaySound = false;
});

Game.getInstance().loadScene("scene-welcome");

