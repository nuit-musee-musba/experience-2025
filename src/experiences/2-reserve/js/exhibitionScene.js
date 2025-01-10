import Scene from "./scene.js"

export default class ExhibitionScene extends Scene {
    constructor() {
        super(null, null);
        this.sound = "./assets/sound/song.mp3";
        this.name = "scene-exhibition"
    }
}