import Game from "./js/Game.js"
import ExhibitionScene from "./js/exhibitionScene.js"
import ReserveScene from "./js/reserveScene.js"
import Dialogue from "./js/dialogue.js";



var game = new Game();
var exhibitionScene = new ExhibitionScene();
var reserveScene = new ReserveScene();

// subscribe to events
exhibitionScene.onSceneLoaded(game);
reserveScene.onSceneLoaded(game);
exhibitionScene.onSceneUnloaded(game);
reserveScene.onSceneUnloaded(game);

game.loadScene("scene-exhibition");

reserveScene.loadPainting('#conteneurPaintings')
var dialogue = new Dialogue();
dialogue.showDialogue( '0','#dialogueElement')

