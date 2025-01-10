import Scene from "./scene.js"
import SelectedPaintings from "../data/selectedPaintings.js"
import Sprite from "./sprite.js";

export default class ExhibitionScene extends Scene {
    constructor() {
        super(null, null);
        this.sound = "./assets/sound/song.mp3";
        this.name = "scene-exhibition";
    }

    fetchPaintings() {
        SelectedPaintings.forEach((painting) => {
            console.log(painting.thematic);
            new Sprite(painting.src, painting.size, painting.x, painting.y);
        });
    }

    initScene() {
        super.initScene();
        this.fetchPaintings();
    }
}