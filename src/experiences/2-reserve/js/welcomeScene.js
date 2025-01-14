import Scene from "./scene.js"
import Game from "./Game.js";

export default class WelcomeScene extends Scene {
    constructor() {
        super("scene-welcome", "./assets/sound/song.mp3");
    }

    initScene() {
        super.initScene();
        Game.getInstance().dialogue.listDialogue([`${Game.getInstance().gameProgression}-0-0`]);
    }
}