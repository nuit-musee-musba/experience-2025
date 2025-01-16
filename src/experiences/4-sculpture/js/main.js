import DragDrop from './DragDrop.js';
import Item from './Item.js';
import Dialogue from './Dialogue.js';
import Step from './currentStep.js';
import { Button } from '../../../commons/components/Button.js';

const stepManager = new Step(1); // Initialisation de l'étape avec Step
console.log(`Étape initialisée : ${stepManager.getCurrentStep()}`);

const inventorySlots = document.querySelector('.inventory-slots');

// Crée les items pour les identifiants 1 à 9
for (let item = 1; item <= 6; item++) {
    const itemInstance = new Item(item); // Passe l'identifiant de l'item
    inventorySlots.appendChild(itemInstance.element); // Ajoute l'élément à l'inventaire
    console.log(`Item ajouté : ${item}`);
}

// Initialiser le Drag & Drop avec `stepManager` pour gérer les étapes
new DragDrop('#work-area', '.item', stepManager);

// Initialiser les dialogues
const dialogue = new Dialogue();
dialogue.listDialogue(Array.from({ length: 30 }, (_, i) => i), '#dialogue-element');

const btn = new Button()
