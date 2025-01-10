import AudioManager from "./audioManager.js";
import Game from "./Game.js";

export default class Scene {
    constructor(name, sound) {
        this.sound = sound;
        this.name = name;
        this.start();
    }

    start() {
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
        var scene = document.querySelector('#' + this.name);
        if (scene == null) {
            console.error("No scene were found for " + this.name)
            return;
        }
        scene.style.display = "none";
    }

    initScene() {
        console.log(`Loading ${this.name}`);
        let scene = document.querySelector('#' + this.name);
        if (scene == null) {
            console.error("No scene were found for " + this.name)
            return;
        }
        scene.style.display = "block";

        if (this.sound != null) {
            console.log("playing sound : " + this.sound)
            AudioManager.getInstance().playMusic(this.sound);
        }
    }
}