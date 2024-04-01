Nebula Project
Welcome to the Nebula project, a space-themed game developed by David Ivanoski and Tom Epstein.

Overview
Nebula is an engaging game where players navigate through space, avoiding meteors while collecting astronauts to earn points. Be cautious! Each meteor hit deducts a life, and three hits result in a game over on the "Loser" page. Collecting five astronauts leads to victory, directing you to the "Winner" page.

Project Structure
The project is structured with various folders:

HTML Folder: Divided into four main sections, including the landing page, the game page, the "Winner" page, and the "Loser" page. It also contains a section that links all other JS code folders.

Styles Folder: Contains the CSS Style file, structured similarly to the HTML folder with a few differences.

JS Folder: The heart of Nebula, consisting of five essential files:
Astronaut.js,  Obstacle.js,  Game.js,  Player.js, and lastly  script.js.

Astronaut.js
The Astronaut class in Nebula governs the behavior of astronauts within the game. Here's an overview of its structure and functionalities:

Class Initialization
The class is initialized with the following properties:

gameScreen: A reference to the HTML element representing the game screen.
left and top: Randomized initial coordinates for the astronaut within the game screen.
width and height: Dimensions of the astronaut element.
element: An HTML image element representing the astronaut, dynamically created and appended to the game screen.
Astronaut Movement
updatePosition(): Updates the position of the astronaut on the screen based on the current left and top properties.

move(): Moves the astronaut downward by 3 pixels in each game loop iteration. Calls updatePosition() to reflect the updated position on the screen.

Obstacle.js
The Obstacle class in Nebula defines the behavior and characteristics of obstacles within the game. Below is an overview of its structure and functionalities:

Class Initialization
The class is initialized with the following properties:

gameScreen: A reference to the HTML element representing the game screen.
left and top: Randomized initial coordinates for the obstacle within the game screen.
width and height: Dimensions of the obstacle element.
element: An HTML image element representing the obstacle, dynamically created and appended to the game screen.
Obstacle Movement
updatePosition(): Updates the position of the obstacle on the screen based on the current left and top properties.

move(): Moves the obstacle downward by 3 pixels in each game loop iteration. Calls updatePosition() to reflect the updated position on the screen.

Game.js
The Game class is a crucial component of the Nebula project, managing the overall game flow and logic. Here's an overview of its functionalities:

Class Initialization
The class is initialized with the following properties:

startScreen, gameScreen, gameEndScreen, and gameEndScreenWon: References to different sections of the HTML document representing the start, game, and end screens.
gamemusic: An audio object for playing the background music during the game.
player: An instance of the Player class representing the player's spaceship.
width and height: Dimensions of the game screen.
obstacles and astronauts: Arrays to store instances of obstacles and astronauts.
score and lives: Variables to track the player's score and remaining lives.
gameIsOver: A boolean indicating whether the game is over.
Game Flow
start(): Initiates the game by setting up the game screen, hiding the start screen, and starting the game loop.

gameLoop(): The main game loop that continuously updates the game state by calling the update() method and using requestAnimationFrame.

update(): Updates the player's position, checks for collisions with obstacles and astronauts, manages scoring and lives, and creates new obstacles and astronauts randomly.

End Game Scenarios
endGame(): Handles the game over scenario by removing player, obstacles, and astronauts from the screen, displaying the game over screen, and pausing the background music.

endGameWon(): Handles the winning scenario by removing player, obstacles, and astronauts from the screen, displaying the victory screen, and pausing the background music.


Player.js
The Player class in Nebula defines the behavior and attributes of the player's spaceship within the game. Below is an overview of its structure and functionalities:

Class Initialization
The class is initialized with the following properties:

gameScreen: A reference to the HTML element representing the game screen.
left, top, width, and height: Initial coordinates and dimensions of the player's spaceship.
directionX and directionY: Variables to track the movement direction along the X and Y axes.
element: An HTML image element representing the player's spaceship, dynamically created and appended to the game screen.
Player Movement
move(): Updates the player's spaceship position based on the current direction along the X and Y axes. Additionally, implements boundary checks to preven on() to reflect the updated position on the screen.


script.js
The script.js file in Nebula orchestrates the initialization of the game, handles user input, and provides functionality for starting, restarting, and controlling the game. Here's an overview of its structure and functionalities:

Initialization
window.onload: A function that runs when the window has finished loading, ensuring that the DOM elements are ready. It sets up event listeners and initializes variables.
Event Handlers
startGame(): Initiates the game by creating a new instance of the Game class and starting it.

restartGame(): Reloads the page to restart the game, resetting all game elements.

playmusic(): Placeholder function for playing background music (currently empty).

handleKeydown(event): Listens for keydown events and adjusts the player's spaceship direction based on the pressed arrow keys.

Event Listeners
startButton: Listens for a click on the start button and triggers the startGame function.

restartButton: Listens for a click on the restart button and triggers the restartGame function.

gameWinButton: Listens for a click on the win button (currently set to restart) and triggers the restartGame function.

window: Listens for the keydown event and triggers the handleKeydown function to handle arrow key inputs.

Usage
To experience the Nebula game, follow these steps:

Open the index.html file in your preferred web browser.

Click the "Take off" button to initiate the game.

Control your spaceship using the arrow keys:

Left Arrow: Move left
Up Arrow: Move up
Right Arrow: Move right
Down Arrow: Move down
Navigate through space, avoiding meteors and collecting astronauts to earn points.

You have three lives. If hit by a meteor three times, the game ends, and you'll see the "Lost in Space/loser" screen.

Collect five astronauts to achieve victory. Upon success, the "Winner" screen will be displayed.

Click the "Begin over" button to play again and challenge yourself.

Feel free to contribute to the Nebula project by enhancing the gameplay, adding new features, or improving the overall user experience. Your contributions are welcome, and you can explore the codebase to customize elements such as astronaut behavior, obstacle appearance, or game mechanics.

Enjoy your cosmic adventure in and with Nebula Team!





 
