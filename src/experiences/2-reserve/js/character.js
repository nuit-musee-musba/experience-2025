export default class Character {
    constructor() {
    }

    showCharacter(emotion){
        let character = document.querySelector('#character');
        this.changeFaceCharacter(emotion);
        character.style.display = "block"
    }

    hideCharacter(){
        let character = document.querySelector('#character');
        character.style.display = "none"
    }

    changeFaceCharacter(emotion){
        let character = document.querySelector('#character');

        if (emotion == 0) {
            character.src = `./assets/img/tristan.png`;
        }
        if (emotion == 1) {
            character.src = `./assets/img/tristan-triste.webp`;
        }
        else{
            this.hideCharacter()
        }
    }
}