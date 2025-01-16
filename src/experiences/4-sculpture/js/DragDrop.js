import ITEMS from '../data/item.js'; // Importer le tableau ITEMS

export default class DragDrop {
    constructor(workAreaSelector, itemSelector, stepManager) {
        this.workArea = document.querySelector(workAreaSelector);
        this.items = document.querySelectorAll(itemSelector);
        this.stepManager = stepManager; // Gestion des étapes
        this.currentItem = '3'; // Identifiant attendu pour l'Argile
        this.targetSquare = this.createTargetSquare();
        this.state = 0; // État initial pour l'étape 1
        this.draggedItem = null; // Élément en cours de déplacement
        this.initEvents();
    }

    createTargetSquare() {
        const img = document.createElement('img');
        img.src = './img/argile2.png'; // Image initiale
        img.alt = 'Carré initial (Argile)';
        img.style.width = '180px';
        img.style.height = '180px';
        img.style.objectFit = 'cover';
        img.style.transition = 'all 0.3s ease'; // Transition pour les changements

        this.workArea.appendChild(img);
        return img;
    }

    initEvents() {
        this.items.forEach(item => {
            // Gestion des événements pour la souris
            item.addEventListener('dragstart', this.onDragStart.bind(this));
            item.addEventListener('dragend', this.onDragEnd.bind(this));

            // Gestion des événements tactiles
            item.addEventListener('touchstart', this.onTouchStart.bind(this));
            item.addEventListener('touchmove', this.onTouchMove.bind(this));
            item.addEventListener('touchend', this.onTouchEnd.bind(this));
        });

        // Ajoute les événements globaux pour la zone de travail
        this.workArea.addEventListener('dragover', this.onDragOver.bind(this));
        this.workArea.addEventListener('drop', this.onDrop.bind(this));
    }

    onDragStart(event) {
        const item = event.target.closest('.item');
        if (!item) return;

        const itemId = item.dataset.id;
        console.log(`Début du drag : dataset.id = ${itemId}`);
        event.dataTransfer.setData('text/plain', itemId);

        item.classList.add('dragging');
        this.draggedItem = item;
    }

    onDragEnd(event) {
        if (this.draggedItem) {
            this.draggedItem.classList.remove('dragging');
            console.log(`Fin du drag pour l'item : ${this.draggedItem.dataset.id}`);
        }
    }

    onTouchStart(event) {
        event.preventDefault();
        const item = event.target.closest('.item');
        if (!item) return;

        this.draggedItem = item;
        const touch = event.touches[0];
        this.draggedItem.startX = touch.clientX;
        this.draggedItem.startY = touch.clientY;

        console.log(`Début du touch pour l'item : ${this.draggedItem.dataset.id}`);
        this.draggedItem.classList.add('dragging');
    }

    onTouchMove(event) {
        if (!this.draggedItem) return;
        const touch = event.touches[0];
        const deltaX = touch.clientX - this.draggedItem.startX;
        const deltaY = touch.clientY - this.draggedItem.startY;

        // Simule un déplacement visuel temporaire
        this.draggedItem.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }

    onTouchEnd(event) {
        if (!this.draggedItem) return;

        console.log(`Fin du touch pour l'item : ${this.draggedItem.dataset.id}`);
        this.draggedItem.classList.remove('dragging');
        this.draggedItem.style.transform = 'none';

        const touch = event.changedTouches[0];
        const workAreaRect = this.workArea.getBoundingClientRect();

        if (
            touch.clientX > workAreaRect.left &&
            touch.clientX < workAreaRect.right &&
            touch.clientY > workAreaRect.top &&
            touch.clientY < workAreaRect.bottom
        ) {
            console.log(`Item déposé dans la zone de travail : ${this.draggedItem.dataset.id}`);
            this.handleDrop(this.draggedItem.dataset.id);
        }

        this.draggedItem = null;
    }

    onDragOver(event) {
        event.preventDefault();
    }

    onDrop(event) {
        event.preventDefault();
        const droppedItemId = event.dataTransfer.getData('text/plain');
        console.log(`Item déposé avec ID transmis : ${droppedItemId}`);
        this.handleDrop(droppedItemId);
    }

    handleDrop(itemId) {
        const droppedItem = ITEMS.find(item => item.id === itemId);
        if (!droppedItem) {
            console.error(`Erreur : Aucun item trouvé dans ITEMS avec l'ID ${itemId}`);
            return;
        }

        console.log(`Item trouvé dans ITEMS : ${droppedItem.name}`);

        if (this.stepManager.getCurrentStep() === 1 && droppedItem.item === 3) {
            console.log('L’item Argile a été déposé correctement.');
            this.handleStep1();
        } else {
            console.error('Erreur : seul "Argile" peut être déposé ici.');
            alert('Erreur : seul "Argile" peut être déposé ici.');
        }
    }

    handleStep1() {
        if (this.state === 0) {
            console.log('Étape 1 : L’image passe au carré agrandi.');
            this.targetSquare.src = './img/StatueArgileBas.png';
            this.targetSquare.style.width = '380px';
            this.targetSquare.style.height = '380px';
            this.state = 1;
        } else if (this.state === 1) {
            console.log('Étape 1 : L’image passe au rectangle.');
            this.targetSquare.src = './img/StatueArgile.png';
            this.targetSquare.style.width = '380px';
            this.targetSquare.style.height = '270px';
            this.state = 2;
            this.stepManager.nextStep();
        } else if (this.state === 2) {
            console.log('Étape 1 terminée. Passage à l’étape 2.');
        }
    }
}
