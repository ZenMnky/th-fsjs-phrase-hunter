/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * Vanilla JS
 * 
 * JS programmed by Justin Hager (ZenMnky) 🐒
 * 
 * 🤔 To do:
 *  - Modify design (css): change font, background, colors...
 *  - Prevent repeat phrases
 *      - maybe store prior winning phrases in an array and prevent from being selected until all phrases have been gone through OR the game is reset
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


if(game) {
    document.addEventListener('click', e => game.handleInteraction(e.target) );
    document.addEventListener('keydown', e => game.handleKeydown(e) );
}
 

