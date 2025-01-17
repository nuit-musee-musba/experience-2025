import EventEmitter from "../../../commons/components/EventEmitter.js"
import selectedElements from "../data/selectedElements.js";
import Dialogue from "./dialogue.js";
import selectedPaintings from "../data/selectedPaintings.js";


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
        this.unloadScene("scene-exhibition");
        if (this.gameProgression > this.endGameThreshold) {
            this.loadScene("end-scene");
            
            return;
        }
        this.loadScene("scene-reserve")
    }


    resetGame(){
        this.unloadScene('scene-reserve')
        this.unloadScene('end-scene')
        this.unloadScene('scene-welcome')
        this.unloadScene('scene-exhibition')
        this.gameProgression = 0
        this.loadScene('scene-welcome')
        selectedPaintings.splice(0, selectedPaintings.length);
        selectedElements.splice(0, selectedElements.length);
    }
}