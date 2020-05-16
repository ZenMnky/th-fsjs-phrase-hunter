/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * Vanilla JS
 * 
 * JS programmed by Justin Hager (ZenMnky) 🐒
 * 📅 2020-05-16
 * 
 * 👷 To do:
 *      💡 Improvements 💡
 *      - Prevent repeat phrases
 *          - maybe store prior winning phrases in an array and prevent from being selected until all phrases have been gone through OR the game is reset
 *      - If win, display active phrase
 * 
 * 🤔 Concern
 *      - When non-button event handlers for keydown and click fire on the start screen, it throws an error in the console:
 *          ⚠️ Uncaught TypeError: Cannot read property 'handleInteraction' of null
    at HTMLDocument.<anonymous> ⚠️
        - I tried implementing a check for an existing game before firing an eventHandler, but my method created more problems than it solved, so I left it as is.
 */

let game = null;

document.querySelector('button#btn__reset')
    .addEventListener('click', () => {
        if (game){
            game.reset();
        }
        game = new Game();
        game.startGame();
});


document.addEventListener('click', e => game.handleInteraction(e.target) );
document.addEventListener('keydown', e => game.handleKeydown(e) );

 

