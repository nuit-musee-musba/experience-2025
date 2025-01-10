export default class DragDrop {
  constructor(workAreaSelector, itemSelector) {
      this.workArea = document.querySelector(workAreaSelector);
      this.items = document.querySelectorAll(itemSelector);
      this.initDragEvents();
  }

  initDragEvents() {
      this.items.forEach(item => {
          item.addEventListener('dragstart', this.onDragStart);
      });

      this.workArea.addEventListener('dragover', this.onDragOver);
      this.workArea.addEventListener('drop', this.onDrop.bind(this));
  }

  onDragStart(event) {
      event.dataTransfer.setData('text/plain', event.target.dataset.step);
  }

  onDragOver(event) {
      event.preventDefault();
  }

  onDrop(event) {
      event.preventDefault();
      const step = event.dataTransfer.getData('text/plain');
      const item = document.querySelector(`.item[data-step="${step}"]`);
      if (item) {
          // Vérifier si l'item a déjà été utilisé
          if (item.classList.contains('used')) {
              alert("Cet objet a déjà été utilisé !");
              return;
          }

          // Marquer l'item dans l'inventaire comme utilisé
          item.classList.add('used');

          // Faire disparaître l'item déposé (pas besoin de clone)
          console.log(`Item ${step} utilisé.`);
      }
  }
}
