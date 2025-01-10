import Game from "./js/Game.js"
import ExhibitionScene from "./js/exhibitionScene.js"
import ReserveScene from "./js/reserveScene.js"
import Scene from "./js/scene.js";

var welcomeScene = new Scene("scene-welcome", null)
var exhibitionScene = new ExhibitionScene();
var reserveScene = new ReserveScene();

Game.getInstance().loadScene("scene-welcome");

