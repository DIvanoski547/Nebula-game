class Game {
  // code to be added
  constructor() {
    this.startScreen = document.getElementById("start-page");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    // this.gamecontainer = document.getElementById('game-container');
    // this.gameScreen.style.display = 'none';
    // this.gameEndScreen.style.display = 'none';

    this.player = new Player(
      this.gameScreen,
      10,
      550,
      100,
      100,
      "./images/spaceship-2.png"
    ); //  new Player()

    this.width = 1000;
    this.height = 800;

    this.obstacles = []; // new Obstacle()
    this.astronauts = []; // new astronauts()
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
  }

  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameEndScreen.style.display = "none";
    this.gameLoop();
    // Car start at a specific position
    // Obstacles are going to be at a specific position as well
  }

  gameLoop() {
    // Right now, always this.gameIsOver === false
    if (this.gameIsOver === true) {
      return;
    }
    console.log("gameLoop exec");
    this.update(); // update the game
    //this.gameLoop()
    window.requestAnimationFrame(() => this.gameLoop()); // used to improve/better manage the rate of frames for the game animation
  }

  update() {
    // Return the new position of the spaceship to update the game
    this.player.move();
    // Return the new positions of the commets to update the game
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // If the player's collides with an obstacle
      if (this.player.didCollide(obstacle)) {
        // Remove the obstacle element from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Reduce player's lives by 1
        this.lives--;
        document.getElementById("lives").textContent = this.lives;
        // Update the counter variable to account for the removed obstacle
        i--;
      } else if (obstacle.top > this.height) {
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove obstacle object from the array
        this.obstacles.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      }
    }
    //--------------------------------------------------------------Astronaut----------------------------------------------------------------------//
    for (let i = 0; i < this.astronauts.length; i++) {
      const astronaut = this.astronauts[i];
      astronaut.move();

      // If the player's collides with an astronaut
      if (this.player.didCollide(astronaut)) {
        // Remove the obstacle element from the DOM
        astronaut.element.remove();
        // Remove obstacle object from the array
        this.astronauts.splice(i, 1);
        // increase player's lives by 1
        this.lives++;
        document.getElementById("lives").textContent = this.lives;
        // Update the counter variable to account for the removed astronaut
        i++;
      } else if (astronaut.top > this.height) {
        // Remove the astronaut. from the DOM
        astronaut.element.remove();
        // Remove astronaut. object from the array
        this.astronaut.splice(i, 1);
        // Update the counter variable to account for the removed obstacle
        i--;
      }
    }
    //Return the new positions of the astronaut to update the game

    // End the game
    if (this.lives === 0) {
      this.endGame();
    }
    // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
    // Create a new astronaut based on a random probability
    // when there is no other astronaut on the screen
    if (Math.random() > 0.98 && this.astronauts.length < 1) {
    this.astronauts.push(new Astronaut(this.gameScreen));
    }
  }


  // Create a new method responsible for ending the game
  endGame() {
    this.player.element.remove(); // remove the player from the screen
    this.obstacles.forEach((obstacle) => obstacle.element.remove()); // remove the obstacles from the screen

    this.astronauts.forEach((astronaut) => astronaut.element.remove()); // remove the astronaut from the screen

    this.gameIsOver = true; // cancel the execution of gameLoop()
    this.startScreen.style.display = "none";
    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
  }
}
