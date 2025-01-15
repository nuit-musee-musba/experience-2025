import EventEmitter from "../../../commons/components/EventEmitter.js";

export default class AudioManager extends EventEmitter {
    constructor() {
        super();
        if (AudioManager._instance) {
            throw new Error("An audio manager is a singleton. Please use getInstance() instead.");
        }
        this.audioElem = document.querySelector('#background-music')
        this.canPlaySound = false;
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
        this.audioElem.play();
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