import Scene from "./scene.js"
import Game from "./Game.js";
import AudioManager from "./audioManager.js";

export default class WelcomeScene extends Scene {
    constructor() {
        super("scene-welcome", "./assets/sound/song.mp3");
    }

    initScene() {
        super.initScene();
        Game.getInstance().dialogue.listDialogue([`${Game.getInstance().gameProgression}-0-0`, `${Game.getInstance().gameProgression}-0-1`]);
        Game.getInstance().once("onDialogueClosed", () => {
            AudioManager.getInstance().canPlaySound = true;
            Game.getInstance().unloadScene("scene-welcome");
            Game.getInstance().loadScene("scene-exhibition");
            AudioManager.getInstance().canPlaySound = false;
        })
    }
}