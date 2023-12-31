window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const gameWinButton = document.getElementById("win-button");
  let game;

  function startGame() {
    game = new Game();
    game.start();
  }

  function restartGame() {
    location.reload();
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -3;
          break;
        case "ArrowUp":
          game.player.directionY = -2;
          break;
        case "ArrowRight":
          game.player.directionX = 3;
          break;
        case "ArrowDown":
          game.player.directionY = 2;
          break;
      }
    }
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  gameWinButton.addEventListener("click", function () {
    restartGame();
  });

  window.addEventListener("keydown", handleKeydown);
};
