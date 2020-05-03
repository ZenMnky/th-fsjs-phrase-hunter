/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         //phrase: this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but converted to all lower case.
            this.phrase = phrase;
    }

    /**
     * Display phrase on game board
     * adds letter placeholders to the display when the game starts
     * 
     */
    addPhraseToDisplay() {
        const phraseDiv = document.querySelector('div#phrase ul');
        // const phraseDivUl = phraseDiv.firstChild;

        let selectedPhrase = game.activePhrase['phrase'];
        let phraseAsArray = selectedPhrase.split("");
        
        phraseAsArray.forEach(value => {
            let newLi = document.createElement('li');
            let isLetter = new RegExp('[a-z]', 'i');
            let isWhitespace = new RegExp(' ');
            
            newLi.innerText = value;
            if (isLetter.test(value)){
                newLi.className = 'letter';
            } else if (isWhitespace.test(value)){
                newLi.className = 'space';
            }
            
            phraseDiv.appendChild(newLi);
        });

        
        console.log(selectedPhrase);
        console.log(phraseAsArray);     
        
        console.log(`Phrase div: `);
        console.log(phraseDiv);
    }

    /**
     * checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
     */

    /**
    * showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
    */
 }