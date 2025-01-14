import EventEmitter from "./eventEmitter.js"
import Dialogue from "./dialogue.js";

var thematicEnum = {
    0: "happy",
    1: "Sad",
    2: ""
};

Object.keys(thematicEnum).forEach(key => {
    thematicEnum[thematicEnum[key]] = parseInt(key);
});

export default class Game extends EventEmitter {
    constructor() {
        super();
        this.chosenPaintings = [];
        this.gameProgression = 0;
        this.endGameThreshold = 2;
        if (Game._instance) {
            console.error("An audio manager is a singleton. Please use getInstance() instead.");
        }
        this.dialogue = new Dialogue();
    }

    static getInstance() {
        if (!Game._instance) {
            Game._instance = new Game();
        }
        return Game._instance;
    }

    loadScene(sceneName) {
        this.emit("scene:loaded", sceneName);
    }

    unloadScene(sceneName) {
        this.emit("scene:unloaded", sceneName);
    }

    updateGameProgression() {
        this.gameProgression++;
        if (this.gameProgression >= this.endGameThreshold) {
            this.loadScene("end-scene");
            return;
        }
        this.loadScene("scene-exhibition")
    }
}