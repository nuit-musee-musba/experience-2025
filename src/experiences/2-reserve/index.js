import Game from "./js/Game.js"
import ExhibitionScene from "./js/exhibitionScene.js"
import ReserveScene from "./js/reserveScene.js"


var exhibitionScene = new ExhibitionScene();
var reserveScene = new ReserveScene();

// subscribe to events

Game.getInstance().unloadScene("scene-exhibition");

