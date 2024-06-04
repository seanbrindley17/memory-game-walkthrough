

let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {    // Creates function that starts a new game when called which:
    game.score = 0;   // Sets game score to 0
    game.currentGame = [];   // Empties the currentGame array
    game.playerMoves = [];  // Empties the playerMoves array
    showScore();    // Calls the showScore function
}

function showScore() {
    // Gets the score element and sets its innerText to the game.score value
    document.getElementById("score").innerText = game.score;
}

// Exports game from .js file
module.exports = { game, newGame, showScore };    // Export in curly brackets because more than one object and function will be exported from this file