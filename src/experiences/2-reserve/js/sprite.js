export default class Sprite {
    constructor(src, size, x, y) {
        this.src = src;
        this.size = size;
        this.x = x;
        this.y = y;
        this.element = null;
        this.start();
    }

    start() {
      this.element = document.createElement('div');
      console.log(this.element)
      this.element.src = this.src;
      this.element.style.position = 'absolute';
      this.element.style.left = this.x + "px";
      this.element.style.top = this.y + "px";
    }
}
