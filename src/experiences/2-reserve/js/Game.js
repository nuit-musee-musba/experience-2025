var thematicEnum = {
    0: "happy",
    1: "Sad",
    2: ""
};

import EventEmitter from "./eventEmitter.js"

Object.keys(thematicEnum).forEach(key => {
    thematicEnum[thematicEnum[key]] = parseInt(key);
});

export default class Game extends EventEmitter {
    constructor() {
        super();
        this.chosenPaintings = [];
        if (Game._instance) {
            console.error("An audio manager is a singleton. Please use getInstance() instead.");
        }
        this.audioElem = document.querySelector('#background-music')
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
}