import { ArrowButton } from "../commons/components/ArrowButton";
import { Button } from "../commons/components/Button";
import { CounterDisplay } from "../commons/components/CounterDisplay";
import { Modal } from "../commons/components/Modal";
import { ScoreDisplay } from "../commons/components/ScoreDisplay";
import { StepsDisplay } from "../commons/components/StepsDisplay";
import { TimerDisplay } from "../commons/components/TimerDisplay";

const testDiv = document.querySelector('.test')

const modal = new Modal('modal', 'This is the modal content Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex praesentium quo nam molestiae earum, cum consequuntur? Illo accusantium harum quo voluptas ipsam obcaecati suscipit ea fugit, ducimus alias quis.', 'test-css', testDiv);
//parametres = titre, contenu, classe css, élément parent



const timer = new TimerDisplay(60, 'timer-display', testDiv);
//parametres = temps en minutes, classe css, élément parent

const counterDisplay = new CounterDisplay(0, 'test-css', testDiv);
//parametres = valeur de départ, classe css, élément parent

const scoreDisplay = new ScoreDisplay(0, 25, 'test-css', testDiv);
//parametres = valeur de départ, valeur cible, classe css, élément parent


const stepsDisplay = new StepsDisplay(0,6, 'test-css', testDiv);
//parametres = valeur de départ, valeur cible, classe css, élément parent

const TextButton = new Button('le Boutton', 'https://www.google.com', 'small', 'black', 'test-css', testDiv);
//parametres = texte, lien, taille, couleur, classe css, élément parent
//La taille doit être big, normal ou small
//La couleur doit être black ou white

const arrowButton = new ArrowButton('right', 'white',"https://www.google.com", 'test-css', testDiv);
//parametres = direction, couleur, classe css, élément parent
//La direction doit être right ou left
//La couleur doit être white ou black


stepsDisplay.on('stepsReached', ()=>{
    console.log('Steps reached');
})


const incrementButton = document.createElement('button');

incrementButton.textContent = 'Increment';

incrementButton.addEventListener('click', () => {
    counterDisplay.increment(2);
    scoreDisplay.increment(1);
    stepsDisplay.increment(1);
}
)

document.body.appendChild(incrementButton);

modal.show();

timer.start()


