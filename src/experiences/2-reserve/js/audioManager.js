import EventEmitter from "./eventEmitter.js";

export default class AudioManager extends EventEmitter {
    constructor() {
        super();
        this.audioElem = document.querySelector('#background-music')
    }

    playMusic(soundPath) {
        if (this.audioElem != null && !this.audioElem.paused) {
            this.stopMusic();
            // Si il y a déjà une musique de fond, l'arrêter.
        }
        this.audioElem.src = "soundPath";
        this.audioElem.play();
    }

    stopMusic() {
        if (this.audioElem != null) {
            this.audioElem.pause();
        }
    }

    playSound(sound) {
        
    }
}