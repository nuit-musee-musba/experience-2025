import EventEmitter from "./eventEmitter.js"

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
    }

    loadScene(sceneName) {
        this.emit("scene:loaded", sceneName);
    }

    UnloadScene(sceneName) {
        this.emit("scene:unloaded", sceneName);
    }
}