import EventEmitter from "./eventEmitter.js";

export default class AudioManager extends EventEmitter {
    constructor() {
        super();
        if (AudioManager._instance) {
            throw new Error("An audio manager is a singleton. Please use getInstance() instead.");
        }
        this.audioElem = document.querySelector('#background-music')
    }

    static getInstance() {
        if (!AudioManager._instance) {
            AudioManager._instance = new AudioManager();
        }
        return AudioManager._instance;
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