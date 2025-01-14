import DragDrop from './DragDrop.js';
import Item from './Item.js';
import Dialogue from './Dialogue.js';

const inventorySlots = document.querySelector('.inventory-slots');
const itemsData = [
    { step: 1, name: 'Objet 1' },
    { step: 2, name: 'Objet 2' },
    { step: 3, name: 'Objet 3' },
    { step: 4, name: 'Objet 4' },
    { step: 5, name: 'Objet 5' },
    { step: 6, name: 'Objet 6' },
    { step: 7, name: 'Objet 7' },
    { step: 8, name: 'Objet 8' },
];

itemsData.forEach(data => {
    const item = new Item(data.step, data.name);
    inventorySlots.appendChild(item.element);
});

new DragDrop('#work-area', '.item');

var dialogue = new Dialogue();
dialogue.listDialogue(Array.from({ length: 30 }, (_, i) => i), '#dialogue-element');
