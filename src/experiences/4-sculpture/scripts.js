// Gestion du drag and drop
class DragDrop {
  constructor() {
      this.workArea = document.getElementById('work-area');
      this.initDragEvents();
  }

  initDragEvents() {
      const items = document.querySelectorAll('.item');
      items.forEach(item => {
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
      const item = document.querySelector(`.item[data-step=\"${step}\"]`);
      if (item) {
          const clone = item.cloneNode(true);
          clone.setAttribute('draggable', 'false');
          clone.classList.add('dropped');
          this.workArea.appendChild(clone);
      }
  }
}

// Initialisation du jeu
new DragDrop();
