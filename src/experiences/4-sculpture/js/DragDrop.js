export default class DragDrop {
  constructor(workAreaSelector, itemSelector) {
      this.workArea = document.querySelector(workAreaSelector);
      this.items = document.querySelectorAll(itemSelector);
      this.initDragEvents();
  }

  initDragEvents() {
      this.items.forEach(item => {
          item.addEventListener('dragstart', this.onDragStart.bind(this));
      });

      this.workArea.addEventListener('dragover', this.onDragOver);
      this.workArea.addEventListener('drop', this.onDrop.bind(this));
  }

  onDragStart(event) {
      const item = event.target;

      if (item.classList.contains('used')) {
          event.preventDefault();
          alert("Cet objet a déjà été utilisé !");
          return;
      }

      event.dataTransfer.setData('text/plain', item.dataset.step);
  }

  onDragOver(event) {
      event.preventDefault();
  }

  onDrop(event) {
      event.preventDefault();
      const step = event.dataTransfer.getData('text/plain');
      const item = document.querySelector(`.item[data-step="${step}"]`);
      if (item) {
          if (item.classList.contains('used')) {
              return;
          }

          item.classList.add('used');

          console.log(`Item ${step} utilisé.`);
      }
  }
}
