import EventEmitter from "../../../commons/components/EventEmitter.js";

export default class AudioManager extends EventEmitter {
    constructor() {
        super();
        if (AudioManager._instance) {
            throw new Error("An audio manager is a singleton. Please use getInstance() instead.");
        }
        this.audioElem = document.querySelector('#background-music')
        this.audioElem.volume = .5;
        this.canPlaySound = true;
        this.waitingSound = null;
    }

    static getInstance() {
        if (!AudioManager._instance) {
            AudioManager._instance = new AudioManager();
        }
        return AudioManager._instance;
    }

    playMusic(soundPath) {
        if (!this.canPlaySound) {
            this.waitingSound = soundPath;
            return;
        }
        if (this.audioElem != null && !this.audioElem.paused) {
            this.stopMusic();
        }
        this.audioElem.src = soundPath;
        this.audioElem.volume = 0;
        this.audioElem.play();
        // Ajoute un fondu progressif
        let volume = 0;
        const fadeInInterval = setInterval(() => {
            if (volume < .5) {
                volume += 0.05; // Augmente par étapes (0.05 = 5%)
                this.audioElem.volume = Math.min(volume, .5); // Limite à 1.0
            } else {
                clearInterval(fadeInInterval); // Arrête une fois le volume à 1.0
            }
        }, 100);
    }

    stopMusic() {
        if (this.audioElem != null) {
            this.audioElem.pause();
            this.audioElem.src = null;
        }
    }

    playWaitingSound() {
        if (this.audioElem == null || this.waitingSound == null) {
            console.error("audio elem or waiting sound is null, can't play song")
            return;
        }
        if (!this.canPlaySound) {
            this.canPlaySound = true;
        }
        this.audioElem.src = this.waitingSound;
        this.waitingSound = null;
        this.audioElem.play();
    }
}