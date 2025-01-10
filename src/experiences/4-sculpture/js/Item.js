export default class Item {
  constructor(step, name) {
      this.step = step;
      this.name = name;
  }

  createHTMLElement() {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.setAttribute('draggable', 'true');
      itemElement.setAttribute('data-step', this.step);
      itemElement.textContent = this.name;
      return itemElement;
  }
}
