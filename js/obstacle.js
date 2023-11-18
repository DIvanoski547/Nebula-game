class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 850 + 70);
    this.top = 0;
    this.width = 90;
    this.height = 90;
    this.element = document.createElement("img");
    this.element.src = "./images/obstacle-3.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    console.log("obstacle position", this.element.getBoundingClientRect());
  }

  move() {
    this.top += 3;
    this.updatePosition();
  }
}
