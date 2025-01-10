import Scene from "./scene.js"

export default class ExhibitionScene extends Scene {
    constructor() {
        super();
        this.sound = "./assets/sound/song.mp3";
        this.name = "scene-exhibition"
    }
}