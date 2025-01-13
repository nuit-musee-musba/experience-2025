export default class Sprite {
    constructor(src, width, height, x, y, containerName) {
        this.src = src;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.element = null;
        this.containerName = containerName;
        this.start();
    }

    start() {
      this.element = document.createElement('img');
      let container = document.querySelector("#" + this.containerName);
      if (!container) {
          //console.error("Could not find container with id '" + this.containerName + "'");
          return;
      }
      container.append(this.element);
      console.log(this.element)
      this.element.src = this.src;
      this.element.style.position = 'absolute';
      this.element.style.left = this.x + "px";
      this.element.style.top = this.y + "px";
      this.element.style.width = this.width + "px";
      this.element.style.height = this.height + "px";
    }
}
