/**
* @jest-environment jsdom        // Remember to install via terminal: npm install --save-dev jest-environment-jsdom
*/

const { game, newGame, showScore } = require("../game");    // Imports game, newGame, showScore into the test file


beforeAll(() => {               // Sets up the DOM once before all of the other tests are run
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains the correct keys", () => {
    test("score key exists", () => {           // Test if the game object contains a key called score. Expects "score" to be in "game"
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);    // Test game to see if currentGame exists. Expects currentGame to be in game
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);    // Test game to see if playerMoves exists. Expects playerMoves to be in game
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);    // Test game to see if "choices" exists. Expects "choices" to be in game
    });
    test("choices contains the correct ids", () => {
        //Picking out the choices key from the game using dot notation as the target of the test
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);   // Test choices array within the game object for the correct item names. Expects button ids
    });
}) ;


describe("newGame works correctly", () => {
    beforeAll(() => {       // Using beforeAll to set up the game state with a fake score
        game.score = 42;    // Sets game score to 42
        game.currentGame = ["button1", "button2"];  // Sets the moves having been made as button1 and button2
        game.playerMoves = ["button1", "button2"]; 
        document.getElementById("score").innerText = "42";  // Sets the score in the DOM to 42 by targetting the innerText of the score element as string
        newGame();      // Calls newGame function to see if the score gets reset 
    });

    test("should set the game score to zero", () => {
        //Picking out score key from game using dot notation as the target of the test
        expect(game.score).toEqual(0);    // Tests score to see if it reduced to zero 
    });

    test("should reset the currentGame array", () => {
        //Targetting the length of the currentGame array
        expect(game.currentGame.length).toBe(0);    // Tests currentGame array to see if it is empty and therefore no buttons have been clicked
    });

    test("should reset the playerMoves array", () => {
        //Targetting the length of the playerMoves array
        expect(game.playerMoves.length).toBe(0);    // Tests playerMoves array to see if it is empty and therefore no buttons have been clicked
    });

    test("should display 0 for the element with the id of score", () => {
        //Targetting the innerText of the score element in the DOM
        expect(document.getElementById("score").innerText).toEqual(0);   // Tests if the score is set to 0 in the DOM
    });
});