export default class Character {
    constructor() {
    }

    showCharacter(emotion){
        let character = document.querySelector('#character');
        this.changeCharacterFace(emotion);
        character.style.display = "block"
    }

    hideCharacter(){
        let character = document.querySelector('#character');
        character.style.display = "none"
    }

    changeCharacterFace(emotion){
        let character = document.querySelector('#character');
        

        switch (emotion) {
            case  0:
                character.src = `./assets/img/tristan.png`;
                break;
        
            case 1 :
                character.src = `./assets/img/tristan-triste.webp`;
                break;
            default:
                this.hideCharacter()
                break;
        }
    }
}