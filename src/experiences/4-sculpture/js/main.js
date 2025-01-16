import DragDrop from './DragDrop.js';
import Item from './Item.js';
import Dialogue from './Dialogue.js';
import Step from './currentStep.js';

const stepManager = new Step(1);
const inventorySlots = document.querySelector('.inventory-slots');

// Crée les items
for (let item = 1; item <= 6; item++) {
    const itemInstance = new Item(item);
    inventorySlots.appendChild(itemInstance.element);
}

// Initialiser le Drag & Drop
new DragDrop('#work-area', '.item', stepManager);

// Initialiser les dialogues
const dialogue = new Dialogue();
dialogue.listDialogue(Array.from({ length: 30 }, (_, i) => i), '#dialogue-element');
