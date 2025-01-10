import AudioManager from "./audioManager.js";
import Game from "./Game.js";
import Sprite from "./sprite.js";

export default class Scene extends Sprite {
    constructor(name, sound) {
        super("src", "size", "x", "y")
        this.sound = sound;
        this.name = name;
    }

    start() {
        super.start();
        Game.getInstance().on("scene:loaded", (sceneName) => {
            if (!this.checkScene(sceneName)) {
                return;
            }
            this.initScene();
        });

        Game.getInstance().on("scene:unloaded", (sceneName) => {
            if (!this.checkScene(sceneName)) {
                return;
            }
            this.unloadScene();
        });
    }

    checkScene(sceneName) {
        return sceneName === this.name;
    }

    unloadScene() {
        console.log(`Unloading ${this.name}`);
        let scene = document.querySelector('#' + this.name);
        if (scene == null) {
            console.error("No scene were found for " + this.name)
            return;
        }
        scene.style.display = "none";

        AudioManager.getInstance().stopMusic();
    }

    initScene() {
        console.log(`Loading ${this.name}`);
        let scene = document.querySelector('#' + this.name);
        if (scene == null) {
            console.error("No scene were found for " + this.name)
            return;
        }
        scene.style.display = "block";

        if (this.sound !== null) {
            AudioManager.getInstance().playMusic(this.sound);
        }
    }
}