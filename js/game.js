class Game {
  constructor() {
    this.startScreen = document.getElementById("start-page");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameEndScreenWon = document.getElementById("game-endwon");
    this.gamemusic = new Audio('../Music/song.mp3')
    this.gamemusic.volume = 0.1;
    this.player = new Player(
      this.gameScreen,
      10,
      550,
      100,
      100,
      "./images/spaceship-2.png"
    );
    this.width = 1000;
    this.height = 800;
    this.obstacles = []; // new Obstacle()
    this.astronauts = []; // new astronauts()
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    

  }

  //-------------------------------- START THE GAME ---------------------------- //

  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameEndScreen.style.display = "none";
    this.gameEndScreenWon.style.display = "none";
    this.gamemusic.play();
    this.gameLoop();
  }

  //------------------------------ GAME LOOP ------------------------------------//

  gameLoop() {
    if (this.gameIsOver === true) {
      return;
    }
    console.log("gameLoop exec");
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }

  //-------------------------------- GAME UPDATE (obstacle) ------------------------------ //

  update() {
    this.player.move();

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        document.getElementById("lives").textContent = this.lives;
        i--;
      } else if (obstacle.top > this.height) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }
    //--------------------------------- GAME UPDATE (astronaut) -------------------------------------------------------------//

    for (let i = 0; i < this.astronauts.length; i++) {
      const astronaut = this.astronauts[i];
      astronaut.move();
      if (this.player.didCollide(astronaut)) {
        astronaut.element.remove();
        this.astronauts.splice(i, 1);
        this.score++;
        document.getElementById("score").textContent = this.score;
        i++;
      } else if (astronaut.top > this.height) {
        astronaut.element.remove();
        this.astronauts.splice(i, 1);
        i--;
      }
    }

    //---------------------------- END THE GAME ----------------------------------//

    if (this.score === 5) {
      this.endGameWon();
    } else if (this.lives === 0) {
      this.endGame();
    }

    // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
    if (Math.random() > 0.98 && this.obstacles.length < 3) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
    // Create a new astronaut based on a random probability
    // when there is no other astronaut on the screen
    if (Math.random() > 0.98 && this.astronauts.length < 1) {
      this.astronauts.push(new Astronaut(this.gameScreen));
    }
  }

  // Create a new method for losing the game
  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.astronauts.forEach((astronaut) => astronaut.element.remove());
    this.gameIsOver = true;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
    this.gamemusic.pause();
  }
  // Creat method for Winning the game
  endGameWon() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.astronauts.forEach((astronaut) => astronaut.element.remove());
    this.gameIsOver = true;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.gameEndScreenWon.style.display = "block";
    this.gamemusic.pause();
  }
}
