/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * Vanilla JS
 * 
 * JS programmed by Justin Hager (ZenMnky) 🐒
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

 document.addEventListener('click', e => game.handleInteraction(e.target));


