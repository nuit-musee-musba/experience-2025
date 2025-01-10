export default class Scene {
    constructor() {
        this.sound = null;
        this.name = null;
    }

    onSceneLoaded(game) {
        game.on("scene:loaded", (sceneName) => {
            if (!this.checkScene(sceneName)) {
                return;
            }
            this.initScene();
        });
    }

    onSceneUnloaded(game) {
        game.on("scene:unloaded", (sceneName) => {
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

        //let music = document.querySelector('#' + this.);
    }
}