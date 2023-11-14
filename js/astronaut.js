class Astronaut {
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 300 + 70);
        this.top = 0;
        this.width = 80;
        this.height = 80;
        this.element = document.createElement('img');

        this.element.src = './images/astronaut-1.png';
        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen.appendChild(this.element); 

    }

    updatePosition() {
        // Update the obstacle's position based on the properties left and top
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        console.log('astronaut position', this.element.getBoundingClientRect())
      }

    move() {
        // Move the obstacle down by 3px
        this.top += 3;
        // Update the obstacle's position on the screen
        this.updatePosition();
      }
}