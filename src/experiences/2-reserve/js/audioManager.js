import EventEmitter from "./eventEmitter.js";

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
            console.log('Changing ' + soundPath + ' to waiting sound')
            return;
        }
        if (this.audioElem != null && !this.audioElem.paused) {
            this.stopMusic();
        }
        console.log('audio playing')
        this.audioElem.src = soundPath;
        this.audioElem.play();
    }

    stopMusic() {
        if (this.audioElem != null) {
            console.log('audio stopped')
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
        console.log('audio playing')
        this.audioElem.src = this.waitingSound;
        this.waitingSound = null;
        this.audioElem.play();
    }
}