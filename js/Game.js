/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 */

 class Game{
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        return [
            new Phrase(`Dont get trouble in your mind`),
            new Phrase(`Your burrito is getting loose`),
            new Phrase(`This too shall pass`),
            new Phrase(`Death before dishonor`),
            new Phrase(`Always point the muzzle in a safe direction`)
            ];

    }
    
    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let num = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[num];           
    }
    
    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() { 
        const screenOverlay = document.querySelector('div#overlay');
        screenOverlay.style.display = 'none';
        const newPhrase = this.getRandomPhrase();
        this.activePhrase = newPhrase;
        newPhrase.addPhraseToDisplay();

    } 
    
    /**
    * Checks for winning move
    * @return { boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const phraseItems = document.querySelector('div#phrase ul').childNodes;
        let count = 0;
        phraseItems.forEach(item => {
            if (item.classList.contains('letter')
            && item.classList.contains('hidden') ) {
                count += 1;
            }
        })
        
        return ( (count === 0) ? true : false );
    }       
    
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        //Increase value of missed property
        this.missed += 1;
        
        //❤️Remove a heart
        const scoreboard = document.querySelector('div#scoreboard');
        let liveHearts = scoreboard.querySelectorAll('img[src="images/liveHeart.png"]');
        let lastLiveHeart = liveHearts[liveHearts.length - 1];
        lastLiveHeart.setAttribute('src', 'images/lostHeart.png');

        //Check if out of lives / game over ☠️
        if (this.missed === 5){
            this.gameOver(false);
        }
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Wether or not the user won the game
     */
    gameOver(gameWon){
        const screenOverlay = document.querySelector('div#overlay');
        const phraseDiv = document.querySelector('div#phrase');
        const gameOverH1 = screenOverlay.querySelector('h1#game-over-message');

        screenOverlay.style.display = 'block';

        if (gameWon){
            screenOverlay.className = 'win';
            gameOverH1.innerText = ` 😁 Victory ⚔️ `;
        } else {
            screenOverlay.className = 'lose';
            gameOverH1.innerText = 'Failure ☠️'; 
        }
    };

    /**
     * Handles onscreen keyboard button clicks
     * @param {HTMLButtonElement} button - The clicked button element
     */
    handleInteraction(button) {
        
        if (button.tagName === 'BUTTON'
            && button.classList.contains('key')) {
            
            button.setAttribute('disabled', '');
            let letter = button.innerText;
                        
            if (this.activePhrase.checkLetter(letter)){
                this.activePhrase.showMatchedLetter(letter);
                button.classList.add('chosen');
                
                if (this.checkForWin()) {
                    this.gameOver(true);
                }
            } else {
                button.classList.add('wrong');
                this.removeLife();
            }
        };
    }

    /**
     *  handleKeydown
     * 
     *  Allows user to use keyboard to play the game
     *  Matches the keyed character with the on-screen keyboard 
     */
    handleKeydown(key){
        //if the button is a letter, then find the corresponding button and pass it to the handleInteraction method

        const isLetter = new RegExp('^[a-z]$', 'i');
        let keyPressed = key.key.toLowerCase();
        let isLetterTest = isLetter.test(keyPressed);
        
        if (isLetterTest) {
            //select the corresponding li and pass it to handleInteraction()
            const keyButtons = document.querySelectorAll('button.key');
            const keyButtonsArray = Array.from(keyButtons);
               
            const correspondingButton = keyButtonsArray.find(index => (index.innerText === keyPressed));

            if (!correspondingButton.hasAttribute('disabled')){
                this.handleInteraction(correspondingButton);
            }
            
        }
    }

    /**
     * Resets the game
     * 
     * Removes all li elements from the phrase ul list
     * Enable all of the on-screen buttons
     * Reset each button's class to 'key' only
     * Reset heart images to display all live hearts
     */
    reset() {
        // 📜🚽 Clear list items from phrase list
        const phraseDiv = document.querySelector('div#phrase ul');
        phraseDiv.textContent = '';
        
        // :key: Reset key buttons' classes
        const qwertyButtons = document.querySelectorAll('button.key');
        qwertyButtons.forEach(element => {
            element.classList.remove('wrong');
            element.classList.remove('chosen');
            element.removeAttribute('disabled');
        
        });

        // Reset ❤️s
        const scoreboard = document.querySelector('div#scoreboard');
        const lostHearts = scoreboard.querySelectorAll('img[src="images/lostHeart.png"]');
        lostHearts.forEach(element => element.setAttribute('src','images/liveHeart.png'));


    }

}